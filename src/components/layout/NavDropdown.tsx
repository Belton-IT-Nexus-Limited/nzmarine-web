import { useEffect, useId, useRef, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import type { NavItem } from '@/content/types';
import { cn } from '@/lib/cn';

interface NavDropdownProps {
  item: NavItem;
}

/** Accessible disclosure menu for a top-level nav item with children. */
export function NavDropdown({ item }: NavDropdownProps): React.JSX.Element {
  const [open, setOpen] = useState(false);
  const menuId = useId();
  const containerRef = useRef<HTMLLIElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const itemRefs = useRef<Array<HTMLAnchorElement | null>>([]);
  const location = useLocation();
  const children = item.children ?? [];

  const sectionActive =
    item.to !== undefined && location.pathname.startsWith(item.to);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (!open) return;
    function onPointerDown(event: PointerEvent): void {
      if (!containerRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener('pointerdown', onPointerDown);
    return () => document.removeEventListener('pointerdown', onPointerDown);
  }, [open]);

  function focusItem(index: number): void {
    const clamped = (index + children.length) % children.length;
    itemRefs.current[clamped]?.focus();
  }

  function onButtonKeyDown(event: React.KeyboardEvent): void {
    if (event.key === 'ArrowDown' || event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      setOpen(true);
      requestAnimationFrame(() => focusItem(0));
    } else if (event.key === 'Escape') {
      setOpen(false);
    }
  }

  function onItemKeyDown(event: React.KeyboardEvent, index: number): void {
    if (event.key === 'ArrowDown') {
      event.preventDefault();
      focusItem(index + 1);
    } else if (event.key === 'ArrowUp') {
      event.preventDefault();
      focusItem(index - 1);
    } else if (event.key === 'Escape') {
      event.preventDefault();
      setOpen(false);
      buttonRef.current?.focus();
    } else if (event.key === 'Home') {
      event.preventDefault();
      focusItem(0);
    } else if (event.key === 'End') {
      event.preventDefault();
      focusItem(children.length - 1);
    }
  }

  return (
    <li ref={containerRef} className="relative">
      <button
        ref={buttonRef}
        type="button"
        aria-expanded={open}
        aria-controls={menuId}
        aria-haspopup="true"
        onClick={() => setOpen((prev) => !prev)}
        onKeyDown={onButtonKeyDown}
        className={cn(
          'inline-flex items-center gap-1 rounded-md px-2.5 py-2 text-sm font-medium text-foreground transition-colors hover:text-accent-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-surface',
          sectionActive && 'text-accent-700',
        )}
      >
        {item.label}
        <ChevronDown
          aria-hidden
          size={16}
          className={cn('transition-transform duration-fast', open && 'rotate-180')}
        />
      </button>

      {open && (
        <ul
          id={menuId}
          role="menu"
          aria-label={item.label}
          className="absolute left-0 top-full mt-1 min-w-56 rounded-lg border border-border bg-surface p-1.5 shadow-pop"
        >
          {children.map((child, index) => (
            <li key={child.label} role="none">
              <NavLink
                ref={(node) => {
                  itemRefs.current[index] = node;
                }}
                to={child.to ?? '#'}
                end
                role="menuitem"
                onKeyDown={(event) => onItemKeyDown(event, index)}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  cn(
                    'block rounded-md px-3 py-2 text-sm text-foreground hover:bg-surface-muted focus-visible:outline-none focus-visible:bg-surface-muted',
                    isActive && 'text-accent-700',
                  )
                }
              >
                {child.label}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}

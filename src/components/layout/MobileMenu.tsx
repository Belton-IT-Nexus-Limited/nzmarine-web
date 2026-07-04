import { useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { X } from 'lucide-react';
import { primaryNav } from '@/content/nav';
import { Button } from '@/components/ui/Button';
import { Wordmark } from './Wordmark';
import { cn } from '@/lib/cn';

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
  /** Ref of the hamburger that opened the menu, to restore focus on close. */
  returnFocusRef: React.RefObject<HTMLButtonElement | null>;
}

const FOCUSABLE =
  'a[href], button:not([disabled]), input, [tabindex]:not([tabindex="-1"])';

/** Full-screen mobile navigation drawer with focus trap, Esc close and scroll lock. */
export function MobileMenu({
  open,
  onClose,
  returnFocusRef,
}: MobileMenuProps): React.JSX.Element | null {
  const panelRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();

    function onKeyDown(event: KeyboardEvent): void {
      if (event.key === 'Escape') {
        event.preventDefault();
        onClose();
        return;
      }
      if (event.key !== 'Tab') return;
      const panel = panelRef.current;
      if (!panel) return;
      const items = Array.from(panel.querySelectorAll<HTMLElement>(FOCUSABLE));
      if (items.length === 0) return;
      const first = items[0];
      const last = items[items.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = previousOverflow;
      returnFocusRef.current?.focus();
    };
  }, [open, onClose, returnFocusRef]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      <button
        type="button"
        aria-label="Close menu"
        tabIndex={-1}
        className="absolute inset-0 bg-navy-950/40"
        onClick={onClose}
      />
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-label="Site navigation"
        className="absolute inset-y-0 right-0 flex w-full max-w-sm flex-col bg-surface shadow-pop"
      >
        <div className="flex items-center justify-between border-b border-border px-5 py-4">
          <Wordmark size={26} />
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            aria-label="Close menu"
            className="inline-flex size-10 items-center justify-center rounded-md text-foreground hover:bg-surface-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
          >
            <X aria-hidden size={22} />
          </button>
        </div>

        <nav aria-label="Primary" className="flex-1 overflow-y-auto px-3 py-4">
          <ul className="flex flex-col gap-1">
            {primaryNav.map((item) => (
              <li key={item.label}>
                <NavLink
                  to={item.to ?? '#'}
                  end={item.to === '/about'}
                  onClick={onClose}
                  className={({ isActive }) =>
                    cn(
                      'block rounded-md px-3 py-2.5 text-lg font-medium text-foreground hover:bg-surface-muted',
                      isActive && 'text-accent-700',
                    )
                  }
                >
                  {item.label}
                </NavLink>
                {item.children && (
                  <ul className="mb-1 ml-3 flex flex-col gap-0.5 border-l border-border pl-3">
                    {item.children.map((child) => (
                      <li key={child.label}>
                        <NavLink
                          to={child.to ?? '#'}
                          end
                          onClick={onClose}
                          className={({ isActive }) =>
                            cn(
                              'block rounded-md px-3 py-2 text-base text-muted-foreground hover:bg-surface-muted hover:text-foreground',
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
            ))}
          </ul>
        </nav>

        <div className="border-t border-border p-4">
          <Button to="/join" variant="primary" size="lg" className="w-full" onClick={onClose}>
            Join NZ Marine
          </Button>
        </div>
      </div>
    </div>
  );
}

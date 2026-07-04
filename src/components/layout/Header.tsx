import { useEffect, useId, useRef, useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { Menu, Search } from 'lucide-react';
import { primaryNav } from '@/content/nav';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/cn';
import { Wordmark } from './Wordmark';
import { NavDropdown } from './NavDropdown';
import { MobileMenu } from './MobileMenu';

/** Sticky site header: wordmark, primary nav with accessible dropdowns, search and Join CTA. */
export function Header(): React.JSX.Element {
  const [searchOpen, setSearchOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [query, setQuery] = useState('');
  const searchId = useId();
  const searchInputRef = useRef<HTMLInputElement>(null);
  const searchToggleRef = useRef<HTMLButtonElement>(null);
  const hamburgerRef = useRef<HTMLButtonElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (searchOpen) searchInputRef.current?.focus();
  }, [searchOpen]);

  function onSearchSubmit(event: React.FormEvent): void {
    event.preventDefault();
    const trimmed = query.trim();
    navigate(trimmed ? `/directory?q=${encodeURIComponent(trimmed)}` : '/directory');
    setSearchOpen(false);
    setQuery('');
  }

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-surface/85 backdrop-blur supports-[backdrop-filter]:bg-surface/75">
      <div className="mx-auto flex h-16 max-w-[var(--container-content)] items-center gap-4 px-4 sm:px-6 lg:px-8">
        <Link
          to="/"
          aria-label="NZ Marine home"
          className="shrink-0 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
        >
          <Wordmark size={26} />
        </Link>

        <nav aria-label="Primary" className="ml-auto hidden lg:block">
          <ul className="flex items-center gap-0.5">
            {primaryNav.map((item) =>
              item.children ? (
                <NavDropdown key={item.label} item={item} />
              ) : (
                <li key={item.label}>
                  <NavLink
                    to={item.to ?? '#'}
                    className={({ isActive }) =>
                      cn(
                        'relative inline-flex items-center rounded-md px-2.5 py-2 text-sm font-medium text-foreground transition-colors hover:text-accent-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-surface',
                        'after:absolute after:inset-x-2.5 after:-bottom-px after:h-0.5 after:scale-x-0 after:bg-accent-600 after:transition-transform after:duration-base',
                        isActive && 'text-accent-700 after:scale-x-100',
                      )
                    }
                  >
                    {item.label}
                  </NavLink>
                </li>
              ),
            )}
          </ul>
        </nav>

        <div className="ml-auto flex items-center gap-1.5 lg:ml-2">
          <button
            ref={searchToggleRef}
            type="button"
            aria-expanded={searchOpen}
            aria-controls={searchId}
            aria-label={searchOpen ? 'Close search' : 'Search the directory'}
            onClick={() => setSearchOpen((prev) => !prev)}
            className="inline-flex size-10 items-center justify-center rounded-md text-foreground transition-colors hover:bg-surface-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
          >
            <Search aria-hidden size={20} />
          </button>

          <div className="hidden lg:block">
            <Button to="/join" variant="primary" size="sm">
              Join NZ Marine
            </Button>
          </div>

          <button
            ref={hamburgerRef}
            type="button"
            aria-expanded={menuOpen}
            aria-label="Open menu"
            onClick={() => setMenuOpen(true)}
            className="inline-flex size-10 items-center justify-center rounded-md text-foreground transition-colors hover:bg-surface-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-surface lg:hidden"
          >
            <Menu aria-hidden size={22} />
          </button>
        </div>
      </div>

      {searchOpen && (
        <div className="border-t border-border bg-surface">
          <form
            id={searchId}
            onSubmit={onSearchSubmit}
            role="search"
            className="mx-auto flex max-w-[var(--container-content)] items-center gap-3 px-4 py-3 sm:px-6 lg:px-8"
          >
            <label htmlFor={`${searchId}-input`} className="sr-only">
              Search the member directory
            </label>
            <div className="relative flex-1">
              <Search
                aria-hidden
                size={18}
                className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
              />
              <input
                ref={searchInputRef}
                id={`${searchId}-input`}
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                onKeyDown={(event) => {
                  if (event.key === 'Escape') {
                    setSearchOpen(false);
                    searchToggleRef.current?.focus();
                  }
                }}
                placeholder="Search the member directory"
                className="h-11 w-full rounded-md border border-input bg-surface pl-10 pr-3 text-base text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
              />
            </div>
            <Button type="submit" variant="secondary" size="md">
              Find a member
            </Button>
          </form>
        </div>
      )}

      <MobileMenu
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        returnFocusRef={hamburgerRef}
      />
    </header>
  );
}

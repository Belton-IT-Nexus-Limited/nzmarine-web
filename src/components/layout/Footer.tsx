import { Link } from 'react-router-dom';
import { Facebook, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import { cn } from '@/lib/cn';
import { footerNav } from '@/content/nav';
import { site } from '@/content/site';
import { Container } from '@/components/ui/Container';
import { Wordmark } from '@/components/layout/Wordmark';

const linkClass =
  'text-ink-muted-foreground underline-offset-4 transition-colors hover:text-accent-300 hover:underline focus-visible:text-accent-300 focus-visible:underline focus-visible:outline-none';

const currentYear = new Date().getFullYear();

/** Site footer: navy band with positioning, link columns, contact and legal row. */
export function Footer(): React.JSX.Element {
  return (
    <footer className="bg-ink text-ink-foreground">
      <Container className="py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_2fr]">
          <div className="max-w-sm">
            <Link
              to="/"
              className="inline-flex rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-400 focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
              aria-label={`${site.short} home`}
            >
              <Wordmark className="h-8 w-auto" tone="light" />
            </Link>
            <p className="mt-5 text-base text-ink-foreground">
              {site.tagline}
            </p>
            <p className="mt-4 text-sm text-ink-muted-foreground">
              Look for the Recognised Member mark. It tells you a marine business
              meets our Code of Ethics and has been vetted by NZ Marine.
            </p>
          </div>

          <nav aria-label="Footer" className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {footerNav.map((column) => (
              <div key={column.title}>
                <h2 className="text-sm font-semibold tracking-wide text-ink-foreground">
                  {column.title}
                </h2>
                <ul className="mt-4 space-y-3 text-sm">
                  {column.items.map((item) => (
                    <li key={`${column.title}-${item.label}`}>
                      <FooterLink item={item} />
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        <div className="mt-14 grid gap-8 border-t border-ink-border pt-10 sm:grid-cols-2 lg:grid-cols-[2fr_1fr]">
          <ul className="space-y-3 text-sm text-ink-muted-foreground">
            <li>
              <a
                href={site.phoneHref}
                className={cn(linkClass, 'inline-flex items-center gap-3')}
              >
                <Phone className="size-4 shrink-0 text-accent-300" aria-hidden />
                <span>{site.phone}</span>
              </a>
            </li>
            <li>
              <a
                href={`mailto:${site.email}`}
                className={cn(linkClass, 'inline-flex items-center gap-3')}
              >
                <Mail className="size-4 shrink-0 text-accent-300" aria-hidden />
                <span>{site.email}</span>
              </a>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 size-4 shrink-0 text-accent-300" aria-hidden />
              <address className="not-italic">
                {site.address.line1}, {site.address.country}
              </address>
            </li>
          </ul>

          <div className="flex items-start gap-3 sm:justify-end">
            <SocialLink
              href={site.social.facebook}
              label={`${site.short} on Facebook`}
            >
              <Facebook className="size-5" aria-hidden />
            </SocialLink>
            <SocialLink
              href={site.social.linkedin}
              label={`${site.short} on LinkedIn`}
            >
              <Linkedin className="size-5" aria-hidden />
            </SocialLink>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-ink-border pt-8 text-xs text-ink-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {currentYear} {site.name}. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <Link to="/privacy" className={linkClass}>
              Privacy
            </Link>
            <span>Site by the NZ Marine team.</span>
          </div>
        </div>
      </Container>
    </footer>
  );
}

function FooterLink({ item }: { item: { label: string; to?: string; href?: string } }): React.JSX.Element {
  if (item.href) {
    return (
      <a href={item.href} className={linkClass}>
        {item.label}
      </a>
    );
  }
  return (
    <Link to={item.to ?? '/'} className={linkClass}>
      {item.label}
    </Link>
  );
}

function SocialLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}): React.JSX.Element {
  return (
    <a
      href={href}
      aria-label={label}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center justify-center rounded-md border border-ink-border p-2.5 text-ink-muted-foreground transition-colors hover:border-accent-400 hover:text-accent-300 focus-visible:text-accent-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-400 focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
    >
      {children}
    </a>
  );
}

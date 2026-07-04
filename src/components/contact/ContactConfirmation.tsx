import type { ReactElement } from 'react';
import { CheckCircle2 } from 'lucide-react';
import { site } from '@/content/site';

/** Accessible success panel shown after a simulated enquiry submit. */
export function ContactConfirmation({ name }: { name: string }): ReactElement {
  return (
    <div role="status" className="rounded-lg border border-accent-200 bg-accent-50 p-6 sm:p-8">
      <div className="flex items-start gap-3">
        <CheckCircle2 aria-hidden="true" className="mt-0.5 size-6 shrink-0 text-accent-700" />
        <div>
          <h2 className="font-display text-2xl text-foreground">Thanks, your message is on its way</h2>
          <p className="mt-3 text-base text-foreground">
            We have your enquiry{name ? `, ${name}` : ''}. The right person on the team will read it
            and reply, usually within two working days.
          </p>
          <p className="mt-3 text-base text-muted-foreground">
            If it is urgent, call the office on{' '}
            <a href={site.phoneHref} className="text-link underline-offset-2 hover:underline">
              {site.phone}
            </a>{' '}
            during office hours and we will point you to the right team.
          </p>
        </div>
      </div>
    </div>
  );
}

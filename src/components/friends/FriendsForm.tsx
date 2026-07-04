import { useId, useRef, useState, type FormEvent, type ReactElement } from 'react';
import { CheckCircle2, Send } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Field, Input } from '@/components/ui/Field';
import { site } from '@/content/site';

type Errors = { name?: string; email?: string };

function validate(name: string, email: string): Errors {
  const errors: Errors = {};
  if (!name.trim()) errors.name = 'Enter your name.';
  if (!email.trim()) {
    errors.email = 'Enter an email address.';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
    errors.email = 'Enter a valid email address, for example name@example.com.';
  }
  return errors;
}

/**
 * Inline name + email signup for Friends of NZ Marine. This is a static site, so
 * the submit is simulated: on success it swaps to a focused confirmation that
 * explains the double opt-in step. Every field has a real label and error wiring.
 */
export function FriendsForm(): ReactElement {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);
  const statusRef = useRef<HTMLDivElement>(null);
  const noteId = useId();

  function handleSubmit(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    const nextErrors = validate(name, email);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;
    setSubmitted(true);
    window.requestAnimationFrame(() => statusRef.current?.focus());
  }

  if (submitted) {
    return (
      <div
        ref={statusRef}
        tabIndex={-1}
        aria-live="polite"
        className="rounded-lg border border-border bg-surface p-6 shadow-card focus-visible:outline-none sm:p-8"
      >
        <span className="flex size-12 items-center justify-center rounded-full bg-accent-50 text-accent-700">
          <CheckCircle2 aria-hidden="true" className="size-6" />
        </span>
        <h2 className="mt-5 font-display text-2xl text-foreground">Almost there</h2>
        <p className="mt-3 text-base text-muted-foreground">
          Thanks for signing up. We have sent a confirmation email to{' '}
          <span className="font-medium text-foreground">{email.trim()}</span>. Click the link in it
          to finish joining Friends of NZ Marine. If it does not arrive in a few minutes, check your
          spam folder or email{' '}
          <a href={`mailto:${site.email}`} className="text-link underline-offset-2 hover:underline">
            {site.email}
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form
      noValidate
      onSubmit={handleSubmit}
      className="rounded-lg border border-border bg-surface p-6 shadow-card sm:p-8"
    >
      <h2 className="font-display text-2xl text-foreground">Become a Friend of NZ Marine</h2>
      <p className="mt-2 text-base text-muted-foreground">
        It is free, and you can unsubscribe from any newsletter we send.
      </p>
      <div className="mt-6 flex flex-col gap-5">
        <Field label="Your name" required error={errors.name}>
          <Input value={name} autoComplete="name" onChange={(event) => setName(event.target.value)} />
        </Field>
        <Field label="Email address" required error={errors.email}>
          <Input
            type="email"
            inputMode="email"
            value={email}
            autoComplete="email"
            aria-describedby={noteId}
            onChange={(event) => setEmail(event.target.value)}
          />
        </Field>
        <p id={noteId} className="text-sm text-muted-foreground">
          When you submit this form we send a confirmation email. You need to click the link in it
          before we add you to the list, so we know the address is yours. We only use your details
          for the Friends of NZ Marine newsletter.
        </p>
        <Button type="submit" variant="accent" size="lg" className="self-start">
          <Send aria-hidden="true" />
          Join as a Friend
        </Button>
      </div>
    </form>
  );
}

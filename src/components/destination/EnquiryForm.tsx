import { useId, useRef, useState, type FormEvent, type ReactElement } from 'react';
import { CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Field, FormRow, Input, Select, Textarea } from '@/components/ui/Field';

type EnquiryValues = {
  name: string;
  email: string;
  vessel: string;
  season: string;
  message: string;
};

type EnquiryErrors = Partial<Record<keyof EnquiryValues, string>>;

const initialEnquiry: EnquiryValues = {
  name: '',
  email: '',
  vessel: '',
  season: '',
  message: '',
};

const seasons = [
  'This season (summer 2026/27)',
  'Next season (summer 2027/28)',
  'Still deciding',
] as const;

function validateEnquiry(values: EnquiryValues): EnquiryErrors {
  const errors: EnquiryErrors = {};
  if (!values.name.trim()) errors.name = 'Tell us who we are speaking with.';
  if (!values.email.trim()) {
    errors.email = 'Enter an email address.';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
    errors.email = 'Enter a valid email address, for example name@vessel.com.';
  }
  if (!values.message.trim()) errors.message = 'Tell us what you need help with.';
  return errors;
}

function EnquiryConfirmation({ name }: { name: string }): ReactElement {
  return (
    <div className="flex flex-col items-start">
      <span
        aria-hidden="true"
        className="inline-flex size-12 items-center justify-center rounded-md bg-accent-50 text-accent-700"
      >
        <CheckCircle2 size={24} strokeWidth={2} />
      </span>
      <h3 className="mt-5 font-display text-2xl text-foreground">
        Thanks, {name || 'we have your enquiry'}.
      </h3>
      <p className="mt-3 text-lg text-muted-foreground">
        Your enquiry is with the destination team and we reply within two working days, usually
        sooner in the lead-up to the season. We can point you to the right yards and agents for the
        work you have in mind.
      </p>
    </div>
  );
}

/**
 * Inline lead capture for visiting owners and captains. This is a static site,
 * so submission is validated client-side and shows a confirmation in place.
 */
export function EnquiryForm(): ReactElement {
  const [values, setValues] = useState<EnquiryValues>(initialEnquiry);
  const [errors, setErrors] = useState<EnquiryErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const summaryRef = useRef<HTMLDivElement>(null);
  const summaryId = useId();

  function update<K extends keyof EnquiryValues>(key: K, value: EnquiryValues[K]): void {
    setValues((prev) => ({ ...prev, [key]: value }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    const nextErrors = validateEnquiry(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      summaryRef.current?.focus();
      return;
    }
    setSubmitted(true);
  }

  if (submitted) return <EnquiryConfirmation name={values.name.trim()} />;

  const errorCount = Object.keys(errors).length;

  return (
    <form noValidate onSubmit={handleSubmit} className="flex flex-col gap-6">
      <div
        ref={summaryRef}
        tabIndex={-1}
        aria-live="assertive"
        id={summaryId}
        className="focus-visible:outline-none"
      >
        {errorCount > 0 ? (
          <div className="rounded-md border border-danger-600 bg-surface p-4">
            <p className="text-sm font-semibold text-danger-600">
              Please check {errorCount === 1 ? 'this field' : 'these fields'} and try again.
            </p>
          </div>
        ) : null}
      </div>

      <FormRow>
        <Field label="Your name" required error={errors.name}>
          <Input
            value={values.name}
            autoComplete="name"
            onChange={(e) => update('name', e.target.value)}
          />
        </Field>
        <Field label="Email" required error={errors.email}>
          <Input
            type="email"
            inputMode="email"
            value={values.email}
            autoComplete="email"
            onChange={(e) => update('email', e.target.value)}
          />
        </Field>
      </FormRow>

      <FormRow>
        <Field label="Vessel" hint="Name or length, if you would like to share it.">
          <Input value={values.vessel} onChange={(e) => update('vessel', e.target.value)} />
        </Field>
        <Field label="When are you planning to visit?">
          <Select value={values.season} onChange={(e) => update('season', e.target.value)}>
            <option value="">Choose a season</option>
            {seasons.map((season) => (
              <option key={season} value={season}>
                {season}
              </option>
            ))}
          </Select>
        </Field>
      </FormRow>

      <Field
        label="What can we help with?"
        required
        error={errors.message}
        hint="Refit, servicing, an agent, provisioning, clearance, or where to cruise. A line or two is plenty."
      >
        <Textarea
          value={values.message}
          rows={4}
          onChange={(e) => update('message', e.target.value)}
        />
      </Field>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <Button type="submit" variant="primary" size="lg">
          Send enquiry
        </Button>
        <p className="text-sm text-muted-foreground">We reply within two working days.</p>
      </div>
    </form>
  );
}

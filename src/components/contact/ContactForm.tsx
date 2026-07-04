import { useId, useRef, useState, type FormEvent, type ReactElement } from 'react';
import { Button } from '@/components/ui/Button';
import { Field, FormRow, Input, Select, Textarea } from '@/components/ui/Field';
import { ContactConfirmation } from './ContactConfirmation';

const enquiryTypes = [
  'Membership',
  'Export',
  'Destination NZ',
  'Events',
  'Media',
  'Other',
] as const;

type FormValues = {
  name: string;
  email: string;
  organisation: string;
  enquiryType: string;
  message: string;
};

type Errors = Partial<Record<keyof FormValues, string>>;

const initialValues: FormValues = {
  name: '',
  email: '',
  organisation: '',
  enquiryType: '',
  message: '',
};

function validate(values: FormValues): Errors {
  const errors: Errors = {};
  if (!values.name.trim()) errors.name = 'Enter your name.';
  if (!values.email.trim()) {
    errors.email = 'Enter an email address.';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
    errors.email = 'Enter a valid email address, for example name@company.co.nz.';
  }
  if (!values.enquiryType) errors.enquiryType = 'Choose what your enquiry is about.';
  if (!values.message.trim()) errors.message = 'Tell us how we can help.';
  return errors;
}

/**
 * Accessible enquiry form. Static site, so the submit is simulated and routed by
 * the enquiry type the sender picks. Replaces the old unlabelled three-field form.
 */
export function ContactForm(): ReactElement {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);
  const summaryRef = useRef<HTMLDivElement>(null);
  const summaryId = useId();

  function update<K extends keyof FormValues>(key: K, value: FormValues[K]): void {
    setValues((prev) => ({ ...prev, [key]: value }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      summaryRef.current?.focus();
      return;
    }
    setSubmitted(true);
  }

  if (submitted) return <ContactConfirmation name={values.name.trim()} />;

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
        <Field label="Organisation" hint="The business or group you are enquiring on behalf of.">
          <Input
            value={values.organisation}
            autoComplete="organization"
            onChange={(e) => update('organisation', e.target.value)}
          />
        </Field>
        <Field
          label="What is your enquiry about?"
          required
          error={errors.enquiryType}
        >
          <Select
            value={values.enquiryType}
            onChange={(e) => update('enquiryType', e.target.value)}
          >
            <option value="" disabled>
              Choose a topic
            </option>
            {enquiryTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </Select>
        </Field>
      </FormRow>

      <Field
        label="How can we help?"
        required
        error={errors.message}
        hint="A few sentences is plenty. The more you tell us, the better we can point you to the right team."
      >
        <Textarea
          value={values.message}
          rows={6}
          maxLength={2000}
          onChange={(e) => update('message', e.target.value)}
        />
      </Field>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <Button type="submit" variant="primary" size="lg">
          Send your enquiry
        </Button>
        <p className="text-sm text-muted-foreground">
          We reply within two working days.
        </p>
      </div>
    </form>
  );
}

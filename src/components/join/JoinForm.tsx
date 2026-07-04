import { useId, useRef, useState, type FormEvent, type ReactElement } from 'react';
import { Button } from '@/components/ui/Button';
import {
  Checkbox,
  Field,
  Fieldset,
  FormRow,
  Input,
  Select,
  Textarea,
} from '@/components/ui/Field';
import { sectorGroups } from '@/content/sectorGroups';
import { cn } from '@/lib/cn';
import { JoinConfirmation } from './JoinConfirmation';

const regions = ['Auckland', 'Whangārei', 'Tauranga', 'Christchurch', 'Nelson'] as const;

const employeeBands = [
  '1 to 5 people',
  '6 to 20 people',
  '21 to 50 people',
  '51 to 150 people',
  'More than 150 people',
] as const;

type FormValues = {
  companyName: string;
  tradingName: string;
  website: string;
  region: string;
  contactName: string;
  contactRole: string;
  email: string;
  phone: string;
  sectors: string[];
  employees: string;
  description: string;
  agree: boolean;
};

type Errors = Partial<Record<keyof FormValues, string>>;

const initialValues: FormValues = {
  companyName: '',
  tradingName: '',
  website: '',
  region: '',
  contactName: '',
  contactRole: '',
  email: '',
  phone: '',
  sectors: [],
  employees: '',
  description: '',
  agree: false,
};

function validate(values: FormValues): Errors {
  const errors: Errors = {};
  if (!values.companyName.trim()) errors.companyName = 'Enter your company name.';
  if (!values.region) errors.region = 'Choose the region your business is based in.';
  if (!values.contactName.trim()) errors.contactName = 'Enter a contact name.';
  if (!values.contactRole.trim()) errors.contactRole = 'Enter the contact’s role.';
  if (!values.email.trim()) {
    errors.email = 'Enter an email address.';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
    errors.email = 'Enter a valid email address, for example name@company.co.nz.';
  }
  if (!values.phone.trim()) errors.phone = 'Enter a phone number we can reach you on.';
  if (values.sectors.length === 0) errors.sectors = 'Choose at least one sector group.';
  if (!values.employees) errors.employees = 'Tell us roughly how many people you employ.';
  if (!values.agree) errors.agree = 'You need to agree to the Code of Ethics to apply.';
  return errors;
}

/** Multi-section membership application. Static: submission is simulated, no payment is taken. */
export function JoinForm(): ReactElement {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);
  const summaryRef = useRef<HTMLDivElement>(null);
  const summaryId = useId();

  function update<K extends keyof FormValues>(key: K, value: FormValues[K]): void {
    setValues((prev) => ({ ...prev, [key]: value }));
  }

  function toggleSector(name: string, checked: boolean): void {
    setValues((prev) => ({
      ...prev,
      sectors: checked
        ? [...prev.sectors, name]
        : prev.sectors.filter((s) => s !== name),
    }));
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

  if (submitted) return <JoinConfirmation company={values.companyName.trim()} />;

  const errorList = Object.entries(errors);

  return (
    <form noValidate onSubmit={handleSubmit} className="flex flex-col gap-10">
      <div
        ref={summaryRef}
        tabIndex={-1}
        aria-live="assertive"
        id={summaryId}
        className="focus-visible:outline-none"
      >
        {errorList.length > 0 ? (
          <div className="rounded-md border border-danger-600 bg-surface p-4">
            <p className="text-sm font-semibold text-danger-600">
              Please check {errorList.length === 1 ? 'this field' : 'these fields'} and try again.
            </p>
          </div>
        ) : null}
      </div>

      <fieldset className="flex flex-col gap-5">
        <legend className="font-display text-xl text-foreground">Company details</legend>
        <FormRow>
          <Field label="Company name" required error={errors.companyName}>
            <Input
              value={values.companyName}
              autoComplete="organization"
              onChange={(e) => update('companyName', e.target.value)}
            />
          </Field>
          <Field label="Trading name" hint="If different from your registered name.">
            <Input
              value={values.tradingName}
              onChange={(e) => update('tradingName', e.target.value)}
            />
          </Field>
        </FormRow>
        <FormRow>
          <Field label="Website">
            <Input
              type="url"
              inputMode="url"
              placeholder="https://"
              value={values.website}
              autoComplete="url"
              onChange={(e) => update('website', e.target.value)}
            />
          </Field>
          <Field label="Region" required error={errors.region}>
            <Select value={values.region} onChange={(e) => update('region', e.target.value)}>
              <option value="" disabled>
                Choose a region
              </option>
              {regions.map((region) => (
                <option key={region} value={region}>
                  {region}
                </option>
              ))}
            </Select>
          </Field>
        </FormRow>
      </fieldset>

      <fieldset className="flex flex-col gap-5">
        <legend className="font-display text-xl text-foreground">Primary contact</legend>
        <FormRow>
          <Field label="Full name" required error={errors.contactName}>
            <Input
              value={values.contactName}
              autoComplete="name"
              onChange={(e) => update('contactName', e.target.value)}
            />
          </Field>
          <Field label="Role" required error={errors.contactRole}>
            <Input
              value={values.contactRole}
              placeholder="Owner, General Manager"
              autoComplete="organization-title"
              onChange={(e) => update('contactRole', e.target.value)}
            />
          </Field>
        </FormRow>
        <FormRow>
          <Field label="Email" required error={errors.email}>
            <Input
              type="email"
              inputMode="email"
              value={values.email}
              autoComplete="email"
              onChange={(e) => update('email', e.target.value)}
            />
          </Field>
          <Field label="Phone" required error={errors.phone}>
            <Input
              type="tel"
              inputMode="tel"
              value={values.phone}
              autoComplete="tel"
              onChange={(e) => update('phone', e.target.value)}
            />
          </Field>
        </FormRow>
      </fieldset>

      <fieldset className="flex flex-col gap-5">
        <legend className="font-display text-xl text-foreground">About your business</legend>
        <Fieldset
          legend="Which sector groups fit your business?"
          hint="Choose every group that applies. We use this to place you with the right people."
        >
          <div className="grid gap-3 sm:grid-cols-2">
            {sectorGroups.map((group) => (
              <Checkbox
                key={group.slug}
                label={group.name}
                checked={values.sectors.includes(group.name)}
                onChange={(e) => toggleSector(group.name, e.target.checked)}
              />
            ))}
          </div>
          {errors.sectors ? (
            <p className="text-sm font-medium text-danger-600">{errors.sectors}</p>
          ) : null}
        </Fieldset>
        <Field label="How many people do you employ?" required error={errors.employees}>
          <Select value={values.employees} onChange={(e) => update('employees', e.target.value)}>
            <option value="" disabled>
              Choose a range
            </option>
            {employeeBands.map((band) => (
              <option key={band} value={band}>
                {band}
              </option>
            ))}
          </Select>
        </Field>
        <Field
          label="Tell us about your business"
          hint="A few sentences on what you do and the markets you work in."
        >
          <Textarea
            value={values.description}
            rows={4}
            onChange={(e) => update('description', e.target.value)}
          />
        </Field>
      </fieldset>

      <fieldset className="flex flex-col gap-4">
        <legend className="font-display text-xl text-foreground">Agreement</legend>
        <div className={cn('rounded-md border bg-surface p-4', errors.agree ? 'border-danger-600' : 'border-border')}>
          <Checkbox
            label="My business agrees to abide by the NZ Marine Code of Ethics as a Recognised Member."
            checked={values.agree}
            onChange={(e) => update('agree', e.target.checked)}
          />
          {errors.agree ? (
            <p className="mt-2 text-sm font-medium text-danger-600">{errors.agree}</p>
          ) : null}
        </div>
      </fieldset>

      <div className="flex flex-col gap-3 rounded-lg border border-border bg-surface-muted p-5 sm:flex-row sm:items-center sm:p-6">
        <Button type="submit" variant="primary" size="lg">
          Send my application
        </Button>
        <p className="text-sm text-muted-foreground">
          We reply within two working days, and there is no payment to make now. You can change any
          detail when we talk.
        </p>
      </div>
    </form>
  );
}

import {
  createContext,
  forwardRef,
  useContext,
  useId,
  type InputHTMLAttributes,
  type LabelHTMLAttributes,
  type ReactNode,
  type Ref,
  type SelectHTMLAttributes,
  type TextareaHTMLAttributes,
} from 'react';
import { cn } from '@/lib/cn';

/** Accessible form primitives. Field wires label, control, hint and error ids
 * so screen readers announce the name, description and validation state. */

type FieldContextValue = {
  controlId: string;
  hintId: string;
  errorId: string;
  hasError: boolean;
  required: boolean;
  describedBy: string | undefined;
};

const FieldContext = createContext<FieldContextValue | null>(null);

const focusRing =
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background';

const controlBase = cn(
  'block w-full rounded-md border bg-surface px-3.5 py-2.5 text-base text-foreground',
  'placeholder:text-muted-foreground/80 shadow-xs transition-colors duration-fast',
  'disabled:cursor-not-allowed disabled:opacity-60',
  focusRing,
);

function controlBorder(hasError: boolean): string {
  return hasError
    ? 'border-danger-600 focus-visible:ring-danger-600'
    : 'border-input hover:border-border-strong';
}

export type FieldProps = {
  label: string;
  /** Short helper text shown under the control. */
  hint?: string;
  /** Error message; presence flags the control as invalid. */
  error?: string;
  required?: boolean;
  /** Hide the visible label while keeping it available to assistive tech. */
  labelHidden?: boolean;
  className?: string;
  children: ReactNode;
};

/** Wraps a label, a single control and its hint/error message. */
export function Field({
  label,
  hint,
  error,
  required = false,
  labelHidden = false,
  className,
  children,
}: FieldProps): React.JSX.Element {
  const controlId = useId();
  const hintId = `${controlId}-hint`;
  const errorId = `${controlId}-error`;
  const hasError = Boolean(error);
  const describedBy =
    cn(hint ? hintId : undefined, hasError ? errorId : undefined) || undefined;

  return (
    <FieldContext.Provider
      value={{ controlId, hintId, errorId, hasError, required, describedBy }}
    >
      <div className={cn('flex flex-col gap-1.5', className)}>
        <Label htmlFor={controlId} className={cn(labelHidden && 'sr-only')}>
          {label}
          {required ? (
            <span className="text-danger-600"> *</span>
          ) : (
            <span className="text-muted-foreground"> (optional)</span>
          )}
        </Label>
        {children}
        {hint && !hasError ? (
          <p id={hintId} className="text-sm text-muted-foreground">
            {hint}
          </p>
        ) : null}
        {hasError ? (
          <p id={errorId} className="text-sm font-medium text-danger-600">
            {error}
          </p>
        ) : null}
      </div>
    </FieldContext.Provider>
  );
}

export type LabelProps = LabelHTMLAttributes<HTMLLabelElement>;

/** Standalone label; Field supplies htmlFor automatically when nested. */
export function Label({ className, children, ...rest }: LabelProps): React.JSX.Element {
  return (
    <label
      className={cn('text-sm font-medium text-foreground', className)}
      {...rest}
    >
      {children}
    </label>
  );
}

function ariaFromContext(
  ctx: FieldContextValue | null,
  explicitDescribedBy: string | undefined,
): {
  id: string | undefined;
  required: boolean | undefined;
  'aria-invalid': boolean | undefined;
  'aria-describedby': string | undefined;
} {
  if (!ctx) {
    return {
      id: undefined,
      required: undefined,
      'aria-invalid': undefined,
      'aria-describedby': explicitDescribedBy,
    };
  }
  return {
    id: ctx.controlId,
    required: ctx.required || undefined,
    'aria-invalid': ctx.hasError || undefined,
    'aria-describedby': cn(ctx.describedBy, explicitDescribedBy) || undefined,
  };
}

export type InputProps = InputHTMLAttributes<HTMLInputElement>;

/** Text input; placeholder is a hint, never a substitute for the label. */
export const Input = forwardRef(function Input(
  { className, id, required, 'aria-describedby': describedBy, ...rest }: InputProps,
  ref: Ref<HTMLInputElement>,
): React.JSX.Element {
  const ctx = useContext(FieldContext);
  const fromCtx = ariaFromContext(ctx, describedBy);
  return (
    <input
      ref={ref}
      id={id ?? fromCtx.id}
      required={required ?? fromCtx.required}
      aria-invalid={rest['aria-invalid'] ?? fromCtx['aria-invalid']}
      aria-describedby={fromCtx['aria-describedby']}
      className={cn(controlBase, controlBorder(ctx?.hasError ?? false), className)}
      {...rest}
    />
  );
});

export type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement>;

/** Multi-line text control. */
export const Textarea = forwardRef(function Textarea(
  { className, id, required, rows = 5, 'aria-describedby': describedBy, ...rest }: TextareaProps,
  ref: Ref<HTMLTextAreaElement>,
): React.JSX.Element {
  const ctx = useContext(FieldContext);
  const fromCtx = ariaFromContext(ctx, describedBy);
  return (
    <textarea
      ref={ref}
      id={id ?? fromCtx.id}
      rows={rows}
      required={required ?? fromCtx.required}
      aria-invalid={rest['aria-invalid'] ?? fromCtx['aria-invalid']}
      aria-describedby={fromCtx['aria-describedby']}
      className={cn(controlBase, 'resize-y', controlBorder(ctx?.hasError ?? false), className)}
      {...rest}
    />
  );
});

export type SelectProps = SelectHTMLAttributes<HTMLSelectElement>;

/** Native select for short, fixed option lists. */
export const Select = forwardRef(function Select(
  { className, id, required, children, 'aria-describedby': describedBy, ...rest }: SelectProps,
  ref: Ref<HTMLSelectElement>,
): React.JSX.Element {
  const ctx = useContext(FieldContext);
  const fromCtx = ariaFromContext(ctx, describedBy);
  return (
    <select
      ref={ref}
      id={id ?? fromCtx.id}
      required={required ?? fromCtx.required}
      aria-invalid={rest['aria-invalid'] ?? fromCtx['aria-invalid']}
      aria-describedby={fromCtx['aria-describedby']}
      className={cn(controlBase, 'appearance-none pr-9', controlBorder(ctx?.hasError ?? false), className)}
      {...rest}
    >
      {children}
    </select>
  );
});

export type ChoiceProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> & {
  label: ReactNode;
};

const choiceControl = cn(
  'mt-0.5 h-4 w-4 shrink-0 border border-input bg-surface text-accent-600',
  'accent-accent-600 transition-colors duration-fast disabled:opacity-60',
  focusRing,
);

function makeChoice(
  type: 'checkbox' | 'radio',
  shape: string,
): (props: ChoiceProps, ref: Ref<HTMLInputElement>) => React.JSX.Element {
  return function Choice({ className, label, id, ...rest }, ref): React.JSX.Element {
    const generatedId = useId();
    const controlId = id ?? generatedId;
    return (
      <div className="flex items-start gap-2.5">
        <input
          ref={ref}
          id={controlId}
          type={type}
          className={cn(choiceControl, shape, className)}
          {...rest}
        />
        <label htmlFor={controlId} className="text-sm text-foreground">
          {label}
        </label>
      </div>
    );
  };
}

/** Single checkbox with an associated label. */
export const Checkbox = forwardRef(makeChoice('checkbox', 'rounded-xs'));

/** Single radio with an associated label; group with a shared name + Fieldset. */
export const Radio = forwardRef(makeChoice('radio', 'rounded-full'));

export type FormRowProps = {
  /** Number of columns from the sm breakpoint up. */
  columns?: 2 | 3;
  className?: string;
  children: ReactNode;
};

/** Lays fields out side by side on wider viewports, stacked on mobile. */
export function FormRow({ columns = 2, className, children }: FormRowProps): React.JSX.Element {
  return (
    <div
      className={cn(
        'grid grid-cols-1 gap-4',
        columns === 2 ? 'sm:grid-cols-2' : 'sm:grid-cols-3',
        className,
      )}
    >
      {children}
    </div>
  );
}

export type FieldsetProps = {
  legend: string;
  hint?: string;
  className?: string;
  children: ReactNode;
};

/** Groups related controls (checkbox/radio sets) under a visible legend. */
export function Fieldset({ legend, hint, className, children }: FieldsetProps): React.JSX.Element {
  const hintId = useId();
  return (
    <fieldset
      className={cn('flex flex-col gap-3', className)}
      aria-describedby={hint ? hintId : undefined}
    >
      <legend className="text-sm font-medium text-foreground">{legend}</legend>
      {hint ? (
        <p id={hintId} className="text-sm text-muted-foreground">
          {hint}
        </p>
      ) : null}
      {children}
    </fieldset>
  );
}

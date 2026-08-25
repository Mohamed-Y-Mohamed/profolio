import type { InputHTMLAttributes, TextareaHTMLAttributes } from "react";

const control =
  "w-full bg-bg border rounded-[3px] px-[0.95rem] py-[0.85rem] t-sm font-sans transition-colors duration-300 placeholder:text-ink-4 focus:outline-none focus:bg-raise";

function Shell({
  id,
  label,
  required,
  error,
  children,
}: {
  id: string;
  label: string;
  required?: boolean;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor={id}
        className="font-mono text-[0.63rem] uppercase tracking-[0.14em] text-ink-3"
      >
        {label} {required && <span className="accent">*</span>}
      </label>
      {children}
      <span
        className={`font-mono text-[0.62rem] tracking-[0.06em] text-bad transition-opacity duration-200 ${
          error ? "opacity-100" : "opacity-0"
        }`}
      >
        {error || " "}
      </span>
    </div>
  );
}

export function TextField({
  id,
  label,
  error,
  required,
  ...rest
}: InputHTMLAttributes<HTMLInputElement> & {
  id: string;
  label: string;
  error?: string;
}) {
  return (
    <Shell id={id} label={label} required={required} error={error}>
      <input
        id={id}
        aria-invalid={!!error}
        className={`${control} ${error ? "border-bad" : "border-line focus:border-accent-soft"}`}
        style={error ? undefined : { borderColor: undefined }}
        {...rest}
      />
    </Shell>
  );
}

export function TextAreaField({
  id,
  label,
  error,
  required,
  ...rest
}: TextareaHTMLAttributes<HTMLTextAreaElement> & {
  id: string;
  label: string;
  error?: string;
}) {
  return (
    <Shell id={id} label={label} required={required} error={error}>
      <textarea
        id={id}
        aria-invalid={!!error}
        className={`${control} resize-y min-h-[140px] leading-[1.6] ${
          error ? "border-bad" : "border-line focus:border-accent-soft"
        }`}
        {...rest}
      />
    </Shell>
  );
}

import type { InputHTMLAttributes, SelectHTMLAttributes, TextareaHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

const base =
  "peer block w-full rounded-2xl border border-line bg-bg px-5 pt-6 pb-2.5 text-base outline-none transition-[border-color,box-shadow] duration-300 placeholder:text-transparent focus:border-fg focus:ring-4 focus:ring-accent-soft aria-invalid:border-danger";
const labelCls =
  "pointer-events-none absolute top-1/2 left-5 -translate-y-1/2 text-muted transition-all duration-300 ease-out-expo peer-focus:top-3.5 peer-focus:text-xs peer-focus:font-semibold peer-[:not(:placeholder-shown)]:top-3.5 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:font-semibold";

type Common = { label: string; error?: string; className?: string };

/** Input with a floating label (CSS only: placeholder-shown trick). */
export function Field({ label, error, className, id, ...props }: Common & InputHTMLAttributes<HTMLInputElement> & { id: string }) {
  return (
    <div className={cn("space-y-1.5", className)}>
      <div className="relative">
        <input id={id} placeholder=" " aria-invalid={!!error || undefined} aria-describedby={error ? `${id}-err` : undefined} className={base} {...props} />
        <label htmlFor={id} className={labelCls}>
          {label}
        </label>
      </div>
      {error && (
        <p id={`${id}-err`} className="animate-[fadeUp_.3s_ease-out] pl-5 text-sm text-danger">
          {error}
        </p>
      )}
    </div>
  );
}

export function TextArea({ label, error, className, id, ...props }: Common & TextareaHTMLAttributes<HTMLTextAreaElement> & { id: string }) {
  return (
    <div className={cn("space-y-1.5", className)}>
      <div className="relative">
        <textarea id={id} placeholder=" " rows={5} aria-invalid={!!error || undefined} aria-describedby={error ? `${id}-err` : undefined} className={cn(base, "resize-y pt-8")} {...props} />
        <label htmlFor={id} className={cn(labelCls, "top-6 peer-focus:top-3.5")}>
          {label}
        </label>
      </div>
      {error && (
        <p id={`${id}-err`} className="animate-[fadeUp_.3s_ease-out] pl-5 text-sm text-danger">
          {error}
        </p>
      )}
    </div>
  );
}

export function Select({ label, options, className, id, ...props }: Common & SelectHTMLAttributes<HTMLSelectElement> & { id: string; options: string[] }) {
  return (
    <div className={cn("relative", className)}>
      <select id={id} defaultValue="" className={cn(base, "appearance-none pr-12")} {...props}>
        <option value="" />
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
      <label htmlFor={id} className="pointer-events-none absolute top-3.5 left-5 text-xs font-semibold text-muted">
        {label}
      </label>
      <span aria-hidden className="pointer-events-none absolute top-1/2 right-5 -translate-y-1/2 text-muted">
        ▾
      </span>
    </div>
  );
}

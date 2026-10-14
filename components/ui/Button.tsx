import type { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "ghost";
};

const baseClassName =
  "inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--bg)] disabled:cursor-not-allowed disabled:opacity-60";

const variants = {
  primary:
    "bg-[color:var(--accent)] text-[color:var(--bg)] hover:translate-y-[-1px]",
  ghost:
    "border border-[color:var(--border)] bg-transparent text-[color:var(--fg)] hover:border-[color:var(--fg)]",
};

export function Button({ variant = "primary", className = "", ...props }: ButtonProps) {
  return (
    <button
      className={`${baseClassName} ${variants[variant]} ${className}`.trim()}
      {...props}
    />
  );
}

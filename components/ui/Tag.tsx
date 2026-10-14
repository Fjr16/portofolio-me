import type { HTMLAttributes } from "react";

type TagProps = HTMLAttributes<HTMLSpanElement>;

export function Tag({ children, className = "", ...props }: TagProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full border border-[color:var(--border)] bg-transparent px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-[color:var(--muted)] ${className}`.trim()}
      {...props}
    >
      {children}
    </span>
  );
}

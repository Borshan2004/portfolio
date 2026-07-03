import type { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "ghost";
}

export default function Button({ variant = "primary", className = "", ...props }: ButtonProps) {
  const base = "rounded px-5 py-3 text-sm font-bold uppercase tracking-wider transition";
  const styles =
    variant === "primary"
      ? "bg-accent text-white hover:bg-navy disabled:opacity-50"
      : "border border-line text-ink hover:border-accent hover:text-accent";

  return <button className={`${base} ${styles} ${className}`} {...props} />;
}

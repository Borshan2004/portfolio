import type { ReactNode } from "react";

interface SectionProps {
  id: string;
  index: string;
  eyebrow: string;
  title: string;
  dark?: boolean;
  children: ReactNode;
}

export default function Section({ id, index, eyebrow, title, dark, children }: SectionProps) {
  return (
    <section
      id={id}
      className={dark ? "bg-navy text-white" : "bg-paper"}
    >
      <div className="mx-auto max-w-6xl px-6 py-24">
        <p
          className={`mb-2 text-xs font-bold uppercase tracking-[0.2em] ${
            dark ? "text-accent-soft" : "text-accent"
          }`}
        >
          {index} — {eyebrow}
        </p>
        <h2 className="font-display text-3xl font-extrabold sm:text-4xl">{title}</h2>
        <div className="mt-12">{children}</div>
      </div>
    </section>
  );
}

import Section from "./Section";
import { EDUCATION } from "@/constants/data";

export default function Education() {
  return (
    <section className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "linear-gradient(var(--color-line) 1px, transparent 1px), linear-gradient(90deg, var(--color-line) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
    <Section id="education" index="04" eyebrow="Education" title="Foundations">
      <div className="grid gap-6 sm:grid-cols-2">
        {EDUCATION.map((item) => (
          <div
            key={item.id}
            className="border-t-2 border-accent bg-mist p-6 transition hover:-translate-y-0.5 hover:shadow-md"
          >
            <p className="text-xs font-semibold text-ink/50">{item.year}</p>
            <h3 className="mt-1 font-display text-lg font-bold text-navy">{item.degree}</h3>
            <p className="text-sm font-semibold text-accent">{item.institution}</p>
            <p className="mt-3 text-sm text-ink/70">{item.note}</p>
          </div>
        ))}
      </div>
    </Section>
  </section>
  );
}

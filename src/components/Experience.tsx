import Section from "./Section";
import { EXPERIENCE } from "@/constants/data";

export default function Experience() {
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
       <Section id="experience" index="03" eyebrow="Experience" title="Where I've built" >
      <div className="relative border-l border-line pl-8 ">
        {EXPERIENCE.map((item) => (
          <div key={item.id} className="relative mb-10 last:mb-0">
            <span className="absolute -left-[41px] top-1 h-3 w-3 rounded-full border-2 border-accent bg-paper" />
            <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-baseline">
              <h3 className="text-lg font-bold text-navy">
                {item.role}{" "}
                <a href={item.orgUrl ?? "#"} className="text-accent hover:underline">
                  {item.org}
                </a>
              </h3>
              <span className="text-xs font-semibold uppercase tracking-wider text-ink/50">
                {item.period}
              </span>
            </div>
            <p className="mt-2 max-w-2xl text-ink/70">{item.description}</p>
          </div>
        ))}
      </div>
    </Section>
    </section>
   
  );
}

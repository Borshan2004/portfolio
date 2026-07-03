import { motion } from "framer-motion";
import { PROFILE } from "@/constants/data";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-10 pb-20">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "linear-gradient(var(--color-line) 1px, transparent 1px), linear-gradient(90deg, var(--color-line) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative mx-auto grid max-w-6xl gap-12 px-6 py-24 md:grid-cols-2 md:items-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-line px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-ink/60">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            {PROFILE.availability}
          </div>

          <h1 className="font-display text-4xl font-extrabold leading-[1.05] text-navy sm:text-5xl">
            {PROFILE.tagline}
          </h1>

          <p className="mt-6 max-w-md text-lg text-ink/70">
            {PROFILE.subline}{" "}
            <span className="font-semibold text-accent">{PROFILE.highlight}</span>.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="rounded bg-navy px-5 py-3 text-sm font-bold uppercase tracking-wider text-white transition hover:text-navy hover:bg-ink/30"
            >
              Let's talk
            </a>

            <a
              href="#contact"
              className="rounded bg-navy px-5 py-3 text-sm font-bold uppercase tracking-wider text-white hover:text-navy transition hover:bg-ink/30"
            >
              Resume
            </a>
            
          </div>

          <div className="mt-16 grid grid-cols-4 gap-4 border-t border-line pt-8">
            {PROFILE.stats.map((stat) => (
              <div key={stat.label}>
                <div className="font-display text-2xl font-extrabold text-navy">
                  {stat.value}
                </div>
                <div className="mt-1 text-[11px] text-ink/60">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="relative mx-auto aspect-4/5 w-full max-w-sm rounded-lg border border-line bg-mist shadow-sm"
        >
          <div className="absolute -left-5 -top-3 h-full w-full rounded-lg border-2 border-ink/30" />
          <div className="relative flex h-full w-full items-center justify-center rounded-lg bg-gradient-to-b from-mist to-line text-ink/30 shadow-xl shadow-ink/5">
            <img src={PROFILE.image} alt={PROFILE.name} className="aspect-4/5 w-full rounded-lg object-cover" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

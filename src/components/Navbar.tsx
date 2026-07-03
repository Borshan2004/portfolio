import { PROFILE } from "@/constants/data";

const LINKS = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Projects", href: "#projects" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-navy backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded bg-white text-xs font-bold text-navy">
            {PROFILE.name
              .split(" ")
              .map((n) => n[0])
              .join("")
              .slice(0, 2)}
          </span>
          <span className="font-display text-sm font-bold tracking-wide text-white">
            {PROFILE.name.toUpperCase()}
          </span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs font-semibold uppercase tracking-wider px-2 py-1 rounded text-white transition hover:text-navy hover:bg-slate-300"
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="rounded bg-navy px-4 py-2 text-xs font-bold uppercase tracking-wider text-white transition hover:text-navy hover:bg-slate-300"
        >
          Let's talk →
        </a>
      </nav>
    </header>
  );
}

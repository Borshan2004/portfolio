import { PROFILE } from "@/constants/data";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-navy text-white/50">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-6 py-6 text-xs sm:flex-row">
        <span className="font-display font-bold text-white">{PROFILE.name.toUpperCase()}</span>
        <span>© {new Date().getFullYear()} — Built with React, Express & PostgreSQL.</span>
      </div>
    </footer>
  );
}

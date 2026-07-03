import { Link } from "react-router-dom";
import type { Project } from "@/types";
import { FiArrowRight } from "react-icons/fi";

export default function Card({ project, index }: { project: Project; index: number }) {
  return (
    <div className="group relative overflow-hidden rounded-lg border border-line bg-paper transition hover:-translate-y-1 hover:shadow-xl">
      <span className="absolute right-4 top-4 z-10 font-display text-4xl font-black text-line/80 transition group-hover:text-accent-soft">
        {String(index + 1).padStart(2, "0")}
      </span>

      <div className="relative aspect-video overflow-hidden bg-gradient-to-br from-navy to-accent">
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center p-4 text-center text-sm font-semibold text-white/60">
            {project.title}
          </div>
        )}
      </div>

      <div className="p-5">
        <h3 className="font-display text-lg font-bold text-navy">{project.title}</h3>
        <p className="mt-2 line-clamp-2 text-sm text-ink/70">{project.shortDescription}</p>

        <Link
          to={`/projects/${project.slug}`}
          className="mt-5 flex items-center gap-2 border-t border-line pt-4 text-sm font-bold uppercase tracking-wider text-accent transition hover:gap-3"
        >
          View more <FiArrowRight />
        </Link>
      </div>
    </div>
  );
}
import type { Project } from "@/types";
import { FiGithub, FiExternalLink } from "react-icons/fi";

export default function FeaturedProject({ project }: { project: Project }) {
    return (
        <div className="grid overflow-hidden rounded-xl border border-line bg-navy text-white md:grid-cols-2">
            <div className="relative aspect-video overflow-hidden bg-gradient-to-br from-accent to-navy md:aspect-auto">
                {project.image ? (
                    <img src={project.image} alt={project.title} className="h-full w-full object-cover" />
                ) : (
                    <div className="flex h-full w-full items-center justify-center p-8 text-center font-display text-2xl font-bold text-white/50">
                        {project.title}
                    </div>
                )}
            </div>

            <div className="flex flex-col justify-center p-8 md:p-10">
                <span className="mb-3 w-fit rounded-full bg-accent px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white">
                    Featured project
                </span>

                <h3 className="font-display text-2xl font-extrabold sm:text-3xl">{project.title}</h3>

                <p className="mt-4 text-white/70">
                    {project.fullDescription || project.shortDescription}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                        <span
                            key={tech}
                            className="rounded-full border border-white/20 px-3 py-1 text-xs font-semibold text-white/80"
                        >
                            {tech}
                        </span>
                    ))}
                </div>

                <div className="mt-8 flex gap-4">
                    {project.liveLink && (
                        <a
                            href={project.liveLink}
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center gap-2 rounded bg-white px-4 py-2.5 text-sm font-bold uppercase tracking-wider text-navy transition hover:bg-accent hover:text-white"
                        >
                            <FiExternalLink /> Live site
                        </a>
                    )}
                    {project.githubLink && (
                        <a
                            href={project.githubLink}
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center gap-2 rounded border border-white/30 px-4 py-2.5 text-sm font-bold uppercase tracking-wider transition hover:border-white"
                        >
                            <FiGithub /> Source
                        </a>
                    )}
                </div>
      </div >
    </div >
  );
}
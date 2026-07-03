import { useParams, Link } from "react-router-dom";
import { FiGithub, FiExternalLink, FiArrowLeft } from "react-icons/fi";
import { PROJECTS } from "@/constants/data";

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const project = PROJECTS.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="mx-auto max-w-3xl px-6 py-24 text-center">
        <h1 className="font-display text-2xl font-bold text-navy">Project not found</h1>
        <Link to="/#projects" className="mt-4 inline-block text-accent hover:underline">
          ← Back to projects
        </Link>
      </div>
    );
  }

  return (
    <article>
      <div className="relative aspect-video w-full overflow-hidden bg-gradient-to-br from-navy to-accent">
        {project.image ? (
          <img src={project.image} alt={project.title} className="h-full w-full object-cover" />
        ) : (
          <div className="flex h-full w-full items-center justify-center px-6 text-center font-display text-2xl font-bold text-white/50 sm:text-4xl">
            {project.title}
          </div>
        )}
      </div>

      <div className="mx-auto max-w-3xl px-6 py-16">
        <Link
          to="/#projects"
          className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-accent hover:underline"
        >
          <FiArrowLeft /> Back to projects
        </Link>

        <h1 className="font-display text-3xl font-extrabold text-navy sm:text-4xl">
          {project.title}
        </h1>

        <div className="mt-5 flex flex-wrap gap-3">
          {project.liveLink && (
            <a
              href={project.liveLink}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded bg-navy px-4 py-2.5 text-sm font-bold uppercase tracking-wider text-white transition hover:bg-accent"
            >
              <FiExternalLink /> Live site
            </a>
          )}
          {project.githubLink && (
            <a
              href={project.githubLink}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded border border-line px-4 py-2.5 text-sm font-bold uppercase tracking-wider text-navy transition hover:border-accent hover:text-accent"
            >
              <FiGithub /> GitHub (client)
            </a>
          )}
        </div>

        <section className="mt-10">
          <h2 className="font-display text-sm font-bold uppercase tracking-wider text-accent">
            Tech stack
          </h2>
          <div className="mt-3 flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-full bg-accent-soft px-3 py-1 text-xs font-semibold text-navy"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        <section className="mt-10">
          <h2 className="font-display text-sm font-bold uppercase tracking-wider text-accent">
            Description
          </h2>
          <p className="mt-3 text-ink/70">
            {project.fullDescription || project.shortDescription}
          </p>
        </section>

        {project.challenges && (
          <section className="mt-10">
            <h2 className="font-display text-sm font-bold uppercase tracking-wider text-accent">
              Challenges faced
            </h2>
            <p className="mt-3 text-ink/70">{project.challenges}</p>
          </section>
        )}

        {project.futurePlans && (
          <section className="mt-10">
            <h2 className="font-display text-sm font-bold uppercase tracking-wider text-accent">
              Potential improvements & future plans
            </h2>
            <p className="mt-3 text-ink/70">{project.futurePlans}</p>
          </section>
        )}
      </div>
    </article>
  );
}
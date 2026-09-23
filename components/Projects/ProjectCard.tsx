import { BadgeList } from "@/components/ui/Badge";
import type { Project } from "@/data/projects";
import { ProjectLinks, StatusBadge } from "./ProjectMeta";
import { ProjectPreview } from "./ProjectPreview";

export function ProjectCard({ project }: { project: Project }) {
  const titleId = `${project.slug}-title`;
  const inDevelopment = project.status === "In Development";

  return (
    <article
      aria-labelledby={titleId}
      className="group flex h-full flex-col rounded-xl border border-line bg-surface/60 p-5 transition-[border-color,transform] duration-300 hover:-translate-y-0.5 hover:border-line-strong motion-reduce:hover:translate-y-0 sm:p-6"
    >
      {project.image && (
        <ProjectPreview
          project={project}
          sizes="(min-width: 1152px) 540px, (min-width: 768px) 50vw, 100vw"
          className="mb-5"
        />
      )}

      <div className="flex flex-wrap items-center justify-between gap-2">
        <span className="text-xs text-subtle">{project.category}</span>
        {project.status && <StatusBadge status={project.status} />}
      </div>
      <h4 id={titleId} className="mt-2 text-xl font-semibold tracking-tight text-ink">
        {project.title}
      </h4>
      <p className="mt-2 text-sm leading-relaxed text-muted">{project.description}</p>

      {project.features.length > 0 && (
        <div className="mt-5">
          <h5 className="text-xs font-medium uppercase tracking-wider text-subtle">
            {inDevelopment ? "Planned scope" : "Features"}
          </h5>
          <ul className="mt-3 space-y-1.5 text-sm text-ink/85">
            {project.features.map((feature) => (
              <li key={feature} className="flex gap-3">
                <span aria-hidden="true" className="mt-2 size-1 shrink-0 rounded-full bg-subtle" />
                {feature}
              </li>
            ))}
          </ul>
        </div>
      )}

      {project.technologies.length > 0 && (
        <div className="mt-5">
          <BadgeList items={project.technologies} label={`${project.title} technologies`} />
        </div>
      )}

      <div className="mt-auto pt-6 empty:hidden">
        <ProjectLinks project={project} />
      </div>
    </article>
  );
}

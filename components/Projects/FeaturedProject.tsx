import { Check } from "lucide-react";
import { BadgeList } from "@/components/ui/Badge";
import { Reveal } from "@/components/ui/Reveal";
import type { Project } from "@/data/projects";
import { ArchitectureDiagram } from "./ArchitectureDiagram";
import { ProjectLinks, StatusBadge } from "./ProjectMeta";
import { ProjectPreview } from "./ProjectPreview";

export function FeaturedProject({ project }: { project: Project }) {
  const titleId = `${project.slug}-title`;

  return (
    <Reveal>
      <article
        aria-labelledby={titleId}
        className="overflow-hidden rounded-2xl border border-line bg-surface/70"
      >
        <div className="grid gap-8 p-5 sm:p-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10">
          <ProjectPreview project={project} sizes="(min-width: 1024px) 600px, 100vw" />

          <div className="flex flex-col">
            <div className="flex flex-wrap items-center gap-2">
              <span className="font-mono text-xs uppercase tracking-[0.16em] text-accent">
                Featured project
              </span>
              {project.status && <StatusBadge status={project.status} />}
            </div>
            <h3 id={titleId} className="mt-3 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              {project.title}
            </h3>
            <p className="mt-1 text-sm text-subtle">
              {project.category}
              {project.organization && <> · Built at {project.organization}</>}
            </p>
            <p className="mt-4 text-base leading-relaxed text-pretty text-muted">{project.description}</p>

            <div className="mt-6">
              <h4 className="sr-only">Technologies</h4>
              <BadgeList items={project.technologies} label={`${project.title} technologies`} />
            </div>

            <div className="mt-8 empty:hidden lg:mt-auto lg:pt-8">
              <ProjectLinks project={project} />
            </div>
          </div>
        </div>

        <div className="grid gap-px border-t border-line bg-line lg:grid-cols-2">
          <div className="space-y-10 bg-surface p-5 sm:p-8">
            {project.contributions && (
              <FeatureList title="My contributions" items={project.contributions} />
            )}
            <FeatureList
              title={project.organization ? "Platform features" : "Key features"}
              items={project.features}
            />
          </div>

          {project.architecture && (
            <div className="bg-surface p-5 sm:p-8">
              <h4 className="text-sm font-semibold text-ink">Architecture</h4>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                A modular frontend/backend architecture: UI concerns, application logic, state and data
                access are kept in separate layers. The React client talks to an Express.js REST API
                running on AWS, backed by MongoDB with files stored in S3.
              </p>
              <div className="mt-5">
                <ArchitectureDiagram title={project.title} layers={project.architecture} />
              </div>
            </div>
          )}
        </div>
      </article>
    </Reveal>
  );
}

function FeatureList({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h4 className="text-sm font-semibold text-ink">{title}</h4>
      <ul className="mt-5 grid gap-3">
        {items.map((item) => (
          <li key={item} className="flex gap-3 text-sm leading-relaxed text-muted">
            <Check className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden="true" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

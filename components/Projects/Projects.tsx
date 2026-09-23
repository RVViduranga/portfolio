import { Badge } from "@/components/ui/Badge";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { featuredProject, otherProjects, otherWork } from "@/data/projects";
import { FeaturedProject } from "./FeaturedProject";
import { ProjectCard } from "./ProjectCard";

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title="Selected work."
      description="Applications I've built and worked on, starting with a live production platform."
    >
      {featuredProject && <FeaturedProject project={featuredProject} />}

      {otherProjects.length > 0 && (
        <div className="mt-16">
          <h3 className="text-lg font-semibold text-ink">More projects</h3>
          <ul className="mt-6 grid gap-5 md:grid-cols-2">
            {otherProjects.map((project, index) => (
              <li key={project.slug}>
                <Reveal delay={index * 0.05} className="h-full">
                  <ProjectCard project={project} />
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      )}

      {otherWork.length > 0 && (
        <Reveal className="mt-16">
          <h3 className="text-lg font-semibold text-ink">Other work</h3>
          <p className="mt-2 text-sm text-muted">Computer vision and machine learning projects.</p>
          <ul className="mt-6 divide-y divide-line rounded-xl border border-line bg-surface/50">
            {otherWork.map((work) => (
              <li
                key={work.title}
                className="grid gap-3 px-5 py-5 sm:px-6 md:grid-cols-[1fr_auto] md:items-center md:gap-8"
              >
                <div>
                  <h4 className="text-sm font-medium text-ink">{work.title}</h4>
                  <p className="mt-1 text-sm leading-relaxed text-muted">{work.description}</p>
                </div>
                <ul className="flex flex-wrap gap-2 md:justify-end" aria-label={`${work.title} technologies`}>
                  {work.technologies.map((tech) => (
                    <li key={tech}>
                      <Badge>{tech}</Badge>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </Reveal>
      )}
    </Section>
  );
}

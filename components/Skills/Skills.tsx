import {
  Braces,
  Cloud,
  Database,
  LayoutPanelTop,
  Server,
  Workflow,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { skillGroups, type SkillGroupIcon } from "@/data/skills";

const icons: Record<SkillGroupIcon, LucideIcon> = {
  languages: Braces,
  frontend: LayoutPanelTop,
  backend: Server,
  databases: Database,
  cloud: Cloud,
  tools: Wrench,
  practices: Workflow,
};

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title="Technologies I work with."
      description="Grouped by where they sit in the stack — from the languages I write to the way I ship software."
    >
      <Reveal>
        <ul className="divide-y divide-line overflow-hidden rounded-xl border border-line bg-surface/50">
          {skillGroups.map((group) => {
            const Icon = icons[group.icon];
            return (
              <li
                key={group.title}
                className="grid gap-4 px-5 py-5 transition-colors hover:bg-elevated/40 sm:grid-cols-[13rem_1fr] sm:items-center sm:px-6"
              >
                <h3 className="flex items-center gap-3 text-sm font-medium text-ink">
                  <span className="grid size-8 place-items-center rounded-md border border-line-strong bg-canvas text-accent">
                    <Icon className="size-4" aria-hidden="true" />
                  </span>
                  {group.title}
                </h3>
                <ul className="flex flex-wrap gap-2" aria-label={`${group.title} skills`}>
                  {group.skills.map((skill) => (
                    <li key={skill}>
                      <Badge className="text-ink/85">{skill}</Badge>
                    </li>
                  ))}
                </ul>
              </li>
            );
          })}
        </ul>
      </Reveal>
    </Section>
  );
}

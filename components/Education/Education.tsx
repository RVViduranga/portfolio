import { Award, Code, GraduationCap } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { certifications, education } from "@/data/education";

const kindMeta = {
  degree: { label: "Degree", icon: GraduationCap },
  training: { label: "Professional training", icon: Code },
} as const;

export function Education() {
  return (
    <Section id="education" eyebrow="Education" title="Education & training.">
      <ul className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {education.map((item, index) => {
          const { label, icon: Icon } = kindMeta[item.kind];
          return (
            <li key={item.title}>
              <Reveal delay={index * 0.05} className="h-full">
                <article className="flex h-full flex-col rounded-xl border border-line bg-surface/60 p-5 sm:p-6">
                  <div className="flex items-center justify-between gap-3">
                    <span className="grid size-10 place-items-center rounded-lg border border-line-strong bg-canvas text-accent">
                      <Icon className="size-5" aria-hidden="true" />
                    </span>
                    {item.inProgress && (
                      <span className="rounded-full border border-warning/30 bg-warning/10 px-2.5 py-0.5 text-xs font-medium text-warning">
                        In progress
                      </span>
                    )}
                  </div>
                  <p className="mt-5 font-mono text-xs uppercase tracking-wider text-subtle">{label}</p>
                  <h3 className="mt-1.5 text-base font-semibold text-ink">{item.title}</h3>
                  <p className="mt-1 text-sm text-muted">{item.institution}</p>
                  {item.description && (
                    <p className="mt-3 text-sm leading-relaxed text-muted">{item.description}</p>
                  )}
                </article>
              </Reveal>
            </li>
          );
        })}
      </ul>

      {certifications.length > 0 && (
        <Reveal className="mt-12">
          <h3 className="flex items-center gap-2 text-sm font-semibold text-ink">
            <Award className="size-4 text-accent" aria-hidden="true" />
            Certifications
          </h3>
          <ul className="mt-4 divide-y divide-line rounded-xl border border-line bg-surface/50">
            {certifications.map((cert) => (
              <li
                key={cert.title}
                className="flex flex-col gap-1 px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:px-6"
              >
                <span className="text-sm text-ink">{cert.title}</span>
                <span className="shrink-0 text-sm text-subtle">
                  {cert.issuer}
                  {cert.year && ` · ${cert.year}`}
                </span>
              </li>
            ))}
          </ul>
        </Reveal>
      )}
    </Section>
  );
}

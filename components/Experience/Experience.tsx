import { BadgeList } from "@/components/ui/Badge";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { experience } from "@/data/experience";
import { cn } from "@/lib/links";

export function Experience() {
  return (
    <Section id="experience" eyebrow="Experience" title="Where I've been building software.">
      <ol className="relative space-y-10 border-l border-line pl-6 sm:pl-8 md:ml-[10rem]">
        {experience.map((job, index) => (
          <li key={`${job.company}-${job.role}`} className="relative">
            <span
              aria-hidden="true"
              className={cn(
                "absolute top-1.5 -left-[calc(1.5rem+5px)] size-2.5 rounded-full ring-4 ring-canvas sm:-left-[calc(2rem+5px)]",
                job.current ? "bg-accent" : "bg-line-strong",
              )}
            />
            <Reveal delay={index * 0.05}>
              <p className="font-mono text-xs tracking-wide text-subtle md:absolute md:top-1 md:-left-[12rem] md:w-[8.75rem] md:text-right">
                <time>{job.period.start}</time> – {job.current ? "Present" : <time>{job.period.end}</time>}
              </p>

              <article className="mt-2 rounded-xl border border-line bg-surface/60 p-5 sm:p-6 md:mt-0">
                <header className="flex flex-wrap items-start justify-between gap-x-4 gap-y-2">
                  <div>
                    <h3 className="text-lg font-semibold text-ink">{job.role}</h3>
                    <p className="mt-0.5 text-sm text-muted">
                      {job.company}
                      {job.location && <span className="text-subtle"> · {job.location}</span>}
                    </p>
                  </div>
                  {job.current && (
                    <span className="rounded-full border border-accent/30 bg-accent/10 px-2.5 py-0.5 text-xs font-medium text-accent">
                      Current
                    </span>
                  )}
                </header>

                <p className="mt-4 text-sm leading-relaxed text-muted">{job.summary}</p>

                <ul className="mt-4 space-y-2 text-sm leading-relaxed text-ink/85">
                  {job.highlights.map((highlight) => (
                    <li key={highlight} className="flex gap-3">
                      <span aria-hidden="true" className="mt-2 size-1 shrink-0 rounded-full bg-subtle" />
                      {highlight}
                    </li>
                  ))}
                </ul>

                <div className="mt-5">
                  <BadgeList items={job.technologies} label={`Technologies used as ${job.role}`} />
                </div>
              </article>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  );
}

import type { ReactNode } from "react";
import { Container } from "./Container";
import { Reveal } from "./Reveal";

interface SectionProps {
  id: string;
  eyebrow: string;
  title: string;
  description?: string;
  children: ReactNode;
}

export function Section({ id, eyebrow, title, description, children }: SectionProps) {
  const titleId = `${id}-title`;

  return (
    <section id={id} aria-labelledby={titleId} className="border-t border-line/70 py-20 sm:py-28">
      <Container>
        <Reveal>
          <header className="max-w-2xl">
            <p className="font-mono text-xs font-medium uppercase tracking-[0.18em] text-accent">
              {eyebrow}
            </p>
            <h2
              id={titleId}
              className="mt-3 text-3xl font-semibold tracking-tight text-balance text-ink sm:text-4xl"
            >
              {title}
            </h2>
            {description && (
              <p className="mt-4 text-base leading-relaxed text-pretty text-muted sm:text-lg">
                {description}
              </p>
            )}
          </header>
        </Reveal>
        <div className="mt-12 sm:mt-14">{children}</div>
      </Container>
    </section>
  );
}

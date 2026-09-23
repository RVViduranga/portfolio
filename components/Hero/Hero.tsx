import { ArrowRight } from "lucide-react";
import { SocialIcon } from "@/components/icons/SocialIcon";
import { Badge } from "@/components/ui/Badge";
import { Container } from "@/components/ui/Container";
import { LinkButton } from "@/components/ui/LinkButton";
import { Reveal } from "@/components/ui/Reveal";
import { profile, socialLinks } from "@/data/site";
import { SystemVisual } from "./SystemVisual";

const heroSocials = socialLinks.filter((link) => link.kind !== "email");

export function Hero() {
  return (
    <section id="top" aria-labelledby="hero-title" className="relative isolate overflow-hidden">
      <div aria-hidden="true" className="hero-grid absolute inset-0 -z-10" />
      <div aria-hidden="true" className="hero-glow absolute inset-0 -z-10" />

      <Container className="grid items-center gap-14 pt-32 pb-20 sm:pt-40 sm:pb-28 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        <div>
          <Reveal immediate>
            <p className="inline-flex items-center gap-2 rounded-full border border-line bg-surface/70 px-3 py-1 text-xs text-muted">
              <span className="size-1.5 rounded-full bg-success" aria-hidden="true" />
              {profile.currentRole.title} at {profile.currentRole.company}
            </p>
          </Reveal>

          <Reveal immediate delay={0.05}>
            <h1 id="hero-title" className="mt-6 text-5xl font-semibold tracking-tight text-ink sm:text-6xl lg:text-7xl">
              {profile.name}
            </h1>
            <p className="mt-3 text-xl font-medium text-accent sm:text-2xl">{profile.title}</p>
          </Reveal>

          <Reveal immediate delay={0.1}>
            <p className="mt-6 max-w-xl text-xl leading-snug text-balance text-ink/90 sm:text-2xl">
              {profile.headline}
            </p>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-pretty text-muted">
              {profile.summary}
            </p>
          </Reveal>

          <Reveal immediate delay={0.15}>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <LinkButton href="#projects" variant="primary">
                View Projects
                <ArrowRight className="size-4" aria-hidden="true" />
              </LinkButton>
              <LinkButton href="#contact" variant="secondary">
                Contact Me
              </LinkButton>
              <div className="flex gap-2 sm:ml-2">
                {heroSocials.map((link) => (
                  <LinkButton key={link.kind} href={link.href} variant="icon" ariaLabel={link.label}>
                    <SocialIcon kind={link.kind} />
                  </LinkButton>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal immediate delay={0.2}>
            <div className="mt-10">
              <p className="font-mono text-xs uppercase tracking-[0.16em] text-subtle">Core stack</p>
              <ul className="mt-3 flex flex-wrap gap-2" aria-label="Core technologies">
                {profile.coreStack.map((tech) => (
                  <li key={tech}>
                    <Badge>{tech}</Badge>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        <Reveal immediate delay={0.2} className="hidden md:block">
          <SystemVisual />
        </Reveal>
      </Container>
    </section>
  );
}

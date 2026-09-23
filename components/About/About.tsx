import { MapPin } from "lucide-react";
import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { profile } from "@/data/site";
import portrait from "@/public/profile.jpg";

const facts = [
  {
    term: "Current role",
    detail: `${profile.currentRole.title}, ${profile.currentRole.company}`,
  },
  { term: "Focus", detail: "Full-stack web development — frontend, backend and APIs" },
  { term: "Education", detail: "BSc Engineering (EEE), University of Peradeniya" },
  { term: "Training", detail: "Software Engineering DEP, IJSE — Java & Spring Boot" },
  { term: "Way of working", detail: "Agile/Scrum, TDD, CI/CD with GitHub Actions" },
  { term: "Also learning", detail: "AI/ML — Certified AI & ML Engineer programme, IJSE" },
];

export function About() {
  return (
    <Section id="about" eyebrow="About" title="A software engineer working across the stack.">
      <div className="grid gap-10 md:grid-cols-[15rem_1fr] md:items-start lg:grid-cols-[18rem_1fr] lg:gap-16">
        <Reveal className="w-full max-w-60 md:max-w-none">
          <figure>
            <Image
              src={portrait}
              alt={`Portrait of ${profile.name}`}
              placeholder="blur"
              sizes="(min-width: 1024px) 288px, 240px"
              className="aspect-[4/5] w-full rounded-xl border border-line object-cover"
            />
            <figcaption className="mt-3 flex items-center gap-1.5 text-sm text-subtle">
              <MapPin className="size-3.5" aria-hidden="true" />
              {profile.location}
            </figcaption>
          </figure>
        </Reveal>

        <Reveal delay={0.05} className="space-y-5 text-base leading-relaxed text-pretty text-muted sm:text-lg">
          <p>
            I&apos;m a software engineer at Efito Solutions, where I develop and maintain full-stack web
            applications — building interfaces with <span className="text-ink">React</span> and{" "}
            <span className="text-ink">TypeScript</span>, and REST APIs, authentication flows and services
            with <span className="text-ink">Node.js</span>, <span className="text-ink">Express.js</span> and{" "}
            <span className="text-ink">MongoDB</span>.
          </p>
          <p>
            I hold an engineering degree from the University of Peradeniya and trained through IJSE&apos;s Software
            Engineering Direct Entry Program, specialising in{" "}
            <span className="text-ink">Java and Spring Boot</span>. I also work with PostgreSQL and MySQL, and
            deploy with Docker, GitHub Actions and AWS.
          </p>
          <p>
            I work in Agile/Scrum teams, write tests with a TDD approach, and care about readable code and
            sensible architecture. Alongside this I&apos;m studying AI and machine learning — NLP, LLMs and MLOps
            — as an additional area of interest.
          </p>
        </Reveal>

      </div>

      <Reveal delay={0.1} className="mt-12">
        <dl className="grid gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {facts.map((fact) => (
            <div key={fact.term} className="bg-surface px-5 py-4">
              <dt className="font-mono text-xs uppercase tracking-wider text-subtle">{fact.term}</dt>
              <dd className="mt-1.5 text-sm text-ink">{fact.detail}</dd>
            </div>
          ))}
        </dl>
      </Reveal>
    </Section>
  );
}

import { ArrowUpRight, Mail } from "lucide-react";
import { SocialIcon } from "@/components/icons/SocialIcon";
import { Container } from "@/components/ui/Container";
import { LinkButton } from "@/components/ui/LinkButton";
import { Reveal } from "@/components/ui/Reveal";
import { contact, socialLinks } from "@/data/site";
import { isUsableHref } from "@/lib/links";
import { CopyEmailButton } from "./CopyEmailButton";

const mailto = `mailto:${contact.email}`;
const profiles = socialLinks.filter((link) => link.kind !== "email");

/**
 * Version 1 uses a direct email call-to-action rather than a form, so nothing
 * on the page pretends to send a message it can't deliver.
 */
export function Contact() {
  const emailReady = isUsableHref(mailto);

  return (
    <section id="contact" aria-labelledby="contact-title" className="border-t border-line/70 py-20 sm:py-28">
      <Container>
        <Reveal>
          <div className="relative isolate overflow-hidden rounded-2xl border border-line bg-surface/70 px-6 py-14 text-center sm:px-12 sm:py-20">
            <div aria-hidden="true" className="hero-glow absolute inset-0 -z-10" />
            <p className="font-mono text-xs font-medium uppercase tracking-[0.18em] text-accent">Contact</p>
            <h2
              id="contact-title"
              className="mx-auto mt-4 max-w-2xl text-3xl font-semibold tracking-tight text-balance text-ink sm:text-5xl"
            >
              Let&apos;s build something useful.
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-pretty text-muted sm:text-lg">
              I&apos;m open to software engineering opportunities, technical collaborations, and interesting
              projects.
            </p>

            <div className="mt-10 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
              <LinkButton href={mailto} variant="primary">
                <Mail className="size-4" aria-hidden="true" />
                Email me
              </LinkButton>
              {emailReady && <CopyEmailButton email={contact.email} />}
            </div>
            <p className="mt-4 font-mono text-sm break-all text-subtle">{contact.email}</p>

            <ul className="mt-10 flex flex-wrap justify-center gap-3" aria-label="Profiles">
              {profiles.map((link) => (
                <li key={link.kind}>
                  <LinkButton href={link.href} variant="ghost">
                    <SocialIcon kind={link.kind} />
                    {link.label}
                    <ArrowUpRight className="size-3.5" aria-hidden="true" />
                  </LinkButton>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

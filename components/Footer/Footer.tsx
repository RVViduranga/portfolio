import { SocialIcon } from "@/components/icons/SocialIcon";
import { Container } from "@/components/ui/Container";
import { LinkButton } from "@/components/ui/LinkButton";
import { profile, socialLinks } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-line/70">
      <Container className="flex flex-col items-center justify-between gap-4 py-8 sm:flex-row">
        <p className="text-sm text-subtle">
          © {new Date().getFullYear()} {profile.name}
        </p>
        <ul className="flex gap-2" aria-label="Social links">
          {socialLinks.map((link) => (
            <li key={link.kind}>
              <LinkButton href={link.href} variant="icon" ariaLabel={link.label}>
                <SocialIcon kind={link.kind} />
              </LinkButton>
            </li>
          ))}
        </ul>
      </Container>
    </footer>
  );
}

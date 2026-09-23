/**
 * Site-wide profile, contact and navigation data.
 *
 * Links that are missing or hold a placeholder value render in a disabled
 * "not yet available" state instead of pointing nowhere.
 */

export type SocialKind = "github" | "linkedin" | "email";

export interface SocialLink {
  kind: SocialKind;
  label: string;
  href: string;
}

export interface NavItem {
  id: string;
  label: string;
}

// Explicit URL first, then Vercel's production domain (set automatically on Vercel builds).
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");

export const profile = {
  name: "Rukshan Viduranga",
  initials: "RV",
  location: "Sri Lanka",
  title: "Software Engineer",
  headline:
    "I build modern web applications, backend systems, and scalable software solutions.",
  summary:
    "Software engineer focused on building reliable, maintainable applications using modern frontend and backend technologies.",
  seoDescription:
    "Rukshan Viduranga is a Software Engineer building modern web applications, backend systems, and scalable software solutions.",
  currentRole: {
    title: "Associate Software Engineer",
    company: "Efito Solutions (Pvt) Ltd",
  },
  coreStack: [
    "TypeScript",
    "Java",
    "React",
    "Next.js",
    "Node.js",
    "Express.js",
    "Spring Boot",
    "MongoDB",
    "PostgreSQL",
  ],
} as const;

export const contact = {
  email: "rukshanviduranga1998@gmail.com",
  github: "https://github.com/RVViduranga",
  linkedin: "https://www.linkedin.com/in/rukshan-viduranga-45559b238",
} as const;

export const socialLinks: SocialLink[] = [
  { kind: "github", label: "GitHub", href: contact.github },
  { kind: "linkedin", label: "LinkedIn", href: contact.linkedin },
  { kind: "email", label: "Email", href: `mailto:${contact.email}` },
];

export const navItems: NavItem[] = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

export type SkillGroupIcon =
  | "languages"
  | "frontend"
  | "backend"
  | "databases"
  | "cloud"
  | "tools"
  | "practices";

export interface SkillGroup {
  title: string;
  icon: SkillGroupIcon;
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    title: "Languages",
    icon: "languages",
    skills: ["TypeScript", "JavaScript", "Java", "Python", "SQL"],
  },
  {
    title: "Frontend",
    icon: "frontend",
    skills: ["React", "Next.js", "Tailwind CSS", "Radix UI", "Redux", "HTML", "CSS"],
  },
  {
    title: "Backend & APIs",
    icon: "backend",
    skills: [
      "Node.js",
      "Express.js",
      "Spring Boot",
      "Spring MVC",
      "Hibernate",
      "REST APIs",
      "Microservices",
      "JWT Authentication",
      "Google OAuth",
    ],
  },
  {
    title: "Databases",
    icon: "databases",
    skills: ["MongoDB", "PostgreSQL", "MySQL"],
  },
  {
    title: "Cloud & DevOps",
    icon: "cloud",
    skills: ["AWS (ECS, Lambda, S3, RDS)", "DigitalOcean", "Docker", "GitHub Actions"],
  },
  {
    title: "Tools",
    icon: "tools",
    skills: ["Git", "GitHub", "Maven", "Postman", "VS Code"],
  },
  {
    title: "Practices",
    icon: "practices",
    skills: ["Agile/Scrum", "TDD", "Unit testing", "CI/CD", "RESTful API design"],
  },
];

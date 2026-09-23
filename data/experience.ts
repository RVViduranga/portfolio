export interface Experience {
  role: string;
  company: string;
  location?: string;
  period: {
    start: string;
    end: string;
  };
  current?: boolean;
  summary: string;
  highlights: string[];
  technologies: string[];
}

export const experience: Experience[] = [
  {
    role: "Associate Software Engineer",
    company: "Efito Solutions (Pvt) Ltd",
    location: "Homagama",
    period: { start: "Feb 2026", end: "Present" },
    current: true,
    summary:
      "Developing and maintaining full-stack web applications within an Agile/Scrum team, taking part in sprint planning, stand-ups and retrospectives.",
    highlights: [
      "Build service-oriented REST APIs, authentication flows and recruiter/candidate management features with React, TypeScript, Node.js, Express and MongoDB.",
      "Split functionality into independently deployable services where appropriate.",
      "Write unit and integration tests using a TDD approach to validate business logic and prevent regressions.",
      "Set up and maintain CI/CD pipelines with GitHub Actions for automated testing, builds and deployment.",
      "Work on maintainability and production stability through debugging, testing and deployment workflows.",
    ],
    technologies: [
      "React",
      "TypeScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "REST APIs",
      "Microservices",
      "TDD",
      "GitHub Actions",
      "Agile/Scrum",
    ],
  },
  {
    role: "Software Engineering Intern",
    company: "Efito Solutions (Pvt) Ltd",
    location: "Homagama",
    period: { start: "Sep 2025", end: "Feb 2026" },
    summary:
      "Started on full-stack development for a recruitment and job portal platform in a Scrum-based development process.",
    highlights: [
      "Implemented frontend and backend modules using React, TypeScript, Node.js, Express and MongoDB.",
    ],
    technologies: ["React", "TypeScript", "Node.js", "Express.js", "MongoDB", "Scrum"],
  },
  {
    role: "Trainee Engineer",
    company: "International Distillers Limited",
    location: "Kaduwela",
    period: { start: "Aug 2023", end: "Oct 2023" },
    summary:
      "Built a real-time database solution for production-line data collection and downtime analysis.",
    highlights: [
      "Developed the data capture and reporting system with MySQL, PHP, JavaScript and Apache, integrating Arduino-based sensors.",
      "Supported deployment tasks including web hosting and wireless data transfer setup.",
    ],
    technologies: ["MySQL", "PHP", "JavaScript", "Apache", "Arduino"],
  },
];

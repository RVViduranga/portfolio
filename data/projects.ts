/**
 * Project data. To add a project, append an object to `projects`.
 *
 * - `status` is optional; leave it unset when you don't want a badge shown.
 * - `image` is optional. The featured project shows a labelled "Project
 *   Preview" placeholder without one; other cards simply omit the preview.
 *   Put screenshots in `public/projects/` and reference them as
 *   `/projects/<file>.png`.
 * - `liveUrl` / `githubUrl` are optional; a button is only shown for links
 *   that are set.
 */

export type ProjectStatus = "Live" | "Completed" | "In Development";

export interface ProjectImage {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface ArchitectureLayer {
  label: string;
  detail: string;
}

export interface Project {
  slug: string;
  title: string;
  category: string;
  description: string;
  technologies: string[];
  features: string[];
  image?: ProjectImage;
  githubUrl?: string;
  liveUrl?: string;
  status?: ProjectStatus;
  featured?: boolean;
  /** Where the project was built, for work done for an employer or client. */
  organization?: string;
  /** Your own part in a team project. */
  contributions?: string[];
  architecture?: ArchitectureLayer[];
}

/** Smaller pieces of work listed compactly below the main project cards. */
export interface OtherWork {
  title: string;
  description: string;
  technologies: string[];
}

export const projects: Project[] = [
  {
    slug: "jobcenter",
    title: "JobCenter",
    category: "Full-stack job portal",
    description:
      "A Sri Lankan job portal that connects candidates and companies — a recruitment platform with separate experiences for job seekers, employers and admins. I work on it as a full-stack engineer on the Efito Solutions team, and have done since my internship.",
    organization: "Efito Solutions (Pvt) Ltd",
    contributions: [
      "Implement frontend and backend modules with React, TypeScript, Node.js, Express and MongoDB",
      "Build REST APIs, authentication flows and recruiter/candidate management features",
      "Write unit and integration tests using a TDD approach",
      "Set up and maintain GitHub Actions CI/CD pipelines for testing, builds and deployment",
    ],
    technologies: [
      "React",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "TanStack Query",
      "React Hook Form",
      "Zod",
      "Node.js",
      "Express.js",
      "MongoDB",
      "REST APIs",
      "AWS (ECS, Lambda, S3, RDS)",
      "Docker",
      "GitHub Actions",
    ],
    features: [
      "Three roles — job seekers, employers and admins — with role-based dashboards",
      "Searchable job and company browsing with filters",
      "Saved jobs and application tracking",
      "JWT authentication and Google OAuth",
      "API rate limiting",
      "Secure uploads for CVs, logos and media, stored in AWS S3",
      "AI-assisted CV–job matching: PDF/DOC parsing and scoring to rank candidates by fit",
      "Backend services on AWS ECS, with Lambda for event-driven background tasks",
    ],
    image: {
      src: "/projects/jobcenter.png",
      alt: "JobCenter job listings page showing job cards with company, location, work type and experience level filters",
      width: 1600,
      height: 1000,
    },
    liveUrl: "https://jobcenter.lk",
    status: "Live",
    featured: true,
    architecture: [
      { label: "UI", detail: "Pages and role-based dashboards" },
      { label: "React Components", detail: "Reusable, typed components" },
      { label: "Hooks / Application Logic", detail: "Custom hooks, forms with React Hook Form + Zod" },
      { label: "Context / State", detail: "React Context and TanStack Query cache" },
      { label: "API Services", detail: "Service modules that wrap HTTP calls" },
      { label: "REST API", detail: "JWT / OAuth-protected, rate-limited endpoints" },
      { label: "Backend", detail: "Node.js + Express.js on AWS ECS, Lambda for background jobs" },
      { label: "Data & Storage", detail: "MongoDB, AWS RDS, S3 for files" },
    ],
  },
  {
    slug: "crafts-lands",
    title: "Crafts Lands",
    category: "Full-stack e-commerce",
    description:
      "An e-commerce web app for wooden scenery painting kits for children aged 7+, with a customer storefront, secure authentication and an admin panel for catalogue, orders and content.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Prisma",
      "SQLite",
      "Auth.js",
      "Zustand",
      "Framer Motion",
    ],
    features: [
      "Customer storefront",
      "Secure authentication",
      "Admin panel for catalogue, orders and content",
    ],
  },
  {
    slug: "vidora-academy",
    title: "Vidora Academy",
    category: "Online education platform",
    description:
      "An online education platform concept designed to connect students, teachers, and educational content.",
    technologies: [],
    features: [
      "Teacher registration and packages",
      "Student access",
      "Video lessons and live classes",
      "PDF resources",
      "Teacher content management",
      "Administrative verification",
    ],
    status: "In Development",
  },
];

export const otherWork: OtherWork[] = [
  {
    title: "AI-driven defect detection for ceramic products",
    description:
      "Automated quality inspection using deep learning, computer vision, image processing and data annotation.",
    technologies: ["Python", "YOLOv7", "OpenCV", "PyTorch"],
  },
  {
    title: "Vehicle number plate visibility enhancement",
    description:
      "Enhances low-resolution CCTV footage with super-resolution, motion deblurring and perspective correction.",
    technologies: ["Python", "ESRGAN", "OpenCV"],
  },
];

export const featuredProject = projects.find((project) => project.featured);
export const otherProjects = projects.filter((project) => !project.featured);

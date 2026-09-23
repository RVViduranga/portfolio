export interface EducationItem {
  kind: "degree" | "training";
  title: string;
  institution: string;
  description?: string;
  inProgress?: boolean;
}

export interface Certification {
  title: string;
  issuer: string;
  year?: string;
}

export const education: EducationItem[] = [
  {
    kind: "degree",
    title: "BSc Engineering (Hons) — Electrical and Electronic Engineering",
    institution: "University of Peradeniya",
  },
  {
    kind: "training",
    title: "Software Engineering — Direct Entry Program (DEP)",
    institution: "Institute of Software Engineering (IJSE)",
    description: "Specialised in software development with Java and Spring Boot.",
  },
  {
    kind: "training",
    title: "Certified AI & ML Engineer (CAME)",
    institution: "Institute of Software Engineering (IJSE)",
    description: "Currently studying NLP and LLMs, leading into MLOps, generative AI and AI agents.",
    inProgress: true,
  },
];

export const certifications: Certification[] = [
  { title: "React — The Complete Guide (incl. Next.js, Redux)", issuer: "Udemy" },
  { title: "React, Node.js, Express & MongoDB — The MERN Fullstack Guide", issuer: "Udemy" },
  {
    title: "Java Programming: Solving Problems with Software",
    issuer: "Duke University (Coursera)",
    year: "2024",
  },
];

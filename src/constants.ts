export interface Project {
  title: string;
  description: string;
  tech: string[];
  link?: string;
  github?: string;
  image: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string[];
}

export const SKILLS = {
  languages: ["JavaScript", "TypeScript", "Python", "C", "C++", "HTML", "CSS"],
  frontend: ["React.js", "Next.js", "Redux", "Tailwind CSS", "Responsive Design"],
  backend: ["Node.js", "Express.js", "REST APIs", "Redis", "WebSockets"],
  databases: ["PostgreSQL", "MongoDB", "MySQL", "Prisma ORM", "Mongoose"],
  devops: ["AWS", "Docker", "Cloudflare Workers", "Vercel", "CI/CD", "Git"],
  systemDesign: ["HLD", "LLD", "Multi-Tenant Architecture", "RBAC/ABAC", "Caching", "Load Balancing"],
  security: ["JWT", "NextAuth.js", "Session Management", "Audit Logging", "Soft Deletes"]
};

export const EXPERIENCES: Experience[] = [
  {
    company: "Shraddha Infotech Solutions",
    role: "Software Development Engineer (SDE)",
    period: "2025 - Present",
    description: [
      "Architected and delivered a multi-tenant SaaS ERP platform serving multiple colleges with strict data isolation using PostgreSQL Row-Level Security and Prisma ORM.",
      "Built 10+ core ERP modules — Attendance, Assignments, Fees, Certificates, Hostel, and Transport.",
      "Designed a Redis-based event-driven backend with RBAC/ABAC authorization, achieving 99.9% uptime across 10,000+ active users.",
      "Optimized REST APIs, reducing average response time by 40%."
    ]
  },
  {
    company: "College Management Systems",
    role: "Freelance Full Stack Developer",
    period: "2022 - 2025",
    description: [
      "Designed and deployed a QR-based college management platform with unique digital identity for each student and faculty.",
      "Built modules for timetable management, complaint workflows, outpass approvals, and a blood donor discovery system.",
      "Implemented JWT authentication and RBAC-based dashboards for Admin, Faculty, and Student roles; scaled to 3,000+ registered users."
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    title: "Multi-Tenant ERP System",
    description: "A scalable SaaS platform for educational institutions with strict data isolation and secure payment integration.",
    tech: ["Next.js", "Node.js", "Prisma", "PostgreSQL", "Redis", "HyperPG"],
    link: "https://app.timelly.in",
    image: "https://picsum.photos/seed/erp/1200/800"
  },
  {
    title: "QR-Based Attendance System",
    description: "Real-time attendance tracking system using dynamic QR codes for students and faculty.",
    tech: ["Next.js", "Node.js", "PostgreSQL", "Tailwind CSS", "JWT"],
    link: "https://app.timelly.in",
    image: "https://picsum.photos/seed/qr/1200/800"
  },
  {
    title: "Blood Donor Discovery",
    description: "Emergency matching system to connect students with nearby blood donors across campus.",
    tech: ["React", "Node.js", "MongoDB", "Express"],
    image: "https://picsum.photos/seed/blood/1200/800"
  }
];

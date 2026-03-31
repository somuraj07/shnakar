export interface NavItem {
  label: string;
  href: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface Reason {
  number: string;
  title: string;
  description: string;
}

export interface Service {
  title: string;
  description: string;
  tools: string[];
  featured?: boolean;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  summary: string;
  skills: string[];
}

export interface Project {
  title: string;
  description: string;
  stack: string[];
  image: string;
  link?: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  location: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface LanguageOption {
  code: string;
  label: string;
  flag: string;
}

export const SITE = {
  name: "K Somasankar",
  role: "Software Development Engineer",
  availability: "Available for work",
  workModes: "Open to full-time, freelance, and contract roles across remote or onsite teams.",
  location: "Based in India. Open to working with India, UK, EU, and US teams.",
  intro:
    "Results-driven SDE with hands-on experience building scalable, secure, multi-tenant SaaS platforms using Next.js, Node.js, PostgreSQL, and REST APIs.",
  email: "katikasomasankar@gmail.com",
  github: "https://github.com/somuraj07",
  linkedin: "https://linkedin.com/in/somuraj7",
};

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "Why hire me", href: "#why-hire-me" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export const STATS: Stat[] = [
  { value: "3,000+", label: "Users served across production platforms" },
  { value: "10,000+", label: "Active users supported in ERP workflows" },
  { value: "40%", label: "Average API response-time improvement" },
  { value: "99.9%", label: "Uptime achieved across core backend systems" },
];

export const REASONS: Reason[] = [
  {
    number: "01",
    title: "Scalable SaaS delivery",
    description: "Built secure multi-tenant SaaS systems with strict data isolation and production-grade architecture.",
  },
  {
    number: "02",
    title: "Strong system design",
    description: "Comfortable with HLD, LLD, caching, load balancing, RBAC, ABAC, and event-driven backend design.",
  },
  {
    number: "03",
    title: "Real product impact",
    description: "Delivered ERP, QR identity, healthcare, e-commerce, and public-sector platforms solving real operational problems.",
  },
  {
    number: "04",
    title: "Clean engineering focus",
    description: "Prioritizes secure architecture, maintainable code, performance optimization, and practical business outcomes.",
  },
];

export const SERVICES: Service[] = [
  {
    title: "Full Stack SaaS Development",
    description: "Scalable applications built with Next.js, Node.js, and PostgreSQL for ERP, QR, and business workflows.",
    tools: ["Next.js", "Node.js", "TypeScript", "PostgreSQL", "REST APIs", "Prisma ORM"],
    featured: true,
  },
  {
    title: "Backend and API Systems",
    description: "Event-driven backends, JWT auth, RBAC and ABAC authorization, audit logging, and high-availability API architecture.",
    tools: ["Node.js", "Express.js", "Redis", "JWT", "RBAC/ABAC", "WebSockets"],
    featured: true,
  },
  {
    title: "Database and Multi-Tenant Architecture",
    description: "Tenant-safe schemas, PostgreSQL row-level security, Prisma ORM, and data isolation strategies for growing systems.",
    tools: ["PostgreSQL", "MongoDB", "MySQL", "Prisma ORM", "Mongoose", "RLS"],
  },
  {
    title: "Performance and Optimization",
    description: "API and platform optimization focused on faster response time, scalability, and efficient production operations.",
    tools: ["Caching", "Load Balancing", "REST Optimization", "Redis", "Monitoring", "CI/CD"],
    featured: true,
  },
  {
    title: "Payment and Workflow Integrations",
    description: "Secure payment flows, refunds, reconciliation, and admin workflows for ERP and transaction-driven products.",
    tools: ["HyperPG", "Razorpay", "Stripe", "PayPal", "Juspay", "Admin Workflows"],
  },
  {
    title: "Cloud and DevOps Delivery",
    description: "Deployments and production setups using AWS, Docker, Vercel, Cloudflare Workers, and version-controlled delivery pipelines.",
    tools: ["AWS", "Docker", "Vercel", "Cloudflare Workers", "Git", "CI/CD"],
  },
  {
    title: "Security and Access Control",
    description: "Production-ready authentication and data protection using JWT, session management, soft deletes, and audit logging.",
    tools: ["JWT", "NextAuth.js", "Session Management", "Audit Logging", "Soft Deletes", "Authorization"],
  },
];

export const EXPERIENCE: Experience[] = [
  {
    company: "Shraddha Infotech Solutions",
    role: "Software Development Engineer (SDE)",
    period: "2025 - Present",
    location: "India",
    summary: "Architected and delivered a multi-tenant SaaS ERP platform using PostgreSQL row-level security, Prisma ORM, Redis, JWT auth, audit logging, and soft deletes while supporting large-scale education workflows.",
    skills: ["Next.js", "Node.js", "PostgreSQL", "Prisma", "Redis", "RBAC/ABAC"],
  },
  {
    company: "College Management Systems",
    role: "Freelance Full Stack Developer",
    period: "2022 - 2025",
    location: "India",
    summary: "Designed and deployed a QR-based college management platform with digital identity, real-time attendance tracking, complaint workflows, outpass approvals, blog publishing, and blood donor discovery.",
    skills: ["Next.js", "PostgreSQL", "Tailwind CSS", "JWT", "RBAC", "Vercel"],
  },
];

export const PROJECTS: Project[] = [
  {
    title: "ERP Student Management System",
    description: "Multi-tenant ERP platform with strict tenant-level data isolation, secure online fee payments, hostel and bus booking, and transaction reconciliation workflows.",
    stack: ["Next.js", "Node.js", "Prisma", "PostgreSQL", "Redis", "HyperPG", "JWT"],
    image: "/photos/timelly.png",
    link: "https://app.timelly.in",
  },
  {
    title: "SMS QR-Based College Platform",
    description: "QR-code digital identity system for real-time attendance, complaints, outpass workflows, and campus-wide student operations.",
    stack: ["Next.js", "Node.js", "PostgreSQL", "Tailwind CSS", "JWT", "RBAC"],
    image: "/photos/sse.png",
    link: "https://ssesms.vercel.app",
  },
  {
    title: "Blood Donor Discovery Module",
    description: "Emergency matching module connecting students with nearby donors across campus, built for real-world response use cases inside the college platform.",
    stack: ["React", "Node.js", "MongoDB", "Express", "Role Dashboards"],
    image: "/photos/sse.png",
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Built secure SaaS platforms with strong backend engineering, practical system design, and a clear focus on business impact.",
    name: "Resume highlight",
    role: "SaaS and ERP Delivery",
    location: "Professional summary",
  },
  {
    quote:
      "Strong working knowledge across Next.js, Node.js, PostgreSQL, Redis, authentication, and multi-tenant architecture.",
    name: "Technical profile",
    role: "Core stack",
    location: "Resume summary",
  },
  {
    quote:
      "Fast learner with a bias for clean code, real-world impact, and solving system design challenges with scalable implementation.",
    name: "Engineering mindset",
    role: "Professional summary",
    location: "Resume summary",
  },
];

export const FAQS: FaqItem[] = [
  {
    question: "What services do you offer?",
    answer:
      "I build full-stack SaaS products, ERP systems, QR-based workflow platforms, backend APIs, and secure multi-tenant applications.",
  },
  {
    question: "What technologies do you specialize in?",
    answer:
      "My core stack includes Next.js, Node.js, PostgreSQL, Prisma ORM, Redis, REST APIs, TypeScript, JWT authentication, and cloud deployment workflows.",
  },
  {
    question: "What kind of systems have you built?",
    answer:
      "I have built enterprise ERP systems, QR-based identity platforms, payment-enabled education systems, and cloud-native business applications.",
  },
  {
    question: "What is your education and training background?",
    answer:
      "I am pursuing a B.Tech in Electronics and Communication Engineering and have completed focused training in full stack development, system design, DevOps, MERN, and data structures.",
  },
];

export const LANGUAGE_OPTIONS: LanguageOption[] = [
  { code: "en", label: "English", flag: "EN" },
  { code: "hi", label: "Hindi", flag: "HI" },
  { code: "fr", label: "French", flag: "FR" },
  { code: "de", label: "German", flag: "DE" },
  { code: "es", label: "Spanish", flag: "ES" },
];

export const MARQUEE_ITEMS = [
  "React",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "shadcn/ui",
  "Node.js",
  "Express",
  "MongoDB",
  "Supabase",
  "Framer Motion",
  "SEO",
  "Performance",
];

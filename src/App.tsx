import { useEffect, useState, type ReactNode } from 'react';
import { motion } from 'framer-motion';
import { 
  ChevronRight,
  BriefcaseBusiness,
  Code2,
  Download,
  ExternalLink,
  Globe,
  Github, 
  Instagram,
  Layers3,
  Linkedin, 
  Mail, 
  Menu,
  Moon, 
  MonitorSmartphone,
  Sparkles,
  Sun,
  Twitter,
  Zap,
  X,
} from 'lucide-react';
import {
  EXPERIENCE,
  FAQS,
  LANGUAGE_OPTIONS,
  MARQUEE_ITEMS,
  NAV_ITEMS,
  PROJECTS,
  REASONS,
  SERVICES,
  SITE,
  STATS,
  TESTIMONIALS,
} from './constants';

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [language, setLanguage] = useState('en');

  const marqueeItems = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];
  const t = translations[language] ?? translations.en;
  const navItems = NAV_ITEMS.map((item) => ({
    ...item,
    label: t.nav[item.href as keyof typeof t.nav] ?? item.label,
  }));

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDarkMode);
  }, [isDarkMode]);

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(148,163,184,0.10),_transparent_24%),linear-gradient(180deg,_#ffffff_0%,_#f8fafc_100%)] text-slate-950 transition-colors duration-300 dark:bg-[radial-gradient(circle_at_top,_rgba(16,185,129,0.16),_transparent_22%),linear-gradient(180deg,_#050816_0%,_#0b0b0b_100%)] dark:text-white">
      <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/70 backdrop-blur-xl dark:border-white/10 dark:bg-[#0b0b0b]/70">
        <div className="section-shell flex h-16 items-center justify-between gap-3 sm:h-20 sm:gap-4">
          <a href="#home" className="text-lg font-bold tracking-tight">
            {SITE.name}
          </a>

          <div className="flex items-center gap-2 sm:gap-3">
            <div className="hidden items-center rounded-full border border-slate-200 bg-white/80 p-1 dark:border-white/10 dark:bg-white/5 md:flex">
              {LANGUAGE_OPTIONS.map((option) => (
                <button
                  key={option.code}
                  type="button"
                  onClick={() => setLanguage(option.code)}
                  className={`rounded-full px-3 py-1.5 text-xs font-semibold transition ${
                    language === option.code
                      ? 'bg-slate-950 text-white dark:bg-white dark:text-slate-950'
                      : 'text-slate-500 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white'
                  }`}
                >
                  {option.flag}
                </button>
            ))}
          </div>
          <button 
              type="button"
              aria-label="Toggle dark mode"
              onClick={() => setIsDarkMode((value) => !value)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-gradient-to-br from-white to-slate-100 text-slate-700 shadow-[0_8px_30px_rgba(15,23,42,0.08)] hover:scale-105 hover:border-slate-300 dark:border-white/10 dark:bg-[linear-gradient(135deg,rgba(255,255,255,0.16),rgba(255,255,255,0.04))] dark:text-white sm:h-11 sm:w-11"
            >
              {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>

            <a
              href="#contact"
              className="hidden rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-800 dark:bg-white dark:text-slate-950 dark:hover:bg-slate-200 sm:inline-flex"
            >
              {t.hire}
            </a>

            <button
              type="button"
              aria-label="Toggle menu"
              onClick={() => setIsMobileMenuOpen((value) => !value)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-700 lg:hidden dark:border-white/10 dark:text-white sm:h-11 sm:w-11"
            >
              {isMobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="section-shell pb-4 lg:hidden">
            <div className="surface-card flex flex-col gap-1 p-3">
              <div className="mb-2 flex flex-wrap gap-2 md:hidden">
                {LANGUAGE_OPTIONS.map((option) => (
                  <button
                    key={option.code}
                    type="button"
                    onClick={() => setLanguage(option.code)}
                    className={`rounded-full px-3 py-1.5 text-xs font-semibold transition ${
                      language === option.code
                        ? 'bg-slate-950 text-white dark:bg-white dark:text-slate-950'
                        : 'border border-slate-200 text-slate-500 dark:border-white/10 dark:text-slate-300'
                    }`}
                  >
                    {option.flag}
                  </button>
                ))}
              </div>
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="rounded-2xl px-4 py-3 text-sm text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-white/5"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </header>

      <main>
        <section id="home" className="section-shell py-12 sm:py-16 lg:py-24">
          <div className="mx-auto flex max-w-5xl flex-col items-center text-center">
            <div className="mb-5 h-32 w-32 overflow-hidden rounded-full border border-slate-200 bg-white shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl dark:border-white/10 dark:bg-white/5 sm:mb-6 sm:h-40 sm:w-40">
              <img
                src="/photos/Pic.jpeg"
                alt="K Somasankar"
                className="h-full w-full object-cover object-top grayscale transition duration-500 hover:grayscale-0"
              />
            </div>

            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1.5 text-xs font-medium text-emerald-700 dark:border-emerald-400/20 dark:bg-emerald-400/10 dark:text-emerald-300 sm:px-4 sm:py-2 sm:text-sm">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              {SITE.availability}
            </div>

            <div className="mt-5 flex flex-wrap items-center justify-center gap-2 text-xs text-slate-500 dark:text-slate-400">
              <span className="rounded-full border border-slate-200 px-3 py-1.5 dark:border-white/10">Freelance</span>
              <span className="rounded-full border border-slate-200 px-3 py-1.5 dark:border-white/10">Full-time</span>
              <span className="rounded-full border border-slate-200 px-3 py-1.5 dark:border-white/10">Remote</span>
              <span className="rounded-full border border-slate-200 px-3 py-1.5 dark:border-white/10">Onsite</span>
            </div>

            <p className="mt-4 max-w-xl text-sm leading-7 text-slate-500 dark:text-slate-400 sm:max-w-2xl">
              {SITE.location}
            </p>

            <h1 className="mt-7 max-w-4xl text-4xl font-semibold tracking-tight text-slate-950 sm:text-6xl lg:text-[4.7rem] lg:leading-[1.02] dark:text-white">
              {t.heroTitlePrefix} <span className="text-rose-500">{SITE.name}</span> &bull; {SITE.role}
            </h1>

            <p className="mt-5 max-w-2xl px-2 text-base leading-7 text-slate-600 dark:text-slate-300 sm:px-0 sm:text-lg sm:leading-8">
              {SITE.intro}
            </p>

            <div className="mt-8 grid w-full max-w-2xl grid-cols-2 gap-2 sm:flex sm:max-w-none sm:flex-wrap sm:items-center sm:justify-center sm:gap-3">
              {STATS.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-slate-200 bg-white px-3 py-2 text-center text-xs leading-5 text-slate-600 shadow-sm dark:border-white/10 dark:bg-white/5 dark:text-slate-300 sm:rounded-full sm:px-4 sm:text-sm"
                >
                  <span className="block font-semibold text-slate-900 dark:text-white sm:inline">{stat.value}</span>
                  <span className="sm:ml-1">{stat.label}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 grid w-full max-w-sm gap-3 sm:flex sm:max-w-none sm:flex-wrap sm:items-center sm:justify-center">
              <a
                href="#contact"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-slate-950 px-6 py-3.5 text-sm font-semibold text-white hover:bg-slate-800 dark:bg-white dark:text-slate-950 dark:hover:bg-slate-200 sm:w-auto"
              >
                {t.getInTouch}
                <ChevronRight size={16} />
              </a>
              <a
                href="#projects"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3.5 text-sm font-semibold text-slate-900 hover:bg-slate-50 dark:border-white/15 dark:bg-white/5 dark:text-white dark:hover:bg-white/10 sm:w-auto"
              >
                {t.viewProjects}
                <ChevronRight size={16} />
              </a>
              <a
                href="/photos/SDE-Somuraj.pdf"
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3.5 text-sm font-semibold text-slate-900 hover:bg-slate-50 dark:border-white/15 dark:bg-white/5 dark:text-white dark:hover:bg-white/10 sm:w-auto"
              >
                Download CV
                <Download size={16} />
              </a>
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
              <HeroIconLink href={SITE.linkedin} icon={<Linkedin size={18} />} label="LinkedIn" />
              <HeroIconLink href={SITE.github} icon={<Github size={18} />} label="GitHub" />
              <HeroIconLink href={`mailto:${SITE.email}`} icon={<Mail size={18} />} label="Email" />
              <HeroIconLink href="#" icon={<Instagram size={18} />} label="Instagram" />
              <HeroIconLink href="#" icon={<Twitter size={18} />} label="Twitter" />
            </div>
          </div>
        </section>

        <section className="section-shell pb-8">
          <div className="overflow-hidden rounded-full border border-slate-200 bg-white/70 py-3 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5">
            <div className="animate-marquee flex min-w-max items-center gap-4 whitespace-nowrap px-4">
              {marqueeItems.map((item, index) => (
                <div key={`${item}-${index}`} className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-medium text-slate-700 dark:text-slate-200 sm:gap-3 sm:text-sm">
                  {index % 4 === 0 && <Code2 size={16} className="text-emerald-500" />}
                  {index % 4 === 1 && <Layers3 size={16} className="text-sky-500" />}
                  {index % 4 === 2 && <Globe size={16} className="text-violet-500" />}
                  {index % 4 === 3 && <Sparkles size={16} className="text-amber-500" />}
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="why-hire-me" className="section-shell py-16 lg:py-24">
          <div className="mb-12 max-w-3xl">
            <p className="section-kicker">{t.whyHireMe}</p>
            <h2 className="section-title mt-4">{t.whyHireMeTitle}</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {REASONS.map((reason, index) => (
              <motion.div
                key={reason.number}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: index * 0.08, duration: 0.45 }}
                whileHover={{ y: -8, scale: 1.01 }}
                className="surface-card p-6"
              >
                <p className="text-sm font-semibold text-emerald-600 dark:text-emerald-400">{reason.number}</p>
                <h3 className="mt-4 text-xl font-semibold">{reason.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">{reason.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="about" className="section-shell py-16 lg:py-24">
          <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="surface-card p-8 sm:p-10">
              <p className="section-kicker">{t.about}</p>
              <h2 className="section-title mt-4">Building secure, scalable products with practical system thinking.</h2>
              <p className="mt-6 max-w-3xl text-base leading-8 text-slate-600 dark:text-slate-300">
                I am a results-driven software engineer focused on multi-tenant SaaS platforms, backend architecture, and production-ready web applications. My work combines strong system design with clean implementation across Next.js, Node.js, PostgreSQL, Prisma, and Redis.
              </p>
              <p className="mt-4 max-w-3xl text-base leading-8 text-slate-600 dark:text-slate-300">
                I enjoy turning complex workflows into reliable products, whether that means designing tenant-safe ERP systems, building QR-based operational tools, or improving API performance for real users at scale.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                <div className="rounded-2xl bg-slate-50 p-5 dark:bg-white/5">
                  <p className="text-sm font-semibold text-slate-900 dark:text-white">Education</p>
                  <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300">B.Tech in Electronics and Communication Engineering, 2022-2026.</p>
                </div>
                <div className="rounded-2xl bg-slate-50 p-5 dark:bg-white/5">
                  <p className="text-sm font-semibold text-slate-900 dark:text-white">Training</p>
                  <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300">100xDevs cohorts in full stack, system design, and DevOps.</p>
                </div>
                <div className="rounded-2xl bg-slate-50 p-5 dark:bg-white/5">
                  <p className="text-sm font-semibold text-slate-900 dark:text-white">Focus</p>
                  <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300">SaaS architecture, secure workflows, performance, and business-ready delivery.</p>
                </div>
              </div>
            </div>

            <div className="surface-card p-8 sm:p-10">
              <p className="section-kicker">Core Stack</p>
              <h2 className="mt-4 text-2xl font-semibold">Technologies I use in production.</h2>
              <div className="mt-6 flex flex-wrap gap-3">
                {['Next.js', 'Node.js', 'TypeScript', 'PostgreSQL', 'Prisma ORM', 'Redis', 'REST APIs', 'JWT', 'Docker', 'AWS', 'Vercel', 'RBAC/ABAC'].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-slate-200 px-3 py-2 text-xs font-medium text-slate-700 dark:border-white/10 dark:text-slate-200"
                  >
                    {item}
                  </span>
                ))}
              </div>
              <div className="mt-8 space-y-4 text-sm leading-7 text-slate-600 dark:text-slate-300">
                <p>Built systems for ERP, college operations, attendance tracking, payments, and emergency support workflows.</p>
                <p>Comfortable across frontend, backend, security, performance, and deployment layers from design to launch.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="section-shell py-16 lg:py-24">
          <div className="mb-12 max-w-3xl">
            <p className="section-kicker">{t.services}</p>
            <h2 className="section-title mt-4">{t.servicesTitle}</h2>
          </div>
          <div className="grid gap-6 lg:grid-cols-2">
            {SERVICES.map((service, index) => (
                <motion.div 
                key={service.title}
                initial={{ opacity: 0, y: 26 }}
                  whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: index * 0.05, duration: 0.45 }}
                whileHover={{ y: -8 }}
                className={`surface-card p-7 ${service.featured ? 'ring-1 ring-emerald-500/20' : ''}`}
              >
                <div className="flex items-start justify-between gap-4">
                    <div>
                    <h3 className="text-2xl font-semibold">{service.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">{service.description}</p>
                  </div>
                  {service.featured && (
                    <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700 dark:bg-emerald-400/10 dark:text-emerald-300">
                      {t.mostRequested}
                    </span>
                  )}
                </div>
                <div className="mt-6 flex flex-wrap gap-2">
                  {service.tools.map((tool) => (
                    <span
                      key={tool}
                      className="rounded-full border border-slate-200 px-3 py-1.5 text-xs font-medium text-slate-700 dark:border-white/10 dark:text-slate-200"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
                </motion.div>
              ))}
          </div>
        </section>

        <section id="experience" className="section-shell py-16 lg:py-24">
          <div className="mb-12 max-w-3xl">
            <p className="section-kicker">{t.experience}</p>
            <h2 className="section-title mt-4">Professional experience shaped around shipped systems, not just titles.</h2>
          </div>
          <div className="space-y-8">
            {EXPERIENCE.map((item, index) => (
              <motion.div 
                key={`${item.company}-${item.role}`}
                initial={{ opacity: 0, y: 40, x: index % 2 === 0 ? -24 : 24 }}
                whileInView={{ opacity: 1, y: 0, x: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ delay: index * 0.08, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -10 }}
                className="group relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white/95 p-8 shadow-sm transition-colors dark:border-white/10 dark:bg-white/5 sm:p-10"
              >
                <div className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-emerald-500 via-sky-500 to-violet-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                  <div>
                    <p className="text-sm font-medium uppercase tracking-[0.18em] text-slate-500 transition-colors group-hover:text-emerald-600 dark:text-slate-400 dark:group-hover:text-emerald-400">{item.company} · {item.location}</p>
                    <h3 className="mt-3 text-2xl font-semibold transition-transform duration-300 group-hover:translate-x-1 sm:text-3xl">{item.role}</h3>
                  </div>
                  <span className="rounded-full bg-emerald-50 px-4 py-2 text-sm font-medium text-emerald-700 dark:bg-emerald-400/10 dark:text-emerald-300">{item.period}</span>
                </div>
                <p className="mt-6 max-w-4xl text-base leading-8 text-slate-600 dark:text-slate-300">{item.summary}</p>
                <div className="mt-8 flex flex-wrap gap-3">
                  {item.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full bg-slate-100 px-3 py-2 text-xs font-medium text-slate-700 dark:bg-white/5 dark:text-slate-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="projects" className="section-shell py-16 lg:py-24">
          <div className="mb-12 max-w-3xl">
            <p className="section-kicker">{t.projects}</p>
            <h2 className="section-title mt-4">Selected projects with real product context and clean presentation.</h2>
          </div>
          <div className="grid gap-8 lg:grid-cols-3">
            {PROJECTS.map((project, index) => (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ delay: index * 0.08, duration: 0.45 }}
                whileHover={{ y: -10 }}
                className="surface-card overflow-hidden rounded-[2rem]"
              >
                <PhotoFrame src={project.image} title={project.title} />
                <div className="p-7">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="max-w-[14rem] text-2xl font-semibold leading-tight">{project.title}</h3>
                    {project.link && (
                      <a
                        href={project.link}
                        aria-label={`View ${project.title}`}
                        className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-700 hover:bg-slate-100 dark:border-white/10 dark:text-white dark:hover:bg-white/5"
                      >
                        <ExternalLink size={16} />
                      </a>
                    )}
                  </div>
                  <p className="mt-5 text-sm leading-7 text-slate-600 dark:text-slate-300">{project.description}</p>
                  <div className="mt-7 flex flex-wrap gap-2">
                    {project.stack.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-slate-200 px-3 py-1.5 text-xs font-medium text-slate-700 dark:border-white/10 dark:text-slate-200"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        <section id="testimonials" className="section-shell py-16 lg:py-24">
          <div className="mb-12 max-w-3xl">
            <p className="section-kicker">{t.testimonials}</p>
            <h2 className="section-title mt-4">{t.testimonialsTitle}</h2>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {TESTIMONIALS.map((item, index) => (
              <blockquote key={index} className="surface-card p-7">
                <p className="text-base leading-8 text-slate-700 dark:text-slate-200">&ldquo;{item.quote}&rdquo;</p>
                <footer className="mt-6">
                  <p className="font-semibold">{item.name}</p>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    {item.role} · {item.location}
                  </p>
                </footer>
              </blockquote>
            ))}
          </div>
        </section>

        <section id="faq" className="section-shell py-16 lg:py-24">
          <div className="mb-12 max-w-3xl">
            <p className="section-kicker">FAQ</p>
            <h2 className="section-title mt-4">{t.faqTitle}</h2>
          </div>
          <div className="space-y-4">
            {FAQS.map((item) => (
              <details key={item.question} className="surface-card group p-6">
                <summary className="cursor-pointer list-none text-lg font-semibold">
                  <span className="flex items-center justify-between gap-4">
                    {item.question}
                    <span className="text-slate-400 transition group-open:rotate-45">+</span>
                  </span>
                </summary>
                <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300">{item.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section id="contact" className="section-shell py-16 lg:py-24">
          <div className="surface-card overflow-hidden p-8 sm:p-10 lg:p-12">
            <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr]">
              <div>
                <p className="section-kicker">{t.contact}</p>
                <h2 className="section-title mt-4">{t.contactTitle}</h2>
                <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 dark:text-slate-300">
                  {t.contactBody}
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <SocialButton href={`mailto:${SITE.email}`} label={SITE.email} icon={<Mail size={18} />} />
                  <SocialButton href={SITE.linkedin} label="LinkedIn" icon={<Linkedin size={18} />} />
                  <SocialButton href={SITE.github} label="GitHub" icon={<Github size={18} />} />
                </div>
              </div>

              <div className="surface-card p-6">
                <div className="space-y-4">
                  <Field label={t.form.name} placeholder={t.form.namePlaceholder} />
                  <Field label={t.form.email} placeholder={t.form.emailPlaceholder} />
                  <Field label={t.form.project} placeholder={t.form.projectPlaceholder} multiline />
                  <Field label={t.form.budget} placeholder={t.form.budgetPlaceholder} />
                  <Field label={t.form.timeline} placeholder={t.form.timelinePlaceholder} />
                </div>
                <a
                  href={`mailto:${SITE.email}?subject=${encodeURIComponent('Portfolio project inquiry')}`}
                  className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-slate-950 px-6 py-3.5 text-sm font-semibold text-white hover:bg-slate-800 dark:bg-white dark:text-slate-950 dark:hover:bg-slate-200"
                >
                  <BriefcaseBusiness size={16} />
                  {t.form.submit}
                </a>
                <p className="mt-4 text-xs text-slate-500 dark:text-slate-400">{t.form.note}</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="section-shell mb-28 flex flex-col gap-3 border-t border-slate-200 py-8 text-sm text-slate-500 dark:border-white/10 dark:text-slate-400 md:flex-row md:items-center md:justify-between">
        <p>© 2026 {SITE.name}. All rights reserved.</p>
        <div className="flex items-center gap-3">
          <span>{LANGUAGE_OPTIONS.find((option) => option.code === language)?.label ?? 'English'}</span>
          <span>•</span>
          <p>Reference-inspired structure based on yashkapure.com</p>
        </div>
      </footer>

      <div className="fixed inset-x-0 bottom-4 z-50 hidden px-4 lg:block">
        <div className="mx-auto flex max-w-max items-center gap-2 rounded-full border border-slate-200/80 bg-white/80 px-3 py-3 shadow-[0_18px_60px_rgba(15,23,42,0.18)] backdrop-blur-xl dark:border-white/10 dark:bg-[#0b0b0b]/80">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-slate-950 dark:text-slate-300 dark:hover:bg-white/10 dark:hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

const translations = {
  en: {
    nav: {
      '#home': 'Home',
      '#why-hire-me': 'Why hire me',
      '#about': 'About',
      '#services': 'Services',
      '#experience': 'Experience',
      '#projects': 'Projects',
      '#testimonials': 'Testimonials',
      '#contact': 'Contact',
    },
    hire: 'Hire me',
    heroKicker: 'Frontend Engineer',
    heroTitlePrefix: "Hi, I'm",
    viewProjects: 'View projects',
    getInTouch: 'Get in touch',
    exploreMore: 'Explore more',
    heroCover: 'Hero Cover',
    portfolioCover: 'Portfolio Cover',
    heroCoverTitle: 'Fast interfaces. Clean systems. Better product delivery.',
    heroCoverText: 'Add your cover image at',
    badges: ['React and Next.js', 'Responsive UI', 'Performance Focused'],
    whyHireMe: 'Why hire me',
    whyHireMeTitle: 'Work with me for clear communication and production-ready delivery.',
    about: 'About me',
    aboutTitle: 'I build modern websites and web apps that feel fast, polished, and dependable.',
    assets: 'Assets',
    assetsTitle: 'Ready-made folder for your images and resume',
    assetsBody1: 'Use',
    assetsBody2: 'Suggested files:',
    assetsBody3: 'You can also place your resume as `/public/resume.pdf` and link it from the hero later.',
    services: 'Services',
    servicesTitle: 'Production systems I can build, improve, and run for you.',
    mostRequested: 'Most requested',
    experience: 'Experience',
    experienceTitle: 'Professional experience based on your portfolio resume details.',
    projects: 'Projects',
    projectsTitle: 'Selected work and case-study style project cards.',
    testimonials: 'Testimonials',
    testimonialsTitle: 'Client and colleague feedback.',
    faqTitle: 'Answers to common questions about your services and availability.',
    contact: 'Contact',
    contactTitle: "Share your project details and I'll respond with something useful.",
    contactBody: 'Open to freelance, contract, and full-time roles. Use the email button below to contact me directly.',
    form: {
      name: 'Your name',
      namePlaceholder: 'Enter your name',
      email: 'Email',
      emailPlaceholder: 'Enter your email',
      project: 'Project details',
      projectPlaceholder: 'Tell me about your project',
      budget: 'Estimated budget',
      budgetPlaceholder: 'Budget range',
      timeline: 'Timeline',
      timelinePlaceholder: 'Desired timeline',
      submit: 'Email me directly',
      note: 'This button opens your mail app to contact katikasomasankar@gmail.com.',
    },
  },
  hi: {
    nav: {
      '#home': 'होम',
      '#why-hire-me': 'मुझे क्यों चुनें',
      '#about': 'परिचय',
      '#services': 'सेवाएं',
      '#experience': 'अनुभव',
      '#projects': 'प्रोजेक्ट्स',
      '#testimonials': 'प्रशंसापत्र',
      '#contact': 'संपर्क',
    },
    hire: 'हायर करें',
    heroKicker: 'फ्रंटएंड इंजीनियर',
    heroTitlePrefix: 'नमस्ते, मैं हूँ',
    viewProjects: 'प्रोजेक्ट्स देखें',
    getInTouch: 'संपर्क करें',
    exploreMore: 'और देखें',
    heroCover: 'हीरो कवर',
    portfolioCover: 'पोर्टफोलियो कवर',
    heroCoverTitle: 'तेज़ इंटरफेस। साफ सिस्टम। बेहतर प्रोडक्ट डिलीवरी।',
    heroCoverText: 'अपनी कवर इमेज यहां रखें',
    badges: ['React और Next.js', 'Responsive UI', 'Performance Focused'],
    whyHireMe: 'मुझे क्यों चुनें',
    whyHireMeTitle: 'स्पष्ट संवाद और प्रोडक्शन-रेडी डिलीवरी के लिए मेरे साथ काम करें।',
    about: 'मेरे बारे में',
    aboutTitle: 'मैं आधुनिक वेबसाइट्स और वेब ऐप्स बनाता हूँ जो तेज़, साफ और भरोसेमंद महसूस हों।',
    assets: 'एसेट्स',
    assetsTitle: 'आपकी इमेज और रिज्यूमे के लिए तैयार फोल्डर',
    assetsBody1: 'सभी इमेज के लिए उपयोग करें',
    assetsBody2: 'सुझाए गए फाइल नाम:',
    assetsBody3: 'आप अपना रिज्यूमे भी `/public/resume.pdf` के रूप में रख सकते हैं।',
    services: 'सेवाएं',
    servicesTitle: 'वे सिस्टम जिन्हें मैं आपके लिए बना, सुधार और चला सकता हूँ।',
    mostRequested: 'सबसे अधिक मांग',
    experience: 'अनुभव',
    experienceTitle: 'आपके रिज्यूमे विवरण के आधार पर प्रोफेशनल अनुभव।',
    projects: 'प्रोजेक्ट्स',
    projectsTitle: 'चयनित कार्य और केस-स्टडी स्टाइल प्रोजेक्ट कार्ड्स।',
    testimonials: 'प्रशंसापत्र',
    testimonialsTitle: 'क्लाइंट और सहयोगियों की प्रतिक्रिया।',
    faqTitle: 'आपकी सेवाओं और उपलब्धता से जुड़े सामान्य सवालों के जवाब।',
    contact: 'संपर्क',
    contactTitle: 'अपनी प्रोजेक्ट डिटेल्स शेयर करें, मैं उपयोगी जवाब दूँगा।',
    contactBody: 'फ्रीलांस, कॉन्ट्रैक्ट और फुल-टाइम रोल्स के लिए उपलब्ध। नीचे दिए गए ईमेल बटन का उपयोग करें।',
    form: {
      name: 'आपका नाम',
      namePlaceholder: 'अपना नाम लिखें',
      email: 'ईमेल',
      emailPlaceholder: 'अपना ईमेल लिखें',
      project: 'प्रोजेक्ट विवरण',
      projectPlaceholder: 'अपने प्रोजेक्ट के बारे में बताएं',
      budget: 'अनुमानित बजट',
      budgetPlaceholder: 'बजट रेंज',
      timeline: 'टाइमलाइन',
      timelinePlaceholder: 'चाहिए टाइमलाइन',
      submit: 'सीधे ईमेल करें',
      note: 'यह बटन आपकी मेल ऐप खोलकर katikasomasankar@gmail.com पर संपर्क करेगा।',
    },
  },
  fr: {
    nav: { '#home': 'Accueil', '#why-hire-me': 'Pourquoi moi', '#about': 'A propos', '#services': 'Services', '#experience': 'Experience', '#projects': 'Projets', '#testimonials': 'Avis', '#contact': 'Contact' },
    hire: 'Me recruter', heroKicker: 'Ingenieur Frontend', heroTitlePrefix: 'Bonjour, je suis', viewProjects: 'Voir les projets', getInTouch: 'Me contacter', exploreMore: 'Voir plus', heroCover: 'Couverture', portfolioCover: 'Couverture Portfolio', heroCoverTitle: 'Interfaces rapides. Systemes propres. Meilleure livraison produit.', heroCoverText: 'Ajoutez votre image de couverture dans', badges: ['React et Next.js', 'UI responsive', 'Performance'],
    whyHireMe: 'Pourquoi moi', whyHireMeTitle: 'Travaillez avec moi pour une communication claire et une livraison fiable.', about: 'A propos', aboutTitle: 'Je cree des sites et applications modernes, rapides et fiables.', assets: 'Ressources', assetsTitle: 'Dossier pret pour vos images et CV', assetsBody1: 'Utilisez', assetsBody2: 'Fichiers suggeres :', assetsBody3: 'Vous pouvez aussi ajouter votre CV dans `/public/resume.pdf`.', services: 'Services', servicesTitle: 'Systemes de production que je peux creer et ameliorer.', mostRequested: 'Le plus demande', experience: 'Experience', experienceTitle: 'Experience professionnelle basee sur votre CV.', projects: 'Projets', projectsTitle: 'Travaux selectionnes et cartes de projets.', testimonials: 'Avis', testimonialsTitle: 'Retours de clients et collegues.', faqTitle: 'Reponses aux questions frequentes.', contact: 'Contact', contactTitle: 'Partagez votre projet et je vous repondrai utilement.', contactBody: 'Disponible pour freelance, contrat et temps plein.', form: { name: 'Votre nom', namePlaceholder: 'Entrez votre nom', email: 'Email', emailPlaceholder: 'Entrez votre email', project: 'Details du projet', projectPlaceholder: 'Parlez-moi de votre projet', budget: 'Budget estime', budgetPlaceholder: 'Budget', timeline: 'Delai', timelinePlaceholder: 'Delai souhaite', submit: 'M envoyer un email', note: 'Ce bouton ouvre votre application mail pour contacter katikasomasankar@gmail.com.' },
  },
  de: {
    nav: { '#home': 'Start', '#why-hire-me': 'Warum ich', '#about': 'Uber mich', '#services': 'Leistungen', '#experience': 'Erfahrung', '#projects': 'Projekte', '#testimonials': 'Bewertungen', '#contact': 'Kontakt' },
    hire: 'Hire me', heroKicker: 'Frontend Engineer', heroTitlePrefix: 'Hallo, ich bin', viewProjects: 'Projekte ansehen', getInTouch: 'Kontakt aufnehmen', exploreMore: 'Mehr sehen', heroCover: 'Hero Bereich', portfolioCover: 'Portfolio Cover', heroCoverTitle: 'Schnelle Interfaces. Saubere Systeme. Bessere Produktlieferung.', heroCoverText: 'Fuge dein Titelbild ein unter', badges: ['React und Next.js', 'Responsive UI', 'Performance Fokus'],
    whyHireMe: 'Warum ich', whyHireMeTitle: 'Arbeite mit mir fur klare Kommunikation und starke Umsetzung.', about: 'Uber mich', aboutTitle: 'Ich entwickle moderne Websites und Web-Apps, die schnell und zuverlassig wirken.', assets: 'Assets', assetsTitle: 'Fertiger Ordner fur Bilder und Lebenslauf', assetsBody1: 'Verwende', assetsBody2: 'Empfohlene Dateinamen:', assetsBody3: 'Du kannst deinen Lebenslauf auch als `/public/resume.pdf` ablegen.', services: 'Leistungen', servicesTitle: 'Produktionsreife Systeme, die ich fur dich bauen und verbessern kann.', mostRequested: 'Am meisten gefragt', experience: 'Erfahrung', experienceTitle: 'Berufserfahrung basierend auf deinen Lebenslaufdaten.', projects: 'Projekte', projectsTitle: 'Ausgewahlte Arbeiten und Projektkarten.', testimonials: 'Bewertungen', testimonialsTitle: 'Feedback von Kunden und Kollegen.', faqTitle: 'Antworten auf haufige Fragen.', contact: 'Kontakt', contactTitle: 'Teile dein Projekt mit und ich antworte sinnvoll.', contactBody: 'Verfugbar fur Freelance, Vertrag und Vollzeit.', form: { name: 'Dein Name', namePlaceholder: 'Name eingeben', email: 'E-Mail', emailPlaceholder: 'E-Mail eingeben', project: 'Projektdetails', projectPlaceholder: 'Erzahle mir von deinem Projekt', budget: 'Budget', budgetPlaceholder: 'Budgetrahmen', timeline: 'Zeitrahmen', timelinePlaceholder: 'Gewunschter Zeitraum', submit: 'Direkt mailen', note: 'Dieser Button offnet dein Mailprogramm fur katikasomasankar@gmail.com.' },
  },
  es: {
    nav: { '#home': 'Inicio', '#why-hire-me': 'Por que yo', '#about': 'Sobre mi', '#services': 'Servicios', '#experience': 'Experiencia', '#projects': 'Proyectos', '#testimonials': 'Testimonios', '#contact': 'Contacto' },
    hire: 'Contratame', heroKicker: 'Ingeniero Frontend', heroTitlePrefix: 'Hola, soy', viewProjects: 'Ver proyectos', getInTouch: 'Contactar', exploreMore: 'Ver mas', heroCover: 'Portada', portfolioCover: 'Portada del Portfolio', heroCoverTitle: 'Interfaces rapidas. Sistemas limpios. Mejor entrega de producto.', heroCoverText: 'Agrega tu imagen de portada en', badges: ['React y Next.js', 'UI responsive', 'Enfoque en rendimiento'],
    whyHireMe: 'Por que yo', whyHireMeTitle: 'Trabaja conmigo para una comunicacion clara y una entrega solida.', about: 'Sobre mi', aboutTitle: 'Construyo sitios y apps modernas que se sienten rapidas, limpias y confiables.', assets: 'Recursos', assetsTitle: 'Carpeta lista para tus imagenes y CV', assetsBody1: 'Usa', assetsBody2: 'Archivos sugeridos:', assetsBody3: 'Tambien puedes agregar tu CV como `/public/resume.pdf`.', services: 'Servicios', servicesTitle: 'Sistemas de produccion que puedo crear y mejorar para ti.', mostRequested: 'Mas solicitado', experience: 'Experiencia', experienceTitle: 'Experiencia profesional basada en tu CV.', projects: 'Proyectos', projectsTitle: 'Trabajos seleccionados y tarjetas de proyectos.', testimonials: 'Testimonios', testimonialsTitle: 'Comentarios de clientes y colegas.', faqTitle: 'Respuestas a preguntas comunes.', contact: 'Contacto', contactTitle: 'Comparte tu proyecto y respondere con algo util.', contactBody: 'Disponible para freelance, contrato y tiempo completo.', form: { name: 'Tu nombre', namePlaceholder: 'Ingresa tu nombre', email: 'Correo', emailPlaceholder: 'Ingresa tu correo', project: 'Detalles del proyecto', projectPlaceholder: 'Cuentame sobre tu proyecto', budget: 'Presupuesto estimado', budgetPlaceholder: 'Rango de presupuesto', timeline: 'Tiempo', timelinePlaceholder: 'Tiempo deseado', submit: 'Enviarme un correo', note: 'Este boton abre tu app de correo para contactar a katikasomasankar@gmail.com.' },
  },
} as const;

function GlassBadge({ icon, label }: { icon: ReactNode; label: string }) {
  return (
    <div className="rounded-2xl border border-white/15 bg-white/10 px-4 py-3 backdrop-blur">
      <div className="flex items-center gap-2 text-sm font-medium text-white">
        {icon}
        <span>{label}</span>
      </div>
    </div>
  );
}

function HeroIconLink({
  href,
  icon,
  label,
}: {
  href: string;
  icon: ReactNode;
  label: string;
}) {
  return (
    <a
      href={href}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel={href.startsWith('http') ? 'noreferrer' : undefined}
      aria-label={label}
      className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:bg-slate-50 dark:border-white/10 dark:bg-white/5 dark:text-slate-200 dark:hover:bg-white/10"
    >
      {icon}
    </a>
  );
}

function SocialButton({
  href,
  icon,
  label,
}: {
  href: string;
  icon: ReactNode;
  label: string;
}) {
  return (
    <a
      href={href}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel={href.startsWith('http') ? 'noreferrer' : undefined}
      className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-4 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-100 dark:border-white/10 dark:text-slate-200 dark:hover:bg-white/5"
    >
      {icon}
      {label}
    </a>
  );
}

function PhotoFrame({ src, title }: { src: string; title: string }) {
  return (
    <div className="relative aspect-[16/10] overflow-hidden border-b border-slate-200 bg-slate-100 dark:border-white/10 dark:bg-white/5">
      <img
        src={src}
        alt={title}
        className="h-full w-full object-cover"
        onError={(event) => {
          event.currentTarget.style.display = 'none';
          const fallback = event.currentTarget.nextElementSibling as HTMLDivElement | null;
          if (fallback) {
            fallback.style.display = 'flex';
          }
        }}
      />
      <div className="hidden h-full w-full items-center justify-center p-6 text-center text-sm leading-7 text-slate-500 dark:text-slate-400">
        Upload an image for <strong className="ml-1 mr-1 text-slate-700 dark:text-slate-200">{title}</strong> inside <code>/public/photos</code>.
      </div>
      </div>
  );
}

function Field({
  label,
  placeholder,
  multiline = false,
}: {
  label: string;
  placeholder: string;
  multiline?: boolean;
}) {
  const classes =
    'mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-emerald-500 dark:border-white/10 dark:bg-white/5';

  return (
    <label className="block text-sm font-medium text-slate-700 dark:text-slate-200">
      {label}
      {multiline ? (
        <textarea rows={5} className={classes} placeholder={placeholder} />
      ) : (
        <input className={classes} placeholder={placeholder} />
      )}
    </label>
  );
}

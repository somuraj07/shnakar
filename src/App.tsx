/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Moon, 
  Sun, 
  ExternalLink, 
  Code2, 
  Database, 
  Server, 
  ShieldCheck, 
  Layout, 
  Cpu,
  ArrowUpRight,
  Terminal,
  Layers,
  Globe
} from 'lucide-react';
import Scene from './components/Scene';
import { SKILLS, EXPERIENCES, PROJECTS } from './constants';
import { cn } from './lib/utils';

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  return (
    <div className="min-h-screen text-[#1a1a1a] dark:text-[#f5f5f5] font-sans selection:bg-grey-500/30 overflow-x-hidden bg-[#f5f5f5] dark:bg-[#0a0a0a] transition-colors duration-700">
      <div className="noise" />
      <Scene />
      
      {/* Progress Bar */}
      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-grey-500 z-[100] origin-left" style={{ scaleX }} />

      {/* Floating Bottom Navbar (Dock Style) */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[100] w-full max-w-fit px-4">
        <motion.nav 
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="bg-white/10 dark:bg-black/20 backdrop-blur-2xl border border-white/20 dark:border-white/5 rounded-full px-6 py-3 flex items-center gap-8 shadow-2xl"
        >
          <div className="flex items-center gap-6 text-[10px] font-black uppercase tracking-[0.3em]">
            {['about', 'skills', 'experience', 'projects'].map((item) => (
              <a key={item} href={`#${item}`} className="hover:text-grey-400 transition-colors">{item}</a>
            ))}
          </div>
          <div className="w-px h-4 bg-white/20" />
          <button 
            onClick={toggleDarkMode}
            className="p-2 rounded-full hover:bg-white/10 transition-all"
          >
            {isDarkMode ? <Sun size={16} /> : <Moon size={16} />}
          </button>
        </motion.nav>
      </div>

      {/* Top Logo */}
      <div className="fixed top-0 w-full z-50 pointer-events-none">
        <div className="max-w-[1800px] mx-auto px-8 h-24 flex items-center justify-between">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-2xl font-black tracking-tighter mix-blend-difference text-white pointer-events-auto"
          >
            SOMASANKAR
          </motion.div>
          <div className="text-[10px] font-black uppercase tracking-[0.4em] opacity-30 mix-blend-difference text-white">
            PORTFOLIO 2026
          </div>
        </div>
      </div>

      <main className="max-w-[1800px] mx-auto px-8">
        
        {/* Hero Section */}
        <section id="hero" className="h-screen flex flex-col justify-center relative">
          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              <h2 className="text-[10px] uppercase tracking-[0.6em] text-grey-500 mb-8 font-black">
                Full Stack · DevOps · System Design
              </h2>
              <h1 className="text-[12vw] md:text-[10vw] font-black tracking-tighter leading-[0.85] mb-12 uppercase">
                Architecting <br />
                <span className="text-transparent stroke-text dark:text-white">Digital</span> <br />
                Systems<span className="text-grey-500">.</span>
              </h1>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="flex flex-wrap items-end justify-between gap-12"
            >
              <p className="max-w-xl text-lg md:text-xl text-black/50 dark:text-white/50 leading-tight font-medium">
                I build high-performance, multi-tenant SaaS platforms with a focus on security, 
                scalability, and elegant system architecture.
              </p>
              
              <div className="flex gap-4">
                <a href="https://github.com/somuraj07" target="_blank" className="w-16 h-16 rounded-full border border-black/10 dark:border-white/10 flex items-center justify-center hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-500">
                  <Github size={24} />
                </a>
                <a href="https://linkedin.com/in/somuraj7" target="_blank" className="w-16 h-16 rounded-full border border-black/10 dark:border-white/10 flex items-center justify-center hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-500">
                  <Linkedin size={24} />
                </a>
              </div>
            </motion.div>
          </div>

          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="absolute bottom-12 left-1/2 -translate-x-1/2 text-[10px] font-bold uppercase tracking-[0.4em] opacity-30"
          >
            Scroll to explore
          </motion.div>
        </section>

        {/* Bento Grid Skills */}
        <section id="skills" className="py-40">
          <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 h-auto md:h-[800px]">
            <BentoCard 
              className="md:col-span-2 md:row-span-2 bg-black text-white p-12 overflow-hidden relative"
              title="System Design"
              icon={<Cpu size={32} />}
              description="Architecting complex HLD/LLD structures, focusing on multi-tenancy and high availability."
              tags={SKILLS.systemDesign}
            >
              <div className="absolute inset-0 opacity-10 pointer-events-none" 
                style={{ 
                  backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', 
                  backgroundSize: '20px 20px' 
                }} 
              />
            </BentoCard>
            <BentoCard 
              className="md:col-span-2 bg-grey-100 dark:bg-white/5 p-8"
              title="Backend & DevOps"
              icon={<Server size={24} />}
              description="Node.js, Redis, Docker, and AWS infrastructure management."
              tags={[...SKILLS.backend, ...SKILLS.devops]}
            />
            <BentoCard 
              className="bg-grey-200 dark:bg-white/10 p-8"
              title="Frontend"
              icon={<Layout size={24} />}
              tags={SKILLS.frontend}
            />
            <BentoCard 
              className="bg-grey-900 text-white p-8"
              title="Security"
              icon={<ShieldCheck size={24} />}
              tags={SKILLS.security}
            />
          </div>
        </section>

        {/* Experience - Editorial Style */}
        <section id="experience" className="py-40 border-t border-black/5 dark:border-white/5">
          <div className="flex flex-col md:flex-row gap-20">
            <div className="md:w-1/3">
              <h2 className="text-[10px] uppercase tracking-[0.6em] text-grey-500 mb-8 font-black">Professional Journey</h2>
              <h3 className="text-6xl font-black tracking-tighter uppercase leading-none">The <br />Experience.</h3>
            </div>
            <div className="md:w-2/3 space-y-32">
              {EXPERIENCES.map((exp, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="flex justify-between items-start mb-8">
                    <div>
                      <h4 className="text-4xl font-black uppercase tracking-tighter mb-2">{exp.role}</h4>
                      <p className="text-xl font-bold text-grey-500">{exp.company}</p>
                    </div>
                    <span className="text-sm font-black opacity-30">{exp.period}</span>
                  </div>
                  <ul className="space-y-4 max-w-2xl">
                    {exp.description.map((item, j) => (
                      <li key={j} className="text-lg text-black/60 dark:text-white/60 leading-tight">
                        — {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects - Grid of Cards */}
        <section id="projects" className="py-40 border-t border-black/5 dark:border-white/5">
          <h2 className="text-[10px] uppercase tracking-[0.6em] text-grey-500 mb-20 font-black text-center">Selected Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {PROJECTS.map((project, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="group p-8 bg-black/5 dark:bg-white/5 rounded-[40px] border border-black/5 dark:border-white/5 flex flex-col h-full overflow-hidden"
              >
                <div className="aspect-video mb-8 rounded-3xl overflow-hidden relative">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <ArrowUpRight className="text-white" size={32} />
                  </div>
                </div>
                <div className="flex justify-between items-start mb-6">
                  <h4 className="text-3xl font-black uppercase tracking-tighter">{project.title}</h4>
                  {project.link && (
                    <a href={project.link} target="_blank" className="p-2 rounded-full bg-black/10 dark:bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity">
                      <ExternalLink size={18} />
                    </a>
                  )}
                </div>
                <p className="text-black/50 dark:text-white/50 mb-8 flex-grow leading-tight">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t, j) => (
                    <span key={j} className="text-[9px] font-black uppercase tracking-widest px-3 py-1 bg-black/5 dark:bg-white/5 rounded-full">
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Contact - Bold Footer */}
        <section className="py-60 text-center">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-[15vw] font-black tracking-tighter leading-none uppercase mb-20">
              Let's <br />Talk<span className="text-grey-500">.</span>
            </h2>
            <div className="flex flex-col md:flex-row items-center justify-center gap-12">
              <a href="mailto:katikasomasankar@gmail.com" className="text-2xl md:text-4xl font-black hover:text-grey-500 transition-colors">
                EMAIL ME
              </a>
              <div className="w-2 h-2 rounded-full bg-grey-300 hidden md:block" />
              <a href="https://linkedin.com/in/somuraj7" target="_blank" className="text-2xl md:text-4xl font-black hover:text-grey-500 transition-colors">
                LINKEDIN
              </a>
              <div className="w-2 h-2 rounded-full bg-grey-300 hidden md:block" />
              <a href="https://github.com/somuraj07" target="_blank" className="text-2xl md:text-4xl font-black hover:text-grey-500 transition-colors">
                GITHUB
              </a>
            </div>
          </motion.div>
        </section>

      </main>

      <footer className="p-12 flex flex-col md:flex-row justify-between items-center gap-8 border-t border-black/5 dark:border-white/5 text-[10px] font-black uppercase tracking-[0.4em] opacity-30">
        <div>© 2026 K SOMASANKAR</div>
        <div>DESIGN INSPIRED BY YASH KAPURE</div>
        <div>BUILT FOR PERFORMANCE</div>
      </footer>

      <style>{`
        .stroke-text {
          -webkit-text-stroke: 1px currentColor;
          color: transparent;
        }
        .dark .stroke-text {
          -webkit-text-stroke: 1px rgba(255,255,255,0.2);
        }
      `}</style>
    </div>
  );
}

function BentoCard({ className, title, icon, description, tags, children }: any) {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className={cn("rounded-3xl flex flex-col justify-between transition-all duration-500 relative", className)}
    >
      {children}
      <div className="relative z-10">
        <div className="mb-8">{icon}</div>
        <h4 className="text-2xl font-black uppercase tracking-tighter mb-4">{title}</h4>
        {description && <p className="text-sm opacity-60 leading-tight max-w-xs">{description}</p>}
      </div>
      <div className="flex flex-wrap gap-2 mt-8 relative z-10">
        {tags?.map((t: string) => (
          <span key={t} className="text-[9px] font-black uppercase tracking-widest px-3 py-1 bg-black/5 dark:bg-white/5 rounded-full border border-black/5 dark:border-white/5">
            {t}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

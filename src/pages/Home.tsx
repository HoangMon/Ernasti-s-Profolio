import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Github, 
  Linkedin, 
  Facebook,
  Instagram,
  Mail, 
  ExternalLink, 
  Palette, 
  Terminal, 
  Cpu,
  Code2,
  ChevronRight,
  ArrowUpRight
} from 'lucide-react';

const PROJECTS = [
  {
    title: "EcoSphere Dashboard",
    category: "Web Application",
    description: "A real-time environmental monitoring dashboard with interactive data visualizations.",
    image: "https://picsum.photos/seed/eco/800/600",
    tags: ["React", "D3.js", "Tailwind"],
    link: "#"
  },
  {
    title: "Lumina Design System",
    category: "UI/UX Design",
    description: "A comprehensive design system focused on accessibility and modern aesthetics.",
    image: "https://picsum.photos/seed/design/800/600",
    tags: ["Figma", "React", "Storybook"],
    link: "#"
  },
  {
    title: "Nexus API Gateway",
    category: "Backend",
    description: "High-performance API gateway with built-in rate limiting and authentication.",
    image: "https://picsum.photos/seed/api/800/600",
    tags: ["Node.js", "Redis", "Docker"],
    link: "#"
  }
];

const SKILLS = [
  { name: "Frontend", icon: <Palette className="w-5 h-5" />, items: ["React", "TypeScript", "Tailwind CSS", "Next.js"] },
  { name: "Backend", icon: <Terminal className="w-5 h-5" />, items: ["Node.js", "PostgreSQL", "Redis", "GraphQL"] },
  { name: "DevOps", icon: <Cpu className="w-5 h-5" />, items: ["Docker", "AWS", "CI/CD", "Terraform"] },
  { name: "Core", icon: <Code2 className="w-5 h-5" />, items: ["Data Structures", "Algorithms", "System Design"] },
];

const containerVariants = {
  initial: { opacity: 0 },
  enter: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  initial: { opacity: 0, y: 20 },
  enter: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const TypewriterHeadline = () => {
  const words = ["Building digital", "experiences that", "matter."];
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);
  const [blink, setBlink] = useState(true);

  // Typewriter effect
  useEffect(() => {
    if (index === words.length) {
      setIndex(0);
      return;
    }

    if (subIndex === words[index].length + 1 && !reverse) {
      const timeout = setTimeout(() => setReverse(true), 2000);
      return () => clearTimeout(timeout);
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, Math.max(reverse ? 50 : 100, parseInt((Math.random() * 150).toString())));

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse]);

  // Blinking cursor
  useEffect(() => {
    const timeout2 = setTimeout(() => {
      setBlink((prev) => !prev);
    }, 500);
    return () => clearTimeout(timeout2);
  }, [blink]);

  return (
    <h1 className="text-6xl md:text-8xl font-display font-bold tracking-tight leading-[0.9] mb-8 text-slate-900 dark:text-white min-h-[3em] md:min-h-[2.7em]">
      {words.map((word, i) => {
        if (i < index) {
          return (
            <React.Fragment key={i}>
              {i === 1 ? (
                <span className="text-brand-secondary italic">{word}</span>
              ) : word}
              <br />
            </React.Fragment>
          );
        }
        if (i === index) {
          return (
            <React.Fragment key={i}>
              {i === 1 ? (
                <span className="text-brand-secondary italic">
                  {word.substring(0, subIndex)}
                </span>
              ) : word.substring(0, subIndex)}
              <span className={`${blink ? 'opacity-100' : 'opacity-0'} inline-block w-1 h-12 md:h-20 bg-brand-primary ml-2 align-middle transition-opacity`} />
            </React.Fragment>
          );
        }
        return null;
      })}
    </h1>
  );
};

export default function Home() {
  return (
    <motion.main
      variants={containerVariants}
      initial="initial"
      animate="enter"
    >
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <motion.div variants={itemVariants}>
              <span className="inline-block py-1 px-3 rounded-full bg-brand-primary/10 text-brand-primary text-xs font-bold uppercase tracking-widest mb-6 border border-brand-primary/20">
                Available for new projects
              </span>
              <TypewriterHeadline />
              <p className="text-xl text-slate-800 dark:text-white/60 mb-10 leading-relaxed max-w-xl">
                I'm a full-stack developer and designer focused on creating clean, 
                performant, and user-centric applications.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/projects" className="btn-liquid group text-slate-900 dark:text-white">
                  View My Work
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <div className="flex items-center gap-4 px-4">
                  <a href="https://github.com/HoangMon" target="_blank" rel="noopener noreferrer" className="p-2 text-slate-400 dark:text-white/40 hover:text-brand-primary transition-colors"><Github className="w-6 h-6" /></a>
                  <a href="https://www.facebook.com/monbruh" target="_blank" rel="noopener noreferrer" className="p-2 text-slate-400 dark:text-white/40 hover:text-brand-primary transition-colors"><Facebook className="w-6 h-6" /></a>
                  <a href="https://www.linkedin.com/in/minh-bủh" target="_blank" rel="noopener noreferrer" className="p-2 text-slate-400 dark:text-white/40 hover:text-brand-primary transition-colors"><Linkedin className="w-6 h-6" /></a>
                  <a href="#" className="p-2 text-slate-400 dark:text-white/40 hover:text-brand-primary transition-colors"><Instagram className="w-6 h-6" /></a>
                  <a href="mailto:pigger0512@gmail.com" className="p-2 text-slate-400 dark:text-white/40 hover:text-brand-primary transition-colors"><Mail className="w-6 h-6" /></a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* Background Decoration */}
        <div className="absolute top-0 right-0 -z-10 opacity-40 pointer-events-none animate-pulse-slow">
          <div className="w-[800px] h-[800px] rounded-full bg-brand-primary blur-[120px] -translate-y-1/2 translate-x-1/2" />
        </div>
        <div className="absolute bottom-0 left-0 -z-10 opacity-30 pointer-events-none animate-pulse-slow [animation-delay:2s]">
          <div className="w-[600px] h-[600px] rounded-full bg-brand-secondary blur-[120px] translate-y-1/2 -translate-x-1/2" />
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-transparent border-y border-slate-200 dark:border-white/5 relative overflow-hidden transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex justify-between items-end mb-16">
            <div>
              <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tight mb-4 text-slate-900 dark:text-white">Selected Work</h2>
              <p className="text-slate-700 dark:text-white/40">A collection of projects I've built recently.</p>
            </div>
            <Link to="/projects" className="hidden md:flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-brand-primary hover:text-brand-secondary transition-all">
              All Projects <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROJECTS.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group cursor-pointer liquid-glass p-4 rounded-3xl"
              >
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl mb-6 bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-90 dark:opacity-80 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-brand-primary/0 group-hover:bg-brand-primary/40 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <div className="bg-white p-4 rounded-full">
                      <ExternalLink className="w-6 h-6 text-black" />
                    </div>
                  </div>
                </div>
                <div className="space-y-2 px-2 pb-2">
                  <div className="flex justify-between items-start">
                    <span className="text-xs font-bold uppercase tracking-widest text-brand-secondary">{project.category}</span>
                  </div>
                  <h3 className="text-2xl font-display font-bold group-hover:text-brand-primary transition-colors text-slate-900 dark:text-white">{project.title}</h3>
                  <p className="text-slate-800 dark:text-white/60 line-clamp-2">{project.description}</p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-[10px] font-bold px-2 py-1 bg-slate-200 dark:bg-white/5 rounded text-slate-700 dark:text-white/40 uppercase border border-slate-300 dark:border-white/10">{tag}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Background Decoration */}
        <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 -z-0 opacity-20 pointer-events-none animate-pulse-slow">
          <div className="w-[500px] h-[500px] rounded-full bg-brand-accent blur-[120px]" />
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-transparent relative overflow-hidden transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div>
              <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tight mb-8 text-slate-900 dark:text-white">Technical <br />Expertise</h2>
              <p className="text-xl text-slate-800 dark:text-white/60 mb-12 leading-relaxed">
                I specialize in building robust digital products using modern technologies. 
                My approach combines technical excellence with a deep understanding of user experience.
              </p>
              <div className="grid grid-cols-2 gap-8 mb-12">
                <div className="space-y-2">
                  <div className="text-4xl font-display font-bold text-brand-primary">5+</div>
                  <div className="text-sm text-slate-700 dark:text-white/40 uppercase tracking-widest font-bold">Years Experience</div>
                </div>
                <div className="space-y-2">
                  <div className="text-4xl font-display font-bold text-brand-secondary">40+</div>
                  <div className="text-sm text-slate-700 dark:text-white/40 uppercase tracking-widest font-bold">Projects Completed</div>
                </div>
              </div>
              <Link to="/skills" className="btn-liquid inline-flex text-slate-900 dark:text-white">
                View Full Skills <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {SKILLS.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-8 rounded-3xl liquid-glass hover:border-brand-primary/50 hover:bg-slate-100 dark:hover:bg-white/10 transition-all group"
                >
                  <div className="w-12 h-12 rounded-2xl bg-brand-primary text-white flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    {skill.icon}
                  </div>
                  <h3 className="text-xl font-display font-bold mb-4 text-slate-900 dark:text-white">{skill.name}</h3>
                  <ul className="space-y-2">
                    {skill.items.map(item => (
                      <li key={item} className="text-slate-800 dark:text-white/60 flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-brand-secondary" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Background Decoration */}
        <div className="absolute bottom-0 right-0 translate-x-1/4 translate-y-1/4 -z-0 opacity-20 pointer-events-none animate-pulse-slow [animation-delay:3s]">
          <div className="w-[600px] h-[600px] rounded-full bg-brand-primary blur-[150px]" />
        </div>
      </section>
    </motion.main>
  );
}

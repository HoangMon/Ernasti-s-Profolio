import React from 'react';
import { motion } from 'motion/react';
import { ExternalLink, ArrowUpRight, Github, Layout, Globe, Smartphone, Database, Server } from 'lucide-react';

const PROJECTS = [
  {
    title: "EcoSphere Dashboard",
    category: "Web Application",
    description: "A real-time environmental monitoring dashboard with interactive data visualizations, providing insights into air quality, temperature, and humidity across multiple locations.",
    image: "https://picsum.photos/seed/eco/800/600",
    tags: ["React", "D3.js", "Tailwind", "Node.js"],
    link: "#",
    github: "https://github.com/HoangMon",
    icon: <Globe className="w-6 h-6" />
  },
  {
    title: "Lumina Design System",
    category: "UI/UX Design",
    description: "A comprehensive design system focused on accessibility, modern aesthetics, and developer experience. Includes a library of 50+ reusable React components.",
    image: "https://picsum.photos/seed/design/800/600",
    tags: ["Figma", "React", "Storybook", "TypeScript"],
    link: "#",
    github: "https://github.com/HoangMon",
    icon: <Layout className="w-6 h-6" />
  },
  {
    title: "Nexus API Gateway",
    category: "Backend",
    description: "High-performance API gateway with built-in rate limiting, authentication, and request transformation. Designed for microservices architecture.",
    image: "https://picsum.photos/seed/api/800/600",
    tags: ["Node.js", "Redis", "Docker", "Express"],
    link: "#",
    github: "https://github.com/HoangMon",
    icon: <Server className="w-6 h-6" />
  },
  {
    title: "SwiftPay Mobile App",
    category: "Mobile Development",
    description: "A secure and intuitive mobile payment application with biometric authentication and real-time transaction tracking.",
    image: "https://picsum.photos/seed/mobile/800/600",
    tags: ["React Native", "Firebase", "Stripe"],
    link: "#",
    github: "https://github.com/HoangMon",
    icon: <Smartphone className="w-6 h-6" />
  },
  {
    title: "DataVault Analytics",
    category: "Data Science",
    description: "Advanced analytics platform for processing large datasets and generating predictive models using machine learning algorithms.",
    image: "https://picsum.photos/seed/data/800/600",
    tags: ["Python", "TensorFlow", "AWS", "PostgreSQL"],
    link: "#",
    github: "https://github.com/HoangMon",
    icon: <Database className="w-6 h-6" />
  },
  {
    title: "CloudSync Storage",
    category: "Cloud Services",
    description: "Distributed file storage system with end-to-end encryption and seamless cross-device synchronization.",
    image: "https://picsum.photos/seed/cloud/800/600",
    tags: ["Go", "S3", "Kubernetes", "gRPC"],
    link: "#",
    github: "https://github.com/HoangMon",
    icon: <Server className="w-6 h-6" />
  }
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

export default function Projects() {
  return (
    <motion.main
      variants={containerVariants}
      initial="initial"
      animate="enter"
      className="pt-32 pb-20 bg-transparent transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div 
          variants={itemVariants}
          className="max-w-3xl mb-20"
        >
          <h1 className="text-6xl md:text-8xl font-display font-bold tracking-tight leading-[0.9] mb-8 text-slate-900 dark:text-white">
            Selected <br />
            <span className="text-brand-primary italic">Projects.</span>
          </h1>
          <p className="text-xl text-slate-800 dark:text-white/60 leading-relaxed">
            A showcase of my recent work across web development, UI/UX design, 
            and backend engineering. Each project represents a unique challenge 
            and a commitment to quality.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              className="group liquid-glass p-6 rounded-[2.5rem] border-slate-200 dark:border-white/10 hover:border-brand-primary/50 transition-all"
            >
              <div className="relative aspect-video overflow-hidden rounded-3xl mb-8 bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10">
                <img 
                  src={project.image} 
                  alt={project.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 dark:opacity-80 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-brand-primary/0 group-hover:bg-brand-primary/20 transition-colors" />
                
                {/* Floating Category Tag */}
                <div className="absolute top-6 left-6">
                  <span className="px-4 py-2 rounded-full bg-white/90 dark:bg-black/80 backdrop-blur-md text-[10px] font-bold uppercase tracking-widest text-brand-primary border border-slate-200 dark:border-white/10">
                    {project.category}
                  </span>
                </div>
              </div>

              <div className="space-y-6 px-2">
                <div className="flex justify-between items-center">
                  <div className="p-3 rounded-2xl bg-brand-primary/10 text-brand-primary">
                    {project.icon}
                  </div>
                  <div className="flex gap-3">
                    <a href={project.github} className="p-3 rounded-2xl bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-white/40 hover:text-brand-primary transition-colors border border-slate-200 dark:border-white/10">
                      <Github className="w-5 h-5" />
                    </a>
                    <a href={project.link} className="p-3 rounded-2xl bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-white/40 hover:text-brand-primary transition-colors border border-slate-200 dark:border-white/10">
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                </div>

                <div>
                  <h3 className="text-3xl font-display font-bold mb-4 text-slate-900 dark:text-white group-hover:text-brand-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-800 dark:text-white/60 leading-relaxed mb-6">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span 
                      key={tag} 
                      className="text-[10px] font-bold px-3 py-1.5 bg-slate-100 dark:bg-white/5 rounded-lg text-slate-700 dark:text-white/40 uppercase border border-slate-200 dark:border-white/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div 
          variants={itemVariants}
          className="mt-32 p-12 md:p-20 rounded-[3rem] liquid-glass text-center border-slate-200 dark:border-white/10 relative overflow-hidden"
        >
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tight mb-8 text-slate-900 dark:text-white">
              Have a project in mind?
            </h2>
            <p className="text-xl text-slate-800 dark:text-white/60 mb-12 max-w-2xl mx-auto">
              I'm always looking for exciting new opportunities to collaborate 
              and build something amazing.
            </p>
            <a href="mailto:hello@example.com" className="btn-liquid inline-flex mx-auto text-slate-900 dark:text-white">
              Let's Talk <ArrowUpRight className="w-5 h-5" />
            </a>
          </div>
          
          {/* Background Decoration */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-0 opacity-20 pointer-events-none animate-pulse-slow">
            <div className="w-[600px] h-[600px] rounded-full bg-brand-primary blur-[150px]" />
          </div>
        </motion.div>
      </div>

      {/* Background Decoration */}
      <div className="fixed top-0 right-0 -z-10 opacity-20 pointer-events-none animate-pulse-slow">
        <div className="w-[800px] h-[800px] rounded-full bg-brand-secondary blur-[150px] -translate-y-1/2 translate-x-1/2" />
      </div>
      <div className="fixed bottom-0 left-0 -z-10 opacity-20 pointer-events-none animate-pulse-slow [animation-delay:2s]">
        <div className="w-[600px] h-[600px] rounded-full bg-brand-primary blur-[150px] translate-y-1/2 -translate-x-1/2" />
      </div>
    </motion.main>
  );
}

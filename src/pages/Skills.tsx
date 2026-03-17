import React from 'react';
import { motion } from 'motion/react';
import { Palette, Terminal, Cpu, Code2, Layers, Zap, Shield, Search } from 'lucide-react';

const SKILL_CATEGORIES = [
  {
    name: "Frontend Development",
    icon: <Palette className="w-6 h-6" />,
    description: "Crafting beautiful, responsive, and accessible user interfaces using modern web technologies.",
    skills: [
      { name: "React", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "Next.js", level: 85 },
      { name: "Tailwind CSS", level: 95 },
      { name: "Framer Motion", level: 80 },
      { name: "Redux / Zustand", level: 85 }
    ]
  },
  {
    name: "Backend Engineering",
    icon: <Terminal className="w-6 h-6" />,
    description: "Building scalable, secure, and performant server-side applications and APIs.",
    skills: [
      { name: "Node.js", level: 90 },
      { name: "Express / NestJS", level: 85 },
      { name: "PostgreSQL", level: 80 },
      { name: "MongoDB", level: 85 },
      { name: "GraphQL", level: 75 },
      { name: "Redis", level: 70 }
    ]
  },
  {
    name: "DevOps & Cloud",
    icon: <Cpu className="w-6 h-6" />,
    description: "Automating deployments and managing cloud infrastructure for high availability.",
    skills: [
      { name: "Docker", level: 85 },
      { name: "AWS", level: 75 },
      { name: "CI/CD Pipelines", level: 80 },
      { name: "Terraform", level: 65 },
      { name: "Kubernetes", level: 60 },
      { name: "Nginx", level: 75 }
    ]
  },
  {
    name: "Core & Tools",
    icon: <Code2 className="w-6 h-6" />,
    description: "Fundamental computer science concepts and essential development tools.",
    skills: [
      { name: "Data Structures", level: 85 },
      { name: "Algorithms", level: 80 },
      { name: "Git / GitHub", level: 95 },
      { name: "TDD / Jest", level: 75 },
      { name: "System Design", level: 70 },
      { name: "Agile / Scrum", level: 90 }
    ]
  }
];

const ADDITIONAL_SKILLS = [
  { name: "UI/UX Design", icon: <Layers className="w-5 h-5" /> },
  { name: "SEO Optimization", icon: <Search className="w-5 h-5" /> },
  { name: "Web Security", icon: <Shield className="w-5 h-5" /> },
  { name: "Performance", icon: <Zap className="w-5 h-5" /> }
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

export default function Skills() {
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
            Technical <br />
            <span className="text-brand-primary italic">Expertise.</span>
          </h1>
          <p className="text-xl text-slate-800 dark:text-white/60 leading-relaxed">
            A comprehensive overview of my technical skills and proficiencies. 
            I'm constantly learning and evolving to stay at the forefront of 
            modern web development.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {SKILL_CATEGORIES.map((category, index) => (
            <motion.section
              key={category.name}
              variants={itemVariants}
              className="liquid-glass p-8 rounded-[2.5rem] border-slate-200 dark:border-white/10"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-4 rounded-2xl bg-brand-primary/10 text-brand-primary">
                  {category.icon}
                </div>
                <h2 className="text-3xl font-display font-bold text-slate-900 dark:text-white">
                  {category.name}
                </h2>
              </div>
              
              <p className="text-slate-800 dark:text-white/60 mb-8 leading-relaxed">
                {category.description}
              </p>

              <div className="space-y-6">
                {category.skills.map(skill => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between text-sm font-bold uppercase tracking-widest">
                      <span className="text-slate-900 dark:text-white">{skill.name}</span>
                      <span className="text-brand-primary">{skill.level}%</span>
                    </div>
                    <div className="h-2 w-full bg-slate-200 dark:bg-white/5 rounded-full overflow-hidden border border-slate-300 dark:border-white/10">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
                        viewport={{ once: true }}
                        className="h-full bg-gradient-to-r from-brand-primary to-brand-secondary"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.section>
          ))}
        </div>

        {/* Additional Skills */}
        <motion.section 
          variants={itemVariants}
          className="mt-20"
        >
          <h2 className="text-3xl font-display font-bold mb-10 text-center text-slate-900 dark:text-white">
            Other Proficiencies
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {ADDITIONAL_SKILLS.map(skill => (
              <div 
                key={skill.name}
                className="liquid-glass p-6 rounded-2xl text-center flex flex-col items-center gap-4 border-slate-200 dark:border-white/10 hover:border-brand-primary/50 transition-all group"
              >
                <div className="p-3 rounded-xl bg-slate-100 dark:bg-white/5 text-brand-secondary group-hover:scale-110 transition-transform">
                  {skill.icon}
                </div>
                <span className="font-bold text-sm uppercase tracking-widest text-slate-800 dark:text-white/60">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Learning Path */}
        <motion.section 
          variants={itemVariants}
          className="mt-32 p-12 md:p-20 rounded-[3rem] liquid-glass border-slate-200 dark:border-white/10 relative overflow-hidden"
        >
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tight mb-8 text-slate-900 dark:text-white">
                Always <span className="text-brand-secondary italic">Learning.</span>
              </h2>
              <p className="text-xl text-slate-800 dark:text-white/60 leading-relaxed">
                The tech landscape is constantly shifting, and I'm committed to 
                staying ahead of the curve. Currently exploring Web3 technologies, 
                advanced AI integration, and high-performance edge computing.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-4">
              <div className="p-6 rounded-2xl bg-white/50 dark:bg-white/5 border border-slate-200 dark:border-white/10 backdrop-blur-sm">
                <h4 className="font-bold text-brand-primary mb-2 uppercase tracking-widest text-xs">Currently Learning</h4>
                <p className="text-slate-900 dark:text-white font-medium">Rust & WebAssembly for high-performance web apps</p>
              </div>
              <div className="p-6 rounded-2xl bg-white/50 dark:bg-white/5 border border-slate-200 dark:border-white/10 backdrop-blur-sm">
                <h4 className="font-bold text-brand-secondary mb-2 uppercase tracking-widest text-xs">Next on the list</h4>
                <p className="text-slate-900 dark:text-white font-medium">Advanced LLM fine-tuning and RAG architectures</p>
              </div>
            </div>
          </div>
          
          {/* Background Decoration */}
          <div className="absolute top-0 right-0 -z-0 opacity-20 pointer-events-none animate-pulse-slow">
            <div className="w-[500px] h-[500px] rounded-full bg-brand-secondary blur-[150px]" />
          </div>
        </motion.section>
      </div>

      {/* Background Decoration */}
      <div className="fixed top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 -z-10 opacity-20 pointer-events-none animate-pulse-slow">
        <div className="w-[800px] h-[800px] rounded-full bg-brand-accent blur-[150px]" />
      </div>
    </motion.main>
  );
}

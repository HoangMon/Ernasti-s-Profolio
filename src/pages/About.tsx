import React from 'react';
import { motion } from 'motion/react';
import { User, Briefcase, GraduationCap, Heart, MapPin, Calendar } from 'lucide-react';

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

export default function About() {
  const experiences = [
    {
      role: "Senior Full Stack Developer",
      company: "TechFlow Solutions",
      period: "2022 - Present",
      description: "Leading the frontend team in developing scalable SaaS applications using React and Node.js."
    },
    {
      role: "UI/UX Designer & Developer",
      company: "Creative Pulse Studio",
      period: "2020 - 2022",
      description: "Designed and implemented interactive user interfaces for various client projects."
    },
    {
      role: "Junior Web Developer",
      company: "StartUp Hub",
      period: "2018 - 2020",
      description: "Assisted in building responsive websites and maintaining legacy codebases."
    }
  ];

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
            A little bit <br />
            <span className="text-brand-primary italic">about me.</span>
          </h1>
          <p className="text-xl text-slate-800 dark:text-white/60 leading-relaxed">
            I'm a passionate creator based in Vietnam, dedicated to crafting digital solutions 
            that are not only functional but also visually compelling. With over 5 years of 
            experience, I bridge the gap between design and technology.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 relative">
          {/* Left Column: Bio & Info */}
          <motion.div variants={itemVariants} className="lg:col-span-2 space-y-16">
            <section className="liquid-glass p-8 rounded-3xl border-slate-200 dark:border-white/10">
              <h2 className="text-3xl font-display font-bold mb-6 flex items-center gap-3 text-slate-900 dark:text-white">
                <User className="w-6 h-6 text-brand-secondary" /> My Story
              </h2>
              <div className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-white/60 space-y-4">
                <p>
                  My journey into the world of technology started with a simple curiosity about how things work on the web. 
                  What began as a hobby quickly turned into a career as I discovered the power of code to bring ideas to life.
                </p>
                <p>
                  I believe that great design is invisible—it should feel natural and intuitive. This philosophy guides 
                  every project I undertake, whether it's a complex enterprise dashboard or a simple landing page.
                </p>
                <p>
                  When I'm not coding, you can find me exploring local coffee shops, practicing photography, or 
                  contributing to open-source projects. I'm a firm believer in continuous learning and always 
                  seek to stay at the forefront of industry trends.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-display font-bold mb-8 flex items-center gap-3 text-slate-900 dark:text-white">
                <Briefcase className="w-6 h-6 text-brand-secondary" /> Experience
              </h2>
              <div className="space-y-8">
                {experiences.map((exp, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="relative pl-8 border-l border-slate-200 dark:border-white/10 liquid-glass p-6 rounded-2xl"
                  >
                    <div className="absolute left-[-5px] top-8 w-2.5 h-2.5 rounded-full bg-brand-primary" />
                    <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white">{exp.role}</h3>
                      <span className="text-sm font-bold uppercase tracking-widest text-brand-primary">{exp.period}</span>
                    </div>
                    <div className="text-brand-secondary font-medium mb-2">{exp.company}</div>
                    <p className="text-slate-800 dark:text-white/60">{exp.description}</p>
                  </motion.div>
                ))}
              </div>
            </section>
          </motion.div>

          {/* Right Column: Quick Stats & Interests */}
          <motion.div variants={itemVariants} className="space-y-12">
            <div className="p-8 rounded-3xl liquid-glass border-slate-200 dark:border-white/10">
              <h3 className="text-xl font-display font-bold mb-6 text-slate-900 dark:text-white">Quick Info</h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-4 text-slate-800 dark:text-white/60">
                  <MapPin className="w-5 h-5 text-brand-primary" />
                  <span>Ho Chi Minh City, VN</span>
                </li>
                <li className="flex items-center gap-4 text-slate-800 dark:text-white/60">
                  <Calendar className="w-5 h-5 text-brand-primary" />
                  <span>Born in 1998</span>
                </li>
                <li className="flex items-center gap-4 text-slate-800 dark:text-white/60">
                  <GraduationCap className="w-5 h-5 text-brand-primary" />
                  <span>B.S. Computer Science</span>
                </li>
                <li className="flex items-center gap-4 text-slate-800 dark:text-white/60">
                  <Heart className="w-5 h-5 text-brand-primary" />
                  <span>Coffee & Photography</span>
                </li>
              </ul>
            </div>

            <div className="aspect-square rounded-3xl overflow-hidden border border-slate-200 dark:border-white/10 liquid-glass p-2">
              <img 
                src="https://picsum.photos/seed/profile/600/600" 
                alt="Profile" 
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500 rounded-2xl"
              />
            </div>
          </motion.div>

          {/* Background Decoration */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 opacity-20 pointer-events-none animate-pulse-slow">
            <div className="w-[800px] h-[800px] rounded-full bg-brand-primary blur-[150px]" />
          </div>
          <div className="absolute top-0 right-0 -z-10 opacity-15 pointer-events-none animate-pulse-slow [animation-delay:2s]">
            <div className="w-[500px] h-[500px] rounded-full bg-brand-secondary blur-[120px]" />
          </div>
        </div>
      </div>
    </motion.main>
  );
}


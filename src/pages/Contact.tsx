import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Facebook, Instagram, MessageSquare } from 'lucide-react';

const CONTACT_INFO = [
  {
    icon: <Mail className="w-6 h-6" />,
    label: "Email",
    value: "pigger0512@gmail.com",
    link: "mailto:pigger0512@gmail.com"
  },
  {
    icon: <Phone className="w-6 h-6" />,
    label: "Phone",
    value: "(84+) 336259175",
    link: "tel:+84336259175"
  },
  {
    icon: <MapPin className="w-6 h-6" />,
    label: "Location",
    value: "Bình Thạnh, TP.HCM",
    link: "#"
  }
];

const SOCIAL_LINKS = [
  { icon: <Github className="w-5 h-5" />, label: "GitHub", link: "https://github.com/HoangMon" },
  { icon: <Linkedin className="w-5 h-5" />, label: "LinkedIn", link: "https://www.linkedin.com/in/minh-bủh" },
  { icon: <Facebook className="w-5 h-5" />, label: "Facebook", link: "https://www.facebook.com/monbruh" },
  { icon: <Instagram className="w-5 h-5" />, label: "Instagram", link: "#" },
  { icon: <MessageSquare className="w-5 h-5" />, label: "Discord", link: "#" }
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

export default function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormState({ name: '', email: '', subject: '', message: '' });
    }, 1500);
  };

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
            Get in <br />
            <span className="text-brand-secondary italic">Touch.</span>
          </h1>
          <p className="text-xl text-slate-800 dark:text-white/60 leading-relaxed">
            Have a project in mind or just want to say hello? I'm always open 
            to new opportunities and collaborations. Drop me a message and 
            I'll get back to you as soon as possible.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Contact Info */}
          <motion.div 
            variants={itemVariants}
            className="lg:col-span-5 space-y-8"
          >
            <div className="liquid-glass p-8 rounded-[2.5rem] border-slate-200 dark:border-white/10">
              <h2 className="text-2xl font-display font-bold mb-8 text-slate-900 dark:text-white">Contact Information</h2>
              <div className="space-y-6">
                {CONTACT_INFO.map((info) => (
                  <a 
                    key={info.label}
                    href={info.link}
                    className="flex items-center gap-6 group"
                  >
                    <div className="w-12 h-12 rounded-2xl bg-brand-primary/10 text-brand-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                      {info.icon}
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest text-slate-400 dark:text-white/40 mb-1">{info.label}</p>
                      <p className="text-lg font-medium text-slate-900 dark:text-white group-hover:text-brand-primary transition-colors">{info.value}</p>
                    </div>
                  </a>
                ))}
              </div>

              <div className="mt-12 pt-12 border-t border-slate-200 dark:border-white/10">
                <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400 dark:text-white/40 mb-6">Follow Me</h3>
                <div className="flex gap-4">
                  {SOCIAL_LINKS.map((social) => (
                    <a 
                      key={social.label}
                      href={social.link}
                      className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-white/40 flex items-center justify-center hover:bg-brand-primary hover:text-white transition-all border border-slate-200 dark:border-white/10"
                      aria-label={social.label}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Availability Card */}
            <div className="liquid-glass p-8 rounded-[2.5rem] border-slate-200 dark:border-white/10 bg-brand-primary/5">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-sm font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400">Available for Hire</span>
              </div>
              <p className="text-slate-800 dark:text-white/60">
                I'm currently accepting new freelance projects and full-time 
                opportunities. Let's build something extraordinary together.
              </p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            variants={itemVariants}
            className="lg:col-span-7"
          >
            <div className="liquid-glass p-8 md:p-12 rounded-[2.5rem] border-slate-200 dark:border-white/10">
              {submitted ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-20 h-20 bg-emerald-100 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 rounded-full flex items-center justify-center mx-auto mb-8">
                    <Send className="w-10 h-10" />
                  </div>
                  <h2 className="text-3xl font-display font-bold mb-4 text-slate-900 dark:text-white">Message Sent!</h2>
                  <p className="text-slate-800 dark:text-white/60 mb-8">
                    Thank you for reaching out. I've received your message and 
                    will get back to you shortly.
                  </p>
                  <button 
                    onClick={() => setSubmitted(false)}
                    className="btn-liquid inline-flex text-slate-900 dark:text-white"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-bold uppercase tracking-widest text-slate-400 dark:text-white/40 ml-1">Full Name</label>
                      <input 
                        type="text" 
                        id="name"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState({...formState, name: e.target.value})}
                        className="w-full px-6 py-4 rounded-2xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white focus:outline-none focus:border-brand-primary transition-colors"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-bold uppercase tracking-widest text-slate-400 dark:text-white/40 ml-1">Email Address</label>
                      <input 
                        type="email" 
                        id="email"
                        required
                        value={formState.email}
                        onChange={(e) => setFormState({...formState, email: e.target.value})}
                        className="w-full px-6 py-4 rounded-2xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white focus:outline-none focus:border-brand-primary transition-colors"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-bold uppercase tracking-widest text-slate-400 dark:text-white/40 ml-1">Subject</label>
                    <input 
                      type="text" 
                      id="subject"
                      required
                      value={formState.subject}
                      onChange={(e) => setFormState({...formState, subject: e.target.value})}
                      className="w-full px-6 py-4 rounded-2xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white focus:outline-none focus:border-brand-primary transition-colors"
                      placeholder="Project Inquiry"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-bold uppercase tracking-widest text-slate-400 dark:text-white/40 ml-1">Message</label>
                    <textarea 
                      id="message"
                      required
                      rows={6}
                      value={formState.message}
                      onChange={(e) => setFormState({...formState, message: e.target.value})}
                      className="w-full px-6 py-4 rounded-2xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white focus:outline-none focus:border-brand-primary transition-colors resize-none"
                      placeholder="Tell me about your project..."
                    />
                  </div>
                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="btn-liquid w-full flex justify-center items-center gap-3 text-slate-900 dark:text-white disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <div className="w-5 h-5 border-2 border-slate-900 dark:border-white border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <>
                        Send Message
                        <Send className="w-5 h-5" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Background Decoration */}
      <div className="fixed top-0 left-0 -z-10 opacity-20 pointer-events-none animate-pulse-slow">
        <div className="w-[800px] h-[800px] rounded-full bg-brand-primary blur-[150px] -translate-y-1/2 -translate-x-1/2" />
      </div>
      <div className="fixed bottom-0 right-0 -z-10 opacity-20 pointer-events-none animate-pulse-slow [animation-delay:2s]">
        <div className="w-[600px] h-[600px] rounded-full bg-brand-secondary blur-[150px] translate-y-1/2 translate-x-1/2" />
      </div>
    </motion.main>
  );
}

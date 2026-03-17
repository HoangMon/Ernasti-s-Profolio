import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="py-20 bg-transparent text-slate-900 dark:text-white overflow-hidden relative border-t border-slate-200 dark:border-white/5 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center liquid-glass p-12 md:p-20 rounded-[3rem] border-slate-200 dark:border-white/10">
          <h2 className="text-5xl md:text-7xl font-display font-bold tracking-tight mb-8 text-slate-900 dark:text-white">
            Let's create something <br />
            <span className="text-brand-primary">extraordinary</span> together.
          </h2>
          <p className="text-xl text-slate-800 dark:text-white/40 mb-12 max-w-2xl mx-auto">
            Whether you have a specific project in mind or just want to chat about 
            the latest in tech, I'm always open to new connections.
          </p>
          <a 
            href="mailto:pigger0512@gmail.com" 
            className="inline-flex items-center gap-4 text-3xl md:text-5xl font-display font-bold border-b-2 border-slate-200 dark:border-white/10 pb-4 hover:border-brand-primary hover:text-brand-primary transition-all group relative overflow-hidden px-6 py-2 rounded-2xl hover:bg-slate-100 dark:hover:bg-white/5 backdrop-blur-sm"
          >
            pigger0512@gmail.com
            <ArrowUpRight className="w-8 h-8 group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform" />
          </a>
        </div>

        <div className="mt-32 pt-8 border-t border-slate-200 dark:border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-slate-600 dark:text-white/40 text-sm">
          <div>© 2026 Modern Portfolio. All rights reserved.</div>
          <div className="flex gap-8">
            <a href="https://www.facebook.com/monbruh" target="_blank" rel="noopener noreferrer" className="hover:text-brand-primary transition-colors">Facebook</a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-brand-primary transition-colors">Instagram</a>
            <a href="https://github.com/HoangMon" target="_blank" rel="noopener noreferrer" className="hover:text-brand-primary transition-colors">GitHub</a>
            <a href="https://www.linkedin.com/in/minh-bủh" target="_blank" rel="noopener noreferrer" className="hover:text-brand-primary transition-colors">LinkedIn</a>
          </div>
        </div>
      </div>

      {/* Background Decoration */}
      <div className="absolute bottom-0 left-0 -z-0 opacity-20 pointer-events-none animate-pulse-slow">
        <div className="w-[600px] h-[600px] rounded-full bg-brand-secondary blur-[150px] translate-y-1/2 -translate-x-1/2" />
      </div>
      <div className="absolute top-0 right-0 -z-0 opacity-15 pointer-events-none animate-pulse-slow [animation-delay:4s]">
        <div className="w-[500px] h-[500px] rounded-full bg-brand-primary blur-[120px] -translate-y-1/2 translate-x-1/2" />
      </div>
    </footer>
  );
}

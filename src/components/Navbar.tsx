import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Skills', path: '/skills' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'py-4' : 'py-6'}`}>
        <div className={`max-w-7xl mx-auto px-6 flex justify-between items-center transition-all duration-500 ${scrolled ? 'liquid-glass py-3 rounded-2xl mx-4 md:mx-auto' : ''}`}>
          <Link to="/" className="text-2xl font-display font-bold tracking-tighter group text-slate-900 dark:text-white">
            PORTFOLIO<span className="text-brand-primary group-hover:text-brand-secondary transition-colors">.</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-2">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              const isHashLink = item.path.startsWith('/#');
              
              return (
                <motion.div 
                  key={item.name} 
                  className="relative px-4 py-2 group"
                  whileHover="hover"
                >
                  {isActive && !isHashLink && (
                    <motion.div
                      layoutId="nav-pill"
                      className="absolute inset-0 bg-brand-primary/10 dark:bg-white/5 rounded-xl border border-brand-primary/20 dark:border-white/10"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  
                  <motion.div
                    className="absolute inset-0 bg-slate-100 dark:bg-white/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity -z-10"
                    variants={{
                      hover: { scale: 1.05 },
                    }}
                  />
                  
                  {isHashLink ? (
                    <a 
                      href={item.path}
                      className="text-sm font-medium text-slate-800 dark:text-white/60 hover:text-slate-900 dark:hover:text-white transition-colors relative z-10"
                    >
                      {item.name}
                    </a>
                  ) : (
                    <Link 
                      to={item.path}
                      className={`text-sm font-medium transition-colors relative z-10 ${isActive ? 'text-brand-primary dark:text-white' : 'text-slate-800 dark:text-white/60 hover:text-slate-900 dark:hover:text-white'}`}
                    >
                      {item.name}
                    </Link>
                  )}
                </motion.div>
              );
            })}
            <div className="ml-4 flex items-center gap-4">
              <ThemeToggle />
              <button className="btn-liquid !px-6 !py-2 text-sm text-slate-900 dark:text-white">
                Resume
              </button>
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center gap-4 md:hidden">
            <ThemeToggle />
            <button className="text-slate-900 dark:text-white p-2 hover:bg-slate-100 dark:hover:bg-white/10 rounded-lg transition-colors" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-white dark:bg-slate-950 pt-24 px-6 md:hidden"
          >
            <div className="flex flex-col gap-6">
              {navItems.map((item) => (
                item.path.startsWith('/#') ? (
                  <a 
                    key={item.name} 
                    href={item.path}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-3xl font-display font-bold text-slate-900 dark:text-white"
                  >
                    {item.name}
                  </a>
                ) : (
                  <Link 
                    key={item.name} 
                    to={item.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`text-3xl font-display font-bold flex items-center gap-4 ${location.pathname === item.path ? 'text-brand-primary' : 'text-slate-900 dark:text-white'}`}
                  >
                    {item.name}
                    {location.pathname === item.path && (
                      <motion.div 
                        layoutId="mobile-dot"
                        className="w-2 h-2 rounded-full bg-brand-primary"
                      />
                    )}
                  </Link>
                )
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

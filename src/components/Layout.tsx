import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import Navbar from './Navbar';
import Footer from './Footer';

const pageVariants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  enter: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.4,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const curtainVariants = {
  initial: { scaleY: 0 },
  animate: { 
    scaleY: 0,
    transition: {
      duration: 0.8,
      ease: [0.76, 0, 0.24, 1],
    }
  },
  exit: { 
    scaleY: 1,
    transition: {
      duration: 0.8,
      ease: [0.76, 0, 0.24, 1],
    }
  }
};

export default function Layout() {
  const location = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen font-sans overflow-x-hidden">
      <Navbar />
      
      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          initial="initial"
          animate="enter"
          exit="exit"
          variants={pageVariants}
          className="relative"
        >
          <Outlet />
          
          {/* Transition Curtain Overlay */}
          <motion.div
            className="fixed inset-0 bg-white dark:bg-neutral-900 z-[100] origin-bottom pointer-events-none"
            initial={{ scaleY: 1 }}
            animate={{ scaleY: 0 }}
            exit={{ scaleY: 1 }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          />
        </motion.div>
      </AnimatePresence>

      <Footer />
    </div>
  );
}


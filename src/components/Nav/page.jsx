'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { GoArrowUpRight } from "react-icons/go";
import { motion, AnimatePresence } from 'framer-motion';

export default function ModernHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('');
  const headerRef = useRef(null);
  const lastScrollY = useRef(0);
  const [visible, setVisible] = useState(true);

  // Handle scroll effects - header visibility, scale and shadow
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Determine if we should show/hide header based on scroll direction
      if (currentScrollY > lastScrollY.current + 10) {
        setVisible(false);
      } else if (currentScrollY < lastScrollY.current - 10) {
        setVisible(true);
      }

      // Apply scrolled effect
      if (currentScrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle menu close on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && menuOpen) {
        setMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [menuOpen]);

  // Add escape key handler for menu
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && menuOpen) {
        setMenuOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [menuOpen]);

  // Nav items with hover animation
  const navItems = ['Services', 'Works', 'About', 'Blog'];

  // Variants for animations
  const headerVariants = {
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        type: 'spring', 
        stiffness: 100, 
        damping: 20 
      } 
    },
    hidden: { 
      y: -100, 
      opacity: 0,
      transition: { 
        type: 'spring', 
        stiffness: 100, 
        damping: 20 
      } 
    }
  };

  const buttonVariants = {
    rest: { scale: 1 },
    hover: { 
      scale: 1.05,
      y: -2,
      boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
      transition: { 
        type: "spring", 
        stiffness: 400, 
        damping: 10 
      }
    },
    tap: { scale: 0.97 }
  };
  
  const arrowVariants = {
    rest: { rotate: 0 },
    hover: { 
      rotate: 45,
      transition: { 
        duration: 0.3, 
        ease: "easeInOut" 
      }
    }
  };

  const mobileMenuVariants = {
    closed: {
      height: 0,
      opacity: 0,
      transition: {
        duration: 0.3,
        when: "afterChildren",
        staggerChildren: 0.05,
        staggerDirection: -1
      }
    },
    open: {
      height: "auto",
      opacity: 1,
      transition: {
        duration: 0.3,
        when: "beforeChildren",
        staggerChildren: 0.05,
        staggerDirection: 1
      }
    }
  };

  const mobileItemVariants = {
    closed: {
      y: 10,
      opacity: 0
    },
    open: {
      y: 0,
      opacity: 1
    }
  };

  const logoGlowVariants = {
    rest: {
      opacity: 0.6,
      scale: 1,
      filter: "blur(4px)",
    },
    hover: {
      opacity: 1,
      scale: 1.1,
      filter: "blur(5px)",
      transition: {
        duration: 0.5,
        ease: "easeInOut"
      }
    }
  };

  return (
    <>
      {/* Desktop Header */}
      <motion.header 
        ref={headerRef}
        className="hidden md:flex w-full justify-center sticky top-4 z-50 px-4 pointer-events-none"
        initial="visible"
        animate={visible ? "visible" : "hidden"}
        variants={headerVariants}
      >
        <motion.div 
          className={`bg-white/90 backdrop-blur-md max-w-6xl w-full h-[80px] rounded-2xl flex items-center justify-between px-8 shadow-md pointer-events-auto`}
          animate={{
            scale: scrolled ? 0.95 : 1,
            boxShadow: scrolled 
              ? "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" 
              : "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)"
          }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 30
          }}
        >
          {/* Left section with logo and title */}
          <div className="flex items-center gap-4">
            <Link href="/" className="group relative block">
              <motion.div 
                className="absolute -inset-1 bg-gradient-to-r from-green-400 to-yellow-300 rounded-full"
                variants={logoGlowVariants}
                initial="rest"
                whileHover="hover"
                animate="rest"
              />
              <motion.div 
                className="relative"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Image 
                  src="/logos.jpg" 
                  alt="Logo" 
                  width={60} 
                  height={60} 
                  className="rounded-full object-cover border-2 border-white shadow-md"
                />
              </motion.div>
            </Link>
            
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <motion.h1 
                className="text-xl font-medium bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent"
                whileHover={{ letterSpacing: "0.01em" }}
                transition={{ duration: 0.3 }}
              >
                Full Design & Coding Agency
              </motion.h1>
              <p className="text-sm text-gray-500">Creative solutions for digital success</p>
            </motion.div>
          </div>
          
          {/* Center navigation */}
          <nav className="hidden lg:flex items-center justify-center space-x-10">
            {navItems.map((item, index) => (
              <motion.div 
                key={item} 
                onHoverStart={() => setActiveLink(item)}
                onHoverEnd={() => setActiveLink('')}
                className="relative"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
              >
                <Link
                  href={`/${item.toLowerCase()}`}
                  className="relative text-gray-600 hover:text-black font-medium transition-colors duration-300 block py-1"
                >
                  {item}
                  <motion.span 
                    className="absolute bottom-0 left-0 h-0.5 bg-green-400"
                    initial={{ width: 0 }}
                    animate={{ width: activeLink === item ? '100%' : 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  />
                </Link>
              </motion.div>
            ))}
          </nav>
          
          {/* Right action button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <Link href="/contact">
              <motion.button 
                className="bg-gradient-to-r from-[#DDF82C] to-[#3ad10f] text-gray-800 font-medium rounded-full px-6 py-2.5 flex items-center gap-2 origin-center group"
                variants={buttonVariants}
                initial="rest"
                whileHover="hover"
                whileTap="tap"
              >
                <span>Start Project</span>
                <motion.div
                  variants={arrowVariants}
                  className="flex items-center justify-center"
                >
                  <GoArrowUpRight className="text-xl" />
                </motion.div>
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      </motion.header>

      {/* Mobile Header */}
      <motion.header 
        className="md:hidden w-full sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-md"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <div className="flex items-center justify-between px-4 py-3">
          {/* Mobile Logo */}
          <Link href="/" className="flex items-center gap-3">
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Image 
                src="/logos.jpg" 
                alt="Logo" 
                width={40} 
                height={40} 
                className="rounded-full object-cover border-2 border-white"
              />
            </motion.div>
            <motion.h1 
              className="text-base font-medium"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              Design & Code Agency
            </motion.h1>
          </Link>
          
          {/* Menu Toggle Button */}
          <motion.button 
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 rounded-md relative z-10"
            aria-label="Toggle menu"
            whileTap={{ scale: 0.9 }}
          >
            <div className="w-6 flex flex-col gap-1.5">
              <motion.span 
                className="block h-0.5 w-full bg-gray-800 origin-center" 
                animate={{
                  rotate: menuOpen ? 45 : 0,
                  y: menuOpen ? 8 : 0
                }}
                transition={{ duration: 0.3 }}
              />
              <motion.span 
                className="block h-0.5 w-full bg-gray-800" 
                animate={{
                  opacity: menuOpen ? 0 : 1,
                  x: menuOpen ? 20 : 0
                }}
                transition={{ duration: 0.3 }}
              />
              <motion.span 
                className="block h-0.5 w-full bg-gray-800 origin-center" 
                animate={{
                  rotate: menuOpen ? -45 : 0,
                  y: menuOpen ? -8 : 0
                }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </motion.button>
        </div>
        
        {/* Mobile Menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div 
              className="absolute top-full left-0 w-full bg-white shadow-lg overflow-hidden"
              variants={mobileMenuVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              <motion.nav className="flex flex-col px-4 py-4">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item}
                    variants={mobileItemVariants}
                    custom={index}
                    whileHover={{ x: 4 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <Link 
                      href={`/${item.toLowerCase()}`}
                      className="py-3 text-gray-600 hover:text-black border-b border-gray-100 last:border-0 block"
                      onClick={() => setMenuOpen(false)}
                    >
                      {item}
                    </Link>
                  </motion.div>
                ))}
                
                <motion.div 
                  className="mt-4 mb-2"
                  variants={mobileItemVariants}
                >
                  <Link 
                    href="/contact"
                    onClick={() => setMenuOpen(false)}
                  >
                    <motion.button 
                      className="w-full bg-gradient-to-r from-[#DDF82C] to-[#3ad10f] text-gray-800 font-medium rounded-full py-3 flex items-center justify-center gap-2"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                    >
                      Start Project
                      <motion.div
                        whileHover={{ rotate: 45 }}
                        transition={{ duration: 0.2 }}
                      >
                        <GoArrowUpRight className="text-xl" />
                      </motion.div>
                    </motion.button>
                  </Link>
                </motion.div>
              </motion.nav>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
}
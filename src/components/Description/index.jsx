"use client";
import React, { useLayoutEffect, useRef, useState, useEffect } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';
import { Alfa_Slab_One, Averia_Serif_Libre, Merriweather } from 'next/font/google';
import { motion } from 'framer-motion';
import Link from 'next/link';

// Font imports
const alfaSlab = Alfa_Slab_One({ weight: '400', subsets: ['latin'] });
const averiaSerif = Averia_Serif_Libre({ weight: ['300', '400', '700'], subsets: ['latin'] });
const merriweather = Merriweather({ weight: ['300', '400', '700', '900'], subsets: ['latin'] });

const phrases = [
  "Los Flamencos National Reserve", 
  "is a nature reserve located", 
  "in the commune of San Pedro de Atacama", 
  "The reserve covers a total area", 
  "of 740 square kilometres (290 sq mi)"
];

export default function Page() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const mainRef = useRef(null);

  useEffect(() => {
    // Loading animation
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 500);

    // Mouse movement for parallax effect
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      setMousePosition({
        x: (clientX / innerWidth - 0.5) * 20,
        y: (clientY / innerHeight - 0.5) * 20
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Character animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const letterVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  // Title text for animation
  const titlePart1 = "LOS";
  const titlePart2 = "FLAMENCOS";

  // Register GSAP plugin in useEffect to avoid SSR issues
  useEffect(() => {
    if (typeof window !== 'undefined') {
      gsap.registerPlugin(ScrollTrigger);
    }
  }, []);

  return (
    <main 
      ref={mainRef} 
      className="min-h-screen w-full bg-gradient-to-b from-gray-100 to-gray-200 overflow-hidden"
      style={{
        perspective: "1000px"
      }}
    >
      {/* Loader */}
      {!isLoaded && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
          <div className="w-16 h-16 border-4 border-gray-300 border-t-green-500 rounded-full animate-spin"></div>
        </div>
      )}

      {/* Animated background elements */}
      <div className="fixed inset-0 z-0">
        {Array.from({ length: 20 }).map((_, index) => (
          <motion.div
            key={index}
            className="absolute rounded-full bg-green-300 opacity-20"
            initial={{ 
              width: Math.random() * 200 + 50, 
              height: Math.random() * 200 + 50,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              scale: 0
            }}
            animate={{ 
              x: mousePosition.x * (index % 5 + 1) * 0.5,
              y: mousePosition.y * (index % 5 + 1) * 0.5,
              scale: 1
            }}
            transition={{
              duration: 0.8,
              delay: index * 0.1,
              ease: "easeOut"
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6">
        {/* Main logo */}
        <div className="flex flex-col items-center justify-center mb-16">
          {/* Desktop version */}
          <motion.div 
            className="hidden md:block relative"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div 
              className={`${averiaSerif.className} text-8xl md:text-9xl lg:text-8xl font-bold relative z-10`}
              style={{
                textShadow: "0 8px 16px rgba(0,0,0,0.1)",
                transform: `rotateX(${mousePosition.y * 0.05}deg) rotateY(${mousePosition.x * 0.05}deg)`
              }}
            >
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="flex items-center justify-center"
              >
                {titlePart1.split('').map((char, index) => (
                  <motion.span 
                    key={`title1-${index}`} 
                    variants={letterVariants}
                    className="inline-block text-green-500"
                    whileHover={{ 
                      scale: 1.2, 
                      color: "#2ad400",
                      textShadow: "0 0 8px rgba(74, 222, 128, 0.6)",
                      transition: { duration: 0.2 }
                    }}
                  >
                    {char}
                  </motion.span>
                ))}
                <motion.span className="inline-block w-6"></motion.span>
                {titlePart2.split('').map((char, index) => (
                  <motion.span 
                    key={`title2-${index}`} 
                    variants={letterVariants}
                    className="inline-block text-gray-900"
                    whileHover={{ 
                      scale: 1.2, 
                      color: "#000000",
                      textShadow: "0 0 8px rgba(0, 0, 0, 0.3)",
                      transition: { duration: 0.2 }
                    }}
                  >
                    {char}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
            
            {/* Reflective shadow */}
            <div className="absolute bottom-0 left-0 right-0 h-4 bg-gradient-to-b from-black/10 to-transparent transform scale-y-[-1] blur-sm"></div>
          </motion.div>

          {/* Mobile version */}
          <motion.div 
            className="block md:hidden"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className={`${averiaSerif.className} text-5xl sm:text-6xl font-bold text-center`}>
              <motion.span 
                className="text-green-500"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                LOS
              </motion.span>{" "}
              <motion.span
                className="text-black"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                FLAMENCOS
              </motion.span>
            </h1>
          </motion.div>
        </div>

        {/* Animated text section */}
        <div className="w-full max-w-2xl">
          <AnimatedTextSection phrases={phrases} />
        </div>

        {/* CTA Buttons */}
        <motion.div 
          className="mt-12 flex flex-col sm:flex-row gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <Link href="/about">
            <motion.button 
              className="px-8 py-3 bg-green-500 text-white rounded-full font-medium hover:bg-green-600 transition-all hover:shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Discover the Reserve
            </motion.button>
          </Link>
          <Link href="/gallery">
            <motion.button 
              className="px-8 py-3 border-2 border-green-500 text-green-500 rounded-full font-medium hover:bg-green-50 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Gallery
            </motion.button>
          </Link>
        </motion.div>
        
        {/* Scroll indicator */}
        <motion.div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ delay: 1.2, duration: 1.5, repeat: Infinity }}
        >
          <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </motion.div>
      </div>

      {/* Featured section */}
      <motion.section 
        className="relative z-10 py-20 bg-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <div className="container mx-auto px-6">
          <h2 className={`${alfaSlab.className} text-3xl md:text-4xl text-center mb-16`}>
            Featured <span className="text-green-500">Attractions</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { title: "Flamingo Lagoons", icon: "🦩", description: "Home to three species of flamingos that gather in the shallow salt lakes." },
              { title: "Salt Flats", icon: "🏞️", description: "Stunning white salt flats contrasting with the blue skies of the Atacama." },
              { title: "Hiking Trails", icon: "🥾", description: "Explore diverse landscapes from volcanoes to wetlands on marked trails." }
            ].map((attraction, index) => (
              <motion.div 
                key={index}
                className="bg-gray-50 p-8 rounded-2xl shadow-sm hover:shadow-md transition-all"
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5 + index * 0.2, duration: 0.5 }}
              >
                <div className="text-4xl mb-4">{attraction.icon}</div>
                <h3 className={`${averiaSerif.className} text-xl font-bold mb-3`}>{attraction.title}</h3>
                <p className={`${merriweather.className} text-gray-600`}>{attraction.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </main>
  );
}

// AnimatedTextSection component
function AnimatedTextSection({ phrases }) {
  return (
    <div className={`${merriweather.className} text-lg space-y-8 text-gray-700 max-w-2xl mx-auto`}>
      {phrases.map((phrase, index) => (
        <AnimatedText key={index}>{phrase}</AnimatedText>
      ))}
    </div>
  );
}

// AnimatedText component with GSAP
function AnimatedText({ children }) {
  const text = useRef(null);

  useLayoutEffect(() => {
    if (typeof window !== 'undefined') {
      gsap.from(text.current, {
        scrollTrigger: {
          trigger: text.current,
          scrub: true,
          start: "0px bottom",
          end: "bottom+=400px bottom",
        },
        opacity: 0,
        left: "-200px",
        ease: "power3.Out"
      });
    }
  }, []);

  return (
    <p 
      ref={text} 
      className="relative text-center font-medium"
      style={{ position: 'relative' }}
    >
      {children}
    </p>
  );
}
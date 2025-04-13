"use client";
<<<<<<< HEAD
import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Alfa_Slab_One, Averia_Serif_Libre, Merriweather } from 'next/font/google';
import { motion } from 'framer-motion';

// Importation des polices
const alfaSlab = Alfa_Slab_One({ weight: '400', subsets: ['latin'] });
const averiaSerif = Averia_Serif_Libre({ weight: ['300', '400', '700'], subsets: ['latin'] });
const merriweather = Merriweather({ weight: ['300', '400', '700', '900'], subsets: ['latin'] });

export default function Page() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const mainRef = useRef(null);

  useEffect(() => {
    // Animation de chargement
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 500);

    // Gestion du mouvement de la souris pour l'effet parallaxe
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

  // Animation des caractères pour le texte
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

  // Séparation du texte en caractères pour l'animation
  const lagaText = "LAGA";
  const webText = "WEB";

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
=======
import React, { useEffect, useRef, useState } from 'react';
import { Averia_Serif_Libre } from 'next/font/google';

const averiaSerif = Averia_Serif_Libre({
  weight: ['300', '400', '700'],
  subsets: ['latin']
});

export default function AnimatedBackground() {
  const [isMounted, setIsMounted] = useState(false);
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const particlesRef = useRef([]);

  useEffect(() => {
    setIsMounted(true);
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isMounted) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    // Particle class
    class Particle {
      constructor() {
        this.reset();
        this.y = Math.random() * height;
      }

      reset() {
        this.x = Math.random() * width;
        this.y = Math.random() * -100;
        this.size = Math.random() * 4 + 1;
        this.speed = Math.random() * 0.5 + 0.2;
        this.opacity = Math.random() * 0.6 + 0.1;
        this.color = `hsl(${Math.random() * 60 + 100}, 100%, 50%)`;
      }

      update() {
        this.y += this.speed;
        if (this.y > height + 10) {
          this.reset();
        }
      }

      draw() {
        ctx.globalAlpha = this.opacity;
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // Initialize particles
    particlesRef.current = [];
    const particleCount = width < 768 ? 50 : 150;
    for (let i = 0; i < particleCount; i++) {
      particlesRef.current.push(new Particle());
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw gradient background
      const gradient = ctx.createLinearGradient(0, 0, width, height);
      gradient.addColorStop(0, '#0a0a0a');
      gradient.addColorStop(1, '#1a1a1a');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      // Update and draw particles
      particlesRef.current.forEach(particle => {
        particle.update();
        particle.draw();
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMounted]);

  if (!isMounted) {
    return (
      <div className="relative w-full min-h-screen bg-black flex items-center justify-center">
        <div className={`${averiaSerif.className} text-white text-4xl`}>
          Loading...
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      {/* Animated Canvas Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full z-0"
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen">
        {/* Desktop Design */}
        <div className={`hidden md:block ${averiaSerif.className}`}>
          <h1 className="text-[180px] xl:text-[220px] leading-none tracking-tight">
            <span className="relative text-[#4dff18]">
              LAGA
              {/* Glow Effect */}
              <span className="absolute inset-0 opacity-70 animate-pulse-slow">
                <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <defs>
                    <radialGradient id="glow" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                      <stop offset="0%" stopColor="#4dff18" stopOpacity="0.8" />
                      <stop offset="100%" stopColor="#4dff18" stopOpacity="0" />
                    </radialGradient>
                  </defs>
                  <rect width="100" height="100" fill="url(#glow)" />
                </svg>
              </span>
            </span>
            <span className="relative text-black ml-6">
              WEB
              <span className="absolute inset-0 bg-white/5 blur-sm animate-pulse-slower" />
            </span>
          </h1>
        </div>

        {/* Mobile Design */}
        <div className={`block md:hidden text-center px-4 ${averiaSerif.className}`}>
          <h1 className="text-[60px] sm:text-[80px] leading-none">
            <span className="relative text-[#4dff18]">
              LAGA
              <span className="absolute inset-0 opacity-50 bg-[#4dff18] blur-md animate-pulse-slow" />
            </span>
            <span className="relative text-black ml-2">
              WEB
              <span className="absolute inset-0 bg-white/10 blur-sm animate-pulse-slower" />
            </span>
          </h1>
>>>>>>> f93f301f10acc62c4b2b56c38f6fe20e92652965
        </div>
      )}

      {/* Éléments d'arrière-plan animés */}
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

<<<<<<< HEAD
      {/* Contenu principal */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6">
        {/* Logo principal */}
        <div className="flex flex-col items-center justify-center">
          {/* Version Desktop */}
          <motion.div 
            className="hidden md:block relative"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div 
              className={`${averiaSerif.className} text-8xl md:text-9xl lg:text-[200px] font-bold relative z-10`}
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
                {lagaText.split('').map((char, index) => (
                  <motion.span 
                    key={`laga-${index}`} 
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
                {webText.split('').map((char, index) => (
                  <motion.span 
                    key={`web-${index}`} 
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
            
            {/* Ombre réflective */}
            <div className="absolute bottom-0 left-0 right-0 h-4 bg-gradient-to-b from-black/10 to-transparent transform scale-y-[-1] blur-sm"></div>
          </motion.div>

          {/* Version Mobile */}
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
                LAGA
              </motion.span>{" "}
              <motion.span
                className="text-black"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                WEB
              </motion.span>
            </h1>
          </motion.div>
        </div>

        {/* Tagline */}
        <motion.p 
          className={`${merriweather.className} mt-8 text-center text-lg md:text-xl text-gray-700 max-w-lg`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          Solutions web innovantes pour transformer votre vision en réalité digitale
        </motion.p>

        {/* CTA Buttons */}
        <motion.div 
          className="mt-12 flex flex-col sm:flex-row gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <Link href="/services">
            <motion.button 
              className="px-8 py-3 bg-green-500 text-white rounded-full font-medium hover:bg-green-600 transition-all hover:shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Découvrir nos services
            </motion.button>
          </Link>
          <Link href="/portfolio">
            <motion.button 
              className="px-8 py-3 border-2 border-green-500 text-green-500 rounded-full font-medium hover:bg-green-50 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Voir notre portfolio
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

      {/* Featured section teaser */}
      <motion.section 
        className="relative z-10 py-20 bg-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <div className="container mx-auto px-6">
          <h2 className={`${alfaSlab.className} text-3xl md:text-4xl text-center mb-16`}>
            Nos <span className="text-green-500">expertises</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { title: "Web Design", icon: "🎨", description: "Designs modernes et interfaces utilisateur intuitives qui captivent votre audience." },
              { title: "Développement", icon: "💻", description: "Solutions web personnalisées avec les technologies les plus récentes." },
              { title: "E-commerce", icon: "🛒", description: "Boutiques en ligne optimisées pour générer des conversions et des ventes." }
            ].map((service, index) => (
              <motion.div 
                key={index}
                className="bg-gray-50 p-8 rounded-2xl shadow-sm hover:shadow-md transition-all"
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5 + index * 0.2, duration: 0.5 }}
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className={`${averiaSerif.className} text-xl font-bold mb-3`}>{service.title}</h3>
                <p className={`${merriweather.className} text-gray-600`}>{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </main>
=======
      {/* Global Styles */}
      <style jsx global>{`
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.7; transform: scale(1); }
          50% { opacity: 0.3; transform: scale(1.05); }
        }
        @keyframes pulse-slower {
          0%, 100% { opacity: 0.1; }
          50% { opacity: 0.05; }
        }
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
        .animate-pulse-slower {
          animation: pulse-slower 6s ease-in-out infinite;
        }
      `}</style>
    </div>
>>>>>>> f93f301f10acc62c4b2b56c38f6fe20e92652965
  );
}
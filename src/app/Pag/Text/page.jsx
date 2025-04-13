"use client";
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
  );
}
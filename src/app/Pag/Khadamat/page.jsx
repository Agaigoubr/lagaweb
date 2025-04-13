'use client'
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Define the color scheme
const colors = {
  black: '#111111',
  white: '#FFFFFF',
  lightGreen: '#8AE9C1',
  darkGreen: '#2A9D8F'
}

export default function Services() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white text-black px-4 py-16">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="w-full max-w-5xl"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-16 text-center">
          Our <span className="text-lightGreen">Services</span>
        </h1>
        
        <AnimatedText />
        
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </motion.div>
      </motion.div>
    </div>
  )
}

// Service data
const services = [
  {
    title: "Web Development",
    description: "Custom websites with modern frameworks and responsive design",
    icon: "🌐"
  },
  {
    title: "SaaS & AI Solutions",
    description: "Scalable software and intelligent AI implementations",
    icon: "⚙️"
  },
  {
    title: "UI/UX Design",
    description: "Beautiful interfaces with intuitive user experiences",
    icon: "🎨"
  }
]

// Component for service cards
function ServiceCard({ service, index }) {
  const [hovered, setHovered] = useState(false);
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 * index }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="rounded-xl p-6 cursor-pointer relative overflow-hidden group"
      style={{
        backgroundColor: hovered ? colors.lightGreen : colors.white,
        boxShadow: hovered ? '0 10px 30px rgba(138, 233, 193, 0.4)' : '0 4px 20px rgba(0,0,0,0.08)',
        transition: 'all 0.4s ease'
      }}
    >
      <div className="text-4xl mb-3">{service.icon}</div>
      <h3 className="text-xl font-bold mb-2">{service.title}</h3>
      <p className="text-gray-600 group-hover:text-gray-800">{service.description}</p>
      
      <motion.div 
        className="absolute bottom-0 right-0 w-12 h-12 flex items-center justify-center"
        animate={{ rotate: hovered ? 45 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke={hovered ? colors.black : colors.darkGreen} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </motion.div>
    </motion.div>
  )
}

// Component for animated text
function AnimatedText() {
  const phrases = [
    "As a tight-knit team of experts,",
    "we create memorable and emotional",
    "websites, SaaS, AI & Apps, and UI/UX Design"
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2
      }
    }
  };
  
  const lineVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.05
      }
    }
  };

  const wordVariants = {
    hidden: { 
      y: 100,
      opacity: 0 
    },
    visible: { 
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100
      }
    }
  };

  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  return (
    <motion.div 
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className="font-bold text-2xl md:text-4xl lg:text-5xl leading-tight mb-12"
    >
      {phrases.map((phrase, i) => {
        // Split each phrase into words
        const words = phrase.split(' ');
        
        return (
          <motion.div 
            key={i}
            variants={lineVariants} 
            className="overflow-hidden flex flex-wrap mb-1 md:mb-3"
          >
            {words.map((word, j) => (
              <motion.span
                key={j}
                variants={wordVariants}
                className="mr-2 md:mr-4 inline-block"
                style={{
                  color: j % 3 === 1 ? colors.lightGreen : (j % 5 === 0 ? colors.darkGreen : colors.black)
                }}
              >
                {word}
              </motion.span>
            ))}
          </motion.div>
        );
      })}
    </motion.div>
  );
}
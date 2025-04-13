'use client';
import React, { useLayoutEffect, useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';

export default function SmoothScrollHeader() {
  const background = useRef(null);
  const introImage = useRef(null);
  const headerText = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);

  // Handle loading state
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  useLayoutEffect(() => {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    // Create main timeline for scroll animation
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: document.documentElement,
        scrub: true,
        start: "top",
        end: "+=500px",
      },
    });

    // Animation sequence
    timeline
      // Background reveal animation
      .from(background.current, { clipPath: `inset(15%)` })
      // Shrink intro image while scrolling
      .to(introImage.current, { height: "200px" }, 0)
      // Fade and scale text while scrolling
      .to(headerText.current, { 
        scale: 0.85, 
        opacity: 0.6,
        y: -50
      }, 0);

    // Clean up
    return () => {
      if (timeline.scrollTrigger) {
        timeline.scrollTrigger.kill();
      }
    };
  }, []);

  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      {/* Loading overlay */}
      {!isLoaded && (
        <div className="absolute inset-0 z-50 flex items-center justify-center bg-black">
          <div className="w-16 h-16 border-4 border-gray-800 border-t-white rounded-full animate-spin"></div>
        </div>
      )}

      {/* Background image with parallax effect */}
      <motion.div 
        ref={background}
        className="absolute w-full h-[140vh] filter brightness-[0.4]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        <Image
          src="/images/background.jpeg"
          fill={true}
          alt="Mountain landscape"
          priority={true}
          className="object-cover"
        />
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/70"></div>
      </motion.div>

      {/* Content container */}
      <div className="relative flex flex-col items-center justify-center pt-[35vh]">
        {/* Featured image */}
        <motion.div
          ref={introImage}
          className="relative w-[350px] h-[475px] filter brightness-[0.7] shadow-2xl z-10 rounded-lg overflow-hidden"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <Image
            src="/images/intro.png"
            alt="Featured image"
            fill={true}
            priority={true}
            className="object-cover object-top"
          />
          
          {/* Subtle vignette effect */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
        </motion.div>

        {/* Header text */}
        <motion.h1
          ref={headerText}
          className="relative z-20 text-white text-7xl md:text-8xl font-extrabold mt-8 tracking-tight"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/70">
            SMOOTH SCROLL
          </span>
        </motion.h1>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20"
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: [0, 1, 0], 
            y: [0, 10, 0] 
          }}
          transition={{ 
            duration: 2, 
            repeat: Infinity,
            delay: 1 
          }}
        >
          <svg className="w-6 h-12 text-white/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={1.5} 
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </motion.div>
      </div>
    </div>
  );
}
"use client";
import React, { useEffect, useRef, useState } from 'react';
import Typed from 'typed.js';
import { motion } from 'framer-motion';

export default function Description() {
  // References for TypeJS elements
  const desktopTypedRef = useRef(null);
  const mobileTypedRef = useRef(null);
  const servicesTypedRef = useRef(null);
  const mobileServicesTypedRef = useRef(null);
  
  // State to control animations
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    // Desktop heading animation
    const desktopTyped = new Typed(desktopTypedRef.current, {
      strings: ['Who are we?'],
      typeSpeed: 80,
      startDelay: 500,
      showCursor: true,
      cursorChar: '_',
      onComplete: () => {
        // Start services typing after the heading is complete
        const servicesTyped = new Typed(servicesTypedRef.current, {
          strings: [
            'Laga Web specializes in <span class="text-[#49ca0d] font-medium">Websites</span> &amp; <span class="text-[#49ca0d] font-medium">Landing Pages</span>, <span class="text-[#49ca0d] font-medium">Logo Design</span> &amp; <span class="text-[#49ca0d] font-medium">Branding</span>, <span class="text-[#49ca0d] font-medium">SaaS</span> &amp; <span class="text-[#49ca0d] font-medium">AI Development</span>, and <span class="text-[#49ca0d] font-medium">Mobile Apps</span> &amp; <span class="text-[#49ca0d] font-medium">Coding</span>, ensuring comprehensive solutions tailored to your needs.'
          ],
          typeSpeed: 30,
          startDelay: 300,
          showCursor: true,
          cursorChar: '_',
          autoInsertCss: true,
        });
      }
    });

    // Mobile heading animation
    const mobileTyped = new Typed(mobileTypedRef.current, {
      strings: ['Who are we?'],
      typeSpeed: 80,
      startDelay: 500,
      showCursor: true,
      cursorChar: '_',
      onComplete: () => {
        // Start mobile services typing after the heading is complete
        const mobileServicesTyped = new Typed(mobileServicesTypedRef.current, {
          strings: [
            'Sochn Made specializes in <span class="text-[#49ca0d] font-medium">Websites</span>, <span class="text-[#49ca0d] font-medium">Branding</span>, <span class="text-[#49ca0d] font-medium">SaaS</span>, <span class="text-[#49ca0d] font-medium">AI Development</span>, and <span class="text-[#49ca0d] font-medium">Mobile Apps</span>.'
          ],
          typeSpeed: 40,
          startDelay: 300,
          showCursor: true,
          cursorChar: '_',
          autoInsertCss: true,
        });
      }
    });

    // Cleanup function
    return () => {
      desktopTyped.destroy();
      mobileTyped.destroy();
    };
  }, []);

  return (
    <div className="bg-white py-8 md:py-16 w-full overflow-hidden">
      {/* Desktop design */}
      <motion.div 
        className="hidden md:flex justify-center py-12 flex-col items-center max-w-6xl mx-auto"
        initial={{ opacity: 0 }}
        animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <motion.div
          className="relative mb-12 text-center"
          initial={{ y: -50 }}
          animate={isVisible ? { y: 0 } : { y: -50 }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
          viewport={{ once: true }}
        >
          <span 
            ref={desktopTypedRef} 
            className="text-4xl md:text-5xl lg:text-6xl text-[#49ca0d] uppercase text-center font-bold relative inline-block"
          />
          <div className="absolute -bottom-3 left-0 h-1 bg-[#49ca0d] w-full transform scale-x-0 origin-left animate-expandLine"></div>
        </motion.div>
        
        <motion.div
          className="bg-white rounded-xl p-8 shadow-xl border border-[#f0f0f0] hover:shadow-2xl transition-shadow duration-300"
          initial={{ y: 50, opacity: 0 }}
          animate={isVisible ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <p 
            ref={servicesTypedRef} 
            className="text-lg md:text-xl lg:text-2xl text-gray-800 text-center max-w-4xl leading-relaxed"
          />
        </motion.div>
      </motion.div>

      {/* Mobile design */}
      <motion.div 
        className="block md:hidden flex flex-col items-center text-center px-6 py-8"
        initial={{ opacity: 0 }}
        animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <motion.div
          className="relative mb-8 text-center"
          initial={{ y: -30 }}
          animate={isVisible ? { y: 0 } : { y: -30 }}
          transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
          viewport={{ once: true }}
        >
          <span 
            ref={mobileTypedRef} 
            className="text-3xl sm:text-4xl text-[#49ca0d] uppercase leading-tight font-bold inline-block"
          />
          <div className="absolute -bottom-2 left-0 h-1 bg-[#49ca0d] w-full transform scale-x-0 origin-left animate-expandLine"></div>
        </motion.div>
        
        <motion.div
          className="bg-white rounded-lg p-6 shadow-lg border border-[#f0f0f0] hover:shadow-xl transition-shadow duration-300"
          initial={{ y: 30, opacity: 0 }}
          animate={isVisible ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <p 
            ref={mobileServicesTypedRef} 
            className="text-base sm:text-lg text-gray-800 leading-relaxed"
          />
        </motion.div>
      </motion.div>

      <style jsx>{`
        @keyframes expandLine {
          0% { transform: scaleX(0); }
          100% { transform: scaleX(1); }
        }
        .animate-expandLine {
          animation: expandLine 1.5s ease-out forwards;
          animation-delay: 1s;
        }
      `}</style>
    </div>
  );
}
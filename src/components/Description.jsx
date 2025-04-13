"use client";
import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import { motion } from 'framer-motion';

export default function Description() {
  // References for TypeJS elements
  const desktopTypedRef = useRef(null);
  const mobileTypedRef = useRef(null);
  const servicesTypedRef = useRef(null);
  const mobileServicesTypedRef = useRef(null);

  useEffect(() => {
    // Desktop heading animation
    const desktopTyped = new Typed(desktopTypedRef.current, {
      strings: ['Who are we?'],
      typeSpeed: 80,
      startDelay: 300,
      showCursor: false,
      onComplete: () => {
        // Start services typing after the heading is complete
        const servicesTyped = new Typed(servicesTypedRef.current, {
          strings: [
            'Laga Web specializes in <span class="text-[#49ca0d]">Websites</span> &amp; <span class="text-[#49ca0d]">Landing Pages</span>, <span class="text-[#49ca0d]">Logo Design</span> &amp; <span class="text-[#49ca0d]">Branding</span>, <span class="text-[#49ca0d]">SaaS</span> &amp; <span class="text-[#49ca0d]">AI Development</span>, and <span class="text-[#49ca0d]">Mobile Apps</span> &amp; <span class="text-[#49ca0d]">Coding</span>, ensuring comprehensive solutions tailored to your needs.'
          ],
          typeSpeed: 20,
          startDelay: 300,
          showCursor: false,
          cursorChar: '|',
          autoInsertCss: true,
        });
      }
    });

    // Mobile heading animation
    const mobileTyped = new Typed(mobileTypedRef.current, {
      strings: ['Who are we?'],
      typeSpeed: 80,
      startDelay: 300,
      showCursor: false,
      onComplete: () => {
        // Start mobile services typing after the heading is complete
        const mobileServicesTyped = new Typed(mobileServicesTypedRef.current, {
          strings: [
            'Sochn Made specializes in <span class="text-[#49ca0d]">Websites</span>, <span class="text-[#49ca0d]">Branding</span>, <span class="text-[#49ca0d]">SaaS</span>, <span class="text-[#49ca0d]">AI Development</span>, and <span class="text-[#49ca0d]">Mobile Apps</span>.'
          ],
          typeSpeed: 30,
          startDelay: 300,
          showCursor: false,
          cursorChar: '|',
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
    <>
      {/* Desktop design */}
      <motion.div 
        className="hidden md:flex justify-center py-32 flex-col items-center bg-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <motion.div
          className="relative mb-8"
          initial={{ y: -50 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.8, type: "spring" }}
          viewport={{ once: true }}
        >
          <span 
            ref={desktopTypedRef} 
            className="text-[3.5vw] text-[#49ca0d] uppercase text-center font-bold relative inline-block"
          />
          <div className="absolute bottom-0 left-0 h-1 bg-[#49ca0d] w-full transform scale-x-0 origin-left animate-expandLine"></div>
        </motion.div>
        
        <motion.div
          className="bg-white rounded-xl p-8 shadow-lg border border-[#f0f0f0]"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p 
            ref={servicesTypedRef} 
            className="text-[1.8vw] text-black text-center max-w-[70vw] leading-relaxed font-light"
          />
        </motion.div>
      </motion.div>

      {/* Mobile design */}
      <motion.div 
        className="block md:hidden flex flex-col items-center text-center my-20 px-6 bg-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <motion.div
          className="relative mb-6"
          initial={{ y: -30 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.6, type: "spring" }}
          viewport={{ once: true }}
        >
          <span 
            ref={mobileTypedRef} 
            className="text-[8vw] text-[#49ca0d] uppercase leading-tight font-bold inline-block"
          />
          <div className="absolute bottom-0 left-0 h-1 bg-[#49ca0d] w-full transform scale-x-0 origin-left animate-expandLine"></div>
        </motion.div>
        
        <motion.div
          className="bg-white rounded-lg p-6 shadow-md border border-[#f0f0f0]"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p 
            ref={mobileServicesTypedRef} 
            className="text-[5vw] text-black leading-relaxed font-light"
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
    </>
  );
}
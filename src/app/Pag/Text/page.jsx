"use client";
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
        </div>
      </div>

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
  );
}
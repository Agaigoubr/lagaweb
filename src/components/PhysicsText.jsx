'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

export default function PhysicsText() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const text = "siteWeb Loga saas Design  video lagaweb".split(' ')

  return (
    <div 
      className="flex flex-col justify-center items-center min-h-screen bg-black p-8"
      onMouseMove={(e) => setMousePosition({ x: e.clientX, y: e.clientY })}
    >
      {text.map((word, wordIndex) => (
        <div key={wordIndex} className="flex justify-center mb-4">
          {word.split('').map((char, charIndex) => {
            const totalIndex = wordIndex * 10 + charIndex
            
            return (
              <motion.span
                key={totalIndex}
                className="text-6xl md:text-8xl font-bold text-white cursor-pointer"
                initial={{ y: 0, rotate: 0 }}
                animate={{
                  x: (mousePosition.x / 30) - totalIndex * 1.5,
                  y: (mousePosition.y / 30) - totalIndex * 0.5,
                }}
                whileHover={{
                  y: -30,
                  rotate: [0, 15, -15, 0],
                  scale: 1.2,
                  color: '#FFD700',
                  transition: { 
                    duration: 0.8,
                    repeat: Infinity,
                    repeatType: 'reverse'
                  }
                }}
                whileTap={{
                  scale: 0.9,
                  rotate: -10,
                }}
                transition={{
                  type: 'spring',
                  stiffness: 100,
                  damping: 10,
                  delay: totalIndex * 0.02
                }}
              >
                {char}
              </motion.span>
            )
          })}
        </div>
      ))}
    </div>
  )
}
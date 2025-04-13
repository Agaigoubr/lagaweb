'use client'

import { useSpring, animated, config } from '@react-spring/web'
import { useState } from 'react'

export default function SpringText({ text }) {
  const [hoveredIndex, setHoveredIndex] = useState(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  
  return (
    <div 
      className="flex justify-center items-center min-h-screen bg-gradient-to-b from-gray-900 to-gray-800"
      onMouseMove={(e) => setMousePosition({ x: e.clientX, y: e.clientY })}
    >
      <div className="flex flex-wrap justify-center max-w-4xl px-4">
        {text.split('').map((char, index) => {
          const springs = useSpring({
            transform: hoveredIndex === index 
              ? 'scale(1.3) rotate(15deg)' 
              : 'scale(1) rotate(0deg)',
            color: hoveredIndex === index ? '#3b82f6' : '#ffffff',
            x: (mousePosition.x / 25) - index * 3,
            y: (mousePosition.y / 25) - index * 2,
            config: config.wobbly
          })
          
          return (
            <animated.span
              key={index}
              style={springs}
              className="text-6xl font-bold cursor-pointer"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {char === ' ' ? '\u00A0' : char}
            </animated.span>
          )
        })}
      </div>
    </div>
  )
}
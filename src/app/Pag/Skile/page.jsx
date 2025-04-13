<<<<<<< HEAD
'use client';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import * as Tooltip from '@radix-ui/react-tooltip';
import { Alfa_Slab_One, Averia_Serif_Libre, Merriweather } from 'next/font/google';

// Font imports
const alfaSlab = Alfa_Slab_One({ weight: '400', subsets: ['latin'] });
const averiaSerif = Averia_Serif_Libre({ weight: ['300', '400', '700'], subsets: ['latin'] });
const merriweather = Merriweather({ weight: ['300', '400', '700', '900'], subsets: ['latin'] });

// Skills data
=======
'use client'
import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import * as THREE from 'three'
import { Averia_Serif_Libre } from 'next/font/google'

const averiaSerif = Averia_Serif_Libre({ 
  weight: ['300', '400', '700'], 
  subsets: ['latin'] 
})

>>>>>>> f93f301f10acc62c4b2b56c38f6fe20e92652965
const skills = [
  { 
    title: 'UI/UX Design / Logo & Branding', 
    percentage: 99, 
<<<<<<< HEAD
    description: 'تصميم واجهة المستخدم وتجربة المستخدم مع هوية تجارية قوية.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <circle cx="12" cy="12" r="10"></circle>
        <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
        <line x1="9" y1="9" x2="9.01" y2="9"></line>
        <line x1="15" y1="9" x2="15.01" y2="9"></line>
      </svg>
    ),
    color: '#8AE9C1'
=======
    description: 'تصميم واجهة المستخدم وتجربة المستخدم مع هوية تجارية قوية.' 
>>>>>>> f93f301f10acc62c4b2b56c38f6fe20e92652965
  },
  { 
    title: 'Websites & Landing Pages', 
    percentage: 96, 
<<<<<<< HEAD
    description: 'تطوير مواقع ويب حديثة وصفحات هبوط جذابة.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
        <line x1="8" y1="21" x2="16" y2="21"></line>
        <line x1="12" y1="17" x2="12" y2="21"></line>
      </svg>
    ),
    color: '#2A9D8F'
=======
    description: 'تطوير مواقع ويب حديثة وصفحات هبوط جذابة.' 
>>>>>>> f93f301f10acc62c4b2b56c38f6fe20e92652965
  },
  { 
    title: 'Mobile Apps & Programming', 
    percentage: 90, 
<<<<<<< HEAD
    description: 'تطوير تطبيقات الهاتف المحمول مع البرمجة المتقدمة.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
        <line x1="12" y1="18" x2="12.01" y2="18"></line>
      </svg>
    ),
    color: '#8AE9C1'
  },
  { 
    title: 'SEO & Digital Marketing', 
    percentage: 94, 
    description: 'تحسين محركات البحث والتسويق الرقمي لزيادة الوصول.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
      </svg>
    ),
    color: '#2A9D8F'
  },
];

const SkillsSection = () => {
  const [activeSkill, setActiveSkill] = useState(null);
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  return (
    <section ref={ref} className="py-16 lg:py-24 bg-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -right-64 -top-64 w-96 h-96 rounded-full bg-gradient-to-br from-green-200/20 to-green-400/10 blur-3xl"></div>
        <div className="absolute -left-64 top-64 w-96 h-96 rounded-full bg-gradient-to-br from-green-100/10 to-green-300/5 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-block">
            <motion.div 
              className={`${alfaSlab.className} text-xs font-medium tracking-wider uppercase text-green-600 mb-2`}
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              Our Expertise
            </motion.div>
            
            <motion.h2 
              className={`${averiaSerif.className} text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-black to-gray-700 bg-clip-text text-transparent`}
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              Professional Skills
            </motion.h2>
            
            <motion.div 
              className="h-1 w-24 bg-gradient-to-r from-green-400 to-green-600 mx-auto mt-4 rounded-full"
              initial={{ width: 0 }}
              animate={inView ? { width: 96 } : {}}
              transition={{ delay: 0.7, duration: 0.8 }}
            ></motion.div>

            <motion.p 
              className={`${merriweather.className} max-w-2xl mx-auto mt-6 text-lg text-gray-600`}
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.9, duration: 0.5 }}
            >
              As a tight-knit team of experts, we create memorable and emotional websites, SaaS, AI & Apps, and UI/UX Design
            </motion.p>
          </div>
        </motion.div>
        
        {/* Skills list */}
        <div className="max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <Tooltip.Provider key={index}>
              <motion.div 
                className="mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.2 }}
                onMouseEnter={() => setActiveSkill(index)}
                onMouseLeave={() => setActiveSkill(null)}
              >
                <div className="flex items-center gap-4 mb-3">
                  <div 
                    className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300`}
                    style={{ 
                      backgroundColor: activeSkill === index ? `${skill.color}20` : 'transparent',
                      border: `2px solid ${skill.color}`
                    }}
                  >
                    <span className="text-black">{skill.icon}</span>
                  </div>
                  
                  <div className="flex-grow">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <h3 className={`${averiaSerif.className} text-xl font-bold text-black`}>{skill.title}</h3>
                        <Tooltip.Root>
                          <Tooltip.Trigger asChild>
                            <motion.button 
                              className="text-gray-400 hover:text-gray-600 focus:outline-none"
                              whileHover={{ scale: 1.2 }}
                              whileTap={{ scale: 0.9 }}
                            >
                              <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="12" cy="12" r="10"></circle>
                                <line x1="12" y1="16" x2="12" y2="12"></line>
                                <line x1="12" y1="8" x2="12.01" y2="8"></line>
                              </svg>
                            </motion.button>
                          </Tooltip.Trigger>
                          <Tooltip.Content 
                            sideOffset={5} 
                            className="bg-black text-white p-3 text-sm rounded-md shadow-xl max-w-xs z-50"
                            dir="rtl"
                          >
                            {skill.description}
                            <Tooltip.Arrow className="fill-black" />
                          </Tooltip.Content>
                        </Tooltip.Root>
                      </div>
                      <span 
                        className={`${merriweather.className} text-lg font-bold`}
                        style={{ color: skill.color }}
                      >
                        {skill.percentage}%
                      </span>
                    </div>
                    
                    <div className="mt-2 bg-gray-100 rounded-full h-3 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.percentage}%` } : {}}
                        transition={{ duration: 1.5, delay: 0.5 + index * 0.2, ease: "easeOut" }}
                        className="h-full rounded-full relative"
                        style={{ backgroundColor: skill.color }}
                      >
                        {/* Animated highlight effect */}
                        <motion.div 
                          className="absolute top-0 right-0 bottom-0 w-20 bg-gradient-to-r from-transparent to-white opacity-30"
                          initial={{ x: -100 }}
                          animate={inView ? { x: 300 } : {}}
                          transition={{ 
                            duration: 1.2, 
                            delay: 1 + index * 0.2, 
                            ease: "easeInOut",
                            repeat: Infinity,
                            repeatDelay: 2
                          }}
                        />
                      </motion.div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </Tooltip.Provider>
=======
    description: 'تطوير تطبيقات الهاتف المحمول مع البرمجة المتقدمة.' 
  },
]

const SkillsSection = () => {
  const canvasRef = useRef(null)
  const sceneRef = useRef(null)
  const rendererRef = useRef(null)
  const cameraRef = useRef(null)
  const particlesRef = useRef(null)
  const primaryColor = '#DDF82C'
  const secondaryColor = '#A0E515'

  useEffect(() => {
    if (!canvasRef.current) return

    // Initialize Three.js scene
    const scene = new THREE.Scene()
    sceneRef.current = scene
    
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      alpha: true,
      antialias: true
    })
    rendererRef.current = renderer
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setClearColor(0x000000, 0)
    
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    )
    camera.position.z = 30
    cameraRef.current = camera

    // Create particle system
    const particlesGeometry = new THREE.BufferGeometry()
    const particlesCount = 2000
    
    const posArray = new Float32Array(particlesCount * 3)
    const colorArray = new Float32Array(particlesCount * 3)
    
    for(let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 100
      colorArray[i] = Math.random()
    }
    
    particlesGeometry.setAttribute(
      'position',
      new THREE.BufferAttribute(posArray, 3)
    )
    
    particlesGeometry.setAttribute(
      'color',
      new THREE.BufferAttribute(colorArray, 3)
    )
    
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.2,
      transparent: true,
      opacity: 0.8,
      vertexColors: true,
      blending: THREE.AdditiveBlending,
      sizeAttenuation: true
    })
    
    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial)
    scene.add(particlesMesh)
    particlesRef.current = particlesMesh

    // Add glowing sphere
    const sphereGeometry = new THREE.SphereGeometry(8, 32, 32)
    const sphereMaterial = new THREE.MeshBasicMaterial({
      color: new THREE.Color(primaryColor),
      transparent: true,
      opacity: 0.1,
      wireframe: true
    })
    const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial)
    scene.add(sphere)

    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, document.querySelector('.skills-container').offsetHeight)
    }
    
    window.addEventListener('resize', handleResize)
    handleResize()

    // Animation loop
    let animationId
    const animate = () => {
      animationId = requestAnimationFrame(animate)
      
      particlesRef.current.rotation.x += 0.0005
      particlesRef.current.rotation.y += 0.0005
      
      sphere.rotation.x += 0.001
      sphere.rotation.y += 0.001
      
      renderer.render(scene, camera)
    }
    
    animate()

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', handleResize)
      if (rendererRef.current) {
        rendererRef.current.dispose()
      }
    }
  }, [])

  return (
    <section className="skills-container relative overflow-hidden py-24 bg-black">
      {/* 3D Background Canvas */}
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 w-full h-full z-0 opacity-70"
      />
      
      {/* Content Overlay */}
      <div className="relative z-10 container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className={`${averiaSerif.className} inline-block`}>
            <div className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-r from-[#DDF82C] to-[#A0E515] rounded-xl blur-lg opacity-30 group-hover:opacity-40 transition-all duration-500"></div>
              <div className="relative bg-gray-900/80 backdrop-blur-md rounded-xl px-12 py-10 border border-gray-800">
                <h2 className="text-5xl md:text-6xl font-bold text-white mb-3">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#DDF82C] to-[#A0E515]">
                    Expert
                  </span>{' '}
                  Skills
                </h2>
                <p className="text-xl text-gray-300">
                  Professional solutions by <span className="font-semibold text-[#DDF82C]">Laga</span> Team
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid gap-8 md:gap-10">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              className="group relative"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-[#DDF82C] to-[#A0E515] rounded-2xl blur opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
              <div className="relative bg-glass backdrop-blur-sm rounded-2xl p-8 border border-gray-800">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-6">
                  <div className="flex items-center gap-6">
                    <div className="w-16 h-16 rounded-lg flex items-center justify-center text-2xl font-bold bg-gradient-to-br from-[#DDF82C] to-[#A0E515] text-gray-900">
                      {index + 1}
                    </div>
                    <h3 className="text-2xl font-semibold text-white">{skill.title}</h3>
                  </div>
                  <div className="text-3xl font-bold text-[#DDF82C]">{skill.percentage}%</div>
                </div>
                
                <div className="w-full bg-glass rounded-full h-3 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.percentage}%` }}
                    transition={{ duration: 1.5, delay: index * 0.2, type: 'spring' }}
                    viewport={{ once: true }}
                    className="h-full rounded-full relative bg-gradient-to-r from-[#DDF82C] to-[#A0E515]"
                  >
                    <motion.div
                      animate={{
                        backgroundPosition: ['0% 50%', '100% 50%']
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        repeatType: 'mirror'
                      }}
                      className="absolute inset-0 bg-gradient-to-r from-white/20 via-white/0 to-white/20"
                    />
                  </motion.div>
                </div>
              </div>
            </motion.div>
>>>>>>> f93f301f10acc62c4b2b56c38f6fe20e92652965
          ))}
        </div>
        
        {/* Call to action */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          <button className={`${averiaSerif.className} bg-gradient-to-r from-green-400 to-green-600 text-white px-8 py-3 rounded-full font-medium text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-50`}>
            Discover Our Portfolio
          </button>
        </motion.div>
      </div>
    </section>
<<<<<<< HEAD
  );
};

export default SkillsSection;
=======
  )
}

export default SkillsSection
>>>>>>> f93f301f10acc62c4b2b56c38f6fe20e92652965

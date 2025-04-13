'use client'
import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import * as THREE from 'three'
import { Averia_Serif_Libre } from 'next/font/google'

const averiaSerif = Averia_Serif_Libre({ 
  weight: ['300', '400', '700'], 
  subsets: ['latin'] 
})

const skills = [
  { 
    title: 'UI/UX Design / Logo & Branding', 
    percentage: 99, 
    description: 'تصميم واجهة المستخدم وتجربة المستخدم مع هوية تجارية قوية.' 
  },
  { 
    title: 'Websites & Landing Pages', 
    percentage: 96, 
    description: 'تطوير مواقع ويب حديثة وصفحات هبوط جذابة.' 
  },
  { 
    title: 'Mobile Apps & Programming', 
    percentage: 90, 
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
          ))}
        </div>
      </div>
    </section>
  )
}

export default SkillsSection
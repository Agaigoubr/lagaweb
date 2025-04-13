"use client"
import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { motion } from 'framer-motion';

const Footer = () => {
  const canvasRef = useRef(null);
  const sceneRef = useRef(null);
  const rendererRef = useRef(null);
  const cameraRef = useRef(null);
  const particlesRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    // Initialize Three.js scene
    const scene = new THREE.Scene();
    sceneRef.current = scene;
    scene.fog = new THREE.FogExp2(0x000000, 0.02); // إضافة ضباب إلى المشهد
    
    // Create renderer with better antialiasing
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      alpha: true,
      antialias: true,
      powerPreference: "high-performance"
    });
    rendererRef.current = renderer;
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(window.innerWidth, 400);
    renderer.setClearColor(0x000000, 0);
    
    // Create camera with wider view
    const camera = new THREE.PerspectiveCamera(
      60, // زاوية رؤية أوسع
      window.innerWidth / 400,
      0.1,
      1000
    );
    camera.position.set(0, 0, 40);
    cameraRef.current = camera;

    // Create advanced particle system
    const createParticles = () => {
      const particlesGeometry = new THREE.BufferGeometry();
      const particlesCount = 2000;
      
      const posArray = new Float32Array(particlesCount * 3);
      const colorArray = new Float32Array(particlesCount * 3);
      const sizeArray = new Float32Array(particlesCount);
      
      for(let i = 0; i < particlesCount; i++) {
        // توزيع الجسيمات بشكل كروي
        const radius = Math.random() * 30;
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.random() * Math.PI;
        
        posArray[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
        posArray[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
        posArray[i * 3 + 2] = radius * Math.cos(phi);
        
        // ألوان متدرجة
        colorArray[i * 3] = 0.2 + Math.random() * 0.3; // R
        colorArray[i * 3 + 1] = 0.7 + Math.random() * 0.3; // G
        colorArray[i * 3 + 2] = 0.2 + Math.random() * 0.3; // B
        
        // أحجام عشوائية
        sizeArray[i] = 0.1 + Math.random() * 0.5;
      }
      
      particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
      particlesGeometry.setAttribute('color', new THREE.BufferAttribute(colorArray, 3));
      particlesGeometry.setAttribute('size', new THREE.BufferAttribute(sizeArray, 1));
      
      const particlesMaterial = new THREE.PointsMaterial({
        size: 0.3,
        vertexColors: true,
        transparent: true,
        opacity: 0.8,
        blending: THREE.AdditiveBlending,
        sizeAttenuation: true
      });
      
      const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
      scene.add(particlesMesh);
      particlesRef.current = particlesMesh;
    };

    // Create glowing torus (دائرة متوهجة)
    const createTorus = () => {
      const torusGeometry = new THREE.TorusGeometry(15, 3, 16, 100);
      const torusMaterial = new THREE.MeshBasicMaterial({
        color: 0x3ada34,
        wireframe: true,
        transparent: true,
        opacity: 0.1
      });
      const torus = new THREE.Mesh(torusGeometry, torusMaterial);
      torus.rotation.x = Math.PI / 2;
      scene.add(torus);
      return torus;
    };

    createParticles();
    const torus = createTorus();

    // Animation loop with smoother movements
    const animate = () => {
      animationRef.current = requestAnimationFrame(animate);
      
      if (particlesRef.current) {
        particlesRef.current.rotation.x += 0.0003;
        particlesRef.current.rotation.y += 0.0005;
      }
      
      if (torus) {
        torus.rotation.z += 0.002;
      }
      
      renderer.render(scene, camera);
    };
    
    animate();

    // Handle resize with debounce
    let resizeTimeout;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        camera.aspect = window.innerWidth / 400;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, 400);
      }, 200);
    };
    
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationRef.current);
      window.removeEventListener('resize', handleResize);
      if (rendererRef.current) {
        rendererRef.current.dispose();
      }
    };
  }, []);

  return (
    <footer className="relative bg-black text-white pt-60 pb-16 overflow-hidden">
      {/* تأثير ضباب في الزوايا */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-30"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-20"></div>
      </div>
      
      {/* 3D Background Canvas */}
      <canvas 
        ref={canvasRef} 
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
      />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="inline-block"
        >
          <div className="relative group">
            <div className="absolute -inset-2 bg-gradient-to-r from-[#3ada34] to-[#DDF82C] rounded-full blur-lg opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
            <h1 className="relative text-4xl md:text-5xl lg:text-[56px] font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[#3ada34] to-[#DDF82C]">
              &copy; {new Date().getFullYear()} LagaWeb
            </h1>
          </div>
        </motion.div>
        
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="flex items-center gap-3 group"
          >
            <div className="w-10 h-10 rounded-full bg-[#3ada34]/10 flex items-center justify-center group-hover:bg-[#3ada34]/20 transition">
              📧
            </div>
            <a 
              href="mailto:agaigoubrhim@gmail.com" 
              className="text-lg text-white/80 hover:text-[#3ada34] hover:underline transition"
            >
              agaigoubrhim@gmail.com
            </a>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="flex items-center gap-3 group"
          >
            <div className="w-10 h-10 rounded-full bg-[#3ada34]/10 flex items-center justify-center group-hover:bg-[#3ada34]/20 transition">
              📍
            </div>
            <span className="text-lg text-[#3ada34]">Agadir</span>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="flex items-center gap-3 group"
          >
            <div className="w-10 h-10 rounded-full bg-[#3ada34]/10 flex items-center justify-center group-hover:bg-[#3ada34]/20 transition">
              📞
            </div>
            <a 
              href="tel:0778845459" 
              className="text-lg text-white/80 hover:text-[#3ada34] hover:underline transition"
            >
              0778845459
            </a>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.8 }}
          className="pt-8 border-t border-[#3ada34]/20"
        >
          <p className="text-sm text-gray-400">
            Designed & Developed by{' '}
            <span className="text-[#3ada34] font-medium hover:text-white transition">
              Agaygou Team
            </span>
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
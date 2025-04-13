'use client';
import { useEffect, useRef, useState } from 'react';
import styles from './page.module.scss';
import Image from 'next/image';
import Lenis from '@studio-freight/lenis';
import { useTransform, useScroll, motion } from 'framer-motion';

// You can add more images to this array as needed
const images = [
  "1.jpg",
  "2.jpg",
  "3.jpg",
  "4.jpg",
  "5.jpg",
  "6.jpg",
  "7.jpg",
  "8.jpg",
  "9.jpg",
  "10.jpg",
  "11.jpg",
  "12.jpg",
];

export default function ParallaxGallery() {
  const gallery = useRef(null);
  const [dimension, setDimension] = useState({ width: 0, height: 0 });
  const [hoveredImage, setHoveredImage] = useState(null);

  const { scrollYProgress } = useScroll({
    target: gallery,
    offset: ['start end', 'end start']
  });

  const { height } = dimension;
  const y = useTransform(scrollYProgress, [0, 1], [0, height * 2]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 3.3]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.25]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 3]);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
      smoothTouch: false,
      touchMultiplier: 2,
    });

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    const resize = () => {
      setDimension({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener("resize", resize);
    requestAnimationFrame(raf);
    resize();

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <main className={styles.main}>
      <div className={styles.header}>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className={styles.title}
        >
          Our <span>Portfolio</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className={styles.subtitle}
        >
          Explore our creative work and projects
        </motion.p>
      </div>

      <div ref={gallery} className={styles.gallery}>
        <Column 
          images={[images[0], images[1], images[2]]} 
          y={y} 
          setHoveredImage={setHoveredImage} 
          indexes={[0, 1, 2]}
        />
        <Column 
          images={[images[3], images[4], images[5]]} 
          y={y2} 
          setHoveredImage={setHoveredImage} 
          indexes={[3, 4, 5]}
        />
        <Column 
          images={[images[6], images[7], images[8]]} 
          y={y3} 
          setHoveredImage={setHoveredImage} 
          indexes={[6, 7, 8]}
        />
        <Column 
          images={[images[9], images[10], images[11]]} 
          y={y4} 
          setHoveredImage={setHoveredImage} 
          indexes={[9, 10, 11]}
        />

        <div className={styles.galleryOverlay}>
          <div className={styles.galleryInfo}>
            <p className={styles.galleryText}>Scroll to explore</p>
            <div className={styles.galleryIndicator}>
              <motion.div 
                className={styles.galleryProgress} 
                style={{ scaleX: scrollYProgress }}
              ></motion.div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.footer}>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className={styles.callToAction}
        >
          <h2>Like what you see?</h2>
          <p>Let's create something amazing together.</p>
          <button className={styles.ctaButton}>View All Projects</button>
        </motion.div>
      </div>
    </main>
  );
}

const Column = ({ images, y, setHoveredImage, indexes }) => {
  return (
    <motion.div 
      className={styles.column}
      style={{ y }}
    >
      {images.map((src, i) => {
        return (
          <motion.div 
            key={i} 
            className={styles.imageContainer}
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ once: true, margin: "-20%" }}
            onMouseEnter={() => setHoveredImage(indexes[i])}
            onMouseLeave={() => setHoveredImage(null)}
            whileHover={{ scale: 1.05 }}
          >
            <Image 
              src={`/images/${src}`}
              alt={`Portfolio image ${indexes[i] + 1}`}
              fill
              sizes="(max-width: 768px) 100vw, 25vw"
              priority={indexes[i] < 4}
            />
            <div className={styles.imageOverlay}>
              <span className={styles.imageIndex}>0{indexes[i] + 1}</span>
              <div className={styles.imageDetails}>
                <h3>Project Title</h3>
                <p>Category</p>
              </div>
            </div>
          </motion.div>
        );
      })}
    </motion.div>
  );
};
'use client'
import styles from './page.module.css'
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const phrases = [
  "As a tight-knit team of experts",
  " we create memorable and emotiona",
  "websites,SaaS, AI & Apps , and UI/UX Design",
 
]

export default function Khadamat() {

  return (


    <div className={styles.container}>
      <MaskText  />
   
      
    </div>
  )
}

export function MaskText() {

  const animation = {
    initial: {y: "100%"},
    enter: i => ({y: "0", transition: {duration: 1, ease: [0.33, 1, 0.68, 1],  delay: 0.075 * i}})
  }

  const { ref, inView, entry } = useInView({
    threshold: 1,
    triggerOnce: true
  });

  return(
    <div ref={ref} className={styles.body}>
      {
        phrases.map( (phrase, index) => {
          return <div key={index} className={styles.lineMask}>
            <motion.p custom={index} variants={animation} initial="initial" animate={inView ? "enter" : ""}>{phrase}</motion.p>
          </div>
        })
      }
    </div>
  )
}
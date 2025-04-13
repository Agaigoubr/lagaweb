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
const skills = [
  { 
    title: 'UI/UX Design / Logo & Branding', 
    percentage: 99, 
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
  },
  { 
    title: 'Websites & Landing Pages', 
    percentage: 96, 
    description: 'تطوير مواقع ويب حديثة وصفحات هبوط جذابة.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
        <line x1="8" y1="21" x2="16" y2="21"></line>
        <line x1="12" y1="17" x2="12" y2="21"></line>
      </svg>
    ),
    color: '#2A9D8F'
  },
  { 
    title: 'Mobile Apps & Programming', 
    percentage: 90, 
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
  );
};

export default SkillsSection;
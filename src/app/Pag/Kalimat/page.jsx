// MarqueeComponent.jsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';

const services = [
  'Logo & Branding Design -',
  'Websites & Landing Pages -',
  'SaaS & AI Development -',
  'Mobile Apps & Programming - ',
  'Video Design & Motion Graphics - ',
];

const MarqueeComponent = ({ 
  speed = 25, 
  bgColor = 'bg-black', 
  textColor = 'text-white',
  accentColor = 'text-[#4ade80]' 
}) => {
  return (
    <div className={`relative overflow-hidden ${bgColor} py-6`}>
      <div className="whitespace-nowrap flex items-center">
        {[...Array(2)].map((_, index) => (
          <motion.div
            key={index}
            className="flex space-x-8 px-4"
            initial={{ x: index === 0 ? 0 : '100%' }}
            animate={{ x: '-100%' }}
            transition={{ 
              duration: speed, 
              repeat: Infinity, 
              ease: 'linear',
              repeatType: 'loop'
            }}
          >
            {services.map((service, i) => (
              <h4
                key={i}
                className={`${textColor} text-xl md:text-2xl font-semibold hover:scale-105 transition-transform duration-300`}
              >
                {service}
              </h4>
            ))}
          </motion.div>
        ))}
      </div>
      
      <div className="absolute left-0 top-0 bottom-0 flex items-center">
        <div className="bg-black bg-opacity-80 px-6 py-3 ml-4 md:ml-10 flex items-center">
          <motion.h1 
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className={`${accentColor} text-2xl md:text-3xl font-bold`}
          >
            Our Services
          </motion.h1>
        </div>
      </div>
    </div>
  );
};

export default MarqueeComponent;
// MarqueeComponent.jsx
'use client';

import React from 'react';
import { motion } from 'framer-motion'; // Ensure framer-motion is imported correctly.

const services = [
  'Logo & Branding Design -',
  'Websites & Landing Pages -',
  'SaaS & AI Development -',
  'Mobile Apps & Programming - ',
  'Video Design & Motion Graphics - ',
];

const MarqueeComponent = ({ speed = 10, bgColor = 'bg-[#666666]', textColor = 'text-white' }) => {
  return (
    <div className={`overflow-hidden ${bgColor} py-4`}>
      <div className="whitespace-nowrap flex items-center">
        {[...Array(2)].map((_, index) => (
          <motion.div
            key={index}
            className="flex space-x-6 px-4"
            initial={{ x: index === 0 ? 0 : 1000 }}
            animate={{ x: -1000 }}
            transition={{ duration: speed, repeat: Infinity, ease: 'linear' }}
          >
            {services.map((service, i) => (
              <h4
                key={i}
                className={`${textColor} text-xl font-semibold hover:scale-105 transition-transform`}
              >
                {service}
              </h4>
            ))}
          </motion.div>
        ))}
      </div>
      <h1 className='absolute text-[35px] font-light text-[#4dff18] left-[20px] ml-[40px] w-[210px] h-[50px]' >Our Services</h1>
    </div>
  );
};

export default MarqueeComponent;

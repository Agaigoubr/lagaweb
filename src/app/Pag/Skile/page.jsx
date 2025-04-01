'use client'
import React from 'react';
import { motion } from 'framer-motion';
import * as Tooltip from '@radix-ui/react-tooltip';
import { Alfa_Slab_One, Averia_Serif_Libre, Merriweather } from 'next/font/google';






const alfaSlab = Alfa_Slab_One({ weight: '400', subsets: ['latin'] });
const averiaSerif = Averia_Serif_Libre({ weight: ['300', '400', '700'], subsets: ['latin'] });
const merriweather = Merriweather({ weight: ['300', '400', '700', '900'], subsets: ['latin'] });





const skills = [
  { title: 'UI/UX Design / Logo & Branding', percentage: 99, description: 'تصميم واجهة المستخدم وتجربة المستخدم مع هوية تجارية قوية.' },
  { title: 'Websites & Landing Pages', percentage: 96, description: 'تطوير مواقع ويب حديثة وصفحات هبوط جذابة.' },
  { title: 'Mobile Apps & Programming', percentage: 90, description: 'تطوير تطبيقات الهاتف المحمول مع البرمجة المتقدمة.' },
];

const SkillsSection = () => {
  return (
    <section className="py-12 bg-white dark:bg-blue-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">

        <div className={averiaSerif.className}>
            <div className='bg-[#f8f8f8] rounded-[30px] w-[200px] h-[100px]'>
          <h2 className="text-3xl  text-black dark:text-white">Best skills</h2>
          <p className="text-lg text-[#096612] dark:text-gray-400 mt-2">For the Laga web team</p>
          </div>
          </div>
        </div>
        <div className="space-y-8">
          {skills.map((skill, index) => (
            <div key={index} className="">
              <div className="flex justify-between mb-1">
                <div className="flex items-center gap-2">
                  <h3 className="text-xl font-semibold text-black dark:text-white">{skill.title}</h3>
                  <Tooltip.Provider>
                    <Tooltip.Root>
                      <Tooltip.Trigger asChild>
                        <svg className="w-4 h-4 text-black dark:text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
                      </Tooltip.Trigger>
                      <Tooltip.Content sideOffset={5} className="bg-black text-white p-2 rounded-md shadow-md">
                        {skill.description}
                      </Tooltip.Content>
                    </Tooltip.Root>
                  </Tooltip.Provider>
                </div>
                <span className="text-lg font-bold text-[#267a0c] dark:text-white">{skill.percentage}%</span>
              </div>
              <div className="w-full bg-[#f6f6d2] dark:bg-black rounded-full h-[50px]">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.percentage}%` }}
                  transition={{ duration: 17 }}
                  className="h-[50px] rounded-full bg-[#2e8115]"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    
  );
};

export default SkillsSection;

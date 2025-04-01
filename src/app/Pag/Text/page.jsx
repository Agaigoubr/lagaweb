"use client";
import Image from 'next/image';
import React from 'react';
import { Alfa_Slab_One, Averia_Serif_Libre, Merriweather } from 'next/font/google';

// استيراد الخطوط مع تحديد الأوزان واللغات
const alfaSlab = Alfa_Slab_One({ weight: '400', subsets: ['latin'] });
const averiaSerif = Averia_Serif_Libre({ weight: ['300', '400', '700'], subsets: ['latin'] });
const merriweather = Merriweather({ weight: ['300', '400', '700', '900'], subsets: ['latin'] });

export default function Page() {
  return (
    <>
      {/* تصميم سطح المكتب */}
      <div className="hidden md:block">
        <div className={averiaSerif.className}>
          <h1 className="text-[200px] ml-[150px] text-[#4dff18] animate-glow">
            LAGA <span className="text-black">WEB</span>
          </h1>
        </div>
      </div>

      {/* تصميم الهاتف */}
      <div className="block md:hidden flex justify-center items-center ">
        <h1 className={`${averiaSerif.className} text-[50px] text-[#4dff18] text-center`}>
          LAGA <span className="text-black">WEB</span>
        </h1>
      </div>
    </>
  );
}

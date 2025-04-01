import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { GoArrowUpRight } from "react-icons/go";

export default function Page() {
  return (
    <>
      {/* تصميم سطح المكتب */}
      <div className="hidden md:block">
        <div className="bg-[#f9f9f9] w-[900px] h-[150px] rounded-[30px] mt-[10px] ml-[200px] flex items-center relative px-6 sticky top-0 z-10">
          
          {/* صورة الشعار */}
          <div className="w-[150px] h-[150px]">
            <Image 
              src="/logos.jpg" 
              alt="Logo" 
              width={150} 
              height={150} 
              className="rounded-full object-cover"
            />
          </div>

          {/* العنوان */}
          <h1 className="text-lg ml-8">
            Full Design & Coding Agency
          </h1>

          {/* زر البدء */}
          <a href='./contact'>
            <button className="absolute right-6 bg-[#DDF82C] w-[200px] h-[40px] rounded-[30px] flex items-center justify-center gap-2 hover:bg-[#3ad10f] transition">
              Start Project
              <GoArrowUpRight className="text-[20px]" />
            </button>
          </a>

         
        </div>
      </div>

      {/* تصميم الهاتف */}
      <div className="block md:hidden bg-[#f9f9f9] w-full h-auto p-6 rounded-[20px] flex flex-col items-center text-center">
        {/* صورة الشعار */}
        <div className="w-[100px] h-[100px] mb-4">
          <a href="/">
          <Image 
            src="/logos.jpg" 
            alt="Logo" 
            width={100} 
            height={100} 
            className="rounded-full object-cover"
          />
          </a>
        </div>

        {/* العنوان */}
        <h1 className="text-lg mb-4">
          Full Design & Coding Agency
        </h1>

        {/* زر البدء */}
        <Link href="/contact">
        <button 
       
        className="bg-[#DDF82C] w-[300px] max-w-[250px] h-[50px] rounded-[30px] flex items-center justify-center gap-2 hover:bg-[#3ad10f] transition">
          Start Project
          <GoArrowUpRight className="text-[20px]" />
        </button>
      </Link>
      </div>
    </>
  );
}

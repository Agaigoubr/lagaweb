import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { GoArrowUpRight } from "react-icons/go";

export default function NavigationBar() {
  return (
    <>
      {/* تصميم سطح المكتب - محسن */}
      <div className="hidden md:block sticky top-0 z-50">
        <div className="bg-glass backdrop-blur-md w-full max-w-[1000px] mx-auto h-[120px] rounded-[30px] mt-4 shadow-lg border border-gray-100 flex items-center justify-between px-8">
          
          {/* الجزء الأيسر: الشعار والعنوان */}
          <div className="flex items-center gap-6">
            <div className="w-[80px] h-[80px] relative -mt-4">
              <Link href={"/"}>
              <Image 
                src="/logos.png" 
                alt="Laga Agency Logo"
                width={80}
                height={80}
                className="rounded-full mt-[30px] object-cover border-2 border-[#DDF82C] shadow-sm hover:scale-105 transition-transform"
              />
              </Link>
            </div>
            
            <div className="flex flex-col">
              <p className="text-gray-500 text-sm">Full Design & Development Solutions</p>
            </div>
          </div>

          {/* الجزء الأيمن: روابط وزر الإجراء */}
          <div className="flex items-center gap-8">
            <nav className="hidden lg:flex gap-6">
              <Link href="/" className="text-black hover:text-[#DDF82C] transition-colors font-medium">Home</Link>
              <Link href="/services" className="text-black hover:text-[#DDF82C] transition-colors font-medium">Services</Link>
              <Link href="/about" className="text-black hover:text-[#DDF82C] transition-colors font-medium">About</Link>
            </nav>
            
            <Link href="/contact" legacyBehavior>
              <a className="bg-[#DDF82C] hover:bg-[#c5e82a] px-6 py-3 rounded-full flex items-center gap-2 font-medium text-gray-900 shadow-md hover:shadow-lg transition-all">
                Start Project
                <GoArrowUpRight className="text-xl" />
              </a>
            </Link>
          </div>
        </div>
      </div>

      {/* تصميم الهاتف - محسن */}
      <div className="block md:hidden sticky top-0 z-50 bg-glass backdrop-blur-sm py-0 px-3 shadow-md">
        <div className="flex flex-col items-center">
          {/* شعار وعنوان */}
          <Link href="/" className="flex flex-col items-center">
            <div className="w-[70px] h-[70px] relative mb-2">
              <Image 
                src="/logos.png" 
                alt="Laga web"
                width={70}
                height={70}
                className="rounded-full object-cover border-2 mt-[39px] border-[#DDF82C]"
              />
            </div>
          </Link>

          {/* زر الإجراء */}
          <div className="mt-4 w-full max-w-[280px]">
            <Link href="/contact" legacyBehavior>
              <a className="bg-[#DDF82C] hover:bg-[#c5e82a] w-full py-3 rounded-full flex items-center justify-center gap-2 font-medium text-gray-900 shadow-md hover:shadow-lg transition-all">
                Start Project
                <GoArrowUpRight className="text-xl" />
              </a>
            </Link>
          </div>

          {/* روابط مصغرة */}
          <nav className="flex gap-4 mt-4 text-sm">
            <Link href="/" className="text-black hover:text-[#DDF82C] transition-colors">Home</Link>
            <Link href="/services" className="text-black hover:text-[#DDF82C] transition-colors">Services</Link>
            <Link href="/about" className="text-black hover:text-[#DDF82C] transition-colors">About</Link>
          </nav>
        </div>
      </div>
    </>
  );
}
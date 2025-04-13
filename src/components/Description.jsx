import React from 'react';

export default function Description() {
  return (
    <>
      {/* تصميم سطح المكتب */}
      <div className="hidden md:flex  justify-center my-40 flex-col items-center">
        <h1 className="text-[3.5vw] text-[#fcf805] uppercase text-center max-w-[70vw] leading-none">
          Who are we?
        </h1>
        <p className="text-[2.5vw] uppercase text-center max-w-[70vw] leading-none">
          Laga web. talented team specializes in Websites & Landing Pages, Logo Design & Branding, 
          SaaS & AI Development, and Mobile Apps & Coding, ensuring comprehensive solutions tailored to your needs.
        </p>
      </div>

      {/* تصميم الهاتف */}
      <div className="block md:hidden flex flex-col items-center text-center my-20 px-4">
        <h1 className="text-[8vw] text-[#e7f70e] uppercase leading-tight">
          Who are we?
        </h1>
        <p className="text-[5vw] uppercase leading-tight mt-4">
          Laga Web specializes in Websites, Branding, SaaS, AI Development, and Mobile Apps.
        </p>
      </div>
    </>
  );
}

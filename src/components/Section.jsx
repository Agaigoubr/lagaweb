import Image from 'next/image';
import Background from '../../public/img/tof.jpg';
import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef } from 'react';
import { Anton } from 'next/font/google';

const anton = Anton({ subsets: ['latin'], weight: '400' });

export default function Section() {
    const container = useRef();
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start end", 'end start']
    });
    const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
    const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
    const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0.6]);

    return (
        <div className={anton.className}>
            {/* Desktop version */}
            <div
                ref={container}
                className="hidden md:flex relative items-center justify-center h-screen overflow-hidden"
                style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
            >
                {/* Text overlay */}
                <div className="relative z-10 p-20 text-white w-full h-full flex flex-col justify-between">
                    <motion.p 
                        className="w-[50vw] text-[3vw] self-end uppercase font-bold"
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                    >
                        We design and program <span className="text-[#49ca0d]">excellent</span> companies starting from scratch
                    </motion.p>
                    
                    <motion.p 
                        className="text-[3vw] uppercase font-bold"
                        initial={{ opacity: 0, x: -100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
                    >
                        As a tight-knit team of experts, we create <span className="text-[#49ca0d]">memorable</span> and <span className="text-[#49ca0d]">emotional</span> websites, SaaS, AI & Apps, and UI/UX Design
                    </motion.p>
                </div>

                {/* Background image with parallax */}
                <div className="absolute top-0 left-0 h-screen w-full">
                    <motion.div 
                        style={{ y, opacity }} 
                        className="relative w-full h-full"
                    >
                        {/* Dark overlay gradient */}
                        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/40 z-10"></div>
                        
                        {/* Image with parallax */}
                        <Image 
                            src={Background} 
                            fill 
                            alt="Background image" 
                            style={{ objectFit: "cover" }}
                            priority
                        />
                    </motion.div>
                </div>
            </div>

            {/* Mobile version */}
            <div className="block md:hidden relative min-h-[80vh] flex flex-col items-center justify-center text-center p-6">
                {/* Background with overlay */}
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-black/60 mix-blend-multiply z-10"></div>
                    <Image 
                        src={Background} 
                        fill 
                        alt="Background Image" 
                        className="object-cover"
                        priority
                    />
                </div>
                
                {/* Content */}
                <div className="relative z-10 max-w-sm mx-auto">
                    <motion.div
                        className="mb-6"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <motion.h2 
                            className="text-white text-4xl font-bold uppercase leading-tight"
                            animate={{ 
                                scale: [1, 1.02, 1],
                                transition: { 
                                    repeat: Infinity, 
                                    repeatType: "reverse", 
                                    duration: 3 
                                } 
                            }}
                        >
                            We design & program <span className="text-[#49ca0d]">excellent</span> companies
                        </motion.h2>
                    </motion.div>
                    
                    <motion.p
                        className="text-white text-xl mt-4 uppercase"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    >
                        Experts in Websites, SaaS, AI & UI/UX Design
                    </motion.p>
                    
                    <motion.div
                        className="mt-8"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                    >
                        <a 
                            href="#contact" 
                            className="inline-block bg-[#49ca0d] text-black font-medium py-3 px-8 rounded-full uppercase tracking-wide transform transition-transform hover:scale-105"
                        >
                            Get Started
                        </a>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
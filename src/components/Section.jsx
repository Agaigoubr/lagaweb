import Image from 'next/image';
import Background from '../../public/img/tof.jpg';
import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef } from 'react';

import { Anton, Paytone_One, Righteous } from 'next/font/google';

const anton = Anton({ subsets: ['latin'], weight: '400' });

export default function Section() {
    const container = useRef();
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start end", 'end start']
    });
    const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
    const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]); // تكبير تدريجي

    return (
        <div className={anton.className}>
            {/* تصميم سطح المكتب */}
            <div
                ref={container}
                className="hidden md:flex relative items-center justify-center h-screen overflow-hidden"
                style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
            >
                <div className="relative z-10 p-20 mix-blend-difference text-white w-full h-full flex flex-col justify-between">
                    <p className="w-[50vw] text-[3vw] self-end uppercase mix-blend-difference">
                        We design and program excellent companies starting from scratch
                    </p>
                    <p className="text-[3vw] uppercase mix-blend-difference">
                        As a tight-knit team of experts, we create memorable and emotional websites, SaaS, AI & Apps, and UI/UX Design
                    </p>
                </div>

                <div className="fixed top-[-10vh] left-0 h-[120vh] w-full">
                    <motion.div style={{ y }} className="relative w-full h-full">
                        <Image src={Background} fill alt="image" style={{ objectFit: "cover" }} />
                    </motion.div>
                </div>
            </div>

            {/* تصميم الهاتف مع تحسين الأنميشن */}
            <div className="block md:hidden relative flex flex-col items-center justify-center text-center p-6 bg-black text-[#4dff18]">
                <div className="absolute inset-0">
                    <Image src={Background} fill alt="Background Image" className="object-cover opacity-50" />
                </div>
                <div className="relative z-10">
                    <motion.p
                        className="text-[6vw] font-bold uppercase leading-tight"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                    >
                        We design & program excellent companies
                    </motion.p>
                    <motion.p
                        className="text-[4vw] mt-4 uppercase"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.3 }}
                    >
                        Experts in Websites, SaaS, AI & UI/UX Design
                    </motion.p>
                </div>
            </div>

            {/* إضافة تحسينات هزّة / تكبير على الهاتف */}
            <motion.div
                className="block md:hidden relative w-full h-full"
                style={{ scale }}
                animate={{
                    opacity: [0.5, 1],  // تلاشي تدريجي
                    y: [30, 0],         // تأثير حركة من أسفل إلى أعلى
                    transition: { duration: 1, delay: 0.5 },
                }}
            >
                <Image
                    src={Background}
                    alt="Background"
                    layout="fill"
                    objectFit="cover"
                    className="object-cover opacity-30"
                />
            </motion.div>
        </div>
    );
}

'use client'
import React from 'react';
import { motion } from 'framer-motion';

export default function Page() {
  const fadeInVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
      {[...Array(10).keys()].map((index) => (
        <motion.div
          key={index}
          variants={fadeInVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-4"
        >
          {index === 0 ? (
            <motion.video
              controls
              className="h-auto max-w-full rounded-[40px] object-cover object-center"
              src="/proji/vi.mp4"
              variants={fadeInVariant}
            />
          ) : (
            <motion.img
              className="h-auto max-w-full rounded-[40px] object-cover object-center"
              src={`/proji/${index + 1}.png`}
              alt="gallery-photo"
              variants={fadeInVariant}
            />
          )}
        </motion.div>
      ))}
    </div>
  );
}

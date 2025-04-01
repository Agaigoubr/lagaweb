"use client"
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10">
      <div className="container mx-auto text-center space-y-6">
        <motion.p
          className="text-[50px] font-extrabold text-[#3ada34]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          &copy; {new Date().getFullYear()} LagaWeb
        </motion.p>
        <div className="flex flex-col md:flex-row justify-center items-center gap-8">
          <motion.p
            className="text-lg flex items-center gap-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 1 }}
          >
            📧 <a href="mailto:agaigoubrhim@gmail.com" className="text-[#3ada34] hover:text-white hover:underline transition duration-300 ease-in-out">agaigoubrhim@gmail.com</a>
          </motion.p>
          <motion.p
            className="text-lg flex items-center gap-2 text-[#3ada34]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 1 }}
          >
            📍 Agadir
          </motion.p>
          <motion.p
            className="text-lg flex items-center gap-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2, duration: 1 }}
          >
            📞 <a href="tel:0778845459" className="text-[#3ada34] hover:text-white hover:underline transition duration-300 ease-in-out">0778845459</a>
          </motion.p>
        </div>
        <motion.div
          className="border-t border-gray-700 pt-4 text-sm text-gray-400"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.5, duration: 1 }}
        >
          <p>Designed & Developed by <span className="text-[#3ada34] font-semibold">Agaygou Team</span></p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;

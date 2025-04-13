"use client";
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { FiMail, FiMapPin, FiPhone, FiLinkedin, FiGithub, FiTwitter, FiInstagram } from 'react-icons/fi';
import Link from 'next/link';

const Footer = () => {
  const [hovered, setHovered] = useState(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const currentYear = new Date().getFullYear();
  
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const contactItems = [
    { 
      id: 'email', 
      icon: <FiMail className="w-5 h-5" />, 
      content: 'agaigoubrhim@gmail.com', 
      link: 'mailto:agaigoubrhim@gmail.com', 
      delay: 0.4 
    },
    { 
      id: 'location', 
      icon: <FiMapPin className="w-5 h-5" />, 
      content: 'Agadir', 
      link: 'https://maps.google.com/?q=Agadir', 
      delay: 0.5 
    },
    { 
      id: 'phone', 
      icon: <FiPhone className="w-5 h-5" />, 
      content: '0778845459', 
      link: 'tel:0778845459', 
      delay: 0.6 
    }
  ];

  const socialLinks = [
    { id: 'linkedin', icon: <FiLinkedin />, url: '#', delay: 0.7 },
    { id: 'github', icon: <FiGithub />, url: '#', delay: 0.8 },
    { id: 'twitter', icon: <FiTwitter />, url: '#', delay: 0.9 },
    { id: 'instagram', icon: <FiInstagram />, url: '#', delay: 1.0 }
  ];

  const quickLinks = [
    { name: 'Services', url: '/services', delay: 0.4 },
    { name: 'Works', url: '/works', delay: 0.5 },
    { name: 'About', url: '/about', delay: 0.6 },
    { name: 'Blog', url: '/blog', delay: 0.7 }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  // Parallax effect calculation for background shapes
  const parallaxOffset = scrollPosition * 0.1;

  return (
    <footer className="bg-white text-black pt-20 pb-10 relative overflow-hidden border-t-4 border-[#49ca0d]">
      {/* Abstract background shapes with parallax effect */}
      <div className="absolute inset-0 opacity-5 overflow-hidden">
        <motion.div
          style={{ y: parallaxOffset }}
          transition={{ type: "spring", stiffness: 10 }}
          className="absolute inset-0"
        >
          <svg width="100%" height="100%" viewBox="0 0 1440 400" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#49ca0d" />
                <stop offset="100%" stopColor="#36940a" />
              </linearGradient>
              <linearGradient id="gradient2" x1="100%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#49ca0d" />
                <stop offset="100%" stopColor="#36940a" />
              </linearGradient>
            </defs>
            <path 
              d="M0,192L48,186.7C96,181,192,171,288,149.3C384,128,480,96,576,117.3C672,139,768,213,864,218.7C960,224,1056,160,1152,128C1248,96,1344,96,1392,96L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" 
              fill="url(#gradient1)"
              opacity="0.5"
            />
            <path 
              d="M0,96L48,128C96,160,192,224,288,229.3C384,235,480,181,576,170.7C672,160,768,192,864,208C960,224,1056,224,1152,197.3C1248,171,1344,117,1392,90.7L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" 
              fill="url(#gradient2)"
              opacity="0.3"
            />
          </svg>
        </motion.div>
      </div>

      <div className="container mx-auto px-6 relative z-10 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          {/* Column 1 - Logo and tagline */}
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.div 
              className="inline-block"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <h2 className="text-3xl font-bold tracking-tight">
                <span className="text-[#49ca0d]">Sochn</span> <span className="relative">
                  Made
                  <motion.span 
                    className="absolute -bottom-1 left-0 h-1 bg-[#49ca0d] rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: '100%' }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    viewport={{ once: true }}
                  />
                </span>
              </h2>
            </motion.div>
            
            <motion.p 
              className="text-gray-600"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              viewport={{ once: true }}
            >
              Transforming digital visions into extraordinary web experiences with cutting-edge solutions and creative excellence.
            </motion.p>

            <motion.div 
              className="flex space-x-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              viewport={{ once: true }}
            >
              {socialLinks.map((social) => (
                <motion.a
                  key={social.id}
                  href={social.url}
                  className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-600 hover:text-[#49ca0d] hover:border-[#49ca0d] transition-all duration-300 shadow-sm"
                  whileHover={{ 
                    scale: 1.1, 
                    backgroundColor: 'rgba(73, 202, 13, 0.1)',
                    y: -5,
                    boxShadow: '0 10px 25px -5px rgba(73, 202, 13, 0.3)'
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: social.delay, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Column 2 - Quick Links */}
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold relative inline-block pb-2">
              Quick Links
              <motion.span 
                className="absolute -bottom-1 left-0 h-1 bg-[#49ca0d] rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: '100%' }}
                transition={{ delay: 0.3, duration: 0.8 }}
                viewport={{ once: true }}
              />
            </h3>
            
            <motion.ul 
              className="space-y-3"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {quickLinks.map((link) => (
                <motion.li 
                  key={link.name}
                  variants={itemVariants}
                  transition={{ duration: 0.5, delay: link.delay }}
                >
                  <Link href={link.url}>
                    <motion.span 
                      className="flex items-center text-gray-600 hover:text-[#49ca0d] transition-colors duration-300 group"
                      whileHover={{ x: 5 }}
                    >
                      <motion.span
                        className="inline-block w-0 h-0.5 bg-[#49ca0d] mr-2 opacity-0 group-hover:w-4 group-hover:opacity-100 transition-all duration-300"
                      />
                      {link.name}
                    </motion.span>
                  </Link>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Column 3 - Contact Information */}
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold relative inline-block pb-2">
              Contact Us
              <motion.span 
                className="absolute -bottom-1 left-0 h-1 bg-[#49ca0d] rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: '100%' }}
                transition={{ delay: 0.3, duration: 0.8 }}
                viewport={{ once: true }}
              />
            </h3>
            
            <motion.div 
              className="space-y-4"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {contactItems.map((item) => (
                <motion.div 
                  key={item.id}
                  className="flex items-center gap-4 group"
                  variants={itemVariants}
                  transition={{ duration: 0.5, delay: item.delay }}
                  onMouseEnter={() => setHovered(item.id)}
                  onMouseLeave={() => setHovered(null)}
                >
                  <motion.div 
                    className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-[#49ca0d] border border-gray-100"
                    animate={{ 
                      scale: hovered === item.id ? 1.1 : 1,
                      backgroundColor: hovered === item.id ? 'rgba(73, 202, 13, 0.1)' : 'white',
                      boxShadow: hovered === item.id ? '0 10px 25px -5px rgba(73, 202, 13, 0.3)' : '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    {item.icon}
                  </motion.div>
                  <div className="flex flex-col">
                    <motion.span className="text-xs text-gray-500 uppercase tracking-wider">
                      {item.id}
                    </motion.span>
                    {item.link ? (
                      <motion.a 
                        href={item.link} 
                        className="text-gray-700 hover:text-[#49ca0d] transition-colors duration-300 group-hover:font-medium"
                        whileHover={{ x: 2 }}
                      >
                        {item.content}
                      </motion.a>
                    ) : (
                      <span className="text-gray-700">{item.content}</span>
                    )}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Column 4 - Newsletter */}
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold relative inline-block pb-2">
              Newsletter
              <motion.span 
                className="absolute -bottom-1 left-0 h-1 bg-[#49ca0d] rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: '100%' }}
                transition={{ delay: 0.3, duration: 0.8 }}
                viewport={{ once: true }}
              />
            </h3>
            
            <p className="text-gray-600 text-sm">
              Subscribe to our newsletter to receive updates and latest news.
            </p>
            
            <form className="mt-4 space-y-3">
              <div className="relative">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#49ca0d]/30 focus:border-[#49ca0d] transition-all duration-300"
                />
                <motion.button 
                  type="submit"
                  className="absolute right-2 top-2 bg-[#49ca0d] text-white h-8 w-8 rounded-md flex items-center justify-center"
                  whileHover={{ scale: 1.05, backgroundColor: "#36940a" }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </motion.button>
              </div>
              <p className="text-xs text-gray-500 mt-2">
                By subscribing, you agree to our Privacy Policy.
              </p>
            </form>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div 
          className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent my-8"
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          viewport={{ once: true }}
        />

        {/* Bottom section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <motion.p 
            className="text-sm text-gray-600"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            viewport={{ once: true }}
          >
            © {currentYear} <span className="text-[#49ca0d] font-medium">Sochn Made</span>. All rights reserved.
          </motion.p>
          
          <motion.div
            className="flex items-center gap-2"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <motion.p className="text-sm text-gray-600">
              Designed & Developed by
            </motion.p>
            <motion.a 
              href="#"
              className="font-medium text-[#49ca0d] inline-block relative group"
              whileHover={{ scale: 1.05 }}
            >
              Agaygou Team
              <motion.span 
                className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#49ca0d] group-hover:w-full transition-all duration-300"
              />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
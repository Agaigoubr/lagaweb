"use client"
import React, { useState } from "react";
import emailjs from "emailjs-com";
import Link from "next/link";
<<<<<<< HEAD
import { ArrowLeft, Send, CheckCircle, Mail, Phone, MapPin } from "lucide-react";
=======
import { FiArrowLeft, FiCheckCircle, FiSend } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
>>>>>>> f93f301f10acc62c4b2b56c38f6fe20e92652965

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
<<<<<<< HEAD

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
=======
  const [errors, setErrors] = useState({});
>>>>>>> f93f301f10acc62c4b2b56c38f6fe20e92652965

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "الاسم مطلوب";
    if (!formData.email) {
      newErrors.email = "البريد الإلكتروني مطلوب";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "البريد الإلكتروني غير صالح";
    }
    if (!formData.phone) newErrors.phone = "رقم الهاتف مطلوب";
    if (!formData.message) newErrors.message = "الرسالة مطلوبة";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
<<<<<<< HEAD
    setIsLoading(true);

    const templateParams = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      message: formData.message,
    };

    emailjs
      .send(
        "service_1gcdj1v",
        "template_ckdcffc",
        templateParams,
        "8jIvHnV6jJwW-bSQZ"
      )
      .then((response) => {
        console.log("Email sent successfully", response);
        setSubmitted(true);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error sending email:", error);
        setIsLoading(false);
      });
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-white to-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Navigation */}
        <div className="mb-12">
        </div>

        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-black mb-4">Contact Us</h1>
          <div className="w-24 h-1 bg-green-400 mx-auto rounded-full"></div>
          <p className="mt-6 text-gray-600 max-w-2xl mx-auto text-lg">
            Feel free to reach out with any questions or collaboration proposals.
            We'll get back to you as soon as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Contact Info Cards */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-2xl shadow-lg p-8 transition-all duration-300 hover:shadow-xl hover:translate-y-[-5px]">
              <div className="flex flex-col space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-green-50 rounded-lg">
                    <Mail className="w-6 h-6 text-green-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-black">Email</h3>
                    <p className="text-gray-600 mt-1">hichamaltit91@gmail.com</p>
                    <a href="mailto:contact@example.com" className="text-green-500 hover:text-green-600 mt-2 inline-block text-sm font-medium">
                      Send an email →
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-green-50 rounded-lg">
                    <Phone className="w-6 h-6 text-green-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-black">Phone</h3>
                    <p className="text-gray-600 mt-1">0636950188</p>
                    <a href="tel:+1234567890" className="text-green-500 hover:text-green-600 mt-2 inline-block text-sm font-medium">
                      Call us →
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-green-50 rounded-lg">
                    <MapPin className="w-6 h-6 text-green-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-black">Address</h3>
                    <p className="text-gray-600 mt-1">Hay Salam , Agadir</p>
                    <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="text-green-500 hover:text-green-600 mt-2 inline-block text-sm font-medium">
                      Get directions →
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 pt-8 border-t border-gray-100">
                <h4 className="text-lg font-semibold text-black mb-4">Connect With Us</h4>
                <div className="flex space-x-4">
                  {/* Social Media Icons */}
                  {['facebook', 'twitter', 'instagram', 'linkedin'].map((social) => (
                    <a key={social} href="#" className="p-2 bg-green-50 rounded-full hover:bg-green-100 transition-colors duration-300">
                      <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"></path>
                      </svg>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form Card */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              {submitted ? (
                <div className="p-12 text-center">
                  <div className="flex justify-center mb-6">
                    <CheckCircle className="w-20 h-20 text-green-500" />
                  </div>
                  <h3 className="text-3xl font-bold text-black mb-3">Message Sent Successfully!</h3>
                  <p className="text-gray-600 mb-8 text-lg">We'll be in touch with you soon.</p>
                  <button 
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: "", email: "", phone: "", message: "" });
                    }}
                    className="px-8 py-3 bg-green-500 text-white rounded-full hover:bg-green-600 transition-colors duration-300 font-medium"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <div className="p-8 lg:p-10">
                  <h2 className="text-2xl font-bold text-black mb-6">Send Us a Message</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
                          placeholder="Enter your full name"
                          required
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
                          placeholder="example@domain.com"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
                        placeholder="XXX-XXX-XXXX"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
                        rows="5"
                        placeholder="Write your message here..."
                        required
                      ></textarea>
                    </div>

                    <div className="pt-4">
                      <button
                        type="submit"
                        disabled={isLoading}
                        className="w-full px-8 py-4 bg-black text-white rounded-lg hover:bg-gray-800 flex items-center justify-center transition-colors duration-300 disabled:bg-gray-400"
                      >
                        {isLoading ? (
                          <span className="flex items-center">
                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Sending...
                          </span>
                        ) : (
                          <>
                            <span className="mr-2">Send Message</span>
                            <Send className="w-5 h-5" />
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Map or Additional Info Section */}
        <div className="mt-16 bg-white rounded-2xl shadow-lg p-8 overflow-hidden">
          <h2 className="text-2xl font-bold text-black mb-6">Find Us</h2>
          <div className="h-64 bg-gray-200 rounded-lg overflow-hidden">
            {/* Replace with actual map component */}
            <div className="w-full h-full flex items-center justify-center bg-gray-100">
              <p className="text-gray-500">Interactive Map Goes Here</p>
            </div>
          </div>
        </div>
      </div>
    </section>
=======
    
    if (!validateForm()) return;
    
    setIsLoading(true);
    
    try {
      await emailjs.send(
        "service_1gcdj1v",
        "template_ckdcffc",
        formData,
        "8jIvHnV6jJwW-bSQZ"
      );
      setSubmitted(true);
    } catch (error) {
      console.error("Error sending email:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Link href="/" className="inline-flex items-center text-[#278b12fd] hover:text-[#1a6b0a] transition-colors">
            <FiArrowLeft className="mr-2" />
            العودة للرئيسية
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white p-8 sm:p-10 rounded-2xl shadow-xl border border-gray-100"
        >
          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="text-center"
              >
                <div className="mx-auto flex items-center justify-center h-20 w-20 rounded-full bg-green-50 mb-6">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    <FiCheckCircle className="h-10 w-10 text-green-500" />
                  </motion.div>
                </div>
                <motion.h3 
                  className="text-2xl font-bold text-gray-900 mb-2"
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  تم إرسال رسالتك بنجاح!
                </motion.h3>
                <motion.p
                  className="text-gray-600 mb-6"
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  سوف نتواصل معك في خلال 24 ساعة
                </motion.p>
                <motion.button
                  onClick={() => setSubmitted(false)}
                  className="w-full max-w-xs mx-auto bg-[#DDF82C] text-gray-900 py-3 px-6 rounded-full hover:bg-[#c5e82a] transition-colors font-medium shadow-md hover:shadow-lg"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  إرسال رسالة جديدة
                </motion.button>
              </motion.div>
            ) : (
              <motion.div
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <h2 className="text-3xl font-bold text-center text-gray-900 mb-2">تواصل معنا</h2>
                  <p className="text-gray-600 text-center mb-8">سنكون سعداء بسماع منك!</p>
                </motion.div>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  {['name', 'email', 'phone', 'message'].map((field, i) => (
                    <motion.div
                      key={field}
                      className="space-y-1"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 + i * 0.1 }}
                    >
                      <label htmlFor={field} className="block text-sm font-medium text-gray-700">
                        {field === 'name' && 'الاسم الكامل'}
                        {field === 'email' && 'البريد الإلكتروني'}
                        {field === 'phone' && 'رقم الهاتف'}
                        {field === 'message' && 'رسالتك'}
                      </label>
                      {field !== 'message' ? (
                        <input
                          type={
                            field === 'email' ? 'email' : 
                            field === 'phone' ? 'tel' : 'text'
                          }
                          id={field}
                          name={field}
                          value={formData[field]}
                          onChange={handleChange}
                          className={`block w-full px-4 py-3 rounded-xl border ${
                            errors[field] ? "border-red-300" : "border-gray-300"
                          } focus:ring-2 focus:ring-[#DDF82C] focus:border-[#DDF82C] outline-none transition`}
                          placeholder={
                            field === 'name' ? 'أدخل اسمك' : 
                            field === 'email' ? 'example@domain.com' :
                            field === 'phone' ? '+966 123 456 789' : ''
                          }
                        />
                      ) : (
                        <textarea
                          id={field}
                          name={field}
                          value={formData[field]}
                          onChange={handleChange}
                          className={`block w-full px-4 py-3 rounded-xl border ${
                            errors[field] ? "border-red-300" : "border-gray-300"
                          } focus:ring-2 focus:ring-[#DDF82C] focus:border-[#DDF82C] outline-none transition`}
                          rows="4"
                          placeholder="أخبرنا كيف يمكننا مساعدتك..."
                        ></textarea>
                      )}
                      {errors[field] && (
                        <motion.p 
                          className="mt-1 text-sm text-red-600"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                        >
                          {errors[field]}
                        </motion.p>
                      )}
                    </motion.div>
                  ))}

                  <motion.div
                    className="pt-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.7 }}
                  >
                    <motion.button
                      type="submit"
                      disabled={isLoading}
                      className={`w-full bg-[#DDF82C] text-gray-900 py-4 px-6 rounded-full hover:bg-[#c5e82a] transition-colors flex items-center justify-center font-medium shadow-md hover:shadow-lg ${
                        isLoading ? "opacity-90 cursor-not-allowed" : ""
                      }`}
                      whileHover={!isLoading ? { scale: 1.02 } : {}}
                      whileTap={!isLoading ? { scale: 0.98 } : {}}
                    >
                      {isLoading ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-gray-900" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          جاري الإرسال...
                        </>
                      ) : (
                        <>
                          <FiSend className="ml-2" />
                          إرسال الرسالة
                        </>
                      )}
                    </motion.button>
                  </motion.div>
                </form>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
>>>>>>> f93f301f10acc62c4b2b56c38f6fe20e92652965
  );
};

export default Contact;
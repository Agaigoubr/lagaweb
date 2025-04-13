"use client"
import React, { useState } from "react";
import emailjs from "emailjs-com";
import Link from "next/link";
import { FiArrowLeft, FiCheckCircle, FiSend } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});

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
  );
};

export default Contact;
"use client"
import React, { useState } from "react";
import emailjs from "emailjs-com";
import Link from "next/link";
import { ArrowLeft, Send, CheckCircle, Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
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
  );
};

export default Contact;
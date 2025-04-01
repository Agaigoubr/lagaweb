
"use client"
import React, { useState } from "react";
import emailjs from "emailjs-com";
import Link from "next/link";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      name,
      email,
      phone,
      message,
    };

    emailjs
      .send(
        "service_1gcdj1v", // Service ID الخاص بك
        "template_ckdcffc", // استبدل بـ Template ID الخاص بك من EmailJS
        templateParams,
        "8jIvHnV6jJwW-bSQZ" // استبدل بـ Public Key الخاص بك من EmailJS
      )
      .then((response) => {
        console.log("Email sent successfully", response);
        setSubmitted(true);
      })
      .catch((error) => {
        console.error("Error sending email:", error);
      });
  };

  return (
















    <section className="max-w-4xl mx-auto px-6 py-12">



<Link href='/'>
            <button className="right-6 ml-[30px] bg-[#3ada34] w-[100px] h-[30px] rounded-[30px] flex items-center justify-center gap-2 hover:bg-[#3ad10f] transition">
             HOME
            </button>
          </Link>
         

<div className="bg-white w-[40px] h-[40px]"></div>




      <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">اتصل بنا</h2>













      {submitted ? (
        <div className="text-center bg-green-100 text-green-700 p-4 rounded-[40px]">
          <h3 className="text-xl font-semibold">تم إرسال رسالتك بنجاح!</h3>
          <p>سنتواصل معك قريباً.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex flex-col">
            <label htmlFor="name" className="text-[40px] text-gray-700 mb-2">الاسم</label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-[40px]"
              required
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="email" className="text-[40px] text-gray-700 mb-2">البريد الإلكتروني</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-[40px]"
              required
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="phone" className="text-[40px] text-gray-700 mb-2">رقم الهاتف</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-[40px]"
              required
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="message" className="text-[40px] text-gray-700 mb-2">الرسالة</label>
            <textarea
              id="message"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg"
              rows="4"
              required
            ></textarea>
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="w-[300px] h-[60px] bg-[#278b12fd] text-white rounded-[40px] hover:bg-[#268b1294]"
            >
              إرسال
            </button>
          </div>
        </form>
      )}
    </section>
  );
};

export default Contact;

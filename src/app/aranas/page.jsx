'use client'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const TestimonialSlider = () => {
  const testimonials = [
    {
      id: 1,
      quote: "Working with Laga Web  has been an incredible experience. Their team understood our needs and created a website that exceeded our expectations. Their attention to detail and professionalism is remarkable. I highly recommend their services!",
      name: "B. Gordon",
      position: "CEO & Founder, Archin Studio",
      avatar: "https://webtrix.ma/wp-content/uploads/2024/08/avatar1.jpg",
      rotate: "-rotate-2"
    },
    {
      id: 2,
      quote: "Exceptional digital agency! Expertise, creativity, and professionalism delivered outstanding results. Highly recommend for top-notch digital solutions and innovation.",
      name: "D. Szoboslai",
      position: "Project Manager at Zumar Inc",
      avatar: "https://webtrix.ma/wp-content/uploads/2024/08/avatar2.jpg",
      rotate: "rotate-1 translate-y-20"
    },
    {
      id: 3,
      quote: "The Laga Web  team brought our vision to life with exceptional design. They were responsive and available at every stage of the project. I am very pleased with the final result!",
      name: "T. Morthy",
      position: "Marketing Manager, OKG",
      avatar: "https://webtrix.ma/wp-content/uploads/2024/08/avatar3.jpg",
      rotate: "rotate-1 -translate-y-12"
    },
    {
      id: 4,
      quote: "Webtrix has transformed our brand identity with modern and impactful designs. Their creative and strategic approach has really made a difference. We have already noticed an increase in engagement on our social media.",
      name: "J. Arron",
      position: "President, Newz Jsc",
      avatar: "https://webtrix.ma/wp-content/uploads/2024/08/avatar4.jpg",
      rotate: "-rotate-2"
    }
  ];

  return (
    <div className="py-12 bg-[#DDF82C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            640: {
              slidesPerView: 1
            },
            768: {
              slidesPerView: 2
            },
            1024: {
              slidesPerView: 3
            }
          }}
          className="mySwiper"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <div className={`h-full p-6 ${testimonial.rotate} transform transition-all duration-300 hover:rotate-0`}>
                <div className="bg-white p-8 rounded-xl shadow-lg h-full flex flex-col">
                  <div className="flex-grow">
                    <p className="text-lg text-gray-700 mb-6 italic">"{testimonial.quote}"</p>
                  </div>
                  <div className="flex items-center mt-auto">
                    <div className="mr-4">
                      <p className="font-semibold text-gray-900">{testimonial.name}</p>
                      <p className="text-sm text-gray-600">{testimonial.position}</p>
                    </div>
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name} 
                      className="w-16 h-16 rounded-full object-cover border-2 border-white shadow"
                      width={64}
                      height={64}
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default TestimonialSlider;
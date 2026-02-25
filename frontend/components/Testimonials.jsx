"use client";
import { testimonials } from "@/data/data";
import { BottomIcon, TopIcon } from "@/public/Icon";
import { useState } from "react";
import { FaStar } from "react-icons/fa";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const nextTestimonial = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrent(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
  };

  const { name, role, image, review } = testimonials[current];

  return (
    <section
      id="testimonial"
      className="bg-[#212428] text-white py-16 px-6 flex flex-col items-center mt-1"
    >
      <h4 className="text-[#EE4036] uppercase text-sm tracking-wider font-semibold mb-2 mt-10">
        Testimonials
      </h4>
      <h2 className="text-3xl max-sm:text-2xl md:text-4xl font-bold mb-10 text-center">
        What Clients Say!
      </h2>

      {/* Profile & Arrows */}
      <div className="flex flex-col md:flex-row items-center justify-around w-full max-w-5xl gap-8 md:gap-16">
        {/* Profile Info */}
        <div className="flex items-center gap-6 md:gap-8 text-center md:text-left">
          <img
            src={image}
            alt={name}
            className="w-24 h-24 md:w-28 md:h-28 rounded-full object-cover border-4 border-gray-800 shadow-lg"
          />

          <div>
            <h3 className="text-xl font-semibold">{name}</h3>
            <p className="text-gray-400 text-sm">{role}</p>
            <div className="flex justify-center md:justify-start mt-2 gap-1">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className="text-yellow-400" />
              ))}
            </div>
          </div>
        </div>

        {/* Arrows */}
        <div className="flex gap-3 max-sm:hidden">
          <button
            onClick={prevTestimonial}
            className="bg-[#212428] hover:bg-[#0f1116] p-3 rounded-md hover:scale-105 transition focus:text-orange-300 shadow-md shadow-[#63636352] border border-gray-700"
          >
            <FiArrowLeft className="text-xl" />
          </button>
          <button
            onClick={nextTestimonial}
            className="bg-[#212428] hover:bg-[#0f1116] p-3 rounded-md hover:scale-105 transition focus:text-orange-300 shadow-md shadow-[#63636352] border border-gray-700"
          >
            <FiArrowRight className="text-xl" />
          </button>
        </div>
      </div>

      {/* Review Card */}
      <div className="relative bg-[#212428] mt-10 max-w-3xl h-60 max-sm:h-auto w-full p-8 rounded-lg shadow-[0_0_10px_rgba(255,255,255,0.2)] text-center">
        <span className="absolute top-3 left-4">
          <TopIcon />
        </span>
        <p
          className="text-[#F5EDFFD9] text-lg italic leading-relaxed px-2 mt-13 overflow-hidden
        "
        >
          {review}
        </p>
        <span className="absolute bottom-3 max-sm:bottom-1 right-4">
          <BottomIcon />
        </span>
      </div>

      {/* Dots */}
      <div className="flex gap-2 mt-6">
        {testimonials.map((_, index) => (
          <button
            onClick={() => setCurrent(index)}
            key={index}
            className={`w-3 h-3 rounded-full transition ${
              current === index ? "bg-yellow-500" : "bg-gray-700"
            }`}
          ></button>
        ))}
      </div>
    </section>
  );
}

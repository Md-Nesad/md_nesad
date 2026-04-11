"use client";
import { motion } from "framer-motion";
import { services } from "@/data/data";

export default function Services() {
  return (
    <section
      id="services"
      className="bg-[#212428] text-white px-6 md:px-20 lg:px-42 pt-11 pb-20 mt-1"
    >
      {/* Section Header */}
      <motion.div
        className="text-center mb-12 mt-10"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        viewport={{ once: true }}
      >
        <p className="text-[#EE4036] font-semibold uppercase tracking-widest">
          My Services
        </p>
        <h2 className="text-3xl md:text-3xl font-bold max-sm:text-2xl">
          Frontend & Web app Development
        </h2>
      </motion.div>

      {/* Services Grid */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-[#212428] px-7 py-6 rounded-lg hover:bg-[#191C1F] shadow-[0_0_5px_rgba(255,255,255,0.3)] transition-all duration-300 hover:scale-105"
          >
            {/* Circle Icon Placeholder */}
            <motion.div
              className="w-12 h-12 border-4 border-[#FAAF40] rounded-full mb-4"
              initial={{ scale: 0, rotate: 180 }}
              whileInView={{ scale: 1, rotate: 360 }}
              transition={{
                type: "spring",
                stiffness: 100,
                delay: index * 0.3,
              }}
              viewport={{ once: true }}
            />
            <h3 className="text-xl font-bold mb-4 mt-6">{service.title}</h3>
            <p className="text-[#f5edffe4] text-md leading-relaxed max-sm:text-justify">
              {service.desc}
            </p>
          </div>
        ))}
      </motion.div>
    </section>
  );
}

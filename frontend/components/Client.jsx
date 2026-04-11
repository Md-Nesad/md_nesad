"use client";
import { clients } from "@/data/data";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Clients() {
  return (
    <section className="bg-[#212428] text-white py-18 px-6  md:px-16 lg:px-42 mb-[2px]">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h4 className="text-[#EE4036] uppercase text-sm tracking-wider font-semibold mb-2">
          Popular Client
        </h4>
        <h2 className="text-3xl max-sm:text-2xl md:text-4xl font-bold mb-10">
          Our Amazing Clients
        </h2>
      </motion.div>

      {/* Clients Grid */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
      >
        {clients.map((client) => (
          <div
            key={client.id}
            className="bg-[#212428] rounded-lg shadow-[0_0_5px_rgba(255,255,255,0.3)] hover:scale-105 transition-all duration-300 p-4 flex flex-col items-center"
          >
            {/* Logo */}
            <div className="bg-gray-100 w-full h-40 flex items-center justify-center rounded-md overflow-hidden">
              <Image
                src={client.logo}
                alt={client.name}
                className="object-cover w-full h-full"
              />
            </div>

            {/* Person Info */}
            <div className="flex items-center gap-3 mt-4 w-full">
              <Image
                src={client.avatar}
                alt={client.name}
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <h3 className="text-sm font-semibold">{client.name}</h3>
                <p className="text-xs text-gray-400">{client.role}</p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}

"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function ProjectModal({ isOpen, onClose, project }) {
  if (!isOpen) return null;
  const [current, setCurrent] = useState(0);

  const nextSlide = () =>
    setCurrent((prev) => (prev + 1) % project.images.length);
  const prevSlide = () =>
    setCurrent(
      (prev) => (prev - 1 + project.images.length) % project.images.length,
    );

  const handleEscKey = (e) => {
    if (e.key === "Escape") {
      onClose();
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleEscKey);
    return () => {
      window.removeEventListener("keydown", handleEscKey);
    };
  }, []);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#1e1e1ee2] backdrop-blur-sm"
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          <motion.div
            className="relative w-full max-w-5xl bg-[#2a2929] rounded-2xl p-6 text-gray-300 max-h-[75vh] shadow-lg overflow-y-auto scrollbar-hide border border-gray-600"
            onClick={(e) => e.stopPropagation()}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 text-[#EE4036] hover:text-[#EE4036]/80 transition-colors"
              onClick={onClose}
            >
              <X size={22} />
            </button>

            <div className="flex flex-col lg:flex-row gap-6">
              {/* Image Slider */}
              <div className="relative rounded-lg overflow-hidden flex-shrink-0 lg:w-2/3">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={current}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.4 }}
                  >
                    <Image
                      src={project.images[current]}
                      alt="project"
                      width={900}
                      height={900}
                      className="w-full h-80 object-cover rounded-lg"
                    />
                  </motion.div>
                </AnimatePresence>

                {/* Left Arrow */}
                <button
                  className="absolute top-1/2 left-4 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full"
                  onClick={prevSlide}
                >
                  <ChevronLeft />
                </button>
                {/* Right Arrow */}
                <button
                  className="absolute top-1/2 right-4 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full"
                  onClick={nextSlide}
                >
                  <ChevronRight />
                </button>
              </div>

              {/* Project Info */}
              <div className="flex-1">
                <motion.h2
                  className="text-2xl font-semibold text-white"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  {project.subtitle}
                </motion.h2>
                <motion.p
                  className="text-gray-400 mt-2"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  {project.describe}
                </motion.p>

                <div className="grid sm:grid-cols-2 gap-4 mt-4 text-sm">
                  <p>
                    <span className="font-semibold text-white">Client:</span>{" "}
                    {project.clientName}
                  </p>
                  <p>
                    <span className="font-semibold text-white">Date:</span>{" "}
                    {project.dateLabel}
                  </p>
                  <p>
                    <span className="font-semibold text-white">Service:</span>{" "}
                    {project.service}
                  </p>
                  <p>
                    <span className="font-semibold text-white">Budget:</span> $
                    {project.budget}
                  </p>
                </div>

                {/* Buttons */}
                {/* <div className="flex gap-4 mt-6">
                  <motion.button
                    className="px-5 py-2 bg-red-600 hover:bg-red-700 text-white rounded-md"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Contact me
                  </motion.button>
                  <motion.button
                    className="px-5 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-md"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Rate me
                  </motion.button>
                </div> */}
              </div>
            </div>

            {/* Description */}
            <motion.div
              className="mt-8 text-gray-300 leading-relaxed space-y-4 text-sm"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <p>{project.paragraphOne}</p>
              <p>{project.paragraphTwo}</p>

              {/* Extra Images */}
              <div className="grid sm:grid-cols-2 gap-6 mt-8">
                <Image
                  src={project.images[1]}
                  alt="project2"
                  width={500}
                  height={300}
                  className="rounded-lg object-cover w-full"
                />
                <Image
                  src={project.images[2]}
                  alt="project3"
                  width={500}
                  height={300}
                  className="rounded-lg object-cover w-full"
                />
              </div>

              <p>{project.paragraphThree}</p>
              <p>{project.paragraphFour}</p>
              <p>{project.paragraphFive}</p>
              <p>{project.paragraphSix}</p>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

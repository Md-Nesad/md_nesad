"use client";
import { projects } from "@/data/projects";
import ProjectModal from "@/modal/ProjectModal";
import { Arrow } from "@/public/Icon";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function PortfolioSection() {
  const [selectedProject, setSelectedProject] = useState(null);

  // Each project has its own current image index
  const [currentIndexes, setCurrentIndexes] = useState(projects.map(() => 0));

  const nextSlide = (index, item) => {
    setCurrentIndexes((prev) => {
      const updated = [...prev];
      updated[index] = (prev[index] + 1) % item.images.length;
      return updated;
    });
  };

  const prevSlide = (index, item) => {
    setCurrentIndexes((prev) => {
      const updated = [...prev];
      updated[index] =
        (prev[index] - 1 + item.images.length) % item.images.length;
      return updated;
    });
  };

  return (
    <section
      id="portfolio"
      className="bg-[#212428] text-white py-20 px-6 md:px-16 lg:px-42 mt-1"
    >
      {/* Heading */}
      <div className="text-center mb-16 mt-7">
        <p className="text-[#EE4036] font-semibold text-md uppercase mt-2">
          My Work
          <span className="text-green-600 text-sm"> (Client Projects)</span>
        </p>
        <h2 className="text-4xl md:text-4xl font-bold mt-2 max-sm:text-2xl">
          Design & Development Highlights
        </h2>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((item, index) => (
          <div
            key={index}
            className="bg-[#212428] rounded-lg overflow-hidden shadow-[0_0_7px_rgba(255,255,255,0.3)] transition duration-300 relative group"
          >
            <div className="relative rounded-lg overflow-hidden flex-shrink-0">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndexes[index]}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src={item.images[currentIndexes[index]]}
                    alt="project"
                    width={900}
                    height={500}
                    placeholder="blur"
                    loading="lazy"
                    className="w-full h-72 object-cover rounded-lg hover:scale-105 transition duration-300 ease-in-out"
                  />
                </motion.div>
              </AnimatePresence>

              {/* Left Arrow */}
              <button
                className="absolute top-1/2 left-1 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full opacity-0 translate-x-[-10px] pointer-events-none
      group-hover:opacity-100 group-hover:translate-x-0 group-hover:pointer-events-auto
      transition-all duration-300 ease-in-out max-sm:opacity-60 max-sm:translate-x-0 max-sm:pointer-events-auto"
                onClick={() => prevSlide(index, item)}
              >
                <ChevronLeft />
              </button>

              {/* Right Arrow */}
              <button
                className="
      absolute top-1/2 right-1 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full
      opacity-0 translate-x-[10px] pointer-events-none
      group-hover:opacity-100 group-hover:translate-x-0 group-hover:pointer-events-auto
      transition-all duration-300 ease-in-out max-sm:opacity-60 max-sm:translate-x-0 max-sm:pointer-events-auto
    "
                onClick={() => nextSlide(index, item)}
              >
                <ChevronRight />
              </button>
            </div>

            <div className="p-5 mb-5">
              <h3 className="text-[#EE4036] font-medium mb-4">{item.title}</h3>
              <p className="text-xl font-semibold pr-15 mb-10 text-gray-300 flex items-center gap-2">
                {item.subtitle}
              </p>

              {/* 🔗 Project Link Button */}
              {item.link && (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[#EE4036] hover:text-[#cb7b9b] underline absolute bottom-5 right-5 transition-colors duration-300"
                >
                  View Project
                </a>
              )}

              {/* Hover Arrow */}
              <button
                onClick={() => setSelectedProject(item)}
                className="
                  text-[#EE4036] text-xl absolute bottom-5 left-5
                  opacity-0 translate-x-[-10px]
                  transition-all duration-300 ease-in-out
                  group-hover:opacity-100 group-hover:translate-x-0
                "
              >
                <Arrow />
              </button>
            </div>
          </div>
        ))}
        {/* Portfolio Link */}
      </div>
      <div className="text-center mt-16">
        <p className="text-gray-300 text-lg max-sm:text-sm">
          To see my personal projects, visit{" "}
          <a
            href="https://nesad-portfolio-website.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#EE4036] hover:text-red-500 underline transition-colors duration-300 inline-block"
          >
            nesad-portfolio-website.vercel.app
          </a>
        </p>
      </div>

      {/* Modal */}
      {selectedProject && (
        <ProjectModal
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
          project={selectedProject}
        />
      )}
    </section>
  );
}

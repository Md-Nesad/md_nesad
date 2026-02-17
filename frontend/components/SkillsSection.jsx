"use client";
import { experienceData, skills } from "@/data/data";
import { useState } from "react";
import { motion } from "framer-motion";

const SkillsSection = () => {
  const [activeTab, setActiveTab] = useState("skills");

  return (
    <section className="bg-[#212428] text-white py-16 px-6 md:px-16 lg:px-42 mt-1 mb-[2px]">
      <div className=" mx-auto text-center">
        <p className="text-[#F896BD] font-semibold mb-2">
          2+ Years Crafting Web & Mobile Applications
        </p>
        <h2 className="text-3xl md:text-4xl font-bold mb-8 max-sm:text-2xl">
          Frontend and Full Stack excellence
        </h2>

        <div className="inline-flex rounded-md  p-2 mb-12  gap-2">
          <button
            onClick={() => setActiveTab("skills")}
            className={`px-20 max-sm:px-5 py-4 border border-gray-700 shadow-[0_0_5px_rgba(255,255,255,0.3)] rounded-md transition-all duration-300 text-lg max-sm:text-[15px] ${
              activeTab === "skills"
                ? "bg-[#191C1F] text-[#F5EDFF]"
                : "text-[#F5EDFFB2] bg-[#212428]"
            }`}
          >
            Tech Stack
          </button>
          <button
            onClick={() => setActiveTab("experience")}
            disabled
            className={`px-20 max-sm:px-5 py-4 border border-gray-700 shadow-[0_0_5px_rgba(255,255,255,0.3)] rounded-md transition-all duration-300 text-lg max-sm:text-[15px] ${
              activeTab === "experience"
                ? "bg-[#191C1F] text-[#F5EDFF]"
                : "text-[#F5EDFFB2] bg-[#212428]"
            }`}
          >
            Experience
          </button>
        </div>

        {/* Skills Tab */}
        {activeTab === "skills" && (
          <div className="grid md:grid-cols-2 gap-12 text-left">
            {/* Design Skills */}
            <div>
              <h3 className="text-xl font-bold mb-10 relative">
                Frontend
                <span className="block w-27 h-0.5 bg-gradient-to-r from-purple-400 to-pink-500 mt-1" />
              </h3>
              {skills.frontend.map((skill, i) => (
                <div key={i} className="mb-6">
                  <div className="flex justify-between mb-1 text-lg font-medium">
                    <span>{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-800 rounded-full h-2 overflow-hidden">
                    <motion.div
                      className="h-2 rounded-full bg-gradient-to-r from-yellow-400 to-red-500"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1.5, ease: "easeInOut" }}
                      viewport={{ once: true }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Development Skills */}
            <div>
              <h3 className="text-lg font-bold mb-10 relative">
                Backend
                <span className="block w-23 h-0.5 bg-gradient-to-r from-purple-400 to-pink-500 mt-1" />
              </h3>
              {skills.backend.map((skill, i) => (
                <div key={i} className="mb-6">
                  <div className="flex justify-between mb-1 text-lg font-medium">
                    <span>{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-800 rounded-full h-2 overflow-hidden">
                    <motion.div
                      className="h-2 rounded-full bg-gradient-to-r from-yellow-400 to-red-500"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 2.5, ease: "easeInOut" }}
                      viewport={{ once: true }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Experience Tab */}
        {activeTab === "experience" && (
          <div className="grid md:grid-cols-2 gap-12 text-left">
            {/* Education */}
            <div>
              <h3 className="text-lg font-bold mb-10">
                Job Experience
                <span className="block w-38 h-0.5 bg-gradient-to-r from-purple-400 to-pink-500 mt-1" />
              </h3>
              {experienceData.education.map((item, i) => (
                <div
                  key={i}
                  className="bg-[#212428] hover:bg-[#191C1F] hover:scale-103 transition-all duration-300 p-5 mb-6 rounded-lg  shadow-[0_0_5px_rgba(255,255,255,0.3)] border-l-4 border-gray-700 relative h-45 max-sm:h-auto"
                >
                  <div className="flex justify-between items-center">
                    <h4 className="text-[#F5EDFF] text-xl font-semibold">
                      {item.title}
                    </h4>
                    <span className="text-sm text-shadow-amber-400 text-[#FAAF40] font-medium px-2 py-1 rounded-md ">
                      {item.location}
                    </span>
                  </div>
                  <p className="text-sm text-gray-400 mb-2 border-b-2 border-gray-700 pb-5">
                    {item.company}
                  </p>
                  <p className="text-sm text-[#F5EDFFB2]">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* Jobs */}
            <div>
              <h3 className="text-lg font-semibold mb-10">
                Freelance Experience
                <span className="block w-32 h-0.5 bg-gradient-to-r from-purple-400 to-pink-500 mt-1" />
              </h3>
              {experienceData.jobs.map((job, i) => (
                <div
                  key={i}
                  className="bg-[#212428] hover:bg-[#191C1F] hover:scale-103 transition-all duration-300 p-5 mb-6 rounded-lg  shadow-[0_0_5px_rgba(255,255,255,0.3)] border-l-4 border-gray-700 relative h-45 max-sm:h-auto"
                >
                  <div className="flex justify-between items-center">
                    <h4 className="text-[#F5EDFF] text-xl font-semibold">
                      {job.title}
                    </h4>
                    <span className="text-sm text-shadow-amber-400 text-[#FAAF40] font-medium px-2 py-1 rounded-md ">
                      {job.location}
                    </span>
                  </div>
                  <p className="text-sm text-gray-400 mb-2 border-b-2 border-gray-700 pb-5">
                    {job.company}
                  </p>
                  <p className="text-sm text-[#F5EDFFB2]">{job.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default SkillsSection;

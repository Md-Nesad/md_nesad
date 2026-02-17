"use client";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import profileImg from "@/public/HeroImage/heroImage.png";
import figma from "@/public/HeroImage/figma.png";
import xd from "@/public/HeroImage/tailwind.png";
import photoshop from "@/public/HeroImage/javascript.png";
import react from "@/public/HeroImage/react.png";
import next from "@/public/HeroImage/next.png";
import fiverr from "@/public/HeroImage/fiverr.png";
import linkedin from "@/public/HeroImage/linkedin.png";
import whatsApp from "@/public/HeroImage/whatsapp.png";
import { handleScroll } from "../utility/utility";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function HeroArea() {
  const titles = ["Ui/Ux design", "Web Development", "App Development"];
  const [displayedText, setDisplayedText] = useState("");
  const [titleIndex, setTitleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const speed = deleting ? 50 : 60; // typing/deleting speed

    const timeout = setTimeout(() => {
      const fullText = titles[titleIndex];

      if (!deleting) {
        // Typing
        setDisplayedText(fullText.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);

        if (charIndex + 1 === fullText.length) {
          // Wait before deleting
          setTimeout(() => setDeleting(true), 200);
        }
      } else {
        // Deleting
        setDisplayedText(fullText.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);

        if (charIndex - 1 === 0) {
          setDeleting(false);
          setTitleIndex((titleIndex + 1) % titles.length);
        }
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, titleIndex]);
  return (
    <section
      id="home"
      className="bg-[#212428] text-white px-6 md:px-16 lg:px-42 py-20 flex flex-col md:flex-row items-center justify-between mt-15"
    >
      {/* Left Side */}
      <div className="max-w-xl space-y-5">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="uppercase tracking-widest text-sm text-gray-400"
        >
          Welcome to
          <span className="text-[#F896BD] font-semibold"> Anexa Soft</span>
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-5xl font-bold leading-tight"
        >
          Hi, We are <span className="text-orange-400">providing</span>
          <br />
          <span className="text-white max-sm:text-[25px]">
            {displayedText}.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-gray-300 leading-relaxed max-sm:text-justify"
        >
          <b className="text-[#F896BD]">Anexa Soft</b> is a digital agency
          providing UI/UX design, web development, and mobile app development
          services to build modern, scalable, and user-focused digital
          solutions.
        </motion.p>

        {/* Contact Button */}
        <motion.button
          onClick={() => handleScroll("contact")}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex items-center gap-2 bg-[#212428] shadow-md shadow-[#63636352] px-6 py-3 rounded-md text-[#EE4036] font-semibold hover:scale-105 transition"
        >
          Contact me <ArrowRight size={18} />
        </motion.button>

        {/* Skills & Socials */}
        <div className="mt-8 flex flex-col md:flex-row items-start md:items-center gap-10">
          {/* Skills */}
          <div>
            <p className="text-xs tracking-widest text-gray-400 mb-3">
              BEST SKILL ON
            </p>
            <div className="flex gap-3">
              {[figma, xd, photoshop, react, next].map((icon, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.8 + idx * 0.2 }}
                  className="bg-[#191a1d] p-3 rounded-lg w-14 h-14 flex items-center justify-center 
                     transition-transform duration-300 hover:scale-110 hover:shadow-md hover:shadow-[#63636352]"
                >
                  <Image
                    src={icon}
                    alt="skill icon"
                    width={34}
                    height={34}
                    className="object-contain"
                  />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div className="md:mt-1">
            <p className="text-xs tracking-widest text-gray-400 mb-2">
              FIND WITH US
            </p>
            <div className="flex gap-3">
              {[
                {
                  src: linkedin,
                  alt: "linkedin icon",
                  link: "https://www.linkedin.com/company/anexa-soft/",
                },
                {
                  src: fiverr,
                  alt: "Fiverr",
                  link: "https://discord.gg/WngcepYWXn",
                },
                {
                  src: whatsApp,
                  alt: "whatsApp icon",
                  link: "https://wa.me/message/WEGMWKKNQM5GB1",
                },
              ].map((social, idx) => {
                return (
                  <motion.a
                    key={idx}
                    href={social.link}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 1 + idx * 0.2 }}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-14 h-14 flex items-center justify-center bg-[#212428] rounded-lg
                     transition-transform duration-300 hover:scale-110 hover:shadow-md hover:shadow-[#63636352]`}
                  >
                    <Image
                      src={social.src}
                      alt={social.alt}
                      className="object-contain"
                    />
                  </motion.a>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Right Side Image */}
      <div className="mt-10 md:mt-0">
        <div className="relative w-[300px] md:w-[400px]">
          <Image
            src={profileImg}
            alt="Micel Brown"
            className="rounded-lg shadow-lg"
            priority
          />
        </div>
      </div>
    </section>
  );
}

"use client";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import profileImg from "@/public/HeroImage/heroImage.png";
import figma from "@/public/HeroImage/figma.png";
import xd from "@/public/HeroImage/tailwind.png";
import react from "@/public/HeroImage/react.png";
import next from "@/public/HeroImage/next.png";
import nodeJs from "@/public/HeroImage/nodeJs.png";
import fiverr from "@/public/HeroImage/discord.png";
import linkedin from "@/public/HeroImage/linkedin.png";
import whatsApp from "@/public/HeroImage/whatsapp.png";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function HeroArea() {
  const titles = [
    "Frontend Engineer",
    "UI Engineer",
    "React.js",
    "Next.js",
    "TypeScript",
    "Redux",
    "Zustand",
    "TanStack Query"
  ];
  const [displayedText, setDisplayedText] = useState("");
  const [titleIndex, setTitleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const speed = deleting ? 40 : 50; // typing/deleting speed

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
          <b className="text-white"> Frontend Solutions</b>
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-5xl font-bold leading-tight"
        >
          Hi, I am <span className="text-orange-400">Md. Nesad</span>
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
          Before collaborating with clients, I take the time to understand their requirements, business goals, and target audience. I analyze these and deliver effective solutions using the right technologies and tools.

I ensure timely delivery, maintain clear communication, and provide regular updates throughout the process—focusing on reliability and client satisfaction.
        </motion.p>

        {/* Contact Button */}
        <motion.button
          onClick={() => {
            window.open("https://wa.me/01300113023", "_blank");
          }}
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
              {[figma, xd, react, next, nodeJs].map((icon, idx) => (
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
                    width={40}
                    height={40}
                    className="object-cover"
                  />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div className="md:mt-1">
            <p className="text-xs tracking-widest text-gray-400 mb-2">
              FIND WITH ME
            </p>
            <div className="flex gap-3">
              {[
                {
                  src: linkedin,
                  alt: "Contact on linkedin",
                  link: "https://www.linkedin.com/in/mdnesad/",
                },
                {
                  src: fiverr,
                  alt: "Contact on discord",
                  link: "https://discord.com/channels/@me",
                },
                {
                  src: whatsApp,
                  alt: "Contact by whatsApp",
                  link: "https://wa.me/01300113023",
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
                      width={50}
                      height={50}
                      title={social.alt}
                    />
                  </motion.a>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Right Side Image */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mt-10 md:mt-0"
      >
        <div className="relative w-[300px] md:w-[480px]">
          <Image
            src={profileImg}
            alt="Micel Brown"
            className="rounded-lg shadow-lg"
            priority
          />
        </div>
      </motion.div>
    </section>
  );
}

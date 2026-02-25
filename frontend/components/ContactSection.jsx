"use client";
import contact from "@/public/contact.png";
import Image from "next/image";
import fiverr from "@/public/HeroImage/discord.png";
import linkedin from "@/public/HeroImage/linkedin.png";
import whatsApp from "@/public/HeroImage/whatsapp.png";
import { FiChevronDown } from "react-icons/fi";
import { motion } from "framer-motion";
import Link from "next/link";
export default function ContactSection() {
  return (
    <section
      id="contact"
      className="bg-[#212428] text-white py-20 px-6 md:px-16 lg:px-42"
    >
      <div className="text-center mb-16 mt-5">
        <p className="text-[#EE4036] text-sm font-semibold">Contact Me</p>
        <h2 className="text-4xl max-sm:text-2xl md:text-4xl text-[#F5EDFF] font-bold mt-2">
          Let’s Build Something Great
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Contact Form */}
        <form className="lg:col-span-2 bg-[#212428] p-8 rounded-lg shadow-[0_0_5px_rgba(255,255,255,0.3)] space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm mb-2 text-[#F5EDFFCC]">
                YOUR NAME
              </label>
              <input
                type="text"
                className="w-full bg-[#1E2125] p-3 rounded border-none focus:outline-none shadow-[inset_0_2px_6px_rgba(0,0,0,0.6)]"
              />
            </div>
            <div>
              <label className="block text-sm mb-2 text-[#F5EDFFCC]">
                PHONE NUMBER
              </label>
              <input
                type="number"
                className="w-full bg-[#1E2125] p-3 rounded border-none focus:outline-none shadow-[inset_0_2px_6px_rgba(0,0,0,0.6)]"
              />
            </div>
            <div>
              <label className="block text-sm mb-2 text-[#F5EDFFCC]">
                EMAIL
              </label>
              <input
                type="email"
                className="w-full bg-[#1E2125] p-3 rounded border-none focus:outline-none shadow-[inset_0_2px_6px_rgba(0,0,0,0.6)]"
              />
            </div>
            <div>
              <label className="block text-sm mb-2 text-[#F5EDFFCC]">
                Package
              </label>
              <div className="relative">
                <select className="w-full bg-[#1E2125] text-[#F5EDFFCC] p-3 rounded border-none focus:outline-none shadow-[inset_0_2px_6px_rgba(0,0,0,0.6)] appearance-none curosr-pointer">
                  <option>Select Package</option>
                  <option>Starter Plan</option>
                  <option>Pro Plan</option>
                  <option>Premium Plan</option>
                </select>
                <FiChevronDown className="absolute top-4 right-3 text-[#F5EDFFCC]" />
              </div>
            </div>
          </div>

          <div>
            <label className="block text-sm mb-2 text-[#F5EDFFCC]">
              SUBJECT
            </label>
            <input
              type="text"
              className="w-full bg-[#1E2125] p-3 rounded border-none focus:outline-none shadow-[inset_0_2px_6px_rgba(0,0,0,0.6)]"
            />
          </div>

          <div>
            <label className="block text-sm mb-2 text-[#F5EDFFCC]">
              MESSAGE
            </label>
            <textarea
              rows="3"
              className="w-full bg-[#1E2125] p-3 rounded border-none focus:outline-none shadow-[inset_0_2px_6px_rgba(0,0,0,0.6)]"
            ></textarea>
          </div>

          <Link href="https://wa.me/message/WEGMWKKNQM5GB1" target="_blank">
            <button
              type="button"
              className="w-full bg-[#212428] py-3 rounded-sm shadow-[0_0_5px_rgba(255,255,255,0.3)] text-[#F5EDFFCC] font-semibold hover:bg-[#17191c] transition mt-8"
            >
              Send Message
            </button>
          </Link>
        </form>

        {/* Profile Card */}
        <div className="bg-[#212428] p-6 rounded-lg shadow-[0_0_5px_rgba(255,255,255,0.3)] text-sm">
          <Image
            src={contact}
            alt="Card"
            className="rounded-md mb-6 hover:scale-103 transition duration-300"
          />
          <h3 className="text-lg font-semibold mb-1 text-[#F5EDFFCC]">
            Md. Nesad
          </h3>
          <p className="text-gray-400 mb-4">Frontend Developer</p>
          <p className="text-gray-400 mb-4">
            Digital solutions for a connected world. We specialize in crafting
            seamless digital experiences that drive results. Let's create
            something amazing together.
          </p>
          <p className="text-gray-400 mb-2">
            <b>WhatsApp:</b> +880 1300-113023
          </p>
          <p className="text-gray-400 mb-6">
            <b>Email:</b> nesadm26@gmail.com
          </p>

          <p className="text-gray-400 mb-2">FIND WITH US</p>
          <div className="md:mt-1">
            <div className="flex gap-3">
              {[
                {
                  src: linkedin,
                  alt: "Find us on linkedin",
                  link: "https://www.linkedin.com/company/anexa-soft/",
                },
                {
                  src: fiverr,
                  alt: "Find us on discord",
                  link: "https://discord.gg/WngcepYWXn",
                },
                {
                  src: whatsApp,
                  alt: "Contact us by whatsApp",
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
                      width={48}
                      height={48}
                      title={social.alt}
                    />
                  </motion.a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

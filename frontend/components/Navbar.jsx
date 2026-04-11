"use client";
import { useState, useEffect } from "react";
import { ShoppingCart, Menu, X } from "lucide-react";
import { handleScroll } from "../utility/utility";
import Logo from "@/public/Logo.png";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("home");

  const sections = ["home", "services", "portfolio", "testimonial", "contact"];

  const handleClick = (section) => {
    if (section === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      handleScroll(section);
    }
    setIsOpen(false);
  };

  useEffect(() => {
    const handleScrollSpy = () => {
      // 👇 Always detect home when near top
      if (window.scrollY < 200) {
        setActive("home");
        return;
      }

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActive(section);
            return;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScrollSpy);
    return () => window.removeEventListener("scroll", handleScrollSpy);
  }, []);

  return (
    <nav className="bg-[#212428] border-b border-gray-700 px-6 md:px-18 py-4 flex items-center justify-around fixed top-0 left-0 w-full z-50">
      {/* Logo */}
      <div
        onClick={() => handleClick("home")}
        className="flex items-center gap-3 cursor-pointer"
      >
        <Image src={Logo} alt="Logo" width={40} height={40} />
        <h1 className="text-orange-400 font-bold text-lg">
          Frontend <span className="text-white">Solutions</span>
        </h1>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex items-center gap-8 text-[#FFFFFFB2]">
        {sections.map((item) => (
          <li
            key={item}
            onClick={() => handleClick(item)}
            className={`relative cursor-pointer capitalize transition ${
              active === item ? "text-white font-semibold" : "hover:text-white"
            }`}
          >
            {item}
            {active === item && (
              <span className="absolute left-0 -bottom-1 w-full h-[1.5px] bg-[#EE4036]" />
            )}
          </li>
        ))}
      </ul>

      {/* Buttons */}
      <div className="flex items-center gap-3">
        <button
          onClick={() => window.open("https://wa.me/01300113023", "_blank")}
          className="hidden md:flex items-center gap-2 bg-[#1A1C20] shadow-md shadow-[#63636352] px-4 py-2 rounded-md font-medium hover:scale-105 transition text-[#EE4036]"
        >
          <ShoppingCart size={16} />
          Buy Now
        </button>

        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`absolute top-16 left-0 w-full bg-[#212428] border-t border-gray-700 md:hidden overflow-hidden transform transition-all duration-500 ease-in-out ${
          isOpen
            ? "opacity-100 translate-y-0 max-h-96"
            : "opacity-0 -translate-y-4 max-h-0"
        }`}
      >
        <ul className="flex flex-col items-center py-4 space-y-4 text-[#FFFFFFB2]">
          {sections.map((item) => (
            <li
              key={item}
              onClick={() => handleClick(item)}
              className={`cursor-pointer capitalize ${
                active === item
                  ? "text-white font-semibold"
                  : "hover:text-white"
              }`}
            >
              {item}
            </li>
          ))}

          <button
            onClick={() =>
              window.open("https://wa.me/message/WEGMWKKNQM5GB1", "_blank")
            }
            className="flex items-center gap-2 bg-[#1A1C20] shadow-md shadow-[#63636352] px-4 py-2 rounded-md font-medium hover:scale-105 transition text-[#EE4036]"
          >
            <ShoppingCart size={16} />
            Buy Now
          </button>
        </ul>
      </div>
    </nav>
  );
}

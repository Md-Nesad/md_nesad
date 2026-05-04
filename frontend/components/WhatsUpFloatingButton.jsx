"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import whatsApp from "@/public/HeroImage/whatsapp.png"

export default function WhatsAppFloatingButton() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShow(true);
      } else {
        setShow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <a
      href="https://wa.me/01300113023" // <-- your number
      target="_blank"
      rel="noopener noreferrer"
      className={`fixed bottom-20 right-1.5 z-50 transition-all duration-300 ${
        show ? "opacity-100 translate-y-0 animate-bounce" : "opacity-0 translate-y-10 pointer-events-none"
      }`}
    >
      <div title="Start Quick Chat" className=" p-3 rounded-full shadow-lg flex items-center justify-center">
        <Image
          src={whatsApp}
          alt="WhatsApp"
          className="w-16 h-16"
          width={500}
          height={500}
        />
      </div>
    </a>
  );
}
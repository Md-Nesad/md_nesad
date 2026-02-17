"use client";
import Image from "next/image";
import { handleScroll } from "../utility/utility";
import logo from "@/public/agencyLogo.png";

export default function Footer() {
  return (
    <>
      <footer className="bg-[#212428] text-white pt-16 pb-6 px-6 md:px-16 lg:px-42 mt-[2px]">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 pb-10">
          {/* Left - Logo and Description */}
          <div className="md:col-span-2 md:w-100">
            <div className="flex items-center mb-4">
              <Image src={logo} alt="Logo" className="w-12 h-12 mr-2" />
              <h2 className="text-[#F896BD] text-2xl max-sm:text-lg font-semibold">
                Anexa Soft
              </h2>
            </div>
            <p className="text-sm text-[#F5EDFFCC] leading-relaxed max-sm:text-justify">
              <b className="text-[#F896BD]">Anexa Soft</b> is a results-driven
              digital agency specializing in UI/UX design, web development, and
              mobile app development. We help businesses transform their ideas
              into modern, scalable, and high-performing digital products. Our
              team focuses on user-centered design, clean code, and innovative
              solutions to deliver seamless experiences that drive growth and
              success.
            </p>
          </div>

          {/* Middle - Quick Links */}
          <div>
            <h3 className="text-[#F896BD] text-lg font-semibold mb-4">
              Quick Link
            </h3>
            <ul className="space-y-2 text-[#F5EDFFCC]">
              <li>
                <button
                  onClick={() =>
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }
                  className="hover:text-[#F896BD]"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleScroll("services")}
                  className="hover:text-[#F896BD]"
                >
                  Service
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleScroll("portfolio")}
                  className="hover:text-[#F896BD]"
                >
                  Portfolio
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleScroll("contact")}
                  className="hover:text-[#F896BD]"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Right - Contact */}
          <div className="lg:ml-15">
            <h3 className="text-[#F896BD] text-lg font-semibold mb-4">
              Contact Us
            </h3>
            <ul className="space-y-3 text-sm text-[#F5EDFFCC]">
              <li>
                📧 <span className="font-medium">Email:</span> <br />
                anexasoft@gmail.com
              </li>
              <li>
                📞 <span className="font-medium">WhatsApp:</span> <br />
                +880 1804-955129
              </li>
              <li>
                🌐 <span className="font-medium">Location:</span> <br />
                Dhaka, Bangladesh.
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
      </footer>
      <div className="text-center text-[#F5EDFFCC] text-sm py-6 mt-[1px] bg-[#212428]">
        © {new Date().getFullYear()} Frontend Solutions. All rights reserved.
      </div>
    </>
  );
}

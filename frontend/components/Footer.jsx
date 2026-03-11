"use client";
import Image from "next/image";
import { handleScroll } from "../utility/utility";
import logo from "@/public/Logo.png";

export default function Footer() {
  return (
    <>
      <footer className="bg-[#212428] text-white pt-16 pb-6 px-6 md:px-16 lg:px-42 mt-[2px]">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 pb-10">
          {/* Left - Logo and Description */}
          <div className="md:col-span-2 md:w-100">
            <div className="flex items-center mb-4">
              <Image src={logo} alt="Logo" className="w-10 h-10 mr-4" />
              <h2 className=" text-2xl max-sm:text-lg font-semibold">
                Frontend Solutions
              </h2>
            </div>
            <p className="text-sm text-[#F5EDFFCC] leading-relaxed max-sm:text-justify">
              I’m a results-driven Frontend focused Full-Stack Developer
              specializing in UI/UX-focused web applications. I build scalable,
              high-performance digital products using clean, maintainable code
              and modern technologies. With strong attention to detail and a
              user-centered mindset, I focus on delivering responsive,
              optimized, and business-driven solutions.
            </p>
          </div>

          {/* Middle - Quick Links */}
          <div>
            <h3 className="text-[#EE4036] text-lg font-semibold mb-4">
              Quick Link
            </h3>
            <ul className="space-y-2 text-[#F5EDFFCC]">
              <li>
                <button
                  onClick={() =>
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }
                  className="hover:text-[#EE4036]"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleScroll("services")}
                  className="hover:text-[#EE4036]"
                >
                  Service
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleScroll("portfolio")}
                  className="hover:text-[#EE4036]"
                >
                  Portfolio
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleScroll("contact")}
                  className="hover:text-[#EE4036]"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Right - Contact */}
          <div className="lg:ml-15">
            <h3 className="text-[#EE4036] text-lg font-semibold mb-4">
              Contact Us
            </h3>
            <ul className="space-y-3 text-sm text-[#F5EDFFCC]">
              <li>
                📧 <span className="font-medium">Email:</span> <br />
                nesadm26@gmail.com
              </li>
              <li>
                📞 <span className="font-medium">WhatsApp:</span> <br />
                +880 1300-113023
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

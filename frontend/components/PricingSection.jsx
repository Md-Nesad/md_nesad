"use client";
import { Icon } from "@/public/Icon";
import { handleScroll } from "@/utility/utility";

export default function PricingSection() {
  return (
    <section className="bg-[#212428] text-white py-20 px-4 md:px-12 lg:px-42 mb-[2px]">
      <div className="text-center mb-16">
        <p className="text-[#EE4036] text-sm font-semibold">Best Pricing</p>
        <h2 className="text-4xl max-sm:text-2xl md:text-4xl font-bold mt-2">
          Plans That Fit Your Project
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
        {/* Starter Plan */}
        <div className="bg-[#212428] rounded-lg px-8 pb-8 pt-6 shadow-[0_0_5px_rgba(255,255,255,0.3)] hover:scale-105 hover:bg-[#1D1F22] transition duration-300">
          <h3 className="text-xl font-semibold mb-2 text-center border-b border-gray-700 pb-4">
            Starter Plan
          </h3>

          <div className="flex items-center justify-between mb-7 mt-4">
            <p className="text-gray-400 w-55">
              Perfect for Landing Pages & Portfolio Sites
              <br />
              <span className="text-sm mt-2 inline-block">
                <b>Stack:</b> HTML, CSS, React
              </span>
            </p>
            <div className="text-right text-yellow-400 text-xl font-bold mb-6">
              $150
            </div>
          </div>

          <ul className="space-y-3 mb-25">
            <li className="flex items-center gap-4">
              <Icon /> Responsive Frontend (1 Page)
            </li>
            <li className="flex items-center gap-4">
              <Icon /> 3 Revisions
            </li>
            <li className="flex items-center gap-4">
              <Icon /> Delivery in 3–4 Days
            </li>
            <li className="flex items-center gap-4">
              <Icon /> Deployed Live
            </li>
            <li className="flex items-center gap-4">
              <Icon /> Source Code
            </li>
          </ul>

          <button
            onClick={() => {
              window.open("https://wa.me/01300113023", "_blank");
            }}
            className="w-full bg-[#212428] text-[#FAAF40] py-3 rounded-md font-semibold hover:bg-[#17191c] transition duration-150 shadow-[0_0_5px_rgba(255,255,255,0.3)] mt-21"
          >
            Get Started
          </button>
        </div>

        {/* Pro Plan */}
        <div className="bg-[#212428]  rounded-lg px-8 pb-8 pt-6 shadow-[0_0_5px_rgba(255,255,255,0.3)] hover:scale-105 hover:bg-[#1D1F22] transition duration-300">
          <h3 className="text-xl font-semibold mb-2 text-center border-b border-gray-700 pb-4">
            Pro Plan
          </h3>

          <div className="flex items-center justify-between mb-7 mt-4">
            <p className="text-gray-400 mb-4 w-50">
              Ideal for Business Websites & Dashboards
              <br />
              <span className="text-sm mt-2 inline-block">
                <b>Stack:</b> React, Next.js, Tailwind
              </span>
            </p>
            <div className="text-right text-yellow-400 text-xl font-bold mb-6">
              $550
            </div>
          </div>

          <ul className="space-y-3 mb-25">
            <li className="flex items-center gap-4">
              <Icon /> Up to 6 Dynamic Pages
            </li>
            <li className="flex items-center gap-4">
              <Icon /> API Integration & State Management
            </li>
            <li className="flex items-center gap-4">
              <Icon /> Responsive & SEO Friendly
            </li>
            <li className="flex items-center gap-4">
              <Icon /> Admin Dashboard or Analytics View
            </li>
            <li className="flex items-center gap-4">
              <Icon /> 5 Revisions
            </li>
          </ul>

          <button
            onClick={() => {
              window.open("https://wa.me/01300113023", "_blank");
            }}
            className="w-full bg-[#212428] text-[#FAAF40] py-3 rounded-md font-semibold hover:bg-[#17191c] transition duration-150 shadow-[0_0_5px_rgba(255,255,255,0.3)]"
          >
            Get Started
          </button>
        </div>

        {/* Premium Plan */}
        <div className="bg-[#212428]  rounded-lg px-8 pb-8 pt-6 shadow-[0_0_5px_rgba(255,255,255,0.3)] hover:scale-105 hover:bg-[#1D1F22] transition duration-300">
          <h3 className="text-xl font-semibold mb-2 text-center border-b border-gray-700 pb-4">
            Premium Plan
          </h3>

          <div className="flex items-center justify-between mb-7 mt-4">
            <p className="text-gray-400 mb-4 w-46">
              For Full-Stack Projects & Remote Teams
              <br />
              <span className="text-sm mt-2 inline-block">
                <b>Stack:</b> React.js, Node.js, Express.js, MongoDB
              </span>
            </p>
            <div className="text-right text-yellow-400 text-xl font-bold mb-6">
              $1,200+
            </div>
          </div>

          <ul className="space-y-3 mb-16.5">
            <li className="flex items-center gap-4">
              <Icon /> Full-Stack Web App (Frontend + Backend)
            </li>
            <li className="flex items-center gap-4">
              <Icon /> Authentication & Database Integration
            </li>
            <li className="flex items-center gap-4">
              <Icon /> API development & File Upload
            </li>
            <li className="flex items-center gap-4">
              <Icon /> Admin Control Panel
            </li>
            <li className="flex items-center gap-4">
              <Icon /> Ongoing Support & Commission-Based Work
            </li>
          </ul>

          <button
            onClick={() => {
              window.open("https://wa.me/01300113023", "_blank");
            }}
            className="w-full bg-[#212428] text-[#FAAF40] py-3 mt-2 rounded-md font-semibold hover:bg-[#17191c] transition duration-150 shadow-[0_0_5px_rgba(255,255,255,0.3)]"
          >
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
}

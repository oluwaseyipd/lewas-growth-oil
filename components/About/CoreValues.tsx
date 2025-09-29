"use client";
import React, { useState } from "react";

const values = [
  {
    icon: "🌱",
    title: "Natural & Safe Ingredients",
    desc: "We use only pure, plant-based oils and botanicals—no harsh chemicals.",
    color: "#E75480",
    bgGradient: "from-[#E75480]/10 to-[#E75480]/5",
  },
  {
    icon: "🤝",
    title: "Customer-Centered Care",
    desc: "Your hair journey matters. We listen, support, and celebrate your progress.",
    color: "#FDF6F0",
    bgGradient: "from-[#fad4e0]/20 to-[#fad4e0]/10",
  },
  {
    icon: "🌍",
    title: "Authenticity & Transparency",
    desc: "Honest ingredients, honest results. What you see is what you get.",
    color: "#2D2D2D",
    bgGradient: "from-[#2D2D2D]/10 to-[#2D2D2D]/5",
  },
  {
    icon: "✨",
    title: "Quality Over Quantity",
    desc: "Every bottle is crafted with care for maximum effectiveness.",
    color: "#E75480",
    bgGradient: "from-[#E75480]/15 to-transparent",
  },
];

const CoreValues = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section className="py-24 px-4 bg-gradient-to-b from-white via-[#FDF6F0]/30 to-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-[#E75480]/5 rounded-full blur-3xl animate-pulse" />
      <div
        className="absolute bottom-20 right-10 w-96 h-96 bg-[#fad4e0]/30 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "1s" }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-block mb-4">
            <span className="text-sm font-semibold tracking-widest text-[#E75480] uppercase  px-6 py-2 rounded-full">
              What We Stand For
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-[#2D2D2D] mb-6">
            Our Core Values
          </h2>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div
              key={value.title}
              className="group relative"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Glow Effect on Hover */}
              <div
                className={`absolute -inset-2 bg-gradient-to-br ${value.bgGradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500`}
              />

              {/* Card */}
              <div className="relative bg-white rounded-3xl shadow-lg p-8 h-full flex flex-col transform group-hover:scale-105 group-hover:-translate-y-2 transition-all duration-500 border-2 border-transparent group-hover:border-[#E75480]/20">
                {/* Number Badge */}
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-[#E75480] to-[#E75480]/70 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg transform group-hover:rotate-12 transition-transform duration-500">
                  {index + 1}
                </div>

                {/* Icon Container */}
                <div className="mb-6">
                  <div
                    className={`w-20 h-20 bg-gradient-to-br ${value.bgGradient} rounded-2xl flex items-center justify-center transform group-hover:rotate-6 group-hover:scale-110 transition-all duration-500 shadow-md`}
                  >
                    <span className="text-5xl transform group-hover:scale-125 transition-transform duration-500">
                      {value.icon}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 flex flex-col">
                  <h4 className="font-bold text-xl text-[#2D2D2D] mb-3 group-hover:text-[#E75480] transition-colors duration-300">
                    {value.title}
                  </h4>

                  <p className="text-[#2D2D2D]/70 text-sm leading-relaxed flex-1">
                    {value.desc}
                  </p>

                  {/* Progress Bar */}
                  <div className="mt-6 h-1 bg-[#E75480]/10 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-[#E75480] to-[#E75480]/60 rounded-full transform origin-left transition-transform duration-700 ease-out"
                      style={{
                        transform:
                          hoveredIndex === index ? "scaleX(1)" : "scaleX(0)",
                      }}
                    />
                  </div>
                </div>

                {/* Decorative Corner Element */}
                <div className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl from-[#E75480]/5 to-transparent rounded-tl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Statement */}
        <div className="mt-20 max-w-4xl mx-auto">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-[#E75480]/20 via-[#fad4e0]/20 to-[#E75480]/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500" />
            <div className="relative bg-gradient-to-br from-white to-[#FDF6F0]/50 rounded-3xl p-12 shadow-2xl border border-[#E75480]/10">
              <div className="text-center">
                <div className="inline-block mb-4">
                  <svg
                    className="w-12 h-12 text-[#E75480] mx-auto"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                  </svg>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-[#2D2D2D] mb-4">
                  Values in Action
                </h3>
                <p className="text-lg text-[#2D2D2D]/80 leading-relaxed max-w-3xl mx-auto">
                  These aren't just words on a page—they're the foundation of
                  everything we do at Lewa's Growth Oil. From sourcing
                  ingredients to customer support, every decision reflects our
                  commitment to you and your hair journey.
                </p>

                {/* Stats Row */}
                <div className="grid grid-cols-3 gap-6 mt-10 pt-8 border-t border-[#E75480]/20">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#E75480] mb-1">
                      100%
                    </div>
                    <div className="text-sm text-[#2D2D2D]/70">Natural</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#E75480] mb-1">
                      4
                    </div>
                    <div className="text-sm text-[#2D2D2D]/70">Core Values</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#E75480] mb-1">
                      ∞
                    </div>
                    <div className="text-sm text-[#2D2D2D]/70">Commitment</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreValues;

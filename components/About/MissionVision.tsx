import React from "react";

const MissionVision = () => (
  <section className="py-20 px-4 bg-white relative overflow-hidden">
    {/* Decorative Background */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#E75480]/5 rounded-full blur-3xl" />

    <div className="max-w-6xl mx-auto relative z-10">
      {/* Section Header */}
      <div className="text-center mb-16">
        <span className="text-sm font-semibold tracking-widest text-[#E75480] uppercase">
          What Drives Us
        </span>
        <h2 className="text-4xl md:text-5xl font-bold text-[#2D2D2D] mt-4">
          Mission & Vision
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        {/* Mission Card */}
        <div className="group relative">
          {/* Glow Effect */}
          <div className="absolute -inset-1 bg-gradient-to-br from-[#E75480] to-[#E75480]/50 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500" />

          <div className="relative bg-gradient-to-br from-[#fad4e0] to-[#fad4e0]/80 rounded-3xl p-10 shadow-2xl transform group-hover:scale-[1.02] transition-all duration-300 h-full">
            {/* Icon */}
            <div className="w-16 h-16 bg-[#E75480] rounded-2xl flex items-center justify-center mb-6 shadow-lg transform group-hover:rotate-6 transition-transform duration-300">
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>

            <h3 className="text-2xl md:text-3xl font-bold text-[#2D2D2D] mb-4">
              Our Mission
            </h3>

            <p className="text-[#2D2D2D]/80 text-lg leading-relaxed">
              To provide affordable, natural hair growth solutions that restore
              confidence and beauty, empowering everyone to embrace their
              natural hair journey.
            </p>

            {/* Decorative Element */}
            <div className="mt-8 flex items-center gap-2">
              <div className="flex-1 h-1 bg-[#E75480]/30 rounded-full" />
              <div className="w-2 h-2 bg-[#E75480] rounded-full" />
            </div>
          </div>
        </div>

        {/* Vision Card */}
        <div className="group relative">
          {/* Glow Effect */}
          <div className="absolute -inset-1 bg-gradient-to-br from-[#E75480] to-[#E75480]/50 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500" />

          <div className="relative bg-gradient-to-br from-[#FDF6F0] to-[#FDF6F0]/80 rounded-3xl p-10 shadow-2xl transform group-hover:scale-[1.02] transition-all duration-300 h-full">
            {/* Icon */}
            <div className="w-16 h-16 bg-[#E75480] rounded-2xl flex items-center justify-center mb-6 shadow-lg transform group-hover:rotate-6 transition-transform duration-300">
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>
            </div>

            <h3 className="text-2xl md:text-3xl font-bold text-[#2D2D2D] mb-4">
              Our Vision
            </h3>

            <p className="text-[#2D2D2D]/80 text-lg leading-relaxed">
              To become Africa's most trusted name in natural hair care, setting
              the standard for quality, authenticity, and transformative
              results.
            </p>

            {/* Decorative Element */}
            <div className="mt-8 flex items-center gap-2">
              <div className="flex-1 h-1 bg-[#E75480]/30 rounded-full" />
              <div className="w-2 h-2 bg-[#E75480] rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default MissionVision;

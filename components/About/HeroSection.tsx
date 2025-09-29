import React from "react";

const HeroSection = () => (
  <section className="relative w-full min-h-[70vh] flex items-center justify-center overflow-hidden">
    {/* Background Image with Parallax Effect */}
    <div
      className="absolute inset-0 bg-cover bg-center transform scale-105"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80')",
      }}
    />

    {/* Gradient Overlay */}
    <div className="absolute inset-0 bg-gradient-to-br from-[#fad4e0]/90 via-[#fad4e0]/70 to-[#E75480]/40 backdrop-blur-[2px]" />

    {/* Decorative Elements */}
    <div className="absolute top-20 left-10 w-32 h-32 bg-[#E75480]/20 rounded-full blur-3xl animate-pulse" />
    <div className="absolute bottom-20 right-10 w-40 h-40 bg-white/30 rounded-full blur-3xl animate-pulse delay-700" />

    {/* Content */}
    <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 max-w-4xl mx-auto">
      <div className="mb-6 inline-block">
        <span className="text-sm md:text-base font-medium text-[#2D2D2D] bg-white/90 px-6 py-2 rounded-full shadow-lg backdrop-blur-sm">
          Welcome to Lewa's Growth Oil
        </span>
      </div>

      <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-[#E75480] drop-shadow-2xl mb-6 leading-tight">
        Our Story, Our Passion,
        <br />
        <span className="text-[#2D2D2D]">Your Hair.</span>
      </h1>

      <p className="text-lg md:text-xl text-[#2D2D2D] max-w-2xl mx-auto font-medium bg-white/80 px-8 py-4 rounded-2xl backdrop-blur-sm shadow-xl">
        Transforming hair care with nature's most powerful ingredients
      </p>
    </div>
  </section>
);

export default HeroSection;

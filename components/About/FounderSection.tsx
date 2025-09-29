import React from "react";

const FounderSection = () => (
  <section className="py-20 px-4 bg-[#FDF6F0] relative overflow-hidden">
    {/* Decorative Elements */}
    <div className="absolute top-0 right-0 w-96 h-96 bg-[#E75480]/5 rounded-full blur-3xl" />
    <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#E75480]/5 rounded-full blur-3xl" />

    <div className="max-w-6xl mx-auto relative z-10">
      {/* Section Header */}
      <div className="text-center mb-16">
        <span className="text-sm font-semibold tracking-widest text-[#E75480] uppercase">
          The Visionary Behind the Brand
        </span>
        <h2 className="text-4xl md:text-5xl font-bold text-[#2D2D2D] mt-4 mb-3">
          Meet The Founder
        </h2>
      </div>

      <div className="grid lg:grid-cols-5 gap-12 items-center">
        {/* Image Column */}
        <div className="md:col-span-2 flex justify-center">
          <div className="flex flex-col space-y-3">
            {/* Image Container */}
            <div className="w-90 md:w-120 lg:w-120 h-90 md:h-120 lg:h-120 rounded-lg overflow-hidden border-8 border-white shadow-2xl">
              <img
                src="https://qrdiyvwefkdrjgjkxsph.supabase.co/storage/v1/object/public/Bisum'25%20Images/Dr%20Adebayo.jpg"
                alt="Glory Omolewa Adepoju - Founder"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex lg:grid grid-cols-3 gap-4">
              <div className="bg-white rounded-xl p-6 shadow-md text-center hover:shadow-lg transition-shadow">
                <div className="text-3xl mb-2">🔬</div>
                <p className="text-sm font-semibold text-[#2D2D2D]">
                  Science Background
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md text-center hover:shadow-lg transition-shadow">
                <div className="text-3xl mb-2">🎤</div>
                <p className="text-sm font-semibold text-[#2D2D2D]">
                  Public Speaker
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md text-center hover:shadow-lg transition-shadow">
                <div className="text-3xl mb-2">📸</div>
                <p className="text-sm font-semibold text-[#2D2D2D]">
                  Content Creator
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Content Column */}
        <div className="md:col-span-3 space-y-6">
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <p className="text-lg text-[#2D2D2D] leading-relaxed mb-4">
              <span className="text-2xl font-bold text-[#E75480]">
                Glory Omolewa Adepoju
              </span>{" "}
              is a graduate of Science Laboratory Technology who transformed her
              personal hair struggles into a mission to help others.
            </p>
            <p className="text-lg text-[#2D2D2D]/80 leading-relaxed">
              After countless disappointing products, she crafted and tested a
              natural formula that completely transformed her own hair—leading
              to the birth of Lewa's Growth Oil.
            </p>
          </div>

          <div className="bg-gradient-to-br from-[#E75480]/10 to-transparent rounded-2xl p-8 border-l-4 border-[#E75480]">
            <p className="text-lg text-[#2D2D2D] leading-relaxed italic">
              "I combine scientific knowledge with nature's most powerful
              ingredients to help others achieve stronger, healthier,
              dandruff-free hair."
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-xl font-bold text-[#2D2D2D] mb-4">
              Beyond the Brand
            </h3>
            <p className="text-[#2D2D2D]/80 leading-relaxed">
              When she's not formulating hair care magic, Glory pursues her
              passion for public speaking, modeling, and content
              creation—sharing her journey and creativity with a growing
              community across social platforms.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default FounderSection;

import React from "react";

const BrandStory = () => (
  <section className="py-20 px-4 bg-[#FDF6F0] relative overflow-hidden">
    {/* Decorative Background Elements */}
    <div className="absolute top-0 right-0 w-96 h-96 bg-[#E75480]/5 rounded-full blur-3xl" />
    <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#E75480]/5 rounded-full blur-3xl" />

    <div className="max-w-5xl mx-auto relative z-10">
      {/* Section Header */}
      <div className="text-center mb-16">
        <div className="inline-block mb-4">
          <span className="text-sm font-semibold tracking-widest text-[#E75480] uppercase">
            About Us
          </span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-[#2D2D2D] mb-4">
          Our Story
        </h2>
        <div className="w-24 h-1 bg-[#E75480] mx-auto rounded-full" />
      </div>

      {/* Story Content */}
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Left Side - Image Card */}
        <div className="relative group">
          <div className="absolute -inset-4 bg-gradient-to-br from-[#E75480]/20 to-transparent rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300" />
          <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden transform group-hover:scale-[1.02] transition-all duration-300">
            <img
              src="https://images.unsplash.com/photo-1522338242992-e1a54906a8da?auto=format&fit=crop&w=800&q=80"
              alt="Natural hair care ingredients"
              className="w-full h-80 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#E75480]/60 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <p className="text-white font-semibold text-lg">
                100% Natural Ingredients
              </p>
            </div>
          </div>
        </div>

        {/* Right Side - Text Content */}
        <div className="space-y-6">
          <div className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-[#E75480] hover:shadow-xl transition-shadow duration-300">
            <p className="text-lg text-[#2D2D2D] leading-relaxed">
              Like many, we struggled with hair loss, slow growth, and the
              frustration of using products filled with harsh chemicals and
              empty promises. After countless disappointments, we set out to
              discover a better way.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <p className="text-lg text-[#2D2D2D] leading-relaxed">
              We formulated a unique blend of natural oils proven to nourish,
              strengthen, and revive hair from root to tip.
            </p>
          </div>

          <div className="bg-gradient-to-br from-[#E75480] to-[#E75480]/80 rounded-2xl p-8 shadow-xl transform hover:scale-[1.02] transition-all duration-300">
            <p className="text-white text-xl font-semibold leading-relaxed">
              Today, Lewa's Growth Oil is more than a product—it's a mission:
              Helping women and men grow healthier, stronger, more natural hair.
            </p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-3 gap-8 mt-16 max-w-3xl mx-auto">
        <div className="text-center">
          <div className="text-4xl font-bold text-[#E75480] mb-2">100%</div>
          <div className="text-sm text-[#2D2D2D] font-medium">Natural</div>
        </div>
        <div className="text-center">
          <div className="text-4xl font-bold text-[#E75480] mb-2">0</div>
          <div className="text-sm text-[#2D2D2D] font-medium">
            Harsh Chemicals
          </div>
        </div>
        <div className="text-center">
          <div className="text-4xl font-bold text-[#E75480] mb-2">100+</div>
          <div className="text-sm text-[#2D2D2D] font-medium">
            Happy Customers
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default BrandStory;

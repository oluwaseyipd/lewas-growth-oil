import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { Leaf, Sparkles, ShieldCheck } from "lucide-react";

export default function WhyChooseUs() {
  const features = [
    {
      icon: (
        <div className="bg-gradient-to-tr from-pink-100 to-pink-200 p-3 rounded-xl shadow-sm">
          <Leaf className="w-8 h-8 text-pink-500" aria-hidden="true" />
        </div>
      ),
      title: "Natural Ingredients",
      description:
        "Our oils are crafted from 100% natural, organic ingredients—no harsh chemicals, just pure nourishment for your hair.",
    },
    {
      icon: (
        <div className="bg-gradient-to-tr from-pink-100 to-pink-200 p-3 rounded-xl shadow-sm">
          <Sparkles className="w-8 h-8 text-pink-500" aria-hidden="true" />
        </div>
      ),
      title: "Proven Effectiveness",
      description:
        "Experience visible results. Our unique formula is designed to promote healthy hair growth and restore shine.",
    },
    {
      icon: (
        <div className="bg-gradient-to-tr from-pink-100 to-pink-200 p-3 rounded-xl shadow-sm">
          <ShieldCheck className="w-8 h-8 text-pink-500" aria-hidden="true" />
        </div>
      ),
      title: "Trusted by Many",
      description:
        "Loved by our community. We’re committed to transparency, quality, and customer satisfaction.",
    },
  ];

  return (
    <section
      className="relative py-20 bg-gradient-to-br from-[#FDF6F2] via-[#F9E6EF] to-[#FDF6F2] overflow-hidden"
      aria-labelledby="why-choose-us-heading"
    >
      {/* Botanical Accent (optional, faint, behind cards) */}
      <div className="hidden md:block absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/3 z-0 pointer-events-none">
        <Image
          src="/images/accents/leaf-accent.png"
          alt=""
          width={420}
          height={420}
          className="opacity-10 select-none"
          aria-hidden="true"
        />
      </div>
      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <h2
          id="why-choose-us-heading"
          className="text-3xl md:text-4xl font-bold text-center mb-4 text-[var(--color-primary,#C43A6B)] drop-shadow-sm"
        >
          Why Choose Lewa’s Growth Oil?
        </h2>
        <p className="text-center text-base md:text-lg text-[var(--color-neutral-charcoal,#3B2F2F)]/80 mb-12">
          More than just oil, a natural solution for strong, healthy, and
          beautiful hair.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <Card
              key={feature.title}
              className="rounded-3xl border-0 bg-white/60 backdrop-blur-md shadow-xl hover:shadow-2xl transition-all duration-200 group relative overflow-hidden"
              style={{
                boxShadow:
                  "0 4px 32px 0 rgba(196,58,107,0.07), 0 1.5px 8px 0 rgba(196,58,107,0.04)",
              }}
            >
              {/* Subtle glassmorphism gradient accent */}
              <div className="absolute inset-0 bg-gradient-to-br from-pink-50/60 to-white/40 opacity-70 pointer-events-none" />
              <CardContent className="flex flex-col items-center text-center py-12 px-7 relative z-10">
                <div className="mb-6 group-hover:scale-110 transition-transform duration-200">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-[var(--color-primary,#C43A6B)] drop-shadow">
                  {feature.title}
                </h3>
                <p className="text-[var(--color-neutral-charcoal,#3B2F2F)] text-base opacity-80">
                  {feature.description}
                </p>
              </CardContent>
              {/* Decorative floating accent */}
              <div className="absolute -bottom-6 -right-6 w-20 h-20 bg-pink-100 rounded-full blur-2xl opacity-30 z-0" />
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

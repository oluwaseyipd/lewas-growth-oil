"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Sparkles, Leaf, Droplets, CheckCircle2 } from "lucide-react";
import Image from "next/image";

const steps = [
  {
    icon: <Leaf className="w-8 h-8 text-[color:var(--color-primary)]" />,
    title: "Apply Oil",
    description:
      "Gently massage Lewa’s Growth Oil into your scalp and hair roots for deep nourishment.",
  },
  {
    icon: <Droplets className="w-8 h-8 text-[color:var(--color-primary)]" />,
    title: "Let It Absorb",
    description:
      "Allow the natural ingredients to penetrate and revitalize your hair follicles.",
  },
  {
    icon: <Sparkles className="w-8 h-8 text-[color:var(--color-primary)]" />,
    title: "Nourish & Strengthen",
    description:
      "Experience stronger, healthier hair as the oil works its magic over time.",
  },
  {
    icon: (
      <CheckCircle2 className="w-8 h-8 text-[color:var(--color-primary)]" />
    ),
    title: "See Visible Results",
    description:
      "Enjoy fuller, longer, and more radiant hair with consistent use.",
  },
];

export default function HowItWorks() {
  return (
    <section
      className="relative py-20 bg-gradient-to-br from-[#FDF6F2] via-[#F9E6EF] to-[#FDF6F2] overflow-hidden"
      aria-labelledby="how-it-works-title"
    >
      {/* Botanical Accent (optional, faint, behind thread) */}
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
          id="how-it-works-title"
          className="text-3xl md:text-4xl font-bold text-center mb-4 text-[var(--color-primary,#C43A6B)] drop-shadow-sm"
        >
          How It Works
        </h2>
        <p className="text-center text-base md:text-lg text-[var(--color-neutral-charcoal,#3B2F2F)]/80 mb-12">
          Follow the journey—each step brings you closer to your healthiest,
          most radiant hair.
        </p>
        {/* Responsive Timeline/Grid */}
        <div className="relative w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-2 justify-center place-items-center">
          {/* Connector line for lg screens */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 z-0 h-2 pointer-events-none">
            <div className="w-full h-full flex items-center">
              <div className="w-full h-1 bg-gradient-to-r from-pink-200 via-pink-400/30 to-pink-200 rounded-full" />
            </div>
          </div>
          {/* Connector line for md screens (vertical between pairs) */}
          {/* Not needed, grid gap handles spacing */}
          {/* Steps */}
          {steps.map((step, idx) => {
            // Only alternate up/down on large screens
            const isEven = idx % 2 === 0;
            return (
              <div
                key={step.title}
                className={
                  "relative z-10 flex flex-col items-center group w-full" +
                  " " +
                  // Only alternate up/down on large screens
                  ("lg:" +
                    (isEven ? "-mt-24 mb-8 lg:mb-0" : "mt-24 mt-8 lg:mt-0"))
                }
                style={{
                  minWidth: 180,
                  maxWidth: 260,
                }}
              >
                <Card
                  className={`border-0 bg-white/70 backdrop-blur-md shadow-xl hover:shadow-2xl transition-all duration-200 group relative overflow-hidden`}
                  style={{
                    boxShadow:
                      "0 4px 32px 0 rgba(196,58,107,0.07), 0 1.5px 8px 0 rgba(196,58,107,0.04)",
                  }}
                >
                  {/* Subtle glassmorphism gradient accent */}
                  <div className="absolute inset-0 bg-gradient-to-br from-pink-50/60 to-white/40 opacity-70 pointer-events-none" />
                  <CardContent className="flex flex-col items-center text-center py-10 px-6 relative z-10">
                    {/* Step number arch badge (top-left, inside card) */}
                    <span className="absolute -left-3 -top-2 z-20 flex items-center  justify-center w-16 h-16 rounded-full bg-pink-600 text-white font-extrabold text-2xl shadow-lg animate-fade-in">
                      <span className="pl-4 pb-1">{idx + 1}</span>
                    </span>
                    <div className="mb-5 group-hover:scale-110 transition-transform duration-200 animate-fade-in mt-6">
                      {step.icon}
                    </div>
                    <h3 className="font-semibold text-lg mb-2 text-[var(--color-primary,#C43A6B)] drop-shadow">
                      {step.title}
                    </h3>
                    <p className="text-base text-[var(--color-neutral-charcoal,#3B2F2F)]/80">
                      {step.description}
                    </p>
                  </CardContent>
                  {/* Decorative floating accent */}
                  <div className="absolute -bottom-6 -right-6 w-20 h-20 bg-pink-100 rounded-full blur-2xl opacity-30 z-0" />
                </Card>
              </div>
            );
          })}
        </div>
        {/* Timeline animations and rolling balls */}
        <style jsx>{`
          @keyframes fade-in {
            from {
              opacity: 0;
              transform: translateY(16px);
            }
            to {
              opacity: 1;
              transform: none;
            }
          }
          .animate-fade-in {
            animation: fade-in 0.8s cubic-bezier(0.4, 0, 0.2, 1) both;
          }
        `}</style>
      </div>
    </section>
  );
}

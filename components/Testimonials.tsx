"use client";
import { Quote, Star } from "lucide-react";
import * as React from "react";

// Example testimonials data (replace or fetch as needed)
const testimonials = [
  {
    name: "Ada Okafor",
    message:
      "Lewa’s Growth Oil transformed my hair! It’s softer, fuller, and so much healthier. I love that it’s all natural.",
    rating: 5,
  },
  {
    name: "Chinwe Eze",
    message:
      "After just a few weeks, I noticed less breakage and more shine. Highly recommend for anyone seeking real results.",
    rating: 5,
  },
  {
    name: "Ngozi Mba",
    message:
      "I’ve tried many oils, but nothing compares to Lewa’s. The scent is lovely and my scalp feels nourished.",
    rating: 5,
  },
  {
    name: "Tolu Adeyemi",
    message:
      "My edges are growing back and my confidence is up! Thank you Lewa’s Growth Oil.",
    rating: 5,
  },
  {
    name: "Ifeoma Nwosu",
    message:
      "Absolutely love the texture and feel. My hair has never been this healthy.",
    rating: 5,
  },
  {
    name: "Bola Adebayo",
    message:
      "The best hair oil I’ve ever used. 100% recommend to anyone looking for real results.",
    rating: 5,
  },
];

// Helper to get initials from name
function getInitials(name: string) {
  const parts = name.trim().split(" ");
  if (parts.length === 1) return parts[0][0];
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

// Testimonial Card
function TestimonialCard({
  name,
  message,
  rating,
}: {
  name: string;
  message: string;
  rating: number;
}) {
  return (
    <div className="relative flex flex-col bg-[color:var(--color-neutral-white)] rounded-2xl shadow-md min-w-[320px] max-w-xs mx-3 px-6 py-5">
      {/* Quote Icon */}
      <Quote
        className="absolute top-4 right-4 w-7 h-7 text-[color:var(--color-primary)] opacity-30"
        aria-hidden="true"
      />
      {/* Avatar + Name + Rating */}
      <div className="flex items-center gap-3 mb-3">
        <div className="w-12 h-12 rounded-full bg-[color:var(--color-primary)] flex items-center justify-center text-[color:var(--color-neutral-white)] font-bold text-xl shadow">
          {getInitials(name)}
        </div>
        <div className="flex flex-col">
          <span className="font-semibold text-[color:var(--color-neutral-charcoal)] text-base">
            {name}
          </span>
          <div className="flex items-center mt-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < rating
                    ? "text-[color:var(--color-primary)]"
                    : "text-[color:var(--color-neutral-charcoal)]/20"
                }`}
                fill={i < rating ? "currentColor" : "none"}
                strokeWidth={1.5}
                aria-hidden="true"
              />
            ))}
          </div>
        </div>
      </div>
      {/* Divider */}
      <div className="border-t border-[color:var(--color-primary)]/10 my-2" />
      {/* Testimonial Text */}
      <p className="text-[color:var(--color-neutral-charcoal)]/80 text-base leading-relaxed mt-2">
        {message}
      </p>
    </div>
  );
}

// Infinite slider row
function InfiniteSliderRow({
  testimonials,
  reverse = false,
  duration = 40,
}: {
  testimonials: typeof testimonials;
  reverse?: boolean;
  duration?: number;
}) {
  // Duplicate testimonials for seamless looping
  const items = [...testimonials, ...testimonials];

  return (
    <div className="overflow-hidden w-full py-2">
      <div
        className="flex gap-2 w-max"
        style={{
          animation: `${reverse ? "slideLeft" : "slideRight"} ${duration}s linear infinite`,
        }}
      >
        {items.map((t, idx) => (
          <TestimonialCard
            key={t.name + idx}
            name={t.name}
            message={t.message}
            rating={t.rating}
          />
        ))}
      </div>
      <style jsx>{`
        @keyframes slideRight {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        @keyframes slideLeft {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0%);
          }
        }
      `}</style>
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <section
      className="w-full py-20 bg-[color:var(--color-secondary-soft-beige)]"
      aria-labelledby="testimonials-heading"
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-10">
          <h2
            id="testimonials-heading"
            className="text-3xl md:text-4xl font-bold text-center mb-10 text-[color:var(--color-primary)]"
          >
            What Our Customers Say
          </h2>
          <p className="text-[color:var(--color-neutral-charcoal)]/80 text-base leading-relaxed mt-2">
            Real stories, real results with Lewa’s Growth Oil
          </p>
        </div>
        {/* Two continuous sliders */}
        <div className="flex flex-col gap-6">
          <InfiniteSliderRow
            testimonials={testimonials}
            reverse={false}
            duration={40}
          />
          <InfiniteSliderRow
            testimonials={testimonials}
            reverse={true}
            duration={44}
          />
        </div>
      </div>
    </section>
  );
}

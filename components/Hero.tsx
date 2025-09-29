"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section
      role="banner"
      className="relative w-full bg-[color:var(--color-secondary-soft-beige)] overflow-hidden"
    >
      {/* Decorative botanical SVGs */}
      <svg
        className="absolute left-0 top-0 w-40 h-40 opacity-10 pointer-events-none"
        viewBox="0 0 200 200"
        fill="none"
        aria-hidden="true"
      >
        <ellipse
          cx="100"
          cy="100"
          rx="100"
          ry="100"
          fill="var(--color-primary)"
        />
      </svg>
      <svg
        className="absolute right-0 bottom-0 w-48 h-48 opacity-10 pointer-events-none"
        viewBox="0 0 200 200"
        fill="none"
        aria-hidden="true"
      >
        <ellipse
          cx="100"
          cy="100"
          rx="100"
          ry="100"
          fill="var(--color-primary)"
        />
      </svg>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-36 flex flex-col md:flex-row items-center">
        {/* Left: Text Content */}
        <div className="w-full md:w-1/2 flex flex-col items-start md:pr-8 mb-10 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[color:var(--color-primary)] mb-4 leading-tight">
            Nurture Your Hair, Naturally
          </h1>
          <p className="text-lg md:text-2xl text-[color:var(--color-neutral-charcoal)] mb-8 font-medium max-w-xl">
            Organic oil for stronger, healthier, and longer hair
          </p>
          <Button
            asChild
            size="lg"
            className="bg-[color:var(--color-primary)] hover:bg-[color:var(--color-primary)]/90 text-[color:var(--color-neutral-white)] rounded-full shadow-lg hover:shadow-xl transition-all duration-200 px-8 py-4 text-lg font-semibold focus-visible:ring-2 focus-visible:ring-[color:var(--color-primary)]"
            style={{ boxShadow: "0 6px 32px 0 rgba(231,84,128,0.10)" }}
          >
            <a
              href="https://wa.me/2348012345678"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Healthy Hair Starts Here"
            >
              Healthy Hair Starts Here
            </a>
          </Button>
          <div className="mt-6">
            <span className="inline-block text-sm md:text-base text-[color:var(--color-neutral-charcoal)]/70 bg-[color:var(--color-neutral-white)]/80 rounded-full px-4 py-2 shadow-sm border border-[color:var(--color-primary)]/10">
              100% Natural &bull; Handmade &bull; Trusted by 80+ customers
            </span>
          </div>
        </div>

        {/* Right: Product Image */}
        <div className="w-full md:w-1/2 flex justify-center items-center relative">
          <div className="relative">
            {/* Floating animation */}
            <div className="animate-float">
              <Image
                src="/images/products/growth-oil.jpg"
                alt="Lewa’s Growth Oil bottle"
                width={340}
                height={420}
                className="rounded-2xl shadow-2xl object-contain bg-[color:var(--color-neutral-white)]"
                priority
              />
            </div>
            {/* Optional: overlay botanical SVG */}
            <svg
              className="absolute -left-8 -bottom-8 w-24 h-24 opacity-20 pointer-events-none"
              viewBox="0 0 100 100"
              fill="none"
              aria-hidden="true"
            >
              <ellipse
                cx="50"
                cy="50"
                rx="50"
                ry="50"
                fill="var(--color-primary)"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}

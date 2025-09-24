import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface AboutSectionProps {
  productImgSrc?: string;
  productImgAlt?: string;
  lifestyleImgSrc?: string;
  lifestyleImgAlt?: string;
  botanicalAccentSrc?: string;
}

const defaultProductImg = "/images/products/bottle.png";
const defaultProductAlt = "Lewa’s Growth Oil bottle";
const defaultLifestyleImg = "/images/lifestyle/woman-hair.jpg";
const defaultLifestyleAlt = "Woman applying Lewa’s Growth Oil";
const defaultBotanicalAccent = "/images/accents/leaf-accent.png";

export default function AboutSection({
  productImgSrc = defaultProductImg,
  productImgAlt = defaultProductAlt,
  lifestyleImgSrc = defaultLifestyleImg,
  lifestyleImgAlt = defaultLifestyleAlt,
  botanicalAccentSrc = defaultBotanicalAccent,
}: AboutSectionProps) {
  return (
    <section
      className="relative w-full bg-[color:var(--color-neutral-white)] rounded-2xl px-4 py-12 md:py-20 my-12 overflow-hidden"
      aria-labelledby="about-lewas-heading"
    >
      {/* Botanical Accent */}
      <div className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0">
        <Image
          src={botanicalAccentSrc}
          alt=""
          width={420}
          height={420}
          className="opacity-10 select-none"
          aria-hidden="true"
        />
      </div>
      <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left: Text Content */}
        <div className="flex flex-col items-start">
          <h2
            id="about-lewas-heading"
            className="text-2xl md:text-4xl font-bold text-[var(--color-primary,#C43A6B)] mb-4"
          >
            About Lewa’s Growth Oil
          </h2>
          <p className="text-base md:text-lg text-[var(--color-neutral-charcoal,#3B2F2F)] mb-6 max-w-xl">
            Introducing Lewa’s Growth Oil, crafted with rich, natural oils to
            stimulate growth, lock in moisture, and strengthen your hair from
            root to tip. Our lightweight blend hydrates deeply while clearing
            dandruff, leaving your scalp clean and refreshed.
          </p>
          <ul className="space-y-3 mb-8">
            <BulletPoint>Promotes healthy hair growth</BulletPoint>
            <BulletPoint>Locks in moisture without heaviness</BulletPoint>
            <BulletPoint>Clears dandruff &amp; scalp impurities</BulletPoint>
            <BulletPoint>All-natural, handmade blend</BulletPoint>
          </ul>
          <Link href="/about" passHref>
            <Button
              className="rounded-xl bg-pink-500 hover:bg-pink-600 cursor-pointer shadow-md px-7 py-3 text-base font-semibold transition-all"
              variant="default"
              size="lg"
            >
              Learn More
            </Button>
          </Link>
        </div>
        {/* Right: Overlapping Images */}
        <div className="relative flex justify-center md:justify-end items-center min-h-[320px]">
          {/* Main Product Image */}
          <div className="relative z-10">
            <Image
              src={productImgSrc}
              alt={productImgAlt}
              width={320}
              height={420}
              className="rounded-2xl shadow-xl object-cover w-[220px] h-[320px] md:w-[280px] md:h-[380px] bg-white"
              priority
            />
          </div>
          {/* Lifestyle Image (overlapping) */}
          <div className="absolute -bottom-6 -right-6 md:-bottom-10 md:-right-10 z-20">
            <Image
              src={lifestyleImgSrc}
              alt={lifestyleImgAlt}
              width={160}
              height={160}
              className="rounded-xl shadow-lg object-cover w-[110px] h-[110px] md:w-[160px] md:h-[160px] border-4 border-white"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function BulletPoint({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-2 text-[var(--color-neutral-charcoal,#3B2F2F)] text-base md:text-lg">
      <span className="mt-1 flex-shrink-0">
        {/* Checkmark Icon */}
        <svg
          width={20}
          height={20}
          fill="none"
          viewBox="0 0 20 20"
          aria-hidden="true"
          className="text-pink-500"
        >
          <circle cx="10" cy="10" r="10" fill="#F9D8E3" />
          <path
            d="M6.5 10.5l2 2 5-5"
            stroke="#C43A6B"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      <span>{children}</span>
    </li>
  );
}

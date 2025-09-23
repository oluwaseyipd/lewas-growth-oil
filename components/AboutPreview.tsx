import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function AboutPreview() {
  return (
    <section
      className="w-full bg-[var(--color-secondary-soft-beige)] rounded-2xl shadow-sm px-4 py-10 md:py-16 my-8 flex flex-col md:flex-row items-center gap-8 md:gap-12"
      aria-labelledby="about-preview-heading"
    >
      <div className="flex-1 flex flex-col items-start">
        <h2
          id="about-preview-heading"
          className="text-2xl md:text-3xl font-bold text-[color:var(--color-primary)] mb-4"
        >
          Our Mission
        </h2>
        <p className="text-base md:text-lg text-[color:var(--color-neutral-charcoal)] mb-6 max-w-xl">
          At Lewa’s Growth Oil, we believe in nurturing natural beauty with
          pure, organic ingredients. Our mission is to empower you to embrace
          healthy, elegant hair through gentle, effective care—rooted in nature,
          backed by trust.
        </p>
        <Link href="/about" passHref>
          <Button
            variant="outline"
            className="rounded-full border-[color:var(--color-primary)] text-[color:var(--color-primary)] hover:bg-[color:var(--color-primary)] hover:text-[color:var(--color-neutral-white)] transition-colors"
          >
            Learn More
          </Button>
        </Link>
      </div>
      <div className="flex-1 flex justify-center md:justify-end w-full">
        <Image
          src="/images/about-preview.jpg"
          alt="Lewa’s Growth Oil product and natural ingredients"
          width={400}
          height={400}
          className="rounded-xl shadow-md object-cover w-full max-w-xs md:max-w-sm"
          priority
        />
      </div>
    </section>
  );
}

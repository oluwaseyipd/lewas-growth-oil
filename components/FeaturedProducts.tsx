import React from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";

// Product type with badge, rating, price, and quick info
type Product = {
  id: string;
  name: string;
  description: string;
  image: string;
  price?: string;
  badge?: string;
  rating?: number;
  quickInfo?: { icon: React.ReactNode; label: string }[];
  whatsappLink?: string;
};

const products: Product[] = [
  {
    id: "1",
    name: "Lewa’s Growth Oil – 100ml",
    description: "Stimulates growth, locks in moisture, and clears dandruff.",
    image: "/images/products/growth-oil.jpg",
    price: "₦6,500",
    badge: "Best Seller",
    rating: 5,
    quickInfo: [
      { icon: <LeafIcon />, label: "Natural" },
      { icon: <DropletIcon />, label: "Hydrating" },
      { icon: <SparkleIcon />, label: "Dandruff-free" },
    ],
    whatsappLink:
      "https://wa.me/2348012345678?text=I'm%20interested%20in%20Lewa's%20Growth%20Oil",
  },
  {
    id: "2",
    name: "Herbal Edge Serum",
    description: "Revitalize thinning edges with herbal extracts and vitamins.",
    image: "/images/products/edge-serum.jpg",
    badge: "100% Natural",
    rating: 4,
    quickInfo: [
      { icon: <LeafIcon />, label: "Herbal" },
      { icon: <SparkleIcon />, label: "Strengthening" },
    ],
    whatsappLink:
      "https://wa.me/2348012345678?text=I'm%20interested%20in%20Herbal%20Edge%20Serum",
  },
  {
    id: "3",
    name: "Moisture Mist",
    description: "Hydrating spray for daily shine and softness.",
    image: "/images/products/moisture-mist.jpg",
    price: "₦4,000",
    rating: 4,
    quickInfo: [
      { icon: <DropletIcon />, label: "Hydrating" },
      { icon: <SparkleIcon />, label: "Softness" },
    ],
    whatsappLink:
      "https://wa.me/2348012345678?text=I'm%20interested%20in%20Moisture%20Mist",
  },
];

export default function FeaturedProducts() {
  return (
    <section
      className="py-16 bg-[color:var(--color-neutral-white)] rounded-2xl"
      aria-labelledby="featured-products-heading"
    >
      <div className="max-w-7xl mx-auto px-4">
        <h2
          id="featured-products-heading"
          className="text-3xl md:text-4xl font-bold text-center mb-3 text-[var(--color-primary,#C43A6B)]"
        >
          Our Featured Products
        </h2>
        <p className="text-center text-base md:text-lg text-[var(--color-neutral-charcoal,#3B2F2F)]/80 mb-10">
          Handmade with love, crafted for healthy, flourishing hair
        </p>
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
}

// Product Card Component
function ProductCard({
  name,
  description,
  image,
  price,
  badge,
  rating,
  quickInfo,
  whatsappLink,
}: Product) {
  return (
    <Card className="flex flex-col rounded-2xl border-0 shadow-lg bg-white hover:shadow-2xl transition-all duration-200 group">
      <div className="relative w-full h-60 rounded-t-2xl overflow-hidden bg-[#FDF6F2] flex items-center justify-center">
        {/* Badge */}
        {badge && (
          <span className="absolute top-3 left-3 z-10 bg-pink-100 text-pink-700 text-xs font-semibold px-3 py-1 rounded-full shadow-sm">
            {badge}
          </span>
        )}
        {/* Product Image */}
        <Image
          src={image}
          alt={name}
          fill
          style={{ objectFit: "contain" }}
          sizes="(max-width: 768px) 100vw, 33vw"
          className="transition-transform duration-200 group-hover:scale-105 rounded-xl shadow-md"
          priority
        />
      </div>
      <CardContent className="flex-1 flex flex-col items-start p-6 pb-3">
        <h3 className="text-lg md:text-xl font-bold mb-1 text-[var(--color-neutral-charcoal,#3B2F2F)]">
          {name}
        </h3>
        <p className="text-base text-[var(--color-neutral-charcoal,#3B2F2F)]/80 mb-2">
          {description}
        </p>
        {/* Quick Info Icons */}
        {quickInfo && (
          <div className="flex gap-3 mt-2 mb-2">
            {quickInfo.map((info, idx) => (
              <span
                key={idx}
                className="flex items-center gap-1 text-xs text-[var(--color-primary,#C43A6B)] bg-pink-50 px-2 py-1 rounded-full"
              >
                {info.icon}
                {info.label}
              </span>
            ))}
          </div>
        )}
        {/* Rating Stars */}
        {typeof rating === "number" && (
          <div className="flex items-center gap-1 mt-1 mb-2">
            {Array.from({ length: 5 }).map((_, i) =>
              i < rating ? (
                <StarFilledIcon key={i} />
              ) : (
                <StarOutlineIcon key={i} />
              ),
            )}
            <span className="ml-1 text-xs text-gray-400">
              {rating.toFixed(1).replace(".0", "")}
            </span>
          </div>
        )}
      </CardContent>
      <CardFooter className="flex flex-col items-stretch gap-2 p-6 pt-0">
        {/* Price or Availability */}
        <div className="mb-2 text-base font-semibold text-[var(--color-primary,#C43A6B)]">
          {price ? (
            <span>{price}</span>
          ) : (
            <span className="text-sm text-gray-500">Available on WhatsApp</span>
          )}
        </div>
        {/* CTA Button */}
        <Button
          asChild
          className="w-full rounded-xl bg-pink-500 hover:bg-pink-600 hover:shadow-pink-200/60 hover:shadow-lg text-white font-semibold text-base py-2 px-4 transition-all duration-150 focus:ring-2 focus:ring-pink-300"
        >
          <a
            href={whatsappLink || "https://wa.me/2348012345678"}
            target="_blank"
            rel="noopener noreferrer"
          >
            Order Now
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
}

// --- Icon Components ---

function LeafIcon() {
  return (
    <svg width={16} height={16} fill="none" viewBox="0 0 16 16">
      <path
        d="M13.5 2.5C9.5 2.5 2.5 5.5 2.5 13.5c8 0 11-7 11-11z"
        stroke="#C43A6B"
        strokeWidth="1.5"
        fill="#F9D8E3"
      />
    </svg>
  );
}
function DropletIcon() {
  return (
    <svg width={16} height={16} fill="none" viewBox="0 0 16 16">
      <path
        d="M8 2.5S4 7 4 10a4 4 0 108 0c0-3-4-7.5-4-7.5z"
        stroke="#C43A6B"
        strokeWidth="1.5"
        fill="#F9D8E3"
      />
    </svg>
  );
}
function SparkleIcon() {
  return (
    <svg width={16} height={16} fill="none" viewBox="0 0 16 16">
      <path
        d="M8 2v3M8 11v3M2 8h3M11 8h3M4.22 4.22l2.12 2.12M9.66 9.66l2.12 2.12M4.22 11.78l2.12-2.12M9.66 6.34l2.12-2.12"
        stroke="#C43A6B"
        strokeWidth="1.2"
      />
    </svg>
  );
}
function StarFilledIcon() {
  return (
    <svg width={16} height={16} fill="#F9D8E3" viewBox="0 0 16 16">
      <polygon
        points="8,2.5 10,6.5 14.5,7 11,10 12,14 8,12 4,14 5,10 1.5,7 6,6.5"
        stroke="#C43A6B"
        strokeWidth="0.7"
      />
    </svg>
  );
}
function StarOutlineIcon() {
  return (
    <svg width={16} height={16} fill="none" viewBox="0 0 16 16">
      <polygon
        points="8,2.5 10,6.5 14.5,7 11,10 12,14 8,12 4,14 5,10 1.5,7 6,6.5"
        stroke="#C43A6B"
        strokeWidth="0.7"
        fill="#fff"
      />
    </svg>
  );
}

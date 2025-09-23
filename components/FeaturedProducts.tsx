import React from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";

type Product = {
  id: string;
  name: string;
  description: string;
  image: string;
};

const products: Product[] = [
  {
    id: "1",
    name: "Lewa’s Growth Oil",
    description:
      "Nourishing blend for stronger, fuller hair. 100% natural oils.",
    image: "/images/products/growth-oil.jpg",
  },
  {
    id: "2",
    name: "Herbal Edge Serum",
    description: "Revitalize thinning edges with herbal extracts and vitamins.",
    image: "/images/products/edge-serum.jpg",
  },
  {
    id: "3",
    name: "Moisture Mist",
    description: "Hydrating spray for daily shine and softness.",
    image: "/images/products/moisture-mist.jpg",
  },
];

export default function FeaturedProducts() {
  return (
    <section
      className="py-16 bg-[color:var(--color-neutral-white)]"
      aria-labelledby="featured-products-heading"
    >
      <div className="container mx-auto px-4">
        <h2
          id="featured-products-heading"
          className="text-3xl md:text-4xl font-bold text-center mb-8 text-[color:var(--color-primary)]"
        >
          Featured Products
        </h2>
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <Card
              key={product.id}
              className="flex flex-col rounded-2xl shadow-lg bg-[color:var(--color-neutral-white)] hover:shadow-xl transition-shadow"
            >
              <div className="relative w-full h-56 rounded-t-2xl overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 768px) 100vw, 33vw"
                  priority
                />
              </div>
              <CardContent className="flex-1 flex flex-col items-start p-6">
                <h3 className="text-xl font-semibold mb-2 text-[color:var(--color-neutral-charcoal)]">
                  {product.name}
                </h3>
                <p className="text-base text-[color:var(--color-neutral-charcoal)]/80 mb-4">
                  {product.description}
                </p>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <Button
                  className="w-full bg-[color:var(--color-primary)] text-[color:var(--color-neutral-white)] hover:bg-[color:var(--color-primary)]/90 rounded-lg font-semibold"
                  asChild
                >
                  <a href="/products">Shop Now</a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

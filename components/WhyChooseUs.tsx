import { Card, CardContent } from "@/components/ui/card";
import { Leaf, Sparkles, ShieldCheck } from "lucide-react";

export default function WhyChooseUs() {
  const features = [
    {
      icon: (
        <Leaf
          className="w-8 h-8 text-[color:var(--color-primary)]"
          aria-hidden="true"
        />
      ),
      title: "Natural Ingredients",
      description:
        "Our oils are crafted from 100% natural, organic ingredients—no harsh chemicals, just pure nourishment for your hair.",
    },
    {
      icon: (
        <Sparkles
          className="w-8 h-8 text-[color:var(--color-primary)]"
          aria-hidden="true"
        />
      ),
      title: "Proven Effectiveness",
      description:
        "Experience visible results. Our unique formula is designed to promote healthy hair growth and restore shine.",
    },
    {
      icon: (
        <ShieldCheck
          className="w-8 h-8 text-[color:var(--color-primary)]"
          aria-hidden="true"
        />
      ),
      title: "Trusted by Many",
      description:
        "Loved by our community. We’re committed to transparency, quality, and customer satisfaction.",
    },
  ];

  return (
    <section
      className="py-16 bg-[var(--color-secondary-soft-beige)]"
      aria-labelledby="why-choose-us-heading"
    >
      <div className="max-w-5xl mx-auto px-4">
        <h2
          id="why-choose-us-heading"
          className="text-3xl md:text-4xl font-bold text-center mb-10 text-[color:var(--color-primary)]"
        >
          Why Choose Lewa’s Growth Oil?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, idx) => (
            <Card
              key={feature.title}
              className="rounded-2xl shadow-md bg-[color:var(--color-neutral-white)] border-0 hover:shadow-lg transition-shadow duration-200"
            >
              <CardContent className="flex flex-col items-center text-center py-8 px-6">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-[color:var(--color-neutral-charcoal)]">
                  {feature.title}
                </h3>
                <p className="text-[color:var(--color-neutral-charcoal)] text-base opacity-80">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

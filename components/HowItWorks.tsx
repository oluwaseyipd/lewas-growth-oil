import { Card, CardContent } from "@/components/ui/card";
import { Sparkles, Leaf, Droplets, CheckCircle2 } from "lucide-react";

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
      className="py-16 bg-[color:var(--color-neutral-white)]"
      aria-labelledby="how-it-works-title"
    >
      <div className="max-w-5xl mx-auto px-4">
        <h2
          id="how-it-works-title"
          className="text-3xl md:text-4xl font-bold text-center mb-10 text-[color:var(--color-primary)]"
        >
          How It Works
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {steps.map((step, idx) => (
            <Card
              key={step.title}
              className="flex flex-col items-center text-center rounded-2xl shadow-md bg-[color:var(--color-neutral-white)]/90 border-0 hover:shadow-lg transition-shadow"
            >
              <CardContent className="flex flex-col items-center py-8">
                <div className="mb-4">{step.icon}</div>
                <h3 className="font-semibold text-lg mb-2 text-[color:var(--color-neutral-charcoal)]">
                  {`${idx + 1}. ${step.title}`}
                </h3>
                <p className="text-sm text-[color:var(--color-neutral-charcoal)]/80">
                  {step.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

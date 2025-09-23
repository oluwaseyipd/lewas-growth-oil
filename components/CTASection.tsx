import { Button } from "@/components/ui/button";

export default function CTASection() {
  return (
    <section
      className="w-full py-16 px-4 flex flex-col items-center justify-center bg-[var(--color-primary)]"
      aria-label="Call to Action"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-center text-[var(--color-neutral-white)] mb-4">
        Ready for stronger, healthier, dandruff-free hair?
      </h2>
      <p className="text-lg md:text-xl text-center text-[var(--color-neutral-white)] mb-8 max-w-xl">
        Connect with us on WhatsApp to order your bottle of Lewa’s Growth Oil
        today and experience the nourishment and growth your hair deserves.
      </p>
      <Button
        asChild
        size="lg"
        className="rounded-full px-8 py-4 text-lg font-semibold bg-[var(--color-neutral-white)] text-[var(--color-primary)] hover:bg-[var(--color-neutral-white)]/90 shadow-lg transition"
      >
        <a href="/products">Shop Products</a>
      </Button>
    </section>
  );
}

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import FeaturedProducts from "@/components/FeaturedProducts";
import WhyChooseUs from "@/components/WhyChooseUs";
import TestimonialsPreview from "@/components/TestimonialsPreview";
import HowItWorks from "@/components/HowItWorks";
import CTASection from "@/components/CTASection";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      {/* Sticky Floating Navbar */}
      <Navbar />

      <main className="relative flex flex-col items-center w-full bg-[var(--background)]">
        {/* Hero Section */}
        <Hero />

        {/* About Section */}
        <AboutSection />

        {/* Featured Products */}
        <section className="w-full mt-12">
          <FeaturedProducts />
        </section>

        {/* Why Choose Us */}
        <section className="w-full mt-12">
          <WhyChooseUs />
        </section>

        {/* Testimonials Preview */}
        <section className="w-full mt-12">
          <TestimonialsPreview />
        </section>

        {/* How It Works */}
        <section className="w-full mt-12">
          <HowItWorks />
        </section>

        {/* Strong CTA Section */}
        <section className="w-full">
          <CTASection />
        </section>

        <FloatingWhatsApp />
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}

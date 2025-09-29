import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import Navbar from "@/components/Navbar";
import TestimonialBody from "@/components/Testimonial/TestimonialBody";
import Footer from "@/components/Footer";

const testimonials = () => (
  <main className="relative">
    <Navbar />
    <TestimonialBody />
    <FloatingWhatsApp />
    <Footer />
  </main>
);

export default testimonials;

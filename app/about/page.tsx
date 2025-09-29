import Navbar from "@/components/Navbar";
import HeroSection from "@/components/About/HeroSection";
import BrandStory from "@/components/About/BrandStory";
import MissionVision from "@/components/About/MissionVision";
import CoreValues from "@/components/About/CoreValues";
import FounderSection from "@/components/About/FounderSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import CTASection from "@/components/CTASection";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import Footer from "@/components/Footer";

const About = () => (
  <main className="relative">
    <Navbar />
    <HeroSection />
    <BrandStory />
    <MissionVision />
    <CoreValues />
    <FounderSection />
    <WhyChooseUs />
    <CTASection />
    <FloatingWhatsApp />
    <Footer />
  </main>
);

export default About;

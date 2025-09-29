import Navbar from "@/components/Navbar";
import ContactDeliveryInfo from "@/components/Contact/ContactDeliveryInfo";
import FAQTeaser from "@/components/Contact/FAQTeaser";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import Footer from "@/components/Footer";

const contact = () => (
  <main className="relative">
    <Navbar />
    <ContactDeliveryInfo />
    <FAQTeaser />
    <FloatingWhatsApp />
    <Footer />
  </main>
);

export default contact;

"use client";
import { FaWhatsapp } from "react-icons/fa";

export default function Hero() {
  const whatsappLink =
    "https://wa.me/234XXXXXXXXX?text=Hello%20👋%20I%20saw%20your%20website%20and%20I’m%20interested%20in%20buying%20Lewa’s%20Growth%20Oil.%20Can%20you%20share%20details%3F";

  return (
    <>
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-6 z-50"
      >
        <span className="flex items-center justify-center w-14 h-14 rounded-full bg-[color:var(--color-primary)] text-[color:var(--color-neutral-white)] shadow-lg hover:bg-[color:var(--color-primary)]/90 transition-all duration-200">
          <FaWhatsapp className="w-7 h-7" />
        </span>
      </a>

      {/* Floating animation keyframes */}
      <style jsx>{`
        @keyframes float {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-18px);
          }
          100% {
            transform: translateY(0px);
          }
        }
        .animate-float {
          animation: float 3.5s ease-in-out infinite;
        }
      `}</style>
    </>
  );
}

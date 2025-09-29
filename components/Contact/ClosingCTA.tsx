
import React from 'react';
import { Button } from '@/components/ui/button';

const ClosingCTA: React.FC = () => {
  const whatsappLink = "https://wa.me/234XXXXXXXXX?text=Hello%20👋%20I%20saw%20your%20website%20and%20I’m%20interested%20in%20buying%20Lewa’s%20Growth%20Oil.%20Can%20you%20share%20details%3F";

  return (
    <section className="py-20 bg-[#FAD4E0] text-center">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-gray-800 mb-6 animate-fade-in-up">We’d love to hear from you!</h2>
        <p className="text-xl text-gray-700 mb-10 animate-fade-in-up delay-100">
          Reach out today and let’s start your hair growth journey.
        </p>
        <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
          <Button
            className="bg-pink-500 text-white text-lg px-10 py-5 rounded-full shadow-lg hover:bg-pink-600 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl"
          >
            Order Now
          </Button>
        </a>
      </div>
    </section>
  );
};

export default ClosingCTA;

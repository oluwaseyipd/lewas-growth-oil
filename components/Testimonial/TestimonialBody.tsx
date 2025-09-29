"use client";
import React from "react";
import { Quote, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Testimonial {
  id: number;
  name: string;
  rating: number;
  message: string;
  location: string;
  verified: boolean;
}

const TestimonialBody: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Adunni Olatunji",
      rating: 5,
      message:
        "I've been using Lewa's Growth Oil for 3 months now, and the results are incredible! My hair has grown 4 inches and feels so much stronger. The texture is perfect - not too heavy, absorbs well.",
      location: "Lagos",
      verified: true,
    },
    {
      id: 2,
      name: "Blessing Ikechukwu",
      rating: 5,
      message:
        "This oil saved my hair! After years of chemical damage, I thought my hair would never recover. Lewa's Growth Oil brought life back to my strands. Highly recommend!",
      location: "Abuja",
      verified: true,
    },
    {
      id: 3,
      name: "Fatima Abdullahi",
      rating: 4,
      message:
        "Great product! I noticed less breakage within 2 weeks. My edges are finally growing back after years of tight braids. The only reason it's not 5 stars is the price, but worth it.",
      location: "Kano",
      verified: true,
    },
    {
      id: 4,
      name: "Chioma Nwachukwu",
      rating: 5,
      message:
        "I was skeptical at first, but wow! My hair stylist asked what I was using because my hair looked so healthy. The growth is noticeable and my hair feels like silk.",
      location: "Port Harcourt",
      verified: true,
    },
    {
      id: 5,
      name: "Aisha Mohammed",
      rating: 5,
      message:
        "Best hair oil I've ever used! My natural 4c hair loves this product. It keeps my hair moisturized all day without being greasy. My hair has never been this long!",
      location: "Kaduna",
      verified: true,
    },
    {
      id: 6,
      name: "Temitope Adebayo",
      rating: 4,
      message:
        "Solid product! I've been using it for 6 weeks and can see new growth. My hair feels healthier and more manageable. Delivery was fast too. Will definitely reorder.",
      location: "Ibadan",
      verified: true,
    },
    {
      id: 7,
      name: "Grace Okafor",
      rating: 5,
      message:
        "This oil is amazing! I use it twice a week and my hair grows so fast now. Friends keep asking about my hair care routine. Lewa's Growth Oil is my secret weapon!",
      location: "Enugu",
      verified: true,
    },
    {
      id: 8,
      name: "Zainab Yusuf",
      rating: 5,
      message:
        "I love how lightweight this oil is. It doesn't weigh my fine hair down but gives incredible moisture and shine. My hair has grown 3 inches in 2 months!",
      location: "Jos",
      verified: true,
    },
    {
      id: 9,
      name: "Folake Adesanya",
      rating: 4,
      message:
        "Good quality oil that actually works! My hair was damaged from relaxers, but this oil helped restore it. Takes patience but the results speak for themselves.",
      location: "Abeokuta",
      verified: true,
    },
    {
      id: 10,
      name: "Amina Bello",
      rating: 5,
      message:
        "Absolutely love this product! My daughter and I both use it. Our hair has never been healthier or longer. The ingredients are natural and you can feel the quality.",
      location: "Sokoto",
      verified: true,
    },
    {
      id: 11,
      name: "Onyinye Okoro",
      rating: 5,
      message:
        "This oil transformed my hair journey! I was dealing with severe breakage and thinning edges. After 8 weeks of consistent use, my hair is thick and strong again.",
      location: "Owerri",
      verified: true,
    },
    {
      id: 12,
      name: "Rahmat Ogundimu",
      rating: 4,
      message:
        "Really good product! The scent is pleasant and not overpowering. I notice my hair stays moisturized longer. Growth is gradual but consistent. Happy with my purchase.",
      location: "Ilorin",
      verified: true,
    },
    {
      id: 13,
      name: "Chinelo Eze",
      rating: 5,
      message:
        "I've tried so many hair oils, but none compare to this! My hair grows faster, feels stronger, and has amazing shine. Customer service is excellent too.",
      location: "Onitsha",
      verified: true,
    },
    {
      id: 14,
      name: "Hajiya Maryam",
      rating: 5,
      message:
        "Subhanallah! This oil is a blessing. My hair was thinning after childbirth, but now it's fuller and longer than before. I recommend it to all my friends.",
      location: "Maiduguri",
      verified: true,
    },
    {
      id: 15,
      name: "Tolu Fagbenle",
      rating: 4,
      message:
        "Impressed with the results! My hair texture improved significantly. It's softer, more manageable, and grows consistently. Worth the investment for healthy hair.",
      location: "Akure",
      verified: true,
    },
    {
      id: 16,
      name: "Kemi Oluremi",
      rating: 5,
      message:
        "This oil is pure magic! I use it on my entire family. Even my husband's beard loves it! Our hair health has improved dramatically since we started using it.",
      location: "Osogbo",
      verified: true,
    },
    {
      id: 17,
      name: "Hauwa Ibrahim",
      rating: 5,
      message:
        "Alhamdulillah for this product! My hijab-wearing sisters, this oil works wonders under scarves. No more dry, brittle hair. My length retention is incredible now.",
      location: "Bauchi",
      verified: true,
    },
    {
      id: 18,
      name: "Chiamaka Okonkwo",
      rating: 4,
      message:
        "Great investment for natural hair! I've been natural for 5 years and this is the best oil I've used. Helps with detangling and makes wash days so much easier.",
      location: "Awka",
      verified: true,
    },
  ];

  const getInitials = (name: string): string => {
    return name
      .split(" ")
      .map((part) => part.charAt(0).toUpperCase())
      .join("")
      .slice(0, 2);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white">
      {/* Header */}
      <div className="bg-gradient-to-b from-pink-50 via-orange-50 to-pink-100 text-black py-16">
        <div className="container mx-auto px-4 pt-12 md:pt-36 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Customer Testimonials
          </h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto mb-8">
            Real stories from real customers who transformed their hair with
            Lewa's Growth Oil
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 max-w-7xl">
        {/* Testimonials Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6 mb-12">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="relative flex flex-col bg-white rounded-2xl shadow-md px-6 py-5 hover:shadow-lg transition-shadow duration-300 break-inside-avoid"
            >
              {/* Quote Icon */}
              <Quote
                className="absolute top-4 right-4 w-7 h-7 text-pink-500 opacity-30"
                aria-hidden="true"
              />

              {/* Avatar + Name + Rating */}
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 rounded-full bg-pink-500 flex items-center justify-center text-white font-bold text-xl shadow">
                  {getInitials(testimonial.name)}
                </div>
                <div className="flex flex-col">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-gray-800 text-base">
                      {testimonial.name}
                    </span>
                  </div>
                  <div className="flex items-center mt-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < testimonial.rating
                            ? "text-pink-500"
                            : "text-gray-300"
                        }`}
                        fill={i < testimonial.rating ? "currentColor" : "none"}
                        strokeWidth={1.5}
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Divider */}
              <div className="border-t border-pink-100 my-2" />

              {/* Testimonial Text */}
              <p className="text-gray-700/80 text-base leading-relaxed mt-2">
                {testimonial.message}
              </p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center bg-pink-500 text-white rounded-2xl p-8">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Join Our Happy Customers?
          </h2>
          <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
            Experience the transformation that thousands of customers are raving
            about. Start your hair growth journey with Lewa's Growth Oil today.
          </p>
          <Button
            asChild
            size="lg"
            className="rounded-full px-8 py-4 text-lg font-semibold bg-white text-pink-500 hover:bg-white/90 shadow-lg transition"
          >
            <a href="/products">Shop Products</a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TestimonialBody;

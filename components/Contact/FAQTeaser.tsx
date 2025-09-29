"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQTeaser: React.FC = () => {
  const [openItem, setOpenItem] = useState<number | null>(null);

  const faqItems: FAQItem[] = [
    {
      question: "How long does it take to see results with Lewa's Growth Oil?",
      answer:
        "Most users start noticing improved hair texture and reduced breakage within 2-3 weeks of consistent use. Significant length growth typically becomes visible after 6-8 weeks of regular application.",
    },
    {
      question: "Is Lewa's Growth Oil suitable for all hair types?",
      answer:
        "Yes! Our growth oil is formulated to work effectively on all hair types - straight, wavy, curly, and coily. The lightweight formula absorbs well without leaving residue on fine hair, while providing deep nourishment for thicker textures.",
    },
    {
      question: "How often should I use the growth oil?",
      answer:
        "For best results, apply Lewa's Growth Oil 2-3 times per week to your scalp and hair. You can use it as a pre-shampoo treatment, overnight mask, or leave-in treatment depending on your hair's needs.",
    },
    {
      question:
        "Are there any side effects or allergic reactions to watch for?",
      answer:
        "Our oil is made with natural ingredients and is generally well-tolerated. However, we recommend doing a patch test before first use. If you experience any irritation, discontinue use and consult a dermatologist.",
    },
    {
      question: "Can I use other hair products alongside Lewa's Growth Oil?",
      answer:
        "Absolutely! Lewa's Growth Oil works well with your existing hair care routine. Apply it before styling products for heat protection, or use it after washing as a nourishing treatment. Avoid using it with other oil-based products to prevent buildup.",
    },
  ];

  const toggleItem = (index: number): void => {
    setOpenItem(openItem === index ? null : index);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-pink-50 to-white">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get quick answers to the most common questions about Lewa's Growth
            Oil and how it can transform your hair care routine.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4 mb-12">
          {faqItems.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-xl"
            >
              <button
                onClick={() => toggleItem(index)}
                className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-200"
              >
                <h3 className="text-lg font-semibold text-gray-800 pr-4">
                  {item.question}
                </h3>
                <div className="flex-shrink-0">
                  {openItem === index ? (
                    <ChevronUp className="w-5 h-5 text-pink-600" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400" />
                  )}
                </div>
              </button>

              <div
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  openItem === index
                    ? "max-h-48 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-6 pb-5">
                  <p className="text-gray-600 leading-relaxed">{item.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-3">
            Still Have Questions?
          </h3>
          <p className="text-gray-600 mb-6 max-w-md mx-auto">
            Explore our complete FAQ section for detailed answers to all your
            hair care questions.
          </p>
          <Link href="/faq" passHref>
            <Button className="bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white text-lg px-8 py-4 rounded-full shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl">
              View All FAQs
              <ChevronDown className="w-5 h-5 ml-2 rotate-[-90deg]" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FAQTeaser;

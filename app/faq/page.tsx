"use client";
import React, { useState, useMemo } from "react";
import {
  Search,
  ChevronDown,
  ChevronUp,
  HelpCircle,
  Sparkles,
  Package,
  CreditCard,
  Truck,
  Shield,
  Heart,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import Footer from "@/components/Footer";

interface FAQItem {
  id: number;
  question: string;
  answer: string;
  category: string;
}

interface FAQCategory {
  id: string;
  name: string;
  icon: React.ReactNode;
  color: string;
  count: number;
}

const FAQPage: React.FC = () => {
  const [openItems, setOpenItems] = useState<Set<number>>(new Set());
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchTerm, setSearchTerm] = useState<string>("");

  const faqData: FAQItem[] = [
    // Product Information
    {
      id: 1,
      question: "What ingredients are in Lewa's Growth Oil?",
      answer:
        "Lewa's Growth Oil contains a premium blend of natural ingredients including rosemary oil, castor oil, jojoba oil, argan oil, vitamin E, biotin, and essential botanical extracts. All ingredients are carefully sourced and tested for purity and effectiveness.",
      category: "product",
    },
    {
      id: 2,
      question: "Is Lewa's Growth Oil suitable for all hair types?",
      answer:
        "Yes! Our growth oil is formulated to work effectively on all hair types - straight, wavy, curly, and coily. The lightweight formula absorbs well without leaving residue on fine hair, while providing deep nourishment for thicker textures.",
      category: "product",
    },
    {
      id: 3,
      question: "Is the oil organic and natural?",
      answer:
        "Yes, Lewa's Growth Oil is made with 100% natural ingredients. We use organic oils whenever possible and never include harsh chemicals, sulfates, parabens, or synthetic fragrances that could damage your hair or scalp.",
      category: "product",
    },
    {
      id: 4,
      question: "What makes Lewa's Growth Oil different from other hair oils?",
      answer:
        "Our unique formula combines traditional African hair care wisdom with modern scientific research. We use a proprietary blend ratio that maximizes absorption and effectiveness, plus our oil is cold-pressed to preserve all the beneficial nutrients.",
      category: "product",
    },
    {
      id: 5,
      question: "Does the oil have a strong scent?",
      answer:
        "Lewa's Growth Oil has a mild, pleasant natural scent from the botanical ingredients. It's not overpowering and fades quickly after application, leaving your hair smelling fresh and clean.",
      category: "product",
    },

    // Usage & Application
    {
      id: 6,
      question: "How do I use Lewa's Growth Oil?",
      answer:
        "Apply 3-5 drops to your scalp and massage gently in circular motions. Work the remaining oil through your hair from roots to tips. Can be used on damp or dry hair. For best results, leave on for at least 30 minutes before washing, or use as an overnight treatment.",
      category: "usage",
    },
    {
      id: 7,
      question: "How often should I use the growth oil?",
      answer:
        "For optimal results, use Lewa's Growth Oil 2-3 times per week. You can use it more frequently if your hair is very dry or damaged. Start with twice a week and adjust based on your hair's response.",
      category: "usage",
    },
    {
      id: 8,
      question: "Can I use it on wet or dry hair?",
      answer:
        "Both! The oil works effectively on damp hair after washing (apply to towel-dried hair) or on dry hair as a treatment. On wet hair, it helps seal in moisture. On dry hair, it provides intensive nourishment.",
      category: "usage",
    },
    {
      id: 9,
      question: "Should I wash my hair after applying the oil?",
      answer:
        "This depends on your preference and hair type. You can use it as a pre-shampoo treatment (wash out after 30 minutes to overnight), or as a leave-in treatment on the ends of your hair. For oily hair types, we recommend washing it out.",
      category: "usage",
    },
    {
      id: 10,
      question: "Can I mix it with other hair products?",
      answer:
        "Yes, Lewa's Growth Oil works well with most hair products. Apply the oil first, then your other styling products. Avoid mixing with other oil-based products to prevent buildup. It pairs excellently with our hair masks and leave-in conditioners.",
      category: "usage",
    },

    // Results & Expectations
    {
      id: 11,
      question: "How long does it take to see results?",
      answer:
        "Most users notice improved hair texture, shine, and reduced breakage within 2-3 weeks of consistent use. Visible length growth typically becomes apparent after 6-8 weeks. For significant length growth, allow 3-4 months of regular use.",
      category: "results",
    },
    {
      id: 12,
      question: "Will it help with hair loss or thinning?",
      answer:
        "While Lewa's Growth Oil is designed to promote healthy hair growth and strengthen hair follicles, individual results vary. Many customers report reduced hair fall and improved thickness. For severe hair loss, we recommend consulting a dermatologist alongside using our product.",
      category: "results",
    },
    {
      id: 13,
      question: "Can it help with dandruff or scalp issues?",
      answer:
        "The anti-inflammatory properties of ingredients like rosemary and tea tree oil can help soothe scalp irritation and reduce flakiness. However, if you have severe dandruff or scalp conditions, consult a healthcare professional for proper treatment.",
      category: "results",
    },
    {
      id: 14,
      question: "Will my hair become dependent on the oil?",
      answer:
        "No, your hair won't become dependent on Lewa's Growth Oil. It works by nourishing your hair and scalp with essential nutrients. If you stop using it, your hair will simply return to its natural state without the added benefits.",
      category: "results",
    },

    // Safety & Side Effects
    {
      id: 15,
      question: "Are there any side effects?",
      answer:
        "Lewa's Growth Oil is made with natural ingredients and is generally well-tolerated. Some people may experience mild scalp tingling initially, which is normal. If you experience persistent irritation, redness, or allergic reactions, discontinue use immediately.",
      category: "safety",
    },
    {
      id: 16,
      question: "Can pregnant or breastfeeding women use it?",
      answer:
        "While our oil contains natural ingredients, we recommend consulting your healthcare provider before use during pregnancy or breastfeeding, as some essential oils may not be suitable during these periods.",
      category: "safety",
    },
    {
      id: 17,
      question: "Is it safe for children?",
      answer:
        "Our oil is gentle enough for children over 12 years old. For younger children, please consult a pediatrician first. Always perform a patch test before first use on children's sensitive skin.",
      category: "safety",
    },
    {
      id: 18,
      question: "Should I do a patch test?",
      answer:
        "Yes, we always recommend doing a patch test before first use. Apply a small amount to your inner wrist or behind your ear, wait 24-48 hours, and check for any reactions before applying to your scalp.",
      category: "safety",
    },

    // Ordering & Payment
    {
      id: 19,
      question: "How do I place an order?",
      answer:
        "You can order directly through our website by adding products to your cart and proceeding to checkout. We also accept orders via WhatsApp, Instagram DM, or by calling our customer service line.",
      category: "ordering",
    },
    {
      id: 20,
      question: "What payment methods do you accept?",
      answer:
        "We accept bank transfers, card payments (Visa, Mastercard), mobile money payments (including Paystack), and cash on delivery in select locations. All online payments are secure and encrypted.",
      category: "ordering",
    },
    {
      id: 21,
      question: "Do you offer bulk discounts?",
      answer:
        "Yes! We offer discounts for bulk orders (3 bottles or more) and have special rates for salons and distributors. Contact our sales team for custom pricing on large orders.",
      category: "ordering",
    },
    {
      id: 22,
      question: "Can I modify or cancel my order?",
      answer:
        "Orders can be modified or cancelled within 2 hours of placement. After processing begins, changes may not be possible. Contact customer service immediately if you need to make changes.",
      category: "ordering",
    },

    // Shipping & Delivery
    {
      id: 23,
      question: "Where do you deliver?",
      answer:
        "We deliver nationwide across all 36 states in Nigeria. We also offer international shipping to select countries in West Africa. Check our shipping page for specific locations and rates.",
      category: "shipping",
    },
    {
      id: 24,
      question: "How long does delivery take?",
      answer:
        "Lagos and Abuja: 1-2 business days. Other major cities: 2-3 business days. Remote areas: 3-5 business days. International orders: 7-14 business days. You'll receive tracking information once your order ships.",
      category: "shipping",
    },
    {
      id: 25,
      question: "How much does shipping cost?",
      answer:
        "Shipping within Lagos: ₦1,500. Other states: ₦2,500-₦4,000 depending on location. Free shipping on orders over ₦25,000. International shipping varies by destination.",
      category: "shipping",
    },
    {
      id: 26,
      question: "Do you offer express delivery?",
      answer:
        "Yes! Express delivery is available in Lagos and Abuja for same-day or next-day delivery. Additional charges apply. Select express shipping at checkout or contact us for urgent orders.",
      category: "shipping",
    },

    // Returns & Support
    {
      id: 27,
      question: "What is your return policy?",
      answer:
        "We offer a 30-day satisfaction guarantee. If you're not completely satisfied, return the product (at least 50% remaining) for a full refund. Return shipping costs are covered by us for defective products.",
      category: "support",
    },
    {
      id: 28,
      question: "How do I contact customer support?",
      answer:
        "Reach us via email at hello@lewasgrowth.com, WhatsApp at +234 800 000 0000, or through our social media channels. Our support team responds within 24 hours on business days.",
      category: "support",
    },
    {
      id: 29,
      question: "Do you offer hair care consultations?",
      answer:
        "Yes! We provide free virtual hair consultations to help you create a personalized hair care routine. Book a 15-minute session with our hair care experts through our website or social media.",
      category: "support",
    },
    {
      id: 30,
      question: "How do I know if my product is authentic?",
      answer:
        "All authentic Lewa's Growth Oil bottles have a unique serial number, holographic seal, and QR code for verification. Purchase only from our official website or authorized retailers to ensure authenticity.",
      category: "support",
    },
  ];

  const categories: FAQCategory[] = [
    {
      id: "all",
      name: "All Questions",
      icon: <HelpCircle className="w-5 h-5" />,
      color: "bg-gray-100 text-gray-700",
      count: faqData.length,
    },
    {
      id: "product",
      name: "Product Info",
      icon: <Sparkles className="w-5 h-5" />,
      color: "bg-purple-100 text-purple-700",
      count: faqData.filter((faq) => faq.category === "product").length,
    },
    {
      id: "usage",
      name: "Usage & Application",
      icon: <Heart className="w-5 h-5" />,
      color: "bg-pink-100 text-pink-700",
      count: faqData.filter((faq) => faq.category === "usage").length,
    },
    {
      id: "results",
      name: "Results & Expectations",
      icon: <Sparkles className="w-5 h-5" />,
      color: "bg-green-100 text-green-700",
      count: faqData.filter((faq) => faq.category === "results").length,
    },
    {
      id: "safety",
      name: "Safety",
      icon: <Shield className="w-5 h-5" />,
      color: "bg-blue-100 text-blue-700",
      count: faqData.filter((faq) => faq.category === "safety").length,
    },
    {
      id: "ordering",
      name: "Ordering & Payment",
      icon: <CreditCard className="w-5 h-5" />,
      color: "bg-yellow-100 text-yellow-700",
      count: faqData.filter((faq) => faq.category === "ordering").length,
    },
    {
      id: "shipping",
      name: "Shipping & Delivery",
      icon: <Truck className="w-5 h-5" />,
      color: "bg-indigo-100 text-indigo-700",
      count: faqData.filter((faq) => faq.category === "shipping").length,
    },
    {
      id: "support",
      name: "Returns & Support",
      icon: <Package className="w-5 h-5" />,
      color: "bg-orange-100 text-orange-700",
      count: faqData.filter((faq) => faq.category === "support").length,
    },
  ];

  const filteredFAQs = useMemo(() => {
    let filtered = faqData;

    if (selectedCategory !== "all") {
      filtered = filtered.filter((faq) => faq.category === selectedCategory);
    }

    if (searchTerm) {
      filtered = filtered.filter(
        (faq) =>
          faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
          faq.answer.toLowerCase().includes(searchTerm.toLowerCase()),
      );
    }

    return filtered;
  }, [selectedCategory, searchTerm]);

  const toggleItem = (id: number): void => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(id)) {
      newOpenItems.delete(id);
    } else {
      newOpenItems.add(id);
    }
    setOpenItems(newOpenItems);
  };

  const expandAll = (): void => {
    setOpenItems(new Set(filteredFAQs.map((faq) => faq.id)));
  };

  const collapseAll = (): void => {
    setOpenItems(new Set());
  };

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white">
        {/* Header */}
        <div className="bg-gradient-to-b from-pink-50 via-orange-50 to-pink-100 py-16">
          <div className="container mx-auto px-4 py-12 md:py-36 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Everything you need to know about Lewa's Growth Oil, from
              application tips to shipping information.
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12 max-w-7xl">
          {/* Search and Controls */}
          <div className="mb-8">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-6">
              {/* Search Bar */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search questions..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-full focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none"
                />
              </div>

              {/* Category Filter Dropdown */}
              <div className="relative">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="appearance-none w-full md:w-auto bg-white pl-4 pr-10 py-3 border border-gray-300 rounded-full focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none"
                >
                  {categories.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.name} ({category.count})
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
              </div>
            </div>
          </div>

          {/* Results Count */}
          <div className="mb-6">
            <p className="text-gray-600">
              Showing {filteredFAQs.length} of {faqData.length} questions
              {searchTerm && (
                <span className="ml-2 text-pink-600 font-medium">
                  for "{searchTerm}"
                </span>
              )}
            </p>
          </div>

          {/* FAQ Items */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 items-start">
            {filteredFAQs.length > 0 ? (
              filteredFAQs.map((faq) => (
                <div
                  key={faq.id}
                  className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-lg flex flex-col"
                >
                  <button
                    onClick={() => toggleItem(faq.id)}
                    className="w-full px-6 py-5 text-left flex justify-between items-start hover:bg-gray-50 transition-colors duration-200"
                  >
                    <h3 className="text-lg font-semibold text-gray-800 pr-4">
                      {faq.question}
                    </h3>
                    <div className="flex-shrink-0 pt-1">
                      {openItems.has(faq.id) ? (
                        <ChevronUp className="w-5 h-5 text-pink-600" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-gray-400" />
                      )}
                    </div>
                  </button>

                  <div
                    className={`transition-all duration-300 ease-in-out overflow-hidden flex-grow ${
                      openItems.has(faq.id)
                        ? "max-h-96 opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="px-6 pb-5">
                      <p className="text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-12">
                <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="w-8 h-8 text-gray-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  No results found
                </h3>
                <p className="text-gray-600 mb-4">
                  Try adjusting your search terms or category filter.
                </p>
                <button
                  onClick={() => {
                    setSearchTerm("");
                    setSelectedCategory("all");
                  }}
                  className="px-6 py-2 bg-pink-500 text-white rounded-full hover:bg-pink-600 transition-colors"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>

          {/* Contact Section */}
          <div className="w-full mt-16 text-center bg-[var(--color-primary)] text-white rounded-2xl p-8">
            <h2 className="text-2xl md:text-4xl font-bold mb-4">
              Still Have Questions?
            </h2>
            <p className="text-lg opacity-90 mb-6">
              Our customer support team is here to help you with any additional
              questions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:omolewaglory38@gmail.com"
                target="_blank"
                className="bg-white/20 hover:bg-white/30 text-white px-6 py-3 rounded-full font-medium transition-colors"
              >
                Email Us
              </a>
              <a
                href="https://wa.me/2349021801964"
                target="_blank"
                className="bg-white/20 hover:bg-white/30 text-white px-6 py-3 rounded-full font-medium transition-colors"
              >
                WhatsApp Support
              </a>
            </div>
          </div>
        </div>
      </div>

      <FloatingWhatsApp />
      <Footer />
    </>
  );
};

export default FAQPage;

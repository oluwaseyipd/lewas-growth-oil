"use client";
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  MapPin,
  Truck,
  Mail,
  Phone,
  Clock,
  Shield,
  Instagram,
  Twitter,
  Facebook,
} from "lucide-react";
import { FaTiktok } from "react-icons/fa";

interface ContactMethod {
  icon: React.ReactNode;
  label: string;
  value: string;
  href: string;
  description?: string;
}

interface SocialLink {
  name: string;
  icon: React.ReactNode;
  href: string;
  color: string;
}

const ContactDeliveryInfo: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"delivery" | "contact">(
    "delivery",
  );

  const contactMethods: ContactMethod[] = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email Us",
      value: "omolewaglory38@gmail.com",
      href: "mailto:omolewaglory38@gmail.com",
      description: "We respond within 24 hours",
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: "Call Us",
      value: "+234 902 180 1964",
      href: "tel:+2349021801964",
      description: "Mon-Fri, 9AM-6PM WAT",
    },
  ];

  const socialLinks: SocialLink[] = [
    {
      name: "Instagram",
      icon: <Instagram />,
      href: "https://www.instagram.com/omo_lewa05",
      color: "hover:text-pink-600",
    },
    {
      name: "TikTok",
      icon: <FaTiktok />,
      href: "https://www.tiktok.com/@queen_lewa02",
      color: "hover:text-black",
    },
    {
      name: "Twitter",
      icon: <Twitter />,
      href: "https://x.com/GloryOmolewa",
      color: "hover:text-blue-500",
    },
    {
      name: "Facebook",
      icon: <Facebook />,
      href: "https://www.facebook.com/glory.omolewa.5",
      color: "hover:text-blue-700",
    },
  ];

  const deliveryFeatures = [
    {
      icon: <Truck className="w-8 h-8 text-pink-600" />,
      title: "Nationwide Delivery",
      description: "We deliver to all 36 states in Nigeria",
    },
    {
      icon: <Clock className="w-8 h-8 text-pink-600" />,
      title: "Fast Shipping",
      description: "2-5 business days delivery time",
    },
    {
      icon: <Shield className="w-8 h-8 text-pink-600" />,
      title: "Secure Packaging",
      description: "Your order arrives safe and sound",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-pink-50 via-orange-50 to-pink-100">
      <div className="container mx-auto px-4 py-12 md:py-36 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Get in Touch
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Have questions or ready to order? We’re just a message away.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12 px-4">
          <div className="w-full max-w-sm sm:max-w-md flex flex-row items-center gap-2 rounded-full bg-white p-2 shadow-lg border border-gray-200">
            <button
              onClick={() => setActiveTab("delivery")}
              className={`w-full px-4 sm:px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center justify-center text-sm sm:text-base whitespace-nowrap ${
                activeTab === "delivery"
                  ? "bg-pink-500 text-white shadow-md"
                  : "text-gray-600 hover:text-pink-500"
              }`}
            >
              <Truck className="w-5 h-5 mr-2" />
              Delivery Info
            </button>
            <button
              onClick={() => setActiveTab("contact")}
              className={`w-full px-4 sm:px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center justify-center text-sm sm:text-base whitespace-nowrap ${
                activeTab === "contact"
                  ? "bg-pink-500 text-white shadow-md"
                  : "text-gray-600 hover:text-pink-500"
              }`}
            >
              <Mail className="w-5 h-5 mr-2" />
              Contact Us
            </button>
          </div>
        </div>

        {/* Content Sections */}
        <div className="transition-all duration-500 ease-in-out">
          {activeTab === "delivery" && (
            <div className="grid md:grid-cols-2 gap-8 items-start">
              {/* Delivery Features */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">
                  Why Choose Our Delivery?
                </h3>
                {deliveryFeatures.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-4 bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
                  >
                    <div className="flex-shrink-0">{feature.icon}</div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800 mb-2">
                        {feature.title}
                      </h4>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Location Card */}
              <Card className="bg-white shadow-xl border-0 overflow-hidden">
                <CardHeader className="bg-gradient-to-r from-pink-500 to-orange-400 text-white py-6">
                  <CardTitle className="text-2xl font-semibold flex items-center">
                    <MapPin className="w-6 h-6 mr-3" />
                    Our Location
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-8">
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">
                      Visit Our Store
                    </h4>
                    <p className="text-gray-600 mb-4">
                      123 Growth Avenue, Victoria Island, Lagos, Nigeria
                    </p>
                    <p className="text-sm text-gray-500">
                      Open Monday - Saturday, 9AM - 7PM
                    </p>
                  </div>

                  {/* Map Placeholder */}
                  <div className="aspect-video w-full bg-gradient-to-br from-pink-100 to-orange-100 rounded-lg flex items-center justify-center border-2 border-dashed border-pink-300">
                    <div className="text-center">
                      <MapPin className="w-12 h-12 text-pink-500 mx-auto mb-2" />
                      <p className="text-gray-600 font-medium">
                        Interactive Map
                      </p>
                      <p className="text-sm text-gray-500">
                        Google Maps Integration
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {activeTab === "contact" && (
            <div className="max-w-4xl mx-auto">
              {/* Contact Methods */}
              <div className="grid md:grid-cols-2 gap-6 mb-12">
                {contactMethods.map((method, index) => (
                  <a
                    key={index}
                    href={method.href}
                    className="group bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-l-4 border-pink-500"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 text-pink-500 group-hover:text-pink-600 transition-colors">
                        {method.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-pink-600 transition-colors">
                          {method.label}
                        </h3>
                        <p className="text-lg text-gray-700 mb-1">
                          {method.value}
                        </p>
                        {method.description && (
                          <p className="text-sm text-gray-500">
                            {method.description}
                          </p>
                        )}
                      </div>
                    </div>
                  </a>
                ))}
              </div>

              {/* Social Media */}
              <Card className="bg-white shadow-xl border-0">
                <CardHeader className="text-center py-6">
                  <CardTitle className="text-2xl font-semibold text-gray-800">
                    Follow Us on Social Media
                  </CardTitle>
                  <p className="text-gray-600 mt-2">
                    Stay updated with hair tips, product launches, and customer
                    stories
                  </p>
                </CardHeader>
                <CardContent className="pb-8">
                  <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`group flex flex-col items-center p-3 sm:p-4 rounded-xl bg-gray-50 hover:bg-gray-100 transition-all duration-300 transform hover:scale-110 ${social.color}`}
                      >
                        <span className="text-2xl sm:text-3xl mb-2">
                          {social.icon}
                        </span>
                        <span className="text-xs sm:text-sm font-medium text-gray-700 group-hover:text-current">
                          {social.name}
                        </span>
                      </a>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactDeliveryInfo;

import { FC } from "react";
import { Button } from "./ui/button";
import {
  FaInstagram,
  FaFacebookF,
  FaTwitter,
  FaEnvelope,
  FaTiktok,
} from "react-icons/fa";

const footerLinks = [
  { label: "About", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Contact", href: "/contact" },
  { label: "Faq", href: "/faq" },
];

const socials = [
  {
    icon: <FaInstagram className="w-5 h-5" />,
    href: "https://www.instagram.com/omo_lewa05",
    label: "Instagram",
  },
  {
    icon: <FaFacebookF className="w-5 h-5" />,
    href: "https://www.facebook.com/glory.omolewa.5",
    label: "Facebook",
  },
  {
    icon: <FaTwitter className="w-5 h-5" />,
    href: "https://x.com/GloryOmolewa",
    label: "Twitter",
  },
  {
    icon: <FaTiktok className="w-5 h-5" />,
    href: "https://www.tiktok.com/@queen_lewa02",
    label: "TikTok",
  },
];

export const Footer: FC = () => (
  <footer className="bg-[var(--color-secondary-soft-beige)]">
    <div className="max-w-6xl mx-auto px-4 py-10 flex flex-col md:flex-row md:justify-between gap-8">
      {/* Brand & Contact */}
      <div className="flex-1 flex flex-col gap-3 mt-16">
        <span className="text-3xl font-bold text-[color:var(--color-primary)] tracking-tight">
          Lewa’s Growth Oil
        </span>
        <span className="text-lg text-[color:var(--color-neutral-charcoal)]">
          Nourish, Grow, Glow
        </span>
        <div className="flex items-center gap-2 mt-2">
          <FaEnvelope className="text-[color:var(--color-primary)]" />
          <a
            href="mailto:omolewaglory38@gmail.com"
            className="text-lg text-[color:var(--color-neutral-charcoal)] hover:underline"
          >
            omolewaglory38@gmail.com
          </a>
        </div>
      </div>
      {/* Links */}
      <nav className="flex-1 flex flex-col gap-2 md:items-center mt-16">
        <span className="font-semibold  text-xl text-[color:var(--color-neutral-charcoal)] mb-2">
          Quick Links
        </span>
        <ul className="flex flex-col gap-1">
          {footerLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="text-lg text-[color:var(--color-neutral-charcoal)] hover:text-[color:var(--color-primary)] transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      {/* Socials */}
      <div className="flex-1 flex flex-col gap-2 md:items-end mt-16">
        <span className="font-semibold text-xl text-[color:var(--color-neutral-charcoal)] mb-2">
          Connect with us
        </span>
        <div className="flex gap-3">
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="rounded-full bg-[color:var(--color-primary)] text-[color:var(--color-neutral-white)] p-2 hover:bg-[color:var(--color-neutral-charcoal)] transition-colors"
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>
    </div>
    <div className="text-center text-lg text-[color:var(--color-neutral-charcoal)] py-4 border-t border-[color:var(--color-primary)] bg-[color:var(--color-secondary-soft-beige)]">
      &copy; {new Date().getFullYear()} Lewa’s Growth Oil. All rights reserved.
    </div>
  </footer>
);

export default Footer;

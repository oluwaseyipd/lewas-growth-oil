"use client";
import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Products", href: "/products" },
  { name: "Testimonials", href: "/testimonials" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  React.useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header className={cn("fixed top-4 z-50 flex justify-center w-full")}>
      <nav
        className={cn(
          "bg-white/90 backdrop-blur-md shadow-lg rounded-full mx-2 w-full max-w-5xl flex items-center px-4 py-4",
          "border border-gray-100",
        )}
        aria-label="Main navigation"
      >
        {/* Brand Logo */}
        <div className="flex items-center flex-shrink-0">
          <Link
            href="/"
            className="flex items-center gap-1"
            aria-label="Lewa’s Growth Oil Home"
          >
            <img
              src="https://res.cloudinary.com/ddk9omr4r/image/upload/lewas-growth-oil-logo_l8gsjy.png"
              alt="Lewa’s Growth Oil Logo"
              className="w-10 md:w-16 h-10 md:h-16 object-cover"
            />
            <span className="font-semibold text-xl tracking-tight text-black">
              Lewa’s Growth Oil
            </span>
          </Link>
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden lg:flex flex-1 items-center justify-end gap-2">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                "px-4 py-3 rounded-full font-medium text-sm transition-colors",
                "text-[var(--color-neutral-charcoal)] hover:bg-[var(--color-secondary-soft-beige)] hover:text-[var(--color-primary)]",
              )}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Hamburger/X Menu (Mobile) */}
        <div className="flex lg:hidden flex-1 justify-end">
          <Button
            variant="ghost"
            size="icon"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            onClick={() => setMobileOpen((open) => !open)}
            className="text-[var(--color-primary)]"
          >
            {mobileOpen ? <X size={28} /> : <Menu size={28} />}
          </Button>
        </div>

        {/* Mobile Dropdown */}
        {mobileOpen && (
          <div className="absolute right-4 top-22 w-64 bg-white rounded-xl shadow-2xl p-6 flex flex-col gap-4 animate-dropdown border border-gray-100 z-50">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "px-3 py-2 rounded-lg font-medium text-base transition-colors",
                  "text-[var(--color-neutral-charcoal)] hover:bg-[var(--color-secondary-soft-beige)] hover:text-[var(--color-primary)]",
                )}
                onClick={() => setMobileOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Button
              asChild
              className="mt-4 bg-[var(--color-primary)] text-[var(--color-neutral-white)] hover:bg-[var(--color-primary)]/90 rounded-xl shadow"
              size="sm"
              onClick={() => setMobileOpen(false)}
            >
              <Link href="/products">Shop Now</Link>
            </Button>
            <style jsx>{`
              .animate-dropdown {
                animation: dropdown-fade 0.22s cubic-bezier(0.4, 0, 0.2, 1);
              }
              @keyframes dropdown-fade {
                0% {
                  opacity: 0;
                  transform: translateY(-12px) scale(0.98);
                }
                100% {
                  opacity: 1;
                  transform: translateY(0) scale(1);
                }
              }
            `}</style>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Navbar;

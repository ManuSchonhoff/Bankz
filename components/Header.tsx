"use client";

import { useState, useEffect } from "react";
import BankzLogo from "./icons/BankzLogo";
import MobileMenu from "./MobileMenu";
import { Menu } from "lucide-react";

const navLinks = [
  { label: "Seguridad", href: "#seguridad" },
  { label: "Servicios", href: "#servicios" },
  { label: "Experiencia", href: "#experiencia" },
  { label: "Ubicación", href: "#ubicacion" },
  { label: "FAQ", href: "#faq" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-brand-dark/90 backdrop-blur-md border-b border-brand-light/10"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" aria-label="Bankz inicio">
            <BankzLogo size={32} />
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-brand-light/70 hover:text-brand-light transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <a
              href="#contacto"
              className="hidden md:inline-flex items-center px-5 py-2 text-sm font-semibold border border-brand-light/30 text-brand-light rounded hover:border-brand-accent hover:text-brand-accent transition-all duration-200"
            >
              Coordinar visita
            </a>
            <button
              className="md:hidden text-brand-light p-1"
              onClick={() => setMenuOpen(true)}
              aria-label="Abrir menú"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </header>

      <MobileMenu
        isOpen={menuOpen}
        onClose={() => setMenuOpen(false)}
        links={navLinks}
      />
    </>
  );
}

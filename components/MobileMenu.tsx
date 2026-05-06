"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import BankzLogo from "./icons/BankzLogo";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  links: { label: string; href: string }[];
}

export default function MobileMenu({ isOpen, onClose, links }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="fixed inset-0 z-50 bg-brand-dark/60 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <motion.div
            className="fixed top-0 right-0 bottom-0 z-50 w-72 bg-brand-dark border-l border-brand-light/10 flex flex-col p-8"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center justify-between mb-10">
              <BankzLogo size={28} />
              <button onClick={onClose} aria-label="Cerrar menú" className="text-brand-light/60 hover:text-brand-light">
                <X size={22} />
              </button>
            </div>
            <nav className="flex flex-col gap-6">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={onClose}
                  className="text-lg font-medium text-brand-light/80 hover:text-brand-light transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
            <div className="mt-auto">
              <a
                href="#contacto"
                onClick={onClose}
                className="block text-center px-5 py-3 text-sm font-semibold border border-brand-light/30 text-brand-light rounded hover:border-brand-accent hover:text-brand-accent transition-all"
              >
                Coordinar visita
              </a>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

"use client";

import { motion } from "framer-motion";
import BankzLogo from "./icons/BankzLogo";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-brand-dark">
      <div className="absolute inset-0 bg-grid opacity-60" />
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <svg width="600" height="600" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-5" aria-hidden="true">
          <circle cx="40" cy="40" r="37" stroke="#F9F9F9" strokeWidth="1" />
          <line x1="40" y1="3" x2="40" y2="16" stroke="#F9F9F9" strokeWidth="1" />
          <line x1="77" y1="40" x2="64" y2="40" stroke="#F9F9F9" strokeWidth="1" />
          <line x1="40" y1="77" x2="40" y2="64" stroke="#F9F9F9" strokeWidth="1" />
          <line x1="3" y1="40" x2="16" y2="40" stroke="#F9F9F9" strokeWidth="1" />
          <circle cx="40" cy="40" r="20" stroke="#F9F9F9" strokeWidth="1" />
          <line x1="40" y1="20" x2="40" y2="28" stroke="#8B7355" strokeWidth="0.8" />
          <line x1="60" y1="40" x2="52" y2="40" stroke="#8B7355" strokeWidth="0.8" />
          <line x1="40" y1="60" x2="40" y2="52" stroke="#8B7355" strokeWidth="0.8" />
          <line x1="20" y1="40" x2="28" y2="40" stroke="#8B7355" strokeWidth="0.8" />
          <circle cx="40" cy="40" r="5" fill="#F9F9F9" />
        </svg>
      </div>
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="inline-flex items-center gap-2 mb-8 px-4 py-1.5 border border-brand-accent/40 rounded-full"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-brand-accent" />
          <span className="text-xs font-medium tracking-widest uppercase text-brand-accent">
            Grupo Libertador Bahía S.A.
          </span>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center mb-8"
        >
          <BankzLogo size={64} showText={false} />
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-5xl md:text-7xl font-bold tracking-tight text-brand-light mb-6 leading-[1.05]"
        >
          Custodia privada
          <br />
          <span className="text-brand-light/60">de activos</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="text-lg md:text-xl text-brand-light/60 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Infraestructura de seguridad técnica, confidencialidad absoluta y atención
          personalizada. Bahía Blanca, Argentina.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a href="#contacto" className="px-8 py-3.5 bg-brand-light text-brand-dark text-sm font-bold tracking-wide rounded hover:bg-brand-light/90 transition-colors">
            Coordinar visita
          </a>
          <a href="#servicios" className="px-8 py-3.5 border border-brand-light/30 text-brand-light text-sm font-medium rounded hover:border-brand-light/60 transition-colors">
            Conocer servicios
          </a>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs tracking-widest uppercase text-brand-light/30">Explorar</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-px h-8 bg-gradient-to-b from-brand-light/30 to-transparent"
        />
      </motion.div>
    </section>
  );
}

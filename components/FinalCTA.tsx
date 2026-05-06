"use client";

import { FadeIn } from "./FadeIn";
import BankzLogo from "./icons/BankzLogo";

export default function FinalCTA() {
  return (
    <section id="contacto" className="py-32 bg-brand-dark relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-30" />

      {/* Isotipo decorativo gigante */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/3 pointer-events-none select-none opacity-[0.035]">
        <BankzLogo size={520} showText={false} />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        <FadeIn>
          <span className="text-xs font-medium tracking-widest uppercase text-brand-accent mb-6 block">
            Protección patrimonial
          </span>
          <h2 className="text-4xl md:text-6xl font-bold text-brand-light mb-6 leading-tight">
            Protegé tu patrimonio
            <br />
            <span className="text-brand-light/55">en un entorno privado
            <br />y profesional.</span>
          </h2>
          <p className="text-brand-light/50 text-base md:text-lg mb-10 leading-relaxed max-w-xl mx-auto">
            Solicitá una consulta y conocé las opciones de resguardo disponibles
            para personas y empresas.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="mailto:info@bankz.com.ar"
              className="w-full sm:w-auto px-8 py-4 bg-brand-light text-brand-dark text-sm font-bold tracking-wide rounded hover:bg-brand-light/90 transition-colors"
              aria-label="Solicitar consulta"
            >
              Solicitar consulta
            </a>
            <a
              href="https://wa.me/5492914000000"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 border border-brand-light/25 text-brand-light text-sm font-medium rounded hover:border-brand-accent hover:text-brand-accent transition-all"
              aria-label="Enviar WhatsApp"
            >
              Enviar WhatsApp
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

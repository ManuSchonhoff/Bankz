"use client";

import { FadeIn } from "./FadeIn";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function LocationSection() {
  return (
    <section id="ubicacion" className="py-24 bg-brand-dark relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <FadeIn className="text-center mb-16">
          <span className="text-xs font-medium tracking-widest uppercase text-brand-accent mb-3 block">
            Ubicación
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-brand-light mb-4">
            Bahía Blanca, Argentina
          </h2>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-brand-accent/30 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-accent animate-pulse" />
            <span className="text-xs font-medium tracking-widest uppercase text-brand-accent">
              Próxima apertura
            </span>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Mapa abstracto */}
          <FadeIn direction="left">
            <div className="relative aspect-square max-w-md mx-auto border border-brand-light/10 rounded-lg overflow-hidden bg-brand-light/[0.02]">
              <div className="absolute inset-0 bg-grid" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  <div className="w-5 h-5 rounded-full bg-brand-accent" />
                  <div className="absolute inset-0 rounded-full bg-brand-accent animate-ping opacity-20" />
                  <div
                    className="absolute -inset-4 rounded-full border border-brand-accent/20"
                    style={{ animationDelay: "0.5s" }}
                  />
                </div>
              </div>
              <div className="absolute bottom-6 left-6 right-6 text-center">
                <p className="text-xs text-brand-light/25 tracking-widest uppercase">
                  Bahía Blanca · Buenos Aires · Argentina
                </p>
              </div>
            </div>
          </FadeIn>

          {/* Contacto e info */}
          <FadeIn direction="right" delay={0.15}>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-brand-light mb-2">
                  Grupo Libertador Bahía S.A.
                </h3>
                <p className="text-brand-light/50 text-sm leading-relaxed">
                  Operamos exclusivamente con consultas privadas coordinadas de manera previa.
                  No atendemos sin coordinación. Cada visita es reservada y personalizada.
                </p>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-4 p-4 border border-brand-light/10 rounded-lg">
                  <MapPin size={17} className="text-brand-accent shrink-0" />
                  <div>
                    <p className="text-xs text-brand-light/35 mb-0.5">Ciudad</p>
                    <p className="text-sm font-medium text-brand-light">Bahía Blanca, Buenos Aires</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 border border-brand-light/10 rounded-lg">
                  <Clock size={17} className="text-brand-accent shrink-0" />
                  <div>
                    <p className="text-xs text-brand-light/35 mb-0.5">Atención</p>
                    <p className="text-sm font-medium text-brand-light">Consultas privadas con coordinación previa</p>
                  </div>
                </div>

                <a
                  href="https://wa.me/5492914000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 border border-brand-light/10 rounded-lg hover:border-brand-accent/30 transition-colors group"
                >
                  <Phone size={17} className="text-brand-accent shrink-0" />
                  <div>
                    <p className="text-xs text-brand-light/35 mb-0.5">WhatsApp</p>
                    <p className="text-sm font-medium text-brand-light group-hover:text-brand-accent transition-colors">
                      +54 9 291 400-0000
                    </p>
                  </div>
                </a>

                <a
                  href="mailto:info@bankz.com.ar"
                  className="flex items-center gap-4 p-4 border border-brand-light/10 rounded-lg hover:border-brand-accent/30 transition-colors group"
                >
                  <Mail size={17} className="text-brand-accent shrink-0" />
                  <div>
                    <p className="text-xs text-brand-light/35 mb-0.5">Email</p>
                    <p className="text-sm font-medium text-brand-light group-hover:text-brand-accent transition-colors">
                      info@bankz.com.ar
                    </p>
                  </div>
                </a>
              </div>

              <a
                href="#contacto"
                className="block w-full text-center px-6 py-3.5 bg-brand-light text-brand-dark text-sm font-bold tracking-wide rounded hover:bg-brand-light/90 transition-colors"
                aria-label="Coordinar visita"
              >
                Coordinar visita
              </a>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

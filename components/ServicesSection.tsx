"use client";

import { FadeIn, FadeInStagger, FadeInItem } from "./FadeIn";
import { Gem, FileText, Banknote, Smartphone } from "lucide-react";

const items = [
  "Documentos y escrituras",
  "Joyas y objetos de valor",
  "Divisas y metales preciosos",
  "Respaldos digitales (dispositivos)",
  "Activos personales irremplazables",
  "Colecciones y piezas de arte",
];

const clientTypes = [
  { icon: Gem, title: "Particulares", description: "Personas que buscan resguardar sus activos más valiosos con total privacidad." },
  { icon: FileText, title: "Profesionales", description: "Abogados, escribanos y contadores que custodian documentación sensible." },
  { icon: Banknote, title: "Empresas", description: "Sociedades que requieren custodia corporativa con confidencialidad contractual." },
  { icon: Smartphone, title: "Inversores", description: "Ahorristas que protegen divisas, metales o activos de reserva personal." },
];

export default function ServicesSection() {
  return (
    <section id="servicios" className="py-24 bg-brand-dark/95 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <FadeIn className="text-center mb-16">
          <span className="text-xs font-medium tracking-widest uppercase text-brand-accent mb-3 block">Qué custodiar</span>
          <h2 className="text-3xl md:text-5xl font-bold text-brand-light">Lo que puede guardar en Bankz</h2>
        </FadeIn>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <FadeIn direction="left">
            <ul className="grid grid-cols-1 gap-3">
              {items.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-accent shrink-0" />
                  <span className="text-brand-light/70 text-sm font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </FadeIn>
          <FadeIn direction="right" className="flex items-center">
            <p className="text-brand-light/50 leading-relaxed">
              Bankz no tiene límites sobre el tipo de activo que puede custodiar, siempre
              que no contravenga la legislación vigente. Nuestra premisa es su tranquilidad:
              usted decide qué guardar y cuándo retirarlo, sin justificaciones ni registros de contenido.
            </p>
          </FadeIn>
        </div>
        <FadeIn className="text-center mb-12">
          <h3 className="text-2xl md:text-3xl font-bold text-brand-light">¿Para quién es Bankz?</h3>
        </FadeIn>
        <FadeInStagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" staggerDelay={0.1}>
          {clientTypes.map((type) => (
            <FadeInItem key={type.title}>
              <div className="p-6 border border-brand-light/10 rounded-lg bg-brand-light/[0.02] hover:border-brand-accent/30 transition-all">
                <type.icon size={24} className="text-brand-accent mb-4" />
                <h4 className="text-base font-bold text-brand-light mb-2">{type.title}</h4>
                <p className="text-xs text-brand-light/50 leading-relaxed">{type.description}</p>
              </div>
            </FadeInItem>
          ))}
        </FadeInStagger>
      </div>
    </section>
  );
}

"use client";

import { FadeIn } from "./FadeIn";
import { Check } from "lucide-react";

const checklist = [
  "Nadie sabe qué guarda en su caja",
  "Sin preguntas sobre el contenido",
  "Acceso solo con turno previo, sin colas",
  "Sala privada de apertura",
  "Sin cámaras dentro del área de cajas",
  "Contrato de confidencialidad firmado",
  "Personal mínimo y entrenado",
  "Sin terceros presentes en su acceso",
];

export default function PrivateExperience() {
  return (
    <section className="py-24 bg-brand-dark/95 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <FadeIn direction="left">
            <span className="text-xs font-medium tracking-widest uppercase text-brand-accent mb-4 block">Diferencial Bankz</span>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-light mb-6 leading-tight">
              Privacidad es nuestra<br />primera responsabilidad
            </h2>
            <p className="text-brand-light/60 leading-relaxed mb-6">
              A diferencia de otras soluciones de custodia, Bankz fue diseñada desde el
              principio con la privacidad como valor central, no como característica opcional.
            </p>
            <p className="text-brand-light/40 text-sm leading-relaxed">
              Cada proceso, protocolo y espacio físico fue pensado para garantizar que
              su experiencia sea completamente discreta y reservada.
            </p>
          </FadeIn>
          <FadeIn direction="right" delay={0.15}>
            <div className="grid grid-cols-1 gap-3">
              {checklist.map((item) => (
                <div key={item} className="flex items-center gap-3 p-3 border border-brand-light/8 rounded">
                  <Check size={15} className="text-brand-accent shrink-0" />
                  <span className="text-sm text-brand-light/70 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

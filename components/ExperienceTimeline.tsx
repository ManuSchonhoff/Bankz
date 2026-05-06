"use client";

import { FadeIn } from "./FadeIn";

const steps = [
  { num: "01", title: "Solicitud de turno", description: "Contacte por WhatsApp o email para coordinar una visita inicial sin compromiso." },
  { num: "02", title: "Entrevista privada", description: "Reunión confidencial para conocer sus necesidades y presentarle las opciones disponibles." },
  { num: "03", title: "Firma de contrato", description: "Formalización del servicio con cláusula de confidencialidad incluida." },
  { num: "04", title: "Acceso a su caja", description: "Habilitación biométrica personalizada. Solo usted puede acceder a su espacio." },
  { num: "05", title: "Servicio continuo", description: "Acceso con turno, soporte permanente y renovación flexible según sus plazos." },
];

export default function ExperienceTimeline() {
  return (
    <section id="experiencia" className="py-24 bg-brand-dark">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn className="text-center mb-16">
          <span className="text-xs font-medium tracking-widest uppercase text-brand-accent mb-3 block">Cómo funciona</span>
          <h2 className="text-3xl md:text-5xl font-bold text-brand-light">Su experiencia en Bankz</h2>
        </FadeIn>
        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-8 top-0 bottom-0 w-px bg-brand-light/10 hidden md:block" />
          <div className="flex flex-col gap-10">
            {steps.map((step, i) => (
              <FadeIn key={step.num} delay={i * 0.1}>
                <div className="flex gap-8 items-start">
                  <div className="relative shrink-0">
                    <div className="w-16 h-16 rounded-full border border-brand-light/20 flex items-center justify-center bg-brand-dark z-10 relative">
                      <span className="text-brand-accent text-sm font-bold">{step.num}</span>
                    </div>
                  </div>
                  <div className="pt-3">
                    <h3 className="text-lg font-bold text-brand-light mb-1">{step.title}</h3>
                    <p className="text-sm text-brand-light/55 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { FadeIn, FadeInStagger, FadeInItem } from "./FadeIn";
import { Lock, Camera, Fingerprint, Bell, Layers, Clock, ShieldCheck } from "lucide-react";

const features = [
  { icon: Lock, text: "Bóveda de acero con cerradura multipunto" },
  { icon: Camera, text: "Vigilancia por cámara con grabación continua" },
  { icon: Fingerprint, text: "Control de acceso biométrico" },
  { icon: Bell, text: "Sistema de alarma con respuesta inmediata" },
  { icon: Layers, text: "Paredes y puerta con aislamiento reforzado" },
  { icon: Clock, text: "Monitoreo permanente 24 horas, 7 días" },
  { icon: ShieldCheck, text: "Protocolos sujetos a certificaciones correspondientes" },
];

export default function SecuritySection() {
  return (
    <section id="seguridad" className="py-24 bg-brand-dark">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <FadeIn direction="left">
            <span className="text-xs font-medium tracking-widest uppercase text-brand-accent mb-4 block">
              Infraestructura
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-brand-light mb-6">
              Seguridad en cada
              <br />
              <span className="text-brand-light/50">capa del sistema</span>
            </h2>
            <p className="text-brand-light/60 leading-relaxed mb-8 max-w-md">
              Nuestra infraestructura combina controles físicos, electrónicos y
              procedimientos operativos para garantizar la integridad de sus activos
              en todo momento.
            </p>
            <a href="#contacto" className="inline-flex items-center gap-2 px-6 py-3 border border-brand-light/30 text-brand-light text-sm font-medium rounded hover:border-brand-accent hover:text-brand-accent transition-all">
              Coordinar visita
            </a>
          </FadeIn>
          <FadeInStagger className="grid grid-cols-1 gap-4" staggerDelay={0.08}>
            {features.map((feat) => (
              <FadeInItem key={feat.text}>
                <div className="flex items-center gap-4 p-4 border border-brand-light/10 rounded-lg bg-brand-light/[0.02] hover:border-brand-light/20 transition-colors">
                  <div className="w-9 h-9 flex items-center justify-center shrink-0">
                    <feat.icon size={18} className="text-brand-accent" />
                  </div>
                  <span className="text-sm text-brand-light/80 font-medium">{feat.text}</span>
                </div>
              </FadeInItem>
            ))}
          </FadeInStagger>
        </div>
      </div>
    </section>
  );
}

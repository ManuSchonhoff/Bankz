"use client";

import { motion } from "framer-motion";
import { FadeIn, FadeInStagger, FadeInItem } from "./FadeIn";
import { Shield, Eye, UserCheck } from "lucide-react";

const pillars = [
  {
    icon: Shield,
    title: "Seguridad técnica",
    description:
      "Infraestructura de bóveda con múltiples capas de protección física y electrónica, sujeta a certificaciones correspondientes.",
  },
  {
    icon: Eye,
    title: "Confidencialidad",
    description:
      "Sin registro del contenido de su caja. Nadie fuera de usted conoce lo que custodia. Contrato de confidencialidad incluido.",
  },
  {
    icon: UserCheck,
    title: "Profesionalismo",
    description:
      "Atención personalizada, acceso con turno previo y un equipo dedicado exclusivamente a su tranquilidad.",
  },
];

export default function BrandPillars() {
  return (
    <section className="py-24 bg-brand-dark relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <FadeIn className="text-center mb-16">
          <span className="text-xs font-medium tracking-widest uppercase text-brand-accent mb-3 block">
            Por qué Bankz
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-brand-light">
            Tres pilares que nos definen
          </h2>
        </FadeIn>
        <FadeInStagger className="grid grid-cols-1 md:grid-cols-3 gap-6" staggerDelay={0.15}>
          {pillars.map((pillar) => (
            <FadeInItem key={pillar.title}>
              <motion.div
                whileHover={{ boxShadow: "0 0 40px rgba(139,115,85,0.15)" }}
                className="group p-8 border border-brand-light/10 rounded-lg bg-brand-light/[0.02] hover:border-brand-accent/30 transition-all duration-300"
              >
                <div className="w-12 h-12 flex items-center justify-center border border-brand-light/20 rounded mb-6 group-hover:border-brand-accent/40 transition-colors">
                  <pillar.icon size={22} className="text-brand-light/70 group-hover:text-brand-accent transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-brand-light mb-3">{pillar.title}</h3>
                <p className="text-brand-light/60 leading-relaxed text-sm">{pillar.description}</p>
              </motion.div>
            </FadeInItem>
          ))}
        </FadeInStagger>
      </div>
    </section>
  );
}

"use client";

import { FadeIn, FadeInStagger, FadeInItem } from "./FadeIn";
import { User, Building2, Briefcase, Users } from "lucide-react";

const items = [
  "Documentación importante",
  "Joyas y objetos de valor",
  "Efectivo",
  "Metales preciosos",
  "Contratos y escrituras",
  "Dispositivos o soportes sensibles",
  "Valores empresariales",
];

const clientTypes = [
  {
    icon: User,
    title: "Personas",
    description:
      "Particulares que buscan resguardar activos personales, documentación o valores sensibles en un entorno privado y profesional.",
  },
  {
    icon: Building2,
    title: "Empresas",
    description:
      "Sociedades que requieren custodia corporativa con confidencialidad contractual y protocolos de acceso controlado.",
  },
  {
    icon: Briefcase,
    title: "Profesionales",
    description:
      "Abogados, escribanos, contadores y otros profesionales que custodian documentación, contratos y valores sensibles.",
  },
  {
    icon: Users,
    title: "Patrimonios familiares",
    description:
      "Familias que necesitan un espacio privado y confiable para proteger su legado, valores y documentación generacional.",
  },
];

export default function ServicesSection() {
  return (
    <section id="servicios" className="py-24 bg-brand-dark/95 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <FadeIn className="text-center mb-16">
          <span className="text-xs font-medium tracking-widest uppercase text-brand-accent mb-3 block">
            Servicios
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-brand-light mb-4">
            Soluciones de resguardo
          </h2>
          <p className="text-brand-light/50 max-w-xl mx-auto text-sm leading-relaxed">
            Para personas, familias, profesionales y empresas.
          </p>
        </FadeIn>

        {/* Qué se puede guardar */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20 items-center">
          <FadeIn direction="left">
            <p className="text-xs font-medium tracking-widest uppercase text-brand-accent mb-6">
              Qué puede custodiar
            </p>
            <ul className="grid grid-cols-1 gap-3">
              {items.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-accent shrink-0" />
                  <span className="text-brand-light/70 text-sm font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </FadeIn>
          <FadeIn direction="right">
            <div className="p-8 border border-brand-light/10 rounded-lg bg-brand-light/[0.02]">
              <p className="text-brand-light/60 leading-relaxed text-sm mb-6">
                Bankz no se trata de un depósito común. Es una plataforma de custodia privada
                pensada para quienes entienden el valor de la discreción y el control sobre
                sus activos más importantes.
              </p>
              <p className="text-brand-light/40 leading-relaxed text-sm">
                El resguardo está disponible para todo activo que no contravenga la legislación
                vigente. Usted decide qué guardar y cuándo retirarlo, sin justificaciones
                ni registros de contenido.
              </p>
            </div>
          </FadeIn>
        </div>

        {/* Cards de clientes */}
        <FadeIn className="text-center mb-12">
          <h3 className="text-2xl md:text-3xl font-bold text-brand-light">
            ¿Para quién es Bankz?
          </h3>
        </FadeIn>

        <FadeInStagger
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          staggerDelay={0.1}
        >
          {clientTypes.map((type) => (
            <FadeInItem key={type.title}>
              <div className="h-full p-6 border border-brand-light/10 rounded-lg bg-brand-light/[0.02] hover:border-brand-accent/30 transition-all duration-300">
                <div className="w-10 h-10 flex items-center justify-center border border-brand-light/15 rounded mb-5">
                  <type.icon size={18} className="text-brand-accent" />
                </div>
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

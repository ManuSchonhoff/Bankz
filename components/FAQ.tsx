"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { FadeIn } from "./FadeIn";

const faqs = [
  {
    q: "¿Qué es Bankz?",
    a: "Bankz es una empresa privada de resguardo patrimonial. Ofrecemos cajas de seguridad privadas para personas, familias, profesionales y empresas que requieren un espacio seguro, confidencial y profesional para custodiar sus activos más importantes.",
  },
  {
    q: "¿Es un banco?",
    a: "No. Bankz no es una entidad bancaria ni financiera. Es una empresa privada de resguardo patrimonial que opera de manera independiente al sistema bancario tradicional, ofreciendo infraestructura privada de custodia bajo criterios de seguridad profesional.",
  },
  {
    q: "¿Qué puedo guardar?",
    a: "Puede custodiar documentación importante, joyas y objetos de valor, efectivo, metales preciosos, contratos y escrituras, dispositivos o soportes digitales sensibles, y valores empresariales. Siempre dentro del marco legal vigente.",
  },
  {
    q: "¿Cómo se accede a una caja?",
    a: "El acceso se realiza con turno previo, en sala privada y mediante protocolos de verificación de identidad personalizados. Solo el titular habilitado puede acceder a su espacio. No hay presencia de terceros durante la operación.",
  },
  {
    q: "¿La atención es con turno?",
    a: "Sí. Bankz opera exclusivamente con coordinación previa para garantizar la privacidad de cada visita y la atención personalizada de cada cliente. No atendemos sin turno previo.",
  },
  {
    q: "¿Hay opciones para empresas?",
    a: "Sí. Contamos con soluciones de custodia para empresas y profesionales que requieren resguardo de documentación corporativa, valores o activos sensibles, con confidencialidad contractual incluida.",
  },
  {
    q: "¿Cómo consulto disponibilidad?",
    a: "Puede contactarnos por WhatsApp o email para coordinar una consulta privada sin compromiso. Le presentaremos las opciones disponibles según sus necesidades y el tamaño del activo a custodiar.",
  },
  {
    q: "¿Cuándo abre?",
    a: "Bankz se encuentra en proceso de apertura en Bahía Blanca. Puede registrar su consulta ahora para recibir información prioritaria sobre disponibilidad, condiciones y acceso al servicio desde el primer día.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 bg-brand-dark/95">
      <div className="max-w-3xl mx-auto px-6">
        <FadeIn className="text-center mb-16">
          <span className="text-xs font-medium tracking-widest uppercase text-brand-accent mb-3 block">
            Preguntas frecuentes
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-brand-light">FAQ</h2>
        </FadeIn>

        <div className="space-y-2">
          {faqs.map((faq, i) => (
            <FadeIn key={i} delay={i * 0.04}>
              <div className="border border-brand-light/10 rounded-lg overflow-hidden">
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-center justify-between gap-4 p-5 text-left hover:bg-brand-light/[0.02] transition-colors"
                  aria-expanded={open === i}
                >
                  <span className="text-sm font-medium text-brand-light/90">{faq.q}</span>
                  <span className="shrink-0 text-brand-accent">
                    {open === i ? <Minus size={16} /> : <Plus size={16} />}
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {open === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="px-5 pb-5 text-sm text-brand-light/55 leading-relaxed">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

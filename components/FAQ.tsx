"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { FadeIn } from "./FadeIn";

const faqs = [
  { q: "¿Qué puedo guardar en una caja de seguridad Bankz?", a: "Puede custodiar documentos, joyas, divisas, metales preciosos, dispositivos digitales, y cualquier activo personal de valor, siempre dentro del marco legal vigente." },
  { q: "¿Alguien más puede ver el contenido de mi caja?", a: "No. Bankz no registra ni inspecciona el contenido de las cajas. Solo usted tiene acceso a su caja. Nuestro contrato incluye cláusula de confidencialidad." },
  { q: "¿Cómo accedo a mi caja?", a: "El acceso se realiza con turno previo, en sala privada y mediante control biométrico personalizado. Sin presencia de terceros." },
  { q: "¿En qué horarios puedo acceder?", a: "Los accesos se coordinan con turno previo. Contamos con disponibilidad extendida para adaptarnos a su agenda." },
  { q: "¿Cuánto cuesta el servicio?", a: "Los valores varían según el tamaño de la caja y el plazo contratado. Consulte por WhatsApp o email para recibir una propuesta personalizada." },
  { q: "¿Necesito justificar qué guardo?", a: "No. Bankz no requiere ni registra información sobre el contenido. Su privacidad es nuestra prioridad operativa y contractual." },
  { q: "¿Qué pasa si pierdo mi llave o credencial?", a: "Contamos con un protocolo de recuperación de acceso que verifica su identidad de forma rigurosa antes de cualquier intervención." },
  { q: "¿Qué significa que la infraestructura está 'en proceso de adecuación'?", a: "Estamos finalizando la adaptación de nuestra infraestructura a estándares internacionales de seguridad. El servicio opera bajo protocolos rigurosos mientras completamos ese proceso." },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 bg-brand-dark/95">
      <div className="max-w-3xl mx-auto px-6">
        <FadeIn className="text-center mb-16">
          <span className="text-xs font-medium tracking-widest uppercase text-brand-accent mb-3 block">Preguntas frecuentes</span>
          <h2 className="text-3xl md:text-5xl font-bold text-brand-light">FAQ</h2>
        </FadeIn>
        <div className="space-y-2">
          {faqs.map((faq, i) => (
            <FadeIn key={i} delay={i * 0.04}>
              <div className="border border-brand-light/10 rounded-lg overflow-hidden">
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-center justify-between gap-4 p-5 text-left hover:bg-brand-light/[0.02] transition-colors"
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
                      <p className="px-5 pb-5 text-sm text-brand-light/55 leading-relaxed">{faq.a}</p>
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

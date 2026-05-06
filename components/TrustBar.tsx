"use client";

import { FadeIn } from "./FadeIn";

const claims = [
  "Infraestructura en proceso de adecuación a estándares internacionales",
  "Acceso restringido con control biométrico",
  "Monitoreo permanente 24/7",
  "Confidencialidad garantizada contractualmente",
  "Sin registro de contenido de cajas",
];

export default function TrustBar() {
  return (
    <FadeIn>
      <div className="border-y border-brand-light/10 bg-brand-dark/80">
        <div className="max-w-7xl mx-auto px-6 py-5">
          <div className="flex gap-8 overflow-x-auto scrollbar-none md:justify-center md:overflow-visible md:flex-wrap">
            {claims.map((claim, i) => (
              <div key={i} className="flex items-center gap-2.5 shrink-0">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-accent shrink-0" />
                <span className="text-xs md:text-sm text-brand-light/60 whitespace-nowrap md:whitespace-normal font-medium">
                  {claim}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </FadeIn>
  );
}

"use client";

import BankzLogo from "./icons/BankzLogo";

const navLinks = [
  { label: "Seguridad", href: "#seguridad" },
  { label: "Servicios", href: "#servicios" },
  { label: "Experiencia", href: "#experiencia" },
  { label: "Ubicación", href: "#ubicacion" },
  { label: "FAQ", href: "#faq" },
];

export default function Footer() {
  return (
    <footer className="bg-brand-dark border-t border-brand-light/10">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          <div>
            <BankzLogo size={32} className="mb-4" />
            <p className="text-xs text-brand-light/40 leading-relaxed max-w-xs">
              Custodia privada de activos con seguridad técnica, confidencialidad total y atención personalizada.
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase text-brand-light/30 mb-4">Navegación</p>
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a key={link.href} href={link.href} className="text-sm text-brand-light/50 hover:text-brand-light transition-colors">{link.label}</a>
              ))}
            </nav>
          </div>
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase text-brand-light/30 mb-4">Contacto</p>
            <div className="flex flex-col gap-2">
              <a href="https://wa.me/5492914000000" target="_blank" rel="noopener noreferrer" className="text-sm text-brand-light/50 hover:text-brand-light transition-colors">WhatsApp: +54 9 291 400-0000</a>
              <a href="mailto:info@bankz.com.ar" className="text-sm text-brand-light/50 hover:text-brand-light transition-colors">info@bankz.com.ar</a>
              <p className="text-sm text-brand-light/30">Bahía Blanca, Buenos Aires, Argentina</p>
            </div>
          </div>
        </div>
        <div className="border-t border-brand-light/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs text-brand-light/25">© {new Date().getFullYear()} Grupo Libertador Bahía S.A. Todos los derechos reservados.</p>
          <p className="text-xs text-brand-light/20 text-center md:text-right max-w-sm">Este sitio es de carácter informativo. La prestación del servicio está sujeta a disponibilidad y condiciones contractuales vigentes.</p>
        </div>
      </div>
    </footer>
  );
}

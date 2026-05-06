import type { Metadata } from "next";
import { Alexandria } from "next/font/google";
import "./globals.css";

const alexandria = Alexandria({
  subsets: ["latin"],
  variable: "--font-alexandria",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Bankz | Cajas de Seguridad Privadas en Bahía Blanca",
  description:
    "Bankz ofrece soluciones privadas de resguardo patrimonial para personas y empresas en Bahía Blanca. Seguridad técnica, confidencialidad y atención profesional.",
  keywords: [
    "cajas de seguridad privadas",
    "cajas de seguridad Bahía Blanca",
    "resguardo patrimonial",
    "custodia privada",
    "seguridad patrimonial",
    "Bankz",
  ],
  openGraph: {
    title: "Bankz | Cajas de Seguridad Privadas en Bahía Blanca",
    description:
      "Soluciones privadas de resguardo patrimonial para personas y empresas. Seguridad técnica, confidencialidad y atención profesional.",
    type: "website",
    locale: "es_AR",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={alexandria.variable}>
      <body className="bg-brand-dark text-brand-light font-alexandria antialiased">
        {children}
      </body>
    </html>
  );
}

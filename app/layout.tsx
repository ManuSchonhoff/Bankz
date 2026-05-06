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
  title: "Bankz — Custodia privada de activos | Bahía Blanca",
  description:
    "Bankz ofrece custodia privada de activos con la más alta seguridad técnica, confidencialidad total y atención personalizada. Grupo Libertador Bahía S.A., Bahía Blanca, Argentina.",
  keywords: [
    "custodia privada",
    "caja de seguridad",
    "Bahía Blanca",
    "activos",
    "confidencialidad",
    "seguridad",
    "Bankz",
  ],
  openGraph: {
    title: "Bankz — Custodia privada de activos",
    description:
      "Seguridad técnica, confidencialidad y profesionalismo. Bahía Blanca, Argentina.",
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

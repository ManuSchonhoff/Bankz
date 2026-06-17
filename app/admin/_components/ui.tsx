"use client";

import { ReactNode } from "react";

export function Card({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div className={`rounded-2xl border border-white/10 bg-white/[0.03] p-5 ${className}`}>
      {children}
    </div>
  );
}

export function StatCard({
  label,
  value,
  sub,
  accent = false,
}: {
  label: string;
  value: string;
  sub?: string;
  accent?: boolean;
}) {
  return (
    <Card className="flex flex-col gap-1">
      <span className="text-xs uppercase tracking-wider text-white/50">{label}</span>
      <span className={`text-2xl font-semibold ${accent ? "text-brand-accent" : "text-brand-light"}`}>
        {value}
      </span>
      {sub && <span className="text-xs text-white/40">{sub}</span>}
    </Card>
  );
}

export function SectionHeader({ title, description }: { title: string; description?: string }) {
  return (
    <div className="mb-6">
      <h1 className="text-2xl font-semibold text-brand-light">{title}</h1>
      {description && <p className="mt-1 text-sm text-white/50">{description}</p>}
    </div>
  );
}

const badgeColors: Record<string, string> = {
  Activo: "bg-emerald-500/15 text-emerald-400 border-emerald-500/30",
  Inactivo: "bg-white/10 text-white/50 border-white/15",
  Cobrado: "bg-emerald-500/15 text-emerald-400 border-emerald-500/30",
  Pendiente: "bg-amber-500/15 text-amber-400 border-amber-500/30",
  Moroso: "bg-red-500/15 text-red-400 border-red-500/30",
  Ocupada: "bg-brand-accent/20 text-brand-accent border-brand-accent/40",
  Libre: "bg-white/10 text-white/60 border-white/15",
  Reservada: "bg-blue-500/15 text-blue-400 border-blue-500/30",
  Mantenimiento: "bg-red-500/15 text-red-400 border-red-500/30",
  Vigente: "bg-emerald-500/15 text-emerald-400 border-emerald-500/30",
  "Por Vencer": "bg-amber-500/15 text-amber-400 border-amber-500/30",
  Vencido: "bg-red-500/15 text-red-400 border-red-500/30",
  Finalizado: "bg-white/10 text-white/50 border-white/15",
  SuperAdmin: "bg-brand-accent/20 text-brand-accent border-brand-accent/40",
  Admin: "bg-white/10 text-white/60 border-white/15",
};

export function Badge({ children }: { children: string }) {
  const cls = badgeColors[children] || "bg-white/10 text-white/60 border-white/15";
  return (
    <span className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium ${cls}`}>
      {children}
    </span>
  );
}

export function SeverityDot({ severidad }: { severidad: "alta" | "media" | "baja" }) {
  const cls = severidad === "alta" ? "bg-red-500" : severidad === "media" ? "bg-amber-500" : "bg-white/40";
  return <span className={`inline-block h-2 w-2 rounded-full ${cls}`} />;
}

export function fmtMoney(n: number) {
  return n.toLocaleString("es-AR", { style: "currency", currency: "ARS", maximumFractionDigits: 0 });
}

export function fmtDate(d: string) {
  return new Date(d).toLocaleDateString("es-AR");
}

export function daysUntil(d: string) {
  const diff = new Date(d).getTime() - new Date("2026-06-17").getTime();
  return Math.ceil(diff / (1000 * 60 * 60 * 24));
}

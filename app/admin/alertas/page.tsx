"use client";

import { alertas, getCliente } from "../_lib/mock-data";
import { Card, SectionHeader, SeverityDot, fmtDate } from "../_components/ui";

const grupos = [
  { tipo: "Contrato por Vencer" as const, titulo: "Contratos por Vencer" },
  { tipo: "Deudor" as const, titulo: "Deudores" },
  { tipo: "Pago Pendiente" as const, titulo: "Pagos Pendientes" },
];

export default function AlertasPage() {
  return (
    <div>
      <SectionHeader title="Alertas" description="Contratos por vencer, deudores y pagos pendientes." />

      <div className="grid gap-4 lg:grid-cols-3">
        {grupos.map((g) => {
          const items = alertas.filter((a) => a.tipo === g.tipo);
          return (
            <Card key={g.tipo}>
              <div className="mb-3 flex items-center justify-between">
                <h3 className="text-sm font-medium text-white/70">{g.titulo}</h3>
                <span className="rounded-full bg-white/10 px-2 py-0.5 text-xs text-white/50">{items.length}</span>
              </div>
              <ul className="space-y-3">
                {items.map((a) => {
                  const cliente = getCliente(a.clienteId);
                  return (
                    <li key={a.id} className="flex items-start gap-2 rounded-lg border border-white/5 bg-white/[0.02] p-3">
                      <span className="mt-1.5"><SeverityDot severidad={a.severidad} /></span>
                      <div className="min-w-0">
                        <p className="text-sm font-medium text-white/90">{cliente?.nombre}</p>
                        <p className="text-xs text-white/50">{a.detalle}</p>
                        <p className="mt-1 text-[11px] text-white/30">{fmtDate(a.fecha)}</p>
                      </div>
                    </li>
                  );
                })}
                {items.length === 0 && <p className="text-sm text-white/30">Sin alertas en esta categoría.</p>}
              </ul>
            </Card>
          );
        })}
      </div>
    </div>
  );
}

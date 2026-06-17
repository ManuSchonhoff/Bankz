"use client";

import Link from "next/link";
import { clientes, cajas, facturacionHistorica, alertas, getCliente } from "./_lib/mock-data";
import { Card, StatCard, SectionHeader, Badge, SeverityDot, fmtMoney } from "./_components/ui";

export default function DashboardPage() {
  const clientesActivos = clientes.filter((c) => c.estado === "Activo").length;
  const ocupadas = cajas.filter((c) => c.estado === "Ocupada").length;
  const libres = cajas.filter((c) => c.estado === "Libre").length;
  const ocupacionPct = Math.round((ocupadas / cajas.length) * 100);
  const mrr = cajas.filter((c) => c.estado === "Ocupada").reduce((a, c) => a + c.precioMensual, 0);
  const ultimoMes = facturacionHistorica[facturacionHistorica.length - 1];

  return (
    <div>
      <SectionHeader title="Dashboard Principal" description="Resumen general del estado de Bankz." />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard label="Clientes Activos" value={String(clientesActivos)} sub={`${clientes.length} clientes totales`} />
        <StatCard
          label="Cajas Ocupadas / Libres"
          value={`${ocupadas} / ${libres}`}
          sub={`${ocupacionPct}% de ocupación`}
          accent
        />
        <StatCard label="Facturación Mensual Recurrente" value={fmtMoney(mrr)} sub="Basado en cajas ocupadas" />
        <StatCard label="Alertas de Pago" value={String(alertas.length)} sub="Ver detalle en Alertas" />
      </div>

      <div className="mt-6 grid gap-4 lg:grid-cols-3">
        <Card className="lg:col-span-2">
          <h3 className="mb-4 text-sm font-medium text-white/70">Ocupación de Cajas</h3>
          <div className="h-3 w-full overflow-hidden rounded-full bg-white/10">
            <div className="h-full bg-brand-accent" style={{ width: `${ocupacionPct}%` }} />
          </div>
          <div className="mt-3 flex justify-between text-xs text-white/50">
            <span>{ocupadas} ocupadas</span>
            <span>{cajas.length - ocupadas} disponibles / en proceso</span>
          </div>

          <h3 className="mt-6 mb-3 text-sm font-medium text-white/70">Facturación últimos 6 meses</h3>
          <div className="flex items-end gap-3 h-32">
            {facturacionHistorica.map((m) => {
              const max = Math.max(...facturacionHistorica.map((x) => x.facturado));
              const h = Math.round((m.facturado / max) * 100);
              return (
                <div key={m.mes} className="flex flex-1 flex-col items-center gap-1">
                  <div className="flex h-24 w-full items-end">
                    <div className="w-full rounded-t bg-brand-accent/70" style={{ height: `${h}%` }} />
                  </div>
                  <span className="text-xs text-white/40">{m.mes}</span>
                </div>
              );
            })}
          </div>
          <p className="mt-2 text-xs text-white/40">Junio: {fmtMoney(ultimoMes.facturado)} facturado · {fmtMoney(ultimoMes.cobrado)} cobrado</p>
        </Card>

        <Card>
          <div className="mb-3 flex items-center justify-between">
            <h3 className="text-sm font-medium text-white/70">Alertas de Pago</h3>
            <Link href="/admin/alertas" className="text-xs text-brand-accent hover:underline">
              Ver todas
            </Link>
          </div>
          <ul className="space-y-3">
            {alertas.slice(0, 5).map((a) => {
              const cliente = getCliente(a.clienteId);
              return (
                <li key={a.id} className="flex items-start gap-2 text-sm">
                  <span className="mt-1.5">
                    <SeverityDot severidad={a.severidad} />
                  </span>
                  <div className="min-w-0">
                    <p className="truncate text-white/80">{cliente?.nombre}</p>
                    <p className="truncate text-xs text-white/40">{a.detalle}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </Card>
      </div>

      <Card className="mt-4">
        <div className="mb-3 flex items-center justify-between">
          <h3 className="text-sm font-medium text-white/70">Clientes con Morosidad</h3>
          <Link href="/admin/clientes" className="text-xs text-brand-accent hover:underline">
            Ver clientes
          </Link>
        </div>
        <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {clientes
            .filter((c) => c.estadoPago === "Moroso")
            .map((c) => (
              <Link
                key={c.id}
                href={`/admin/clientes/${c.id}`}
                className="flex items-center justify-between rounded-lg border border-white/10 px-3 py-2 hover:bg-white/5"
              >
                <span className="text-sm">{c.nombre}</span>
                <Badge>{c.estadoPago}</Badge>
              </Link>
            ))}
        </div>
      </Card>
    </div>
  );
}

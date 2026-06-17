"use client";

import { useState } from "react";
import { cajas, facturacionHistorica, clientes } from "../_lib/mock-data";
import { Card, StatCard, SectionHeader, fmtMoney } from "../_components/ui";

export default function FacturacionPage() {
  const [modo, setModo] = useState<"historico" | "ocupacion">("historico");
  const [ocupacionManual, setOcupacionManual] = useState(70);

  const ultimoMes = facturacionHistorica[facturacionHistorica.length - 1];
  const ocupadas = cajas.filter((c) => c.estado === "Ocupada").length;
  const ocupacionPct = Math.round((ocupadas / cajas.length) * 100);
  const ticketPromedio = ultimoMes.facturado / clientes.filter((c) => c.estado === "Activo").length;

  const mrrActual = cajas.filter((c) => c.estado === "Ocupada").reduce((a, c) => a + c.precioMensual, 0);
  const promedioHistorico =
    facturacionHistorica.reduce((a, m) => a + m.facturado, 0) / facturacionHistorica.length;
  const crecimientoMensual =
    ((facturacionHistorica[facturacionHistorica.length - 1].facturado - facturacionHistorica[0].facturado) /
      facturacionHistorica[0].facturado) *
    100;

  const proyeccionHistorica = Math.round(promedioHistorico * (1 + crecimientoMensual / 100 / facturacionHistorica.length));
  const ingresoPorCajaPromedio = cajas.reduce((a, c) => a + c.precioMensual, 0) / cajas.length;
  const proyeccionOcupacion = Math.round(cajas.length * (ocupacionManual / 100) * ingresoPorCajaPromedio);

  const max = Math.max(...facturacionHistorica.map((m) => m.facturado));

  return (
    <div>
      <SectionHeader title="Facturación" description="Resumen general, históricos, morosidad y proyecciones." />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard label="Facturación del Mes" value={fmtMoney(ultimoMes.facturado)} />
        <StatCard label="Ingreso Mensual Recurrente" value={fmtMoney(mrrActual)} accent />
        <StatCard label="Tasa de Ocupación / Libre" value={`${ocupacionPct}% / ${100 - ocupacionPct}%`} />
        <StatCard label="Ticket Promedio" value={fmtMoney(ticketPromedio)} />
      </div>

      <Card className="mt-4">
        <h3 className="mb-4 text-sm font-medium text-white/70">Histórico — Facturado / Cobrado / Pendiente</h3>
        <div className="flex items-end gap-4 h-40">
          {facturacionHistorica.map((m) => (
            <div key={m.mes} className="flex flex-1 flex-col items-center gap-1">
              <div className="relative flex h-32 w-full items-end gap-1">
                <div
                  className="w-1/2 rounded-t bg-white/15"
                  style={{ height: `${(m.facturado / max) * 100}%` }}
                  title={`Facturado: ${fmtMoney(m.facturado)}`}
                />
                <div
                  className="w-1/2 rounded-t bg-brand-accent/80"
                  style={{ height: `${(m.cobrado / max) * 100}%` }}
                  title={`Cobrado: ${fmtMoney(m.cobrado)}`}
                />
              </div>
              <span className="text-xs text-white/40">{m.mes}</span>
            </div>
          ))}
        </div>
        <div className="mt-3 flex gap-4 text-xs text-white/50">
          <span className="flex items-center gap-1"><span className="h-2 w-2 rounded-full bg-white/15" /> Facturado</span>
          <span className="flex items-center gap-1"><span className="h-2 w-2 rounded-full bg-brand-accent/80" /> Cobrado</span>
        </div>
      </Card>

      <div className="mt-4 grid gap-4 lg:grid-cols-2">
        <Card>
          <h3 className="mb-4 text-sm font-medium text-white/70">Morosidad del Mes</h3>
          <div className="space-y-3">
            {[
              { label: "Facturado", value: ultimoMes.facturado, color: "bg-white/20" },
              { label: "Cobrado", value: ultimoMes.cobrado, color: "bg-emerald-500/70" },
              { label: "Pendiente / Moroso", value: ultimoMes.pendiente, color: "bg-red-500/70" },
            ].map((r) => (
              <div key={r.label}>
                <div className="mb-1 flex justify-between text-xs text-white/50">
                  <span>{r.label}</span>
                  <span>{fmtMoney(r.value)}</span>
                </div>
                <div className="h-2 w-full overflow-hidden rounded-full bg-white/5">
                  <div className={`h-full ${r.color}`} style={{ width: `${(r.value / ultimoMes.facturado) * 100}%` }} />
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card>
          <h3 className="mb-4 text-sm font-medium text-white/70">Evolución de Clientes</h3>
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-xs text-white/40">
                <th className="pb-2">Mes</th>
                <th className="pb-2">Nuevos</th>
                <th className="pb-2">Bajas</th>
                <th className="pb-2">Neto</th>
              </tr>
            </thead>
            <tbody>
              {facturacionHistorica.map((m) => (
                <tr key={m.mes} className="border-t border-white/5">
                  <td className="py-2">{m.mes}</td>
                  <td className="py-2 text-emerald-400">+{m.nuevosClientes}</td>
                  <td className="py-2 text-red-400">-{m.bajas}</td>
                  <td className="py-2">{m.nuevosClientes - m.bajas >= 0 ? "+" : ""}{m.nuevosClientes - m.bajas}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Card>
      </div>

      <Card className="mt-4">
        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-sm font-medium text-white/70">Proyecciones</h3>
          <div className="flex rounded-lg border border-white/10 p-0.5 text-xs">
            <button
              onClick={() => setModo("historico")}
              className={`rounded-md px-3 py-1.5 ${modo === "historico" ? "bg-brand-accent/20 text-brand-accent" : "text-white/50"}`}
            >
              Basado en Histórico
            </button>
            <button
              onClick={() => setModo("ocupacion")}
              className={`rounded-md px-3 py-1.5 ${modo === "ocupacion" ? "bg-brand-accent/20 text-brand-accent" : "text-white/50"}`}
            >
              Basado en % Ocupación
            </button>
          </div>
        </div>

        {modo === "historico" ? (
          <div>
            <p className="text-3xl font-semibold text-brand-accent">{fmtMoney(proyeccionHistorica)}</p>
            <p className="mt-1 text-xs text-white/40">
              Proyección del próximo mes según tendencia de los últimos {facturacionHistorica.length} meses
              ({crecimientoMensual >= 0 ? "+" : ""}{crecimientoMensual.toFixed(1)}% acumulado).
            </p>
          </div>
        ) : (
          <div>
            <div className="mb-3 flex items-center gap-4">
              <input
                type="range"
                min={0}
                max={100}
                value={ocupacionManual}
                onChange={(e) => setOcupacionManual(Number(e.target.value))}
                className="w-full accent-[#8B7355]"
              />
              <span className="w-14 shrink-0 text-right text-sm text-white/70">{ocupacionManual}%</span>
            </div>
            <p className="text-3xl font-semibold text-brand-accent">{fmtMoney(proyeccionOcupacion)}</p>
            <p className="mt-1 text-xs text-white/40">
              Proyección manual asumiendo {ocupacionManual}% de ocupación sobre {cajas.length} cajas totales.
            </p>
          </div>
        )}
      </Card>
    </div>
  );
}

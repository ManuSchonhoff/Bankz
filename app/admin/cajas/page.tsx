"use client";

import { useMemo, useState } from "react";
import { cajas, getCliente, CategoriaCaja, EstadoCaja } from "../_lib/mock-data";
import { Card, SectionHeader, Badge, fmtMoney, fmtDate, daysUntil } from "../_components/ui";
import { LayoutGrid, List, X } from "lucide-react";

const estadoBorder: Record<EstadoCaja, string> = {
  Ocupada: "border-brand-accent/40 bg-brand-accent/5",
  Libre: "border-white/10 bg-white/[0.02]",
  Reservada: "border-blue-500/30 bg-blue-500/5",
  Mantenimiento: "border-red-500/30 bg-red-500/5",
};

export default function CajasPage() {
  const [vista, setVista] = useState<"grid" | "tabla">("grid");
  const [categoria, setCategoria] = useState<"Todas" | CategoriaCaja>("Todas");
  const [estado, setEstado] = useState<"Todos" | EstadoCaja>("Todos");
  const [seleccion, setSeleccion] = useState<string | null>(null);

  const filtradas = useMemo(() => {
    return cajas.filter(
      (c) => (categoria === "Todas" || c.categoria === categoria) && (estado === "Todos" || c.estado === estado)
    );
  }, [categoria, estado]);

  const cajaSel = cajas.find((c) => c.id === seleccion) || null;
  const clienteSel = cajaSel?.clienteId ? getCliente(cajaSel.clienteId) : null;

  return (
    <div>
      <SectionHeader title="Cajas de Seguridad" description="Listado, categorías, estados y asignación por cliente." />

      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap gap-3">
          <select
            value={categoria}
            onChange={(e) => setCategoria(e.target.value as typeof categoria)}
            className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm focus:border-brand-accent/50 focus:outline-none"
          >
            <option>Todas</option>
            <option>Pequeña</option>
            <option>Mediana</option>
            <option>Grande</option>
            <option>Extra Grande</option>
          </select>
          <select
            value={estado}
            onChange={(e) => setEstado(e.target.value as typeof estado)}
            className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm focus:border-brand-accent/50 focus:outline-none"
          >
            <option>Todos</option>
            <option>Ocupada</option>
            <option>Libre</option>
            <option>Reservada</option>
            <option>Mantenimiento</option>
          </select>
        </div>
        <div className="flex rounded-lg border border-white/10 p-0.5">
          <button
            onClick={() => setVista("grid")}
            className={`rounded-md p-2 ${vista === "grid" ? "bg-brand-accent/20 text-brand-accent" : "text-white/50"}`}
          >
            <LayoutGrid size={16} />
          </button>
          <button
            onClick={() => setVista("tabla")}
            className={`rounded-md p-2 ${vista === "tabla" ? "bg-brand-accent/20 text-brand-accent" : "text-white/50"}`}
          >
            <List size={16} />
          </button>
        </div>
      </div>

      {vista === "grid" ? (
        <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {filtradas.map((c) => {
            const cliente = c.clienteId ? getCliente(c.clienteId) : null;
            const restante = c.fin ? daysUntil(c.fin) : null;
            return (
              <button
                key={c.id}
                onClick={() => setSeleccion(c.id)}
                className={`rounded-xl border p-4 text-left transition-colors hover:border-brand-accent/40 ${estadoBorder[c.estado]}`}
              >
                <div className="mb-2 flex items-center justify-between">
                  <span className="text-sm font-semibold">{c.numero}</span>
                  <Badge>{c.estado}</Badge>
                </div>
                <p className="text-xs text-white/40">{c.categoria}</p>
                {cliente ? (
                  <p className="mt-2 truncate text-sm text-white/80">{cliente.nombre}</p>
                ) : (
                  <p className="mt-2 text-sm text-white/30">Sin asignar</p>
                )}
                {restante !== null && (
                  <p className="mt-1 text-xs text-white/40">
                    {restante >= 0 ? `${restante} días restantes` : "Vencida"}
                  </p>
                )}
              </button>
            );
          })}
        </div>
      ) : (
        <Card className="overflow-x-auto p-0">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-white/10 text-left text-xs text-white/40">
                <th className="px-4 py-3">Caja</th>
                <th className="px-4 py-3">Categoría</th>
                <th className="px-4 py-3">Estado</th>
                <th className="px-4 py-3">Cliente</th>
                <th className="px-4 py-3">Inicio</th>
                <th className="px-4 py-3">Fin</th>
                <th className="px-4 py-3">Precio</th>
              </tr>
            </thead>
            <tbody>
              {filtradas.map((c) => (
                <tr key={c.id} className="border-b border-white/5 hover:bg-white/5">
                  <td className="px-4 py-3 font-medium">{c.numero}</td>
                  <td className="px-4 py-3 text-white/60">{c.categoria}</td>
                  <td className="px-4 py-3"><Badge>{c.estado}</Badge></td>
                  <td className="px-4 py-3 text-white/60">{c.clienteId ? getCliente(c.clienteId)?.nombre : "—"}</td>
                  <td className="px-4 py-3 text-white/60">{c.inicio ? fmtDate(c.inicio) : "—"}</td>
                  <td className="px-4 py-3 text-white/60">{c.fin ? fmtDate(c.fin) : "—"}</td>
                  <td className="px-4 py-3 text-white/60">{fmtMoney(c.precioMensual)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Card>
      )}

      {cajaSel && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4" onClick={() => setSeleccion(null)}>
          <div
            className="w-full max-w-md rounded-2xl border border-white/10 bg-brand-dark p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-lg font-semibold">{cajaSel.numero}</h3>
              <button onClick={() => setSeleccion(null)} className="text-white/50 hover:text-white">
                <X size={18} />
              </button>
            </div>
            <dl className="space-y-2 text-sm">
              <div className="flex justify-between"><dt className="text-white/40">Categoría</dt><dd>{cajaSel.categoria}</dd></div>
              <div className="flex justify-between"><dt className="text-white/40">Estado</dt><dd><Badge>{cajaSel.estado}</Badge></dd></div>
              <div className="flex justify-between"><dt className="text-white/40">Cliente</dt><dd>{clienteSel?.nombre ?? "Sin asignar"}</dd></div>
              {cajaSel.inicio && <div className="flex justify-between"><dt className="text-white/40">Inicio</dt><dd>{fmtDate(cajaSel.inicio)}</dd></div>}
              {cajaSel.fin && <div className="flex justify-between"><dt className="text-white/40">Fin</dt><dd>{fmtDate(cajaSel.fin)}</dd></div>}
              {cajaSel.fin && <div className="flex justify-between"><dt className="text-white/40">Tiempo restante</dt><dd>{daysUntil(cajaSel.fin)} días</dd></div>}
              <div className="flex justify-between"><dt className="text-white/40">Precio mensual</dt><dd>{fmtMoney(cajaSel.precioMensual)}</dd></div>
            </dl>
          </div>
        </div>
      )}
    </div>
  );
}

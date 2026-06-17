"use client";

import { useMemo, useState } from "react";
import { contratos, cajas, getCliente, getCaja } from "../_lib/mock-data";
import { Card, SectionHeader, Badge, fmtMoney, fmtDate } from "../_components/ui";
import { Plus, X, Upload } from "lucide-react";

export default function ContratosPage() {
  const [q, setQ] = useState("");
  const [showForm, setShowForm] = useState(false);

  const filtrados = useMemo(() => {
    return contratos.filter((c) => {
      const cliente = getCliente(c.clienteId);
      return q.trim() === "" || cliente?.nombre.toLowerCase().includes(q.toLowerCase());
    });
  }, [q]);

  const cajasLibres = cajas.filter((c) => c.estado === "Libre");

  return (
    <div>
      <SectionHeader title="Contratos" description="Carga y armado de contratos de alquiler de cajas." />

      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Buscar por cliente..."
          className="w-64 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm placeholder:text-white/30 focus:border-brand-accent/50 focus:outline-none"
        />
        <button
          onClick={() => setShowForm(true)}
          className="flex items-center gap-2 rounded-lg bg-brand-accent px-4 py-2 text-sm font-medium text-brand-dark hover:bg-brand-accent/90"
        >
          <Plus size={16} /> Nuevo Contrato
        </button>
      </div>

      <Card className="overflow-x-auto p-0">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-white/10 text-left text-xs text-white/40">
              <th className="px-4 py-3">Cliente</th>
              <th className="px-4 py-3">Caja</th>
              <th className="px-4 py-3">Inicio</th>
              <th className="px-4 py-3">Fin</th>
              <th className="px-4 py-3">Precio</th>
              <th className="px-4 py-3">Estado</th>
              <th className="px-4 py-3">PDF Firmado</th>
            </tr>
          </thead>
          <tbody>
            {filtrados.map((c) => (
              <tr key={c.id} className="border-b border-white/5 hover:bg-white/5">
                <td className="px-4 py-3 font-medium">{getCliente(c.clienteId)?.nombre}</td>
                <td className="px-4 py-3 text-white/60">{getCaja(c.cajaId)?.numero}</td>
                <td className="px-4 py-3 text-white/60">{fmtDate(c.inicio)}</td>
                <td className="px-4 py-3 text-white/60">{fmtDate(c.fin)}</td>
                <td className="px-4 py-3 text-white/60">{fmtMoney(c.precio)}</td>
                <td className="px-4 py-3"><Badge>{c.estado}</Badge></td>
                <td className="px-4 py-3">
                  {c.pdfFirmado ? (
                    <span className="text-xs text-emerald-400">Sí</span>
                  ) : (
                    <span className="text-xs text-red-400">No</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>

      {showForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4" onClick={() => setShowForm(false)}>
          <div
            className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-white/10 bg-brand-dark p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-5 flex items-center justify-between">
              <h3 className="text-lg font-semibold">Nuevo Contrato</h3>
              <button onClick={() => setShowForm(false)} className="text-white/50 hover:text-white">
                <X size={18} />
              </button>
            </div>

            <form
              className="space-y-5"
              onSubmit={(e) => {
                e.preventDefault();
                setShowForm(false);
              }}
            >
              <fieldset className="space-y-3">
                <legend className="mb-1 text-xs uppercase tracking-wider text-white/40">Datos Cliente</legend>
                <div className="grid gap-3 sm:grid-cols-2">
                  <input placeholder="Nombre y apellido" className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm focus:border-brand-accent/50 focus:outline-none" />
                  <input placeholder="DNI" className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm focus:border-brand-accent/50 focus:outline-none" />
                  <input placeholder="Email" className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm focus:border-brand-accent/50 focus:outline-none" />
                  <input placeholder="Teléfono" className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm focus:border-brand-accent/50 focus:outline-none" />
                </div>
                <label className="flex cursor-pointer items-center justify-center gap-2 rounded-lg border border-dashed border-white/15 px-3 py-4 text-sm text-white/40 hover:border-brand-accent/40">
                  <Upload size={16} /> Foto / Escaneo de DNI
                  <input type="file" className="hidden" />
                </label>
              </fieldset>

              <fieldset className="space-y-3">
                <legend className="mb-1 text-xs uppercase tracking-wider text-white/40">Caja / Servicio</legend>
                <select className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm focus:border-brand-accent/50 focus:outline-none">
                  {cajasLibres.map((c) => (
                    <option key={c.id}>{c.numero} — {c.categoria} ({fmtMoney(c.precioMensual)}/mes)</option>
                  ))}
                </select>
              </fieldset>

              <fieldset className="grid gap-3 sm:grid-cols-2">
                <legend className="sr-only">Vigencia</legend>
                <div>
                  <label className="mb-1 block text-xs text-white/40">Inicio</label>
                  <input type="date" className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm focus:border-brand-accent/50 focus:outline-none" />
                </div>
                <div>
                  <label className="mb-1 block text-xs text-white/40">Fin</label>
                  <input type="date" className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm focus:border-brand-accent/50 focus:outline-none" />
                </div>
                <div>
                  <label className="mb-1 block text-xs text-white/40">Precio mensual</label>
                  <input type="number" placeholder="$ 0" className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm focus:border-brand-accent/50 focus:outline-none" />
                </div>
                <div>
                  <label className="mb-1 block text-xs text-white/40">Estado</label>
                  <select className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm focus:border-brand-accent/50 focus:outline-none">
                    <option>Vigente</option>
                    <option>Por Vencer</option>
                    <option>Vencido</option>
                    <option>Finalizado</option>
                  </select>
                </div>
              </fieldset>

              <fieldset>
                <legend className="mb-1 text-xs uppercase tracking-wider text-white/40">PDF Adjunto Firmado</legend>
                <label className="flex cursor-pointer items-center justify-center gap-2 rounded-lg border border-dashed border-white/15 px-3 py-4 text-sm text-white/40 hover:border-brand-accent/40">
                  <Upload size={16} /> Subir contrato firmado (PDF)
                  <input type="file" accept="application/pdf" className="hidden" />
                </label>
              </fieldset>

              <div className="flex justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="rounded-lg border border-white/10 px-4 py-2 text-sm text-white/60 hover:bg-white/5"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="rounded-lg bg-brand-accent px-4 py-2 text-sm font-medium text-brand-dark hover:bg-brand-accent/90"
                >
                  Guardar Contrato
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { getCliente, getCaja, contratos } from "../../_lib/mock-data";
import { Card, SectionHeader, Badge, fmtMoney, fmtDate } from "../../_components/ui";

export default function ClienteDetailPage() {
  const { id } = useParams<{ id: string }>();
  const cliente = getCliente(id);

  if (!cliente) {
    return <p className="text-white/50">Cliente no encontrado.</p>;
  }

  const caja = cliente.cajaId ? getCaja(cliente.cajaId) : null;
  const contratosCliente = contratos.filter((c) => c.clienteId === cliente.id);

  return (
    <div>
      <Link href="/admin/clientes" className="mb-4 inline-flex items-center gap-1 text-sm text-white/50 hover:text-white">
        <ArrowLeft size={14} /> Volver a Clientes
      </Link>
      <SectionHeader title={cliente.nombre} description={`Cliente desde ${fmtDate(cliente.desde)}`} />

      <div className="grid gap-4 lg:grid-cols-3">
        <Card>
          <h3 className="mb-3 text-sm font-medium text-white/70">Datos del Cliente</h3>
          <dl className="space-y-2 text-sm">
            <div className="flex justify-between"><dt className="text-white/40">DNI</dt><dd>{cliente.dni}</dd></div>
            <div className="flex justify-between"><dt className="text-white/40">Email</dt><dd>{cliente.email}</dd></div>
            <div className="flex justify-between"><dt className="text-white/40">Teléfono</dt><dd>{cliente.telefono}</dd></div>
            <div className="flex justify-between"><dt className="text-white/40">Servicio</dt><dd>{cliente.tipoServicio}</dd></div>
          </dl>
        </Card>

        <Card>
          <h3 className="mb-3 text-sm font-medium text-white/70">Estado</h3>
          <div className="space-y-3">
            <div className="flex justify-between text-sm"><span className="text-white/40">Estado</span><Badge>{cliente.estado}</Badge></div>
            <div className="flex justify-between text-sm"><span className="text-white/40">Pago</span><Badge>{cliente.estadoPago}</Badge></div>
            <div className="flex justify-between text-sm"><span className="text-white/40">Deuda</span><span>{cliente.deuda > 0 ? fmtMoney(cliente.deuda) : "Sin deuda"}</span></div>
          </div>
        </Card>

        <Card>
          <h3 className="mb-3 text-sm font-medium text-white/70">Caja Asignada</h3>
          {caja ? (
            <dl className="space-y-2 text-sm">
              <div className="flex justify-between"><dt className="text-white/40">Número</dt><dd>{caja.numero}</dd></div>
              <div className="flex justify-between"><dt className="text-white/40">Categoría</dt><dd>{caja.categoria}</dd></div>
              <div className="flex justify-between"><dt className="text-white/40">Precio mensual</dt><dd>{fmtMoney(caja.precioMensual)}</dd></div>
            </dl>
          ) : (
            <p className="text-sm text-white/40">Sin caja asignada actualmente.</p>
          )}
        </Card>
      </div>

      <Card className="mt-4 overflow-x-auto p-0">
        <h3 className="px-5 pt-5 pb-3 text-sm font-medium text-white/70">Contratos</h3>
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-white/10 text-left text-xs text-white/40">
              <th className="px-4 py-3">Caja</th>
              <th className="px-4 py-3">Inicio</th>
              <th className="px-4 py-3">Fin</th>
              <th className="px-4 py-3">Precio</th>
              <th className="px-4 py-3">Estado</th>
              <th className="px-4 py-3">PDF Firmado</th>
            </tr>
          </thead>
          <tbody>
            {contratosCliente.map((c) => (
              <tr key={c.id} className="border-b border-white/5">
                <td className="px-4 py-3">{getCaja(c.cajaId)?.numero}</td>
                <td className="px-4 py-3 text-white/60">{fmtDate(c.inicio)}</td>
                <td className="px-4 py-3 text-white/60">{fmtDate(c.fin)}</td>
                <td className="px-4 py-3 text-white/60">{fmtMoney(c.precio)}</td>
                <td className="px-4 py-3"><Badge>{c.estado}</Badge></td>
                <td className="px-4 py-3">{c.pdfFirmado ? <Badge>Activo</Badge> : <Badge>Inactivo</Badge>}</td>
              </tr>
            ))}
            {contratosCliente.length === 0 && (
              <tr><td colSpan={6} className="px-4 py-6 text-center text-white/40">Sin contratos registrados.</td></tr>
            )}
          </tbody>
        </table>
      </Card>
    </div>
  );
}

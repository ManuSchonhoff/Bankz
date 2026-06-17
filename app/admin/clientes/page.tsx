"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { clientes, TipoServicio } from "../_lib/mock-data";
import { Card, SectionHeader, Badge, fmtMoney } from "../_components/ui";

export default function ClientesPage() {
  const [q, setQ] = useState("");
  const [estado, setEstado] = useState<"Todos" | "Activo" | "Inactivo">("Todos");
  const [tipo, setTipo] = useState<"Todos" | TipoServicio>("Todos");

  const filtrados = useMemo(() => {
    return clientes.filter((c) => {
      const matchQ =
        q.trim() === "" ||
        c.nombre.toLowerCase().includes(q.toLowerCase()) ||
        c.dni.includes(q);
      const matchEstado = estado === "Todos" || c.estado === estado;
      const matchTipo = tipo === "Todos" || c.tipoServicio === tipo;
      return matchQ && matchEstado && matchTipo;
    });
  }, [q, estado, tipo]);

  return (
    <div>
      <SectionHeader title="Clientes" description="Datos, estado y servicio de cada cliente." />

      <div className="mb-4 flex flex-wrap gap-3">
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Buscar por nombre o DNI..."
          className="w-64 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm placeholder:text-white/30 focus:border-brand-accent/50 focus:outline-none"
        />
        <select
          value={estado}
          onChange={(e) => setEstado(e.target.value as typeof estado)}
          className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm focus:border-brand-accent/50 focus:outline-none"
        >
          <option>Todos</option>
          <option>Activo</option>
          <option>Inactivo</option>
        </select>
        <select
          value={tipo}
          onChange={(e) => setTipo(e.target.value as typeof tipo)}
          className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm focus:border-brand-accent/50 focus:outline-none"
        >
          <option>Todos</option>
          <option>Caja Pequeña</option>
          <option>Caja Mediana</option>
          <option>Caja Grande</option>
          <option>Caja Extra Grande</option>
        </select>
      </div>

      <Card className="overflow-x-auto p-0">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-white/10 text-left text-xs text-white/40">
              <th className="px-4 py-3">Cliente</th>
              <th className="px-4 py-3">DNI</th>
              <th className="px-4 py-3">Servicio</th>
              <th className="px-4 py-3">Estado</th>
              <th className="px-4 py-3">Pago</th>
              <th className="px-4 py-3">Deuda</th>
            </tr>
          </thead>
          <tbody>
            {filtrados.map((c) => (
              <tr key={c.id} className="border-b border-white/5 hover:bg-white/5">
                <td className="px-4 py-3">
                  <Link href={`/admin/clientes/${c.id}`} className="font-medium text-brand-light hover:text-brand-accent">
                    {c.nombre}
                  </Link>
                </td>
                <td className="px-4 py-3 text-white/60">{c.dni}</td>
                <td className="px-4 py-3 text-white/60">{c.tipoServicio}</td>
                <td className="px-4 py-3"><Badge>{c.estado}</Badge></td>
                <td className="px-4 py-3"><Badge>{c.estadoPago}</Badge></td>
                <td className="px-4 py-3 text-white/60">{c.deuda > 0 ? fmtMoney(c.deuda) : "—"}</td>
              </tr>
            ))}
            {filtrados.length === 0 && (
              <tr>
                <td colSpan={6} className="px-4 py-8 text-center text-white/40">
                  No se encontraron clientes.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </Card>
    </div>
  );
}

"use client";

import { useMemo, useState } from "react";
import { authLog, usuarios } from "../_lib/mock-data";
import { Card, SectionHeader } from "../_components/ui";

export default function AuthLogPage() {
  const [usuario, setUsuario] = useState("Todos");

  const filtrados = useMemo(
    () => authLog.filter((l) => usuario === "Todos" || l.usuario === usuario),
    [usuario]
  );

  return (
    <div>
      <SectionHeader title="Auth Log" description="Registro de toda acción realizada en el sistema." />

      <div className="mb-4">
        <select
          value={usuario}
          onChange={(e) => setUsuario(e.target.value)}
          className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm focus:border-brand-accent/50 focus:outline-none"
        >
          <option>Todos</option>
          {usuarios.map((u) => (
            <option key={u.id}>{u.nombre}</option>
          ))}
        </select>
      </div>

      <Card className="overflow-x-auto p-0">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-white/10 text-left text-xs text-white/40">
              <th className="px-4 py-3">Usuario</th>
              <th className="px-4 py-3">Acción</th>
              <th className="px-4 py-3">Entidad</th>
              <th className="px-4 py-3">Fecha</th>
              <th className="px-4 py-3">IP</th>
            </tr>
          </thead>
          <tbody>
            {filtrados.map((l) => (
              <tr key={l.id} className="border-b border-white/5 hover:bg-white/5">
                <td className="px-4 py-3 font-medium">{l.usuario}</td>
                <td className="px-4 py-3 text-white/60">{l.accion}</td>
                <td className="px-4 py-3 text-white/60">{l.entidad}</td>
                <td className="px-4 py-3 text-white/60">{l.fecha}</td>
                <td className="px-4 py-3 text-white/40">{l.ip}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </div>
  );
}

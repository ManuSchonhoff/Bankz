"use client";

import { useState } from "react";
import { usuarios } from "../_lib/mock-data";
import { Card, SectionHeader, Badge } from "../_components/ui";
import { UserPlus, X } from "lucide-react";

export default function UsuariosPage() {
  const [showInvite, setShowInvite] = useState(false);

  return (
    <div>
      <SectionHeader title="Usuarios" description="SuperAdmin y Admin con acceso al sistema." />

      <div className="mb-4 flex justify-end">
        <button
          onClick={() => setShowInvite(true)}
          className="flex items-center gap-2 rounded-lg bg-brand-accent px-4 py-2 text-sm font-medium text-brand-dark hover:bg-brand-accent/90"
        >
          <UserPlus size={16} /> Invitar Usuario
        </button>
      </div>

      <Card className="overflow-x-auto p-0">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-white/10 text-left text-xs text-white/40">
              <th className="px-4 py-3">Usuario</th>
              <th className="px-4 py-3">Email</th>
              <th className="px-4 py-3">Rol</th>
              <th className="px-4 py-3">Estado</th>
              <th className="px-4 py-3">Último ingreso</th>
            </tr>
          </thead>
          <tbody>
            {usuarios.map((u) => (
              <tr key={u.id} className="border-b border-white/5 hover:bg-white/5">
                <td className="px-4 py-3 font-medium">{u.nombre}</td>
                <td className="px-4 py-3 text-white/60">{u.email}</td>
                <td className="px-4 py-3"><Badge>{u.rol}</Badge></td>
                <td className="px-4 py-3"><Badge>{u.estado}</Badge></td>
                <td className="px-4 py-3 text-white/60">{u.ultimoIngreso}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>

      {showInvite && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4" onClick={() => setShowInvite(false)}>
          <div className="w-full max-w-md rounded-2xl border border-white/10 bg-brand-dark p-6" onClick={(e) => e.stopPropagation()}>
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-lg font-semibold">Invitar Usuario</h3>
              <button onClick={() => setShowInvite(false)} className="text-white/50 hover:text-white">
                <X size={18} />
              </button>
            </div>
            <form
              className="space-y-3"
              onSubmit={(e) => {
                e.preventDefault();
                setShowInvite(false);
              }}
            >
              <input placeholder="Nombre y apellido" className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm focus:border-brand-accent/50 focus:outline-none" />
              <input placeholder="Email" type="email" className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm focus:border-brand-accent/50 focus:outline-none" />
              <select className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm focus:border-brand-accent/50 focus:outline-none">
                <option>Admin</option>
                <option>SuperAdmin</option>
              </select>
              <div className="flex justify-end gap-3 pt-2">
                <button type="button" onClick={() => setShowInvite(false)} className="rounded-lg border border-white/10 px-4 py-2 text-sm text-white/60 hover:bg-white/5">
                  Cancelar
                </button>
                <button type="submit" className="rounded-lg bg-brand-accent px-4 py-2 text-sm font-medium text-brand-dark hover:bg-brand-accent/90">
                  Enviar Invitación
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

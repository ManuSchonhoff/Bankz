"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Receipt,
  Users,
  Lock,
  FileText,
  AlertTriangle,
  UserCog,
  ScrollText,
  Bell,
  Menu,
  X,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import BankzLogo from "@/components/icons/BankzLogo";
import { alertas } from "./_lib/mock-data";

interface NavItem {
  href: string;
  label: string;
  icon: LucideIcon;
}

const navItems: NavItem[] = [
  { href: "/admin", label: "Dashboard", icon: LayoutDashboard },
  { href: "/admin/facturacion", label: "Facturación", icon: Receipt },
  { href: "/admin/clientes", label: "Clientes", icon: Users },
  { href: "/admin/cajas", label: "Cajas de Seguridad", icon: Lock },
  { href: "/admin/contratos", label: "Contratos", icon: FileText },
  { href: "/admin/alertas", label: "Alertas", icon: AlertTriangle },
  { href: "/admin/usuarios", label: "Usuarios", icon: UserCog },
  { href: "/admin/auth-log", label: "Auth Log", icon: ScrollText },
];

const titleMap: Record<string, string> = {
  "/admin": "Dashboard",
  "/admin/facturacion": "Facturación",
  "/admin/clientes": "Clientes",
  "/admin/cajas": "Cajas de Seguridad",
  "/admin/contratos": "Contratos",
  "/admin/alertas": "Alertas",
  "/admin/usuarios": "Usuarios",
  "/admin/auth-log": "Auth Log",
};

function isActive(pathname: string, href: string) {
  if (href === "/admin") return pathname === "/admin";
  return pathname.startsWith(href);
}

function pageTitle(pathname: string) {
  if (titleMap[pathname]) return titleMap[pathname];
  const match = navItems
    .filter((item) => item.href !== "/admin" && pathname.startsWith(item.href))
    .sort((a, b) => b.href.length - a.href.length)[0];
  return match ? match.label : "Admin";
}

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const sidebarContent = (
    <div className="flex h-full flex-col">
      <div className="px-5 py-6">
        <BankzLogo size={32} textClass="text-lg" />
      </div>
      <nav className="flex-1 space-y-1 px-3">
        {navItems.map((item) => {
          const active = isActive(pathname, item.href);
          const Icon = item.icon;
          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm transition-colors ${
                active
                  ? "bg-brand-accent/15 text-brand-accent border border-brand-accent/30"
                  : "text-brand-light/70 hover:bg-white/5 hover:text-brand-light"
              }`}
            >
              <Icon size={18} />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>
      <div className="px-3 py-4 border-t border-white/10">
        <div className="flex items-center gap-3 rounded-xl px-3 py-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-accent text-sm font-semibold text-brand-dark">
            MS
          </div>
          <div className="flex flex-col">
            <span className="text-sm text-brand-light">Manu Schonhoff</span>
            <span className="text-xs text-brand-light/50">SuperAdmin</span>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="font-alexandria text-brand-light flex h-screen overflow-hidden bg-brand-dark">
      {/* Desktop sidebar */}
      <aside className="hidden lg:flex w-64 flex-col border-r border-white/10 bg-brand-dark">
        {sidebarContent}
      </aside>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div
            className="absolute inset-0 bg-black/70"
            onClick={() => setMobileOpen(false)}
          />
          <aside className="absolute left-0 top-0 h-full w-64 bg-brand-dark border-r border-white/10">
            <button
              onClick={() => setMobileOpen(false)}
              className="absolute right-3 top-5 rounded-full p-1 text-brand-light/60 hover:bg-white/10"
              aria-label="Cerrar menú"
            >
              <X size={18} />
            </button>
            {sidebarContent}
          </aside>
        </div>
      )}

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="flex items-center justify-between border-b border-white/10 px-4 lg:px-6 py-4">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setMobileOpen(true)}
              className="lg:hidden rounded-lg p-1.5 text-brand-light/70 hover:bg-white/5"
              aria-label="Abrir menú"
            >
              <Menu size={20} />
            </button>
            <h1 className="text-lg font-semibold">{pageTitle(pathname)}</h1>
          </div>
          <Link
            href="/admin/alertas"
            className="relative rounded-full p-2 text-brand-light/70 hover:bg-white/5"
            aria-label="Notificaciones"
          >
            <Bell size={20} />
            {alertas.length > 0 && (
              <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-brand-accent text-[10px] font-semibold text-brand-dark">
                {alertas.length}
              </span>
            )}
          </Link>
        </header>
        <main className="flex-1 overflow-y-auto bg-grid px-4 lg:px-6 py-6">{children}</main>
      </div>
    </div>
  );
}

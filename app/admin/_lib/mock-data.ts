export type EstadoCliente = "Activo" | "Inactivo";
export type EstadoPago = "Cobrado" | "Pendiente" | "Moroso";
export type TipoServicio = "Caja Pequeña" | "Caja Mediana" | "Caja Grande" | "Caja Extra Grande";

export interface Cliente {
  id: string;
  nombre: string;
  dni: string;
  email: string;
  telefono: string;
  estado: EstadoCliente;
  estadoPago: EstadoPago;
  tipoServicio: TipoServicio;
  cajaId: string | null;
  deuda: number;
  desde: string;
}

export const clientes: Cliente[] = [
  { id: "c1", nombre: "Marcos Iturralde", dni: "28.451.902", email: "marcos.iturralde@mail.com", telefono: "291-455-1023", estado: "Activo", estadoPago: "Cobrado", tipoServicio: "Caja Mediana", cajaId: "b01", deuda: 0, desde: "2022-03-12" },
  { id: "c2", nombre: "Lucía Ferraro", dni: "31.220.774", email: "lucia.ferraro@mail.com", telefono: "291-455-2291", estado: "Activo", estadoPago: "Cobrado", tipoServicio: "Caja Grande", cajaId: "b03", deuda: 0, desde: "2021-11-02" },
  { id: "c3", nombre: "Esteban Roldán", dni: "22.987.341", email: "esteban.roldan@mail.com", telefono: "291-455-3387", estado: "Activo", estadoPago: "Moroso", tipoServicio: "Caja Pequeña", cajaId: "b05", deuda: 38500, desde: "2023-01-20" },
  { id: "c4", nombre: "Valentina Suso", dni: "35.667.120", email: "valentina.suso@mail.com", telefono: "291-455-4410", estado: "Activo", estadoPago: "Cobrado", tipoServicio: "Caja Mediana", cajaId: "b07", deuda: 0, desde: "2023-06-08" },
  { id: "c5", nombre: "Gastón Pellegrini", dni: "27.114.005", email: "gaston.pellegrini@mail.com", telefono: "291-455-5521", estado: "Activo", estadoPago: "Pendiente", tipoServicio: "Caja Extra Grande", cajaId: "b09", deuda: 21000, desde: "2022-09-15" },
  { id: "c6", nombre: "Carolina Beresñak", dni: "30.882.667", email: "carolina.beresnak@mail.com", telefono: "291-455-6634", estado: "Inactivo", estadoPago: "Cobrado", tipoServicio: "Caja Pequeña", cajaId: null, deuda: 0, desde: "2020-04-30" },
  { id: "c7", nombre: "Hernán Cazenave", dni: "24.339.882", email: "hernan.cazenave@mail.com", telefono: "291-455-7745", estado: "Activo", estadoPago: "Cobrado", tipoServicio: "Caja Mediana", cajaId: "b11", deuda: 0, desde: "2024-02-11" },
  { id: "c8", nombre: "Florencia Mansilla", dni: "33.556.219", email: "florencia.mansilla@mail.com", telefono: "291-455-8856", estado: "Activo", estadoPago: "Moroso", tipoServicio: "Caja Grande", cajaId: "b13", deuda: 54200, desde: "2021-07-19" },
  { id: "c9", nombre: "Rodrigo Albanesi", dni: "29.770.443", email: "rodrigo.albanesi@mail.com", telefono: "291-455-9967", estado: "Activo", estadoPago: "Cobrado", tipoServicio: "Caja Pequeña", cajaId: "b15", deuda: 0, desde: "2023-10-03" },
  { id: "c10", nombre: "Natalia Quiroga", dni: "32.991.556", email: "natalia.quiroga@mail.com", telefono: "291-455-0078", estado: "Activo", estadoPago: "Pendiente", tipoServicio: "Caja Mediana", cajaId: "b17", deuda: 15000, desde: "2022-12-22" },
  { id: "c11", nombre: "Damián Sosa Funes", dni: "26.448.330", email: "damian.sosafunes@mail.com", telefono: "291-455-1189", estado: "Activo", estadoPago: "Cobrado", tipoServicio: "Caja Grande", cajaId: "b19", deuda: 0, desde: "2024-05-17" },
  { id: "c12", nombre: "Brenda Sciuto", dni: "34.112.887", email: "brenda.sciuto@mail.com", telefono: "291-455-2290", estado: "Inactivo", estadoPago: "Cobrado", tipoServicio: "Caja Pequeña", cajaId: null, deuda: 0, desde: "2019-08-25" },
  { id: "c13", nombre: "Ignacio Berhongaray", dni: "23.665.774", email: "ignacio.berhongaray@mail.com", telefono: "291-455-3301", estado: "Activo", estadoPago: "Cobrado", tipoServicio: "Caja Extra Grande", cajaId: "b21", deuda: 0, desde: "2023-03-29" },
  { id: "c14", nombre: "Yamila Tealdi", dni: "31.880.221", email: "yamila.tealdi@mail.com", telefono: "291-455-4412", estado: "Activo", estadoPago: "Moroso", tipoServicio: "Caja Mediana", cajaId: "b23", deuda: 29800, desde: "2022-01-14" },
  { id: "c15", nombre: "Federico Lacoste", dni: "25.227.998", email: "federico.lacoste@mail.com", telefono: "291-455-5523", estado: "Activo", estadoPago: "Cobrado", tipoServicio: "Caja Grande", cajaId: "b25", deuda: 0, desde: "2024-08-02" },
  { id: "c16", nombre: "Paula Etcheverry", dni: "36.004.115", email: "paula.etcheverry@mail.com", telefono: "291-455-6634", estado: "Activo", estadoPago: "Cobrado", tipoServicio: "Caja Pequeña", cajaId: "b27", deuda: 0, desde: "2023-09-09" },
  { id: "c17", nombre: "Tomás Bilbao", dni: "28.997.662", email: "tomas.bilbao@mail.com", telefono: "291-455-7746", estado: "Activo", estadoPago: "Pendiente", tipoServicio: "Caja Mediana", cajaId: "b29", deuda: 12000, desde: "2021-05-06" },
  { id: "c18", nombre: "Agustina Cremaschi", dni: "33.118.774", email: "agustina.cremaschi@mail.com", telefono: "291-455-8857", estado: "Inactivo", estadoPago: "Cobrado", tipoServicio: "Caja Pequeña", cajaId: null, deuda: 0, desde: "2020-10-18" },
];

export type EstadoCaja = "Ocupada" | "Libre" | "Reservada" | "Mantenimiento";
export type CategoriaCaja = "Pequeña" | "Mediana" | "Grande" | "Extra Grande";

export interface Caja {
  id: string;
  numero: string;
  categoria: CategoriaCaja;
  estado: EstadoCaja;
  clienteId: string | null;
  inicio: string | null;
  fin: string | null;
  precioMensual: number;
}

function genCajas(): Caja[] {
  const categorias: CategoriaCaja[] = ["Pequeña", "Mediana", "Grande", "Extra Grande"];
  const precios: Record<CategoriaCaja, number> = { "Pequeña": 18000, "Mediana": 26000, "Grande": 38000, "Extra Grande": 52000 };
  const ocupadasMap: Record<string, { clienteId: string; inicio: string; fin: string }> = {
    b01: { clienteId: "c1", inicio: "2024-03-12", fin: "2026-03-12" },
    b03: { clienteId: "c2", inicio: "2023-11-02", fin: "2025-11-02" },
    b05: { clienteId: "c3", inicio: "2025-01-20", fin: "2026-01-20" },
    b07: { clienteId: "c4", inicio: "2025-06-08", fin: "2026-06-08" },
    b09: { clienteId: "c5", inicio: "2024-09-15", fin: "2025-09-15" },
    b11: { clienteId: "c7", inicio: "2024-02-11", fin: "2026-02-11" },
    b13: { clienteId: "c8", inicio: "2023-07-19", fin: "2025-07-19" },
    b15: { clienteId: "c9", inicio: "2025-10-03", fin: "2026-10-03" },
    b17: { clienteId: "c10", inicio: "2024-12-22", fin: "2025-12-22" },
    b19: { clienteId: "c11", inicio: "2025-05-17", fin: "2026-05-17" },
    b21: { clienteId: "c13", inicio: "2025-03-29", fin: "2026-03-29" },
    b23: { clienteId: "c14", inicio: "2024-01-14", fin: "2025-07-14" },
    b25: { clienteId: "c15", inicio: "2025-08-02", fin: "2026-08-02" },
    b27: { clienteId: "c16", inicio: "2025-09-09", fin: "2026-09-09" },
    b29: { clienteId: "c17", inicio: "2024-05-06", fin: "2025-08-06" },
  };
  const reservadas = ["b02", "b08", "b14"];
  const mantenimiento = ["b06", "b18"];
  const cajas: Caja[] = [];
  for (let i = 1; i <= 30; i++) {
    const id = `b${String(i).padStart(2, "0")}`;
    const categoria = categorias[i % categorias.length];
    let estado: EstadoCaja = "Libre";
    let clienteId: string | null = null;
    let inicio: string | null = null;
    let fin: string | null = null;
    if (ocupadasMap[id]) {
      estado = "Ocupada";
      clienteId = ocupadasMap[id].clienteId;
      inicio = ocupadasMap[id].inicio;
      fin = ocupadasMap[id].fin;
    } else if (reservadas.includes(id)) {
      estado = "Reservada";
    } else if (mantenimiento.includes(id)) {
      estado = "Mantenimiento";
    }
    cajas.push({
      id,
      numero: id.toUpperCase().replace("B", "C-"),
      categoria,
      estado,
      clienteId,
      inicio,
      fin,
      precioMensual: precios[categoria],
    });
  }
  return cajas;
}

export const cajas: Caja[] = genCajas();

export type EstadoContrato = "Vigente" | "Por Vencer" | "Vencido" | "Finalizado";

export interface Contrato {
  id: string;
  clienteId: string;
  cajaId: string;
  inicio: string;
  fin: string;
  precio: number;
  estado: EstadoContrato;
  pdfFirmado: boolean;
}

export const contratos: Contrato[] = cajas
  .filter((c) => c.clienteId)
  .map((c, i) => {
    const finDate = new Date(c.fin!);
    const hoy = new Date("2026-06-17");
    const diffDias = Math.ceil((finDate.getTime() - hoy.getTime()) / (1000 * 60 * 60 * 24));
    let estado: EstadoContrato = "Vigente";
    if (diffDias < 0) estado = "Vencido";
    else if (diffDias <= 60) estado = "Por Vencer";
    return {
      id: `ct${i + 1}`,
      clienteId: c.clienteId!,
      cajaId: c.id,
      inicio: c.inicio!,
      fin: c.fin!,
      precio: c.precioMensual,
      estado,
      pdfFirmado: i % 4 !== 0,
    };
  });

export interface FacturacionMes {
  mes: string;
  facturado: number;
  cobrado: number;
  pendiente: number;
  nuevosClientes: number;
  bajas: number;
}

export const facturacionHistorica: FacturacionMes[] = [
  { mes: "Ene", facturado: 612000, cobrado: 560000, pendiente: 52000, nuevosClientes: 2, bajas: 1 },
  { mes: "Feb", facturado: 634000, cobrado: 598000, pendiente: 36000, nuevosClientes: 1, bajas: 0 },
  { mes: "Mar", facturado: 658000, cobrado: 612000, pendiente: 46000, nuevosClientes: 3, bajas: 1 },
  { mes: "Abr", facturado: 671000, cobrado: 640000, pendiente: 31000, nuevosClientes: 2, bajas: 0 },
  { mes: "May", facturado: 695000, cobrado: 630000, pendiente: 65000, nuevosClientes: 2, bajas: 2 },
  { mes: "Jun", facturado: 712000, cobrado: 645000, pendiente: 67000, nuevosClientes: 1, bajas: 1 },
];

export interface Alerta {
  id: string;
  tipo: "Contrato por Vencer" | "Deudor" | "Pago Pendiente";
  severidad: "alta" | "media" | "baja";
  clienteId: string;
  detalle: string;
  fecha: string;
}

export const alertas: Alerta[] = [
  { id: "a1", tipo: "Deudor", severidad: "alta", clienteId: "c8", detalle: "Deuda de $54.200 acumulada en 2 períodos", fecha: "2026-06-10" },
  { id: "a2", tipo: "Deudor", severidad: "alta", clienteId: "c3", detalle: "Deuda de $38.500, último pago hace 47 días", fecha: "2026-06-05" },
  { id: "a3", tipo: "Deudor", severidad: "media", clienteId: "c14", detalle: "Deuda de $29.800", fecha: "2026-06-02" },
  { id: "a4", tipo: "Pago Pendiente", severidad: "media", clienteId: "c5", detalle: "Factura de Junio pendiente, vence en 5 días", fecha: "2026-06-12" },
  { id: "a5", tipo: "Pago Pendiente", severidad: "baja", clienteId: "c10", detalle: "Factura de Junio pendiente, vence en 9 días", fecha: "2026-06-12" },
  { id: "a6", tipo: "Pago Pendiente", severidad: "baja", clienteId: "c17", detalle: "Factura de Junio pendiente, vence en 11 días", fecha: "2026-06-12" },
  { id: "a7", tipo: "Contrato por Vencer", severidad: "alta", clienteId: "c5", detalle: "Caja C-09 vence el 15/09/2025 — renovación pendiente", fecha: "2026-06-01" },
  { id: "a8", tipo: "Contrato por Vencer", severidad: "media", clienteId: "c17", detalle: "Caja C-29 vence el 06/08/2025", fecha: "2026-06-01" },
  { id: "a9", tipo: "Contrato por Vencer", severidad: "media", clienteId: "c14", detalle: "Caja C-23 vence el 14/07/2025", fecha: "2026-06-01" },
];

export type Rol = "SuperAdmin" | "Admin";

export interface Usuario {
  id: string;
  nombre: string;
  email: string;
  rol: Rol;
  estado: "Activo" | "Inactivo";
  ultimoIngreso: string;
}

export const usuarios: Usuario[] = [
  { id: "u1", nombre: "Manu Schonhoff", email: "manu@bankz.com.ar", rol: "SuperAdmin", estado: "Activo", ultimoIngreso: "2026-06-17 09:14" },
  { id: "u2", nombre: "Soledad Vivanco", email: "soledad@bankz.com.ar", rol: "Admin", estado: "Activo", ultimoIngreso: "2026-06-16 18:02" },
  { id: "u3", nombre: "Ramiro Ortubia", email: "ramiro@bankz.com.ar", rol: "Admin", estado: "Activo", ultimoIngreso: "2026-06-15 11:47" },
  { id: "u4", nombre: "Cecilia Paván", email: "cecilia@bankz.com.ar", rol: "Admin", estado: "Inactivo", ultimoIngreso: "2026-04-02 10:00" },
];

export interface LogEntry {
  id: string;
  usuario: string;
  accion: string;
  entidad: string;
  fecha: string;
  ip: string;
}

export const authLog: LogEntry[] = [
  { id: "l1", usuario: "Manu Schonhoff", accion: "Creó contrato", entidad: "Contrato #ct15 (Federico Lacoste)", fecha: "2026-06-17 08:55", ip: "190.18.221.4" },
  { id: "l2", usuario: "Soledad Vivanco", accion: "Registró pago", entidad: "Cliente Marcos Iturralde", fecha: "2026-06-16 17:40", ip: "190.18.221.9" },
  { id: "l3", usuario: "Ramiro Ortubia", accion: "Editó caja", entidad: "Caja C-06 → Mantenimiento", fecha: "2026-06-16 12:15", ip: "190.18.230.2" },
  { id: "l4", usuario: "Manu Schonhoff", accion: "Inició sesión", entidad: "—", fecha: "2026-06-16 09:01", ip: "190.18.221.4" },
  { id: "l5", usuario: "Soledad Vivanco", accion: "Generó alerta manual", entidad: "Cliente Florencia Mansilla", fecha: "2026-06-15 16:22", ip: "190.18.221.9" },
  { id: "l6", usuario: "Cecilia Paván", accion: "Desactivó usuario", entidad: "Usuario propio", fecha: "2026-04-02 10:05", ip: "190.18.240.7" },
  { id: "l7", usuario: "Ramiro Ortubia", accion: "Subió PDF firmado", entidad: "Contrato #ct9 (Rodrigo Albanesi)", fecha: "2026-06-14 14:30", ip: "190.18.230.2" },
  { id: "l8", usuario: "Manu Schonhoff", accion: "Editó cliente", entidad: "Cliente Esteban Roldán", fecha: "2026-06-13 19:08", ip: "190.18.221.4" },
];

export function getCliente(id: string) {
  return clientes.find((c) => c.id === id);
}
export function getCaja(id: string) {
  return cajas.find((c) => c.id === id);
}

"use client";

import { type FormEvent } from "react";
import { CalendarDays, MapPin, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";

export function MovingReservationForm({ whatsapp }: { whatsapp: string }) {
  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const values = Object.fromEntries(new FormData(event.currentTarget).entries());
    const message = [
      "Hola, quiero solicitar una reserva de mudanza.",
      "",
      `Nombre: ${values.name}`,
      `Teléfono: ${values.phone}`,
      `Origen: ${values.origin}`,
      `Destino: ${values.destination}`,
      `Fecha estimada: ${values.date}`,
      `Tipo de mudanza: ${values.moveType}`,
      values.details ? `Detalles: ${values.details}` : "",
      "",
      "Entiendo que la fecha y el servicio quedan sujetos a confirmación."
    ].filter(Boolean).join("\n");
    window.location.assign(`https://wa.me/${whatsapp}?text=${encodeURIComponent(message)}`);
  }

  return (
    <div className="w-full rounded-2xl border border-white/70 bg-card p-5 shadow-xl shadow-slate-900/10 sm:p-7">
      <div className="mb-5">
        <p className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-primary"><Truck className="h-4 w-4" /> Coordiná tu mudanza</p>
        <h2 className="mt-2 text-2xl font-bold tracking-tight">Solicitá tu reserva</h2>
        <p className="mt-2 text-sm text-muted-foreground">Completá los datos y envialos por WhatsApp para consultar disponibilidad y presupuesto.</p>
      </div>
      <form onSubmit={onSubmit} className="grid gap-3 sm:grid-cols-2">
        <label className="grid gap-1.5 text-sm font-medium">
          Nombre y apellido
          <input name="name" required minLength={2} maxLength={100} autoComplete="name" placeholder="Tu nombre" className="h-11 min-w-0 rounded-lg border bg-background px-3" />
        </label>
        <label className="grid gap-1.5 text-sm font-medium">
          Teléfono / WhatsApp
          <input name="phone" required minLength={6} maxLength={30} type="tel" autoComplete="tel" placeholder="+54 9..." className="h-11 min-w-0 rounded-lg border bg-background px-3" />
        </label>
        <label className="grid gap-1.5 text-sm font-medium sm:col-span-2">
          <span className="flex items-center gap-1.5"><MapPin className="h-4 w-4" /> Dirección de origen</span>
          <input name="origin" required maxLength={180} placeholder="¿Desde dónde nos mudamos?" className="h-11 min-w-0 rounded-lg border bg-background px-3" />
        </label>
        <label className="grid gap-1.5 text-sm font-medium sm:col-span-2">
          <span className="flex items-center gap-1.5"><MapPin className="h-4 w-4" /> Dirección de destino</span>
          <input name="destination" required maxLength={180} placeholder="¿A dónde llevamos tus cosas?" className="h-11 min-w-0 rounded-lg border bg-background px-3" />
        </label>
        <label className="grid gap-1.5 text-sm font-medium">
          <span className="flex items-center gap-1.5"><CalendarDays className="h-4 w-4" /> Fecha estimada</span>
          <input name="date" required type="date" className="h-11 min-w-0 rounded-lg border bg-background px-3" />
        </label>
        <label className="grid gap-1.5 text-sm font-medium">
          Tipo de mudanza
          <select name="moveType" required defaultValue="" className="h-11 min-w-0 rounded-lg border bg-background px-3">
            <option value="" disabled>Seleccioná una opción</option>
            <option>Hogar / departamento</option>
            <option>Oficina / comercio</option>
            <option>Flete / traslado puntual</option>
            <option>Otro</option>
          </select>
        </label>
        <label className="grid gap-1.5 text-sm font-medium sm:col-span-2">
          Detalles adicionales (opcional)
          <textarea name="details" maxLength={1000} rows={2} placeholder="Volumen aproximado, pisos, ascensor u otra información útil" className="min-w-0 resize-y rounded-lg border bg-background px-3 py-2" />
        </label>
        <div className="sm:col-span-2">
          <Button type="submit" size="lg" className="w-full">Enviar solicitud por WhatsApp</Button>
          <p className="mt-2 text-center text-xs text-muted-foreground">La solicitud no confirma una reserva. El equipo verificará disponibilidad y te responderá.</p>
        </div>
      </form>
    </div>
  );
}

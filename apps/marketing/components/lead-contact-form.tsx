"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";

export function LeadContactForm({ businessSlug }: { businessSlug: string }) {
  const [state, setState] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [error, setError] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState("sending");
    setError("");
    const form = event.currentTarget;
    const values = Object.fromEntries(new FormData(form).entries());

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || "No pudimos enviar tu consulta.");
      form.reset();
      setState("success");
    } catch (err) {
      setError(err instanceof Error ? err.message : "No pudimos enviar tu consulta.");
      setState("error");
    }
  }

  return (
    <form onSubmit={onSubmit} className="mt-8 grid gap-4 rounded-2xl border bg-card p-6 text-left shadow-sm sm:grid-cols-2">
      <input type="hidden" name="businessSlug" value={businessSlug} />
      <label className="grid gap-2 text-sm font-medium">
        Tu nombre
        <input name="name" required minLength={2} maxLength={100} autoComplete="name" className="rounded-lg border bg-background px-3 py-3" />
      </label>
      <label className="grid gap-2 text-sm font-medium">
        WhatsApp / teléfono
        <input name="phone" required minLength={6} maxLength={30} autoComplete="tel" className="rounded-lg border bg-background px-3 py-3" />
      </label>
      <label className="grid gap-2 text-sm font-medium sm:col-span-2">
        Email (opcional)
        <input name="email" type="email" maxLength={254} autoComplete="email" className="rounded-lg border bg-background px-3 py-3" />
      </label>
      <label className="grid gap-2 text-sm font-medium sm:col-span-2">
        ¿En qué podemos ayudarte?
        <textarea name="message" required minLength={5} maxLength={2000} rows={4} className="rounded-lg border bg-background px-3 py-3" />
      </label>
      <div aria-hidden="true" className="hidden">
        <label>Sitio web<input name="website" tabIndex={-1} autoComplete="off" /></label>
      </div>
      <div className="sm:col-span-2">
        <Button type="submit" disabled={state === "sending"} className="w-full">
          {state === "sending" ? "Enviando..." : "Enviar consulta"}
        </Button>
        {state === "success" && <p role="status" className="mt-3 text-sm text-green-700">Recibimos tu consulta. El comercio se pondrá en contacto.</p>}
        {state === "error" && <p role="alert" className="mt-3 text-sm text-red-700">{error}</p>}
      </div>
    </form>
  );
}

import { NextResponse } from "next/server";
import { getBusinessSite } from "@/data/sites";
import { readJsonObject } from "@/lib/request-body";
import { parseLeadInput } from "@/lib/lead-validation";

async function submit(payload: Record<string, string>) {
  const url = process.env.SUPABASE_URL?.replace(/\/$/, "");
  const key = process.env.SUPABASE_ANON_KEY;
  if (!url || !key) {
    return NextResponse.json({ error: "El servicio de recepción todavía no está configurado." }, { status: 503 });
  }

  try {
    const response = await fetch(url + "/functions/v1/smartbarrio-submit", {
      method: "POST",
      headers: { apikey: key, Authorization: "Bearer " + key, "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      cache: "no-store",
    });
    if (!response.ok) {
      return NextResponse.json(
        { error: "No pudimos registrar la consulta." },
        { status: response.status === 400 ? 400 : 502 },
      );
    }
    return NextResponse.json({ ok: true }, { status: 201 });
  } catch {
    return NextResponse.json({ error: "No pudimos conectar con el servicio de recepción." }, { status: 502 });
  }
}

export async function POST(request: Request) {
  const parsed = await readJsonObject(request);
  if (!parsed.ok) {
    return NextResponse.json(
      { error: parsed.status === 413 ? "Solicitud demasiado grande." : "Solicitud inválida." },
      { status: parsed.status },
    );
  }

  const input = parseLeadInput(parsed.body);
  if (input.kind === "honeypot") return NextResponse.json({ ok: true });
  if (input.kind === "invalid") return NextResponse.json({ error: "Revisá los datos ingresados." }, { status: 400 });

  const site = getBusinessSite(input.payload.businessSlug);
  if (!site || site.status === "draft") {
    return NextResponse.json({ error: "Comercio inválido." }, { status: 400 });
  }

  return submit({
    type: "lead",
    businessSlug: site.slug,
    businessName: site.business.name,
    name: input.payload.name,
    phone: input.payload.phone,
    email: input.payload.email,
    message: input.payload.message,
  });
}

import { NextResponse } from "next/server";
import { readJsonObject } from "@/lib/request-body";

function clean(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

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

  const body = parsed.body;
  if (clean(body.website)) return NextResponse.json({ ok: true });

  const name = clean(body.name);
  const businessName = clean(body.businessName);
  const phone = clean(body.phone);
  const email = clean(body.email);
  const message = clean(body.message);

  if (
    name.length < 2 || name.length > 100 ||
    businessName.length < 2 || businessName.length > 120 ||
    phone.length < 6 || phone.length > 30 ||
    message.length < 5 || message.length > 2000 ||
    (email && (email.length > 254 || !emailPattern.test(email)))
  ) {
    return NextResponse.json({ error: "Revisá los datos ingresados." }, { status: 400 });
  }

  return submit({ type: "sales", name, businessName, phone, email, message });
}

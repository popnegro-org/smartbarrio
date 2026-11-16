import { NextResponse } from "next/server";
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
function clean(value: unknown) { return typeof value === "string" ? value.trim() : ""; }
async function submit(payload: Record<string, string>) {
  const url = process.env.SUPABASE_URL?.replace(/\/$/, "");
  const key = process.env.SUPABASE_ANON_KEY;
  if (!url || !key) return NextResponse.json({ error: "El servicio de recepción todavía no está configurado." }, { status: 503 });
  try {
    const response = await fetch(url + "/functions/v1/smartbarrio-submit", {
      method: "POST", headers: { apikey: key, Authorization: "Bearer " + key, "Content-Type": "application/json" },
      body: JSON.stringify(payload), cache: "no-store",
    });
    if (!response.ok) return NextResponse.json({ error: "No pudimos registrar la consulta." }, { status: response.status === 400 ? 400 : 502 });
    return NextResponse.json({ ok: true }, { status: 201 });
  } catch { return NextResponse.json({ error: "No pudimos conectar con el servicio de recepción." }, { status: 502 }); }
}

import { getBusinessSite } from "@/data/sites";
export async function POST(request: Request) {
  if (Number(request.headers.get("content-length") || 0) > 12000) return NextResponse.json({ error: "Solicitud demasiado grande." }, { status: 413 });
  let body: Record<string, unknown>;
  try { body = await request.json(); } catch { return NextResponse.json({ error: "Solicitud inválida." }, { status: 400 }); }
  if (clean(body.website)) return NextResponse.json({ ok: true });
  const slug = clean(body.businessSlug), site = getBusinessSite(slug);
  const name = clean(body.name), phone = clean(body.phone), email = clean(body.email), message = clean(body.message);
  if (!site || site.status === "draft" || name.length < 2 || name.length > 100 || phone.length < 6 || phone.length > 30 || message.length < 5 || message.length > 2000 || (email && (email.length > 254 || !emailPattern.test(email)))) return NextResponse.json({ error: "Revisá los datos ingresados." }, { status: 400 });
  return submit({ type: "lead", businessSlug: slug, businessName: site.business.name, name, phone, email, message });
}

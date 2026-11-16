import { createClient } from "npm:@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { ...corsHeaders, "Content-Type": "application/json" },
  });

Deno.serve(async (request: Request) => {
  if (request.method === "OPTIONS") return new Response("ok", { headers: corsHeaders });
  if (request.method !== "POST") return json({ error: "Método no permitido." }, 405);

  const contentLength = Number(request.headers.get("content-length") || 0);
  if (contentLength > 12000) return json({ error: "Solicitud demasiado grande." }, 413);

  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return json({ error: "Solicitud inválida." }, 400);
  }

  if (typeof body.website === "string" && body.website.trim()) return json({ ok: true }, 200);

  const name = typeof body.name === "string" ? body.name.trim() : "";
  const phone = typeof body.phone === "string" ? body.phone.trim() : "";
  const email = typeof body.email === "string" ? body.email.trim() : "";
  const message = typeof body.message === "string" ? body.message.trim() : "";
  const table = body.type === "lead" ? "leads" : body.type === "sales" ? "sales_inquiries" : "";
  const validEmail = !email || (email.length <= 254 && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email));

  if (!table || name.length < 2 || name.length > 100 || phone.length < 6 || phone.length > 30 ||
      message.length < 5 || message.length > 2000 || !validEmail) {
    return json({ error: "Revisá los datos ingresados." }, 400);
  }

  const supabaseUrl = Deno.env.get("SUPABASE_URL");
  const serviceRoleKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");
  if (!supabaseUrl || !serviceRoleKey) return json({ error: "Servicio no configurado." }, 503);

  const client = createClient(supabaseUrl, serviceRoleKey, {
    auth: { persistSession: false, autoRefreshToken: false },
  });

  const payload = table === "leads"
    ? {
        business_slug: typeof body.businessSlug === "string" ? body.businessSlug.trim() : "",
        business_name: typeof body.businessName === "string" ? body.businessName.trim() : "",
        name, phone, email: email || null, message,
      }
    : {
        name,
        business_name: typeof body.businessName === "string" ? body.businessName.trim() : "",
        phone, email: email || null, message,
      };

  if (table === "leads" &&
      (String(payload.business_slug).length < 1 || String(payload.business_slug).length > 100 ||
       String(payload.business_name).length < 2 || String(payload.business_name).length > 120)) {
    return json({ error: "Comercio inválido." }, 400);
  }
  if (table === "sales_inquiries" &&
      (String(payload.business_name).length < 2 || String(payload.business_name).length > 120)) {
    return json({ error: "Comercio inválido." }, 400);
  }

  const { error } = await client.from(table).insert(payload);
  if (error) {
    console.error("smartbarrio-submit insert failed", { code: error.code, message: error.message });
    return json({ error: "No pudimos registrar la consulta." }, 502);
  }

  return json({ ok: true }, 201);
});
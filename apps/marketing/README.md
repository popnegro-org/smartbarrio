# SmartWeb Express PMV

Motor de sitios configurables para comercios locales, con plantillas reutilizables, SEO local, WhatsApp y recepción de consultas mediante Supabase Edge Functions.

## Desarrollo
- Node.js 20+
- `npm install`
- `cp .env.example .env.local`
- `npm run dev`

## Crear un comercio
Agregar un objeto tipado en `data/sites.ts`. Cada sitio tiene `slug`, estado (`draft`, `demo`, `published`) y plantilla (`commerce`, `gastronomy`, `services`, `professional`, `tourism`). La ruta de demostración es `/demo/[slug]`. No publicar datos ficticios como comercios reales.

## Variables
- `NEXT_PUBLIC_WHATSAPP_PHONE`: número comercial internacional, solo dígitos.
- `NEXT_PUBLIC_SITE_URL`: URL canónica para sitemap y robots.
- `SUPABASE_URL` y `SUPABASE_ANON_KEY`: invocación server-side de `smartbarrio-submit`.
La clave `service_role` debe permanecer exclusivamente en Supabase Edge Function y nunca configurarse en Vercel ni exponerse al navegador.

## QA
`npm run lint`, `npm run typecheck`, `npm test`, `npm run build`.
Las migraciones están en `supabase/migrations`.

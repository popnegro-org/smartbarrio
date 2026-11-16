# SmartWeb Express PMV

Motor reutilizable de sitios web para comercios locales, con cinco plantillas, SEO local, WhatsApp y recepción de consultas mediante Supabase Edge Functions.

## Desarrollo
- Node.js 20+
- `npm install`
- `cp .env.example .env.local`
- `npm run dev`

## Crear un comercio
Agregar un objeto tipado en `data/sites.ts`. Cada sitio tiene `slug`, estado (`draft`, `demo`, `published`) y plantilla (`commerce`, `gastronomy`, `services`, `professional`, `tourism`). Las demos usan `/demo/[slug]`, las vistas previas de borradores `/preview/[slug]` y los comercios aprobados `/sitio/[slug]`. Solo los sitios con estado `published` reciben formularios de captación de leads; no publicar datos ficticios como comercios reales.

## Variables
- `NEXT_PUBLIC_WHATSAPP_PHONE`: número comercial internacional, solo dígitos.
- `NEXT_PUBLIC_SITE_URL`: URL canónica para sitemap y robots.
- `SUPABASE_URL` y `SUPABASE_ANON_KEY`: invocación server-side de `smartbarrio-submit`.

La clave `service_role` debe permanecer exclusivamente en Supabase Edge Function y nunca configurarse en Vercel ni exponerse al navegador.

## Formularios
- El formulario comercial envía consultas a `/api/inquiries`.
- Los formularios de contacto de sitios publicados envían leads a `/api/leads`.
- La Edge Function `smartbarrio-submit` valida y persiste en Supabase.
- La ficha piloto de Mudanzas Miranda incluye una solicitud de mudanza que prepara un mensaje para WhatsApp; no confirma ni persiste reservas.

## QA
Ejecutar desde `apps/marketing`:
- `npm run lint`
- `npm run typecheck`
- `npm test`
- `npm run build`

Las migraciones están en `apps/marketing/supabase/migrations`; la Edge Function compartida está en `supabase/functions/smartbarrio-submit`.

## Primer comercio piloto: Mudanzas Miranda

La ficha `mudanzas-miranda` se conserva en estado `draft` y se revisa en `/preview/mudanzas-miranda`. La vista previa usa `noindex,nofollow`, no aparece en el sitemap y no activa el formulario de captación de leads.

Datos incorporados:
- Nombre, rubro, dirección y teléfono publicados para Godoy Cruz, Mendoza.
- Horario cargado en la ficha: atención 24 horas, todos los días, incluidos domingos y feriados (pendiente de aprobación expresa del comercio antes de publicar).
- Servicios: mudanzas residenciales, oficinas/comercios, traslados express/programados, embalaje, mudanzas económicas y logística integral.
- Una fotografía pública de un camión identificada con la marca Mudanzas Miranda. Su uso comercial debe ser autorizado antes de publicar.

No se añadieron testimonios, reseñas, email, certificaciones ni precios no verificados. Antes de cambiar el estado a `published`, el comercio debe aprobar nombre, dirección, teléfono, WhatsApp, horarios, servicios, cobertura y autorización de la fotografía.

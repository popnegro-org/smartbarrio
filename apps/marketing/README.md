# SmartWeb Express PMV

Motor de sitios configurables para comercios locales, con plantillas reutilizables, SEO local, WhatsApp y recepción de consultas mediante Supabase Edge Functions.

## Desarrollo
- Node.js 20+
- `npm install`
- `cp .env.example .env.local`
- `npm run dev`

## Crear un comercio
Agregar un objeto tipado en `data/sites.ts`. Cada sitio tiene `slug`, estado (`draft`, `demo`, `published`) y plantilla (`commerce`, `gastronomy`, `services`, `professional`, `tourism`). Las demos usan `/demo/[slug]` y los comercios aprobados usan `/sitio/[slug]`. Solo los sitios con estado `published` reciben formularios de contacto; no publicar datos ficticios como comercios reales.

## Variables
- `NEXT_PUBLIC_WHATSAPP_PHONE`: número comercial internacional, solo dígitos.
- `NEXT_PUBLIC_SITE_URL`: URL canónica para sitemap y robots.
- `SUPABASE_URL` y `SUPABASE_ANON_KEY`: invocación server-side de `smartbarrio-submit`.
La clave `service_role` debe permanecer exclusivamente en Supabase Edge Function y nunca configurarse en Vercel ni exponerse al navegador.

## QA
`npm run lint`, `npm run typecheck`, `npm test`, `npm run build`.
Las migraciones de la aplicación están en `apps/marketing/supabase/migrations`; la Edge Function compartida está en `supabase/functions/smartbarrio-submit`.

## Primer comercio piloto: Mudanzas Miranda

La ficha de `mudanzas-miranda` se conserva en estado `draft` y se revisa en `/preview/mudanzas-miranda`. La vista previa lleva `noindex,nofollow`, no aparece en el sitemap y no activa el formulario de captación de leads.

Datos incorporados desde documentación del proyecto y fuentes públicas:
- Nombre, rubro, dirección y teléfono publicados para Godoy Cruz, Mendoza.
- Horario de lunes a sábado 08:30–21:00 y domingo cerrado, según directorios locales consultados.
- Servicios publicados: mudanzas residenciales, oficinas/comercios, traslados express/programados, embalaje, mudanzas económicas y logística integral.
- Una fotografía de camión con marca Mudanzas Miranda, servida desde el sitio que publica el material de la empresa.

No se añadieron testimonios, reseñas, email, certificaciones, precios ni promesas de cobertura no verificadas. Antes de cambiar el estado a `published`, el comercio debe confirmar los datos y autorizar el uso de la fotografía y los canales de contacto.

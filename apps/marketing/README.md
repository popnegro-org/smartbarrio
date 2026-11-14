# SmartWeb Marketing

Aplicación comercial de SmartWeb Express, ubicada en `apps/marketing` según la arquitectura documentada de SmartWeb.

## Requisitos

- Node.js 20 o superior
- npm

## Instalación y ejecución

```bash
npm install
cp .env.example .env.local
npm run dev
```

La aplicación queda disponible en `http://localhost:3000`.

## Variables de entorno

Configurar `NEXT_PUBLIC_WHATSAPP_PHONE` en `.env.local` con el número comercial real en formato internacional, solo dígitos y sin el signo `+`. No incluir espacios ni guiones.

Ejemplo de formato: código de país + característica + número.

El botón flotante de WhatsApp solo se muestra cuando esta variable contiene un número.

## Validaciones

```bash
npm run lint
npm run typecheck
npm run build
```

El workflow de GitHub Actions ejecuta estas tres validaciones en cada cambio de la aplicación de marketing.

## Contenido

Todo el contenido comercial y los datos de presentación están centralizados en `data/landingConfig.ts`. Los componentes consumen esa configuración y no contienen copy comercial fijo.

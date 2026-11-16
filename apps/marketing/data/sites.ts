export type SiteStatus = "draft" | "demo" | "published";
export type SiteTemplate = "commerce" | "gastronomy" | "services" | "professional" | "tourism";
export type BusinessSite = {
  slug: string; status: SiteStatus; template: SiteTemplate;
  business: { name: string; category: string; description: string; location: string; address: string; phone: string; whatsapp: string; email?: string; hours: string[] };
  hero: { eyebrow: string; title: string; description: string; cta: string };
  services: { name: string; description: string; price?: string }[];
  gallery: string[]; testimonials: { quote: string; author: string }[];
  faqs: { question: string; answer: string }[];
  seo: { title: string; description: string };
};
const sites: BusinessSite[] = [{
  slug: "panaderia-la-esquina", status: "demo", template: "gastronomy",
  business: { name: "Panadería La Esquina", category: "Panadería artesanal", description: "Panificados frescos y productos elaborados cada día.", location: "Maipú, Mendoza", address: "Maipú, Mendoza, Argentina", phone: "", whatsapp: "5492613871088", hours: ["Lunes a sábado · 7:30 a 13:00", "Lunes a sábado · 17:00 a 20:30"] },
  hero: { eyebrow: "SITIO DE DEMOSTRACIÓN · NEGOCIO FICTICIO", title: "El sabor de lo recién hecho, cerca tuyo.", description: "Una muestra de cómo tu comercio puede presentar sus productos, horarios y canales de contacto en un sitio propio.", cta: "Consultar por WhatsApp" },
  services: [{ name: "Pan artesanal", description: "Pan elaborado diariamente con ingredientes seleccionados." }, { name: "Facturas y bollería", description: "Opciones dulces y saladas para compartir." }, { name: "Pedidos especiales", description: "Consultá disponibilidad y encargos para reuniones." }],
  gallery: [], testimonials: [], faqs: [{ question: "¿Puedo hacer un pedido?", answer: "Sí. Contactá al comercio por WhatsApp para consultar disponibilidad." }, { question: "¿Dónde están?", answer: "Esta ficha es ilustrativa y no representa un comercio real." }],
  seo: { title: "Panadería La Esquina | Demo SmartWeb Express", description: "Demostración ficticia de un sitio SmartWeb Express para una panadería de barrio." }
}];
export function getBusinessSite(slug: string) { return sites.find((site) => site.slug === slug); }
export function getBusinessSites() { return sites.filter((site) => site.status !== "draft"); }
export function getDemoSites() { return sites.filter((site) => site.status === "demo"); }
export function getPublishedSites() { return sites.filter((site) => site.status === "published"); }

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
}, {
  slug: "mudanzas-miranda",
  status: "draft",
  template: "services",
  business: {
    name: "Mudanzas Miranda",
    category: "Empresa de mudanzas y fletes",
    description: "Mudanzas residenciales y de oficinas, fletes, traslados programados, embalaje profesional y logística integral en Mendoza.",
    location: "Godoy Cruz, Mendoza",
    address: "Armada Argentina 584, M5501 Godoy Cruz, Mendoza, Argentina",
    phone: "+54 261 513-0910",
    whatsapp: "5492615130910",
    hours: ["Lunes a sábado · 08:30 a 21:00", "Domingo · Cerrado"]
  },
  hero: {
    eyebrow: "MUDANZAS Y FLETES EN MENDOZA",
    title: "Tu mudanza, coordinada con cuidado y profesionalismo.",
    description: "Soluciones para hogares, oficinas y comercios. Coordinamos cada traslado, protegemos tus pertenencias y organizamos el servicio según tus necesidades.",
    cta: "Solicitar presupuesto por WhatsApp"
  },
  services: [
    { name: "Mudanzas residenciales", description: "Traslado de casas y departamentos en el Gran Mendoza." },
    { name: "Mudanzas de oficinas y comercios", description: "Reubicación de mobiliario, equipamiento y espacios de trabajo." },
    { name: "Traslados express y programados", description: "Coordinación de mudanzas urgentes o en fechas acordadas." },
    { name: "Embalaje profesional", description: "Protección de muebles, objetos frágiles y electrodomésticos." },
    { name: "Mudanzas económicas", description: "Alternativas de traslado adaptadas al alcance de cada servicio." },
    { name: "Logística integral", description: "Organización de mudanzas combinadas y corporativas en Mendoza." }
  ],
  gallery: ["https://www.mudanzasmendoza.com.ar/img/search-mudanzas-miranda.png"],
  testimonials: [],
  faqs: [
    { question: "¿Qué información necesito para pedir un presupuesto?", answer: "Compartí origen, destino, fecha y volumen aproximado de la mudanza para coordinar una cotización." },
    { question: "¿Realizan mudanzas de hogares y oficinas?", answer: "La oferta pública incluye mudanzas residenciales y reubicación de oficinas y comercios." },
    { question: "¿Ofrecen embalaje?", answer: "El servicio publicado incluye embalaje profesional y protección de muebles, objetos frágiles y electrodomésticos." },
    { question: "¿Cómo coordino un traslado?", answer: "Contactá por WhatsApp para informar los detalles y confirmar disponibilidad y alcance del servicio." }
  ],
  seo: {
    title: "Mudanzas Miranda | Mudanzas y Fletes en Godoy Cruz, Mendoza",
    description: "Mudanzas residenciales y de oficinas, fletes, embalaje profesional y logística integral en Godoy Cruz y Gran Mendoza. Consultá tu presupuesto."
  }
}];
export function getBusinessSite(slug: string) { return sites.find((site) => site.slug === slug); }
export function getBusinessSites() { return sites.filter((site) => site.status !== "draft"); }
export function getDemoSites() { return sites.filter((site) => site.status === "demo"); }
export function getPublishedSites() { return sites.filter((site) => site.status === "published"); }
export function getDraftSites() { return sites.filter((site) => site.status === "draft"); }

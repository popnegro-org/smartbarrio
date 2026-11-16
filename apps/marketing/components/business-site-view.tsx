import type { BusinessSite } from "@/data/sites";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Clock3, MapPin, MessageCircle } from "lucide-react";
export function BusinessSiteView({ site }: { site: BusinessSite }) {
  const phone = site.business.whatsapp.replace(/\D/g, "");
  const contact = phone ? `https://wa.me/${phone}?text=${encodeURIComponent("Hola, quiero hacer una consulta.")}` : "#contacto";
  return <main className="min-h-screen bg-background text-foreground">
    <header className="border-b"><div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5"><a href="#" className="text-xl font-black">{site.business.name}</a><Button asChild size="sm"><a href={contact}>Contactar</a></Button></div></header>
    {site.status === "demo" && <div className="bg-amber-100 px-4 py-2 text-center text-sm font-semibold text-amber-950">SITIO DE DEMOSTRACIÓN · NEGOCIO FICTICIO</div>}
    <section className="bg-gradient-to-br from-primary/10 to-background"><div className="mx-auto max-w-6xl px-5 py-20 md:py-28"><Badge variant="secondary">{site.hero.eyebrow}</Badge><h1 className="mt-6 max-w-3xl text-5xl font-black tracking-tight md:text-7xl">{site.hero.title}</h1><p className="mt-6 max-w-2xl text-lg text-muted-foreground">{site.hero.description}</p><Button asChild size="lg" className="mt-8"><a href={contact}>{site.hero.cta}<MessageCircle className="ml-2 h-5 w-5"/></a></Button></div></section>
    <section className="mx-auto max-w-6xl px-5 py-16"><div className="mb-10"><p className="text-sm font-semibold uppercase tracking-wider text-primary">{site.business.category}</p><h2 className="mt-2 text-3xl font-bold">Qué podés encontrar</h2></div><div className="grid gap-5 md:grid-cols-3">{site.services.map((item)=><Card key={item.name}><CardHeader><CardTitle>{item.name}</CardTitle><CardDescription>{item.description}</CardDescription></CardHeader>{item.price && <CardContent>{item.price}</CardContent>}</Card>)}</div></section>
    <section className="bg-muted/40 py-16"><div className="mx-auto grid max-w-6xl gap-8 px-5 md:grid-cols-2"><div><h2 className="text-3xl font-bold">Encontranos</h2><p className="mt-4 flex items-center gap-2 text-muted-foreground"><MapPin className="h-5 w-5"/>{site.business.address}</p><p className="mt-3 text-muted-foreground">{site.business.location}</p></div><div><h2 className="text-3xl font-bold">Horarios</h2><ul className="mt-4 space-y-3">{site.business.hours.map((hour)=><li key={hour} className="flex items-center gap-2 text-muted-foreground"><Clock3 className="h-4 w-4"/>{hour}</li>)}</ul></div></div></section>
    {site.faqs.length>0 && <section className="mx-auto max-w-4xl px-5 py-16"><h2 className="mb-8 text-3xl font-bold">Preguntas frecuentes</h2><div className="space-y-3">{site.faqs.map((faq)=><details key={faq.question} className="rounded-xl border p-5"><summary className="cursor-pointer font-semibold">{faq.question}</summary><p className="mt-3 text-muted-foreground">{faq.answer}</p></details>)}</div></section>}
    <footer id="contacto" className="bg-primary px-5 py-14 text-center text-primary-foreground"><h2 className="text-3xl font-bold">¿Necesitás más información?</h2><p className="mt-3 text-primary-foreground/80">Contactanos y te ayudamos.</p><Button asChild variant="secondary" size="lg" className="mt-6"><a href={contact}>Consultar por WhatsApp</a></Button></footer>
    {phone && <a href={contact} target="_blank" rel="noopener noreferrer" aria-label="Contactar por WhatsApp" className="fixed bottom-5 right-5 rounded-full bg-[#25D366] p-4 text-white shadow-xl"><MessageCircle/></a>}
  </main>;
}

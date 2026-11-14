import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Clock3,
  Globe2,
  MapPin,
  MessageCircle,
  ShoppingBag,
} from "lucide-react";

import { landingConfig as config } from "@/data/landingConfig";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const solutionIcons = {
  "google-maps": MapPin,
  "smartweb-express": Globe2,
  "mercado-libre": ShoppingBag,
} as const;

const phone = config.whatsapp.phoneE164.replace(/\D/g, "");
const whatsappUrl = (message = config.whatsapp.message) =>
  phone ? `https://wa.me/${phone}?text=${encodeURIComponent(message)}` : null;

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-40 border-b bg-background/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-5 px-5 py-4 lg:px-8">
          <Link href="/" className="flex min-w-0 flex-col" aria-label={config.brand.name}>
            <span className="text-2xl font-black tracking-tight">
              {config.brand.name}<span className="text-primary">.</span>
            </span>
            <span className="hidden text-xs text-muted-foreground sm:block">{config.brand.tagline}</span>
          </Link>
          <nav className="hidden items-center gap-6 lg:flex" aria-label={config.brand.name}>
            {config.navigation.map((item) => (
              <Link key={item.href} href={item.href} className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
                {item.label}
              </Link>
            ))}
          </nav>
          <Button asChild size="sm">
            <a href={whatsappUrl() ?? "#contacto"}>{config.hero.primaryCta}<ArrowUpRight className="ml-2 h-4 w-4" /></a>
          </Button>
        </div>
      </header>

      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/10 via-background to-background" />
        <div className="mx-auto grid max-w-7xl gap-14 px-5 py-20 lg:grid-cols-2 lg:items-center lg:px-8 lg:py-28">
          <div className="space-y-8">
            <Badge variant="secondary">{config.hero.eyebrow}</Badge>
            <div className="space-y-5">
              <h1 className="max-w-3xl text-5xl font-black leading-[1.05] tracking-tight md:text-6xl lg:text-7xl">{config.hero.title}</h1>
              <p className="max-w-xl text-xl font-semibold text-primary">{config.hero.highlight}</p>
              <p className="max-w-xl text-lg leading-relaxed text-muted-foreground">{config.hero.description}</p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg"><a href={whatsappUrl() ?? "#contacto"}>{config.hero.primaryCta}<ArrowRight className="ml-2 h-5 w-5" /></a></Button>
              <Button asChild size="lg" variant="outline"><a href="#soluciones">{config.hero.secondaryCta}</a></Button>
            </div>
            <ul className="grid gap-3 pt-2">
              {config.hero.trustPoints.map((point) => (
                <li key={point} className="flex items-center gap-3 text-sm font-medium">
                  <Check className="h-5 w-5 shrink-0 text-primary" />{point}
                </li>
              ))}
            </ul>
          </div>
          <Card className="overflow-hidden border-primary/10 shadow-2xl">
            <CardHeader className="space-y-5 bg-primary p-8 text-primary-foreground">
              <Badge variant="secondary" className="w-fit">{config.brand.name}</Badge>
              <CardTitle className="text-3xl font-bold">{config.hero.highlight}</CardTitle>
              <CardDescription className="text-primary-foreground/80">{config.brand.tagline}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-5 p-8">
              {config.hero.trustPoints.map((point, index) => (
                <div key={point} className="flex items-center gap-4 rounded-xl border p-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 font-bold text-primary">{index + 1}</span>
                  <p className="font-medium">{point}</p>
                </div>
              ))}
              <div className="flex items-start gap-3 rounded-xl bg-muted p-4">
                <Clock3 className="mt-1 h-5 w-5 shrink-0 text-primary" />
                <p className="text-sm text-muted-foreground">{config.hero.deliveryNote}</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="bg-muted/40 py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <Badge variant="outline">{config.problems.eyebrow}</Badge>
            <h2 className="mt-5 text-3xl font-bold tracking-tight md:text-5xl">{config.problems.title}</h2>
            <p className="mt-5 text-lg text-muted-foreground">{config.problems.description}</p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {config.problems.items.map((item) => (
              <Card key={item.title} className="border-0 shadow-sm">
                <CardHeader><CardTitle className="text-xl">{item.title}</CardTitle></CardHeader>
                <CardContent><p className="leading-relaxed text-muted-foreground">{item.description}</p></CardContent>
              </Card>
            ))}
          </div>
          <p className="mx-auto mt-10 max-w-3xl text-center text-xl font-semibold">{config.problems.conclusion}</p>
        </div>
      </section>

      <section id="soluciones" className="scroll-mt-24 py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <Badge variant="outline">{config.solutions.eyebrow}</Badge>
            <h2 className="mt-5 text-3xl font-bold md:text-5xl">{config.solutions.title}</h2>
            <p className="mt-5 text-lg text-muted-foreground">{config.solutions.description}</p>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {config.solutions.items.map((item) => {
              const Icon = solutionIcons[item.id];
              const message = `${config.whatsapp.message} ${item.title}`;
              return (
                <Card key={item.id} className={item.featured ? "flex flex-col border-primary shadow-xl ring-1 ring-primary/20" : "flex flex-col"}>
                  <CardHeader className="space-y-5">
                    <div className="flex items-center justify-between">
                      <span className="text-4xl font-black text-primary/30">{item.number}</span>
                      <Badge variant={item.featured ? "default" : "secondary"}>{item.badge}</Badge>
                    </div>
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary"><Icon className="h-7 w-7" /></div>
                    <CardTitle className="text-2xl">{item.title}</CardTitle>
                    <CardDescription className="text-base leading-relaxed">{item.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex flex-1 flex-col">
                    <ul className="space-y-4">
                      {item.benefits.map((benefit) => (
                        <li key={benefit} className="flex items-start gap-3 text-sm leading-relaxed">
                          <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />{benefit}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-auto pt-8">
                      <p className="mb-5 rounded-lg bg-muted p-4 text-sm text-muted-foreground">{item.idealFor}</p>
                      <Button asChild className="w-full" variant={item.featured ? "default" : "outline"}>
                        <a href={whatsappUrl(message) ?? "#contacto"}>{item.cta}<ArrowRight className="ml-2 h-4 w-4" /></a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section id="proceso" className="scroll-mt-24 bg-primary py-20 text-primary-foreground">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <Badge variant="secondary">{config.process.eyebrow}</Badge>
            <h2 className="mt-5 text-3xl font-bold md:text-5xl">{config.process.title}</h2>
            <p className="mt-5 text-lg text-primary-foreground/80">{config.process.description}</p>
          </div>
          <div className="grid gap-10 md:grid-cols-3">
            {config.process.steps.map((step) => (
              <article key={step.number} className="space-y-5">
                <span className="text-6xl font-black text-primary-foreground/30">{step.number}</span>
                <h3 className="text-2xl font-bold">{step.title}</h3>
                <p className="leading-relaxed text-primary-foreground/80">{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="planes" className="scroll-mt-24 bg-muted/40 py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <Badge variant="outline">{config.plans.eyebrow}</Badge>
            <h2 className="mt-5 text-3xl font-bold md:text-5xl">{config.plans.title}</h2>
            <p className="mt-5 text-lg text-muted-foreground">{config.plans.description}</p>
          </div>
          <div className="mb-12 grid gap-5 md:grid-cols-3">
            {config.plans.model.map((item, index) => (
              <Card key={item.title}>
                <CardHeader>
                  <span className="text-3xl font-black text-primary">{String(index + 1).padStart(2, "0")}</span>
                  <CardTitle>{item.title}</CardTitle>
                  <CardDescription className="text-base">{item.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {config.plans.modules.map((module) => (
              <Card key={module.id} className={module.recommended ? "flex flex-col border-primary shadow-xl" : "flex flex-col"}>
                <CardHeader>
                  {module.recommended ? <Badge className="mb-3 w-fit">{config.solutions.items.find((item) => item.id === "smartweb-express")?.badge}</Badge> : null}
                  <CardTitle className="text-2xl">{module.title}</CardTitle>
                  <CardDescription className="text-base">{module.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-1 flex-col">
                  <ul className="space-y-4">
                    {module.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3 text-sm">
                        <Check className="h-5 w-5 shrink-0 text-primary" />{feature}
                      </li>
                    ))}
                  </ul>
                  <Button asChild className="mt-auto mt-8 w-full" variant={module.recommended ? "default" : "outline"}>
                    <a href={whatsappUrl(`${config.whatsapp.message} ${module.title}`) ?? "#contacto"}>{module.cta}</a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          <p className="mx-auto mt-9 max-w-3xl text-center text-sm text-muted-foreground">{config.plans.note}</p>
        </div>
      </section>

      <section id="faq" className="scroll-mt-24 py-20">
        <div className="mx-auto max-w-4xl px-5 lg:px-8">
          <div className="mb-10 text-center">
            <Badge variant="outline">{config.faq.eyebrow}</Badge>
            <h2 className="mt-5 text-3xl font-bold md:text-5xl">{config.faq.title}</h2>
            <p className="mt-5 text-lg text-muted-foreground">{config.faq.description}</p>
          </div>
          <div className="space-y-3">
            {config.faq.items.map((item) => (
              <details key={item.question} className="group rounded-xl border bg-card p-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold">
                  {item.question}
                  <ArrowRight className="h-5 w-5 shrink-0 text-primary transition-transform group-open:rotate-90" />
                </summary>
                <p className="mt-4 leading-relaxed text-muted-foreground">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section id="contacto" className="scroll-mt-24 px-5 py-20">
        <Card className="mx-auto max-w-6xl overflow-hidden border-0 bg-primary text-primary-foreground shadow-2xl">
          <CardContent className="px-7 py-16 text-center md:px-16 md:py-20">
            <Badge variant="secondary">{config.finalCta.eyebrow}</Badge>
            <h2 className="mx-auto mt-7 max-w-3xl text-4xl font-black md:text-6xl">{config.finalCta.title}</h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-primary-foreground/80">{config.finalCta.description}</p>
            <Button asChild size="lg" variant="secondary" className="mt-8">
              <a href={whatsappUrl() ?? "#contacto"}>{config.finalCta.button}<ArrowUpRight className="ml-2 h-5 w-5" /></a>
            </Button>
            <p className="mt-5 text-sm text-primary-foreground/70">{config.finalCta.note}</p>
          </CardContent>
        </Card>
      </section>

      <footer className="border-t bg-background">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-7 px-5 py-10 md:flex-row md:items-center lg:px-8">
          <div className="max-w-md space-y-3">
            <span className="text-2xl font-black">{config.brand.name}</span>
            <p className="text-sm leading-relaxed text-muted-foreground">{config.footer.description}</p>
            <p className="text-xs text-muted-foreground">{config.brand.location}</p>
          </div>
          <nav className="flex flex-wrap gap-5" aria-label={config.brand.name}>
            {config.footer.links.map((item) => <Link key={item.href} href={item.href} className="text-sm text-muted-foreground hover:text-primary">{item.label}</Link>)}
          </nav>
          <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} {config.footer.copyright}</p>
        </div>
      </footer>

      {phone ? (
        <a href={whatsappUrl() ?? "#contacto"} target="_blank" rel="noopener noreferrer" aria-label={config.whatsapp.ariaLabel}
          className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/40">
          <MessageCircle className="h-7 w-7" />
        </a>
      ) : null}
    </main>
  );
}
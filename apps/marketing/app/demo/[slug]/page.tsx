import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getBusinessSite, getBusinessSites } from "@/data/sites";
import { BusinessSiteView } from "@/components/business-site-view";
type Props = { params: Promise<{ slug: string }> };
export function generateStaticParams() { return getBusinessSites().map((site) => ({ slug: site.slug })); }
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params; const site = getBusinessSite(slug);
  return site ? { title: site.seo.title, description: site.seo.description, openGraph: { title: site.seo.title, description: site.seo.description, type: "website" } } : {};
}
export default async function DemoPage({ params }: Props) {
  const { slug } = await params; const site = getBusinessSite(slug);
  if (!site || site.status === "draft") notFound();
  return <BusinessSiteView site={site} />;
}

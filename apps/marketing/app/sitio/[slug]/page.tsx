import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getBusinessSite, getPublishedSites } from "@/data/sites";
import { BusinessSiteView } from "@/components/business-site-view";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getPublishedSites().map((site) => ({ slug: site.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const site = getBusinessSite(slug);
  if (!site || site.status !== "published") return {};
  return {
    title: site.seo.title,
    description: site.seo.description,
    openGraph: { title: site.seo.title, description: site.seo.description, type: "website" },
  };
}

export default async function PublishedSitePage({ params }: Props) {
  const { slug } = await params;
  const site = getBusinessSite(slug);
  if (!site || site.status !== "published") notFound();
  return <BusinessSiteView site={site} />;
}

import type { Metadata } from "next";
import type { ReactNode } from "react";
import { landingConfig } from "@/data/landingConfig";
import "./globals.css";

export const metadata: Metadata = {
  title: landingConfig.metadata.title,
  description: landingConfig.metadata.description,
  openGraph: {
    title: landingConfig.metadata.title,
    description: landingConfig.metadata.description,
    locale: "es_AR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="es-AR">
      <body>{children}</body>
    </html>
  );
}
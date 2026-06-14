import type { Metadata, Viewport } from "next";
import "./globals.css";
import BottomNav from "@/components/BottomNav";

export const metadata: Metadata = {
  title: "MadRing Guide — GP Madrid 2026",
  description: "Tu guía definitiva para el Gran Premio de Fórmula 1 de Madrid 2026.",
  keywords: ["F1", "Formula 1", "Gran Premio Madrid", "GP España 2026", "MADRING", "IFEMA"],
  applicationName: "MadRing Guide", manifest: "/manifest.json",
  appleWebApp: { capable: true, statusBarStyle: "black-translucent", title: "MadRing" },
  openGraph: { type: "website", locale: "es_ES", title: "MadRing Guide — GP Madrid 2026", description: "Tu guía para el fin de semana más rápido de la capital.", siteName: "MadRing Guide", images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "MadRing Guide" }] },
  twitter: { card: "summary_large_image", title: "MadRing Guide — GP Madrid 2026", description: "Tu guía para el fin de semana más rápido de la capital.", images: ["/og-image.jpg"] },
};
export const viewport: Viewport = { themeColor: "#E8001D", width: "device-width", initialScale: 1, viewportFit: "cover" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head><meta name="mobile-web-app-capable" content="yes" /></head>
      <body>{children}<BottomNav /></body>
    </html>
  );
}

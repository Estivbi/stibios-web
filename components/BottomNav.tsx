"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
const TABS = [
  { href: "/", icon: "🏁", label: "Inicio" },
  { href: "/agenda", icon: "📅", label: "Agenda" },
  { href: "/mapa", icon: "🗺️", label: "Mapa" },
  { href: "/transporte", icon: "🚇", label: "Cómo ir" },
  { href: "/zonas", icon: "📍", label: "Zonas" },
] as const;
export default function BottomNav() {
  const pathname = usePathname();
  return (
    <nav style={{ position: "fixed", bottom: 0, left: 0, right: 0, background: "rgba(14,14,16,0.97)", backdropFilter: "blur(12px)", borderTop: "1px solid #2E2E36", display: "flex", paddingBottom: "max(8px, env(safe-area-inset-bottom))", zIndex: 100 }}>
      {TABS.map(({ href, icon, label }) => {
        const active = pathname === href;
        return (
          <Link key={href} href={href} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 3, padding: "8px 0", color: active ? "#E8001D" : "#7A7A8A", textDecoration: "none", transition: "color 0.15s" }}>
            <span style={{ fontSize: 20 }}>{icon}</span>
            <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 10, fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase" }}>{label}</span>
          </Link>
        );
      })}
    </nav>
  );
}

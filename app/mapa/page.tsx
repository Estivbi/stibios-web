import Header from "@/components/Header";
import MapClient from "@/components/MapClient";
export const metadata = { title: "Mapa — MadRing Guide" };
const LEGEND = [
  { color: "#E8001D", label: "MADRING — Circuito principal (IFEMA)" },
  { color: "#C9A84C", label: "Estadio Metropolitano — Concierto" },
  { color: "#4A9EFF", label: "Fan Zones ciudad" },
  { color: "#1DB954", label: "Estaciones metro L8" },
];
export default function MapaPage() {
  return (
    <><Header />
    <main style={{ paddingTop: 52 }} className="pb-safe">
      <section style={{ padding: "48px 20px", borderTop: "1px solid #2E2E36" }}>
        <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 11, fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: "#E8001D", marginBottom: 20 }}>Ubicaciones clave</div>
        <h1 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 32, fontWeight: 900, textTransform: "uppercase", marginBottom: 20, lineHeight: 1, color: "#F5F5F7" }}>Mapa</h1>
        <MapClient />
        <div style={{ display: "flex", flexDirection: "column", gap: 8, marginTop: 16 }}>
          {LEGEND.map(({ color, label }) => (
            <div key={label} style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 13, color: "#F5F5F7" }}>
              <div style={{ width: 10, height: 10, borderRadius: "50%", background: color, flexShrink: 0 }} />{label}
            </div>
          ))}
        </div>
      </section>
    </main></>
  );
}

import Header from "@/components/Header";
import ZonasClient from "@/components/ZonasClient";
export const metadata = { title: "Zonas — MadRing Guide" };
export default function ZonasPage() {
  return (
    <><Header />
    <main style={{ paddingTop: 52 }} className="pb-safe">
      <section style={{ padding: "48px 20px", borderTop: "1px solid #2E2E36" }}>
        <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 11, fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: "#E8001D", marginBottom: 20 }}>Dentro del circuito</div>
        <h1 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 32, fontWeight: 900, textTransform: "uppercase", marginBottom: 20, lineHeight: 1, color: "#F5F5F7" }}>Zonas</h1>
        <ZonasClient />
      </section>
    </main></>
  );
}

import Header from "@/components/Header";
import ZonasClient from "@/components/ZonasClient";
import TicketAffiliate from "@/components/TicketAffiliate";

export const metadata = {
  title: "Zonas — MadRing Guide",
  description: "Zonas del circuito MADRING: Platinum Paddock Club, Gold Stand, General y Fan Zone.",
};

export default function ZonasPage() {
  return (
    <>
      <Header />
      <main style={{ paddingTop: 52 }} className="pb-safe">
        <section style={{ padding: "48px 20px", borderTop: "1px solid #2E2E36" }}>
          <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 11, fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: "#E8001D", marginBottom: 20 }}>
            Dentro del circuito
          </div>
          <h1 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 32, fontWeight: 900, textTransform: "uppercase", marginBottom: 20, lineHeight: 1, color: "#F5F5F7" }}>
            Zonas
          </h1>
          <TicketAffiliate label="¿Aún sin entrada? Encuentra la tuya antes de que se agoten." />
          <ZonasClient />
        </section>
      </main>
    </>
  );
}

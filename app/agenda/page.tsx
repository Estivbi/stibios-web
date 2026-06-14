import Header from "@/components/Header";
import AgendaClient from "@/components/AgendaClient";
import { SkeletonRow } from "@/components/SkeletonLoader";
import { Suspense } from "react";
export const metadata = { title: "Agenda — MadRing Guide" };
interface Props { searchParams: Promise<{ day?: string }>; }
export default async function AgendaPage({ searchParams }: Props) {
  const { day } = await searchParams;
  return (
    <><Header />
    <main style={{ paddingTop: 52 }} className="pb-safe">
      <section style={{ padding: "48px 20px", borderTop: "1px solid #2E2E36" }}>
        <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 11, fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: "#E8001D", marginBottom: 20 }}>Programa completo</div>
        <h1 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 32, fontWeight: 900, textTransform: "uppercase", marginBottom: 20, lineHeight: 1, color: "#F5F5F7" }}>Agenda</h1>
        <Suspense fallback={<div style={{ display: "flex", flexDirection: "column", gap: 2 }}>{Array.from({ length: 5 }).map((_, i) => <SkeletonRow key={i} />)}</div>}>
          <AgendaClient initialDay={day ?? "sab"} />
        </Suspense>
      </section>
    </main></>
  );
}

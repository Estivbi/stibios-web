"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Header from "@/components/Header";
import Countdown from "@/components/Countdown";
import TicketModal from "@/components/TicketModal";

export default function HomePage() {
  const router = useRouter();
  const [modalOpen, setModalOpen] = useState(false);
  function handleTicketSelect(type: "platinum" | "gold" | "general") {
    if (typeof window !== "undefined") localStorage.setItem("ticketType", type);
    router.push("/zonas");
  }
  return (
    <>
      <Header />
      <main style={{ minHeight: "100dvh", display: "flex", flexDirection: "column", justifyContent: "flex-end", padding: "80px 20px max(100px, calc(80px + env(safe-area-inset-bottom)))", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 4, background: "#E8001D", zIndex: 3 }} />
        <div aria-hidden="true" style={{ position: "absolute", top: 52, left: 0, right: 0, bottom: 0, overflow: "hidden", pointerEvents: "none" }}>
          <div style={{ position: "absolute", top: "-20%", left: "50%", transform: "translateX(-50%) perspective(600px) rotateX(55deg)", width: 2, height: "160%", background: "repeating-linear-gradient(to bottom, #2E2E36 0px, #2E2E36 30px, transparent 30px, transparent 60px)" }} />
          <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at 50% 100%, transparent 30%, #0E0E10 75%)" }} />
        </div>
        <div style={{ position: "relative", zIndex: 2 }}>
          <Countdown />
          <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 12, fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: "#E8001D", marginBottom: 12 }}>Formula 1 · Gran Premio de España 2026</div>
          <h1 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: "clamp(48px, 14vw, 80px)", lineHeight: 0.9, textTransform: "uppercase", letterSpacing: "-0.01em", marginBottom: 8, color: "#F5F5F7" }}>Madrid<br />en <span style={{ color: "#E8001D" }}>pole</span></h1>
          <p style={{ fontSize: 14, color: "#7A7A8A", marginBottom: 32 }}>Tu guía para el fin de semana más rápido de la capital</p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
            <button onClick={() => setModalOpen(true)} style={{ background: "#E8001D", color: "#F5F5F7", borderRadius: 12, padding: "20px 16px", cursor: "pointer", position: "relative", overflow: "hidden", textAlign: "left", border: "none", transition: "transform 0.15s" }}>
              <div style={{ position: "absolute", top: -30, right: -30, width: 100, height: 100, background: "rgba(255,255,255,0.08)", borderRadius: "50%" }} />
              <span style={{ fontSize: 28, display: "block", marginBottom: 10 }}>🎫</span>
              <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 20, fontWeight: 700, textTransform: "uppercase", lineHeight: 1.1, marginBottom: 4 }}>Tengo<br />entrada</div>
              <div style={{ fontSize: 12, opacity: 0.75, lineHeight: 1.4 }}>Zonas, accesos y qué hacer en el recinto</div>
              <span style={{ position: "absolute", bottom: 16, right: 16, fontSize: 18, opacity: 0.5 }}>→</span>
            </button>
            <button onClick={() => router.push("/agenda?day=free")} style={{ background: "#26262C", border: "1px solid #2E2E36", color: "#F5F5F7", borderRadius: 12, padding: "20px 16px", cursor: "pointer", position: "relative", textAlign: "left", transition: "transform 0.15s" }}>
              <span style={{ fontSize: 28, display: "block", marginBottom: 10 }}>🎉</span>
              <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 20, fontWeight: 700, textTransform: "uppercase", lineHeight: 1.1, marginBottom: 4 }}>Sin<br />entrada</div>
              <div style={{ fontSize: 12, opacity: 0.75, lineHeight: 1.4 }}>Espectáculos gratis y ambiente en la ciudad</div>
              <span style={{ position: "absolute", bottom: 16, right: 16, fontSize: 18, opacity: 0.5 }}>→</span>
            </button>
          </div>
        </div>
      </main>
      <TicketModal open={modalOpen} onClose={() => setModalOpen(false)} onSelect={handleTicketSelect} />
    </>
  );
}

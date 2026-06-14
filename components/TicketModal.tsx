"use client";
import { useEffect } from "react";
type TicketType = "platinum" | "gold" | "general";
interface Props { open: boolean; onClose: () => void; onSelect: (type: TicketType) => void; }
const OPTIONS = [
  { type: "platinum" as TicketType, icon: "💎", label: "Platinum", sub: "Paddock Club + todas las zonas" },
  { type: "gold"     as TicketType, icon: "🥇", label: "Gold",     sub: "Tribuna Pit Lane + stands Gold" },
  { type: "general"  as TicketType, icon: "🎫", label: "General",  sub: "Zonas generales y Fan Zone" },
];
export default function TicketModal({ open, onClose, onSelect }: Props) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    if (open) document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose]);
  if (!open) return null;
  return (
    <div role="dialog" aria-modal="true" onClick={(e) => { if (e.target === e.currentTarget) onClose(); }} style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.8)", zIndex: 200, display: "flex", alignItems: "flex-end" }}>
      <div style={{ background: "#1A1A1E", borderRadius: "20px 20px 0 0", width: "100%", padding: "24px 20px max(40px, calc(20px + env(safe-area-inset-bottom)))", borderTop: "1px solid #2E2E36", animation: "slideUp 0.25s ease" }}>
        <div style={{ width: 40, height: 4, background: "#2E2E36", borderRadius: 2, margin: "0 auto 20px" }} />
        <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 22, fontWeight: 900, textTransform: "uppercase", marginBottom: 16, color: "#F5F5F7" }}>¿Qué tipo de entrada tienes?</div>
        {OPTIONS.map(({ type, icon, label, sub }) => (
          <button key={type} onClick={() => { onSelect(type); onClose(); }} style={{ width: "100%", display: "flex", alignItems: "center", gap: 14, padding: 14, background: "#26262C", borderRadius: 10, marginBottom: 8, cursor: "pointer", border: "1px solid #2E2E36", textAlign: "left", transition: "border-color 0.15s" }} onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "#E8001D"; }} onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "#2E2E36"; }}>
            <span style={{ fontSize: 24 }}>{icon}</span>
            <div><div style={{ fontSize: 14, fontWeight: 500, color: "#F5F5F7" }}>{label}</div><div style={{ fontSize: 12, color: "#7A7A8A" }}>{sub}</div></div>
          </button>
        ))}
      </div>
      <style>{`@keyframes slideUp { from { transform: translateY(100%); } to { transform: translateY(0); } }`}</style>
    </div>
  );
}

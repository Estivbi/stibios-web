"use client";
import { useEffect, useState } from "react";
import { supabase, type Zone } from "@/lib/supabase";
import { SEED_ZONES } from "@/lib/seed-data";
import { SkeletonCard } from "@/components/SkeletonLoader";
const TICKET_LABELS: Record<string, { label: string; color: string; bg: string }> = {
  all: { label: "Todos", color: "#1DB954", bg: "rgba(29,185,84,0.12)" },
  general: { label: "General", color: "#F5F5F7", bg: "#26262C" },
  gold: { label: "Gold+", color: "#C9A84C", bg: "rgba(201,168,76,0.12)" },
  platinum: { label: "Platinum", color: "#E8001D", bg: "rgba(232,0,29,0.12)" },
  separate: { label: "Entrada sep.", color: "#7A7A8A", bg: "#26262C" },
};
const PRIORITY: Record<string, number> = { platinum: 3, gold: 2, general: 1, all: 0, separate: 0 };
function canAccess(zone: Zone, t: string) { return zone.ticket_type === "all" || zone.ticket_type === "separate" || PRIORITY[t] >= PRIORITY[zone.ticket_type]; }
export default function ZonasClient() {
  const [zones, setZones] = useState<Zone[]>([]);
  const [loading, setLoading] = useState(true);
  const [ticketType, setTicketType] = useState<string | null>(null);
  useEffect(() => {
    setTicketType(localStorage.getItem("ticketType"));
    async function load() {
      setLoading(true);
      try { if (supabase) { const { data, error } = await supabase.from("zones").select("*").order("number"); if (!error && data && data.length > 0) { setZones(data as Zone[]); setLoading(false); return; } } } catch {}
      setZones(SEED_ZONES); setLoading(false);
    }
    load();
  }, []);
  const displayed = loading ? [] : ticketType ? zones.filter((z) => canAccess(z, ticketType)) : zones;
  return (
    <>
      {ticketType && (
        <div style={{ background: "rgba(232,0,29,0.08)", border: "1px solid rgba(232,0,29,0.2)", borderRadius: 10, padding: "10px 14px", marginBottom: 16, fontSize: 13, color: "#F5F5F7", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <span>Zonas para entrada <strong style={{ color: "#E8001D", textTransform: "capitalize" }}>{ticketType}</strong></span>
          <button onClick={() => { localStorage.removeItem("ticketType"); setTicketType(null); }} style={{ background: "none", border: "none", color: "#7A7A8A", cursor: "pointer", fontSize: 12 }}>Ver todas</button>
        </div>
      )}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
        {loading ? Array.from({ length: 6 }).map((_, i) => <SkeletonCard key={i} />) : displayed.map((zone) => {
          const tag = TICKET_LABELS[zone.ticket_type] ?? TICKET_LABELS.general;
          return (
            <div key={zone.id} style={{ background: "#1A1A1E", border: "1px solid #2E2E36", borderRadius: 10, padding: 16 }}>
              <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 40, fontWeight: 900, color: "#2E2E36", lineHeight: 1, marginBottom: 4 }}>{String(zone.number).padStart(2, "0")}</div>
              <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 16, fontWeight: 700, textTransform: "uppercase", marginBottom: 6, lineHeight: 1.1, color: "#F5F5F7" }}>{zone.name}</div>
              <div style={{ fontSize: 12, color: "#7A7A8A", lineHeight: 1.4, marginBottom: 8 }}>{zone.description}</div>
              <span style={{ display: "inline-block", fontFamily: "'Barlow Condensed', sans-serif", fontSize: 10, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", padding: "3px 8px", borderRadius: 4, background: tag.bg, color: tag.color }}>{tag.label}</span>
            </div>
          );
        })}
      </div>
    </>
  );
}

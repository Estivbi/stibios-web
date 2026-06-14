"use client";
import { useState, useEffect, useCallback } from "react";
import { supabase, type Event } from "@/lib/supabase";
import { SEED_EVENTS } from "@/lib/seed-data";
import { SkeletonRow } from "@/components/SkeletonLoader";
const DAYS = [{ key: "vie", label: "Vie 11" }, { key: "sab", label: "Sáb 12" }, { key: "dom", label: "Dom 13" }, { key: "free", label: "🎉 Gratis" }] as const;
const TYPE_COLORS: Record<string, string> = { f1: "#E8001D", f2: "#C9A84C", f3: "#4A9EFF", show: "#1DB954" };
function EventRow({ event }: { event: Event }) {
  const [saved, setSaved] = useState(false);
  useEffect(() => { const favs: string[] = JSON.parse(localStorage.getItem("favEvents") ?? "[]"); setSaved(favs.includes(event.id)); }, [event.id]);
  function toggleFav() {
    const favs: string[] = JSON.parse(localStorage.getItem("favEvents") ?? "[]");
    const next = favs.includes(event.id) ? favs.filter((id) => id !== event.id) : [...favs, event.id];
    localStorage.setItem("favEvents", JSON.stringify(next)); setSaved(next.includes(event.id));
  }
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 12, padding: "12px 14px", background: "#1A1A1E", borderRadius: 8, borderLeft: `3px solid ${TYPE_COLORS[event.type ?? ""] ?? "#2E2E36"}` }}>
      <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 16, fontWeight: 700, minWidth: 52, color: "#7A7A8A", flexShrink: 0 }}>{event.time_label}</div>
      <div style={{ flex: 1 }}>
        <div style={{ fontSize: 14, fontWeight: 500, marginBottom: 2, color: "#F5F5F7" }}>{event.name}{!event.is_confirmed && <span style={{ fontSize: 10, color: "#7A7A8A", marginLeft: 6 }}>⚠ pendiente</span>}</div>
        <div style={{ fontSize: 11, color: "#7A7A8A" }}>{event.category}</div>
      </div>
      {event.badge && <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 10, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", padding: "3px 7px", borderRadius: 4, background: "#26262C", color: "#7A7A8A", flexShrink: 0 }}>{event.badge}</div>}
      <button onClick={toggleFav} title={saved ? "Quitar" : "Guardar"} style={{ background: "none", border: "none", cursor: "pointer", fontSize: 16, flexShrink: 0, opacity: saved ? 1 : 0.35, transition: "opacity 0.15s" }}>⭐</button>
    </div>
  );
}
export default function AgendaClient({ initialDay }: { initialDay?: string }) {
  const [day, setDay] = useState(initialDay ?? "sab");
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);
  const loadEvents = useCallback(async (d: string) => {
    setLoading(true);
    try { if (supabase) { const { data, error } = await supabase.from("events").select("*").eq("day", d).order("time_label"); if (!error && data) { setEvents(data as Event[]); setLoading(false); return; } } } catch {}
    setEvents(SEED_EVENTS.filter((e) => e.day === d)); setLoading(false);
  }, []);
  useEffect(() => { loadEvents(day); }, [day, loadEvents]);
  return (
    <>
      <div style={{ display: "flex", gap: 6, marginBottom: 20, overflowX: "auto", scrollbarWidth: "none" }}>
        {DAYS.map(({ key, label }) => (<button key={key} onClick={() => setDay(key)} style={{ flexShrink: 0, background: day === key ? "#E8001D" : "#26262C", border: `1px solid ${day === key ? "#E8001D" : "#2E2E36"}`, borderRadius: 8, padding: "8px 14px", cursor: "pointer", fontFamily: "'Barlow Condensed', sans-serif", fontSize: 13, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.06em", color: day === key ? "#F5F5F7" : "#7A7A8A", transition: "all 0.15s" }}>{label}</button>))}
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
        {loading ? Array.from({ length: 5 }).map((_, i) => <SkeletonRow key={i} />) : events.length === 0 ? <div style={{ color: "#7A7A8A", fontSize: 14, padding: "24px 0", textAlign: "center" }}>No hay eventos.</div> : events.map((ev) => <EventRow key={ev.id} event={ev} />)}
      </div>
    </>
  );
}

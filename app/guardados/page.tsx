"use client";

import { useState, useEffect } from "react";
import { SEED_EVENTS } from "@/lib/seed-data";
import type { Event } from "@/lib/supabase";

const TYPE_COLORS: Record<string, string> = {
  f1: "#E8001D", f2: "#C9A84C", f3: "#4A9EFF", show: "#1DB954",
};

const DAY_LABELS: Record<string, string> = {
  vie: "Viernes 11 Sep", sab: "Sábado 12 Sep", dom: "Domingo 13 Sep", free: "Gratis / Ciudad",
};

export default function GuardadosPage() {
  const [saved, setSaved] = useState<Event[]>([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const ids: string[] = JSON.parse(localStorage.getItem("favEvents") ?? "[]");
    const all = SEED_EVENTS as Event[];
    setSaved(all.filter((e) => ids.includes(e.id)));
    setLoaded(true);
  }, []);

  function remove(id: string) {
    const ids: string[] = JSON.parse(localStorage.getItem("favEvents") ?? "[]");
    const next = ids.filter((i) => i !== id);
    localStorage.setItem("favEvents", JSON.stringify(next));
    setSaved((prev) => prev.filter((e) => e.id !== id));
  }

  const byDay = saved.reduce<Record<string, Event[]>>((acc, e) => {
    (acc[e.day] ??= []).push(e);
    return acc;
  }, {});

  return (
    <main style={{ padding: "24px 16px 100px", maxWidth: 640, margin: "0 auto" }}>
      <h1 style={{
        fontFamily: "'Barlow Condensed', sans-serif", fontSize: 28, fontWeight: 800,
        textTransform: "uppercase", letterSpacing: "0.05em", color: "#F5F5F7",
        marginBottom: 4,
      }}>
        ⭐ Guardados
      </h1>
      <p style={{ color: "#7A7A8A", fontSize: 13, marginBottom: 24 }}>
        Tus eventos marcados como favoritos.
      </p>

      {!loaded ? null : saved.length === 0 ? (
        <div style={{
          textAlign: "center", padding: "48px 24px",
          background: "#1A1A1E", borderRadius: 12,
          color: "#7A7A8A", fontSize: 14, lineHeight: 1.6,
        }}>
          <div style={{ fontSize: 40, marginBottom: 12 }}>⭐</div>
          <div style={{ fontWeight: 600, marginBottom: 6, color: "#F5F5F7" }}>
            Aún no tienes favoritos
          </div>
          <div>Pulsa la estrella en cualquier evento de la Agenda para guardarlo aquí.</div>
        </div>
      ) : (
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          {["vie", "sab", "dom", "free"].filter((d) => byDay[d]).map((day) => (
            <section key={day}>
              <h2 style={{
                fontFamily: "'Barlow Condensed', sans-serif", fontSize: 13, fontWeight: 700,
                textTransform: "uppercase", letterSpacing: "0.1em",
                color: "#7A7A8A", marginBottom: 8,
              }}>
                {DAY_LABELS[day]}
              </h2>
              <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
                {byDay[day].map((ev) => (
                  <div key={ev.id} style={{
                    display: "flex", alignItems: "center", gap: 12, padding: "12px 14px",
                    background: "#1A1A1E", borderRadius: 8,
                    borderLeft: `3px solid ${TYPE_COLORS[ev.type ?? ""] ?? "#2E2E36"}`,
                  }}>
                    <div style={{
                      fontFamily: "'Barlow Condensed', sans-serif", fontSize: 16, fontWeight: 700,
                      minWidth: 52, color: "#7A7A8A", flexShrink: 0,
                    }}>
                      {ev.time_label}
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: 14, fontWeight: 500, color: "#F5F5F7" }}>
                        {ev.name}
                      </div>
                      <div style={{ fontSize: 11, color: "#7A7A8A" }}>{ev.category}</div>
                    </div>
                    {ev.badge && (
                      <div style={{
                        fontFamily: "'Barlow Condensed', sans-serif", fontSize: 10, fontWeight: 700,
                        letterSpacing: "0.08em", textTransform: "uppercase", padding: "3px 7px",
                        borderRadius: 4, background: "#26262C", color: "#7A7A8A", flexShrink: 0,
                      }}>
                        {ev.badge}
                      </div>
                    )}
                    <button
                      onClick={() => remove(ev.id)}
                      title="Quitar de favoritos"
                      style={{
                        background: "none", border: "none", cursor: "pointer",
                        fontSize: 16, flexShrink: 0, color: "#E8001D",
                      }}
                    >✕</button>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      )}
    </main>
  );
}

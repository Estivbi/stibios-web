"use client";
import { useEffect, useState } from "react";
import { supabase, type TransportOption } from "@/lib/supabase";
import { SEED_TRANSPORT } from "@/lib/seed-data";
export default function TransportClient() {
  const [options, setOptions] = useState<TransportOption[]>(SEED_TRANSPORT);
  useEffect(() => {
    async function load() {
      try { if (supabase) { const { data, error } = await supabase.from("transport_options").select("*").order("sort_order"); if (!error && data && data.length > 0) setOptions(data as TransportOption[]); } } catch {}
    }
    load();
  }, []);
  return (
    <>
      <div style={{ background: "rgba(232,0,29,0.1)", border: "1px solid rgba(232,0,29,0.3)", borderRadius: 10, padding: 14, marginBottom: 16, fontSize: 13, lineHeight: 1.5, color: "#F5F5F7" }}><strong style={{ color: "#E8001D" }}>MADRING está en IFEMA.</strong> A 20 min del centro, 5 min del aeropuerto T4. Los días de carrera, el metro refuerza frecuencias en la línea 8.</div>
      <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
        {options.map((opt) => (
          <div key={opt.id} style={{ display: "flex", alignItems: "flex-start", gap: 14, padding: 14, background: "#1A1A1E", borderRadius: 8 }}>
            <div style={{ fontSize: 22, flexShrink: 0, marginTop: 1 }}>{opt.icon}</div>
            <div style={{ flex: 1 }}><div style={{ fontSize: 14, fontWeight: 600, marginBottom: 3, color: "#F5F5F7" }}>{opt.title}</div><div style={{ fontSize: 12, color: "#7A7A8A", lineHeight: 1.5, whiteSpace: "pre-line" }}>{opt.detail}</div></div>
            <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 22, fontWeight: 900, color: "#E8001D", flexShrink: 0, alignSelf: "center" }}>{opt.time_estimate}</div>
          </div>
        ))}
      </div>
    </>
  );
}

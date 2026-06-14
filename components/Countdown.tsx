"use client";
import { useEffect, useState } from "react";
const RACE_DATE = new Date("2026-09-11T09:00:00+02:00");
function getTimeLeft() {
  const diff = RACE_DATE.getTime() - Date.now();
  if (diff <= 0) return { days: 0, hours: 0, mins: 0 };
  return { days: Math.floor(diff / 86400000), hours: Math.floor((diff % 86400000) / 3600000), mins: Math.floor((diff % 3600000) / 60000) };
}
export default function Countdown() {
  const [time, setTime] = useState(getTimeLeft);
  useEffect(() => { const id = setInterval(() => setTime(getTimeLeft()), 30000); return () => clearInterval(id); }, []);
  const units = [{ value: time.days, label: "días" }, { value: time.hours, label: "horas" }, { value: time.mins, label: "min" }] as const;
  return (
    <div style={{ display: "flex", gap: 4, marginBottom: 32, position: "relative", zIndex: 2 }}>
      {units.map(({ value, label }, i) => (
        <div key={label} style={{ display: "contents" }}>
          <div style={{ background: "#1A1A1E", border: "1px solid #2E2E36", borderRadius: 6, padding: "10px 14px", textAlign: "center", minWidth: 56 }}>
            <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 28, fontWeight: 900, lineHeight: 1, color: "#F5F5F7" }}>{String(value).padStart(2, "0")}</div>
            <div style={{ fontSize: 9, fontWeight: 500, letterSpacing: "0.08em", textTransform: "uppercase", color: "#7A7A8A", marginTop: 4 }}>{label}</div>
          </div>
          {i < 2 && <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 28, fontWeight: 900, color: "#E8001D", alignSelf: "flex-start", paddingTop: 10 }}>:</div>}
        </div>
      ))}
    </div>
  );
}

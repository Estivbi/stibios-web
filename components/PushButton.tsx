"use client";

import { useState, useEffect } from "react";

const VAPID_PUBLIC = process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY ?? "";

function urlBase64ToUint8Array(base64String: string) {
  const padding = "=".repeat((4 - (base64String.length % 4)) % 4);
  const base64 = (base64String + padding).replace(/-/g, "+").replace(/_/g, "/");
  const raw = atob(base64);
  return Uint8Array.from([...raw].map((c) => c.charCodeAt(0)));
}

type PermState = "default" | "granted" | "denied" | "unsupported";

export default function PushButton() {
  const [state, setState] = useState<PermState>("default");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!("Notification" in window) || !("serviceWorker" in navigator)) {
      setState("unsupported");
      return;
    }
    if (Notification.permission === "granted") setState("granted");
    else if (Notification.permission === "denied") setState("denied");
  }, []);

  async function subscribe() {
    if (!VAPID_PUBLIC) return;
    setLoading(true);
    try {
      const reg = await navigator.serviceWorker.ready;
      const sub = await reg.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: urlBase64ToUint8Array(VAPID_PUBLIC),
      });
      await fetch("/api/push/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(sub),
      });
      setState("granted");
    } catch {
      setState("denied");
    } finally {
      setLoading(false);
    }
  }

  if (state === "unsupported") return null;

  if (state === "granted") {
    return (
      <div style={{
        display: "flex", alignItems: "center", gap: 8, padding: "10px 14px",
        background: "#1A1A1E", borderRadius: 10, fontSize: 13, color: "#1DB954",
      }}>
        <span>🔔</span>
        <span>Notificaciones activadas</span>
      </div>
    );
  }

  return (
    <button
      onClick={subscribe}
      disabled={loading || state === "denied"}
      style={{
        width: "100%", padding: "12px 16px",
        background: state === "denied" ? "#26262C" : "#E8001D",
        border: "none", borderRadius: 10, cursor: state === "denied" ? "default" : "pointer",
        fontFamily: "'Barlow Condensed', sans-serif", fontSize: 15, fontWeight: 700,
        textTransform: "uppercase", letterSpacing: "0.06em",
        color: state === "denied" ? "#7A7A8A" : "#F5F5F7",
        transition: "opacity 0.15s", opacity: loading ? 0.7 : 1,
        display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
      }}
    >
      <span>{state === "denied" ? "🔕" : "🔔"}</span>
      {state === "denied"
        ? "Notificaciones bloqueadas — actívalas en ajustes"
        : loading ? "Activando…" : "Activar notificaciones"}
    </button>
  );
}

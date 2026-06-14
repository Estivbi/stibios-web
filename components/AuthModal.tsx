"use client";

import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function AuthModal({ open, onClose }: Props) {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!open) { setSent(false); setEmail(""); setError(""); }
  }, [open]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) { if (e.key === "Escape") onClose(); }
    if (open) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  async function send() {
    if (!supabase) return;
    setLoading(true); setError("");
    const { error: err } = await supabase.auth.signInWithOtp({
      email,
      options: { emailRedirectTo: window.location.origin },
    });
    if (err) setError(err.message);
    else setSent(true);
    setLoading(false);
  }

  if (!open) return null;

  return (
    <>
      <div onClick={onClose} style={{
        position: "fixed", inset: 0, background: "rgba(0,0,0,0.7)", zIndex: 200,
      }} />
      <div style={{
        position: "fixed", bottom: 0, left: 0, right: 0,
        background: "#1A1A1E", borderRadius: "20px 20px 0 0",
        padding: "28px 20px max(24px,env(safe-area-inset-bottom))",
        zIndex: 201, maxWidth: 480, margin: "0 auto",
        animation: "slideUp 0.25s ease",
      }}>
        <h2 style={{
          fontFamily: "'Barlow Condensed', sans-serif", fontSize: 22, fontWeight: 800,
          textTransform: "uppercase", letterSpacing: "0.05em",
          color: "#F5F5F7", marginBottom: 6,
        }}>
          Sincroniza tus favoritos
        </h2>
        <p style={{ color: "#7A7A8A", fontSize: 13, marginBottom: 20, lineHeight: 1.5 }}>
          Introduce tu email y te mandamos un enlace mágico para acceder en cualquier dispositivo.
        </p>

        {!sent ? (
          <>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && send()}
              placeholder="tu@email.com"
              style={{
                width: "100%", padding: "12px 14px", borderRadius: 10,
                background: "#26262C", border: "1px solid #2E2E36",
                color: "#F5F5F7", fontSize: 15, outline: "none",
                boxSizing: "border-box", marginBottom: 12,
              }}
            />
            {error && <p style={{ color: "#E8001D", fontSize: 12, marginBottom: 8 }}>{error}</p>}
            <button
              onClick={send}
              disabled={!email || loading || !supabase}
              style={{
                width: "100%", padding: "13px 16px",
                background: email && !loading ? "#E8001D" : "#26262C",
                border: "none", borderRadius: 10,
                cursor: email && !loading ? "pointer" : "default",
                fontFamily: "'Barlow Condensed', sans-serif", fontSize: 16, fontWeight: 700,
                textTransform: "uppercase", letterSpacing: "0.06em",
                color: email && !loading ? "#F5F5F7" : "#7A7A8A",
                transition: "all 0.15s",
              }}
            >
              {!supabase ? "Configura Supabase primero" : loading ? "Enviando…" : "Enviar enlace mágico"}
            </button>
          </>
        ) : (
          <div style={{
            textAlign: "center", padding: "20px 0",
            color: "#1DB954", fontSize: 15, lineHeight: 1.6,
          }}>
            <div style={{ fontSize: 36, marginBottom: 10 }}>📬</div>
            <div style={{ fontWeight: 600, color: "#F5F5F7" }}>¡Revisa tu email!</div>
            <div style={{ color: "#7A7A8A", fontSize: 13 }}>
              Hemos enviado un enlace a <strong style={{ color: "#F5F5F7" }}>{email}</strong>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

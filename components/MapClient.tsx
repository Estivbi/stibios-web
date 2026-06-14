"use client";
import { useEffect, useRef } from "react";
const MARKERS = [
  { lng: -3.6147, lat: 40.4729, color: "#E8001D", label: "MADRING — Circuito IFEMA" },
  { lng: -3.5990, lat: 40.4360, color: "#C9A84C", label: "Estadio Metropolitano" },
  { lng: -3.7036, lat: 40.4168, color: "#4A9EFF", label: "Fan Zone Gran Vía" },
  { lng: -3.7230, lat: 40.4155, color: "#4A9EFF", label: "Fan Zone Plaza Mayor" },
  { lng: -3.6925, lat: 40.4450, color: "#1DB954", label: "Metro Nuevos Ministerios (L8)" },
  { lng: -3.5709, lat: 40.4716, color: "#1DB954", label: "Metro Campo de las Naciones (L8)" },
];
const STYLE_URL = process.env.NEXT_PUBLIC_MAPLIBRE_STYLE ?? "https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json";
export default function MapClient() {
  const containerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    let map: import("maplibre-gl").Map | undefined;
    async function init() {
      if (!containerRef.current) return;
      const ml = await import("maplibre-gl");
      await import("maplibre-gl/dist/maplibre-gl.css");
      map = new ml.Map({ container: containerRef.current, style: STYLE_URL, center: [-3.640, 40.445], zoom: 11, attributionControl: false });
      map.addControl(new ml.AttributionControl({ compact: true }), "bottom-left");
      map.addControl(new ml.NavigationControl({ showCompass: false }), "top-right");
      map.on("load", () => {
        MARKERS.forEach(({ lng, lat, color, label }) => {
          const el = document.createElement("div");
          el.style.cssText = `width:14px;height:14px;border-radius:50%;background:${color};border:2px solid #0E0E10;box-shadow:0 0 8px ${color}80;cursor:pointer;`;
          new ml.Marker({ element: el }).setLngLat([lng, lat]).setPopup(new ml.Popup({ offset: 12, closeButton: false }).setHTML(`<div style="font-family:'Inter',sans-serif;font-size:12px;color:#F5F5F7;background:#1A1A1E;border:1px solid #2E2E36;padding:8px 10px;border-radius:6px;white-space:nowrap;">${label}</div>`)).addTo(map!);
        });
      });
    }
    init(); return () => map?.remove();
  }, []);
  return <div ref={containerRef} style={{ width: "100%", height: 340, borderRadius: 12, overflow: "hidden", border: "1px solid #2E2E36", background: "#1A1A1E" }} />;
}

export const metadata = { title: "Sin conexión — MadRing Guide" };
export default function OfflinePage() {
  return (
    <main style={{ minHeight: "100dvh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "0 24px", textAlign: "center", background: "#0E0E10", color: "#F5F5F7" }}>
      <div style={{ fontSize: 56, marginBottom: 16 }}>📡</div>
      <h1 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 36, fontWeight: 900, textTransform: "uppercase", marginBottom: 12 }}>Sin conexión</h1>
      <p style={{ fontSize: 15, color: "#7A7A8A", lineHeight: 1.6, maxWidth: 280 }}>Mostrando datos guardados. La agenda y las zonas siguen disponibles desde caché.</p>
      <a href="/" style={{ display: "inline-block", marginTop: 28, background: "#E8001D", color: "#F5F5F7", padding: "12px 24px", borderRadius: 8, fontFamily: "'Barlow Condensed', sans-serif", fontSize: 16, fontWeight: 700, textTransform: "uppercase", textDecoration: "none" }}>Ir a inicio</a>
    </main>
  );
}

export default function Header() {
  return (
    <header style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, background: "rgba(14,14,16,0.92)", backdropFilter: "blur(12px)", borderBottom: "1px solid #2E2E36", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 20px", height: 52 }}>
      <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: 20, letterSpacing: "0.04em", textTransform: "uppercase", color: "#F5F5F7" }}>Mad<span style={{ color: "#E8001D" }}>Ring</span> Guide</div>
      <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 11, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "#7A7A8A", border: "1px solid #2E2E36", padding: "4px 10px", borderRadius: 4 }}>11–13 SEP 2026</div>
    </header>
  );
}

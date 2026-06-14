const pulse = `@keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.5} }`;
export function SkeletonRow() {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 12, padding: "12px 14px", background: "#1A1A1E", borderRadius: 8, borderLeft: "3px solid #2E2E36", animation: "pulse 1.5s ease-in-out infinite" }}>
      <div style={{ width: 52, height: 20, background: "#2E2E36", borderRadius: 4, flexShrink: 0 }} />
      <div style={{ flex: 1 }}><div style={{ width: "60%", height: 14, background: "#2E2E36", borderRadius: 4, marginBottom: 6 }} /><div style={{ width: "40%", height: 11, background: "#2E2E36", borderRadius: 4 }} /></div>
      <div style={{ width: 40, height: 20, background: "#2E2E36", borderRadius: 4 }} />
      <style>{pulse}</style>
    </div>
  );
}
export function SkeletonCard() {
  return (
    <div style={{ background: "#1A1A1E", border: "1px solid #2E2E36", borderRadius: 10, padding: 16, animation: "pulse 1.5s ease-in-out infinite" }}>
      <div style={{ width: 48, height: 40, background: "#2E2E36", borderRadius: 4, marginBottom: 8 }} />
      <div style={{ width: "70%", height: 16, background: "#2E2E36", borderRadius: 4, marginBottom: 8 }} />
      <div style={{ width: "90%", height: 12, background: "#2E2E36", borderRadius: 4, marginBottom: 4 }} />
      <div style={{ width: "80%", height: 12, background: "#2E2E36", borderRadius: 4 }} />
      <style>{pulse}</style>
    </div>
  );
}

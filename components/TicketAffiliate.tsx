interface Props {
  label?: string;
}

export default function TicketAffiliate({ label = "Encuentra entradas" }: Props) {
  return (
    <div style={{
      background: "linear-gradient(135deg, #1A0A0B 0%, #26262C 100%)",
      border: "1px solid #E8001D33",
      borderRadius: 12, padding: "16px 18px", marginBottom: 20,
    }}>
      <div style={{
        fontFamily: "'Barlow Condensed', sans-serif", fontSize: 11, fontWeight: 700,
        textTransform: "uppercase", letterSpacing: "0.1em",
        color: "#7A7A8A", marginBottom: 8,
      }}>
        🎟 Entradas oficiales y reventa
      </div>
      <p style={{ color: "#F5F5F7", fontSize: 13, marginBottom: 14, lineHeight: 1.5 }}>
        {label}
      </p>
      <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
        <a
          href="https://www.formula1.com/en/racing/2026/spain/tickets"
          target="_blank" rel="noopener noreferrer"
          style={{
            display: "inline-flex", alignItems: "center", gap: 6,
            padding: "9px 14px", borderRadius: 8, textDecoration: "none",
            background: "#E8001D", color: "#F5F5F7",
            fontFamily: "'Barlow Condensed', sans-serif", fontSize: 13, fontWeight: 700,
            textTransform: "uppercase", letterSpacing: "0.05em",
          }}
        >
          F1 oficial →
        </a>
        <a
          href="https://www.viagogo.es/Entradas-Deportes/Motor/Formula-1"
          target="_blank" rel="noopener noreferrer"
          style={{
            display: "inline-flex", alignItems: "center", gap: 6,
            padding: "9px 14px", borderRadius: 8, textDecoration: "none",
            background: "#26262C", color: "#C9A84C", border: "1px solid #C9A84C55",
            fontFamily: "'Barlow Condensed', sans-serif", fontSize: 13, fontWeight: 700,
            textTransform: "uppercase", letterSpacing: "0.05em",
          }}
        >
          Viagogo →
        </a>
        <a
          href="https://www.stubhub.es/formula-1-entradas"
          target="_blank" rel="noopener noreferrer"
          style={{
            display: "inline-flex", alignItems: "center", gap: 6,
            padding: "9px 14px", borderRadius: 8, textDecoration: "none",
            background: "#26262C", color: "#7A7A8A", border: "1px solid #2E2E36",
            fontFamily: "'Barlow Condensed', sans-serif", fontSize: 13, fontWeight: 700,
            textTransform: "uppercase", letterSpacing: "0.05em",
          }}
        >
          StubHub →
        </a>
      </div>
      <p style={{ color: "#3A3A46", fontSize: 10, marginTop: 10 }}>
        Los enlaces de reventa pueden contener comisiones de afiliado.
      </p>
    </div>
  );
}

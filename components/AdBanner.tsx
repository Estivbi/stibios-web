"use client";

import { useEffect, useRef } from "react";

interface Props {
  slot: string;
  format?: "auto" | "rectangle" | "horizontal";
}

declare global {
  interface Window { adsbygoogle: unknown[] }
}

export default function AdBanner({ slot, format = "auto" }: Props) {
  const ref = useRef(false);

  useEffect(() => {
    if (ref.current) return;
    ref.current = true;
    try {
      (window.adsbygoogle = window.adsbygoogle ?? []).push({});
    } catch { /* AdSense not loaded */ }
  }, []);

  const clientId = process.env.NEXT_PUBLIC_ADSENSE_CLIENT;
  if (!clientId) return null;

  return (
    <div style={{ textAlign: "center", margin: "12px 0", minHeight: 90 }}>
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client={clientId}
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive="true"
      />
    </div>
  );
}

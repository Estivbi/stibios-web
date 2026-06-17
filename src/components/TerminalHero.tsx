import React, { useState } from "react";
import { ArrowRight, Sparkles } from "lucide-react";

export default function TerminalHero() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [hoveredButton, setHoveredButton] = useState<number | null>(null);

  const handleMouseMove = (
    e: React.MouseEvent<HTMLAnchorElement>,
    index: number,
  ) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
    setHoveredButton(index);
  };

  return (
    <div className="flex flex-row justify-center gap-4 mt-2 mb-12">
      <a
        href="/#contacto"
        onMouseMove={(e) => handleMouseMove(e, 0)}
        onMouseLeave={() => setHoveredButton(null)}
        className="group relative px-8 py-3.5 bg-white/[0.03] rounded-full overflow-hidden transition-all duration-300 border border-white/10 hover:border-stibios-accent/50 flex items-center gap-3 hover:bg-stibios-accent/5 hover:shadow-[0_0_20px_rgba(0,209,255,0.1)]"
      >
        {hoveredButton === 0 && (
          <div
            className="absolute inset-0 opacity-100 transition-opacity duration-300 pointer-events-none"
            style={{
              background: `radial-gradient(150px circle at ${mousePos.x}px ${mousePos.y}px, rgba(0, 209, 255, 0.15), transparent 80%)`,
            }}
          />
        )}
        <span className="relative z-10 text-white text-base font-bold transition-colors">
          Cuéntame tu proyecto
        </span>
        <ArrowRight
          size={20}
          className="relative z-10 text-stibios-accent group-hover:translate-x-1 transition-transform"
        />
      </a>

      <a
        href="/#casos-exito"
        onMouseMove={(e) => handleMouseMove(e, 1)}
        onMouseLeave={() => setHoveredButton(null)}
        className="group relative px-8 py-3.5 bg-white/[0.01] rounded-full overflow-hidden transition-all duration-300 border border-white/10 hover:border-white/30 flex items-center gap-3 hover:bg-white/5"
      >
        {hoveredButton === 1 && (
          <div
            className="absolute inset-0 opacity-100 transition-opacity duration-300 pointer-events-none"
            style={{
              background: `radial-gradient(150px circle at ${mousePos.x}px ${mousePos.y}px, rgba(255, 255, 255, 0.08), transparent 80%)`,
            }}
          />
        )}
        <Sparkles
          size={20}
          className="relative z-10 text-stibios-dim group-hover:text-stibios-purple transition-all"
        />
        <span className="relative z-10 text-stibios-dim text-base font-bold group-hover:text-white transition-colors">
          Ver proyectos
        </span>
      </a>
    </div>
  );
}


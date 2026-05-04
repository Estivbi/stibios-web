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
    <div className="w-full max-w-5xl mx-auto px-4 text-center flex flex-col items-center pt-48">
      {/* Pill de posicionamiento */}
      <div className="inline-flex items-center gap-2 text-stibios-accent text-xs font-mono mb-8 border border-stibios-accent/20 px-4 py-1.5 rounded-full bg-stibios-accent/5">
        <div className="w-1.5 h-1.5 rounded-full bg-stibios-accent animate-pulse" />
        Software para negocios reales · Creadores · PYMES
      </div>

      <h1 className="text-5xl md:text-8xl font-bold mb-6 tracking-tighter leading-[1.1] md:leading-[1.1]">
        <span className="block text-white">Tu negocio merece</span>
        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-stibios-accent via-stibios-purple to-stibios-accent bg-[length:200%_auto] animate-shimmer pb-2">
          software de verdad
        </span>
      </h1>

      <p className="text-stibios-dim text-lg md:text-xl max-w-2xl mb-10 leading-relaxed text-center mx-auto">
        Construyo productos digitales para peluquerías, creadores, clínicas y negocios con ambición.
        Sin agencias intermediarias. Sin plantillas. Código y estrategia a medida.
      </p>

      {/* Stats rápidas */}
      <div className="flex flex-wrap justify-center gap-8 mb-12 font-mono text-xs text-stibios-dim/70">
        <div className="flex flex-col items-center gap-1">
          <span className="text-white text-2xl font-bold">+20</span>
          <span>proyectos entregados</span>
        </div>
        <div className="w-px h-10 bg-stibios-border self-center hidden sm:block" />
        <div className="flex flex-col items-center gap-1">
          <span className="text-stibios-accent text-2xl font-bold">3</span>
          <span>productos propios</span>
        </div>
        <div className="w-px h-10 bg-stibios-border self-center hidden sm:block" />
        <div className="flex flex-col items-center gap-1">
          <span className="text-stibios-purple text-2xl font-bold">&lt;24h</span>
          <span>tiempo de respuesta</span>
        </div>
      </div>

      <div className="flex flex-row justify-center gap-4 mt-2 mb-12">
        <a
          href="#contacto"
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
          href="#casos-exito"
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
    </div>
  );
}

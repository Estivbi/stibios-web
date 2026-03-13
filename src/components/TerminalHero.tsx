import React, { useRef, useState } from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import imgPortatil from "../assets/img2.jpg";

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
      <h1 className="text-5xl md:text-8xl font-bold mb-6 tracking-tighter leading-[1.1] md:leading-[1.1]">
        <span className="block text-white">Diseñando tu</span>
        <span className=" block text-transparent bg-clip-text bg-gradient-to-r from-stibios-accent via-stibios-purple to-stibios-accent bg-[length:200%_auto] animate-shimmer pb-2">
          éxito digital
        </span>
      </h1>

      <p className="text-stibios-dim text-lg md:text-xl max-w-2xl mb-10 leading-relaxed text-left mx-auto">
        Sistemas de nivel profesional diseñados para materializar ideas en
        productos digitales escalables y precisos.{" "}
      </p>

      {/* Imagen Estilo Dashboard Linear */}
      <div className="[perspective:2000px] w-full max-w-4xl mb-12 px-4 relative group">
        {/* Glow de fondo para profundidad */}
        <div className="absolute -inset-4 bg-stibios-accent/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
        
        <div 
          className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#1d1f27]/50 [transform:rotateX(10deg)_scale(0.98)] transition-all duration-700 hover:[transform:rotateX(5deg)_scale(1)] shadow-2xl"
        >
          <img
            src={imgPortatil.src}
            alt="Desarrollo de software profesional - Stibios Labs"
            className="w-full h-auto object-cover opacity-80"
            loading="eager"
          />
          
          {/* Fading refinado para fundir con el fondo (#1d1f27) */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#1d1f27] via-transparent to-transparent opacity-90"></div>
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#1d1f27] to-transparent"></div>
        </div>
      </div>

      <div className="flex flex-row justify-center gap-6 mt-6 mb-12">
        {/* Botón Primario */}
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
            Hablemos
          </span>
          <ArrowRight
            size={20}
            className="relative z-10 text-stibios-accent group-hover:translate-x-1 transition-transform"
          />
        </a>

        {/* Botón Secundario */}
        <a
          href="#proyectos"
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
            Proyectos
          </span>
        </a>
      </div>
    </div>
  );
}

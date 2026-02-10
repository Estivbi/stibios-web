import React, { useRef, useState } from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import tecladoImg from "../assets/teclado.jpg";

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

      <p className="text-stibios-dim text-lg md:text-xl max-w-2xl mb-10 leading-relaxed">
        Sistemas de nivel profesional diseñados para materializar ideas en
        productos digitales escalables y precisos.{" "}
      </p>

      <div className="[perspective:3000px] w-full max-w-[1200px] mb-12 px-4 relative">
        <div 
          className="relative overflow-hidden [transform:rotateX(52deg)_rotateY(12deg)_rotateZ(-4deg)] mt-8 md:mt-[-100px]"
          style={{
            maskImage: 'radial-gradient(ellipse at center, black 40%, transparent 95%)',
            WebkitMaskImage: 'radial-gradient(ellipse at center, black 40%, transparent 95%)'
          }}
        >
          <img
            src={tecladoImg.src}
            alt="Desarrollo de software profesional - Stibios Labs"
            className="w-full h-auto object-cover opacity-90 scale-[1.1]"
            loading="eager"
          />
          
          {/* Sombreado interno para fundir con el negro */}
          <div className="absolute inset-0 bg-gradient-to-tr from-[#020406] via-transparent to-transparent opacity-40"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#020406] opacity-80"></div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-6">
        {/* Botón Primario Estilo Linear */}
        <a
          href="#contacto"
          onMouseMove={(e) => handleMouseMove(e, 0)}
          onMouseLeave={() => setHoveredButton(null)}
          className="group relative px-10 py-5 bg-[#08090a] rounded-full overflow-hidden transition-all duration-300 border border-white/10 hover:border-stibios-accent/50 flex items-center gap-3"
        >
          {/* Mouse Glow Effect */}
          {hoveredButton === 0 && (
            <div
              className="absolute inset-0 opacity-100 transition-opacity duration-300 pointer-events-none"
              style={{
                background: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, rgba(0, 209, 255, 0.15), transparent 80%)`,
              }}
            />
          )}
          <span className="relative z-10 text-stibios-text font-bold group-hover:text-white transition-colors">
            Hablemos de tu Proyecto
          </span>
          <ArrowRight
            size={20}
            className="relative z-10 text-stibios-accent group-hover:translate-x-1 transition-all"
          />
        </a>

        {/* Botón Secundario Estilo Linear */}
        <a
          href="#proyectos"
          onMouseMove={(e) => handleMouseMove(e, 1)}
          onMouseLeave={() => setHoveredButton(null)}
          className="group relative px-10 py-5 bg-[#08090a] rounded-full overflow-hidden transition-all duration-300 border border-white/10 hover:border-white/20 flex items-center gap-3"
        >
          {/* Mouse Glow Effect */}
          {hoveredButton === 1 && (
            <div
              className="absolute inset-0 opacity-100 transition-opacity duration-300 pointer-events-none"
              style={{
                background: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, rgba(255, 255, 255, 0.08), transparent 80%)`,
              }}
            />
          )}
          <Sparkles
            size={20}
            className="relative z-10 text-stibios-dim group-hover:text-stibios-purple transition-all"
          />
          <span className="relative z-10 text-stibios-dim font-bold group-hover:text-stibios-text transition-colors">
            Ver Soluciones
          </span>
        </a>
      </div>
    </div>
  );
}

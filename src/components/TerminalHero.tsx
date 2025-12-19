import React, { useState, useEffect } from 'react';
import { ArrowRight, Sparkles, Command } from 'lucide-react';

export default function TerminalHero() {
  const [text, setText] = useState('');
  const fullText = "Building software for the next generation_";
  
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) clearInterval(interval);
    }, 40);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full max-w-4xl mx-auto px-4 text-center flex flex-col items-center pt-20">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-stibios-border bg-stibios-surface/50 backdrop-blur-md mb-8 animate-float">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-stibios-glow opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-stibios-glow"></span>
            </span>
            <span className="text-xs font-mono text-stibios-dim tracking-wide">STIBIOS LABS v2.0</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight leading-[1.1]">
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40">
                Crafting the
            </span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-stibios-accent via-white to-stibios-accent bg-[length:200%_auto] animate-[shimmer_5s_infinite_linear]">
                Future of Code
            </span>
        </h1>
        <div className="h-8 mb-8 font-mono text-stibios-dim text-sm md:text-base">
            <span className="mr-2 text-stibios-accent">➜</span>
            {text}
            <span className="animate-cursor-blink inline-block w-2 h-4 bg-stibios-accent ml-1 align-middle"></span>
        </div>
        {/* Botones Glassmorphism */}
        <div className="flex flex-col md:flex-row gap-4 mt-4">
            <a href="#proyectos" className="group relative px-8 py-3 bg-white text-black font-bold rounded-full transition-all hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:scale-105 flex items-center gap-2">
                <Command size={18} />
                Explorar Proyectos
            </a>
            <a href="#contacto" className="px-8 py-3 rounded-full border border-stibios-border text-stibios-dim hover:text-white hover:border-white/50 transition-all hover:bg-white/5 flex items-center gap-2 backdrop-blur-sm">
                Contactar
                <ArrowRight size={18} />
            </a>
        </div>
    </div>
  );
}
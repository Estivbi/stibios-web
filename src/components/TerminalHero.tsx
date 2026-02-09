import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function TerminalHero() {
  return (
    <div className="w-full max-w-5xl mx-auto px-4 text-center flex flex-col items-center pt-24">
        <h1 className="text-5xl md:text-8xl font-bold mb-8 tracking-tighter leading-[1] md:leading-[0.9]">
            <span className="block text-white">
              Diseñando tu
            </span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-stibios-accent via-stibios-purple to-stibios-accent bg-[length:200%_auto] animate-shimmer">
                éxito digital
            </span>
        </h1>
        <div className="h-12 mb-12 font-sans text-stibios-dim text-base md:text-xl max-w-3xl leading-relaxed">
        </div>
        
        <div className="flex flex-col sm:flex-row gap-6 mt-4">
            <a href="#proyectos" className="group relative px-10 py-5 bg-white text-black font-bold rounded-full transition-all hover:scale-[1.05] hover:shadow-[0_0_40px_rgba(0,209,255,0.3)] flex items-center gap-3">
                <Sparkles size={20} className="text-stibios-purple" />
                Ver Soluciones
            </a>
            <a href="#contacto" className="px-10 py-5 rounded-full border border-stibios-border text-stibios-dim hover:text-white hover:border-white transition-all hover:bg-stibios-surface flex items-center gap-3 backdrop-blur-sm group">
                Hablemos de tu Proyecto
                <ArrowRight size={20} className="opacity-50 group-hover:translate-x-1 transition-transform" />
            </a>
        </div>
    </div>
  );
}
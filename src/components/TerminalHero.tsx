import React, { useState, useEffect } from 'react';
import { Terminal, Code2, ArrowRight } from 'lucide-react';

export default function TerminalHero() {
  const [text, setText] = useState('');
  const fullText = "> Initializing STIBIOS Systems...\n> Loading modules: SaaS, Labs, Dev...\n> Status: ONLINE_";
  
  // Efecto de escritura simple
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) clearInterval(interval);
    }, 50); // Velocidad de escritura
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full max-w-3xl mx-auto p-4 md:p-0">
        {/* Barra superior estilo ventana */}
        <div className="flex items-center gap-2 mb-4 text-stibios-dim text-sm border-b border-stibios-border pb-2">
            <Terminal size={16} />
            <span>bash — stibios-core</span>
        </div>

        {/* Contenido principal */}
        <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-stibios-text to-stibios-dim">
            BUILDING THE <br />
            <span className="text-stibios-accent">FUTURE_OF_CODE</span>
        </h1>

        {/* Simulación de Terminal Output */}
        <div className="bg-stibios-surface border border-stibios-border p-6 rounded-lg shadow-2xl font-mono text-sm md:text-base min-h-[120px]">
            <pre className="whitespace-pre-wrap text-stibios-accent">
                {text}
                <span className="animate-cursor-blink inline-block w-2 h-5 bg-stibios-accent ml-1 align-middle"></span>
            </pre>
        </div>

        {/* Botones de acción (CTA) */}
        <div className="mt-8 flex flex-col md:flex-row gap-4">
            <a href="#proyectos" className="group flex items-center justify-center gap-2 bg-stibios-text text-stibios-bg px-6 py-3 font-bold hover:bg-white transition-colors">
                <Code2 size={20} />
                VER PROYECTOS
            </a>
            <a href="#contacto" className="group flex items-center justify-center gap-2 border border-stibios-border text-stibios-text px-6 py-3 hover:border-stibios-accent hover:text-stibios-accent transition-colors">
                CONTACTAR
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
        </div>
    </div>
  );
}
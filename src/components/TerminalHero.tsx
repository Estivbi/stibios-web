import { ArrowRight, Sparkles } from "lucide-react";

export default function TerminalHero() {
  return (
    <div className="flex flex-row justify-center gap-4 mt-2 mb-12">
      <a
        href="/contacto"
        className="group px-8 py-3.5 bg-stibios-accent hover:bg-stibios-accent-hover rounded-lg transition-colors duration-200 flex items-center gap-3"
      >
        <span className="text-white text-base font-bold">
          Cuéntame tu proyecto
        </span>
        <ArrowRight
          size={20}
          className="text-white group-hover:translate-x-1 transition-transform"
        />
      </a>

      <a
        href="/#casos-exito"
        className="group px-8 py-3.5 bg-transparent border border-stibios-border hover:border-stibios-border-strong rounded-lg transition-colors duration-200 flex items-center gap-3"
      >
        <Sparkles
          size={20}
          className="text-stibios-dim group-hover:text-stibios-purple transition-colors"
        />
        <span className="text-stibios-dim group-hover:text-stibios-text text-base font-bold transition-colors">
          Ver proyectos
        </span>
      </a>
    </div>
  );
}

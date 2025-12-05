import React, { useState, useEffect } from 'react';
import { Activity, Hash } from 'lucide-react';

export default function TrendLogic() {
  const [logs, setLogs] = useState<string[]>([]);
  
  // Datos simulados para el efecto
  const dataStream = [
    "Analyzing sentiment: Positive (0.89)",
    "Scraping source: X_API_V2...",
    "Keyword detected: 'AI Revolution'",
    "n8n webhook: Triggered",
    "Generating report: JSON_OUT",
    "Trend spike: +450% volume",
    "Processing NLP batch...",
    "Connection stable: 12ms"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      const randomLog = dataStream[Math.floor(Math.random() * dataStream.length)];
      const timestamp = new Date().toLocaleTimeString('es-ES', { hour12: false });
      setLogs(prev => [`[${timestamp}] > ${randomLog}`, ...prev].slice(0, 6)); // Mantenemos solo 6 líneas
    }, 1500); // Velocidad de actualización

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="font-mono text-xs md:text-sm text-stibios-dim opacity-80 overflow-hidden h-full flex flex-col justify-end">
      <div className="flex items-center gap-2 mb-2 text-stibios-accent border-b border-stibios-border pb-1 w-max">
        <Activity size={14} className="animate-pulse" />
        <span className="font-bold">LIVE_DASHBOARD</span>
      </div>
      <div className="space-y-1">
        {logs.map((log, i) => (
          <div key={i} className={`${i === 0 ? 'text-stibios-text font-bold' : 'opacity-50'} transition-all duration-300`}>
             {log}
          </div>
        ))}
      </div>
    </div>
  );
}
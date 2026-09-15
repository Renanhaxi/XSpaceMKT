import React from 'react';
import { MessageCircle } from 'lucide-react';

export const WhatsAppFloating: React.FC = () => {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center group">
      {/* Tooltip on desktop */}
      <span className="hidden sm:inline-block mr-3 px-3.5 py-1.5 rounded-full bg-[#121218] border border-orange-500/30 text-white text-xs font-bold shadow-lg shadow-black/80 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
        Fale conosco no WhatsApp
      </span>

      <a
        href="https://wa.me/5500000000000?text=Ol%C3%A1%20xSpaceMKT!%20Gostaria%20de%20tirar%20algumas%20d%C3%BAvidas%20sobre%20a%20cria%C3%A7%C3%A3o%20de%20sites."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Conversar no WhatsApp"
        className="w-14 h-14 rounded-full bg-gradient-to-tr from-green-500 to-emerald-400 hover:from-green-400 hover:to-emerald-300 text-black flex items-center justify-center shadow-[0_0_25px_rgba(34,197,94,0.45)] hover:shadow-[0_0_35px_rgba(34,197,94,0.7)] hover:scale-110 active:scale-95 transition-all duration-300 relative"
      >
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-orange-500 rounded-full border-2 border-black animate-ping"></span>
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-orange-500 rounded-full border-2 border-black"></span>
        <MessageCircle className="w-7 h-7 fill-black stroke-black" />
      </a>
    </div>
  );
};

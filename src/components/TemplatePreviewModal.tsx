import React, { useState } from 'react';
import { X, ExternalLink, Laptop, Smartphone, ShieldCheck } from 'lucide-react';
import type { TemplateItem } from '../types';

interface TemplatePreviewModalProps {
  template: TemplateItem | null;
  onClose: () => void;
}

export const TemplatePreviewModal: React.FC<TemplatePreviewModalProps> = ({ template, onClose }) => {
  const [deviceMode, setDeviceMode] = useState<'desktop' | 'mobile'>('desktop');

  if (!template) return null;

  const whatsappMessage = encodeURIComponent(
    `Olá xSpaceMKT! Fiquei muito interessado no template "${template.title}" (${template.categoryLabel}). Gostaria de saber os detalhes para personalizar para o meu negócio!`
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      {/* Modal Container */}
      <div className="relative w-full max-w-5xl bg-[#0d0d12] border border-orange-500/30 rounded-2xl shadow-2xl shadow-black overflow-hidden flex flex-col max-h-[92vh]">
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#121218]">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-orange-500 animate-ping"></span>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
                {template.title}
                <span className="text-xs px-2.5 py-0.5 rounded-full bg-orange-500/20 text-orange-400 border border-orange-500/30 font-semibold">
                  {template.categoryLabel}
                </span>
              </h3>
            </div>
          </div>

          {/* Device Switcher and Close */}
          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center bg-black/40 p-1 rounded-xl border border-white/10">
              <button
                onClick={() => setDeviceMode('desktop')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  deviceMode === 'desktop' ? 'bg-orange-500 text-black font-bold' : 'text-slate-400 hover:text-white'
                }`}
              >
                <Laptop className="w-3.5 h-3.5" />
                Desktop
              </button>
              <button
                onClick={() => setDeviceMode('mobile')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  deviceMode === 'mobile' ? 'bg-orange-500 text-black font-bold' : 'text-slate-400 hover:text-white'
                }`}
              >
                <Smartphone className="w-3.5 h-3.5" />
                Mobile
              </button>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-all"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body / Interactive Viewport */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 bg-[#09090c] flex flex-col items-center justify-center">
          {deviceMode === 'desktop' ? (
            /* Desktop Frame */
            <div className="w-full max-w-4xl bg-[#14141c] rounded-xl border border-white/15 overflow-hidden shadow-2xl">
              {/* Fake browser bar */}
              <div className="px-4 py-2 bg-[#1b1b24] border-b border-white/10 flex items-center justify-between text-xs text-slate-400">
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/70"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-500/70"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/70"></div>
                </div>
                <div className="bg-black/60 px-4 py-1 rounded-full border border-white/10 text-[11px] text-slate-300 font-mono">
                  demo.xspacemkt.com/{template.id}
                </div>
                <span className="text-[11px] text-green-400 font-semibold flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5" /> SSL 100%
                </span>
              </div>
              <div className="max-h-[500px] overflow-y-auto scrollbar-thin">
                <img
                  src={template.image}
                  alt={template.title}
                  className="w-full h-auto object-cover object-top"
                />
              </div>
            </div>
          ) : (
            /* Mobile Frame */
            <div className="w-[320px] bg-[#14141c] rounded-[36px] border-[5px] border-[#22222e] overflow-hidden shadow-2xl p-2 my-2">
              <div className="flex justify-center mb-1.5">
                <div className="w-20 h-3 bg-black/60 rounded-full"></div>
              </div>
              <div className="rounded-[24px] overflow-hidden max-h-[460px] overflow-y-auto bg-black scrollbar-none">
                <img
                  src={template.image}
                  alt={template.title}
                  className="w-full h-auto object-cover object-top"
                />
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer Info and CTA */}
        <div className="px-6 py-4 bg-[#121218] border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left w-full sm:w-auto">
            <p className="text-xs text-slate-400 max-w-xl">{template.description}</p>
            <div className="flex flex-wrap gap-2 mt-2">
              {template.tags.map((tag, i) => (
                <span key={i} className="text-[10px] px-2 py-0.5 rounded bg-white/5 border border-white/10 text-slate-300">
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
            <a
              href={`https://wa.me/5500000000000?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-400 hover:to-orange-500 text-black font-extrabold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg shadow-orange-500/30 transition-all"
            >
              <span>Quero um Site Neste Estilo</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

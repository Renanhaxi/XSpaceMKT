import React, { useState } from 'react';
import { 
  ArrowRight, 
  Zap, 
  ShieldCheck, 
  Laptop, 
  Smartphone, 
  TrendingUp,
  Flame
} from 'lucide-react';

export const Hero: React.FC = () => {
  const [activeDevice, setActiveDevice] = useState<'desktop' | 'mobile'>('desktop');

  return (
    <section id="inicio" className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-grid-pattern">
      {/* Background Neon Orange Radial Lights */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[500px] bg-orange-600/15 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute top-1/3 left-10 w-72 h-72 bg-amber-500/10 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute top-1/2 right-10 w-80 h-80 bg-orange-500/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs sm:text-sm font-bold tracking-wide uppercase mb-6 shadow-[0_0_15px_rgba(255,102,0,0.15)] animate-pulse">
            <Flame className="w-4 h-4 text-orange-400" />
            <span>Marketing que impulsiona • Sites & Sistemas Web</span>
          </div>

          {/* Main Headline from the flyer */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight text-white leading-[1.1] mb-6">
            Seu negócio na internet, <br className="hidden sm:inline" />
            <span className="gradient-fire-text">24 horas por dia.</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto mb-10 leading-relaxed font-normal">
            Mais do que um site, entregamos uma <strong className="text-white font-bold">presença digital estratégica</strong> para sua marca crescer, conquistar clientes qualificados e gerar faturamento previsível todos os dias.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
            <a
              href="#templates"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-orange-500 via-orange-600 to-amber-500 hover:from-orange-400 hover:to-orange-500 text-black font-extrabold text-base flex items-center justify-center gap-3 shadow-[0_0_30px_rgba(255,102,0,0.4)] hover:shadow-[0_0_40px_rgba(255,102,0,0.6)] hover:scale-[1.02] transition-all"
            >
              <span>Explorar Modelos & Templates</span>
              <ArrowRight className="w-5 h-5 text-black" />
            </a>

            <a
              href="#simulador"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/15 hover:border-orange-500/50 text-white font-bold text-base flex items-center justify-center gap-3 transition-all"
            >
              <Zap className="w-5 h-5 text-orange-400" />
              <span>Calcular Orçamento Online</span>
            </a>
          </div>

          {/* Quick Pillars from the Brand Flyers */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto mb-16 text-left">
            <div className="glass-card p-4 rounded-xl border-white/10 hover:border-orange-500/40 transition-all">
              <div className="text-orange-400 font-extrabold text-sm flex items-center gap-2 mb-1">
                <Laptop className="w-4 h-4 text-orange-400" />
                Institucionais
              </div>
              <p className="text-xs text-slate-400">Autoridade máxima para apresentar sua empresa.</p>
            </div>

            <div className="glass-card p-4 rounded-xl border-white/10 hover:border-orange-500/40 transition-all">
              <div className="text-orange-400 font-extrabold text-sm flex items-center gap-2 mb-1">
                <TrendingUp className="w-4 h-4 text-orange-400" />
                Lojas Virtuais
              </div>
              <p className="text-xs text-slate-400">Venda no automático com checkout ágil em 1 clique.</p>
            </div>

            <div className="glass-card p-4 rounded-xl border-white/10 hover:border-orange-500/40 transition-all">
              <div className="text-orange-400 font-extrabold text-sm flex items-center gap-2 mb-1">
                <Smartphone className="w-4 h-4 text-orange-400" />
                100% Responsivo
              </div>
              <p className="text-xs text-slate-400">Fluidez absoluta em celulares e computadores.</p>
            </div>

            <div className="glass-card p-4 rounded-xl border-white/10 hover:border-orange-500/40 transition-all">
              <div className="text-orange-400 font-extrabold text-sm flex items-center gap-2 mb-1">
                <Zap className="w-4 h-4 text-orange-400" />
                Ultra Rápido
              </div>
              <p className="text-xs text-slate-400">Carregamento instantâneo com nota 95+ no Google.</p>
            </div>
          </div>
        </div>

        {/* Device Switcher and Interactive Mockup Preview */}
        <div className="max-w-5xl mx-auto">
          {/* Device Controls Switcher */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider mr-2">
              Alternar Visualização:
            </span>
            <button
              onClick={() => setActiveDevice('desktop')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                activeDevice === 'desktop'
                  ? 'bg-orange-500 text-black shadow-[0_0_15px_rgba(255,102,0,0.5)]'
                  : 'bg-white/[0.05] text-slate-300 hover:bg-white/[0.1] border border-white/10'
              }`}
            >
              <Laptop className="w-4 h-4" />
              <span>Computador (Desktop)</span>
            </button>
            <button
              onClick={() => setActiveDevice('mobile')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                activeDevice === 'mobile'
                  ? 'bg-orange-500 text-black shadow-[0_0_15px_rgba(255,102,0,0.5)]'
                  : 'bg-white/[0.05] text-slate-300 hover:bg-white/[0.1] border border-white/10'
              }`}
            >
              <Smartphone className="w-4 h-4" />
              <span>Celular (Mobile)</span>
            </button>
          </div>

          {/* Interactive Screen Frame */}
          <div className="relative mx-auto transition-all duration-500">
            {/* Ambient orange glow below mockup */}
            <div className="absolute -inset-1 bg-gradient-to-r from-orange-600 to-amber-500 rounded-3xl blur-2xl opacity-30 group-hover:opacity-60 transition duration-1000 -z-10"></div>

            {activeDevice === 'desktop' ? (
              /* Laptop Mockup View */
              <div className="bg-[#121217] rounded-2xl border border-white/15 p-3 sm:p-4 shadow-2xl shadow-black/80 transition-all duration-300">
                {/* Browser Top Bar */}
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10 px-2">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-1 rounded-full bg-black/50 border border-white/10 text-[11px] text-slate-400 w-1/2 justify-center">
                    <ShieldCheck className="w-3.5 h-3.5 text-green-400" />
                    <span>https://suaempresa.com.br</span>
                  </div>
                  <div className="text-[11px] font-bold text-orange-400 flex items-center gap-1">
                    <Zap className="w-3.5 h-3.5 text-orange-400" />
                    <span>PageSpeed 99/100</span>
                  </div>
                </div>

                {/* Inner Screen Preview showing the Evolve site from the brand flyer */}
                <div className="relative rounded-xl overflow-hidden bg-black aspect-video max-h-[480px] w-full flex items-center justify-center group">
                  <img
                    src="/assets/criativo-criacao-sites.png"
                    alt="Mockup do Site Desenvolvido pela xSpaceMKT"
                    className="w-full h-full object-cover object-center group-hover:scale-[1.02] transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 pointer-events-none"></div>
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                    <div className="glass-card px-4 py-2 rounded-lg border-white/15">
                      <p className="text-xs font-bold text-white">Projeto: Evolve Training Club</p>
                      <p className="text-[10px] text-orange-400 font-semibold">Criação de Site Institucional + Matrículas Online</p>
                    </div>
                    <a
                      href="#templates"
                      className="pointer-events-auto px-4 py-2 rounded-lg bg-orange-500 hover:bg-orange-400 text-black font-extrabold text-xs shadow-lg shadow-orange-500/40 transition-all"
                    >
                      Ver Detalhes do Projeto
                    </a>
                  </div>
                </div>
              </div>
            ) : (
              /* Mobile Mockup View */
              <div className="max-w-[340px] mx-auto bg-[#121217] rounded-[40px] border-[6px] border-[#22222b] p-3 shadow-2xl shadow-orange-500/20 transition-all duration-300">
                {/* Mobile Notch */}
                <div className="flex justify-center mb-2">
                  <div className="w-24 h-4 bg-[#22222b] rounded-full flex items-center justify-center">
                    <div className="w-3 h-3 rounded-full bg-black/80"></div>
                  </div>
                </div>

                {/* Mobile Screen Content */}
                <div className="rounded-[28px] overflow-hidden bg-black aspect-[9/18] relative group">
                  <img
                    src="/assets/criativo-negocio-24h.jpg"
                    alt="Visualização Mobile do Site"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/30 pointer-events-none"></div>
                  <div className="absolute bottom-4 left-3 right-3 text-center">
                    <span className="inline-block text-[10px] uppercase font-bold text-orange-400 bg-black/70 px-3 py-1 rounded-full border border-orange-500/40 mb-2">
                      Experiência Mobile Perfeita
                    </span>
                    <p className="text-xs text-slate-200 font-semibold mb-3">
                      Navegação fluida com toque rápido e carregamento em milissegundos.
                    </p>
                    <a
                      href="#simulador"
                      className="w-full block py-2.5 rounded-xl bg-orange-500 hover:bg-orange-400 text-black font-extrabold text-xs shadow-md shadow-orange-500/40"
                    >
                      Solicitar Versão Mobile
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

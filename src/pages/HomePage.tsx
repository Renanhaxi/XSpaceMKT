import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, ShieldCheck } from 'lucide-react';
import type { TemplateItem, TestimonialItem } from '../types';

interface HomePageProps {
  featuredTemplates: TemplateItem[];
  testimonials: TestimonialItem[];
}

export const HomePage: React.FC<HomePageProps> = ({ featuredTemplates, testimonials }) => {
  const previewTemplates = featuredTemplates.slice(0, 3);
  const mainTestimonial = testimonials[0];

  return (
    <div className="space-y-28 sm:space-y-36 pb-24">
      {/* Editorial Hero Section */}
      <section className="pt-32 sm:pt-44 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Subtle pill tag */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs font-semibold text-slate-300 mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span>
          <span>Estúdio de Design & Desenvolvimento Web</span>
        </div>

        {/* Clear, Human, Authoritative Headline */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white max-w-4xl mx-auto leading-[1.12] mb-8 text-gradient-white">
          Desenvolvemos sites que posicionam sua empresa com <span className="text-gradient-accent">autoridade.</span>
        </h1>

        <p className="text-base sm:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed mb-10 font-normal">
          Projetos sob medida para empresas que buscam mais credibilidade, navegação impecável no celular e conversão real de novos clientes.
        </p>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <Link
            to="/portfolio"
            className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-orange-500 hover:bg-orange-600 text-black font-bold text-sm flex items-center justify-center gap-2 transition-all shadow-lg shadow-orange-500/20"
          >
            <span>Ver Nossos Projetos</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <Link
            to="/contato"
            className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.08] border border-white/10 text-white font-semibold text-sm flex items-center justify-center gap-2 transition-all"
          >
            <span>Solicitar Orçamento</span>
          </Link>
        </div>

        {/* Clean Showcase Preview */}
        <div className="relative max-w-4xl mx-auto rounded-2xl overflow-hidden border border-white/10 studio-card shadow-2xl">
          <div className="px-4 py-2.5 bg-[#14141a] border-b border-white/10 flex items-center justify-between text-xs text-slate-400">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-white/15"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-white/15"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-white/15"></span>
            </div>
            <span className="text-[11px] font-mono text-slate-400">xspacemkt.com/portfolio</span>
            <span className="text-[11px] text-green-400 flex items-center gap-1 font-medium">
              <ShieldCheck className="w-3.5 h-3.5" /> 100% Responsivo
            </span>
          </div>
          <img
            src="/assets/criativo-criacao-sites.png"
            alt="Showcase de Projetos xSpaceMKT"
            className="w-full h-auto object-cover max-h-[460px] object-top"
          />
        </div>
      </section>

      {/* 3 Pillars Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 rounded-2xl studio-card">
            <span className="text-xs font-mono text-orange-400 uppercase tracking-wider block mb-3">01. Identidade</span>
            <h3 className="text-xl font-bold text-white mb-2">Design Exclusivo</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Não utilizamos temas genéricos ou cópias. Cada página é estruturada para transmitir a solidez e a singularidade da sua marca.
            </p>
          </div>

          <div className="p-8 rounded-2xl studio-card">
            <span className="text-xs font-mono text-orange-400 uppercase tracking-wider block mb-3">02. Performance</span>
            <h3 className="text-xl font-bold text-white mb-2">Engenharia Rápida</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Carregamento instantâneo em redes móveis e arquitetura otimizada para o Google (SEO), retendo visitantes logo nos primeiros segundos.
            </p>
          </div>

          <div className="p-8 rounded-2xl studio-card">
            <span className="text-xs font-mono text-orange-400 uppercase tracking-wider block mb-3">03. Estratégia</span>
            <h3 className="text-xl font-bold text-white mb-2">Foco em Negócios</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Fluxos de navegação desenhados estrategicamente para facilitar o contato pelo WhatsApp e a contratação dos seus serviços.
            </p>
          </div>
        </div>
      </section>

      {/* Selected Projects Teaser */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-xs font-semibold text-orange-400 uppercase tracking-wider block mb-2">Trabalhos Recentes</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Projetos em Destaque</h2>
          </div>
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-2 text-sm font-semibold text-orange-400 hover:text-orange-300 transition-colors"
          >
            <span>Ver portfólio completo</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {previewTemplates.map((item) => (
            <Link
              key={item.id}
              to="/portfolio"
              className="group studio-card rounded-2xl overflow-hidden flex flex-col justify-between"
            >
              <div className="aspect-[16/10] overflow-hidden bg-black relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md text-[10px] font-semibold text-slate-300 border border-white/10">
                  {item.categoryLabel}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-base font-bold text-white group-hover:text-orange-400 transition-colors flex items-center justify-between">
                  <span>{item.title}</span>
                  <ArrowUpRight className="w-4 h-4 opacity-50 group-hover:opacity-100 transition-opacity" />
                </h3>
                <p className="text-xs text-slate-400 mt-2 line-clamp-2 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Testimonial */}
      {mainTestimonial && (
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-12 rounded-3xl studio-card-elevated border border-white/10 relative text-center">
            <p className="text-lg sm:text-xl text-slate-200 font-medium leading-relaxed italic mb-8">
              "{mainTestimonial.content}"
            </p>
            <div className="flex items-center justify-center gap-4">
              <img
                src={mainTestimonial.avatar}
                alt={mainTestimonial.name}
                className="w-12 h-12 rounded-full object-cover border border-white/15"
              />
              <div className="text-left">
                <h4 className="text-sm font-bold text-white">{mainTestimonial.name}</h4>
                <p className="text-xs text-slate-400">{mainTestimonial.role} • {mainTestimonial.company}</p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Clean Call to Action Banner */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-10 sm:p-16 rounded-3xl bg-[#121217] border border-orange-500/20 text-center relative overflow-hidden">
          <div className="max-w-2xl mx-auto relative z-10">
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">
              Pronto para elevar o padrão digital da sua empresa?
            </h2>
            <p className="text-sm sm:text-base text-slate-400 mb-8 leading-relaxed">
              Conte-nos sobre o seu projeto. Analisamos suas necessidades e entregamos uma proposta técnica e comercial detalhada.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contato"
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-orange-500 hover:bg-orange-600 text-black font-bold text-sm flex items-center justify-center gap-2 transition-all shadow-md"
              >
                <span>Falar com Nossa Equipe</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/planos"
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 text-white font-semibold text-sm flex items-center justify-center transition-all"
              >
                <span>Ver Planos & Preços</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

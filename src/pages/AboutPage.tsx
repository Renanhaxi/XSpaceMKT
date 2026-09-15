import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import type { TestimonialItem } from '../types';

interface AboutPageProps {
  testimonials: TestimonialItem[];
}

export const AboutPage: React.FC<AboutPageProps> = ({ testimonials }) => {
  return (
    <div className="pt-32 sm:pt-40 pb-28 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
      {/* Page Header */}
      <div className="max-w-3xl">
        <span className="text-xs font-semibold text-orange-400 uppercase tracking-wider block mb-2">
          Sobre a xSpaceMKT
        </span>
        <h1 className="text-3xl sm:text-5xl font-bold text-white tracking-tight leading-tight">
          Mais do que páginas na web: criamos autoridade digital que impulsiona negócios.
        </h1>
        <p className="text-sm sm:text-base text-slate-400 mt-4 leading-relaxed">
          Nascemos da convicção de que empresas sérias não podem ter sites lentos, genéricos ou amadores. Criamos ferramentas que conectam marcas aos clientes certos.
        </p>
      </div>

      {/* Philosophy Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="p-8 sm:p-10 rounded-3xl studio-card space-y-4">
          <span className="text-xs font-mono text-orange-400 uppercase tracking-wider">Nossa Visão</span>
          <h3 className="text-2xl font-bold text-white">Por Que Fugimos do Padrão Amador?</h3>
          <p className="text-sm text-slate-300 leading-relaxed">
            Mais de 70% dos sites empresariais no Brasil demoram mais de 4 segundos para abrir ou quebram na tela do celular. Isso queima a credibilidade de empresas excelentes antes mesmo do cliente ler a primeira frase.
          </p>
          <p className="text-sm text-slate-300 leading-relaxed">
            Na <strong>xSpaceMKT</strong>, tratamos cada projeto com precisão cirúrgica: código moderno, design alinhado ao seu público e integração direta aos seus canais de atendimento.
          </p>
        </div>

        <div className="p-8 sm:p-10 rounded-3xl studio-card space-y-4">
          <span className="text-xs font-mono text-orange-400 uppercase tracking-wider">Nossos Compromissos</span>
          <h3 className="text-2xl font-bold text-white">O Padrão Que Entregamos</h3>
          <ul className="space-y-3 text-sm text-slate-300 pt-2">
            <li className="flex items-start gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0"></span>
              <span><strong>Velocidade sem concessões:</strong> Carregamento ágil no 4G e 5G.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0"></span>
              <span><strong>Autonomia total:</strong> Você não fica dependente de nós para mudar uma foto ou texto.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0"></span>
              <span><strong>Código 100% seu:</strong> Sem taxas mensais abusivas de retenção.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0"></span>
              <span><strong>Prazos respeitados:</strong> Entregas previsíveis e suporte atencioso.</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Testimonials Grid */}
      <div className="pt-12 border-t border-white/10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-semibold text-orange-400 uppercase tracking-wider block mb-2">
            Prova Social
          </span>
          <h2 className="text-2xl sm:text-4xl font-bold text-white">
            Resultados de Clientes Reais
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t) => (
            <div key={t.id} className="studio-card p-8 rounded-2xl flex flex-col justify-between">
              <p className="text-sm text-slate-300 italic leading-relaxed mb-6">
                "{t.content}"
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-white/8">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-10 h-10 rounded-full object-cover border border-white/15"
                />
                <div>
                  <h4 className="text-sm font-bold text-white">{t.name}</h4>
                  <p className="text-xs text-slate-400">{t.role} • {t.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="p-10 rounded-3xl bg-[#121217] border border-white/10 text-center flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="text-left">
          <h3 className="text-xl font-bold text-white">Quer entender como podemos ajudar o seu negócio?</h3>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">Nossa equipe está à disposição para analisar seu projeto.</p>
        </div>
        <Link
          to="/contato"
          className="px-6 py-3 rounded-xl bg-orange-500 hover:bg-orange-600 text-black font-bold text-xs sm:text-sm flex items-center gap-2 shrink-0"
        >
          <span>Iniciar Conversa</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
};

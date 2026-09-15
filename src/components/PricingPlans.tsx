import React from 'react';
import { Check, Star, ArrowRight, ShieldCheck } from 'lucide-react';
import type { PricingPlan } from '../types';

interface PricingPlansProps {
  plans: PricingPlan[];
}

export const PricingPlans: React.FC<PricingPlansProps> = ({ plans }) => {
  return (
    <section id="planos" className="py-24 relative bg-[#070709]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-bold uppercase tracking-wider mb-3">
            <Star className="w-3.5 h-3.5" />
            <span>Planos & Investimento</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-4">
            Escolha o plano ideal para <br />
            <span className="gradient-fire-text">o momento da sua empresa.</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base">
            Valores justos, entrega pontual e suporte humanizado de verdade para impulsionar seu faturamento.
          </p>
        </div>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan) => {
            const isPopular = plan.popular;
            return (
              <div
                key={plan.id}
                className={`rounded-3xl p-8 flex flex-col justify-between relative transition-all duration-300 ${
                  isPopular
                    ? 'bg-[#121218] border-2 border-orange-500 shadow-[0_0_35px_rgba(255,102,0,0.25)] md:-translate-y-2'
                    : 'glass-card border-white/10 hover:border-orange-500/30'
                }`}
              >
                {/* Popular Badge */}
                {plan.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="px-4 py-1 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 text-black text-xs font-black uppercase tracking-wider shadow-md">
                      {plan.badge}
                    </span>
                  </div>
                )}

                <div>
                  {/* Plan Name & Tagline */}
                  <div className="mb-6">
                    <h3 className="text-2xl font-black text-white mb-2">{plan.name}</h3>
                    <p className="text-xs sm:text-sm text-slate-400 min-h-[40px] leading-relaxed">
                      {plan.tagline}
                    </p>
                  </div>

                  {/* Price */}
                  <div className="mb-8 pb-6 border-b border-white/10">
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl sm:text-5xl font-black text-white tracking-tight">
                        {plan.price}
                      </span>
                    </div>
                    {plan.period && (
                      <span className="text-xs text-orange-400 font-medium block mt-1">
                        {plan.period}
                      </span>
                    )}
                  </div>

                  {/* Features List */}
                  <div className="space-y-3.5 mb-8">
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-300">
                      O que está incluso:
                    </p>
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-200">
                        <div className="w-4 h-4 rounded-full bg-orange-500/20 text-orange-400 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-3 h-3 stroke-[3]" />
                        </div>
                        <span className="leading-tight">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <div>
                  <a
                    href={`https://wa.me/5500000000000?text=${encodeURIComponent(plan.whatsappMessage)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full py-3.5 rounded-xl font-extrabold text-sm flex items-center justify-center gap-2 transition-all ${
                      isPopular
                        ? 'bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-400 hover:to-orange-500 text-black shadow-lg shadow-orange-500/30'
                        : 'bg-white/[0.05] hover:bg-orange-500 hover:text-black border border-white/15 hover:border-orange-500 text-white'
                    }`}
                  >
                    <span>{plan.ctaText}</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Guarantee Banner */}
        <div className="mt-14 p-6 rounded-2xl bg-[#0e0e14] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-orange-500/10 border border-orange-500/30 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-6 h-6 text-orange-400" />
            </div>
            <div>
              <h4 className="text-sm sm:base font-bold text-white">
                Garantia de Satisfação & Código 100% Seu
              </h4>
              <p className="text-xs text-slate-400">
                Você recebe todos os acessos, sem taxas ocultas ou fidelidade abusiva.
              </p>
            </div>
          </div>
          <a
            href="#contato"
            className="px-5 py-2.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 text-xs font-bold text-slate-200 transition-all shrink-0"
          >
            Tirar Dúvidas com Especialista
          </a>
        </div>
      </div>
    </section>
  );
};

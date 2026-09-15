import React from 'react';
import { Check, ArrowRight, ShieldCheck } from 'lucide-react';
import type { PricingPlan } from '../types';
import { BudgetCalculator } from '../components/BudgetCalculator';

interface PlansPageProps {
  plans: PricingPlan[];
}

export const PlansPage: React.FC<PlansPageProps> = ({ plans }) => {
  return (
    <div className="pt-32 sm:pt-40 pb-28 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto">
        <span className="text-xs font-semibold text-orange-400 uppercase tracking-wider block mb-2">
          Investimento Transparente
        </span>
        <h1 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
          Planos Claros, Sem Letras Miúdas
        </h1>
        <p className="text-sm sm:text-base text-slate-400 mt-4 leading-relaxed">
          Valores previsíveis e garantia de código 100% seu, sem contratos de fidelidade abusivos.
        </p>
      </div>

      {/* Pricing Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
        {plans.map((plan) => {
          const isPopular = plan.popular;
          return (
            <div
              key={plan.id}
              className={`rounded-3xl p-8 flex flex-col justify-between relative transition-all duration-200 ${
                isPopular
                  ? 'bg-[#14141c] border-2 border-orange-500 shadow-xl shadow-orange-500/10 md:-translate-y-2'
                  : 'studio-card'
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="px-3.5 py-1 rounded-full bg-orange-500 text-black text-[11px] font-bold uppercase tracking-wider">
                    {plan.badge}
                  </span>
                </div>
              )}

              <div>
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed min-h-[38px]">
                    {plan.tagline}
                  </p>
                </div>

                <div className="mb-8 pb-6 border-b border-white/10">
                  <span className="text-4xl font-bold text-white tracking-tight">
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span className="text-xs text-slate-400 block mt-1 font-medium">
                      {plan.period}
                    </span>
                  )}
                </div>

                <div className="space-y-3 mb-8">
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-300">
                    Incluso no pacote:
                  </p>
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                      <Check className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <a
                  href={`https://wa.me/5500000000000?text=${encodeURIComponent(plan.whatsappMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-3.5 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-all ${
                    isPopular
                      ? 'bg-orange-500 hover:bg-orange-600 text-black shadow-md'
                      : 'bg-white/[0.05] hover:bg-white/[0.1] text-white border border-white/10'
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

      {/* Guarantee Note */}
      <div className="p-6 rounded-2xl bg-[#111116] border border-white/8 flex items-center gap-4 max-w-3xl mx-auto">
        <ShieldCheck className="w-8 h-8 text-green-400 shrink-0" />
        <div className="text-xs sm:text-sm text-slate-300">
          <strong className="text-white">Garantia & Propriedade:</strong> Todo o código-fonte, domínio e acessos administrativos pertencem 100% à sua empresa após a entrega do projeto.
        </div>
      </div>

      {/* Calculator Section */}
      <div className="pt-12 border-t border-white/10">
        <BudgetCalculator />
      </div>
    </div>
  );
};

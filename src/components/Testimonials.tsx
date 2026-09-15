import React from 'react';
import { Star, Quote, Plus, TrendingUp } from 'lucide-react';
import type { TestimonialItem } from '../types';

interface TestimonialsProps {
  testimonials: TestimonialItem[];
  onOpenAdmin: () => void;
}

export const Testimonials: React.FC<TestimonialsProps> = ({ testimonials, onOpenAdmin }) => {
  return (
    <section id="feedbacks" className="py-24 relative bg-[#09090d] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-bold uppercase tracking-wider mb-3">
              <Star className="w-3.5 h-3.5 fill-orange-400" />
              <span>Resultados Comprovados</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
              O que nossos clientes dizem <br />
              <span className="gradient-fire-text">sobre os resultados gerados.</span>
            </h2>
            <p className="text-slate-300 text-sm sm:text-base mt-3">
              Empresas reais que modernizaram seu posicionamento e transformaram visitas em faturamento contínuo.
            </p>
          </div>

          <button
            onClick={onOpenAdmin}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-orange-500/10 hover:bg-orange-500/20 border border-orange-500/30 text-orange-400 font-bold text-xs sm:text-sm transition-all"
          >
            <Plus className="w-4 h-4" />
            <span>Adicionar Novo Feedback</span>
          </button>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="glass-card rounded-2xl p-7 border-white/10 hover:border-orange-500/40 transition-all duration-300 flex flex-col justify-between group relative"
            >
              <div className="absolute top-6 right-6 text-orange-500/15 group-hover:text-orange-500/30 transition-colors">
                <Quote className="w-10 h-10" />
              </div>

              <div>
                {/* Rating stars */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                  ))}
                  <span className="text-xs text-slate-400 font-bold ml-2">5.0 / 5.0</span>
                </div>

                {/* Content */}
                <p className="text-sm sm:text-base text-slate-200 leading-relaxed mb-6 italic">
                  "{item.content}"
                </p>
              </div>

              {/* Author & Result */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src={item.avatar}
                    alt={item.name}
                    className="w-11 h-11 rounded-full object-cover border border-orange-500/40"
                  />
                  <div>
                    <h4 className="text-sm font-bold text-white group-hover:text-orange-400 transition-colors">
                      {item.name}
                    </h4>
                    <p className="text-xs text-slate-400">
                      {item.role} • <strong className="text-slate-300 font-medium">{item.company}</strong>
                    </p>
                  </div>
                </div>

                {item.resultMetric && (
                  <div className="hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-500/15 border border-orange-500/30 text-orange-400 text-xs font-bold">
                    <TrendingUp className="w-3.5 h-3.5" />
                    <span>{item.resultMetric}</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

import React, { useState } from 'react';
import { Plus, Eye, ArrowUpRight } from 'lucide-react';
import type { TemplateItem } from '../types';
import { TemplatePreviewModal } from '../components/TemplatePreviewModal';

interface PortfolioPageProps {
  templates: TemplateItem[];
  onOpenAdmin: () => void;
}

export const PortfolioPage: React.FC<PortfolioPageProps> = ({ templates, onOpenAdmin }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('todos');
  const [previewTemplate, setPreviewTemplate] = useState<TemplateItem | null>(null);

  const categories = [
    { id: 'todos', label: 'Todos os Projetos' },
    { id: 'fitness', label: 'Fitness & Academias' },
    { id: 'saude', label: 'Saúde & Clínicas' },
    { id: 'advocacia', label: 'Direito & Escritórios' },
    { id: 'ecommerce', label: 'E-commerce' },
    { id: 'sistema', label: 'Sistemas Web' },
    { id: 'landing-page', label: 'Landing Pages' },
  ];

  const filtered = selectedCategory === 'todos'
    ? templates
    : templates.filter(t => t.category === selectedCategory);

  return (
    <div className="pt-32 sm:pt-40 pb-28 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 pb-8 border-b border-white/10">
        <div>
          <span className="text-xs font-semibold text-orange-400 uppercase tracking-wider block mb-2">
            Portfólio & Modelos
          </span>
          <h1 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
            Nossos Projetos & Templates
          </h1>
          <p className="text-sm sm:text-base text-slate-400 mt-3 max-w-2xl leading-relaxed">
            Estruturas desenvolvidas com foco em alta performance, usabilidade móvel e conversão para diferentes segmentos.
          </p>
        </div>

        <button
          onClick={onOpenAdmin}
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/[0.04] hover:bg-orange-500/15 border border-white/10 hover:border-orange-500/40 text-xs font-semibold text-slate-300 hover:text-orange-400 transition-all self-start md:self-auto"
        >
          <Plus className="w-4 h-4" />
          <span>Subir Novo Template</span>
        </button>
      </div>

      {/* Categories Bar */}
      <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.id)}
            className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
              selectedCategory === cat.id
                ? 'bg-orange-500 text-black font-bold'
                : 'bg-white/[0.03] text-slate-400 hover:text-white border border-white/10 hover:border-white/20'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filtered.map((item) => (
          <div
            key={item.id}
            className="studio-card rounded-2xl overflow-hidden flex flex-col justify-between group"
          >
            {/* Image */}
            <div className="aspect-[16/10] overflow-hidden bg-black relative">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md text-[10px] font-semibold text-slate-300 border border-white/10">
                {item.categoryLabel}
              </div>
              {item.conversionRate && (
                <div className="absolute bottom-3 left-3 px-2.5 py-0.5 rounded-md bg-orange-500 text-black text-[10px] font-extrabold">
                  {item.conversionRate}
                </div>
              )}
            </div>

            {/* Details */}
            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-base font-bold text-white mb-2 group-hover:text-orange-400 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed line-clamp-2 mb-4">
                  {item.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-6">
                  {item.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-[10px] px-2 py-0.5 rounded bg-white/[0.03] border border-white/8 text-slate-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="grid grid-cols-2 gap-2.5 pt-4 border-t border-white/8">
                <button
                  onClick={() => setPreviewTemplate(item)}
                  className="flex items-center justify-center gap-1.5 py-2 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] text-xs font-semibold text-slate-300 hover:text-white transition-colors"
                >
                  <Eye className="w-3.5 h-3.5 text-orange-400" />
                  <span>Visualizar</span>
                </button>

                <a
                  href={`https://wa.me/5500000000000?text=${encodeURIComponent(
                    `Olá xSpaceMKT! Fiquei interessado no projeto/template "${item.title}". Como podemos adaptá-lo para a minha empresa?`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 py-2 rounded-lg bg-orange-500 hover:bg-orange-600 text-black text-xs font-bold transition-all"
                >
                  <span>Contratar</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      <TemplatePreviewModal
        template={previewTemplate}
        onClose={() => setPreviewTemplate(null)}
      />
    </div>
  );
};

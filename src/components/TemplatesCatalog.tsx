import React, { useState } from 'react';
import { 
  Eye, 
  ExternalLink, 
  Plus, 
  Zap, 
  TrendingUp, 
  Sparkles 
} from 'lucide-react';
import type { TemplateItem } from '../types';
import { TemplatePreviewModal } from './TemplatePreviewModal';

interface TemplatesCatalogProps {
  templates: TemplateItem[];
  onOpenAdmin: () => void;
}

export const TemplatesCatalog: React.FC<TemplatesCatalogProps> = ({ templates, onOpenAdmin }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('todos');
  const [previewTemplate, setPreviewTemplate] = useState<TemplateItem | null>(null);

  const categories = [
    { id: 'todos', label: 'Todos os Projetos' },
    { id: 'fitness', label: 'Academias & Fitness' },
    { id: 'saude', label: 'Clínicas & Saúde' },
    { id: 'advocacia', label: 'Advocacia & Direito' },
    { id: 'ecommerce', label: 'Lojas Virtuais' },
    { id: 'sistema', label: 'Sistemas Web' },
    { id: 'landing-page', label: 'Landing Pages & Outros' },
  ];

  const filteredTemplates = selectedCategory === 'todos' 
    ? templates 
    : templates.filter(t => t.category === selectedCategory);

  return (
    <section id="templates" className="py-24 relative bg-[#070709] border-t border-white/5">
      {/* Background Subtle Orange Glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-orange-600/10 rounded-full blur-[130px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-bold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Vitrine de Modelos & Portfólio</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
              Templates de Alta Conversão <br />
              <span className="gradient-fire-text">Prontos para o seu Nicho.</span>
            </h2>
            <p className="text-slate-300 text-sm sm:text-base mt-3">
              Modelos desenhados estrategicamente para atrair clientes, transmitir autoridade e aumentar as vendas do seu negócio desde o primeiro dia.
            </p>
          </div>

          {/* Quick Action to Add/Manage Templates */}
          <div className="flex items-center gap-3">
            <button
              onClick={onOpenAdmin}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-orange-500/15 hover:bg-orange-500/25 border border-orange-500/40 text-orange-400 hover:text-orange-300 font-bold text-xs sm:text-sm transition-all shadow-[0_0_20px_rgba(255,102,0,0.15)]"
            >
              <Plus className="w-4 h-4" />
              <span>Subir Novo Template</span>
            </button>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-thin">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                selectedCategory === cat.id
                  ? 'bg-orange-500 text-black shadow-[0_0_15px_rgba(255,102,0,0.4)] scale-105'
                  : 'bg-[#121218] text-slate-300 hover:text-white border border-white/10 hover:border-orange-500/30'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Templates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTemplates.map((template) => (
            <div
              key={template.id}
              className="glass-card rounded-2xl overflow-hidden border-white/10 hover:border-orange-500/40 transition-all duration-300 flex flex-col justify-between group shadow-lg hover:shadow-2xl hover:shadow-orange-500/10"
            >
              {/* Image Container */}
              <div className="relative aspect-[16/10] overflow-hidden bg-black/80">
                <img
                  src={template.image}
                  alt={template.title}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d12] via-transparent to-transparent opacity-80"></div>

                {/* Category Badge */}
                <div className="absolute top-3 left-3">
                  <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/15 text-orange-400">
                    {template.categoryLabel}
                  </span>
                </div>

                {/* Speed score badge */}
                {template.speedScore && (
                  <div className="absolute top-3 right-3 flex items-center gap-1 text-[11px] font-bold px-2.5 py-1 rounded-full bg-black/80 backdrop-blur-md border border-green-500/30 text-green-400">
                    <Zap className="w-3 h-3 text-green-400" />
                    <span>{template.speedScore}/100</span>
                  </div>
                )}

                {/* Conversion metric highlight */}
                {template.conversionRate && (
                  <div className="absolute bottom-3 left-3 flex items-center gap-1.5 text-[11px] font-bold px-3 py-1 rounded-full bg-orange-500/90 text-black shadow-md">
                    <TrendingUp className="w-3.5 h-3.5" />
                    <span>{template.conversionRate}</span>
                  </div>
                )}
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-orange-400 transition-colors">
                    {template.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 line-clamp-2 mb-4 leading-relaxed">
                    {template.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {template.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] px-2 py-0.5 rounded-md bg-white/[0.04] border border-white/10 text-slate-400"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="grid grid-cols-2 gap-3 pt-4 border-t border-white/10">
                  <button
                    onClick={() => setPreviewTemplate(template)}
                    className="flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 text-xs font-bold text-slate-200 hover:text-white transition-all"
                  >
                    <Eye className="w-4 h-4 text-orange-400" />
                    <span>Visualizar</span>
                  </button>

                  <a
                    href={`https://wa.me/5500000000000?text=${encodeURIComponent(
                      `Olá xSpaceMKT! Tenho interesse no modelo "${template.title}". Poderia me passar mais informações?`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-400 hover:to-orange-500 text-black text-xs font-extrabold shadow-md shadow-orange-500/20 transition-all"
                  >
                    <span>Quero Esse</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Preview Modal */}
      <TemplatePreviewModal
        template={previewTemplate}
        onClose={() => setPreviewTemplate(null)}
      />
    </section>
  );
};

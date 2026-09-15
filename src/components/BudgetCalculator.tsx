import React, { useState } from 'react';
import { Calculator, Check, MessageCircle, ShieldCheck, Zap } from 'lucide-react';
import confetti from 'canvas-confetti';

interface ProjectTypeOption {
  id: string;
  name: string;
  basePrice: number;
  description: string;
}

interface FeatureOption {
  id: string;
  name: string;
  price: number;
  recommended?: boolean;
}

export const BudgetCalculator: React.FC = () => {
  const projectTypes: ProjectTypeOption[] = [
    {
      id: 'landing',
      name: 'Landing Page de Alta Conversão',
      basePrice: 890,
      description: 'Página única focada em venda direta ou captação de leads com máxima velocidade.'
    },
    {
      id: 'institucional',
      name: 'Site Institucional Pro',
      basePrice: 1690,
      description: 'Site corporativo de 4 a 6 páginas para posicionamento e autoridade da sua marca.'
    },
    {
      id: 'ecommerce',
      name: 'Loja Virtual / E-commerce',
      basePrice: 2790,
      description: 'Plataforma completa de vendas com checkout transparente, cálculo de frete e estoque.'
    },
    {
      id: 'sistema',
      name: 'Sistema Web Sob Medida',
      basePrice: 4200,
      description: 'Dashboard, controle de clientes, automações e painel seguro personalizado.'
    }
  ];

  const extraFeatures: FeatureOption[] = [
    { id: 'whatsapp', name: 'Integração Inteligente WhatsApp', price: 150, recommended: true },
    { id: 'admin', name: 'Painel CMS para você editar textos e fotos', price: 350, recommended: true },
    { id: 'seo', name: 'Otimização Completa de SEO para o Google', price: 300, recommended: true },
    { id: 'pix', name: 'Checkout com PIX Automático e Cartão', price: 380 },
    { id: 'blog', name: 'Módulo de Blog para Marketing de Conteúdo', price: 290 },
    { id: 'express', name: 'Entrega Expressa Prioritária (5-7 dias)', price: 400 },
  ];

  const [selectedType, setSelectedType] = useState<string>('institucional');
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>(['whatsapp', 'admin', 'seo']);
  const [clientName, setClientName] = useState<string>('');
  const [clientCompany, setClientCompany] = useState<string>('');

  const currentType = projectTypes.find(t => t.id === selectedType) || projectTypes[0];

  const toggleFeature = (id: string) => {
    if (selectedFeatures.includes(id)) {
      setSelectedFeatures(selectedFeatures.filter(f => f !== id));
    } else {
      setSelectedFeatures([...selectedFeatures, id]);
    }
  };

  const calculateTotal = () => {
    const base = currentType.basePrice;
    const extras = selectedFeatures.reduce((acc, featId) => {
      const feat = extraFeatures.find(f => f.id === featId);
      return acc + (feat ? feat.price : 0);
    }, 0);
    return base + extras;
  };

  const total = calculateTotal();
  const installment12x = (total / 12 * 1.15).toFixed(2); // with representative parcel calculation

  const handleSendToWhatsApp = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 }
    });

    const selectedFeaturesNames = selectedFeatures
      .map(fid => extraFeatures.find(f => f.id === fid)?.name)
      .filter(Boolean)
      .join(', ');

    const message = `Olá xSpaceMKT! Fiz uma simulação de projeto no site:
👤 Nome: ${clientName || 'Cliente'}
🏢 Empresa: ${clientCompany || 'Não informada'}
🚀 Tipo de Projeto: ${currentType.name}
✨ Adicionais: ${selectedFeaturesNames || 'Nenhum'}
💰 Estimativa: R$ ${total.toLocaleString('pt-BR')} (ou 12x de ~R$ ${installment12x})

Gostaria de agendar uma conversa para fechar os detalhes!`;

    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/5500000000000?text=${encoded}`, '_blank');
  };

  return (
    <section id="simulador" className="py-24 relative bg-[#0a0a0f] border-t border-white/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-bold uppercase tracking-wider mb-3">
            <Calculator className="w-3.5 h-3.5" />
            <span>Simulador de Investimento Online</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-4">
            Monte o seu projeto sob medida <br />
            <span className="gradient-fire-text">com transparência total.</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base">
            Selecione o formato ideal para o seu negócio e veja o investimento estimado em tempo real, sem surpresas.
          </p>
        </div>

        {/* Calculator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Choices (8 cols) */}
          <div className="lg:col-span-7 space-y-8">
            {/* Step 1: Project Type */}
            <div>
              <label className="block text-sm font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-orange-500 text-black flex items-center justify-center text-xs font-black">
                  1
                </span>
                Qual o tipo de projeto ideal para sua empresa?
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {projectTypes.map((type) => {
                  const isSelected = selectedType === type.id;
                  return (
                    <div
                      key={type.id}
                      onClick={() => setSelectedType(type.id)}
                      className={`p-4 rounded-xl border cursor-pointer transition-all duration-200 text-left flex flex-col justify-between ${
                        isSelected
                          ? 'bg-orange-500/15 border-orange-500 shadow-[0_0_15px_rgba(255,102,0,0.25)]'
                          : 'bg-[#121218] border-white/10 hover:border-white/20'
                      }`}
                    >
                      <div>
                        <div className="flex items-center justify-between mb-1.5">
                          <h4 className="text-sm font-bold text-white">{type.name}</h4>
                          {isSelected && (
                            <span className="w-4 h-4 rounded-full bg-orange-500 text-black flex items-center justify-center">
                              <Check className="w-3 h-3 stroke-[3]" />
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-slate-400 mb-3">{type.description}</p>
                      </div>
                      <span className="text-xs font-black text-orange-400">
                        A partir de R$ {type.basePrice.toLocaleString('pt-BR')}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Add-on Features */}
            <div>
              <label className="block text-sm font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-orange-500 text-black flex items-center justify-center text-xs font-black">
                  2
                </span>
                Recursos Adicionais & Integrações
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {extraFeatures.map((feat) => {
                  const isChecked = selectedFeatures.includes(feat.id);
                  return (
                    <div
                      key={feat.id}
                      onClick={() => toggleFeature(feat.id)}
                      className={`p-3.5 rounded-xl border cursor-pointer flex items-center justify-between transition-all ${
                        isChecked
                          ? 'bg-orange-500/10 border-orange-500/70 text-white'
                          : 'bg-[#121218] border-white/10 text-slate-300 hover:border-white/20'
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <div
                          className={`w-4 h-4 rounded border flex items-center justify-center transition-all ${
                            isChecked ? 'bg-orange-500 border-orange-500 text-black' : 'border-slate-500 bg-black/40'
                          }`}
                        >
                          {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                        </div>
                        <span className="text-xs font-medium">{feat.name}</span>
                      </div>
                      <span className="text-xs font-bold text-orange-400 shrink-0 ml-2">
                        +R$ {feat.price}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Quick Identification */}
            <div>
              <label className="block text-sm font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-orange-500 text-black flex items-center justify-center text-xs font-black">
                  3
                </span>
                Identificação Rápida (Opcional)
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input
                  type="text"
                  placeholder="Seu Nome ou Responsável"
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-[#121218] border border-white/10 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-orange-500"
                />
                <input
                  type="text"
                  placeholder="Nome da sua Empresa / Segmento"
                  value={clientCompany}
                  onChange={(e) => setClientCompany(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-[#121218] border border-white/10 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-orange-500"
                />
              </div>
            </div>
          </div>

          {/* Right Column: Live Summary Card (5 cols) */}
          <div className="lg:col-span-5 lg:sticky lg:top-24">
            <div className="glass-card rounded-2xl p-6 border-orange-500/30 shadow-[0_0_35px_rgba(255,102,0,0.15)] relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/10 rounded-full blur-2xl pointer-events-none"></div>

              <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-orange-400">
                  Resumo da Proposta
                </span>
                <span className="text-[11px] px-2.5 py-0.5 rounded-full bg-green-500/20 text-green-400 border border-green-500/30 font-semibold flex items-center gap-1">
                  <Zap className="w-3 h-3" /> Cálculo Imediato
                </span>
              </div>

              {/* Selected Type */}
              <div className="mb-4">
                <span className="text-xs text-slate-400 block mb-1">Projeto Selecionado:</span>
                <p className="text-base font-bold text-white flex items-center justify-between">
                  <span>{currentType.name}</span>
                  <span className="text-sm text-orange-400">R$ {currentType.basePrice.toLocaleString('pt-BR')}</span>
                </p>
              </div>

              {/* Selected Extras count */}
              <div className="mb-6 pt-3 border-t border-white/10 text-xs text-slate-300">
                <span className="text-slate-400 block mb-2">Recursos Inclusos:</span>
                <div className="space-y-1.5 max-h-32 overflow-y-auto pr-1">
                  {selectedFeatures.length === 0 ? (
                    <p className="text-slate-500 italic">Nenhum adicional selecionado</p>
                  ) : (
                    selectedFeatures.map((fid) => {
                      const feat = extraFeatures.find(f => f.id === fid);
                      if (!feat) return null;
                      return (
                        <div key={fid} className="flex justify-between items-center text-[11px]">
                          <span className="text-slate-300">• {feat.name}</span>
                          <span className="text-orange-400 font-semibold">+R$ {feat.price}</span>
                        </div>
                      );
                    })
                  )}
                </div>
              </div>

              {/* Total Card */}
              <div className="p-4 rounded-xl bg-black/60 border border-white/10 mb-6">
                <span className="text-xs text-slate-400 block mb-1">Investimento Total Estimado:</span>
                <div className="text-3xl font-black text-white flex items-baseline gap-1">
                  <span>R$</span>
                  <span className="gradient-fire-text">{total.toLocaleString('pt-BR')}</span>
                </div>
                <p className="text-[11px] text-slate-400 mt-1">
                  ou em até <strong>12x de ~R$ {installment12x}</strong> no cartão
                </p>
              </div>

              {/* Action Button */}
              <button
                onClick={handleSendToWhatsApp}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-400 hover:to-orange-500 text-black font-extrabold text-sm flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(255,102,0,0.4)] transition-all transform active:scale-98"
              >
                <MessageCircle className="w-5 h-5 fill-black" />
                <span>Enviar Orçamento para o WhatsApp</span>
              </button>

              <div className="mt-4 flex items-center justify-center gap-2 text-[11px] text-slate-400">
                <ShieldCheck className="w-4 h-4 text-green-400" />
                <span>Sem compromisso • Resposta ágil pela nossa equipe</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { 
  Globe, 
  ShoppingCart, 
  Layers, 
  Target, 
  Palette, 
  TrendingUp, 
  ArrowRight, 
  Check
} from 'lucide-react';

export const Services: React.FC = () => {
  const services = [
    {
      icon: <Globe className="w-7 h-7 text-orange-400" />,
      title: 'Criação de Sites Institucionais',
      badge: 'Mais Procurado',
      description: 'Apresente sua empresa com a autoridade, elegância e credibilidade que ela realmente merece. Estrutura desenhada para transformar visitantes em contatos.',
      features: [
        'Design moderno alinhado à sua marca',
        'Otimização completa para o Google (SEO)',
        'Integração direta com o WhatsApp',
        'Página rápida com nota máxima de velocidade'
      ]
    },
    {
      icon: <ShoppingCart className="w-7 h-7 text-orange-400" />,
      title: 'Lojas Virtuais & E-commerce',
      badge: 'Vendas 24h',
      description: 'Venda seus produtos 24 horas por dia com segurança, agilidade e uma experiência de compra sem atritos que converte muito mais.',
      features: [
        'Checkout transparente com PIX e Cartão',
        'Cálculo de frete automático',
        'Painel para controle fácil de estoque',
        'Totalmente adaptado para compras no celular'
      ]
    },
    {
      icon: <Layers className="w-7 h-7 text-orange-400" />,
      title: 'Sistemas Web Sob Medida',
      badge: 'Alta Escala',
      description: 'Soluções personalizadas como dashboards administrativos, portais de clientes, sistemas de agendamento e automação de processos para o seu negócio.',
      features: [
        'Painéis administrativos seguros',
        'Controle de permissões e relatórios',
        'Banco de dados escalável na nuvem',
        'Integrações via APIs e Webhooks'
      ]
    },
    {
      icon: <Target className="w-7 h-7 text-orange-400" />,
      title: 'Tráfego Pago & Performance',
      badge: 'Leads Qualificados',
      description: 'Anúncios de alta precisão no Google Ads, Instagram e Facebook para colocar sua empresa na frente de clientes que já estão prontos para comprar.',
      features: [
        'Campanhas focadas em ROI positivo',
        'Público-alvo hipersegmentado',
        'Relatórios claros de métricas e conversões',
        'Instalação e configuração de pixels'
      ]
    },
    {
      icon: <Palette className="w-7 h-7 text-orange-400" />,
      title: 'Identidade Visual & Branding',
      badge: 'Posicionamento',
      description: 'Sua marca com personalidade e profissionalismo marcante. Desenvolvemos logotipos, paleta de cores e manuais visuais que geram lembrança instantânea.',
      features: [
        'Logotipo exclusivo e memorável',
        'Guia completo de aplicação e cores',
        'Artes para redes sociais e papelaria',
        'Alinhamento com o público de alto padrão'
      ]
    },
    {
      icon: <TrendingUp className="w-7 h-7 text-orange-400" />,
      title: 'Estratégia de Marketing Digital',
      badge: 'Crescimento',
      description: 'Planejamento estratégico que gera movimento. Criamos a rota completa para sua empresa expandir seu alcance e dominar o seu nicho de atuação.',
      features: [
        'Análise de concorrência e posicionamento',
        'Estratégias de funil de vendas',
        'Produção de conteúdo orientada a conversão',
        'Acompanhamento e otimização contínua'
      ]
    }
  ];

  return (
    <section id="servicos" className="py-24 relative bg-[#09090d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-bold uppercase tracking-wider mb-4">
            <span>O que fazemos de melhor</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-4">
            Soluções digitais completas para <br className="hidden sm:inline" />
            <span className="gradient-fire-text">impulsionar sua marca.</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            Da criação do seu site à captação de clientes qualificados: unimos design moderno, código de alta velocidade e estratégias de conversão.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((item, index) => (
            <div
              key={index}
              className="glass-card glass-card-hover rounded-2xl p-7 flex flex-col justify-between relative group border-white/10 hover:border-orange-500/50"
            >
              {/* Card top badge */}
              <div className="flex items-center justify-between mb-6">
                <div className="w-14 h-14 rounded-xl bg-orange-500/10 border border-orange-500/30 flex items-center justify-center group-hover:scale-110 group-hover:bg-orange-500/20 transition-all shadow-[0_0_15px_rgba(255,102,0,0.15)]">
                  {item.icon}
                </div>
                <span className="text-[11px] font-extrabold uppercase px-3 py-1 rounded-full bg-white/[0.05] border border-white/10 text-orange-300">
                  {item.badge}
                </span>
              </div>

              {/* Title and Description */}
              <div className="mb-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-orange-400 transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Features List */}
              <div className="space-y-2.5 pt-4 border-t border-white/10 mb-6">
                {item.features.map((feat, fIndex) => (
                  <div key={fIndex} className="flex items-start gap-2 text-xs text-slate-300">
                    <Check className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              {/* Action Button */}
              <a
                href="#simulador"
                className="inline-flex items-center justify-between w-full px-4 py-2.5 rounded-xl bg-white/[0.03] hover:bg-orange-500/20 border border-white/10 hover:border-orange-500/40 text-xs font-bold text-slate-200 hover:text-white transition-all group/btn"
              >
                <span>Simular este serviço</span>
                <ArrowRight className="w-4 h-4 text-orange-400 group-hover/btn:translate-x-1 transition-transform" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

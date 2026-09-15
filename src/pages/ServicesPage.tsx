import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, ShoppingCart, Layers, Target, Check, ArrowRight } from 'lucide-react';

export const ServicesPage: React.FC = () => {
  const services = [
    {
      icon: <Globe className="w-6 h-6 text-orange-400" />,
      title: 'Sites Institucionais & Landing Pages',
      subtitle: 'Presença digital estratégica para marcas sólidas',
      description: 'Construímos páginas que transmitem autoridade imediata. Cada detalhe, da tipografia à disposição dos conteúdos, é pensado para reter a atenção e conduzir o visitante até a tomada de decisão.',
      deliverables: [
        'Arquitetura de informação e hierarquia clara',
        'Design 100% responsivo para celulares e desktops',
        'Otimização técnica para o Google (SEO)',
        'Integração direta com o WhatsApp e formulários seguros',
        'Painel para edição autônoma de textos e imagens'
      ]
    },
    {
      icon: <ShoppingCart className="w-6 h-6 text-orange-400" />,
      title: 'Lojas Virtuais & E-commerce',
      subtitle: 'Estruturas de venda fluida com checkout ágil',
      description: 'Desenvolvemos plataformas de comércio eletrônico focadas na redução de fricção. Checkout simplificado, cálculo automático de fretes e experiência de compra rápida pelo celular.',
      deliverables: [
        'Checkout transparente com PIX, Cartão e Boleto',
        'Cálculo de frete em tempo real (Correios e transportadoras)',
        'Painel de gestão de catálogo, pedidos e estoque',
        'Segurança de dados e certificado SSL de ponta a ponta',
        'Integração com ferramentas de recuperação de carrinhos'
      ]
    },
    {
      icon: <Layers className="w-6 h-6 text-orange-400" />,
      title: 'Sistemas Web Sob Medida',
      subtitle: 'Automação e controle para a operação da sua empresa',
      description: 'Criamos softwares web personalizados para atender às particularidades do seu fluxo de trabalho: portais de clientes, dashboards gerenciais, sistemas de agendamento e controle interno.',
      deliverables: [
        'Dashboards e relatórios analíticos em tempo real',
        'Controle de permissões por níveis de usuário',
        'Banco de dados na nuvem com alta disponibilidade',
        'Conexão com APIs externas e sistemas legados',
        'Código modular e escalável'
      ]
    },
    {
      icon: <Target className="w-6 h-6 text-orange-400" />,
      title: 'Gestão de Tráfego Pago',
      subtitle: 'Atração contínua de clientes qualificados',
      description: 'Não basta ter um site de alto nível: é necessário atrair o público certo. Estruturamos campanhas estratégicas no Google Ads e Meta Ads com foco estrito em custo por aquisição e retorno sobre o investimento.',
      deliverables: [
        'Planejamento de palavras-chave e públicos de interesse',
        'Configuração avançada de tags de rastreamento e conversão',
        'Criação de anúncios e testes A/B contínuos',
        'Relatórios claros de desempenho e métricas reais'
      ]
    }
  ];

  const steps = [
    {
      number: '01',
      title: 'Diagnóstico & Briefing',
      text: 'Entendemos seu modelo de negócios, concorrentes e os objetivos centrais do projeto.'
    },
    {
      number: '02',
      title: 'Estrutura & Design',
      text: 'Criamos o layout focado na identidade da sua marca e na melhor experiência do usuário.'
    },
    {
      number: '03',
      title: 'Desenvolvimento & Testes',
      text: 'Programação limpa com rigoroso controle de velocidade, segurança e responsividade móvel.'
    },
    {
      number: '04',
      title: 'Publicação & Treinamento',
      text: 'Colocamos o projeto no ar e entregamos todos os acessos e orientações para sua equipe.'
    }
  ];

  return (
    <div className="pt-32 sm:pt-40 pb-28 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
      {/* Page Header */}
      <div className="max-w-3xl">
        <span className="text-xs font-semibold text-orange-400 uppercase tracking-wider block mb-2">
          O Que Fazemos
        </span>
        <h1 className="text-3xl sm:text-5xl font-bold text-white tracking-tight leading-tight">
          Soluções digitais completas para empresas que buscam liderança.
        </h1>
        <p className="text-sm sm:text-base text-slate-400 mt-4 leading-relaxed">
          Unimos estratégia de posicionamento, design moderno e engenharia de software para transformar o site da sua empresa em um canal ativo de geração de valor.
        </p>
      </div>

      {/* Services List */}
      <div className="space-y-12">
        {services.map((srv, idx) => (
          <div
            key={idx}
            className="studio-card rounded-3xl p-8 sm:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
          >
            <div className="lg:col-span-5 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center">
                {srv.icon}
              </div>
              <h2 className="text-2xl font-bold text-white">{srv.title}</h2>
              <p className="text-xs text-orange-400 font-medium">{srv.subtitle}</p>
              <p className="text-sm text-slate-400 leading-relaxed pt-2">
                {srv.description}
              </p>
            </div>

            <div className="lg:col-span-7 bg-[#0c0c10] p-6 sm:p-8 rounded-2xl border border-white/8 space-y-3">
              <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-3">
                O que está contemplado:
              </h4>
              <div className="space-y-2.5">
                {srv.deliverables.map((item, dIdx) => (
                  <div key={dIdx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-300">
                    <Check className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Methodology / Steps */}
      <div className="pt-12 border-t border-white/10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-semibold text-orange-400 uppercase tracking-wider block mb-2">Metodologia</span>
          <h2 className="text-2xl sm:text-4xl font-bold text-white">Como Trabalhamos</h2>
          <p className="text-sm text-slate-400 mt-2">Processo claro e previsível do início à entrega final.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, sIdx) => (
            <div key={sIdx} className="studio-card p-6 rounded-2xl space-y-3">
              <span className="text-2xl font-mono font-bold text-orange-400">{step.number}</span>
              <h3 className="text-base font-bold text-white">{step.title}</h3>
              <p className="text-xs text-slate-400 leading-relaxed">{step.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="p-10 rounded-3xl bg-[#121217] border border-white/10 text-center flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="text-left">
          <h3 className="text-xl font-bold text-white">Dúvidas sobre qual o melhor formato para sua empresa?</h3>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">Converse com nossos especialistas para traçar o escopo ideal.</p>
        </div>
        <Link
          to="/contato"
          className="px-6 py-3 rounded-xl bg-orange-500 hover:bg-orange-600 text-black font-bold text-xs sm:text-sm whitespace-nowrap flex items-center gap-2"
        >
          <span>Falar com Especialista</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
};

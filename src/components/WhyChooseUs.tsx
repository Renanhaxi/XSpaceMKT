import React from 'react';
import { Zap, Smartphone, ShieldCheck, Trophy, Sparkles, Clock } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const differentials = [
    {
      icon: <Zap className="w-6 h-6 text-orange-400" />,
      title: 'Velocidade Extrema (PageSpeed 95+)',
      description: 'Sites que demoram mais de 3 segundos perdem 53% dos visitantes. Desenvolvemos com código limpo e otimizado para carregamento instantâneo no 4G/5G.'
    },
    {
      icon: <Smartphone className="w-6 h-6 text-orange-400" />,
      title: '100% Responsivo e Mobile First',
      description: 'Mais de 80% do tráfego hoje vem do celular. Seu site responderá com perfeição matemática em smartphones, tablets, notebooks e monitores ultrawide.'
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-orange-400" />,
      title: 'Segurança & Blindagem Digital',
      description: 'Certificado SSL incluso, boas práticas contra ataques cibernéticos, formulários higienizados e infraestrutura segura na nuvem.'
    },
    {
      icon: <Trophy className="w-6 h-6 text-orange-400" />,
      title: 'Design que Gera Autoridade',
      description: 'Visual magnético com a paleta de cores e estilo da sua marca. Criamos para transmitir credibilidade imediata logo nos primeiros 5 segundos.'
    },
    {
      icon: <Sparkles className="w-6 h-6 text-orange-400" />,
      title: 'Autonomia para Subir Conteúdos',
      description: 'Você não fica refém de desenvolvedores para pequenas alterações. Gerencie templates, textos, fotos e produtos com facilidade.'
    },
    {
      icon: <Clock className="w-6 h-6 text-orange-400" />,
      title: 'Prazos Rigorosamente Cumpridos',
      description: 'Cronograma claro e transparente desde o primeiro dia. Entregamos seu projeto pronto para vender no prazo combinado.'
    }
  ];

  return (
    <section id="diferenciais" className="py-24 relative bg-[#070709] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-bold uppercase tracking-wider mb-3">
            <Trophy className="w-3.5 h-3.5" />
            <span>O Padrão xSpaceMKT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-4">
            Por que empresas escolhem a <br />
            <span className="gradient-fire-text">xSpaceMKT para desenvolver?</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base">
            Não entregamos apenas código: entregamos uma ferramenta de vendas de alto desempenho e autoridade para o seu negócio.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {differentials.map((diff, index) => (
            <div
              key={index}
              className="glass-card rounded-2xl p-7 border-white/10 hover:border-orange-500/40 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/30 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-orange-500/20 transition-all shadow-[0_0_15px_rgba(255,102,0,0.15)]">
                {diff.icon}
              </div>
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-orange-400 transition-colors">
                {diff.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {diff.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

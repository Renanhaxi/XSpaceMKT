import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FAQItem[] = [
    {
      question: 'Quanto tempo leva para o meu site ou sistema ficar pronto?',
      answer: 'Nosso prazo padrão varia de 5 a 7 dias úteis para Landing Pages de alta conversão, de 10 a 15 dias para Sites Institucionais completos, e prazos customizados conforme a complexidade para Lojas Virtuais e Sistemas Web. Prezamos pelo cumprimento rigoroso de prazos.'
    },
    {
      question: 'O site funciona perfeitamente no celular (smartphone)?',
      answer: 'Sim, com 100% de perfeição! Trabalhamos com metodologia Mobile-First, garantindo que botões, textos, imagens e formulários se adaptem instantaneamente a qualquer modelo de celular, tablet e computador sem distorções.'
    },
    {
      question: 'Eu mesmo poderei atualizar textos, fotos ou adicionar novos conteúdos?',
      answer: 'Com certeza! Nós criamos o site já pensando na sua independência. Você terá um painel prático onde poderá subir novos templates, editar informações e gerenciar seus conteúdos sem depender de suporte técnico para pequenas mudanças.'
    },
    {
      question: 'O site é seguro e possui certificado SSL?',
      answer: 'Sim! Todos os projetos entregues pela xSpaceMKT possuem Certificado de Segurança SSL (o cadeado verde no navegador), proteção contra ataques de injeção de código e boas práticas recomendadas pelas diretrizes de segurança da Google.'
    },
    {
      question: 'Quais são as formas de pagamento aceitas?',
      answer: 'Facilitamos o pagamento para a sua empresa: aceitamos PIX (com desconto à vista), transferência bancária, boleto e parcelamento em até 12x no cartão de crédito.'
    },
    {
      question: 'Vocês também ajudam na contratação de domínio e hospedagem?',
      answer: 'Sim! Se você ainda não tem o domínio (ex: suaempresa.com.br) ou a hospedagem, nossa equipe orienta em todo o processo passo a passo para que você tenha a melhor infraestrutura pelo menor custo.'
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 relative bg-[#09090d] border-t border-white/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-bold uppercase tracking-wider mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Perguntas Frequentes</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-3">
            Tire suas dúvidas antes de começar.
          </h2>
          <p className="text-slate-300 text-sm sm:text-base">
            Tudo o que você precisa saber sobre o desenvolvimento do seu novo site.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="glass-card rounded-2xl border-white/10 overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                >
                  <span className="text-sm sm:text-base font-bold text-white hover:text-orange-400 transition-colors">
                    {faq.question}
                  </span>
                  <span
                    className={`w-7 h-7 rounded-full bg-white/[0.05] flex items-center justify-center shrink-0 text-orange-400 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-orange-500/20' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </span>
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-white/5 pt-4">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

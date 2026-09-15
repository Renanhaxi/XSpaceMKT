import React, { useState } from 'react';
import { 
  MessageSquare, 
  Mail, 
  Phone, 
  Clock, 
  CheckCircle2, 
  ArrowRight,
  ShieldCheck
} from 'lucide-react';
import confetti from 'canvas-confetti';

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'Site Institucional',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    confetti({
      particleCount: 70,
      spread: 60,
      origin: { y: 0.7 }
    });

    setSubmitted(true);

    const whatsappText = `Olá equipe xSpaceMKT!
Gostaria de solicitar um atendimento:
👤 Nome: ${formData.name}
📱 Telefone: ${formData.phone}
📧 E-mail: ${formData.email}
💼 Interesse: ${formData.service}
📝 Detalhes: ${formData.message || 'Sem mensagem adicional'}`;

    const encoded = encodeURIComponent(whatsappText);
    setTimeout(() => {
      window.open(`https://wa.me/5500000000000?text=${encoded}`, '_blank');
    }, 500);
  };

  return (
    <section id="contato" className="py-24 relative bg-[#070709] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Direct Info (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-bold uppercase tracking-wider">
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Vamos Conversar</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
              Pronto para colocar sua empresa em <br />
              <span className="gradient-fire-text">outro patamar?</span>
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Dê o primeiro passo para ter uma presença digital que gera vendas todos os dias. Fale com nossa equipe e receba uma consultoria inicial sem compromisso.
            </p>

            {/* Direct Contact Cards */}
            <div className="space-y-3 pt-2">
              <a
                href="https://wa.me/5500000000000"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl glass-card border-white/10 hover:border-orange-500/40 transition-all group"
              >
                <div className="w-10 h-10 rounded-lg bg-orange-500/15 flex items-center justify-center text-orange-400 group-hover:scale-110 transition-transform">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 block">WhatsApp Oficial:</span>
                  <span className="text-sm font-bold text-white group-hover:text-orange-400 transition-colors">
                    (11) 90000-0000 • Atendimento Rápido
                  </span>
                </div>
              </a>

              <a
                href="mailto:contato@xspacemkt.com"
                className="flex items-center gap-4 p-4 rounded-xl glass-card border-white/10 hover:border-orange-500/40 transition-all group"
              >
                <div className="w-10 h-10 rounded-lg bg-orange-500/15 flex items-center justify-center text-orange-400 group-hover:scale-110 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 block">E-mail Comercial:</span>
                  <span className="text-sm font-bold text-white group-hover:text-orange-400 transition-colors">
                    contato@xspacemkt.com
                  </span>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 rounded-xl glass-card border-white/10">
                <div className="w-10 h-10 rounded-lg bg-orange-500/15 flex items-center justify-center text-orange-400">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 block">Horário de Atendimento:</span>
                  <span className="text-sm font-bold text-white">
                    Segunda a Sexta das 08h às 19h • Sábados das 09h às 13h
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Fast Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="glass-card rounded-3xl p-6 sm:p-10 border-orange-500/30 shadow-2xl relative">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-xl font-bold text-white">Solicite uma Proposta</h3>
                  <p className="text-xs text-slate-400 mt-1">Preencha e nossa equipe entrará em contato em minutos.</p>
                </div>
                <div className="hidden sm:flex items-center gap-1 text-[11px] text-green-400 bg-green-500/10 px-3 py-1 rounded-full border border-green-500/20 font-semibold">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Ambiente Seguro</span>
                </div>
              </div>

              {submitted ? (
                <div className="p-8 rounded-2xl bg-orange-500/10 border border-orange-500/40 text-center animate-in fade-in duration-300">
                  <CheckCircle2 className="w-12 h-12 text-orange-400 mx-auto mb-3" />
                  <h4 className="text-lg font-bold text-white mb-2">Mensagem Recebida com Sucesso!</h4>
                  <p className="text-xs sm:text-sm text-slate-300 mb-6">
                    Redirecionando para o WhatsApp da equipe comercial para atendimento imediato...
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-5 py-2 rounded-xl bg-orange-500 text-black font-bold text-xs"
                  >
                    Enviar Outra Mensagem
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                        Seu Nome Completo *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Ex: Carlos Eduardo"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#121218] border border-white/10 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-orange-500 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                        WhatsApp com DDD *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="Ex: (11) 98765-4321"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#121218] border border-white/10 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-orange-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                        E-mail de Contato
                      </label>
                      <input
                        type="email"
                        placeholder="Ex: seuemail@empresa.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#121218] border border-white/10 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-orange-500 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                        Qual solução você precisa?
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#121218] border border-white/10 text-xs sm:text-sm text-white focus:outline-none focus:border-orange-500 transition-colors"
                      >
                        <option value="Landing Page de Alta Conversão">Landing Page de Alta Conversão</option>
                        <option value="Site Institucional Completo">Site Institucional Completo</option>
                        <option value="Loja Virtual / E-commerce">Loja Virtual / E-commerce</option>
                        <option value="Sistema Web Sob Medida">Sistema Web Sob Medida</option>
                        <option value="Gestão de Tráfego Pago">Gestão de Tráfego Pago</option>
                        <option value="Identidade Visual & Branding">Identidade Visual & Branding</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                      Conte um pouco sobre a sua empresa ou projeto
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Ex: Gostaria de reformular nosso site para atrair novos clientes e ter integração direta com o WhatsApp..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#121218] border border-white/10 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-orange-500 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-orange-500 via-orange-600 to-amber-500 hover:from-orange-400 hover:to-orange-500 text-black font-black text-sm flex items-center justify-center gap-2 shadow-[0_0_25px_rgba(255,102,0,0.35)] transition-all transform active:scale-98"
                  >
                    <span>Solicitar Orçamento Agora</span>
                    <ArrowRight className="w-4 h-4 text-black" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

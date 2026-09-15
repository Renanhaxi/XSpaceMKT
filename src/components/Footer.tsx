import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUp, MessageCircle, Mail, MapPin } from 'lucide-react';

interface FooterProps {
  onOpenAdmin: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenAdmin }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#070709] border-t border-white/8 text-slate-400 text-xs sm:text-sm pt-16 pb-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/5">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="flex items-center gap-3 group">
              <img
                src="/assets/logo-icon.png"
                alt="xSpaceMKT"
                className="w-9 h-9 object-contain"
              />
              <div className="flex flex-col">
                <div className="flex items-center tracking-tight font-bold text-lg">
                  <span className="text-white">xSpace</span>
                  <span className="text-orange-500">MKT</span>
                </div>
                <span className="text-[8px] tracking-[0.25em] font-medium text-slate-400 uppercase -mt-0.5">
                  Marketing que impulsiona
                </span>
              </div>
            </Link>

            <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
              Estúdio especializado em sites institucionais, e-commerces e sistemas web sob medida. Design moderno, velocidade e foco em conversão para empresas que buscam liderança.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://wa.me/5500000000000"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-white/5 hover:bg-orange-500/20 hover:text-orange-400 text-slate-300 flex items-center justify-center border border-white/8 transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a
                href="mailto:contato@xspacemkt.com"
                className="w-8 h-8 rounded-lg bg-white/5 hover:bg-orange-500/20 hover:text-orange-400 text-slate-300 flex items-center justify-center border border-white/8 transition-colors"
                aria-label="E-mail"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Páginas */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Navegação</h4>
            <ul className="space-y-2 text-xs">
              <li><Link to="/" className="hover:text-orange-400 transition-colors">Início</Link></li>
              <li><Link to="/portfolio" className="hover:text-orange-400 transition-colors">Portfólio & Modelos</Link></li>
              <li><Link to="/servicos" className="hover:text-orange-400 transition-colors">Serviços & Metodologia</Link></li>
              <li><Link to="/planos" className="hover:text-orange-400 transition-colors">Planos & Orçamento</Link></li>
              <li><Link to="/sobre" className="hover:text-orange-400 transition-colors">Sobre a xSpaceMKT</Link></li>
              <li><Link to="/contato" className="hover:text-orange-400 transition-colors">Contato & FAQ</Link></li>
            </ul>
          </div>

          {/* Soluções */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Soluções</h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>Sites Institucionais</li>
              <li>Lojas Virtuais & E-commerce</li>
              <li>Sistemas Web Customizados</li>
              <li>Landing Pages de Alta Conversão</li>
              <li>Gestão de Tráfego Pago</li>
            </ul>
          </div>

          {/* Atendimento */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Atendimento</h4>
            <p className="text-xs text-slate-400 flex items-start gap-2">
              <Mail className="w-3.5 h-3.5 text-orange-400 shrink-0 mt-0.5" />
              <span>contato@xspacemkt.com</span>
            </p>
            <p className="text-xs text-slate-400 flex items-start gap-2">
              <MessageCircle className="w-3.5 h-3.5 text-orange-400 shrink-0 mt-0.5" />
              <span>(11) 90000-0000</span>
            </p>
            <p className="text-xs text-slate-400 flex items-start gap-2">
              <MapPin className="w-3.5 h-3.5 text-orange-400 shrink-0 mt-0.5" />
              <span>Atendimento Digital em Todo o Brasil</span>
            </p>

            <div className="pt-2">
              <button
                onClick={onOpenAdmin}
                className="text-[11px] text-slate-500 hover:text-orange-400 transition-colors underline underline-offset-4"
              >
                Gerenciador de Conteúdo (Admin)
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} xSpaceMKT • Marketing que impulsiona. Todos os direitos reservados.</p>
          <button
            onClick={scrollToTop}
            className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 transition-all"
            aria-label="Voltar ao Topo"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};

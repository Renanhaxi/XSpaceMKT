import React from 'react';
import { ArrowUp, MessageCircle, Mail, MapPin } from 'lucide-react';

interface FooterProps {
  onOpenAdmin: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenAdmin }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050507] border-t border-white/10 text-slate-400 text-xs sm:text-sm pt-16 pb-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/5">
          {/* Col 1 & 2: Brand info */}
          <div className="lg:col-span-2 space-y-4">
            <a href="#inicio" className="flex items-center gap-3 group">
              <img
                src="/assets/logo-icon.png"
                alt="xSpaceMKT Ícone"
                className="w-10 h-10 object-contain drop-shadow-[0_0_10px_rgba(255,102,0,0.5)]"
              />
              <div className="flex flex-col">
                <div className="flex items-center tracking-tight font-black text-xl">
                  <span className="text-white">xSpace</span>
                  <span className="text-[#ff6600]">MKT</span>
                </div>
                <span className="text-[9px] tracking-[0.24em] font-semibold text-slate-400 uppercase -mt-1">
                  Marketing que impulsiona
                </span>
              </div>
            </a>

            <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
              Agência especializada no desenvolvimento de sites de alta conversão, portais institucionais, e-commerces e sistemas web sob medida. Elevamos o posicionamento e autoridade da sua empresa no digital.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 hover:bg-orange-500/20 hover:text-orange-400 text-slate-300 flex items-center justify-center border border-white/10 transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 hover:bg-orange-500/20 hover:text-orange-400 text-slate-300 flex items-center justify-center border border-white/10 transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a
                href="https://wa.me/5500000000000"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 hover:bg-orange-500/20 hover:text-orange-400 text-slate-300 flex items-center justify-center border border-white/10 transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 3: Soluções */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Nossas Soluções</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#templates" className="hover:text-orange-400 transition-colors">Sites Institucionais</a></li>
              <li><a href="#templates" className="hover:text-orange-400 transition-colors">Lojas Virtuais & E-commerce</a></li>
              <li><a href="#templates" className="hover:text-orange-400 transition-colors">Landing Pages de Venda</a></li>
              <li><a href="#templates" className="hover:text-orange-400 transition-colors">Sistemas Web Customizados</a></li>
              <li><a href="#servicos" className="hover:text-orange-400 transition-colors">Tráfego Pago Meta & Google</a></li>
              <li><a href="#servicos" className="hover:text-orange-400 transition-colors">Identidade Visual & Branding</a></li>
            </ul>
          </div>

          {/* Col 4: Links Rápidos */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Navegação</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#inicio" className="hover:text-orange-400 transition-colors">Início</a></li>
              <li><a href="#templates" className="hover:text-orange-400 transition-colors">Catálogo de Templates</a></li>
              <li><a href="#simulador" className="hover:text-orange-400 transition-colors">Calculadora de Orçamento</a></li>
              <li><a href="#planos" className="hover:text-orange-400 transition-colors">Tabela de Preços</a></li>
              <li><a href="#feedbacks" className="hover:text-orange-400 transition-colors">Avaliações de Clientes</a></li>
              <li><a href="#diferenciais" className="hover:text-orange-400 transition-colors">Por Que a xSpaceMKT</a></li>
            </ul>
          </div>

          {/* Col 5: Atendimento */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Atendimento</h4>
            <p className="text-xs text-slate-400 flex items-start gap-2">
              <Mail className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
              <span>contato@xspacemkt.com</span>
            </p>
            <p className="text-xs text-slate-400 flex items-start gap-2">
              <MessageCircle className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
              <span>(11) 90000-0000</span>
            </p>
            <p className="text-xs text-slate-400 flex items-start gap-2">
              <MapPin className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
              <span>Atendimento Digital em Todo o Brasil</span>
            </p>

            <div className="pt-2">
              <button
                onClick={onOpenAdmin}
                className="text-[11px] text-slate-500 hover:text-orange-400 transition-colors underline underline-offset-4"
              >
                Gerenciador Interno (Admin)
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} xSpaceMKT • Todos os direitos reservados. Marketing que impulsiona.</p>
          <div className="flex items-center gap-4">
            <span>Sites Ultrarrápidos e 100% Responsivos</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-white/5 hover:bg-orange-500 hover:text-black text-slate-300 transition-all"
              aria-label="Voltar ao Topo"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

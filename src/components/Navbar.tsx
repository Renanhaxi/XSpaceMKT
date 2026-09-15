import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Settings } from 'lucide-react';

interface NavbarProps {
  onOpenAdmin: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenAdmin }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Início', href: '#inicio' },
    { label: 'Serviços', href: '#servicos' },
    { label: 'Templates & Portfólio', href: '#templates' },
    { label: 'Simulador', href: '#simulador' },
    { label: 'Planos', href: '#planos' },
    { label: 'Feedbacks', href: '#feedbacks' },
    { label: 'Diferenciais', href: '#diferenciais' },
    { label: 'Contato', href: '#contato' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#070709]/90 backdrop-blur-md border-b border-orange-500/15 py-3 shadow-lg shadow-black/60'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo with official visual */}
          <a href="#inicio" className="flex items-center gap-3 group">
            <div className="relative">
              <img
                src="/assets/logo-icon.png"
                alt="xSpaceMKT Ícone"
                className="w-10 h-10 object-contain drop-shadow-[0_0_12px_rgba(255,102,0,0.5)] transition-transform duration-300 group-hover:scale-105"
              />
              <span className="absolute -inset-1 bg-orange-500/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity"></span>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center tracking-tight font-black text-xl">
                <span className="text-white font-extrabold">xSpace</span>
                <span className="text-[#ff6600] font-black drop-shadow-[0_0_8px_rgba(255,102,0,0.6)]">MKT</span>
              </div>
              <span className="text-[9px] tracking-[0.24em] font-semibold text-slate-400 uppercase -mt-1">
                Marketing que impulsiona
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-slate-300 hover:text-[#ff7a1a] transition-colors relative py-1 group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-orange-500 to-amber-400 transition-all duration-300 group-hover:w-full rounded-full"></span>
              </a>
            ))}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Admin trigger button */}
            <button
              onClick={onOpenAdmin}
              title="Gerenciador de Conteúdo e Templates"
              className="p-2 text-slate-400 hover:text-orange-400 bg-white/[0.03] hover:bg-orange-500/10 border border-white/10 hover:border-orange-500/30 rounded-xl transition-all"
            >
              <Settings className="w-5 h-5" />
            </button>

            {/* Direct WhatsApp CTA Button */}
            <a
              href="https://wa.me/5500000000000?text=Ol%C3%A1%20xSpaceMKT!%20Gostaria%20de%20solicitar%20um%20or%C3%A7amento%20para%20o%20meu%20site."
              target="_blank"
              rel="noopener noreferrer"
              className="relative group overflow-hidden rounded-xl p-[1px] focus:outline-none"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-orange-500 via-amber-400 to-orange-600 rounded-xl animate-pulse-glow"></span>
              <span className="relative flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#0c0c10] group-hover:bg-[#121218] text-white text-sm font-bold tracking-wide transition-all">
                <span>Solicite um Orçamento</span>
                <ArrowRight className="w-4 h-4 text-orange-400 group-hover:translate-x-1 transition-transform" />
              </span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={onOpenAdmin}
              className="p-2 text-slate-400 hover:text-orange-400 bg-white/[0.04] border border-white/10 rounded-lg"
              title="Gerenciador"
            >
              <Settings className="w-5 h-5" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-200 hover:text-orange-400 bg-white/[0.04] border border-white/10 rounded-lg focus:outline-none"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[60px] bg-[#09090d]/98 border-b border-orange-500/20 backdrop-blur-xl px-6 py-6 shadow-2xl transition-all animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-semibold text-slate-200 hover:text-orange-400 py-2 border-b border-white/5 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 flex flex-col gap-3">
              <a
                href="https://wa.me/5500000000000?text=Ol%C3%A1%20xSpaceMKT!%20Gostaria%20de%20solicitar%20um%20or%C3%A7amento%20para%20o%20meu%20site."
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 text-black font-extrabold text-sm shadow-lg shadow-orange-500/30"
              >
                <span>Falar com a xSpaceMKT</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

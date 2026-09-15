import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight, Settings } from 'lucide-react';

interface NavbarProps {
  onOpenAdmin: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenAdmin }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  const navLinks = [
    { label: 'Início', to: '/' },
    { label: 'Portfólio', to: '/portfolio' },
    { label: 'Serviços', to: '/servicos' },
    { label: 'Planos & Orçamento', to: '/planos' },
    { label: 'Sobre', to: '/sobre' },
    { label: 'Contato', to: '/contato' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled
          ? 'bg-[#09090b]/95 backdrop-blur-md border-b border-white/8 py-3.5 shadow-xl shadow-black/40'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <img
              src="/assets/logo-icon.png"
              alt="xSpaceMKT"
              className="w-9 h-9 object-contain transition-transform group-hover:scale-105"
            />
            <div className="flex flex-col">
              <div className="flex items-center tracking-tight font-extrabold text-lg">
                <span className="text-white">xSpace</span>
                <span className="text-orange-500">MKT</span>
              </div>
              <span className="text-[8px] tracking-[0.25em] font-medium text-slate-400 uppercase -mt-0.5">
                Marketing que impulsiona
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `text-xs font-semibold transition-colors py-1 relative ${
                    isActive
                      ? 'text-orange-400'
                      : 'text-slate-400 hover:text-white'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <span>{link.label}</span>
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-orange-500 rounded-full"></span>
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenAdmin}
              title="Gerenciador Interno"
              className="p-2 text-slate-400 hover:text-orange-400 bg-white/[0.03] hover:bg-white/[0.08] border border-white/8 rounded-xl transition-all"
            >
              <Settings className="w-4 h-4" />
            </button>

            <Link
              to="/contato"
              className="px-4 py-2 rounded-xl bg-orange-500 hover:bg-orange-600 text-black text-xs font-bold flex items-center gap-1.5 transition-all shadow-sm"
            >
              <span>Solicitar Orçamento</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={onOpenAdmin}
              className="p-2 text-slate-400 hover:text-white bg-white/[0.03] border border-white/8 rounded-lg"
              title="Admin"
            >
              <Settings className="w-4 h-4" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-300 hover:text-white bg-white/[0.03] border border-white/8 rounded-lg focus:outline-none"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[60px] bg-[#0c0c10]/98 border-b border-white/10 backdrop-blur-xl px-6 py-6 shadow-2xl animate-in fade-in duration-150">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `text-sm font-semibold py-2 border-b border-white/5 ${
                    isActive ? 'text-orange-400' : 'text-slate-300'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <div className="pt-3">
              <Link
                to="/contato"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-orange-500 text-black font-bold text-xs"
              >
                <span>Solicitar Orçamento</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

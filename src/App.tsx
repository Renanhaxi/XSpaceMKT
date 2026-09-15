import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { WhatsAppFloating } from './components/WhatsAppFloating';
import { AdminModal } from './components/admin/AdminModal';

import { HomePage } from './pages/HomePage';
import { PortfolioPage } from './pages/PortfolioPage';
import { ServicesPage } from './pages/ServicesPage';
import { PlansPage } from './pages/PlansPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';

import { storageService } from './services/storageService';
import type { TemplateItem, TestimonialItem, PricingPlan } from './types';

// Scroll to top helper on route navigation
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export function App() {
  const [templates, setTemplates] = useState<TemplateItem[]>([]);
  const [testimonials, setTestimonials] = useState<TestimonialItem[]>([]);
  const [plans, setPlans] = useState<PricingPlan[]>([]);
  const [isAdminOpen, setIsAdminOpen] = useState(false);

  // Load data on mount
  useEffect(() => {
    setTemplates(storageService.getTemplates());
    setTestimonials(storageService.getTestimonials());
    setPlans(storageService.getPlans());
  }, []);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-[#09090b] text-slate-100 flex flex-col antialiased selection:bg-orange-500 selection:text-black">
        {/* Navigation Bar */}
        <Navbar onOpenAdmin={() => setIsAdminOpen(true)} />

        {/* Multi-page Routing */}
        <main className="flex-1">
          <Routes>
            <Route
              path="/"
              element={
                <HomePage
                  featuredTemplates={templates}
                  testimonials={testimonials}
                />
              }
            />
            <Route
              path="/portfolio"
              element={
                <PortfolioPage
                  templates={templates}
                  onOpenAdmin={() => setIsAdminOpen(true)}
                />
              }
            />
            <Route path="/servicos" element={<ServicesPage />} />
            <Route path="/planos" element={<PlansPage plans={plans} />} />
            <Route path="/sobre" element={<AboutPage testimonials={testimonials} />} />
            <Route path="/contato" element={<ContactPage />} />
          </Routes>
        </main>

        {/* Global Footer */}
        <Footer onOpenAdmin={() => setIsAdminOpen(true)} />

        {/* Floating WhatsApp Quick Contact Button */}
        <WhatsAppFloating />

        {/* Admin Content & Template Manager Modal */}
        <AdminModal
          isOpen={isAdminOpen}
          onClose={() => setIsAdminOpen(false)}
          templates={templates}
          testimonials={testimonials}
          plans={plans}
          onTemplatesChange={(newTemplates) => setTemplates(newTemplates)}
          onTestimonialsChange={(newTestimonials) => setTestimonials(newTestimonials)}
          onPlansChange={(newPlans) => setPlans(newPlans)}
        />
      </div>
    </BrowserRouter>
  );
}

export default App;

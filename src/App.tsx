import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { TemplatesCatalog } from './components/TemplatesCatalog';
import { BudgetCalculator } from './components/BudgetCalculator';
import { PricingPlans } from './components/PricingPlans';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { ContactForm } from './components/ContactForm';
import { Footer } from './components/Footer';
import { WhatsAppFloating } from './components/WhatsAppFloating';
import { AdminModal } from './components/admin/AdminModal';

import { storageService } from './services/storageService';
import type { TemplateItem, TestimonialItem, PricingPlan } from './types';

export function App() {
  const [templates, setTemplates] = useState<TemplateItem[]>([]);
  const [testimonials, setTestimonials] = useState<TestimonialItem[]>([]);
  const [plans, setPlans] = useState<PricingPlan[]>([]);
  const [isAdminOpen, setIsAdminOpen] = useState(false);

  // Load persisted or initial data on mount
  useEffect(() => {
    setTemplates(storageService.getTemplates());
    setTestimonials(storageService.getTestimonials());
    setPlans(storageService.getPlans());
  }, []);

  return (
    <div className="min-h-screen bg-[#070709] text-slate-100 flex flex-col antialiased selection:bg-orange-500 selection:text-black">
      {/* Navigation Header */}
      <Navbar onOpenAdmin={() => setIsAdminOpen(true)} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero />

        {/* Specialized Services */}
        <Services />

        {/* Templates Showcase & Portfólio */}
        <TemplatesCatalog
          templates={templates}
          onOpenAdmin={() => setIsAdminOpen(true)}
        />

        {/* Interactive Budget Simulator */}
        <BudgetCalculator />

        {/* Pricing Plans */}
        <PricingPlans plans={plans} />

        {/* Why Choose xSpaceMKT (Speed, Responsiveness, Security) */}
        <WhyChooseUs />

        {/* Client Reviews / Testimonials */}
        <Testimonials
          testimonials={testimonials}
          onOpenAdmin={() => setIsAdminOpen(true)}
        />

        {/* FAQ Section */}
        <FAQ />

        {/* Contact & Consultation Form */}
        <ContactForm />
      </main>

      {/* Footer */}
      <Footer onOpenAdmin={() => setIsAdminOpen(true)} />

      {/* Floating WhatsApp Action Button */}
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
  );
}

export default App;

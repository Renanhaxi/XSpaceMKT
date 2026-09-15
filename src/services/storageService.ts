import type { TemplateItem, PricingPlan, TestimonialItem } from '../types';
import { INITIAL_TEMPLATES } from '../data/initialTemplates';
import { INITIAL_PLANS } from '../data/initialPlans';
import { INITIAL_TESTIMONIALS } from '../data/initialTestimonials';

const STORAGE_KEYS = {
  TEMPLATES: 'xspacemkt_templates_v1',
  PLANS: 'xspacemkt_plans_v1',
  TESTIMONIALS: 'xspacemkt_testimonials_v1'
};

export const storageService = {
  // Templates
  getTemplates(): TemplateItem[] {
    try {
      const stored = localStorage.getItem(STORAGE_KEYS.TEMPLATES);
      if (stored) {
        return JSON.parse(stored);
      }
    } catch (e) {
      console.error('Failed to parse templates from localStorage', e);
    }
    return INITIAL_TEMPLATES;
  },

  saveTemplates(templates: TemplateItem[]): void {
    localStorage.setItem(STORAGE_KEYS.TEMPLATES, JSON.stringify(templates));
  },

  addTemplate(template: Omit<TemplateItem, 'id'>): TemplateItem {
    const templates = this.getTemplates();
    const newTemplate: TemplateItem = {
      ...template,
      id: `tpl-${Date.now()}`
    };
    const updated = [newTemplate, ...templates];
    this.saveTemplates(updated);
    return newTemplate;
  },

  deleteTemplate(id: string): void {
    const templates = this.getTemplates().filter(t => t.id !== id);
    this.saveTemplates(templates);
  },

  // Testimonials / Feedbacks
  getTestimonials(): TestimonialItem[] {
    try {
      const stored = localStorage.getItem(STORAGE_KEYS.TESTIMONIALS);
      if (stored) {
        return JSON.parse(stored);
      }
    } catch (e) {
      console.error('Failed to parse testimonials from localStorage', e);
    }
    return INITIAL_TESTIMONIALS;
  },

  saveTestimonials(items: TestimonialItem[]): void {
    localStorage.setItem(STORAGE_KEYS.TESTIMONIALS, JSON.stringify(items));
  },

  addTestimonial(item: Omit<TestimonialItem, 'id'>): TestimonialItem {
    const items = this.getTestimonials();
    const newItem: TestimonialItem = {
      ...item,
      id: `test-${Date.now()}`
    };
    const updated = [newItem, ...items];
    this.saveTestimonials(updated);
    return newItem;
  },

  deleteTestimonial(id: string): void {
    const items = this.getTestimonials().filter(t => t.id !== id);
    this.saveTestimonials(items);
  },

  // Plans
  getPlans(): PricingPlan[] {
    try {
      const stored = localStorage.getItem(STORAGE_KEYS.PLANS);
      if (stored) {
        return JSON.parse(stored);
      }
    } catch (e) {
      console.error('Failed to parse plans from localStorage', e);
    }
    return INITIAL_PLANS;
  },

  savePlans(plans: PricingPlan[]): void {
    localStorage.setItem(STORAGE_KEYS.PLANS, JSON.stringify(plans));
  },

  // Reset to initial demo data
  resetAll(): void {
    localStorage.removeItem(STORAGE_KEYS.TEMPLATES);
    localStorage.removeItem(STORAGE_KEYS.PLANS);
    localStorage.removeItem(STORAGE_KEYS.TESTIMONIALS);
  },

  // Export all data as JSON
  exportData(): string {
    return JSON.stringify({
      templates: this.getTemplates(),
      plans: this.getPlans(),
      testimonials: this.getTestimonials(),
      exportedAt: new Date().toISOString()
    }, null, 2);
  },

  // Import data from JSON string
  importData(jsonString: string): boolean {
    try {
      const parsed = JSON.parse(jsonString);
      if (Array.isArray(parsed.templates)) {
        this.saveTemplates(parsed.templates);
      }
      if (Array.isArray(parsed.plans)) {
        this.savePlans(parsed.plans);
      }
      if (Array.isArray(parsed.testimonials)) {
        this.saveTestimonials(parsed.testimonials);
      }
      return true;
    } catch (e) {
      console.error('Failed to import data', e);
      return false;
    }
  }
};

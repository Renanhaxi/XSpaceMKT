import React from 'react';
import { ContactForm } from '../components/ContactForm';
import { FAQ } from '../components/FAQ';

export const ContactPage: React.FC = () => {
  return (
    <div className="pt-24 sm:pt-32 pb-24 space-y-16">
      {/* Contact Section */}
      <ContactForm />

      {/* FAQ Section */}
      <FAQ />
    </div>
  );
};

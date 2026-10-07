import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { resumeData } from '../data/resumeData';
import { SectionHeader } from '../components/UI';
import { Mail, Phone, Send } from 'lucide-react';

const Contact = () => {
  const [sent, setSent] = useState(false);
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const subject = encodeURIComponent(`Portfolio inquiry from ${form.get('name')}`);
    const body = encodeURIComponent(`${form.get('message')}\n\nFrom: ${form.get('name')} (${form.get('email')})`);
    window.location.href = `mailto:${resumeData.personalInfo.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };
  return (
    <section id="contact" className="py-24 bg-dark-surface/30">
      <div className="container mx-auto px-6">
        <SectionHeader title="Let's Build Something Useful." subtitle="Have a project, opportunity, or idea you'd like to discuss?" />

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="p-6 glass-card flex items-center gap-4">
                <div className="p-3 rounded-lg bg-accent-blue/10 text-accent-blue">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase">Email</p>
                  <a href={`mailto:${resumeData.personalInfo.email}`} className="text-white font-medium hover:text-accent-blue">{resumeData.personalInfo.email}</a>
                </div>
              </div>
              <div className="p-6 glass-card flex items-center gap-4">
                <div className="p-3 rounded-lg bg-accent-blue/10 text-accent-blue">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase">Phone</p>
                  <a href={`tel:${resumeData.personalInfo.phone}`} className="text-white font-medium hover:text-accent-blue">{resumeData.personalInfo.phone}</a>
                </div>
              </div>
              <div className="p-6 glass-card flex items-center gap-4 sm:col-span-2">
                <div className="p-3 rounded-lg bg-accent-blue/10 text-accent-blue">
                  <span className="font-bold text-lg">in</span>
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase">LinkedIn</p>
                  <a href={resumeData.personalInfo.linkedIn} target="_blank" rel="noreferrer" className="text-white font-medium hover:text-accent-blue transition-colors">
                    linkedin.com/in/megha-vastrad
                  </a>
                </div>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8"
          >
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <label htmlFor="contact-name" className="text-xs text-gray-500 uppercase font-semibold">Name</label>
                  <input
                    type="text"
                    name="name"
                    id="contact-name"
                    required
                    aria-label="Your name"
                    className="w-full px-4 py-3 rounded-lg bg-dark-bg border border-border-muted text-white focus:outline-none focus:border-accent-blue transition-colors"
                    placeholder="Your Name"
                  />
                </div>
                <div className="space-y-2">
                    <label htmlFor="contact-email" className="text-xs text-gray-500 uppercase font-semibold">Email</label>
                  <input
                    type="email"
                    name="email"
                    id="contact-email"
                    required
                    aria-label="Your email"
                    className="w-full px-4 py-3 rounded-lg bg-dark-bg border border-border-muted text-white focus:outline-none focus:border-accent-blue transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="contact-message" className="text-xs text-gray-500 uppercase font-semibold">Message</label>
                <textarea
                  rows={4}
                  name="message"
                  id="contact-message"
                  required
                  aria-label="Your message"
                  className="w-full px-4 py-3 rounded-lg bg-dark-bg border border-border-muted text-white focus:outline-none focus:border-accent-blue transition-colors resize-none"
                  placeholder="How can I help you?"
                />
              </div>
              <button type="submit" className="w-full py-4 rounded-lg bg-accent-blue text-white font-bold hover:bg-blue-600 transition-all flex items-center justify-center gap-2 group">
                {sent ? 'Opening your email app…' : 'Send Message'}
                <Send size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

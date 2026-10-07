import { motion } from 'framer-motion';
import { resumeData } from '../data/resumeData';
import { SectionHeader } from '../components/UI';
import { Activity } from 'lucide-react';

const Integrations = () => {
  return (
    <section id="integrations" className="py-24">
      <div className="container mx-auto px-6 text-center">
        <SectionHeader title="Integration Ecosystem" subtitle="Experience integrating with industry-standard developer productivity tools." />

        <div className="relative max-w-4xl mx-auto p-12 rounded-3xl border border-border-muted bg-dark-surface/50">
          <div className="absolute inset-0 bg-accent-blue/5 blur-3xl rounded-full" />

          <div className="relative z-10 flex flex-col items-center">
            <div className="flex flex-wrap justify-center gap-8 mb-12">
              {resumeData.integrations.map((tool) => (
                <motion.div
                  key={tool}
                  whileHover={{ y: -5 }}
                  className="px-6 py-3 rounded-xl glass-card text-white font-medium flex items-center gap-3"
                >
                  <div className="w-2 h-2 rounded-full bg-accent-blue" />
                  {tool}
                </motion.div>
              ))}
            </div>

            <div className="w-px h-12 bg-gradient-to-b from-accent-blue to-dark-bg mb-6" />

            <div className="p-6 rounded-2xl bg-accent-blue text-white font-bold text-lg shadow-xl shadow-accent-blue/20 flex items-center gap-3">
              <Activity size={20} />
              Engineering Activity & Reporting
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Integrations;

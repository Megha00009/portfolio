import { motion } from 'framer-motion';
import { Calendar, CheckCircle2 } from 'lucide-react';
import { resumeData } from '../data/resumeData';
import { SectionHeader } from '../components/UI';

const Experience = () => {
  return (
    <section id="experience" className="py-24 bg-dark-surface/30">
      <div className="container mx-auto px-6">
        <SectionHeader title="Professional Experience" subtitle="My journey as a software engineer, contributing to enterprise-grade microservices." />

        <div className="max-w-4xl mx-auto space-y-12">
          {resumeData.experience.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative pl-8 border-l-2 border-border-muted"
            >
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-accent-blue ring-4 ring-dark-bg" />

              <div className="flex flex-wrap justify-between items-start mb-6 gap-4">
                <div>
                  <h3 className="text-2xl font-bold text-white">{exp.company}</h3>
                  <p className="text-accent-blue font-medium">{exp.position}</p>
                </div>
                <div className="flex items-center gap-2 text-gray-500 text-sm bg-dark-bg px-3 py-1 rounded-full border border-border-muted">
                  <Calendar size={14} />
                  {exp.duration}
                </div>
              </div>

              <p className="text-gray-400 mb-6 italic leading-relaxed">
                {exp.description}
              </p>

              <div className="grid md:grid-cols-2 gap-4">
                {exp.highlights.map((highlight, i) => (
                  <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-dark-bg/40 border border-border-muted/50">
                    <CheckCircle2 size={18} className="text-accent-blue mt-1 flex-shrink-0" />
                    <p className="text-sm text-gray-400 leading-relaxed">{highlight}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

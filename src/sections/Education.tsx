import { motion } from 'framer-motion';
import { resumeData } from '../data/resumeData';
import { SectionHeader } from '../components/UI';
import { GraduationCap, Award } from 'lucide-react';

const Education = () => {
  return (
    <section id="education" className="py-24 bg-dark-surface/30">
      <div className="container mx-auto px-6">
        <SectionHeader title="Education & Certifications" subtitle="Academic foundations and professional training in computer science." />

        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h3 className="text-xl font-bold text-white mb-8 flex items-center gap-3">
              <GraduationCap className="text-accent-blue" /> Academic Journey
            </h3>
            <div className="space-y-8">
              {resumeData.education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="relative pl-6 border-l border-border-muted"
                >
                  <div className="absolute -left-[5px] top-1 w-2 h-2 rounded-full bg-accent-blue" />
                  <div className="mb-1 flex justify-between items-center">
                    <h4 className="text-lg font-semibold text-white">{edu.institution}</h4>
                    <span className="text-xs font-mono text-gray-500">{edu.year}</span>
                  </div>
                  <p className="text-gray-400">{edu.degree}</p>
                  <p className="text-sm text-accent-blue font-medium mt-1">{edu.grade}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold text-white mb-8 flex items-center gap-3">
              <Award className="text-accent-blue" /> Certifications & Internships
            </h3>
            <div className="space-y-6">
              {resumeData.certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="glass-card p-6"
                >
                  <div className="flex justify-between items-start mb-3">
                    <h4 className="font-bold text-white">{cert.title}</h4>
                    {cert.year && <span className="text-xs font-mono text-gray-500">{cert.year}</span>}
                  </div>
                  <p className="text-sm text-gray-400 mb-4">{cert.provider}</p>
                  {cert.details.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {cert.details.map((detail) => (
                        <span key={detail} className="px-2 py-1 text-[10px] rounded bg-dark-bg border border-border-muted text-gray-500">
                          {detail}
                        </span>
                      ))}
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;

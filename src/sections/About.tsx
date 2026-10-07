import { motion } from 'framer-motion';
import { resumeData } from '../data/resumeData';
import { SectionHeader } from '../components/UI';

const About = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <SectionHeader title="About Me" subtitle="A professional software engineer focused on scalable backend architectures and robust full-stack solutions." />

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6 text-lg text-gray-400 leading-relaxed"
          >
            <p>
              {resumeData.summary}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            {resumeData.engineeringFocus.map((focus) => (
              <motion.div
                key={focus}
                whileHover={{ scale: 1.05, backgroundColor: 'rgba(59, 130, 246, 0.1)' }}
                className="p-4 glass-card border-border-muted flex items-center gap-3"
              >
                <div className="w-2 h-2 rounded-full bg-accent-blue" />
                <span className="text-sm font-medium text-gray-300">{focus}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

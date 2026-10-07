import { motion } from 'framer-motion';
import { resumeData } from '../data/resumeData';
import { SectionHeader } from '../components/UI';
import { Code, GitMerge, Bug, Users } from 'lucide-react';

const HowIBuild = () => {
  return (
    <section id="approach" className="py-24 bg-dark-surface/30">
      <div className="container mx-auto px-6">
        <SectionHeader title="How I Build" subtitle="My engineering mindset and approach to developing software." />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {resumeData.howIBuild.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-8 text-center group hover:border-accent-blue/50 transition-colors"
            >
              <div className="w-12 h-12 bg-accent-blue/10 text-accent-blue rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                {index === 0 && <Code size={24} />}
                {index === 1 && <GitMerge size={24} />}
                {index === 2 && <Bug size={24} />}
                {index === 3 && <Users size={24} />}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowIBuild;

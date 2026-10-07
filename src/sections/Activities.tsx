import { motion } from 'framer-motion';
import { resumeData } from '../data/resumeData';
import { SectionHeader } from '../components/UI';
import { Heart, Map, Book, Code, Users } from 'lucide-react';

const Activities = () => {
  return (
    <section id="activities" className="py-24">
      <div className="container mx-auto px-6">
        <SectionHeader title="Beyond Coding" subtitle="A glimpse into my interests and community involvement." />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {resumeData.activities.map((activity, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="p-6 rounded-2xl bg-dark-surface border border-border-muted flex items-center gap-4"
            >
              <div className="p-3 rounded-xl bg-dark-bg text-accent-blue">
                {index === 0 && <Heart size={20} />}
                {index === 1 && <Code size={20} />}
                {index === 2 && <Map size={20} />}
                {index === 3 && <Book size={20} />}
                {index === 4 && <Users size={20} />}
              </div>
              <p className="text-sm text-gray-300 leading-relaxed">{activity}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Temporary fix for missing imports in the component
export default Activities;

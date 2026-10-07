import { motion } from 'framer-motion';
import { resumeData } from '../data/resumeData';
import { SectionHeader } from '../components/UI';

const Skills = () => {
  const skillCategories = [
    { id: 'languages', title: 'Languages', data: resumeData.skills.languages },
    { id: 'backend', title: 'Backend', data: resumeData.skills.backend },
    { id: 'frontend', title: 'Frontend', data: resumeData.skills.frontend },
    { id: 'databasesTools', title: 'Databases & Tools', data: resumeData.skills.databasesTools },
    { id: 'coreStrengths', title: 'Core Strengths', data: resumeData.skills.coreStrengths },
  ];

  return (
    <section id="skills" className="py-24">
      <div className="container mx-auto px-6">
        <SectionHeader title="Technical Arsenal" subtitle="A curated set of technologies and strengths I use to build scalable software." />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((cat) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card p-6"
            >
              <h3 className="text-xl font-bold text-white mb-6 border-b border-border-muted pb-2">
                {cat.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {cat.data.map((skill) => (
                  <motion.div
                    key={skill.name}
                    whileHover={{ y: -2, borderColor: 'rgba(59, 130, 246, 0.5)' }}
                    className="min-w-[130px] flex-1 px-3 py-2 rounded-md bg-dark-bg border border-border-muted text-gray-300 text-sm cursor-default group"
                    title={skill.desc}
                    tabIndex={0}
                    aria-label={`${skill.name}: ${skill.desc}`}
                  >
                    <span className="block text-gray-200">{skill.name}</span>
                    <span className="block mt-1 text-xs text-gray-500">{skill.desc}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

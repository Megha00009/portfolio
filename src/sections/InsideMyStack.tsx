import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from '../components/UI';
import { Database, Server, Globe, Zap, Layout } from 'lucide-react';

const InsideMyStack = () => {
  const [activeLayer, setActiveLayer] = useState<string | null>(null);
  const layers = [
    {
      id: 'frontend',
      title: 'Frontend',
      tech: 'React + Material UI + Apollo Client',
      icon: <Layout size={20} />,
      color: 'bg-blue-500',
    },
    {
      id: 'api',
      title: 'API Layer',
      tech: 'REST + GraphQL',
      icon: <Globe size={20} />,
      color: 'bg-indigo-500',
    },
    {
      id: 'backend',
      title: 'Backend',
      tech: 'Java + Spring Boot + Quarkus',
      icon: <Server size={20} />,
      color: 'bg-purple-500',
    },
    {
      id: 'persistence',
      title: 'Persistence',
      tech: 'Hibernate/JPA + JDBC',
      icon: <Database size={20} />,
      color: 'bg-pink-500',
    },
    {
      id: 'database',
      title: 'Database',
      tech: 'MySQL + PostgreSQL',
      icon: <Database size={20} />,
      color: 'bg-orange-500',
    },
    {
      id: 'integrations',
      title: 'Integrations',
      tech: 'GitHub + GitLab + Jira + Jenkins',
      icon: <Zap size={20} />,
      color: 'bg-green-500',
    },
  ];

  return (
    <section id="stack" className="py-24 relative">
      <div className="container mx-auto px-6">
        <SectionHeader title="Inside My Stack" subtitle="A visualization of the technical layers I work with and how they interconnect." />

        <div className="max-w-3xl mx-auto relative">
          {layers.map((layer, index) => (
            <React.Fragment key={layer.id}>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02, x: 10 }}
                onHoverStart={() => setActiveLayer(layer.id)}
                onHoverEnd={() => setActiveLayer(null)}
                className={`glass-card p-6 mb-6 flex items-center justify-between group cursor-default relative z-10 transition-colors ${activeLayer === layer.id ? 'border-accent-blue/70 bg-accent-blue/5' : ''}`}
                tabIndex={0}
                onFocus={() => setActiveLayer(layer.id)}
                onBlur={() => setActiveLayer(null)}
                role="group"
                aria-label={`${layer.title}: ${layer.tech}`}
              >
                <div className="flex items-center gap-4">
                  <div className={`p-3 rounded-lg ${layer.color} text-white shadow-lg shadow-current/20`}>
                    {layer.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white">{layer.title}</h4>
                    <p className="text-gray-400 text-sm">{layer.tech}</p>
                  </div>
                </div>
                <div className="hidden md:block text-xs font-mono text-gray-600 group-hover:text-accent-blue transition-colors uppercase tracking-widest">
                  {activeLayer === layer.id ? layer.tech : `Layer_${index + 1}`}
                </div>
              </motion.div>
              {index < layers.length - 1 && (
                <div className="flex justify-center -mt-6 mb-6">
                  <motion.div
                    initial={{ height: 0 }}
                    whileInView={{ height: 32 }}
                    viewport={{ once: true }}
                    transition={{ delay: (index + 1) * 0.1 }}
                    className="w-px bg-gradient-to-b from-border-muted via-accent-blue to-border-muted"
                  />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InsideMyStack;

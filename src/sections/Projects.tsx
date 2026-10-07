import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Layers, Cpu } from 'lucide-react';
import { resumeData } from '../data/resumeData';
import { SectionHeader } from '../components/UI';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<any>(null);

  useEffect(() => {
    if (!selectedProject) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setSelectedProject(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedProject]);

  return (
    <section id="projects" className="py-24 bg-dark-surface/30">
      <div className="container mx-auto px-6">
        <SectionHeader title="Featured Projects" subtitle="Practical applications of my technical skills in solving real-world problems." />

        <div className="grid md:grid-cols-2 gap-8">
          {resumeData.projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="glass-card overflow-hidden cursor-pointer group"
              onClick={() => setSelectedProject(project)}
              role="button"
              tabIndex={0}
              onKeyDown={(event) => { if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); setSelectedProject(project); } }}
            >
              <div className="p-8">
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-2xl font-bold text-white group-hover:text-accent-blue transition-colors">
                    {project.title}
                  </h3>
                  <div className="p-2 rounded-lg bg-accent-blue/10 text-accent-blue">
                    <ExternalLink size={20} />
                  </div>
                </div>

                <p className="text-gray-400 mb-6 line-clamp-2">
                  {project.overview}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((t: string) => (
                    <span key={t} className="px-2 py-1 text-xs rounded bg-dark-bg border border-border-muted text-gray-500">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="p-4 rounded-lg bg-dark-bg/50 border border-border-muted">
                  <div className="flex items-center gap-2 mb-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                    <Layers size={14} />
                    Engineering Focus
                  </div>
                  <p className="text-sm text-gray-300">{project.engineeringFocus}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {selectedProject && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-6">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedProject(null)}
                className="absolute inset-0 bg-black/80 backdrop-blur-sm"
              />
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="relative w-full max-w-4xl glass-card max-h-[90vh] overflow-y-auto p-8"
                role="dialog"
                aria-modal="true"
                aria-labelledby="project-dialog-title"
                tabIndex={-1}
              >
                <button
                  aria-label="Close project details"
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-6 right-6 text-gray-500 hover:text-white transition-colors"
                >
                  <X size={24} />
                </button>

                <div className="grid lg:grid-cols-2 gap-12">
                  <div>
                    <h2 id="project-dialog-title" className="text-3xl font-bold text-white mb-4">{selectedProject.title}</h2>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {selectedProject.tech.map((t: string) => (
                        <span key={t} className="px-2 py-1 text-xs rounded bg-accent-blue/10 text-accent-blue border border-accent-blue/20">
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className="space-y-6 mb-8">
                      <div>
                        <h4 className="text-sm font-semibold text-gray-500 uppercase mb-2">Overview</h4>
                        <p className="text-gray-300 leading-relaxed">{selectedProject.overview}</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-gray-500 uppercase mb-2">Key Features</h4>
                        <ul className="space-y-2">
                          {selectedProject.keyFeatures.map((f: string, i: number) => (
                            <li key={i} className="flex items-start gap-2 text-gray-400 text-sm">
                              <div className="w-1.5 h-1.5 rounded-full bg-accent-blue mt-1.5 flex-shrink-0" />
                              {f}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-8">
                    <div className="p-6 rounded-xl bg-dark-bg border border-border-muted">
                      <div className="flex items-center gap-2 mb-6 text-sm font-semibold text-gray-500 uppercase">
                        <Cpu size={16} />
                        Architecture Flow
                      </div>
                      <div className="flex flex-col items-center gap-3">
                        {selectedProject.architecture.map((step: string, i: number) => (
                          <React.Fragment key={i}>
                            <div className="px-4 py-2 rounded-lg bg-dark-surface border border-border-muted text-sm text-gray-300 w-full text-center">
                              {step}
                            </div>
                            {i < selectedProject.architecture.length - 1 && (
                              <div className="w-px h-4 bg-border-muted" />
                            )}
                          </React.Fragment>
                        ))}
                      </div>
                    </div>

                    <div className="p-6 rounded-xl bg-dark-bg border border-border-muted">
                      <div className="flex items-center gap-2 mb-4 text-sm font-semibold text-gray-500 uppercase">
                        <Layers size={16} />
                        Engineering Approach
                      </div>
                      <p className="text-sm text-gray-400 leading-relaxed">
                        {selectedProject.engineeringFocus}. {selectedProject.overview}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;

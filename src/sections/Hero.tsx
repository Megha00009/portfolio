import { motion } from 'framer-motion';
import { ArrowRight, FileText } from 'lucide-react';
import { resumeData } from '../data/resumeData';
import { Button } from '../components/UI';

const Hero = () => {
  const { personalInfo } = resumeData;

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-accent-blue/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-blue-900/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-left"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-3 py-1 rounded-full bg-accent-blue/10 border border-accent-blue/20 text-accent-blue text-sm font-medium mb-6"
          >
            Associate Software Engineer
          </motion.div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            {personalInfo.name}
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 mb-8 font-medium">
            {personalInfo.title}
          </p>
          <p className="text-lg text-gray-500 mb-10 max-w-xl leading-relaxed">
            "Building backend services, APIs, data-driven applications and responsive user interfaces with Java and modern full-stack technologies."
          </p>

          <div className="flex flex-wrap gap-4">
            <Button onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
              View My Work
            </Button>
            <Button variant="secondary" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
              Contact Me
            </Button>
            <a href={personalInfo.resumeUrl} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-6 py-2 rounded-lg text-gray-400 hover:text-white transition-colors duration-200">
              <FileText size={18} />
              <span>Resume</span>
            </a>
          </div>

          <div className="flex gap-6 mt-12">
            <a href={personalInfo.linkedIn} target="_blank" rel="noreferrer" aria-label="LinkedIn profile" className="text-gray-500 hover:text-accent-blue transition-colors"><span className="text-lg font-bold">in</span></a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hidden lg:flex justify-center"
        >
          <div className="relative w-full max-w-md p-8 glass-card border-accent-blue/30">
            <div className="absolute -top-4 -right-4 w-12 h-12 bg-dark-bg border border-border-muted rounded-lg flex items-center justify-center text-accent-blue">
              <ArrowRight size={20} />
            </div>
            <div className="space-y-6">
              <StackItem label="Frontend" tech="React UI" color="bg-blue-500" />
              <div className="flex justify-center"><div className="w-px h-6 bg-border-muted" /></div>
              <StackItem label="API Layer" tech="REST / GraphQL" color="bg-indigo-500" />
              <div className="flex justify-center"><div className="w-px h-6 bg-border-muted" /></div>
              <StackItem label="Backend" tech="Spring Boot / Quarkus" color="bg-purple-500" />
              <div className="flex justify-center"><div className="w-px h-6 bg-border-muted" /></div>
              <StackItem label="ORM" tech="Hibernate / JPA" color="bg-pink-500" />
              <div className="flex justify-center"><div className="w-px h-6 bg-border-muted" /></div>
              <StackItem label="Database" tech="MySQL / PostgreSQL" color="bg-orange-500" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const StackItem = ({ label, tech, color }: { label: string; tech: string; color: string }) => (
  <motion.div
    whileHover={{ x: 10 }}
    className="flex items-center gap-4 p-3 rounded-lg bg-dark-bg/50 border border-border-muted group"
  >
    <div className={`w-2 h-8 rounded-full ${color}`} />
    <div>
      <p className="text-xs text-gray-500 uppercase tracking-wider">{label}</p>
      <p className="text-sm font-semibold text-gray-200 group-hover:text-white transition-colors">{tech}</p>
    </div>
  </motion.div>
);

export default Hero;

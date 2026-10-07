import { motion } from 'framer-motion';

const Button = ({ children, variant = 'primary', className = '', ...props }: any) => {
  const variants: any = {
    primary: 'bg-accent-blue text-white hover:bg-blue-600',
    secondary: 'bg-dark-surface text-gray-300 border border-border-muted hover:bg-zinc-800',
    outline: 'border border-accent-blue text-accent-blue hover:bg-accent-blue/10',
  };
  return (
    <button
      className={`px-6 py-2 rounded-lg font-medium transition-all duration-200 active:scale-95 ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

const SectionHeader = ({ title, subtitle }: { title: string; subtitle?: string }) => (
  <div className="mb-12 text-center">
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-3xl md:text-4xl font-bold text-white mb-4"
    >
      {title}
    </motion.h2>
    {subtitle && (
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-gray-400 max-w-2xl mx-auto"
      >
        {subtitle}
      </motion.p>
    )}
    <div className="w-20 h-1 bg-accent-blue mx-auto mt-6 rounded-full" />
  </div>
);

export { Button, SectionHeader };

import { motion } from 'framer-motion';
import { Code, Brain, Coffee, Zap } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Code,
      title: 'Frontend Dev',
      description: 'Building responsive interfaces with modern frameworks.',
      bg: 'bg-[var(--electric-blue)]',
      borderColor: 'border-[var(--electric-blue)]'
    },
    {
      icon: Brain,
      title: 'Machine Learning',
      description: 'Creating intelligent systems with data-driven insights.',
      bg: 'bg-[var(--hot-pink)]',
      borderColor: 'border-[var(--hot-pink)]'
    },
    {
      icon: Coffee,
      title: 'Problem Solving',
      description: 'Tackling complex challenges with creative solutions.',
      bg: 'bg-[var(--vibrant-yellow)]',
      borderColor: 'border-[var(--vibrant-yellow)]'
    },
    {
      icon: Zap,
      title: 'Performance',
      description: 'Optimizing for speed and exceptional UX.',
      bg: 'bg-[var(--lime-green)]',
      borderColor: 'border-[var(--lime-green)]'
    }
  ];

  const stats = [
    { label: 'Years Exp', value: '2+' },
    { label: 'Projects', value: '5+' },
    { label: 'Clients', value: '1+' },
    { label: 'Coffee', value: '∞' }
  ];

  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 10px, var(--charcoal) 10px, var(--charcoal) 11px)`
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <div className="inline-block bg-[var(--orange)] px-6 py-2 brutal-border-2 brutal-shadow mb-6">
            <span className="font-bold uppercase tracking-wider text-sm text-white">About Me</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold max-w-3xl">
            BUILDING THE <span className="text-[var(--electric-blue)]">FUTURE</span>, ONE LINE AT A TIME
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-lg text-[var(--grey)] leading-relaxed">
              I'm a developer with 2+ years in web development and 1 year in machine learning. 
              I don't just write code—I craft experiences that users actually enjoy.
            </p>
            <p className="text-lg text-[var(--grey)] leading-relaxed">
              My work sits at the intersection of design and engineering. Every project is an 
              opportunity to push boundaries and create something people remember.
            </p>
            <p className="text-lg text-[var(--grey)] leading-relaxed">
              When I'm not coding, I'm exploring new tech, contributing to open-source, or 
              sharing what I've learned with the community.
            </p>
          </motion.div>

          <motion.div
            className="bg-[var(--cream)] p-8 brutal-border brutal-shadow-lg"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold mb-6 uppercase">Quick Stats</h3>
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="text-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="text-4xl font-bold mb-2">{stat.value}</div>
                  <div className="text-sm text-[var(--grey)] uppercase tracking-wider">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                className="bg-white brutal-border brutal-shadow hover-brutal"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className={`${feature.bg} p-6 border-b-3 ${feature.borderColor}`}>
                  <Icon className="w-10 h-10 text-white" />
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-xl mb-3 uppercase">{feature.title}</h3>
                  <p className="text-[var(--grey)]">{feature.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold mb-6 uppercase">Let's Work Together</h3>
          <motion.a
            href="#contact"
            className="inline-block px-10 py-5 bg-[var(--hot-pink)] text-white brutal-border brutal-shadow-lg hover-brutal font-bold uppercase tracking-wide"
            whileTap={{ scale: 0.98 }}
          >
            Get In Touch
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

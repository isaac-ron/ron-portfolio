import { motion } from 'framer-motion';
import { useState } from 'react';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('frontend');

  const skillCategories = {
    frontend: {
      title: 'Frontend',
      skills: [
        { name: 'React/Next.js', level: 95, color: 'bg-[var(--electric-blue)]' },
        { name: 'TypeScript', level: 90, color: 'bg-[var(--electric-blue)]' },
        { name: 'Tailwind CSS', level: 95, color: 'bg-[var(--lime-green)]' },
        { name: 'JavaScript', level: 95, color: 'bg-[var(--vibrant-yellow)]' },
        { name: 'HTML/CSS', level: 98, color: 'bg-[var(--hot-pink)]' },
        { name: 'Vue.js', level: 80, color: 'bg-[var(--lime-green)]' }
      ]
    },
    backend: {
      title: 'Backend',
      skills: [
        { name: 'Node.js', level: 85, color: 'bg-[var(--lime-green)]' },
        { name: 'Python', level: 90, color: 'bg-[var(--electric-blue)]' },
        { name: 'PostgreSQL', level: 80, color: 'bg-[var(--electric-blue)]' },
        { name: 'REST APIs', level: 90, color: 'bg-[var(--vibrant-yellow)]' },
        { name: 'GraphQL', level: 75, color: 'bg-[var(--hot-pink)]' },
        { name: 'Docker', level: 70, color: 'bg-[var(--electric-blue)]' }
      ]
    },
    ml: {
      title: 'Machine Learning',
      skills: [
        { name: 'TensorFlow', level: 85, color: 'bg-[var(--hot-pink)]' },
        { name: 'PyTorch', level: 80, color: 'bg-[var(--hot-pink)]' },
        { name: 'scikit-learn', level: 90, color: 'bg-[var(--lime-green)]' },
        { name: 'Pandas/NumPy', level: 95, color: 'bg-[var(--electric-blue)]' },
        { name: 'Computer Vision', level: 75, color: 'bg-[var(--deep-purple)]' },
        { name: 'NLP', level: 80, color: 'bg-[var(--vibrant-yellow)]' }
      ]
    },
    tools: {
      title: 'Tools',
      skills: [
        { name: 'Git/GitHub', level: 95, color: 'bg-[var(--hot-pink)]' },
        { name: 'VS Code', level: 98, color: 'bg-[var(--electric-blue)]' },
        { name: 'Figma', level: 85, color: 'bg-[var(--deep-purple)]' },
        { name: 'AWS', level: 70, color: 'bg-[var(--vibrant-yellow)]' },
        { name: 'Linux', level: 80, color: 'bg-[var(--lime-green)]' },
        { name: 'Agile/Scrum', level: 85, color: 'bg-[var(--vibrant-yellow)]' }
      ]
    }
  };

  const techStack = [
    { name: 'React', bg: 'bg-[var(--electric-blue)]' },
    { name: 'TypeScript', bg: 'bg-[var(--electric-blue)]' },
    { name: 'Python', bg: 'bg-[var(--vibrant-yellow)]' },
    { name: 'TensorFlow', bg: 'bg-[var(--hot-pink)]' },
    { name: 'Node.js', bg: 'bg-[var(--lime-green)]' },
    { name: 'PostgreSQL', bg: 'bg-[var(--electric-blue)]' },
    { name: 'Docker', bg: 'bg-[var(--electric-blue)]' },
    { name: 'AWS', bg: 'bg-[var(--vibrant-yellow)]' },
    { name: 'Git', bg: 'bg-[var(--hot-pink)]' },
    { name: 'Figma', bg: 'bg-[var(--deep-purple)]' },
    { name: 'Tailwind', bg: 'bg-[var(--lime-green)]' },
    { name: 'Next.js', bg: 'bg-[var(--charcoal)]' }
  ];

  return (
    <section id="skills" className="py-24 bg-[var(--cream)] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="inline-block bg-[var(--lime-green)] px-6 py-2 brutal-border-2 brutal-shadow mb-6">
            <span className="font-bold uppercase tracking-wider text-sm text-white">Skills</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            WHAT I <span className="text-[var(--hot-pink)]">BRING</span> TO THE TABLE
          </h2>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          className="flex flex-wrap gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {Object.entries(skillCategories).map(([key, category]) => (
            <motion.button
              key={key}
              onClick={() => setActiveCategory(key)}
              className={`px-6 py-3 brutal-border-2 brutal-shadow font-bold uppercase tracking-wide transition-all ${
                activeCategory === key
                  ? 'bg-[var(--charcoal)] text-white'
                  : 'bg-white hover-brutal'
              }`}
              whileTap={{ scale: 0.98 }}
            >
              {category.title}
            </motion.button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          key={activeCategory}
          className="grid md:grid-cols-2 gap-8 mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          {skillCategories[activeCategory as keyof typeof skillCategories].skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="bg-white brutal-border brutal-shadow p-6"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-bold text-lg uppercase">{skill.name}</h3>
                <span className="font-bold text-xl">{skill.level}%</span>
              </div>
              <div className="h-4 bg-[var(--muted)] brutal-border-2 relative overflow-hidden">
                <motion.div
                  className={`h-full ${skill.color} brutal-border-2 border-transparent`}
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: index * 0.05 }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Tech Stack */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h3 className="text-3xl font-bold mb-8 uppercase text-center">Tech Stack</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {techStack.map((tech, index) => (
              <motion.div
                key={tech.name}
                className={`${tech.bg} text-white px-6 py-4 brutal-border-2 brutal-shadow hover-brutal font-bold uppercase`}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.03 }}
                whileTap={{ scale: 0.95 }}
              >
                {tech.name}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-xl text-[var(--grey)] mb-6 uppercase font-bold">
            Want to work with these skills?
          </p>
          <motion.a
            href="#contact"
            className="inline-block px-10 py-5 bg-[var(--electric-blue)] text-white brutal-border brutal-shadow-lg hover-brutal font-bold uppercase tracking-wide"
            whileTap={{ scale: 0.98 }}
          >
            Start a Project
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;

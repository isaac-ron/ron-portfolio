import { motion } from 'framer-motion';

const Skills = () => {
  const groups = [
    {
      title: 'Languages & Frameworks',
      bg: 'bg-[var(--electric-blue)]',
      skills: ['JavaScript', 'TypeScript', 'Python', 'SQL', 'React', 'Next.js', 'Node.js', 'Express', 'Astro', 'Flask', 'Tailwind CSS']
    },
    {
      title: 'Data, Cloud & ML',
      bg: 'bg-[var(--hot-pink)]',
      skills: ['PostgreSQL', 'MongoDB', 'Supabase', 'AWS', 'Power BI', 'Excel', 'Pandas', 'TensorFlow/Keras', 'scikit-learn', 'Hugging Face', 'CNNs', 'NLP']
    },
    {
      title: 'Tools & Integrations',
      bg: 'bg-[var(--lime-green)]',
      skills: ['Git/GitHub', 'REST API design', 'M-PESA Daraja API', 'Docker', 'Sanity', 'Keystatic', 'Raspberry Pi', 'Arduino']
    }
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
            WHAT I <span className="text-[var(--hot-pink)]">WORK</span> WITH
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {groups.map((group, index) => (
            <motion.div
              key={group.title}
              className="bg-white brutal-border brutal-shadow"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className={`${group.bg} text-white px-6 py-4 border-b-3 border-[var(--charcoal)]`}>
                <h3 className="font-bold text-lg uppercase">{group.title}</h3>
              </div>
              <div className="p-6 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-[var(--cream)] brutal-border-2 text-sm font-bold uppercase"
                  >
                    {skill}
                  </span>
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

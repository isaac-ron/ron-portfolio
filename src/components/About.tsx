import { motion } from 'framer-motion';
import { Code, Brain, Smartphone, BarChart3 } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Code,
      title: 'Full-Stack Web',
      description: 'React, Node.js and Express apps on PostgreSQL or MongoDB.',
      bg: 'bg-[var(--electric-blue)]',
      borderColor: 'border-[var(--electric-blue)]'
    },
    {
      icon: Brain,
      title: 'Machine Learning',
      description: 'NLP and computer vision models, from fine-tuning to running on small hardware.',
      bg: 'bg-[var(--hot-pink)]',
      borderColor: 'border-[var(--hot-pink)]'
    },
    {
      icon: Smartphone,
      title: 'Payments',
      description: 'M-PESA Daraja and bank API integrations that record payments automatically.',
      bg: 'bg-[var(--vibrant-yellow)]',
      borderColor: 'border-[var(--vibrant-yellow)]'
    },
    {
      icon: BarChart3,
      title: 'Data',
      description: 'Dashboards with SQL, Power BI and Pandas, and ETL pipelines with Airflow and Spark.',
      bg: 'bg-[var(--lime-green)]',
      borderColor: 'border-[var(--lime-green)]'
    }
  ];

  const stats = [
    { label: 'Egerton JS Hackathon 2025', value: '1st' },
    { label: 'Models on Hugging Face', value: '2' },
    { label: 'WasteNet Accuracy', value: '88.9%' },
    { label: 'Live Client & NGO Sites', value: '5' }
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
            SOFTWARE FOR <span className="text-[var(--electric-blue)]">SCHOOLS</span>, NGOS AND FIRST RESPONDERS
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
              I'm a computer science student at Kabarak University (coursework complete, graduating
              December 2026) based in Nairobi. I build web platforms and machine learning systems that
              have to work with real constraints: patchy connections, mobile money and small budgets.
              I'm looking for software engineering internships or junior roles, and data analyst or
              data engineering roles.
            </p>
            <p className="text-lg text-[var(--grey)] leading-relaxed">
              Right now I'm building FeeDesk, a fee platform that brings a school's M-PESA and bank
              payments into one place. I also freelance: for the Association of Care Leavers Networks
              in Africa (ACNA) I built the sites of two founding member networks for the launch of its
              East Africa chapter, and I rebuilt The Nile Explorer's news site.
            </p>
            <p className="text-lg text-[var(--grey)] leading-relaxed">
              Before that I interned in IT service delivery at the Kenya Revenue Authority and completed
              the ALX Data Analytics programme. I also volunteer with Vijana Empowerment Initiative,
              where I built their website and teach web development to young people in Bomet.
            </p>
          </motion.div>

          <motion.div
            className="bg-[var(--cream)] p-8 brutal-border brutal-shadow-lg self-start"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold mb-6 uppercase">At a Glance</h3>
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

      </div>
    </section>
  );
};

export default About;

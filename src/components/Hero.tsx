import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  const now = [
    { label: 'Building', text: 'FeeDesk, a school fee platform on M-PESA and bank APIs' },
    { label: 'Freelancing', text: "Sites for ACNA's East Africa chapter and The Nile Explorer" },
    { label: 'Learning', text: 'Data engineering with ALX: Airflow, Spark and Docker pipelines' },
    { label: 'Finishing', text: 'BSc Computer Science, Kabarak University (Dec 2026)' }
  ];

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-[var(--cream)] pt-20">
      {/* Geometric Background Elements */}
      <div className="absolute inset-0 overflow-hidden hidden md:block" aria-hidden="true">
        <div className="absolute top-20 right-20 w-32 h-32 bg-[var(--electric-blue)] brutal-border brutal-shadow rotate-12" />
        <div className="absolute bottom-40 left-10 w-24 h-24 bg-[var(--hot-pink)] brutal-border brutal-shadow -rotate-12" />
        <div className="absolute top-28 left-1/2 w-16 h-16 bg-[var(--vibrant-yellow)] brutal-border brutal-shadow rotate-45" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div
              className="inline-block bg-[var(--vibrant-yellow)] px-6 py-3 brutal-border-2 brutal-shadow"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <span className="font-bold uppercase tracking-wider text-sm">Open to Software & Data Roles</span>
            </motion.div>

            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold">
                RON
                <br />
                <span className="text-[var(--electric-blue)]">ISAAC</span>
              </h1>
            </motion.div>

            <motion.p
              className="text-xl text-[var(--grey)] max-w-lg font-medium"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Full-stack and machine learning developer in Nairobi. I build payment platforms, crisis-response tools and websites for NGOs and newsrooms.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <motion.a
                href="#projects"
                className="px-8 py-4 bg-[var(--hot-pink)] text-white brutal-border brutal-shadow hover-brutal font-bold uppercase tracking-wide"
                whileTap={{ scale: 0.98 }}
              >
                View Work
              </motion.a>

              <motion.a
                href="#contact"
                className="px-8 py-4 bg-white brutal-border brutal-shadow hover-brutal font-bold uppercase tracking-wide"
                whileTap={{ scale: 0.98 }}
              >
                Contact Me
              </motion.a>

              <motion.a
                href="/Ron_Isaac_Otieno_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-[var(--vibrant-yellow)] brutal-border brutal-shadow hover-brutal font-bold uppercase tracking-wide"
                whileTap={{ scale: 0.98 }}
              >
                Resume
              </motion.a>
            </motion.div>

            <motion.div
              className="flex gap-4 pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              {[
                { icon: Github, label: 'GitHub', href: 'https://github.com/isaac-ron', bg: 'bg-[var(--charcoal)]' },
                { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/ron-otieno/', bg: 'bg-[var(--electric-blue)]' },
                { icon: Mail, label: 'Email', href: 'mailto:isaacron195@gmail.com', bg: 'bg-[var(--orange)]' },
              ].map((social) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    target={social.href.startsWith('http') ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    className={`w-12 h-12 ${social.bg} text-white brutal-border-2 brutal-shadow hover-brutal flex items-center justify-center`}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                );
              })}
            </motion.div>
          </motion.div>

          {/* Now */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="absolute -top-3 -left-3 md:-top-6 md:-left-6 w-full h-full bg-[var(--lime-green)] brutal-border" />
            <div className="relative bg-white brutal-border-2 p-8 space-y-6">
              <h2 className="text-2xl font-bold uppercase">Now</h2>
              <ul className="space-y-5">
                {now.map((item) => (
                  <li key={item.label} className="border-l-4 border-[var(--electric-blue)] pl-4">
                    <div className="font-bold uppercase text-sm tracking-wider">{item.label}</div>
                    <div className="text-lg text-[var(--grey)]">{item.text}</div>
                  </li>
                ))}
              </ul>
              <div className="bg-[var(--cream)] brutal-border-2 p-4">
                <div className="font-bold uppercase text-sm tracking-wider mb-1">Looking for</div>
                <p className="text-[var(--grey)]">
                  Software engineering internships and junior roles, and data analyst or data engineering roles.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

import { motion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import Logo from './Logo';
const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <footer className="bg-[var(--charcoal)] text-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-10 right-20 w-24 h-24 bg-[var(--electric-blue)] brutal-border opacity-20" />
      <div className="absolute bottom-20 left-10 w-16 h-16 bg-[var(--hot-pink)] brutal-border opacity-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid md:grid-cols-3 gap-12">
            {/* Brand */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3">
                <Logo className="w-10 h-10" />
                <h3 className="text-3xl font-bold uppercase">
                  RON<span className="text-[var(--electric-blue)]">ISAAC</span>
                </h3>
              </div>
              <p className="text-gray-300">
                Full-stack and machine learning developer in Nairobi, building
                payment platforms, crisis-response tools and websites for NGOs and newsrooms.
              </p>
              <div className="flex items-center gap-2 text-sm">
                <span>Made with</span>
                <span className="text-[var(--hot-pink)]">❤</span>
                <span>& React + Tailwind</span>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <h4 className="font-bold uppercase tracking-wider">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <motion.a
                      href={link.href}
                      className="text-gray-300 hover:text-[var(--electric-blue)] transition-colors font-semibold"
                      whileHover={{ x: 5 }}
                    >
                      → {link.name}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Elsewhere */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h4 className="font-bold uppercase tracking-wider">Elsewhere</h4>
              <ul className="space-y-3">
                {[
                  { name: 'isaacron195@gmail.com', href: 'mailto:isaacron195@gmail.com' },
                  { name: 'GitHub', href: 'https://github.com/isaac-ron' },
                  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/ron-otieno/' },
                  { name: 'Hugging Face', href: 'https://huggingface.co/ron4444444' },
                  { name: 'Resume (PDF)', href: '/Ron_Isaac_Otieno_Resume.pdf' }
                ].map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      target={link.href.startsWith('mailto') ? undefined : '_blank'}
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-[var(--electric-blue)] transition-colors font-semibold"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t-2 border-white/20" />

        {/* Bottom Bar */}
        <motion.div
          className="py-8 flex flex-col md:flex-row justify-between items-center gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p className="text-sm text-gray-300 font-semibold">
            © {currentYear} RONISAAC. All rights reserved.
          </p>

          <motion.button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-6 py-2 bg-white text-[var(--charcoal)] brutal-border-2 brutal-shadow hover-brutal font-bold uppercase text-sm"
            whileTap={{ scale: 0.95 }}
          >
            Back to Top
            <ArrowUp className="w-4 h-4" />
          </motion.button>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;

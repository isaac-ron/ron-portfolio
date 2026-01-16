import { motion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
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
              <h3 className="text-3xl font-bold uppercase">
                RON<span className="text-[var(--electric-blue)]">ISAAC</span>
              </h3>
              <p className="text-gray-300">
                Web developer and ML enthusiast building bold digital experiences. 
                Let's create something that stands out.
              </p>
              <div className="flex items-center gap-2 text-sm">
                <span>Made with</span>
                <motion.span
                  className="text-[var(--hot-pink)]"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  ❤
                </motion.span>
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

            {/* Newsletter */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h4 className="font-bold uppercase tracking-wider">Stay Updated</h4>
              <p className="text-gray-300">
                Get notified about new projects and insights.
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="flex-1 px-4 py-2 bg-white text-[var(--charcoal)] brutal-border-2 focus:outline-none font-semibold"
                />
                <motion.button
                  className="px-4 py-2 bg-[var(--electric-blue)] text-white brutal-border-2 brutal-shadow hover-brutal font-bold uppercase"
                  whileTap={{ scale: 0.95 }}
                >
                  Go
                </motion.button>
              </div>
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
            <motion.div
              animate={{ y: [-2, 0, -2] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ArrowUp className="w-4 h-4" />
            </motion.div>
          </motion.button>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;

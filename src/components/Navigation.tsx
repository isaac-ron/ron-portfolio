import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white brutal-border-2 border-t-0 border-x-0 brutal-shadow' 
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.a
            href="#"
            className="text-2xl font-bold uppercase"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            RON<span className="text-[var(--electric-blue)]">ISAAC</span>
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2">
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="px-4 py-2 font-bold uppercase text-sm hover:text-[var(--electric-blue)] transition-colors"
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
              >
                {item.name}
              </motion.a>
            ))}
            <motion.a
              href="#contact"
              className="ml-2 px-6 py-2 bg-[var(--hot-pink)] text-white brutal-border brutal-shadow hover-brutal font-bold uppercase text-sm"
              whileTap={{ scale: 0.98 }}
            >
              Hire Me
            </motion.a>
          </div>

          {/* Mobile menu button */}
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 brutal-border-2 brutal-shadow bg-white"
            whileTap={{ scale: 0.95 }}
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90 }}
                  animate={{ rotate: 0 }}
                  exit={{ rotate: 90 }}
                >
                  <X className="w-6 h-6" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90 }}
                  animate={{ rotate: 0 }}
                  exit={{ rotate: -90 }}
                >
                  <Menu className="w-6 h-6" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden bg-white brutal-border-2 border-t-0 border-x-0"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="px-4 py-4 space-y-2">
              {navItems.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className="block px-4 py-3 font-bold uppercase hover:bg-[var(--cream)] brutal-border-2"
                  onClick={() => setIsOpen(false)}
                  whileTap={{ scale: 0.98 }}
                >
                  {item.name}
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                className="block text-center px-4 py-3 bg-[var(--hot-pink)] text-white brutal-border-2 brutal-shadow font-bold uppercase"
                onClick={() => setIsOpen(false)}
                whileTap={{ scale: 0.98 }}
              >
                Hire Me
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navigation;

import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-[var(--cream)] pt-20">
      {/* Geometric Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 right-20 w-32 h-32 bg-[var(--electric-blue)] brutal-border brutal-shadow"
          animate={{
            rotate: [0, 90, 180, 270, 360],
            y: [0, -20, 0]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-40 left-10 w-24 h-24 bg-[var(--hot-pink)] brutal-border brutal-shadow"
          animate={{
            rotate: [0, -90, -180, -270, -360],
            x: [0, 20, 0]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute top-1/2 left-1/4 w-16 h-16 bg-[var(--vibrant-yellow)] brutal-border brutal-shadow"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360]
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
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
              <span className="font-bold uppercase tracking-wider text-sm">Available for Work</span>
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
              Web Developer & AI Enthusiast building bold digital experiences that actually work.
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
            </motion.div>

            <motion.div
              className="flex gap-4 pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              {[
                { icon: Github, href: '#', bg: 'bg-[var(--charcoal)]' },
                { icon: Linkedin, href: '#', bg: 'bg-[var(--electric-blue)]' },
                { icon: Mail, href: '#contact', bg: 'bg-[var(--orange)]' },
              ].map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={index}
                    href={social.href}
                    className={`w-12 h-12 ${social.bg} text-white brutal-border-2 brutal-shadow hover-brutal flex items-center justify-center`}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                );
              })}
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative">
              <motion.div
                className="absolute -top-6 -left-6 w-full h-full bg-[var(--lime-green)] brutal-border"
                animate={{ rotate: [0, 2, 0, -2, 0] }}
                transition={{ duration: 5, repeat: Infinity }}
              />
              <div className="relative brutal-border-2 overflow-hidden bg-white">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1719400471588-575b23e27bd7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBkZXZlbG9wZXIlMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzU2NDQzODAzfDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Developer workspace"
                  className="w-full h-[500px] object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <motion.a
            href="#about"
            className="flex flex-col items-center gap-2"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <span className="font-bold uppercase text-xs tracking-widest">Scroll</span>
            <ArrowDown className="w-5 h-5" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

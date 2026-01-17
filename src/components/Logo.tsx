import { motion } from 'framer-motion';

const Logo = ({ className = "w-12 h-12" }: { className?: string }) => {
  return (
    <motion.div
      className={`${className} relative flex items-center gap-1`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {/* A letter - made of geometric blocks */}
      <div className="relative">
        {/* Main vertical bar */}
        <div className="w-5 h-10 bg-[var(--electric-blue)] brutal-border-2 relative">
          {/* Horizontal bar */}
          <div className="absolute top-1/2 -translate-y-1/2 right-0 w-4 h-3 bg-[var(--hot-pink)] brutal-border-2" />
        </div>
        {/* Bottom accent */}
        <motion.div
          className="absolute -bottom-1 -right-1 w-3 h-3 bg-[var(--vibrant-yellow)] brutal-border-2"
          animate={{
            rotate: [0, 90, 180, 270, 360]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      {/* D letter - made of geometric blocks */}
      <div className="relative">
        {/* Vertical bar */}
        <div className="w-3 h-10 bg-[var(--lime-green)] brutal-border-2 relative">
          {/* Top curve block */}
          <div className="absolute top-0 -right-3 w-3 h-3 bg-[var(--hot-pink)] brutal-border-2" />
          {/* Middle curve block */}
          <div className="absolute top-1/2 -translate-y-1/2 -right-4 w-4 h-4 bg-[var(--electric-blue)] brutal-border-2" />
          {/* Bottom curve block */}
          <div className="absolute bottom-0 -right-3 w-3 h-3 bg-[var(--vibrant-yellow)] brutal-border-2" />
        </div>
        {/* Top accent */}
        <motion.div
          className="absolute -top-1 -left-1 w-2 h-2 bg-[var(--hot-pink)] brutal-border"
          animate={{
            scale: [1, 1.3, 1]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>
    </motion.div>
  );
};

export default Logo;

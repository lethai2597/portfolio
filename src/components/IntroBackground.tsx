"use client";

import { motion } from "motion/react";
import { Code2, Palette } from "lucide-react";

export default function IntroBackground() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      {/* Subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/40 via-gray-900/20 to-transparent" />
      
      {/* Main floating icons - only 2 key ones */}
      <motion.div
        className="absolute top-20 left-16 text-amber-500/15"
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Code2 size={32} />
      </motion.div>

      <motion.div
        className="absolute bottom-20 right-16 text-lime-500/15"
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      >
        <Palette size={28} />
      </motion.div>

      {/* Subtle geometric accent */}
      <motion.div
        className="absolute top-1/3 left-1/4 w-1 h-1 bg-amber-500/20 rounded-full"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute bottom-1/3 right-1/4 w-1 h-1 bg-lime-500/20 rounded-full"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3,
        }}
      />

      {/* Very subtle grid pattern */}
      <div className="absolute inset-0 opacity-3">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px'
          }}
        />
      </div>
    </div>
  );
}

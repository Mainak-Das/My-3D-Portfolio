"use client";

import { useTransform, motion, MotionValue } from "framer-motion";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

interface DesktopHeroTextProps {
  scrollYProgress: MotionValue<number>;
}

export default function DesktopHeroText({ scrollYProgress }: DesktopHeroTextProps) {
  // Fade out the text smoothly after a few scrolls (between 5-15% scroll progress)
  const textOpacity = useTransform(scrollYProgress, [0, 0.05, 0.12, 0.18], [1, 1, 0.5, 0]);
  // Slight upward movement as text fades
  const textY = useTransform(scrollYProgress, [0, 0.18], [0, -60]);

  return (
    <motion.div
      style={{ opacity: textOpacity, y: textY }}
      className="hidden lg:flex absolute inset-0 pointer-events-none z-10 flex-col justify-center text-white"
    >
      {/* Content Container */}
      <div className="relative z-10 w-full h-full max-w-7xl mx-auto px-12 flex items-center justify-start">
        <div className="text-start max-w-4xl flex flex-col items-start">
          <h1 className="text-xl font-semibold tracking-tight mb-2 text-white/90 drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)]">
            Hi, I'm
          </h1>

          <h1 className="text-6xl xl:text-7xl font-bold tracking-tighter mb-1 bg-gradient-to-r from-[#ff6b2b] via-[#ff9f55] to-[#ff5e1a] bg-clip-text text-transparent pb-3 drop-shadow-2xl relative z-20">
            Mainak Das.
          </h1>

          <div className="text-lg font-light text-gray-200 drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)]">
            <TextGenerateEffect
              words={["Full Stack Developer", "ML Enthusiast", "Vibe Coder"]}
              className="inline-block [&_span]:text-gray-300 dark:[&_span]:text-gray-300 font-light tracking-wide"
            />
          </div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 1 }}
            className="mt-6 flex flex-col items-center justify-center gap-2"
          >
            <div className="h-10 w-[2px] bg-gradient-to-b from-transparent via-gray-400/70 to-transparent" />
            <div className="w-4 h-7 border-[1.5px] border-gray-400/40 rounded-full flex justify-center p-1">
              <motion.div
                animate={{
                  y: [0, 10, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
                className="w-1 h-1 bg-gray-400/70 rounded-full mb-1"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

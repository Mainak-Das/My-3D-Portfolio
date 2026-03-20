"use client";

import { useScroll, useTransform, motion } from "framer-motion";
import AuroraGradient from "./AuroraGradient";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

export default function Overlay({ scrollYProgress }: { scrollYProgress: any }) {
    // Opacity transforms
    const opacity1 = useTransform(scrollYProgress, [0, 0.15, 0.25], [1, 1, 0]);
    // const opacity2 = useTransform(scrollYProgress, [0.45, 0.55, 0.65, 0.75], [0, 1, 1, 0]);
    // const opacity3 = useTransform(scrollYProgress, [0.75, 0.85, 0.9, 1], [0, 1, 1, 0]);

    return (
        <div className="absolute inset-0 pointer-events-none z-10 flex flex-col justify-center text-white lg:hidden">
            {/* Section 1 */}
            <motion.div
                style={{ opacity: opacity1 }}
                className="absolute inset-0 w-full h-full"
            >
                {/* Aurora Gradient Background (Full Width) */}
                <div className="absolute inset-0 z-[-1] bg-[#0b131c]">
                    <div className="absolute inset-0" style={{ maskImage: "linear-gradient(to bottom, black 40%, transparent 100%)", WebkitMaskImage: "linear-gradient(to bottom, black 40%, transparent 100%)" }}>
                        <AuroraGradient
                            colorStops={["#13213c", "#121d3c", "#0a1224"]}
                            blend={0.5}
                            amplitude={0.2}
                            speed={2.0}
                        />
                    </div>
                    <div className="absolute inset-0 backdrop-blur-[20px]" />
                </div>

                {/* Content Container (Constrained) */}
                <div className="relative z-10 w-full h-full max-w-7xl mx-auto px-6 md:px-12 lg:px-12 flex items-center justify-center lg:justify-start">
                    <div className="text-center lg:text-start md:max-w-4xl flex flex-col items-center lg:items-start">
                        <h1 className="text-2xl md:text-3xl font-semibold tracking-tight mb-2 md:mb-4 text-white/95 drop-shadow-lg">Hi, I'm</h1>

                        <h1 className="text-5xl md:text-7xl lg:text-9xl font-bold tracking-tighter mb-2 bg-gradient-to-r from-[#ff6b2b] via-[#ff9f55] to-[#ff5e1a] bg-clip-text text-transparent pb-4 drop-shadow-2xl relative z-20">Mainak Das.</h1>

                        <div className="text-md md:text-2xl font-light text-gray-200 drop-shadow-md">
                            <TextGenerateEffect words={["Full Stack Developer", "ML Enthusiast", "Vibe Coder"]} className="inline-block [&_span]:text-gray-400 dark:[&_span]:text-gray-400 font-light tracking-wide" />
                        </div>

                        {/* Scroll Indicator */}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1, duration: 1 }}
                            className="mt-8 flex flex-col items-center justify-center gap-2"
                        >
                            <div className="h-12 w-[2px] bg-gradient-to-b from-transparent via-gray-400 to-transparent" />
                            <div className="w-5 h-8 border-[1.5px] border-gray-400/50 rounded-full flex justify-center p-1">
                                <motion.div
                                    animate={{
                                        y: [0, 12, 0],
                                    }}
                                    transition={{
                                        duration: 1.5,
                                        repeat: Infinity,
                                        repeatType: "loop",
                                    }}
                                    className="w-1 h-1 bg-gray-400 rounded-full mb-1"
                                />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </motion.div>

            {/* Section 2 */}
            {/* <motion.div
                style={{ opacity: opacity2, y: y2 }}
                className="absolute inset-0 flex items-center justify-start p-8 md:p-24"
            >
                <div className="max-w-2xl">
                    <h2 className="text-5xl md:text-7xl font-bold leading-tight">Building scalable <br /><span className="text-[#c74b13]">microservices</span> & web apps.</h2>
                </div>
            </motion.div> */}

            {/* Section 3 */}
            {/* <motion.div
                style={{ opacity: opacity3 }}
                className="absolute inset-0 flex items-center justify-end p-8 md:p-24 text-right"
            >
                <div className="max-w-2xl">
                    <h2 className="text-5xl md:text-7xl font-bold leading-tight">Expertise in Next.js, <br /><span className="text-[#c74b13]">Node.js</span> & Cloud.</h2>
                </div>
            </motion.div> */}
        </div>
    );
}

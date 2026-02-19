"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";

export const TextGenerateEffect = ({
    words,
    className,
    filter = true,
    duration = 0.5,
}: {
    words: string | string[];
    className?: string;
    filter?: boolean;
    duration?: number;
}) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const currentWords = Array.isArray(words) ? words[currentIndex] : words;
    const wordsArray = currentWords.split(" ");

    useEffect(() => {
        if (Array.isArray(words) && words.length > 1) {
            const interval = setInterval(() => {
                setCurrentIndex((prev) => (prev + 1) % words.length);
            }, 4000);
            return () => clearInterval(interval);
        }
    }, [words]);

    return (
        <div className={cn("font-bold", className)}>
            <div className="dark:text-white text-black text-2xl leading-snug tracking-wide">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentIndex}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        variants={{
                            visible: {
                                transition: {
                                    staggerChildren: 0.1,
                                },
                            },
                            hidden: {
                                transition: {
                                    staggerChildren: 0.05,
                                    staggerDirection: -1,
                                },
                            },
                        }}
                    >
                        {wordsArray.map((word, idx) => (
                            <motion.span
                                key={`${word}-${idx}`}
                                className="dark:text-white text-black opacity-0 inline-block mr-1"
                                variants={{
                                    hidden: {
                                        opacity: 0,
                                        filter: filter ? "blur(10px)" : "none",
                                        y: 20,
                                    },
                                    visible: {
                                        opacity: 1,
                                        filter: filter ? "blur(0px)" : "none",
                                        y: 0,
                                        transition: {
                                            duration: duration,
                                        },
                                    },
                                }}
                            >
                                {word}
                            </motion.span>
                        ))}
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
};

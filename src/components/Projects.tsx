"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

// Project Data with Media & Layout Configuration
const projects = [
    {
        id: "incepres",
        title: "IncepRes",
        category: "Deep Learning • Medical AI",
        description: "Where Speed Meets Precision in Cancer Detection.",
        longDescription: "IncepRes is a hybrid & lightweight deep learning model designed to detect cancers accurately. Built with a Streamlit-powered interactive dashboard for real-time predictions and data visualization. The model combines the power of Inception and ResNet architectures to achieve high accuracy while maintaining fast inference speed across 26 cancer classes.",
        techStack: ["Python", "TensorFlow", "Streamlit", "Jupyter", "Deep Learning", "Computer Vision"],
        repo: "https://github.com/Mainak-Das/IncepRes",
        demo: "https://incepres.streamlit.app/",
        color: "from-[#1f1e33]/50 to-[#c74b13]/20",
        hoverColor: "group-hover:from-[#1f1e33]/70 group-hover:to-[#c74b13]/40",
        span: "md:col-span-2 md:row-span-1",
        mediaType: "image",
        mediaUrl: "/projects/incepres.png",
        demoUrl: "/projects/incepres.png"
    },
    {
        id: "hotelytics-ai",
        title: "Hotelytics AI",
        category: "Machine Learning • NLP",
        description: "Sentiment analysis engine for hotel reviews.",
        longDescription: "A machine learning project that predicts positive or negative sentiments from hotel reviews using advanced NLP techniques and classical ML models. Features web scraping for data collection, TF-IDF vectorization, Logistic Regression modeling, and a Streamlit web app for interactive analysis. Supports bulk review analysis via CSV uploads to help hotels understand guest satisfaction at scale.",
        techStack: ["Python", "Scikit-learn", "NLP", "Streamlit", "TF-IDF", "Web Scraping"],
        repo: "https://github.com/Mainak-Das/hotelytics.ai",
        demo: "https://hotelyticsai.streamlit.app/",
        color: "from-[#c74b13]/20 to-orange-600/20",
        hoverColor: "group-hover:from-[#c74b13]/40 group-hover:to-orange-600/40",
        span: "md:col-span-1 md:row-span-1",
        mediaType: "image",
        mediaUrl: "/projects/hotelytics.png",
        demoUrl: "/projects/hotelytics.png"
    },
    {
        id: "purepick",
        title: "PurePick",
        category: "Full Stack • MERN",
        description: "Local vendor quick commerce marketplace platform.",
        longDescription: "A full-stack e-commerce platform supporting multiple user roles, tailored for hyperlocal quick commerce. Built with the MERN stack to enable seamless shopping experiences connecting local vendors with customers. Features product browsing, cart management, vendor dashboards, and real-time order processing for fresh groceries and daily essentials.",
        techStack: ["React 19", "Node.js", "Express", "MongoDB", "JavaScript"],
        repo: "https://github.com/Mainak-Das/PurePick-FullStack",
        demo: "https://purepick.onrender.com/",
        color: "from-orange-500/20 to-red-500/20",
        hoverColor: "group-hover:from-orange-500/40 group-hover:to-red-500/40",
        span: "md:col-span-1 md:row-span-1",
        mediaType: "image",
        mediaUrl: "/projects/purepick.png",
        demoUrl: "/projects/purepick.png"
    },
];

export default function Projects() {
    const [selectedId, setSelectedId] = useState<string | null>(null);

    // Lock body scroll when modal is open
    useEffect(() => {
        if (selectedId) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [selectedId]);

    const selectedProject = projects.find((p) => p.id === selectedId);

    return (
        <>
        <section className="relative z-20 bg-[#050a14] min-h-screen py-32 px-4 md:px-12 overflow-hidden" id="projects">
            {/* Background Ambience */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-orange-600/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px]" />
            </div>

            <div className="max-w-7xl mx-auto relative">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="mb-16"
                >
                    <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
                        Selected <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-orange-500">Works</span>
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl leading-relaxed">
                        A curated selection of projects showcasing deep learning, NLP,
                        and full-stack development expertise.
                    </p>
                </motion.div>

                {/* Bento Grid Layout */}
                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 gap-6 auto-rows-[minmax(360px,auto)]"
                >
                    <AnimatePresence mode="popLayout">
                        {projects.map((project, index) => (
                            <motion.div
                                key={project.id}
                                layoutId={project.id}
                                onClick={() => setSelectedId(project.id)}
                                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                                viewport={{ once: true }}
                                className={`group relative rounded-3xl overflow-hidden cursor-pointer border border-white/10 bg-white/5 backdrop-blur-md ${project.span}`}
                                whileHover={{ scale: 1.015 }}
                            >
                                {/* Media Background - Always 'mediaUrl' for Grid */}
                                <img
                                    src={project.mediaUrl}
                                    alt={project.title}
                                    className="absolute inset-0 w-full h-full object-cover object-center opacity-60 group-hover:opacity-80 transition-all duration-700 group-hover:scale-105"
                                />

                                {/* Gradient Overlay */}
                                <div className={`absolute inset-0 bg-linear-to-br ${project.color} ${project.hoverColor} transition-all duration-500 opacity-60 group-hover:opacity-80 mix-blend-overlay`} />

                                {/* Darkener */}
                                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500" />

                                {/* Noise */}
                                <div className="absolute inset-0 opacity-[0.05] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

                                <div className="absolute inset-0 p-4 sm:p-6 md:p-8 flex flex-col justify-between z-10">
                                    <div className="flex justify-between items-start">
                                        <span className="inline-block px-2 py-0.5 sm:px-3 sm:py-1 rounded-full bg-black/40 border border-white/10 text-[10px] sm:text-xs font-mono text-blue-300 backdrop-blur-md">
                                            {project.category}
                                        </span>
                                        <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-white transform -rotate-45 group-hover:rotate-0 transition-transform duration-300">
                                                <path d="M5 12h14M12 5l7 7-7 7" />
                                            </svg>
                                        </div>
                                    </div>

                                    <div>
                                        <h3 className="text-2xl font-bold text-white mb-2 leading-tight group-hover:translate-x-1 transition-transform drop-shadow-lg">{project.title}</h3>
                                        <p className="text-gray-200 text-sm line-clamp-3 leading-relaxed opacity-90 group-hover:opacity-100 transition-opacity drop-shadow-md">
                                            {project.description}
                                        </p>

                                        <div className="flex flex-wrap gap-2 mt-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
                                            {project.techStack.slice(0, 3).map(t => (
                                                <span key={t} className="text-[10px] uppercase tracking-wider text-white/80 bg-black/40 px-2 py-1 rounded backdrop-blur-sm border border-white/5">
                                                    {t}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>

            {/* Enhanced Modal - Outside section to escape stacking context */}
            <AnimatePresence>
                {selectedId && selectedProject && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedId(null)}
                            className="fixed inset-0 bg-black/80 backdrop-blur-xl z-[9999]"
                        />
                        <div className="fixed inset-0 flex items-center justify-center z-[10000] pointer-events-auto p-4 md:p-8">
                            <motion.div
                                layoutId={selectedId}
                                className="bg-[#121212] w-full max-w-4xl max-h-[85vh] md:max-h-[90vh] overflow-y-auto rounded-2xl md:rounded-4xl border border-white/10 shadow-2xl relative no-scrollbar"
                                style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                            >
                                <button
                                    onClick={() => setSelectedId(null)}
                                    className="absolute top-3 right-3 md:top-6 md:right-6 z-20 p-1.5 md:p-2 bg-black/50 hover:bg-black/80 rounded-full text-white/70 hover:text-white transition-colors border border-white/10"
                                >
                                    <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>

                                <div className="flex flex-col md:flex-row h-full">
                                    { /* Visual Side - Prioritize 'demoUrl', fallback to 'mediaUrl' */}
                                    <div className={`w-full md:w-2/5 min-h-[180px] md:min-h-[300px] relative overflow-hidden flex flex-col justify-end p-5 md:p-8 bg-[#262730]`}>
                                        <img
                                            src={selectedProject.demoUrl || selectedProject.mediaUrl}
                                            alt={selectedProject.title}
                                            className="absolute inset-0 w-full h-full object-contain opacity-90"
                                        />
                                        <div className={`absolute inset-0 bg-linear-to-b ${selectedProject.color} mix-blend-overlay opacity-60`} />
                                        <div className="absolute inset-0 bg-black/10" />

                                        {/* Category badge — hidden on mobile */}
                                        <motion.span
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.2 }}
                                            className="relative z-10 hidden md:inline-block px-3 py-1 rounded-full bg-black/40 text-xs font-mono text-white mb-4 w-fit border border-white/10 backdrop-blur-md -ml-1"
                                        >
                                            {selectedProject.category}
                                        </motion.span>
                                        <motion.h3
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.3 }}
                                            className="relative z-10 text-2xl md:text-4xl font-bold text-white leading-none tracking-tight drop-shadow-xl"
                                        >
                                            {selectedProject.title}
                                        </motion.h3>
                                    </div>

                                    {/* Content Side */}
                                    <div className="w-full md:w-3/5 p-5 md:p-8 lg:p-12 bg-[#121212]">
                                        <motion.div
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ delay: 0.4 }}
                                        >
                                            <h4 className="text-xs md:text-sm font-bold text-gray-500 uppercase tracking-wider mb-2 md:mb-4">About the project</h4>
                                            <p className="text-gray-300 leading-relaxed mb-5 md:mb-8 text-sm md:text-base lg:text-lg text-justify">
                                                {selectedProject.longDescription}
                                            </p>

                                            <div className="mb-6 md:mb-10">
                                                <h4 className="text-xs md:text-sm font-bold text-gray-500 uppercase tracking-wider mb-2 md:mb-4">Core Technologies</h4>
                                                <div className="flex flex-wrap gap-1.5 md:gap-2">
                                                    {selectedProject.techStack.map((tech, i) => (
                                                        <motion.span
                                                            key={tech}
                                                            initial={{ opacity: 0, scale: 0.9 }}
                                                            animate={{ opacity: 1, scale: 1 }}
                                                            transition={{ delay: 0.5 + (i * 0.05) }}
                                                            className="px-2.5 py-1.5 md:px-4 md:py-2 rounded-lg md:rounded-xl bg-white/5 hover:bg-white/10 text-xs md:text-sm text-gray-200 border border-white/5 transition-colors cursor-default"
                                                        >
                                                            {tech}
                                                        </motion.span>
                                                    ))}
                                                </div>
                                            </div>

                                            <div className="flex gap-2.5 md:gap-4 pt-3 md:pt-4 border-t border-white/10">
                                                <a
                                                    href={selectedProject.repo}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex-1 py-2.5 md:py-4 rounded-lg md:rounded-xl bg-white text-black text-sm md:text-base font-bold text-center hover:bg-gray-200 transition-colors flex items-center justify-center gap-1.5 md:gap-2"
                                                >
                                                    <svg className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                                                    View Code
                                                </a>
                                                <a
                                                    href={selectedProject.demo}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex-1 py-2.5 md:py-4 rounded-lg md:rounded-xl bg-white/5 text-white text-sm md:text-base font-bold text-center hover:bg-white/10 transition-colors border border-white/10 flex items-center justify-center gap-1.5 md:gap-2"
                                                >
                                                    Live Demo
                                                    <svg className="w-3.5 h-3.5 md:w-4 md:h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                                                </a>
                                            </div>
                                        </motion.div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}

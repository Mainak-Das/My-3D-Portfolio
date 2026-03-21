"use client";

import { motion } from "framer-motion";
import Image from "next/image";

// Map of skill names to their devicon CDN URLs
const SKILL_ICONS: Record<string, string> = {
  // Frontend
  "Next.js": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
  "React": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
  "TypeScript": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
  "Tailwind CSS": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
  "Framer Motion": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/framermotion/framermotion-original.svg",
  "Redux": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg",
  // Backend
  "Node.js": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
  "Express": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",
  "PostgreSQL": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
  "MongoDB": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
  "Python": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
  "Flask": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg",
  // DevOps & Cloud
  "Docker": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
  "Kubernetes": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-original.svg",
  "AWS EC2": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
  "AWS S3": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
  "CI/CD": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/githubactions/githubactions-original.svg",
  "Nginx": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nginx/nginx-original.svg",
  // Extras (for micro-services, use a generic icon)
  "Microservices": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/archlinux/archlinux-original.svg",
  "RabbitMQ": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/rabbitmq/rabbitmq-original.svg",
};

const skills = [
  { category: "Frontend", items: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion", "Redux"] },
  { category: "Backend", items: ["Node.js", "Express", "Python", "Flask", "PostgreSQL", "MongoDB"] },
  { category: "DevOps & Cloud", items: ["Docker", "Kubernetes", "AWS EC2", "AWS S3", "CI/CD", "Nginx"] },
];

export default function Skills() {
  return (
    <section className="relative z-20 bg-[#0b131c] min-h-screen py-32 px-4 md:px-12 overflow-hidden" id="skills">
      {/* Background Ambience */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-[#4c1d95]/30 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#7f1d1d]/20 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
            Technical <span className="text-transparent bg-clip-text bg-linear-to-r from-[#0369a1] to-[#1e40af]">Arsenal</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl leading-relaxed">
            A comprehensive stack enabling end-to-end development of scalable applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skills.map((group, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 transition-colors"
            >
              <h3 className="text-2xl font-bold text-[#0369a1] mb-6 uppercase tracking-wider">{group.category}</h3>
              <div className="flex flex-wrap gap-3">
                {group.items.map((skill, sIdx) => (
                  <motion.span
                    key={sIdx}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: sIdx * 0.05 }}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-black/40 rounded-full text-sm text-gray-300 border border-white/10 hover:border-white/30 hover:text-white transition-all cursor-default"
                  >
                    {SKILL_ICONS[skill] && (
                      <img
                        src={SKILL_ICONS[skill]}
                        alt={`${skill} logo`}
                        width={16}
                        height={16}
                        className="w-4 h-4 object-contain"
                        style={
                          // Invert dark icons (Express, Next.js) to white for visibility on dark bg
                          skill === "Express" || skill === "Next.js"
                            ? { filter: "invert(1)" }
                            : undefined
                        }
                      />
                    )}
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

const projects = [
  {
    titleKey: "projects.portfolio.title",
    descriptionKey: "projects.portfolio.description",
    tech: [
      "Python",
      "FastAPI",
      "LangChain",
      "FAISS",
      "Google Gemini",
      "Next.js 14",
      "TypeScript",
      "Docker",
    ],
    github: "https://github.com/DryZn/AI_Assistant_Portfolio",
    demo: "https://portfolio-anthony-lesenfans.vercel.app/",
  },
  {
    titleKey: "projects.game.title",
    descriptionKey: "projects.game.description",
    tech: [
      "Python",
      "OpenGL",
      "Pygame",
      "FastAPI",
      "Raspberry Pi",
      "Pyinstaller",
    ],
    github: null,
    demo: null,
  },
];

export default function Projects() {
  const { t } = useLanguage();

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">{t("projects.title")}</h2>
          <p className="text-gray-600 dark:text-gray-300">
            {t("projects.subtitle")}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-xl transition"
            >
              <h3 className="text-2xl font-bold mb-3">{t(project.titleKey)}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {t(project.descriptionKey)}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                {project.github && (
                  <a
                    href={project.github}
                    className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-blue-500 transition"
                  >
                    <Github className="w-5 h-5" />
                    {t("projects.code")}
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-blue-500 transition"
                  >
                    <ExternalLink className="w-5 h-5" />
                    {t("projects.demo")}
                  </a>
                )}
                {!project.github && !project.demo && (
                  <span className="text-gray-500 dark:text-gray-400 text-sm italic">
                    {t("projects.private")}
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

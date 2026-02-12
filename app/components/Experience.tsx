"use client";

import { motion } from "framer-motion";
import { Calendar } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

const experiences = [
  {
    company: "Ericsson",
    roleKey: "experience.ericsson.frontrunner",
    periodKey: "experience.ericsson.frontrunner.period",
    location: "Massy, France",
    descKeys: [
      "experience.ericsson.frontrunner.desc1",
      "experience.ericsson.frontrunner.desc2",
      "experience.ericsson.frontrunner.desc3",
    ],
    tech: ["JavaScript", "Docker", "5G", "Node.js", "SQL"],
  },
  {
    company: "Ericsson",
    roleKey: "experience.ericsson.cpp",
    periodKey: "experience.ericsson.cpp.period",
    location: "Massy, France",
    descKeys: [
      "experience.ericsson.cpp.desc1",
      "experience.ericsson.cpp.desc2",
      "experience.ericsson.cpp.desc3",
    ],
    tech: ["C++", "5G", "Git", "Gerrit", "Jenkins"],
  },
  {
    company: "Ericsson",
    roleKey: "experience.ericsson.cloud",
    periodKey: "experience.ericsson.cloud.period",
    location: "Massy, France",
    descKeys: [
      "experience.ericsson.cloud.desc1",
      "experience.ericsson.cloud.desc2",
      "experience.ericsson.cloud.desc3",
      "experience.ericsson.cloud.desc4",
    ],
    tech: ["Python", "Kubernetes", "Docker", "FastAPI", "MongoDB", "Pandas"],
  },
  {
    company: "Ericsson",
    roleKey: "experience.ericsson.java",
    periodKey: "experience.ericsson.java.period",
    location: "Massy, France",
    descKeys: [
      "experience.ericsson.java.desc1",
      "experience.ericsson.java.desc2",
      "experience.ericsson.java.desc3",
      "experience.ericsson.java.desc4",
    ],
    tech: [
      "Java",
      "Spring Boot",
      "MongoDB",
      "Kafka",
      "Maven",
      "Docker",
      "Kubernetes",
      "Jenkins",
    ],
  },
  {
    company: "Sanofi",
    roleKey: "experience.sanofi.role",
    periodKey: "experience.sanofi.period",
    location: "Chilly-Mazarin, France",
    descKeys: [
      "experience.sanofi.desc1",
      "experience.sanofi.desc2",
      "experience.sanofi.desc3",
      "experience.sanofi.desc4",
    ],
    tech: [
      "R",
      "R Shiny",
      "SQL",
      "SQLite",
      "MySQL",
      "Prometheus",
      "Jenkins",
      "Git",
    ],
  },
  {
    company: "Thales",
    roleKey: "experience.thales.role",
    periodKey: "experience.thales.period",
    location: "Le Plessis-Pâté, France",
    descKeys: [
      "experience.thales.desc1",
      "experience.thales.desc2",
      "experience.thales.desc3",
    ],
    tech: ["Python", "OpenCV", "TensorFlow", "Deep Learning", "SQLite"],
  },
];

export default function Experience() {
  const { t } = useLanguage();

  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">{t("experience.title")}</h2>
          <p className="text-gray-600 dark:text-gray-300">
            {t("experience.subtitle")}
          </p>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-xl transition"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-blue-500">
                    {t(exp.roleKey)}
                  </h3>
                  <p className="text-xl font-semibold mt-1">{exp.company}</p>
                </div>
                <div className="flex flex-col md:items-end mt-2 md:mt-0">
                  <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                    <Calendar className="w-4 h-4" />
                    <span>{t(exp.periodKey)}</span>
                  </div>
                  <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
                    {exp.location}
                  </p>
                </div>
              </div>

              <ul className="space-y-2 mb-4">
                {exp.descKeys.map((key, i) => (
                  <li
                    key={i}
                    className="text-gray-600 dark:text-gray-300 flex items-start"
                  >
                    <span className="text-blue-500 mr-2">▸</span>
                    {t(key)}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {exp.tech.map((tech) => (
                  <span
                    key={tech}
                    className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

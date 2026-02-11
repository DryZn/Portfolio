"use client";

import { motion } from "framer-motion";
import { Brain, Code, Database, Zap } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

const skills = [
  {
    icon: Code,
    titleKey: "skills.development",
    items: [
      "Python",
      "JavaScript/TypeScript",
      "C++",
      "Java",
      "FastAPI",
      "Node.js",
      "Spring Boot",
    ],
  },
  {
    icon: Brain,
    titleKey: "skills.llm",
    items: [
      "OpenAI GPT",
      "LangChain",
      "Hugging Face",
      "RAG",
      "Prompt Engineering",
      "Fine-tuning",
      "Embeddings",
    ],
  },
  {
    icon: Database,
    titleKey: "skills.data",
    items: [
      "TensorFlow",
      "Pandas",
      "NumPy",
      "OpenCV",
      "Scikit-learn",
      "MLOps",
      "Computer Vision",
    ],
  },
  {
    icon: Zap,
    titleKey: "skills.devops",
    items: [
      "Docker",
      "Kubernetes",
      "Git/GitLab",
      "Jenkins",
      "Helm",
      "MongoDB",
      "Grafana",
      "Prometheus",
    ],
  },
];

export default function Skills() {
  const { t } = useLanguage();

  return (
    <section id="skills" className="py-20 px-4 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">{t("skills.title")}</h2>
          <p className="text-gray-600 dark:text-gray-300">
            {t("skills.subtitle")}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.titleKey}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-xl transition"
            >
              <skill.icon className="w-12 h-12 text-blue-500 mb-4" />
              <h3 className="text-xl font-bold mb-4">{t(skill.titleKey)}</h3>
              <ul className="space-y-2">
                {skill.items.map((item) => (
                  <li key={item} className="text-gray-600 dark:text-gray-300">
                    • {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

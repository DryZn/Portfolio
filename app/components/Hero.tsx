"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Sparkles } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-16 px-4"
    >
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex justify-center mb-6">
            <Sparkles className="w-16 h-16 text-purple-500 animate-pulse" />
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            {t("hero.title")}{" "}
            <span className="gradient-text">{t("hero.titleHighlight")}</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8">
            {t("hero.subtitle")}
          </p>

          <p className="text-lg text-gray-500 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            {t("hero.description")}
          </p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="text-md text-blue-600 dark:text-blue-400 mb-12 font-medium"
          >
            {t("hero.chatbot")}
          </motion.p>

          <div className="flex gap-4 justify-center">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#projects"
              className="bg-blue-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-600 transition"
            >
              {t("hero.viewProjects")}
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="border-2 border-blue-500 text-blue-500 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 dark:hover:bg-gray-800 transition"
            >
              {t("hero.contact")}
            </motion.a>
          </div>

          <div className="flex gap-6 justify-center mt-12">
            <a
              href="https://github.com/DryZn"
              target="_blank"
              className="hover:text-blue-500 transition"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/anthony-lesenfans"
              target="_blank"
              className="hover:text-blue-500 transition"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="mailto:lesenfans.anthony@gmail.com"
              className="hover:text-blue-500 transition"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

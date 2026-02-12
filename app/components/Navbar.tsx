"use client";

import { motion } from "framer-motion";
import { Brain, Menu, X } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import LanguageSwitch from "./LanguageSwitch";
import { useState } from "react";

export default function Navbar() {
  const { t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md z-50 shadow-sm"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2">
            <Brain className="w-8 h-8 text-blue-500" />
            <span className="font-bold text-xl">LLM Developer</span>
          </div>

          <div className="hidden md:flex gap-8 items-center">
            <a href="#home" className="hover:text-blue-500 transition">
              {t("nav.home")}
            </a>
            <a href="#skills" className="hover:text-blue-500 transition">
              {t("nav.skills")}
            </a>
            <a href="#experience" className="hover:text-blue-500 transition">
              {t("nav.experience")}
            </a>
            <a href="#projects" className="hover:text-blue-500 transition">
              {t("nav.projects")}
            </a>
            <a
              href="#certifications"
              className="hover:text-blue-500 transition"
            >
              {t("nav.certifications")}
            </a>
            <a href="#contact" className="hover:text-blue-500 transition">
              {t("nav.contact")}
            </a>
            <LanguageSwitch />
          </div>

          <div className="md:hidden flex items-center gap-4">
            <LanguageSwitch />
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden pb-4 flex flex-col gap-4">
            <a
              href="#home"
              className="hover:text-blue-500 transition"
              onClick={() => setIsMenuOpen(false)}
            >
              {t("nav.home")}
            </a>
            <a
              href="#skills"
              className="hover:text-blue-500 transition"
              onClick={() => setIsMenuOpen(false)}
            >
              {t("nav.skills")}
            </a>
            <a
              href="#experience"
              className="hover:text-blue-500 transition"
              onClick={() => setIsMenuOpen(false)}
            >
              {t("nav.experience")}
            </a>
            <a
              href="#projects"
              className="hover:text-blue-500 transition"
              onClick={() => setIsMenuOpen(false)}
            >
              {t("nav.projects")}
            </a>
            <a
              href="#certifications"
              className="hover:text-blue-500 transition"
              onClick={() => setIsMenuOpen(false)}
            >
              {t("nav.certifications")}
            </a>
            <a
              href="#contact"
              className="hover:text-blue-500 transition"
              onClick={() => setIsMenuOpen(false)}
            >
              {t("nav.contact")}
            </a>
          </div>
        )}
      </div>
    </motion.nav>
  );
}

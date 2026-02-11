"use client";

import { motion } from "framer-motion";
import { Award, CheckCircle } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

const certifications = [
  {
    title: "Applied Data Science Camp",
    issuer: "Ericsson",
    date: { fr: "Décembre 2023", en: "December 2023" },
    skills: [
      "Machine Learning",
      "Python",
      "Pandas",
      "A/B Testing",
      "Random Forest",
      "Neural Networks",
      "Clustering",
    ],
    badgeUrl:
      "https://www.credly.com/badges/14cef498-78ca-4432-9327-25fc1f9b8ccc",
  },
];

const languages = [
  {
    name: { fr: "Français", en: "French" },
    level: { fr: "Langue maternelle", en: "Native" },
  },
  {
    name: { fr: "Anglais", en: "English" },
    level: { fr: "Bilingue", en: "Bilingual" },
  },
  {
    name: { fr: "Allemand", en: "German" },
    level: { fr: "Notions", en: "Basic" },
  },
];

export default function Certifications() {
  const { t, language } = useLanguage();
  return (
    <section
      id="certifications"
      className="py-20 px-4 bg-gray-50 dark:bg-gray-800"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">
            {t("certifications.title")}
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Award className="w-6 h-6 text-blue-500" />
              {t("certifications.cert")}
            </h3>

            <div className="space-y-6">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg"
                >
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-xl font-bold text-blue-500">
                      {cert.title}
                    </h4>
                    {cert.badgeUrl && (
                      <a
                        href={cert.badgeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-blue-500 hover:text-blue-600 underline"
                      >
                        {t("certifications.viewBadge")}
                      </a>
                    )}
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-1">
                    {cert.issuer}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                    {cert.date[language]}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {t("certifications.description")}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill) => (
                      <span
                        key={skill}
                        className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Langues */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <CheckCircle className="w-6 h-6 text-blue-500" />
              {t("certifications.languages")}
            </h3>

            <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg space-y-6">
              {languages.map((lang, index) => (
                <div
                  key={index}
                  className="border-b border-gray-200 dark:border-gray-700 last:border-0 pb-4 last:pb-0"
                >
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-semibold">
                      {lang.name[language]}
                    </span>
                    <span className="text-blue-500 font-medium">
                      {lang.level[language]}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Formations complémentaires */}
            <div className="mt-8 bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg">
              <h4 className="text-lg font-bold mb-4">
                {t("certifications.trainings")}
              </h4>
              <ul className="space-y-2">
                <li className="text-gray-600 dark:text-gray-300 flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  5G RAN NR Protocols & Procedures (2025)
                </li>
                <li className="text-gray-600 dark:text-gray-300 flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  5G RAN NR Performance Management (2024)
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

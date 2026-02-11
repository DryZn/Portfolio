"use client";

import { useLanguage } from "../contexts/LanguageContext";
import { Globe } from "lucide-react";

export default function LanguageSwitch() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-2">
      <Globe className="w-5 h-5 text-gray-600 dark:text-gray-300" />
      <button
        onClick={() => setLanguage("en")}
        className={`px-3 py-1 rounded-lg transition ${
          language === "en"
            ? "bg-blue-500 text-white"
            : "text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
        }`}
      >
        EN
      </button>
      <button
        onClick={() => setLanguage("fr")}
        className={`px-3 py-1 rounded-lg transition ${
          language === "fr"
            ? "bg-blue-500 text-white"
            : "text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
        }`}
      >
        FR
      </button>
    </div>
  );
}

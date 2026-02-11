"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

type Language = "fr" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  fr: {
    "nav.home": "Accueil",
    "nav.skills": "Compétences",
    "nav.experience": "Expérience",
    "nav.projects": "Projets",
    "nav.certifications": "Certifications",
    "nav.contact": "Contact",
    "hero.title": "Développeur",
    "hero.titleHighlight": "LLM & IA",
    "hero.subtitle":
      "Spécialisé en Python, JavaScript et Intelligence Artificielle",
    "hero.description":
      "Ingénieur logiciel avec 4+ ans d'expérience chez Ericsson (Python, C++, Java). Passionné par l'IA et les LLM, je me spécialise dans le développement d'applications intelligentes et de solutions MLOps innovantes.",
    "hero.viewProjects": "Voir mes projets",
    "hero.contact": "Me contacter",
    "skills.title": "Compétences",
    "skills.subtitle": "Technologies et outils que je maîtrise",
    "skills.development": "Développement",
    "skills.llm": "LLM & IA",
    "skills.data": "Data & ML",
    "skills.devops": "DevOps & Cloud",
    "experience.title": "Expérience",
    "experience.subtitle": "Mon parcours professionnel",
    "projects.title": "Projets",
    "projects.subtitle": "Mes réalisations en LLM et IA",
    "projects.code": "Code",
    "projects.demo": "Demo",
    "certifications.title": "Certifications & Langues",
    "certifications.cert": "Certifications",
    "certifications.languages": "Langues",
    "certifications.viewBadge": "Voir le badge",
    "certifications.trainings": "Formations Ericsson",
    "certifications.description":
      "100+ heures d'études intensives en Data Science et Machine Learning",
    "contact.title": "Contact",
    "contact.subtitle": "Discutons de votre projet",
    "contact.info": "Informations",
    "contact.name": "Nom",
    "contact.email": "Email",
    "contact.message": "Message",
    "contact.send": "Envoyer",
    "footer.rights": "Portfolio LLM Developer. Tous droits réservés.",
  },
  en: {
    "nav.home": "Home",
    "nav.skills": "Skills",
    "nav.experience": "Experience",
    "nav.projects": "Projects",
    "nav.certifications": "Certifications",
    "nav.contact": "Contact",
    "hero.title": "Developer",
    "hero.titleHighlight": "LLM & AI",
    "hero.subtitle":
      "Specialized in Python, JavaScript and Artificial Intelligence",
    "hero.description":
      "Software engineer with 4+ years of experience at Ericsson (Python, C++, Java). Passionate about AI and LLMs, I specialize in developing intelligent applications and innovative MLOps solutions.",
    "hero.viewProjects": "View my projects",
    "hero.contact": "Contact me",
    "skills.title": "Skills",
    "skills.subtitle": "Technologies and tools I master",
    "skills.development": "Development",
    "skills.llm": "LLM & AI",
    "skills.data": "Data & ML",
    "skills.devops": "DevOps & Cloud",
    "experience.title": "Experience",
    "experience.subtitle": "My professional journey",
    "projects.title": "Projects",
    "projects.subtitle": "My achievements in LLM and AI",
    "projects.code": "Code",
    "projects.demo": "Demo",
    "certifications.title": "Certifications & Languages",
    "certifications.cert": "Certifications",
    "certifications.languages": "Languages",
    "certifications.viewBadge": "View badge",
    "certifications.trainings": "Ericsson Trainings",
    "certifications.description":
      "100+ hours of intensive study in Data Science and Machine Learning",
    "contact.title": "Contact",
    "contact.subtitle": "Let's discuss your project",
    "contact.info": "Information",
    "contact.name": "Name",
    "contact.email": "Email",
    "contact.message": "Message",
    "contact.send": "Send",
    "footer.rights": "LLM Developer Portfolio. All rights reserved.",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const browserLang = navigator.language.split("-")[0];
    setLanguage(browserLang === "fr" ? "fr" : "en");
    setMounted(true);
  }, []);

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.fr] || key;
  };

  if (!mounted) {
    return null;
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
}

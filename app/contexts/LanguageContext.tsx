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
      "Développeur Fullstack Python avec 4+ ans d'expérience chez Ericsson. Spécialisé en FastAPI, React/TypeScript, et architecture MLOps. Expert en développement d'applications intelligentes avec LLMs et solutions cloud-native.",
    "hero.chatbot": "💬 Essayez mon assistant IA en bas à droite !",
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
    "projects.subtitle": "Code source de ce portfolio et autres projets",
    "projects.thisSite": "Ce site",
    "projects.code": "Code",
    "projects.demo": "Demo",
    "projects.private": "Projet privé",
    "certifications.title": "Certifications & Langues",
    "certifications.cert": "Certifications",
    "certifications.languages": "Langues",
    "certifications.viewBadge": "Voir le badge",
    "certifications.trainings": "Formations Ericsson",
    "experience.ericsson.fullstack": "Développeur Fullstack Python",
    "experience.ericsson.fullstack.period": "Oct. 2021 - Présent",
    "experience.ericsson.fullstack.project1":
      "Co-architecture d'une application web d'assistance au tuning automatique:",
    "experience.ericsson.fullstack.desc1":
      "Scrum Master : planification des sprints et définition des tâches",
    "experience.ericsson.fullstack.desc2":
      "Lead frontend en JavaScript avec implémentation des jobs Jenkins",
    "experience.ericsson.fullstack.project2":
      "Contribution frontend/backend sur une app de simulation d'équipements réseau:",
    "experience.ericsson.fullstack.desc3":
      "Wrapper Python OpenTelemetry pour tous les microservices backend",
    "experience.ericsson.fullstack.desc4":
      "Algorithme récursif Python pour recherche de combinaisons d'équipements",
    "experience.ericsson.fullstack.desc5":
      "Implémentation React TypeScript de nouvelles fonctionnalités frontend",
    "experience.ericsson.fullstack.project3":
      "Conception d'un microservice d'inférence ML pour expérimentation de modèles:",
    "experience.ericsson.fullstack.desc6":
      "Création complète du pipeline CI/CD GitLab et sous-pipelines",
    "experience.ericsson.fullstack.desc7":
      "Lead FOSS Guardian pour gouvernance des dépendances Python (JFrog, pipenv)",
    "experience.ericsson.fullstack.desc8":
      "Déploiement via Docker et Helm sur clusters Kubernetes",
    "experience.ericsson.fullstack.desc9":
      "Backend Python avec FastAPI et asyncio, thread pool pour parallélisme",
    "experience.ericsson.fullstack.desc10":
      "Construction d'un service de logging standard entreprise en Python",
    "experience.sanofi.role": "Développeur d'Outils Analytiques",
    "experience.sanofi.period": "Sept. 2020 - Août 2021",
    "experience.sanofi.desc1":
      "Développement d'une application dashboard web avec R Shiny",
    "experience.sanofi.desc2":
      "Automatisation de migration de base de données serveur vers local (SQLite)",
    "experience.sanofi.desc3":
      "Requêtes sur diverses bases de données (SQL, MySQL, Prometheus)",
    "experience.sanofi.desc4": "Tests d'intégration continue avec Jenkins",
    "experience.thales.role": "Ingénieur Traitement d'Images",
    "experience.thales.period": "Sept. 2018 - Août 2020",
    "experience.thales.desc1":
      "Conception d'un logiciel de détection de places de parking libres avec UI, backend Python et base SQL",
    "experience.thales.desc2":
      "Déploiement sur modules embarqués (cartes Nvidia Jetson)",
    "experience.thales.desc3":
      "Module de reconnaissance de plaques en Python (OpenCV, Deep Learning, Cuda)",
    "experience.thales.desc4":
      "Module d'acquisition vidéo avec API Gstreamer en Python",
    "certifications.french": "Français",
    "certifications.french.level": "Langue maternelle",
    "certifications.english": "Anglais",
    "certifications.english.level": "Bilingue",
    "certifications.german": "Allemand",
    "certifications.german.level": "Notions",
    "certifications.date": "Décembre 2023",
    "contact.title": "Contact",
    "contact.subtitle": "Discutons de votre projet",
    "contact.info": "Informations",
    "contact.name": "Nom",
    "contact.email": "Email",
    "contact.message": "Message",
    "contact.send": "Envoyer",
    "footer.rights": "Portfolio LLM Developer. Tous droits réservés.",
    "chat.title": "Assistant IA - Anthony",
    "chat.welcome":
      "Salut ! Je suis l'assistant IA d'Anthony. Pose-moi des questions sur son expérience, ses compétences ou ses projets !",
    "chat.placeholder": "Pose une question sur Anthony...",
    "chat.reset": "Réinitialiser la conversation",
    "chat.resetSuccess":
      "Conversation réinitialisée ! Pose-moi des questions sur Anthony.",
    "chat.error":
      "Désolé, je ne peux pas répondre pour le moment. Vérifiez que l'API backend est démarrée.",
    "chat.sources": "Sources",
    "chat.waking":
      "⏳ Réveil du serveur en cours... Première requête peut prendre 30 secondes.",
    "chat.tooltip": "Posez-moi des questions sur Anthony !",
    "chat.rateLimit":
      "⚠️ Le quota quotidien de l'assistant IA a été atteint par les visiteurs du site. Revenez demain !",
    "projects.backend.title": "Backend API - RAG Chatbot",
    "projects.backend.description":
      "API FastAPI avec RAG (LangChain + FAISS) et Google Gemini pour répondre aux questions sur mon parcours. Architecture stateless, CI/CD GitHub Actions, déployé sur Render.",
    "projects.frontend.title": "Frontend - Portfolio Next.js",
    "projects.frontend.description":
      "Interface moderne avec Next.js 14, TypeScript et Tailwind CSS. Animations Framer Motion, support bilingue, chatbot intégré. Déployé sur Vercel avec CI/CD.",
    "projects.game.title": "Dungeon Twister - Jeu Vidéo",
    "projects.game.description":
      "Adaptation vidéoludique du jeu de société (2020-2023). Moteur graphique 2D avec OpenGL/Python, modes solo/LAN/en ligne. Serveur Raspberry Pi avec Flask pour distribution et FastAPI pour mises à jour automatiques.",
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
      "Fullstack Python Developer with 4+ years of experience at Ericsson. Specialized in FastAPI, React/TypeScript, and MLOps architecture. Expert in building intelligent applications with LLMs and cloud-native solutions.",
    "hero.chatbot": "💬 Try my AI assistant in the bottom right!",
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
    "projects.subtitle": "Source code of this portfolio and other projects",
    "projects.thisSite": "This site",
    "projects.code": "Code",
    "projects.demo": "Demo",
    "projects.private": "Private project",
    "certifications.title": "Certifications & Languages",
    "certifications.cert": "Certifications",
    "certifications.languages": "Languages",
    "certifications.viewBadge": "View badge",
    "certifications.trainings": "Ericsson Trainings",
    "experience.ericsson.fullstack": "Fullstack Python Developer",
    "experience.ericsson.fullstack.period": "Oct. 2021 - Present",
    "experience.ericsson.fullstack.project1":
      "Co-architectured Automatic Tuning Assistance web app:",
    "experience.ericsson.fullstack.desc1":
      "Scrum Master: planned sprints and defined tasks to achieve Sprint goals",
    "experience.ericsson.fullstack.desc2":
      "Led frontend side in JavaScript with Jenkins pipeline implementation",
    "experience.ericsson.fullstack.project2":
      "Contributed to frontend/backend of a network equipment simulation web app:",
    "experience.ericsson.fullstack.desc3":
      "Created Python OpenTelemetry wrapper for all backend microservices",
    "experience.ericsson.fullstack.desc4":
      "Developed recursive Python algorithm to find specific equipment combinations",
    "experience.ericsson.fullstack.desc5":
      "Implemented new frontend features in React TypeScript",
    "experience.ericsson.fullstack.project3":
      "Designed Machine Learning inference microservice for model experimentation:",
    "experience.ericsson.fullstack.desc6":
      "Created entire GitLab CI/CD pipeline and sub-pipelines",
    "experience.ericsson.fullstack.desc7":
      "Led FOSS Guardian activities for Python dependency governance (JFrog, pipenv)",
    "experience.ericsson.fullstack.desc8":
      "Deployed via Docker and Helm to Kubernetes clusters",
    "experience.ericsson.fullstack.desc9":
      "Implemented backend Python features with FastAPI and asyncio, thread pool",
    "experience.ericsson.fullstack.desc10":
      "Built a company-standard logging service in Python",
    "experience.sanofi.role": "Analytical Tools Developer",
    "experience.sanofi.period": "Sept. 2020 - Aug. 2021",
    "experience.sanofi.desc1":
      "Developed a web-based dashboard application using R Shiny",
    "experience.sanofi.desc2":
      "Automated server-to-local database migration (SQLite)",
    "experience.sanofi.desc3":
      "Performed queries on various databases to retrieve data (SQL, MySQL, Prometheus)",
    "experience.sanofi.desc4":
      "Conducted continuous integration tests using Jenkins",
    "experience.thales.role": "Image Processing Engineer",
    "experience.thales.period": "Sept. 2018 - Aug. 2020",
    "experience.thales.desc1":
      "Designed free parking spaces detection software with UI, Python backend and SQL database",
    "experience.thales.desc2":
      "Deployed on embedded modules (Nvidia Jetson boards)",
    "experience.thales.desc3":
      "License plate recognition module in Python (OpenCV, Deep Learning, Cuda)",
    "experience.thales.desc4":
      "Video acquisition module using Gstreamer API in Python",
    "certifications.french": "French",
    "certifications.french.level": "Native",
    "certifications.english": "English",
    "certifications.english.level": "Bilingual",
    "certifications.german": "German",
    "certifications.german.level": "Basic",
    "certifications.date": "December 2023",
    "contact.title": "Contact",
    "contact.subtitle": "Let's discuss your project",
    "contact.info": "Information",
    "contact.name": "Name",
    "contact.email": "Email",
    "contact.message": "Message",
    "contact.send": "Send",
    "footer.rights": "LLM Developer Portfolio. All rights reserved.",
    "chat.title": "AI Assistant - Anthony",
    "chat.welcome":
      "Hi! I'm Anthony's AI assistant. Ask me questions about his experience, skills or projects!",
    "chat.placeholder": "Ask a question about Anthony...",
    "chat.reset": "Reset conversation",
    "chat.resetSuccess": "Conversation reset! Ask me questions about Anthony.",
    "chat.error":
      "Sorry, I can't respond right now. Check that the backend API is running.",
    "chat.sources": "Sources",
    "chat.waking": "⏳ Waking up server... First request may take 30 seconds.",
    "chat.tooltip": "Ask me about Anthony!",
    "chat.rateLimit":
      "⚠️ The AI assistant's daily quota has been reached by site visitors. Come back tomorrow!",
    "projects.backend.title": "Backend API - RAG Chatbot",
    "projects.backend.description":
      "FastAPI with RAG (LangChain + FAISS) and Google Gemini to answer questions about my background. Stateless architecture, GitHub Actions CI/CD, deployed on Render.",
    "projects.frontend.title": "Frontend - Next.js Portfolio",
    "projects.frontend.description":
      "Modern interface with Next.js 14, TypeScript and Tailwind CSS. Framer Motion animations, bilingual support, integrated chatbot. Deployed on Vercel with CI/CD.",
    "projects.game.title": "Dungeon Twister - Video Game",
    "projects.game.description":
      "Video game adaptation of the board game (2020-2023). 2D graphics engine with OpenGL/Python, single-player/LAN/online modes. Raspberry Pi server with Flask for distribution and FastAPI for automatic updates.",
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

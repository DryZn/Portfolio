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
    "projects.private": "Projet privé",
    "certifications.title": "Certifications & Langues",
    "certifications.cert": "Certifications",
    "certifications.languages": "Langues",
    "certifications.viewBadge": "Voir le badge",
    "certifications.trainings": "Formations Ericsson",
    "experience.ericsson.frontrunner": "Frontrunner",
    "experience.ericsson.frontrunner.period": "Mai 2025 - Aujourd'hui",
    "experience.ericsson.frontrunner.desc1":
      "Développement de rApps en JavaScript",
    "experience.ericsson.frontrunner.desc2":
      "Supervision et gestion de projets avec méthodologie Scrum",
    "experience.ericsson.frontrunner.desc3":
      "Définition des cas d'usage avec les clients",
    "experience.ericsson.cpp": "Développeur C++",
    "experience.ericsson.cpp.period": "Févr. 2024 - Mai 2025",
    "experience.ericsson.cpp.desc1":
      "Développement C++ sur gNodeB (5G) - modules UE RPC et RC",
    "experience.ericsson.cpp.desc2":
      "Optimisation du temps d'interruption de handover entre cellules",
    "experience.ericsson.cpp.desc3":
      "Travail sur systèmes télécom temps réel critiques",
    "experience.ericsson.cloud": "Développeur Cloud Native",
    "experience.ericsson.cloud.period": "Avr. 2022 - Févr. 2024",
    "experience.ericsson.cloud.desc1":
      "Développement de microservice MLOps en Python",
    "experience.ericsson.cloud.desc2":
      "Création d'une bibliothèque de logging et wrapper OpenTelemetry",
    "experience.ericsson.cloud.desc3":
      "Déploiement d'applications Docker sur Kubernetes avec Helm",
    "experience.ericsson.cloud.desc4":
      "Microservice de simulation de trafic 4G/5G (Python, JS, MongoDB)",
    "experience.ericsson.java": "Développeur Java",
    "experience.ericsson.java.period": "Oct. 2021 - Avr. 2022",
    "experience.ericsson.java.desc1":
      "Développement de microservices Java avec IntelliJ et Spring Boot",
    "experience.ericsson.java.desc2":
      "Gestion des dépendances FOSS Guardian avec Maven et méthodologie Scrum",
    "experience.ericsson.java.desc3":
      "Utilisation de MongoDB, Kafka, Swagger et Postman pour le débogage",
    "experience.ericsson.java.desc4":
      "Tests unitaires et d'intégration avec méthodologie Scrum",
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
    "experience.thales.desc1": "Détection d'objets par Deep Learning et OpenCV",
    "experience.thales.desc2":
      "Module de reconnaissance de plaques sur Jetson Nano",
    "experience.thales.desc3":
      "Développement de module de détection de fraude aux portiques",
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
    "projects.portfolio.title": "Assistant Portfolio IA",
    "projects.portfolio.description":
      "Chatbot RAG full-stack avec FastAPI, LangChain, FAISS et Google Gemini. Architecture stateless avec Next.js 14, CI/CD GitHub Actions, déployé sur Render et Vercel.",
    "projects.game.title": "Dungeon Twister - Jeu Vidéo",
    "projects.game.description":
      "Adaptation du jeu de société avec moteur graphique 2D OpenGL et multijoueur LAN. Serveur FastAPI sur Raspberry Pi pour distribution et mises à jour automatiques.",
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
    "projects.private": "Private project",
    "certifications.title": "Certifications & Languages",
    "certifications.cert": "Certifications",
    "certifications.languages": "Languages",
    "certifications.viewBadge": "View badge",
    "certifications.trainings": "Ericsson Trainings",
    "experience.ericsson.frontrunner": "Frontrunner",
    "experience.ericsson.frontrunner.period": "May 2025 - Present",
    "experience.ericsson.frontrunner.desc1":
      "Development of rApps in JavaScript",
    "experience.ericsson.frontrunner.desc2":
      "Project supervision and management with Scrum methodology",
    "experience.ericsson.frontrunner.desc3":
      "Definition of use cases with clients",
    "experience.ericsson.cpp": "C++ Developer",
    "experience.ericsson.cpp.period": "Feb. 2024 - May 2025",
    "experience.ericsson.cpp.desc1":
      "C++ development on gNodeB (5G) - UE RPC and RC modules",
    "experience.ericsson.cpp.desc2":
      "Optimization of handover interruption time between cells",
    "experience.ericsson.cpp.desc3":
      "Work on critical real-time telecom systems",
    "experience.ericsson.cloud": "Cloud Native Developer",
    "experience.ericsson.cloud.period": "Apr. 2022 - Feb. 2024",
    "experience.ericsson.cloud.desc1":
      "Development of MLOps microservice in Python",
    "experience.ericsson.cloud.desc2":
      "Creation of logging library and OpenTelemetry wrapper",
    "experience.ericsson.cloud.desc3":
      "Deployment of Docker applications on Kubernetes with Helm",
    "experience.ericsson.cloud.desc4":
      "4G/5G traffic simulation microservice (Python, JS, MongoDB)",
    "experience.ericsson.java": "Java Developer",
    "experience.ericsson.java.period": "Oct. 2021 - Apr. 2022",
    "experience.ericsson.java.desc1":
      "Java microservices development using IntelliJ and Spring Boot",
    "experience.ericsson.java.desc2":
      "FOSS Guardian dependency management with Maven using Scrum methodology",
    "experience.ericsson.java.desc3":
      "Used MongoDB, Kafka, Swagger, and Postman for microservice debugging",
    "experience.ericsson.java.desc4":
      "Performed unit testing and integration testing tasks; followed Scrum methodology",
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
      "Object detection using Deep Learning and OpenCV",
    "experience.thales.desc2":
      "License plate recognition module on Jetson Nano",
    "experience.thales.desc3": "Development of fraud detection module at gates",
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
    "projects.portfolio.title": "AI Portfolio Assistant",
    "projects.portfolio.description":
      "Full-stack RAG chatbot with FastAPI, LangChain, FAISS and Google Gemini. Stateless architecture with Next.js 14, GitHub Actions CI/CD, deployed on Render and Vercel.",
    "projects.game.title": "Dungeon Twister - Video Game",
    "projects.game.description":
      "Board game adaptation with 2D OpenGL graphics engine and LAN multiplayer. FastAPI server on Raspberry Pi for distribution and automatic updates.",
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

"use client";

import { useEffect } from "react";
import { useLanguage } from "./contexts/LanguageContext";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";

export default function Home() {
  const { t } = useLanguage();

  // Wake up backend on page load and track status
  useEffect(() => {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;
    if (apiUrl) {
      const startTime = Date.now();
      fetch(`${apiUrl}/health`)
        .then(() => {
          const duration = Date.now() - startTime;
          sessionStorage.setItem(
            "backendReady",
            duration < 5000 ? "true" : "false",
          );
          sessionStorage.setItem("backendReadyTime", Date.now().toString());
        })
        .catch(() => {
          sessionStorage.setItem("backendReady", "false");
        });
    }
  }, []);

  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Skills />
      <Experience />
      <Projects />
      <Certifications />
      <Contact />

      <footer className="bg-gray-900 text-white py-8 text-center">
        <p>&copy; 2026 {t("footer.rights")}</p>
      </footer>
    </main>
  );
}

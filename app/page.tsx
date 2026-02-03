'use client'

import { motion } from 'framer-motion'
import { Brain, Code, Sparkles, Github, Linkedin, Mail, ExternalLink } from 'lucide-react'
import { useLanguage } from './contexts/LanguageContext'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Certifications from './components/Certifications'
import Contact from './components/Contact'

export default function Home() {
  const { t } = useLanguage()
  
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
        <p>&copy; 2026 {t('footer.rights')}</p>
      </footer>
    </main>
  )
}

'use client'

import { motion } from 'framer-motion'
import { Brain } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'
import LanguageSwitch from './LanguageSwitch'

export default function Navbar() {
  const { t } = useLanguage()
  
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
            <a href="#home" className="hover:text-blue-500 transition">{t('nav.home')}</a>
            <a href="#skills" className="hover:text-blue-500 transition">{t('nav.skills')}</a>
            <a href="#experience" className="hover:text-blue-500 transition">{t('nav.experience')}</a>
            <a href="#projects" className="hover:text-blue-500 transition">{t('nav.projects')}</a>
            <a href="#certifications" className="hover:text-blue-500 transition">{t('nav.certifications')}</a>
            <a href="#contact" className="hover:text-blue-500 transition">{t('nav.contact')}</a>
            <LanguageSwitch />
          </div>
        </div>
      </div>
    </motion.nav>
  )
}

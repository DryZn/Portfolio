'use client'

import { motion } from 'framer-motion'
import { Brain } from 'lucide-react'

export default function Navbar() {
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
          
          <div className="hidden md:flex gap-8">
            <a href="#home" className="hover:text-blue-500 transition">Accueil</a>
            <a href="#skills" className="hover:text-blue-500 transition">Compétences</a>
            <a href="#experience" className="hover:text-blue-500 transition">Expérience</a>
            <a href="#projects" className="hover:text-blue-500 transition">Projets</a>
            <a href="#certifications" className="hover:text-blue-500 transition">Certifications</a>
            <a href="#contact" className="hover:text-blue-500 transition">Contact</a>
          </div>
        </div>
      </div>
    </motion.nav>
  )
}

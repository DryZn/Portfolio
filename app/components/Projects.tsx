'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'

const projects = [
  {
    title: { fr: 'MLOps Microservice', en: 'MLOps Microservice' },
    description: {
      fr: 'Microservice Python pour l\'automatisation du déploiement de modèles ML avec monitoring OpenTelemetry et logging conforme aux standards Ericsson.',
      en: 'Python microservice for automating ML model deployment with OpenTelemetry monitoring and Ericsson-compliant logging.'
    },
    tech: ['Python', 'FastAPI', 'Docker', 'Kubernetes', 'OpenTelemetry', 'Prometheus'],
    github: '#',
    demo: '#'
  },
  {
    title: { fr: 'Chatbot RAG Intelligent', en: 'Intelligent RAG Chatbot' },
    description: {
      fr: 'Assistant conversationnel utilisant RAG pour répondre à partir de documentation technique. Intégration avec vector databases pour recherche sémantique.',
      en: 'Conversational assistant using RAG to answer from technical documentation. Integration with vector databases for semantic search.'
    },
    tech: ['Python', 'LangChain', 'OpenAI', 'Pinecone', 'FastAPI', 'Streamlit'],
    github: '#',
    demo: '#'
  },
  {
    title: { fr: 'Computer Vision - Détection d\'Objets', en: 'Computer Vision - Object Detection' },
    description: {
      fr: 'Système de détection d\'objets en temps réel avec Deep Learning. Déploiement sur Jetson Nano pour reconnaissance de plaques d\'immatriculation.',
      en: 'Real-time object detection system with Deep Learning. Deployment on Jetson Nano for license plate recognition.'
    },
    tech: ['Python', 'OpenCV', 'TensorFlow', 'CUDA', 'SQLite'],
    github: '#',
    demo: '#'
  },
  {
    title: { fr: 'Dungeon Twister - Jeu Vidéo', en: 'Dungeon Twister - Video Game' },
    description: {
      fr: 'Adaptation du jeu de société en jeu vidéo avec moteur graphique 2D OpenGL. Serveur FastAPI embarqué sur Raspberry Pi pour mises à jour automatiques.',
      en: 'Board game adaptation to video game with 2D OpenGL graphics engine. FastAPI server embedded on Raspberry Pi for automatic updates.'
    },
    tech: ['Python', 'OpenGL', 'FastAPI', 'Raspberry Pi', 'Networking'],
    github: '#',
    demo: '#'
  }
]

export default function Projects() {
  const { t, language } = useLanguage()
  
  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">{t('projects.title')}</h2>
          <p className="text-gray-600 dark:text-gray-300">{t('projects.subtitle')}</p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-xl transition"
            >
              <h3 className="text-2xl font-bold mb-3">{project.title[language]}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description[language]}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map(tech => (
                  <span key={tech} className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex gap-4">
                <a href={project.github} className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-blue-500 transition">
                  <Github className="w-5 h-5" />
                  {t('projects.code')}
                </a>
                <a href={project.demo} className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-blue-500 transition">
                  <ExternalLink className="w-5 h-5" />
                  {t('projects.demo')}
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

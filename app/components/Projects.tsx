'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'

const projects = [
  {
    title: 'MLOps Microservice',
    description: 'Microservice Python pour l\'automatisation du déploiement de modèles ML avec monitoring OpenTelemetry et logging conforme aux standards Ericsson.',
    tech: ['Python', 'FastAPI', 'Docker', 'Kubernetes', 'OpenTelemetry', 'Prometheus'],
    github: '#',
    demo: '#'
  },
  {
    title: 'Chatbot RAG Intelligent',
    description: 'Assistant conversationnel utilisant RAG pour répondre à partir de documentation technique. Intégration avec vector databases pour recherche sémantique.',
    tech: ['Python', 'LangChain', 'OpenAI', 'Pinecone', 'FastAPI', 'Streamlit'],
    github: '#',
    demo: '#'
  },
  {
    title: 'Computer Vision - Détection d\'Objets',
    description: 'Système de détection d\'objets en temps réel avec Deep Learning. Déploiement sur Jetson Nano pour reconnaissance de plaques d\'immatriculation.',
    tech: ['Python', 'OpenCV', 'TensorFlow', 'CUDA', 'SQLite'],
    github: '#',
    demo: '#'
  },
  {
    title: 'Dungeon Twister - Jeu Vidéo',
    description: 'Adaptation du jeu de société en jeu vidéo avec moteur graphique 2D OpenGL. Serveur FastAPI embarqué sur Raspberry Pi pour mises à jour automatiques.',
    tech: ['Python', 'OpenGL', 'FastAPI', 'Raspberry Pi', 'Networking'],
    github: '#',
    demo: '#'
  }
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Projets</h2>
          <p className="text-gray-600 dark:text-gray-300">Mes réalisations en LLM et IA</p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-xl transition"
            >
              <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
              
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
                  Code
                </a>
                <a href={project.demo} className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-blue-500 transition">
                  <ExternalLink className="w-5 h-5" />
                  Demo
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

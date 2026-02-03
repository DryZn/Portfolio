'use client'

import { motion } from 'framer-motion'
import { Briefcase, Calendar } from 'lucide-react'

const experiences = [
  {
    company: 'Ericsson',
    role: 'Frontrunner',
    period: 'Mai 2025 - Aujourd\'hui',
    location: 'Massy, France',
    description: [
      'Développement de rApps en Golang et JavaScript',
      'Supervision et gestion de projets avec méthodologie Scrum',
      'Définition des cas d\'usage avec les clients'
    ],
    tech: ['JavaScript', 'Docker', '5G', 'Node.js', 'SQL']
  },
  {
    company: 'Ericsson',
    role: 'C++ Developer',
    period: 'Févr. 2024 - Mai 2025',
    location: 'Massy, France',
    description: [
      'Développement C++ sur gNodeB (5G) - modules UE RPC et RC',
      'Optimisation du temps d\'interruption de handover entre cellules',
      'Travail sur systèmes télécom temps réel critiques'
    ],
    tech: ['C++', '5G', 'Git', 'Gerrit', 'Jenkins']
  },
  {
    company: 'Ericsson',
    role: 'Cloud Native Developer',
    period: 'Avr. 2022 - Févr. 2024',
    location: 'Massy, France',
    description: [
      'Développement de microservice MLOps en Python',
      'Création d\'une bibliothèque de logging et wrapper OpenTelemetry',
      'Déploiement d\'applications Docker sur Kubernetes avec Helm',
      'Microservice de simulation de trafic 4G/5G (Python, JS, MongoDB)'
    ],
    tech: ['Python', 'Kubernetes', 'Docker', 'FastAPI', 'MongoDB', 'Pandas']
  },
  {
    company: 'Thales',
    role: 'Image Processing Engineer',
    period: 'Sept. 2018 - Août 2020',
    location: 'Le Plessis-Pâté, France',
    description: [
      'Détection d\'objets par Deep Learning et OpenCV',
      'Module de reconnaissance de plaques sur Jetson Nano',
      'Développement de module de détection de fraude aux portiques'
    ],
    tech: ['Python', 'OpenCV', 'TensorFlow', 'Deep Learning', 'SQLite']
  }
]

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Expérience</h2>
          <p className="text-gray-600 dark:text-gray-300">Mon parcours professionnel</p>
        </motion.div>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-xl transition"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-blue-500">{exp.role}</h3>
                  <p className="text-xl font-semibold mt-1">{exp.company}</p>
                </div>
                <div className="flex flex-col md:items-end mt-2 md:mt-0">
                  <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                    <Calendar className="w-4 h-4" />
                    <span>{exp.period}</span>
                  </div>
                  <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">{exp.location}</p>
                </div>
              </div>
              
              <ul className="space-y-2 mb-4">
                {exp.description.map((item, i) => (
                  <li key={i} className="text-gray-600 dark:text-gray-300 flex items-start">
                    <span className="text-blue-500 mr-2">▸</span>
                    {item}
                  </li>
                ))}
              </ul>
              
              <div className="flex flex-wrap gap-2">
                {exp.tech.map(tech => (
                  <span key={tech} className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

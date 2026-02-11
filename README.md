# Portfolio - Développeur LLM & IA

[![CI/CD Pipeline](https://github.com/DryZn/portfolio/workflows/CI%2FCD%20Pipeline/badge.svg)](https://github.com/DryZn/portfolio/actions/workflows/ci.yml)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

Portfolio moderne pour un développeur Python/JS spécialisé en LLM et Intelligence Artificielle.

## 🚀 Technologies

- **Frontend**: Next.js 14, React, TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React

## 🔄 CI/CD Pipeline

Pipeline automatisé avec GitHub Actions :

- ✅ **Qualité du code** : ESLint + Prettier
- ✅ **Vérification des types** : TypeScript
- ✅ **Build** : Next.js build test
- ✅ **Docker** : Container build et test
- ✅ **Déploiement** : Auto-deploy sur Vercel

## 🐳 Docker

```bash
# Build image
docker build -t portfolio-frontend .

# Run container
docker run -p 3000:3000 portfolio-frontend
```

Accès : `http://localhost:3000`

## 📦 Installation

```bash
# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev

# Build pour production
npm run build
npm start
```

## 🎨 Fonctionnalités

- ✅ Design moderne et responsive
- ✅ Animations fluides
- ✅ Mode sombre/clair automatique
- ✅ Section compétences (Python, JS, LLM)
- ✅ Portfolio de projets LLM
- ✅ Formulaire de contact
- ✅ Navigation smooth
- ✅ SEO optimisé

## 📝 Personnalisation

1. Modifiez les informations personnelles dans `app/components/Hero.tsx`
2. Ajoutez vos projets dans `app/components/Projects.tsx`
3. Mettez à jour vos compétences dans `app/components/Skills.tsx`
4. Changez les informations de contact dans `app/components/Contact.tsx`

## 🌐 Déploiement

Le plus simple est de déployer sur Vercel :

```bash
npm install -g vercel
vercel
```

## 📧 Contact

Pour toute question, contactez-moi à lesenfans.anthony@gmail.com

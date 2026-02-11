# Portfolio - LLM & AI Developer

[![CI/CD Pipeline](https://github.com/DryZn/portfolio/workflows/CI%2FCD%20Pipeline/badge.svg)](https://github.com/DryZn/portfolio/actions/workflows/ci.yml)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

Modern portfolio for a Python/JS developer specialized in LLM and Artificial Intelligence.

## 🚀 Technologies

- **Frontend**: Next.js 14, React, TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React

## 🔄 CI/CD Pipeline

Automated pipeline with GitHub Actions:

- ✅ **Code Quality**: ESLint + Prettier
- ✅ **Type Checking**: TypeScript
- ✅ **Build**: Next.js build test
- ✅ **Docker**: Container build and test
- ✅ **Deployment**: Auto-deploy to Vercel

## 🐳 Docker

```bash
# Build image
docker build -t portfolio-frontend .

# Run container
docker run -p 3000:3000 portfolio-frontend
```

Access: `http://localhost:3000`

## 📦 Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
npm start
```

## 🎨 Features

- ✅ Modern and responsive design
- ✅ Smooth animations
- ✅ Automatic dark/light mode
- ✅ Skills section (Python, JS, LLM)
- ✅ LLM projects portfolio
- ✅ Contact form
- ✅ Smooth navigation
- ✅ SEO optimized

## 📝 Customization

1. Modify personal information in `app/components/Hero.tsx`
2. Add your projects in `app/components/Projects.tsx`
3. Update your skills in `app/components/Skills.tsx`
4. Change contact information in `app/components/Contact.tsx`

## 🌐 Deployment

The easiest way is to deploy on Vercel:

```bash
npm install -g vercel
vercel
```

## 📧 Contact

For any questions, contact me at lesenfans.anthony@gmail.com

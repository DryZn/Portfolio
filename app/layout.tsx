import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import Chatbot from "./components/Chatbot";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio - Développeur LLM & IA",
  description:
    "Portfolio d'un développeur Python/JS spécialisé en LLM et Intelligence Artificielle",
};

import { LanguageProvider } from "./contexts/LanguageContext";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <LanguageProvider>
          {children}
          <SpeedInsights />
          <Analytics />
          <Chatbot />
        </LanguageProvider>
      </body>
    </html>
  );
}

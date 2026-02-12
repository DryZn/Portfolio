import { Inter } from "next/font/google";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import Chatbot from "./components/Chatbot";
import { LanguageProvider } from "./contexts/LanguageContext";
import { metadata } from "./metadata";

const inter = Inter({ subsets: ["latin"] });

export { metadata };

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

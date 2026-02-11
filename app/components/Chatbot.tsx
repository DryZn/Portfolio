"use client";

import { useState, useEffect } from "react";
import { Send, MessageCircle, X, RotateCcw } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import ReactMarkdown from "react-markdown";

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  sources?: string[];
}

interface ChatbotProps {
  apiUrl?: string;
}

export default function Chatbot({
  apiUrl = process.env.NEXT_PUBLIC_API_URL,
}: ChatbotProps) {
  const { language, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: t("chat.welcome"),
      isUser: false,
    },
  ]);
  const [inputText, setInputText] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Update welcome message when language changes
  useEffect(() => {
    setMessages((prev) => {
      return prev.map((msg) => {
        // Update welcome message
        if (msg.id === "1" && !msg.isUser) {
          return { ...msg, text: t("chat.welcome") };
        }
        // Update waking message
        if (msg.id === "waking" && !msg.isUser) {
          return { ...msg, text: t("chat.waking") };
        }
        return msg;
      });
    });
  }, [language, t]);

  const sendMessage = async () => {
    if (!inputText.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputText,
      isUser: true,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputText("");
    setIsLoading(true);

    // Show wake-up message if backend was not ready or inactive for >10min
    const backendReadyTime = sessionStorage.getItem("backendReadyTime");
    const timeSinceReady = backendReadyTime
      ? Date.now() - parseInt(backendReadyTime)
      : Infinity;
    const backendReady =
      sessionStorage.getItem("backendReady") === "true" &&
      timeSinceReady < 10 * 60 * 1000;

    if (!backendReady) {
      setMessages((prev) => [
        ...prev,
        {
          id: "waking",
          text: t("chat.waking"),
          isUser: false,
        },
      ]);
    }

    try {
      const response = await fetch(`${apiUrl}/api/chat`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: inputText }),
      });

      if (!response.ok) {
        throw new Error("Network error");
      }

      const data = await response.json();

      // Remove wake-up message and mark backend as ready
      setMessages((prev) => prev.filter((m) => m.id !== "waking"));
      sessionStorage.setItem("backendReady", "true");
      sessionStorage.setItem("backendReadyTime", Date.now().toString());

      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: data.response,
        isUser: false,
        sources: data.sources,
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      setMessages((prev) => prev.filter((m) => m.id !== "waking"));

      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: t("chat.error"),
        isUser: false,
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const resetChat = async () => {
    try {
      await fetch(`${apiUrl}/api/chat/reset`, { method: "POST" });
      setMessages([
        {
          id: "1",
          text: t("chat.resetSuccess"),
          isUser: false,
        },
      ]);
    } catch (error) {
      console.error("Error during reset:", error);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg transition-all duration-300 z-50 ${
          isOpen ? "scale-0" : "scale-100"
        }`}
      >
        <MessageCircle size={24} />
      </button>

      {/* Chat window */}
      <div
        className={`fixed bottom-6 right-6 w-96 h-[500px] bg-white rounded-lg shadow-2xl border transition-all duration-300 z-50 ${
          isOpen ? "scale-100 opacity-100" : "scale-0 opacity-0"
        }`}
      >
        {/* Header */}
        <div className="bg-blue-600 text-white p-4 rounded-t-lg flex justify-between items-center">
          <h3 className="font-semibold">{t("chat.title")}</h3>
          <div className="flex gap-2">
            <button
              onClick={resetChat}
              className="hover:bg-blue-700 p-1 rounded"
              title={t("chat.reset")}
            >
              <RotateCcw size={16} />
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="hover:bg-blue-700 p-1 rounded"
            >
              <X size={16} />
            </button>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 p-4 h-80 overflow-y-auto space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.isUser ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-xs p-3 rounded-lg ${
                  message.isUser
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 text-gray-800"
                }`}
              >
                <ReactMarkdown className="text-sm prose prose-sm max-w-none">
                  {message.text}
                </ReactMarkdown>
                {message.sources && message.sources.length > 0 && (
                  <div className="mt-2 text-xs opacity-75">
                    {t("chat.sources")}:{" "}
                    {Array.from(
                      new Set(
                        message.sources.map((s) => {
                          // Support both Windows (\) and Unix (/) paths
                          const filename = s.split(/[\\/]/).pop() || s;
                          return filename.replace(/\.[^/.]+$/, "");
                        }),
                      ),
                    ).join(", ")}
                  </div>
                )}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-gray-100 p-3 rounded-lg">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                  <div
                    className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                    style={{ animationDelay: "0.1s" }}
                  ></div>
                  <div
                    className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                    style={{ animationDelay: "0.2s" }}
                  ></div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Input */}
        <div className="p-4 border-t">
          <div className="flex space-x-2">
            <textarea
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder={t("chat.placeholder")}
              className="flex-1 p-2 border rounded-lg resize-none h-10 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800 bg-white"
              disabled={isLoading}
            />
            <button
              onClick={sendMessage}
              disabled={isLoading || !inputText.trim()}
              className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-300 text-white p-2 rounded-lg transition-colors"
            >
              <Send size={16} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

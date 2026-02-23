// Analytics helper for chatbot tracking
declare global {
  interface Window {
    gtag?: (
      command: string,
      action: string,
      params?: Record<string, any>,
    ) => void;
  }
}

export const trackChatbotEvent = (
  eventName: string,
  params?: Record<string, any>,
) => {
  if (typeof window !== "undefined") {
    console.log(`[Analytics] ${eventName}`, params);
  }

  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", eventName, {
      event_category: "chatbot",
      ...params,
    });
  }
};

// Track session start with unique ID
let sessionId: string | null = null;

export const ChatbotEvents = {
  opened: () => {
    sessionId = `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    trackChatbotEvent("chatbot_opened", { session_id: sessionId });
  },

  closed: (sessionDuration: number) => {
    const durationSeconds = Math.round(sessionDuration / 1000);
    trackChatbotEvent("chatbot_closed", {
      session_id: sessionId,
      session_duration_seconds: durationSeconds,
      session_duration_minutes: Math.round((durationSeconds / 60) * 10) / 10,
    });
  },

  messageSent: (messageLength: number, language: string) =>
    trackChatbotEvent("chatbot_message_sent", {
      session_id: sessionId,
      message_length: messageLength,
      language,
    }),

  responseReceived: (responseTime: number, hasSources: boolean) =>
    trackChatbotEvent("chatbot_response_received", {
      session_id: sessionId,
      response_time_ms: responseTime,
      response_time_seconds: Math.round((responseTime / 1000) * 10) / 10,
      has_sources: hasSources,
    }),

  conversationReset: (messageCount: number, sessionDuration: number) => {
    const durationSeconds = Math.round(sessionDuration / 1000);
    trackChatbotEvent("chatbot_reset", {
      session_id: sessionId,
      messages_count: messageCount,
      session_duration_seconds: durationSeconds,
      session_duration_minutes: Math.round((durationSeconds / 60) * 10) / 10,
    });
  },

  error: (errorType: string) =>
    trackChatbotEvent("chatbot_error", {
      session_id: sessionId,
      error_type: errorType,
    }),
};

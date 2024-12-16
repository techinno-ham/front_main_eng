import { create } from "zustand";

interface LiveConversationsId {
    conversationId: string;
    [key: string]: any;
  }

interface LiveChatMessage {
  id: string | number;
  sender?: string;
  body?: string;
  time?: string;
  [key: string]: any;
}

interface LiveChatState {
  liveChatMessages: LiveChatMessage[];
  messageIdSet: Set<string | number>;
  activeLiveChatConversationMap: Record<string | number, boolean>;

  // Actions
  appendOperatorMessageToLiveChat: (newMessage: LiveChatMessage) => void;
  addHistoryMessagesToState: (newMessages: LiveChatMessage[]) => void;
  isLiveChatActive: (conversationId: string | number) => boolean;
  fetchLiveChatHistory: (conversationId: string | number, botId: string, sessionId: string) => Promise<void>;
  startFetchingLiveChatHistory: (conversationId: string | number, botId: string, sessionId: string) => NodeJS.Timeout;
  stopFetchingLiveChatHistory: (intervalId: NodeJS.Timeout) => void;
  clearLiveChatMessages: () => void;
  storeLiveConversationIdsBySessionId: (conversations: any[]) => any;
}

export const useLiveChat = create<LiveChatState>((set, get) => ({
  liveChatMessages: [],
  messageIdSet: new Set(),
  activeLiveChatConversationMap: {},

  appendOperatorMessageToLiveChat: (newMessage) =>
    set((state) => {
      const updatedMessageIdSet = new Set(state.messageIdSet);
      updatedMessageIdSet.add(newMessage.id);

      return {
        liveChatMessages: [...state.liveChatMessages, { ...newMessage }],
        messageIdSet: updatedMessageIdSet,
      };
    }),

  addHistoryMessagesToState: (newMessages) => {
    set((state) => {
      if (newMessages.length === 0) return state;

      const newMessageIds = new Set(newMessages.map((msg) => msg.id));
      const filteredMessages = newMessages.filter((msg) => !state.messageIdSet.has(msg.id));
      const updatedMessageIdSet = new Set(state.messageIdSet);

      filteredMessages.forEach((msg) => updatedMessageIdSet.add(msg.id));

      return {
        liveChatMessages: [...state.liveChatMessages, ...filteredMessages],
        messageIdSet: updatedMessageIdSet,
      };
    });
  },

  isLiveChatActive: (conversationId) => {
    const state = get();
    return !!state.activeLiveChatConversationMap[conversationId];
  },

  fetchLiveChatHistory: async (conversationId, botId, sessionId) => {
    try {
      const response = await fetch("/api/history", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ botId, sessionId }),
      });

      if (!response.ok) throw new Error("Failed to fetch live chat history");

      const data = await response.json();
      if (data?.messages) {
        set((state) => {
          const existingMessages = state.liveChatMessages.filter(
            (msg) => msg.conversationId === conversationId
          );

          const updatedMessages = [
            ...existingMessages,
            ...data.messages.map((msg: any) => ({ ...msg, conversationId })),
          ];

          return { liveChatMessages: updatedMessages };
        });
      }
    } catch (error) {
      console.error("Error fetching live chat history:", error);
    }
  },

  startFetchingLiveChatHistory: (conversationId, botId, sessionId) => {
    const intervalId = setInterval(() => {
      get().fetchLiveChatHistory(conversationId, botId, sessionId);
    }, 5000);
    return intervalId;
  },

  stopFetchingLiveChatHistory: (intervalId) => {
    clearInterval(intervalId);
  },
  storeLiveConversationIdsBySessionId: async (conversations : any[]) => {
    try {
      // Validate the input to ensure it's an array of { conversationId: string }
      if (
        !Array.isArray(conversations) ||
        conversations.some((c) => !c.conversationId)
      ) {
        throw new Error(
          "Invalid input: Expected an array of { conversationId: string }"
        );
      }

      set((state) => {
        // Update the state map directly to avoid creating unnecessary intermediate data structures
        const updatedMap = { ...state.activeLiveChatConversationMap };

        for (const { conversationId } of conversations) {
          updatedMap[conversationId] = true;
        }

        return { activeLiveChatConversationMap: updatedMap };
      });
    } catch (error) {
      console.error("Error updating live conversations in state:", error);
    }
  },
  clearLiveChatMessages: () =>
    set(() => ({
      liveChatMessages: [],
      messageIdSet: new Set(),
    })),
}));

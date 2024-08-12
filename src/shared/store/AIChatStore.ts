
import { create } from "zustand";

interface AIChatState {
    messages: any[];
    isLoading: boolean;
    setMessages: (message: any) => void; // Update the function signature to accept a single message
    setIsLoading: (isLoading: boolean) => void;
    resetChat: () => void; // Add resetChat function signature
}

const useAIChatStore = create<AIChatState>((set) => ({
    messages: [
        {
            sender: "AI",
            type: "text",
            error: false,
            content: "سلام چطور می‌تونم کمکتون کنم؟",
            id: `message-id-0`,
            time: Date.now(), 
    
        }
    ],
    isLoading: false,
    setMessages: (newMessage) =>
        set((state) => ({
            messages: [...state.messages, newMessage], // Add the new message to the previous messages array
        })),
    setIsLoading: (isLoading) => set({ isLoading }),
    resetChat: () => 
        set({
            messages: [
                {
                    sender: "AI",
                    type: "text",
                    error: false,
                    content: "سلام چطور می‌تونم کمکتون کنم؟",
                    id: `message-id-0`,
                }
            ],  // Clear all messages
            isLoading: false,  // Reset the loading state
        }),
}));

export default useAIChatStore;
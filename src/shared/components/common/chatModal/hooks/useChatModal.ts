import { create } from "zustand";

interface ChatModaltore {
    isOpen: boolean | null;
    onOpen: () => void;
    onClose: () => void;
    onInit: () => void;
    messages: any[];
    isLoading: boolean;
    setMessages: (message: any) => void;
    updateMessage: (id: string, newContent: any) => void;
    setIsLoading: (isLoading: boolean) => void;
    resetChat: () => void;
}

const useChatModal = create<ChatModaltore>((set) => ({
    isOpen: null,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false }),
    onInit: () => set({ isOpen: null }),

    // Initial state for chat-related properties
    messages: [
        {
            sender: "AI",
            type: "text",
            error: false,
            content: "سلام چطور می‌تونم کمکتون کنم؟",
            id: `message-user-id-0`,
            time: Date.now(),
        },
    ],
    isLoading: false,

    // Method to add a new message
    setMessages: (newMessage) =>
        set((state) => ({
            messages: [...state.messages, newMessage],
        })),

    // Method to update a specific message by its ID
    updateMessage: (id, newContent) =>
        set((state) => ({
            messages: state.messages.map((message) =>
                message.id === id
                    ? { ...message, content: message.content + newContent }
                    : message
            ),
        })),

    // Method to set the loading state
    setIsLoading: (isLoading) => set({ isLoading }),

    // Method to reset the chat
    resetChat: () =>
        set({
            messages: [
                {
                    sender: "AI",
                    type: "text",
                    error: false,
                    content: "سلام چطور می‌تونم کمکتون کنم؟",
                    id: `message-id-0`,
                    time: Date.now(),
                },
            ],
            isLoading: false,
        }),
}));

export default useChatModal;

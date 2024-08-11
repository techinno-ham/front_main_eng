import { create } from "zustand"

interface AIChatState {
    messages: any[]
    isLoading: boolean
    setMessages: (messages:any) => void
    setIsLoading: (isLoading: boolean) => void
}

const useAIChatStore = create<AIChatState>((set) => ({
    messages:[
        {
            sender: "AI",
            type: "text",
            error: false,
            content: "سلام چطور می‌تونم کمکتون کنم؟  ",
            id: `message-id-0`,
        }
    ] ,
    isLoading: false,
    setMessages: (messages) => set({ messages }),
    setIsLoading: (isLoading) => set({ isLoading }),
}))

export default useAIChatStore;

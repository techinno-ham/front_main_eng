import { create } from "zustand"

interface ChatConfig {
    displayName: string
    botMessages: string[]
    suggestedMessages: string[]
    inputPlaceholder: string
    footer: string
    bgUserMessage: string
}

interface StoreChatConfig {
    chatConfig: ChatConfig
    updateChatConfig: (newConfig: Partial<ChatConfig>) => void
}

const useStoreChatConfig = create<StoreChatConfig>((set) => ({
    chatConfig: {
        displayName: "Chatsys",
        botMessages: ["Hello! How can I assist you today? 😊"],
        suggestedMessages: ["How can I create a bot?"], 
        inputPlaceholder: "Your message ...",
        footer: "chatsys.co",
        bgUserMessage: "#3b81f6",
    },
    updateChatConfig: (newConfig) =>
        set((state) => ({
            chatConfig: { ...state.chatConfig, ...newConfig },
        })),
}))

export default useStoreChatConfig

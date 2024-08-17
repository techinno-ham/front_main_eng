import { create } from "zustand"

interface ChatConfig {
    displayName: string
    botMessages: string[]
    suggestedMessages: string[]
    inputPlaceholder: string
    footer: string
    themeBot: string
    bgUserMessage: string
    borderIcon: string
    chatButtonPosition: string
    notificationMsgs:string
    initNotifDelay: number
}

interface StoreChatConfig {
    chatConfig: ChatConfig
    updateChatConfig: (newConfig: Partial<ChatConfig>) => void
}

const useStoreChatConfig = create<StoreChatConfig>((set) => ({
    chatConfig: {
        displayName: "raya chat",
        botMessages: ["سلام ! امروز چطور می‌توانم به شما کمک کنم؟ 😊"],
        suggestedMessages: ["چگونه میتونم بات بسازم؟"],
        inputPlaceholder: "پیام شما ...",
        footer: "raya.chat",
        themeBot: "light",
        bgUserMessage: "#3b81f6",
        borderIcon: "#6495ed",
        chatButtonPosition: "start",
        notificationMsgs:"👋 من اینجا هستم تا به شما کمک کنم.",
        initNotifDelay: 2000,
    },
    updateChatConfig: (newConfig) =>
        set((state) => ({
            chatConfig: { ...state.chatConfig, ...newConfig },
        })),
}))

export default useStoreChatConfig

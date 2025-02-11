import { create } from "zustand"

interface ChatConfig {
    displayName: string
    botMessages: string[]
    suggestedMessages: string[]
    inputPlaceholder: string
    footer: string
    themeBot: string
    bgUserMessage: string
    borderWidget: string
    borderProfile:string
    chatButtonPosition: string
    notificationMsgs:string
    initNotifDelay: number
    imageProfle:string
    colorUserMessage:string
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
        themeBot: "light",
        colorUserMessage:"#fff",
        bgUserMessage: "#3b81f6",
        borderWidget: "#6495ed",
        borderProfile:"#000",
        chatButtonPosition: "start",
        notificationMsgs:"👋 I am here to help you.", 
        initNotifDelay: 2000,
        imageProfle:"testtttt"
    },
    updateChatConfig: (newConfig) =>
        set((state) => ({
            chatConfig: { ...state.chatConfig, ...newConfig },
        })),
}))

export default useStoreChatConfig

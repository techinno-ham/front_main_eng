import { create } from "zustand";

interface ChatModaltore {
    isOpen: boolean | null;
    nameSpace: string;
    isDialogOpen: boolean;
    linkCrawlered: string[];
    onOpen: () => void;
    onClose: () => void;
    onInit: () => void;
    openDialog: () => void;  
    closeDialog: () => void;
    messages: any[];
    isLoading: boolean;
    setMessages: (message: any) => void;
    setLinkCrawlered: (linkCrawlered: string[]) => void;
    setNameSpace: (nameSpace: string) => void;
    updateMessage: (id: string, newContent: any) => void;
    setIsLoading: (isLoading: boolean) => void;
    resetChat: () => void;
}

const useChatModal = create<ChatModaltore>((set) => ({
    isOpen: null,
    nameSpace: "",
    isDialogOpen: true, 
    linkCrawlered: [],
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false }),
    onInit: () => set({ isOpen: null }),
    openDialog: () => set({ isDialogOpen: true }),
    closeDialog: () => set({ isDialogOpen: false }),

    setLinkCrawlered: (linkCrawlered: string[]) => set({ linkCrawlered }),

    messages: [
        {
            sender: "AI",
            type: "text",
            error: false,
            content: "Hello, how can I assist you?",
            id: `message-user-id-0`,
            time: Date.now(),
        },
    ],
    isLoading: false,

    setMessages: (newMessage) =>
        set((state) => ({
            messages: [...state.messages, newMessage],
        })),

    updateMessage: (id, newContent) =>
        set((state) => ({
            messages: state.messages.map((message) =>
                message.id === id
                    ? { ...message, content: message.content + newContent }
                    : message
            ),
        })),

    setIsLoading: (isLoading) => set({ isLoading }),
    
    setNameSpace: (nameSpace) => set({ nameSpace }),

    resetChat: () =>
        set({
            messages: [
                {
                    sender: "AI",
                    type: "text",
                    error: false,
                    content: "Hello, how can I assist you?",
                    id: `message-id-0`,
                    time: Date.now(),
                },
            ],
            isLoading: false,
        }),
}));

export default useChatModal;

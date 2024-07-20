import { create } from "zustand"

interface ChatModaltore {
    isOpen: any
    onOpen: () => void
    onClose: () => void
 
}

const useChatModal = create<ChatModaltore>((set) => ({
    isOpen: null,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false }),
    
}))

export default useChatModal;

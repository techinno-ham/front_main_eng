import { create } from "zustand"

interface SelectModaltore {
    isOpen: any
    onOpen: () => void
    onClose: () => void
    onInit: () => void
    urls: string[]
    setUrls: (urls: string[]) => void
    resetUrls: () => void
}

const useSelectModal = create<SelectModaltore>((set) => ({
    isOpen: null,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false }),
    onInit: () => set({ isOpen: null }),
    urls: [""],
    setUrls: (urls) => set({ urls }),
    resetUrls: () => set({ urls: [""] }),
}))

export default useSelectModal

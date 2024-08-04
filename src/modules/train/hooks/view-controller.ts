import { create } from "zustand"
type Tab = 'File' | 'Text' | 'Website' | 'QandA';

interface StoreViewController {
    activeTab: Tab
    changeTab: (newTab: any) => void
    isLoading: boolean
    setLoading: (loading: boolean) => void
}

const useStoreViewController = create<StoreViewController>((set) => ({
    isLoading: false,
    activeTab: "File",
    setLoading: (loading) => set({ isLoading: loading }),

    changeTab: (newTab: any) => set((state: any) => ({ activeTab: newTab })),
}))

export default useStoreViewController

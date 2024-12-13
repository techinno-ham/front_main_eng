import { create } from "zustand"

// Define a type for the tabs
type SettingTab = "General" | "Apperence" | "Answer" | "Share" 

interface StoreViewControllerForms {
    activeTab: SettingTab
    changeTab: (newTab: any) => void
    isLoading: boolean
    setLoading: (loading: boolean) => void
}

const useStoreViewControllerForms = create<StoreViewControllerForms>(
    (set) => ({
        isLoading: false,
        activeTab: "General",
        setLoading: (loading) => set({ isLoading: loading }),

        changeTab: (newTab: any) =>
            set((state: any) => ({ activeTab: newTab })),
    }),
)

export default useStoreViewControllerForms;

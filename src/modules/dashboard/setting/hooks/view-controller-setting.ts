import { create } from "zustand"
type TabKey = 'General' | 'Model' | 'Apperence' | 'Security';

interface StoreViewControllerSetting {
    activeTab: TabKey
    changeTab: (newTab: any) => void
    isLoading: boolean
    setLoading: (loading: boolean) => void
}

const useStoreViewControllerSetting = create<StoreViewControllerSetting>(
    (set) => ({
        isLoading: false,
        activeTab: "General",
        setLoading: (loading) => set({ isLoading: loading }),

        changeTab: (newTab: any) =>
            set((state: any) => ({ activeTab: newTab })),
    }),
)

export default useStoreViewControllerSetting

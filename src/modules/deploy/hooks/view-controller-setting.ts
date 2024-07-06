import { create } from "zustand"

interface StoreViewControllerDeploy {
    activeTab: any
    changeTab: (newTab: any) => void
    isLoading: boolean
    setLoading: (loading: boolean) => void
}

const useStoreViewControllerDeploy = create<StoreViewControllerDeploy>(
    (set) => ({
        isLoading: false,
        activeTab: "CDN",
        setLoading: (loading) => set({ isLoading: loading }),

        changeTab: (newTab: any) =>
            set((state: any) => ({ activeTab: newTab })),
    }),
)

export default useStoreViewControllerDeploy

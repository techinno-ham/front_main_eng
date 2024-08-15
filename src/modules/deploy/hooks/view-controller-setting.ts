import { create } from "zustand"

type DeployTab = "Web" | "Share" | "Integrations" | `NPM`
interface StoreViewControllerDeploy {
    activeTab: DeployTab
    changeTab: (newTab: any) => void
    isLoading: boolean
    setLoading: (loading: boolean) => void
}

const useStoreViewControllerDeploy = create<StoreViewControllerDeploy>(
    (set) => ({
        isLoading: false,
        activeTab: "Web",
        setLoading: (loading) => set({ isLoading: loading }),

        changeTab: (newTab: any) =>
            set((state: any) => ({ activeTab: newTab })),
    }),
)

export default useStoreViewControllerDeploy

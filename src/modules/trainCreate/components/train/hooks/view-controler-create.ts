import { create } from "zustand"

type TrainTab = "File" | "Text" | "Website" | "QandA"
interface StoreViewControllerCreate {
    activeTab: TrainTab
    changeTab: (newTab: any) => void
    isLoading: boolean
    setLoading: (loading: boolean) => void
}

const useStoreViewControllerCreate = create<StoreViewControllerCreate>(
    (set) => ({
        isLoading: false,
        activeTab: "File",
        setLoading: (loading) => set({ isLoading: loading }),

        changeTab: (newTab: any) =>
            set((state: any) => ({ activeTab: newTab })),
    }),
)

export default useStoreViewControllerCreate

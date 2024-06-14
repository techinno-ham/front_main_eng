import { create } from "zustand"

interface StoreViewControllerCreate {
    activeTab: any
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

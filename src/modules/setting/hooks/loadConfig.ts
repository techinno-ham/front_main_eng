import { create } from "zustand"

interface StoreViewController {
    data: any
    setData: (data: any) => void
}

const useStoreConfig = create<StoreViewController>((set) => ({
    data: {},
    setData: (data: any) => set({ data: data }),
}))

export default useStoreConfig

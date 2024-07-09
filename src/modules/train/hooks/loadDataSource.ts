import { create } from "zustand"

interface StoreViewController {
    data: any
    setData: (data: any) => void
}

const useStoreLoadData = create<StoreViewController>((set) => ({
    data: {},
    setData: (data: any) => set({ data: data }),
}))

export default useStoreLoadData

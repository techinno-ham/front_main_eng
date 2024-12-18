import { create } from "zustand"

interface StoreFormsData {
    data: any
    setData: (data: any) => void
}

const useStoreFromsData = create<StoreFormsData>((set) => ({
    data: {},
    setData: (data: any) => set({ data: data }),
}))

export default useStoreFromsData;

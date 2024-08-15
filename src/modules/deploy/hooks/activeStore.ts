import { create } from "zustand"

interface StoreViewController {
    active: boolean
    isLoding:boolean
    setLoading: (data: any) => void
    setActive: (data: any) => void
}

const useStoreActive = create<StoreViewController>((set) => ({
    active: false,
    isLoding:false,
    setActive: (data: any) => set({ active: data }),
    setLoading: (data: any) => set({ isLoding: data }),

}))

export default useStoreActive;

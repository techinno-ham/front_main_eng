import { create } from "zustand"

interface StoreViewController {
    active: boolean
    isLoding: boolean
    botHash:string,
    setLoading: (data: any) => void
    setActive: (data: any) => void
    setBotHash:(data:any)=>void
}

const useStoreActive = create<StoreViewController>((set) => ({
    active: false,
    isLoding: false,
    botHash:"",
    setActive: (data: any) => set({ active: data }),
    setLoading: (data: any) => set({ isLoding: data }),
    setBotHash:(data:any)=>set({botHash:data})
}))

export default useStoreActive

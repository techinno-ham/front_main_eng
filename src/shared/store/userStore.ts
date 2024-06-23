import { create } from "zustand"

interface UserState {
    user: any
    isAuthenticated: boolean
    setUser: (user: { name?: string }) => void
    setIsAuthenticated: (isAuthenticated: boolean) => void
}

const useUserStore = create<UserState>((set) => ({
    user: {},
    isAuthenticated: false,
    setUser: (user) => set({ user }),
    setIsAuthenticated: (isAuthenticated) => set({ isAuthenticated }),
}))

export default useUserStore

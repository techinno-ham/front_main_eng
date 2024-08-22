import { create } from "zustand";

interface UserState {
    user: any;
    userPlanId: string;
    isAuthenticated: boolean;
    setUser: (user: { name?: string; subscriptions?: any[] }) => void;
    setIsAuthenticated: (isAuthenticated: boolean) => void;
}

const useUserStore = create<UserState>((set) => ({
    user: {},
    isAuthenticated: false,
    userPlanId: "",
    setUser: (user) => {
        const tierId = user?.subscriptions?.[0]?.tier_id;
        let userPlanId = tierId;
        set({ user, userPlanId });
    },
    setIsAuthenticated: (isAuthenticated) => set({ isAuthenticated }),
}));

export default useUserStore;

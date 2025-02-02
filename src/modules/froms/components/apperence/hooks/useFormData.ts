import { create } from "zustand"

interface FormConfigData {
    title: string
    description: string
    name_active: boolean
    name_placeholder: string
    email_active: boolean
    email_placeholder: string
    phone_active: boolean
    phone_placeholder: string
    message_end: string
    message_url: string
}

interface StoreFormConfig {
    fromConfig: FormConfigData
    updateFormConfig: (newConfig: Partial<FormConfigData>) => void
}

const useStoreFormConfig = create<StoreFormConfig>((set) => ({
    fromConfig: {
        title: "Title",
        description: "Description",
        name_active: true,
        name_placeholder: "Example: Enter your name...",
        email_active: true,
        email_placeholder: "Example: Enter your email...",
        phone_active: true,
        phone_placeholder: "+44 7911 123456",
        message_end: "Successful",
        message_url: ""
    },
    updateFormConfig: (newConfig) =>
        set((state) => ({
            fromConfig: { ...state.fromConfig, ...newConfig },
        })),
}))

export default useStoreFormConfig;

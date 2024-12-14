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
    message_end:string
    message_url:string
}

interface StoreFormConfig {
    fromConfig: FormConfigData
    updateFormConfig: (newConfig: Partial<FormConfigData>) => void
}

const useStoreFormConfig = create<StoreFormConfig>((set) => ({
    fromConfig: {
        title: "عنوان",
        description: "توضیحات",
        name_active: true,
        name_placeholder: "پیام شما ...",
        email_active: true,
        email_placeholder: "پیام شما ...",
        phone_active: true,
        phone_placeholder: "پیام شما ...",
        message_end:"موفق امیز بود",
        message_url:""
    },
    updateFormConfig: (newConfig) =>
        set((state) => ({
            fromConfig: { ...state.fromConfig, ...newConfig },
        })),
}))

export default useStoreFormConfig;

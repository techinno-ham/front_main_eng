import { create } from "zustand"

interface QandAType {
    question: string
    answer: string
}

interface DataSourceType {
    text: string
    isTextInitialized: boolean 
    isQAInitialized: boolean
    isURLInitialized: boolean  // Add this state
    textInputCharNumber: number
    qaList: QandAType[]
    urlList: string[]
    fileList: File[]
    setText: (text: string) => void
    setTextCharNumber: (charNumber: number) => void
    setQAList: (qaList: QandAType[]) => void
    setUrlList: (urlList: string[]) => void
    setFileList: (fileList: File[]) => void
    setTextInitialized: (initialized: boolean) => void
    setQAInitialized: (initialized: boolean) => void
    setURLInitialized: (initialized: boolean) => void  // Add this setter function
}

const useDataSourceStoreUpdate = create<DataSourceType>((set) => ({
    text: "",
    isTextInitialized: false,
    isQAInitialized: false,
    isURLInitialized: false,  // Initialize as false
    textInputCharNumber: 0,
    qaList: [],
    urlList: [],
    fileList: [],
    setText: (text) => set({ text }),
    setTextCharNumber: (textInputCharNumber) => set({ textInputCharNumber }),
    setQAList: (qaList) => set({ qaList }),
    setUrlList: (urlList) => set({ urlList }),
    setFileList: (fileList) => set({ fileList }),
    setTextInitialized: (initialized) => set({ isTextInitialized: initialized }), 
    setQAInitialized: (initialized) => set({ isQAInitialized: initialized }),  
    setURLInitialized: (initialized) => set({ isURLInitialized: initialized }),  // Implement setter
}))

export default useDataSourceStoreUpdate;

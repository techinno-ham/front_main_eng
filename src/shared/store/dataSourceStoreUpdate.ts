import { create } from "zustand"

interface QandAType {
    question: string
    answer: string
}

interface DataSourceType {
    text: string
    isTextInitialized: boolean 
    isQAInitialized: boolean
    isURLInitialized: boolean  
    isFileInitialized: boolean  
    textInputCharNumber: number
    qaList: QandAType[]
    urlList: string[]
    fileList: File[]
    uploadedFile:[]
    setText: (text: string) => void
    setTextCharNumber: (charNumber: number) => void
    setQAList: (qaList: QandAType[]) => void
    setUrlList: (urlList: string[]) => void
    setFileList: (fileList: File[]) => void
    setUploadedFile: (uploadedFile: []) => void
    setTextInitialized: (initialized: boolean) => void
    setQAInitialized: (initialized: boolean) => void
    setURLInitialized: (initialized: boolean) => void  
    setFileInitialized: (initialized: boolean) => void
}

const useDataSourceStoreUpdate = create<DataSourceType>((set) => ({
    text: "",
    isTextInitialized: false,
    isQAInitialized: false,
    isURLInitialized: false,  
    isFileInitialized: false, 
    textInputCharNumber: 0,
    qaList: [],
    urlList: [],
    fileList: [],
    uploadedFile:[],
    setText: (text) => set({ text }),
    setTextCharNumber: (textInputCharNumber) => set({ textInputCharNumber }),
    setQAList: (qaList) => set({ qaList }),
    setUrlList: (urlList) => set({ urlList }),
    setFileList: (fileList) => set({ fileList }),
    setUploadedFile:(uploadedFile)=>set({uploadedFile}),
    setTextInitialized: (initialized) => set({ isTextInitialized: initialized }), 
    setQAInitialized: (initialized) => set({ isQAInitialized: initialized }),  
    setURLInitialized: (initialized) => set({ isURLInitialized: initialized }), 
    setFileInitialized: (initialized) => set({ isFileInitialized: initialized }),
}))

export default useDataSourceStoreUpdate;

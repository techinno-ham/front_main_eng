import { create } from "zustand"

interface QandAType {
    question: string
    answer: string
}

interface DataSourceType {
    text: string
    isTextInitialized: boolean
    isTextChanged: boolean
    isQAInitialized: boolean
    isQAListChanged: boolean
    isURLInitialized: boolean
    isURLListChanged: boolean
    isFileInitialized: boolean
    textInputCharNumber: number
    qaList: QandAType[]
    urlList: string[]
    fileList: File[]
    uploadedFile: []
    setText: (text: string) => void
    setTextCharNumber: (charNumber: number) => void
    setQAList: (qaList: QandAType[]) => void
    setUrlList: (urlList: string[]) => void
    setFileList: (fileList: File[]) => void
    setUploadedFile: (uploadedFile: []) => void
    setTextInitialized: (initialized: boolean) => void
    setTextChanged: (initialized: boolean) => void
    setQAListChanged: (initialized: boolean) => void
    setURLListChanged: (initialized: boolean) => void
    setQAInitialized: (initialized: boolean) => void
    setURLInitialized: (initialized: boolean) => void
    setFileInitialized: (initialized: boolean) => void
}

const useDataSourceStoreUpdate = create<DataSourceType>((set) => ({
    text: "",
    isTextInitialized: false,
    isTextChanged: false,
    isQAInitialized: false,
    isQAListChanged: false,
    isURLInitialized: false,
    isURLListChanged: false,
    isFileInitialized: false,
    textInputCharNumber: 0,
    qaList: [],
    urlList: [],
    fileList: [],
    uploadedFile: [],
    setText: (text) => set({ text }),
    setTextCharNumber: (textInputCharNumber) => set({ textInputCharNumber }),
    setQAList: (qaList) => set({ qaList }),
    setUrlList: (urlList) => set({ urlList }),
    setFileList: (fileList) => set({ fileList }),
    setUploadedFile: (uploadedFile) => set({ uploadedFile }),
    setTextInitialized: (initialized) =>
        set({ isTextInitialized: initialized }),
    setTextChanged: (initialized) => set({ isTextChanged: initialized }),
    setQAListChanged: (initialized) => set({ isQAListChanged: initialized }),
    setURLListChanged: (initialized) => set({ isURLListChanged: initialized }),
    setQAInitialized: (initialized) => set({ isQAInitialized: initialized }),
    setURLInitialized: (initialized) => set({ isURLInitialized: initialized }),
    setFileInitialized: (initialized) =>
        set({ isFileInitialized: initialized }),
}))

export default useDataSourceStoreUpdate

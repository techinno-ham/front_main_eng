import { create } from "zustand"

interface QandAType {
    question: string
    answer: string
}

interface DataSourceType {
    text: string
    textInputCharNumber: number
    qaList: QandAType[]
    urlList:string[]
    setText: (text: string) => void
    setTextCharNumber: (charNumber: number) => void
    setQAList: (qaList: QandAType[]) => void
    setUrlList:(urlList:string[])=>void
}

const useDataSourceStoreNew = create<DataSourceType>((set) => ({
    text: "",
    textInputCharNumber: 0,
    qaList: [],
    urlList:[],
    setText: (text) => set({ text }),
    setTextCharNumber: (textInputCharNumber) => set({ textInputCharNumber }),
    setQAList: (qaList) => set({ qaList }),
    setUrlList:(urlList) =>set({urlList})
}))

export default useDataSourceStoreNew;

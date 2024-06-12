import { create } from "zustand";

interface QandAType {
    question: string;
    answer: string;
}


interface DataSourceType {
    text: string,
    textInputCharNumber:number,
    qaList: QandAType[];
    setText: (text:string) => void
    setTextCharNumber: (charNumber:number) => void
    setQAList: (qaList: QandAType[]) => void;

    
}

const useDataSourceStoreNew= create<DataSourceType>((set) => ({
    text:"",
    textInputCharNumber:0,
    qaList: [],
    setText: (text) => set({ text }),
    setTextCharNumber: (textInputCharNumber) => set({ textInputCharNumber }),
    setQAList: (qaList) => set({ qaList }),
}))

export default useDataSourceStoreNew

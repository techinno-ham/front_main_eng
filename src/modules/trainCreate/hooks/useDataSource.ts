import useDataSourceStoreNew from "@/src/shared/store/dataSourceStoreNew"

const useDateSource = () => {
    const {
        text,
        setText,
        setTextCharNumber,
        textInputCharNumber,
        qaList,
        setQAList,
        urlList,
        setUrlList
    } = useDataSourceStoreNew()

    const addText = (text: string) => {
        setText(text)
    }
    const addTextNumberChar = (charNumber: number) => {
        setTextCharNumber(charNumber)
    }
    const addQAList = (newQAList: { question: string; answer: string }[]) => {
        setQAList(newQAList)
    };

    const addUrlList = (newUrlList:string[])=>{
        setUrlList(newUrlList)
    };

    return {
        text,
        addText,
        textInputCharNumber,
        addTextNumberChar,
        qaList,
        addQAList,
        addUrlList,
        urlList
    }
}
export default useDateSource

import useDataSourceStoreNew from "@/src/shared/store/dataSourceStoreNew";


const useDateSource = () =>{
const {text,setText,setTextCharNumber,textInputCharNumber,qaList, setQAList }=useDataSourceStoreNew();


const addText=(text:string)=>{
setText(text)
};
const addTextNumberChar=(charNumber:number)=>{
setTextCharNumber(charNumber)
};
const addQAList = (newQAList: { question: string; answer: string }[]) => {
    setQAList(newQAList);
};

return {
    text,
    addText,
    textInputCharNumber,
    addTextNumberChar,
    qaList,
    addQAList
};

};
export default useDateSource;

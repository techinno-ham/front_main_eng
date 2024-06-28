import useDataSourceStoreNew from "@/src/shared/store/dataSourceStoreNew"
import { useState } from "react"
import { toast } from "sonner"
import Services from "../../../shared/services/service"
import { useRouter } from "next/navigation"
import useDataSourceStoreUpdate from "@/src/shared/store/dataSourceStoreUpdate"

const useDateSourceUpdate = () => {
    const [isLoading, setLoading] = useState(false)
    const router = useRouter()
    const {
        text,
        setText,
        setTextCharNumber,
        textInputCharNumber,
        qaList,
        fileList,
        setFileList,
        setQAList,
        urlList,
        setUrlList,
        isTextInitialized,
        setTextInitialized,
        isQAInitialized,
        setQAInitialized,
        isURLInitialized,
        setURLInitialized,
        uploadedFile,
        setUploadedFile
        
    } = useDataSourceStoreUpdate()

    const addText = (text: string) => {
        setText(text)
    }
    const addTextInitialized = (flag: boolean) => {
        setTextInitialized(flag)
    };
    const addQAInitialized = (flag: boolean) => {
        setQAInitialized(flag)
    };
    const addURLInitialized = (flag: boolean) => {
        setURLInitialized(flag)
    }
    const addTextNumberChar = (charNumber: number) => {
        setTextCharNumber(charNumber)
    }
    const addQAList = (newQAList: { question: string; answer: string }[]) => {
        setQAList(newQAList)
    }

    const addUrlList = (newUrlList: string[]) => {
        setUrlList(newUrlList)
    }
    const addFileList = (fileList: File[]) => {
        setFileList(fileList)
    }
    const addUploadedFile = (fileList: []) => {
        setUploadedFile(fileList)
    }
    const createBot = async () => {
        setLoading(true)
        try {
            const formData = new FormData()
            if (text != "") {
                formData.append("text_input", text)
            }
            if (qaList.length > 0) {
                formData.append("qANDa_input", JSON.stringify(qaList))
            }
            if (urlList.length > 0) {
                formData.append("urls", JSON.stringify(urlList))
            }
            if (fileList.length > 0) {
                for (const file of fileList) {
                    formData.append("files", file, file.name)
                }
            }

            const response = await Services.cretaeBots(formData)
            router.push(`/panel/${response.data.bot_id}`)
            return response
        } catch (err: any) {
            console.log(err)
            toast.error("مشکلی پیش امده است ..")
        } finally {
            setLoading(false)
        }
    }

    return {
        text,
        addText,
        textInputCharNumber,
        addTextNumberChar,
        qaList,
        addQAList,
        addUrlList,
        urlList,
        fileList,
        addFileList,
        isLoading,
        createBot,
        isTextInitialized,
        addTextInitialized,
        isQAInitialized,
        addQAInitialized,
        isURLInitialized,
        addURLInitialized,
        uploadedFile,
        addUploadedFile
    }
}
export default useDateSourceUpdate

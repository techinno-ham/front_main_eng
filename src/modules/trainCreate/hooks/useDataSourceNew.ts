import useDataSourceStoreNew from "@/src/shared/store/dataSourceStoreNew"
import { useState } from "react"
import { toast } from "sonner"
import Services from "../../../shared/services/service"
import { useRouter } from 'nextjs-toploader/app';

const useDateSourceNew = () => {
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
    } = useDataSourceStoreNew()

    const addText = (text: string) => {
        setText(text)
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
    const addFileList = (file: File[]) => {
        setFileList(file)
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
            // console.log(response)
            router.push(`/panel/${response.data.bot_id}`)
            toast.success("Your bot is currently being trained.") // Reset all state variables
            setTimeout(() => {
                window.scrollTo({
                    top: document.getElementById("chart-demo")?.offsetTop || 0,
                    behavior: "smooth",
                })
                setText("")
                setTextCharNumber(0)
                setQAList([])
                setUrlList([])
                setFileList([])
            }, 1500)

            // return response
        } catch (err: any) {
            console.log(err)
            toast.error("An issue has occurred..")
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
    }
}
export default useDateSourceNew

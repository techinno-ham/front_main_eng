import { useState } from "react"
import { toast } from "sonner"
import Services from "../services/service"

const useFetchLinks = () => {
    const [isLoading, setIsLoading] = useState(false)

    const fetchLink = async (link: string) => {
        setIsLoading(true)
        try {
            const res = await Services.fetchLink(link)
            return res
        } catch (error) {
            console.log(error)
            toast.error("نام کاربری یا رمز شما اشتباه می باشد.")
        } finally {
            setIsLoading(false)
        }
    }

    return {
        fetchLink,
        isLoading,
    }
}

export default useFetchLinks

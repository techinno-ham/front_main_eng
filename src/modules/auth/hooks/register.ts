import { useRouter } from "next/navigation"
import { useState } from "react"
import services from "../services"
import { setCookie } from "nookies"
import { toast } from "sonner"

const useRegister = () => {
    const [isLoading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const router = useRouter()

    const registerAuth = async (user: any) => {
        setLoading(true)
        setError(null)
        try {
            await services.register(user)
            toast.success("ثبت نام  شما موفق آمیز بود.")
            router.push("/auth/login")
        } catch (err: any) {
            console.log(err.response.status)
            if (err.response && err.response.status === 401) {
                toast.error("ایمیل شما قبلا ثبت شده است");
    
            } else {
                toast.error("مشکلی در ثبت نام وجود دارد");
            }
          
        } finally {
            setLoading(false)
        }
    }

    return {
        registerAuth,
        isLoading,
        error,
    }
}
export default useRegister

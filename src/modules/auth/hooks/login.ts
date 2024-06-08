import { useRouter } from "next/navigation"
import { useState } from "react"
import services from "../services"
import { setCookie } from "nookies"
import { toast } from "sonner"

const useLogin = () => {
    const [isLoading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const router = useRouter()

    const login = async (user: any) => {
        setLoading(true)
        setError(null)
        try {
            const res = await services.login(user)
            toast.success("ورود شما موفق آمیز بود.")
            setCookie(null, "accessToken", res.data.accessToken, {
                maxAge: 3600,
            })
            localStorage.setItem("accessToken", res.data.accessToken)
            localStorage.setItem("refreshToken", res.data.refreshToken)
            router.push("/mybots")
        } catch (err: any) {
            console.log(err)
            toast.error("نام کاربری یا رمز شما اشتباه می باشد.")
            setError(err.message)
        } finally {
            setLoading(false)
        }
    }

    return {
        login,
        isLoading,
        error,
    }
}
export default useLogin

import { useRouter } from "next/navigation"
import { useState } from "react"
import services from "../services"
import { setCookie } from "nookies"
import { toast } from "sonner"
import useUserStore from "@/src/shared/store/userStore"

const useRegister = () => {
    const [isLoading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const router = useRouter()
    const { user, setUser, isAuthenticated, setIsAuthenticated } =
    useUserStore()

    const registerAuth = async (user: any) => {
        setLoading(true)
        setError(null)
        try {
        const res= await services.register(user)
          setUser(res.data)
            toast.success("ثبت نام  شما موفق آمیز بود.")
            setCookie(null, "accessToken", res.data.accessToken, {
                maxAge: 1 * 24 * 60 * 60,
                path: "/",
                secure: true, // Use this in production
                sameSite: "strict", // Prevent CSRF attacks
            })

            setCookie(null, "refreshToken", res.data.refreshToken, {
                maxAge: 3 * 24 * 60 * 60, // 3 days, or according to your refresh token TTL
                path: "/",
                secure: true, // Use this in production
                sameSite: "strict",
            })
            router.push("/mybots")
        } catch (err: any) {
            if (err.message === "Email already registered") {
                toast.error("ایمیل شما قبلا ثبت شده است")
            } else {
                toast.error("مشکلی در ثبت نام وجود دارد")
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

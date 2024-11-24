import { redirect } from "next/navigation"
import { useState } from "react"
import services from "../services"
import { setCookie, destroyCookie } from "nookies"
import { toast } from "sonner"
import useUserStore from "@/src/shared/store/userStore"
import { useRouter } from 'next/navigation'

const useLogin = () => {
    const [isLoading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const router = useRouter()
    const { user, setUser, isAuthenticated, setIsAuthenticated } =
        useUserStore()

    const login = async (user: any) => {
        setLoading(true)
        setError(null)
        try {
            const res = await services.login(user)
            setUser(res.data)
            toast.success("ورود شما موفق آمیز بود.")

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
            await new Promise((resolve) => setTimeout(resolve, 500)); // Add a slight delay if needed
            window.location.href = "/mybots";
           
        } catch (err: any) {
            console.log(err.message)
            if (err.message === "Email not found") {
                toast.error("ایمیل شما قبلا ثبت نشده است")
            } else if (err.message === "Incorrect password") {
                toast.error("رمز عبور شما اشتباه می باشد")
            } else {
                toast.error("مشکلی در ورود وجود دارد")
            }
            setError(err.message)
        } finally {
            setLoading(false)
        }
    }
    const logout = async () => {
        try {
            router.replace("/auth/login") // Wait for navigation to complete
            destroyCookie(null, "accessToken")
            destroyCookie(null, "refreshToken")

            toast.success("شما با موفقیت خارج شدید.")
            setTimeout(() => {
                setUser({})
            }, 2000)
            setIsAuthenticated(false)
        } catch (error) {
            console.error("Logout error:", error)
            toast.error("خطایی در خروج رخ داده است.")
        }
    }

    return {
        login,
        isLoading,
        error,
        logout,
    }
}
export default useLogin

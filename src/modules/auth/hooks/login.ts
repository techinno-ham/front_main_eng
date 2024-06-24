import { useRouter } from "next/navigation"
import { useState } from "react"
import services from "../services"
import { setCookie,destroyCookie } from "nookies"
import { toast } from "sonner"
import useUserStore from "@/src/shared/store/userStore"

const useLogin = () => {
    const [isLoading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const router = useRouter();
    const { user, setUser, isAuthenticated, setIsAuthenticated } =
    useUserStore()


    const login = async (user: any) => {
        setLoading(true)
        setError(null)
        try {
            const res = await services.login(user);
            setUser(res.data);
            toast.success("ورود شما موفق آمیز بود.")
            setCookie(null, "accessToken", res.data.accessToken, {
                maxAge: 3600,
            })

            setCookie(null, "accessToken", res.data.accessToken, {
                maxAge:1 * 24 * 60 * 60,
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

            // Redirect or perform other actions here
            router.push("/mybots")
        } catch (err: any) {
            console.log(err)
            toast.error("نام کاربری یا رمز شما اشتباه می باشد.")
            setError(err.message)
        } finally {
            setLoading(false)
        }
    };
    const logout = () => {
    
        destroyCookie(null, "accessToken");
        destroyCookie(null, "refreshToken");

        
        setUser({});
        setIsAuthenticated(false);

       
        toast.success("شما با موفقیت خارج شدید.");
        router.replace("/auth/login");
        
    };

    return {
        login,
        isLoading,
        error,
        logout
    }
}
export default useLogin

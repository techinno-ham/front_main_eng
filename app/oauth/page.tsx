"use client"
import { useRouter } from "next/navigation"
import { Suspense, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import { toast } from "sonner"
import { setCookie } from "nookies"

const OAuthContent = () => {
    const router = useRouter()
    const searchParams = useSearchParams()

    useEffect(() => {
        const handleOAuth = () => {
            const token = searchParams.get("token")
            if (token) {
                try {
                    toast.success("ورود شما موفق آمیز بود.")
                    setCookie(null, "accessToken", token, {
                        maxAge: 1 * 24 * 60 * 60,
                        path: "/",
                    })
                    router.push("/mybots")
                } catch (err) {
                    console.error(err)
                    // Handle error (e.g., token invalid or expired)
                }
            } else {
                router.push("/auth/login")
                console.error("Token not found in query parameters.")
                // Handle case where token is not present in URL (shouldn't happen ideally)
            }
        }

        handleOAuth()
    }, [router, searchParams])

    return <div>در حال انتقال به پنل کاربری ...</div>
}

const OAuthPage = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <OAuthContent />
        </Suspense>
    )
}

export default OAuthPage

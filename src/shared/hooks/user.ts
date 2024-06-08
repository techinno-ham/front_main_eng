"use client"

import { useEffect, useState } from "react"
import Services from "../services/service"
import useUserStore from "../store/userStore"

const useUser = () => {
    const { user, setUser, isAuthenticated, setIsAuthenticated } =
        useUserStore()
    const [isLoading, setIsLoading] = useState(false)

    const checkAuthUser = async () => {
        setIsLoading(true)
        try {
            const cookieFallback = localStorage.getItem("accessToken")
            if (!cookieFallback) {
                return false
            }
            const res = await Services.checkToken()
            console.log(res, "res")
            if (res) {
                setUser({
                    name: "mahdiyar",
                })
                setIsAuthenticated(true)
                return true
            }
            return false
        } catch (error) {
            console.error(error)
            return false
        } finally {
            setIsLoading(false)
        }
    }
    useEffect(() => {
        checkAuthUser()
    }, [])

    return { user, isAuthenticated, isLoading }
}

export default useUser

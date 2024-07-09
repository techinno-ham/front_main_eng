"use client"

import { useEffect, useState } from "react"
import Services from "../services/service"
import useUserStore from "../store/userStore"
import { parseCookies } from "nookies"

const useUser = () => {
    const { user, setUser, isAuthenticated, setIsAuthenticated } =
        useUserStore()
    const [isLoading, setIsLoading] = useState(false)

    const checkAuthUser = async () => {
        setIsLoading(true)
        try {
            const cookies = parseCookies()
            const cookieFallback = cookies.accessToken
            if (!cookieFallback) {
                setIsAuthenticated(false)
                return false
            }
            const res = await Services.checkToken()

            if (res) {
                setUser(res.data)
                setIsAuthenticated(true)
                return true
            }
            return false
        } catch (error) {
            setIsAuthenticated(false)
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

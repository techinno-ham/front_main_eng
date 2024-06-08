import axios from "axios"
import { parseCookies } from "nookies"

const mainApi = axios.create({
    baseURL: "http://localhost:12000/v1",
})

mainApi.interceptors.request.use(
    (config: any) => {
        let token

        if (typeof window !== "undefined") {
            // Client-side
            token = localStorage.getItem("accessToken")
        } else {
            const cookies = parseCookies()
            token = cookies.accessToken
        }

        if (token) {
            config.headers.Authorization = `Bearer ${token}`
        }
        return config
    },
    (error: any) => {
        return Promise.reject(error)
    },
)

export default mainApi

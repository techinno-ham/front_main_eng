import axios from "axios"
import { parseCookies } from "nookies"

const baseURL = process.env.NEXT_PUBLIC_BASE_API || "https://chatsys.co/api/v1";
const mainApi = axios.create({
    baseURL: baseURL,
});

mainApi.interceptors.request.use(
    (config: any) => {
        const cookies = parseCookies()
        const token = cookies.accessToken

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

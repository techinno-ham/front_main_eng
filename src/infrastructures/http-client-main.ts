import axios from "axios"
import { parseCookies } from "nookies"

const mainApi = axios.create({
    baseURL: "http://localhost:12000/v1",
})

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

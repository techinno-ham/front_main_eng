import axios from "axios"
import { parseCookies } from "nookies"

const withoutTokenApi = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BASE_API|| "https://chatsys.co/api/v1",
})

export default withoutTokenApi

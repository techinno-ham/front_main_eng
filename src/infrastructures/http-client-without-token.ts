import axios from "axios"
import { parseCookies } from "nookies"

const withoutTokenApi = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BASE_API,
})

export default withoutTokenApi

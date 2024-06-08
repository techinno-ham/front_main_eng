import axios from "axios"
import { parseCookies } from "nookies"

const withoutTokenApi = axios.create({
    baseURL: "http://localhost:12000/v1",
})

export default withoutTokenApi

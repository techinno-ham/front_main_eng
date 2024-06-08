import mainApi from "@/src/infrastructures/http-client-main"
import { LOGIN_REGISTER_API } from "./constants"

class AuthService {
    register = async (user: any) => {
        try {
            const response = await mainApi.post(
                LOGIN_REGISTER_API.REGISTER,
                user,
            )
            return response
        } catch (error: any) {
            throw new Error(error.response?.data?.message || "Register failed")
        }
    }

    login = async (user: any) => {
        try {
            const response = await mainApi.post(LOGIN_REGISTER_API.LOGIN, user)
            console.log(response)
            return response
        } catch (error: any) {
            throw new Error(error.response?.data?.message || "Login failed")
        }
    }
}

export default new AuthService()

import mainApi from "@/src/infrastructures/http-client-main"
import { API } from "../constanst/api"
import axios from "axios"
import withoutTokenApi from "@/src/infrastructures/http-client-without-token"
import { parseCookies } from "nookies"

class Services {
    checkToken = async () => {
        try {
            const response = await mainApi.get(API.CHECK_TOKEN)
            return response
        } catch (error: any) {
            throw new Error(
                error.response?.data?.message || "check token failed",
            )
        }
    }

    checkTokenWithCookie = async (token: string | undefined) => {
        try {
            const response = await withoutTokenApi.get(API.CHECK_TOKEN, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            console.log(response.data)
            return response
        } catch (error: any) {
            return false
            // return true
            throw new Error(
                error.response?.data?.message || "check token failed",
            )
        }
    }

    fetchLink = async (url: string) => {
        try {
            const response = await mainApi.get(API.FETCH_LINKS, {
                params: {
                    url,
                },
            })
            return response
        } catch (error: any) {
            throw new Error(
                error.response?.data?.message || "fetch links failed",
            )
        }
    }

    cretaeBots = async (body: any) => {
        try {
            const response = await mainApi.post(API.CREATE_BOT, body)
            return response
        } catch (error: any) {
            throw new Error(
                error.response?.data?.message || "create Bots failed",
            )
        }
    }

    updateDataSource = async (body: any, botId: string) => {
        try {
            const response = await mainApi.post(
                `${API.UPDATE_DATASOURCE}/${botId}`,
                body,
            )
            return response
        } catch (error: any) {
            throw new Error(
                error.response?.data?.message || "update dataSource failed",
            )
        }
    }
    updateGeneralConfig = async (botId: string, body: any) => {
        try {
            const response = await mainApi.post(
                `${API.UPDATE_GENERAL}/${botId}`,
                body,
            )
            return response
        } catch (error: any) {
            throw new Error(
                error.response?.data?.message || "update general failed",
            )
        }
    }
    updateModelConfig = async (botId: string, body: any) => {
        try {
            const response = await mainApi.post(
                `${API.UPDATE_MODEL}/${botId}`,
                body,
            )
            return response
        } catch (error: any) {
            throw new Error(
                error.response?.data?.message || "update general failed",
            )
        }
    }
    updateUiConfig = async (botId: string, body: any) => {
        try {
            const response = await mainApi.post(
                `${API.UPDATE_UI}/${botId}`,
                body,
            )
            return response
        } catch (error: any) {
            throw new Error(
                error.response?.data?.message || "update general failed",
            )
        }
    }
    updateSecurityConfig = async (botId: string, body: any) => {
        try {
            const response = await mainApi.post(
                `${API.UPDATE_SECURITY}/${botId}`,
                body,
            )
            return response
        } catch (error: any) {
            throw new Error(
                error.response?.data?.message || "update general failed",
            )
        }
    }
    myBoysList = async (params: any) => {
        try {
            const response = await mainApi.get(API.My_BOTS, {
                params: {
                    ...params,
                },
            })
            return response
        } catch (error: any) {
            console.log(error)
            throw new Error(error.response?.data?.message)
        }
    }
    deleteBot = async (botId: string) => {
        try {
            const response = await mainApi.delete(`${API.DELETE_BOTS}/${botId}`)
            return response
        } catch (error: any) {
            throw new Error(
                error.response?.data?.message || "delete bot failed",
            )
        }
    }
    getBot = async (botId: string) => {
        try {
            const response = await mainApi.get(`${API.My_BOTS}/${botId}`)
            return response
        } catch (error: any) {
            throw new Error(error.response?.data?.message || "get bot failed")
        }
    }
    getDataSource = async (botId: string) => {
        try {
            const response = await mainApi.get(
                `${API.MY_DATASOURCE_WITH_ID}/${botId}`,
            )
            return response
        } catch (error: any) {
            throw new Error(
                error.response?.data?.message || "get DataSource failed",
            )
        }
    }
    getConfigs = async (botId: string) => {
        try {
            const response = await mainApi.get(
                `${API.MY_CONFIGS_WITH_ID}/${botId}`,
            )
            return response
        } catch (error: any) {
            throw new Error(
                error.response?.data?.message || "get configs failed",
            )
        }
    }
    getHistoryMessages = async (
        botId: string = "b8d8154c-99e5-49ab-89ed-806088932781",
    ) => {
        try {
            const response = await mainApi.get(
                `${"/mybots"}/${botId}/conversations`,
            )
            return response
        } catch (error: any) {
            throw new Error(
                error.response?.data?.message || "get history failed",
            )
        }
    }
}

export default new Services()

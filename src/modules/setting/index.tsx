"use client"
import dynamic from "next/dynamic"
import Layout from "./components/layout"
import useStoreViewControllerSetting from "./hooks/view-controller-setting"
import ActiveTab from "@/src/shared/components/common/activeTab"
import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"
import service from "@/src/shared/services/service"
import useStoreConfig from "./hooks/loadConfig"
import LoaderLottie from "@/src/shared/components/common/loader"
import General from "../setting/components/general"
import Model from "../setting/components/model"
import Apperence from "../setting/components/apperence"
import Security from "../setting/components/security"

const Setting = () => {
    const viewController = useStoreViewControllerSetting()
    const pathname = usePathname()
    const { setData } = useStoreConfig()
    const botId = pathname.split("/")[2]
    const [loading, setLoading] = useState<boolean>(true)
    const [error, setError] = useState<string | null>(null)

    const tabsInfo = {
        General: "عمومی",
        Model: "هسته ",
        Apperence: "ظاهری",
        Security: "امنیت",
    }
    useEffect(() => {
        const fetchConfigs = async () => {
            setLoading(true)
            try {
                const response = await service.getConfigs(botId)
                setData(response.data)
                console.log(response)
            } catch (error: any) {
                setError(error.message)
            } finally {
                setLoading(false)
            }
        }
        fetchConfigs()
    }, [botId])
    const renderTabContent = () => {
        switch (viewController.activeTab) {
            case "General":
                return <General />
            case "Model":
                return <Model />
            case "Apperence":
                return <Apperence />
            case "Security":
                return <Security />
            default:
                return null
        }
    }

    if (loading)
        return (
            <>
                <div className="mx-auto flex  h-screen w-[95%] items-center justify-center">
                    <div className="flex items-center gap-3">
                        <span>در حال بارگزاری اطلاعات ...</span>
                        <LoaderLottie />
                    </div>
                </div>
            </>
        )
    return (
        <>
            <div className="mx-auto  mb-28 mt-[120px] w-[95%] md:mb-4 md:mt-[100px]">
                <Layout>
                    <div className="mt-[15px]">
                        <span className="text-xl text-gray-400 ">
                            {tabsInfo[viewController.activeTab]}
                        </span>
                        <div>{renderTabContent()}</div>
                    </div>
                </Layout>
            </div>
        </>
    )
}
export default Setting

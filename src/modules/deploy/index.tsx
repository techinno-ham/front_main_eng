"use client"
import dynamic from "next/dynamic"
import Layout from "./components/layout"
import ActiveTab from "@/src/shared/components/common/activeTab"
import useStoreViewControllerDeploy from "./hooks/view-controller-setting"
import Web from "./components/web"
import Sahre from "./components/share"
import NPM from "./components/npm"
import Integrations from "./components/integrations"
import LoaderLottie from "@/src/shared/components/common/loader"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import service from "@/src/shared/services/service"
import useStoreActive from "./hooks/activeStore"

const Deploy = () => {
    const viewController = useStoreViewControllerDeploy()
    const pathname = usePathname()
    const botId = pathname.split("/")[2]
    const { setActive } = useStoreActive()
    const [loading, setLoading] = useState<boolean>(true)
    const [error, setError] = useState<string | null>(null)

    const tabsInfo = {
        Web: " استقرار وب",
        Share: "اشتراک گذاری",
        NPM: "پکیج جاوا اسکریپت",
        Integrations: " استقرار شبکه های اجتماعی",
    }

    useEffect(() => {
        const fetchConfigs = async () => {
            setLoading(true)
            try {
                const response = await service.getConfigs(botId)
                setActive(
                    response.data.security_configs.access_bot == "general",
                )
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
            case "Web":
                return <Web />
            case "Share":
                return <Sahre />
            case "NPM":
                return <NPM />
            case "Integrations":
                return <Integrations />
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
            <div className="mx-auto mb-28 mt-[120px] w-[95%] md:mb-4 md:mt-[100px]">
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
export default Deploy

"use client"
import dynamic from "next/dynamic"
import Layout from "./components/layout"
import useStoreViewControllerSetting from "./hooks/view-controller-setting"
import ActiveTab from "@/src/shared/components/common/activeTab"
import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"
import service from "@/src/shared/services/service"

const Setting = () => {
    const viewController = useStoreViewControllerSetting();
    const pathname = usePathname()
    const botId = pathname.split("/")[2];
    const [loading, setLoading] = useState<boolean>(true)
    const [error, setError] = useState<string | null>(null)

    const tabsInfo = {
        General: "عمومی",
        Model: "هسته ",
        Apperence: "ظاهری",
        Security: "امنیت",
    }
    useEffect(()=>{
        const fetchConfigs = async () => {
            setLoading(true)
            try {
                const response = await service.getConfigs(botId);
                console.log(response)
            } catch (error: any) {
                setError(error.message)
            } finally {
                setLoading(false)
            }
        };
        fetchConfigs();

    },[botId])

    const tabs = [
        {
            id: "General",
            component: dynamic(() => import("../setting/components/general")),
        },
        {
            id: "Model",
            component: dynamic(() => import("../setting/components/model")),
        },
        {
            id: "Apperence",
            component: dynamic(() => import("../setting/components/apperence")),
        },
        {
            id: "Security",
            component: dynamic(() => import("../setting/components/security")),
        },
    ]
    return (
        <>
            <div className="mx-auto  w-[95%] md:mt-[100px] mt-[120px] mb-28 md:mb-4">
                <Layout>
                    <div className="mt-[15px]">
                        <span className="text-xl text-gray-400 ">
                            {tabsInfo[viewController.activeTab]}
                        </span>
                        <div>
                            <ActiveTab
                                tabs={tabs}
                                activeTabId={viewController.activeTab}
                            />
                        </div>
                    </div>
                </Layout>
            </div>
        </>
    )
}
export default Setting

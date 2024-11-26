"use client"
import dynamic from "next/dynamic"
import Layout from "./components/layout"
import useStoreViewControllerSetting from "./hooks/view-controller-setting"
import ActiveTab from "@/src/shared/components/common/activeTab"

const Setting = () => {
    const viewController = useStoreViewControllerSetting()

    const tabsInfo = {
        General: "عمومی",
        Model: "هسته ",
        Apperence: "ظاهری",
        Security: "امنیت",
    }

    const tabs = [
        {
            id: "General",
            component: dynamic(() => import("./components/general")),
        },
        {
            id: "Model",
            component: dynamic(() => import("./components/model")),
        },
        {
            id: "Apperence",
            component: dynamic(() => import("./components/apperence")),
        },
        {
            id: "Security",
            component: dynamic(() => import("./components/security")),
        },
    ]
    return (
        <>
            <div className="mx-auto mt-[52px] w-[95%] md:mt-[90px]">
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

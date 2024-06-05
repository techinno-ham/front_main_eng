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

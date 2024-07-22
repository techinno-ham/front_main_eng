"use client"
import dynamic from "next/dynamic"
import Layout from "./components/layout"
import ActiveTab from "@/src/shared/components/common/activeTab"
import useStoreViewControllerDeploy from "./hooks/view-controller-setting"

const Deploy = () => {
    const viewController = useStoreViewControllerDeploy()

    const tabsInfo = {
        CDN: "اسکریپت",
        Iframe: "وب ",
        NPM: "پکیج جاوا اسکریپت",
    }

    const tabs = [
        {
            id: "CDN",
            component: dynamic(() => import("../deploy/components/cdn")),
        },
        {
            id: "Iframe",
            component: dynamic(() => import("../deploy/components/Iframe")),
        },
        {
            id: "NPM",
            component: dynamic(() => import("../deploy/components/npm")),
        },
    ]
    return (
        <>
            <div className="mx-auto mb-28 mt-[120px] w-[95%] md:mb-4 md:mt-[100px]">
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
export default Deploy

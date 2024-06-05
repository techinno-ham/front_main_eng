"use client"
import dynamic from "next/dynamic"
import Layout from "./components/layout"
import useStoreViewController from "./hooks/view-controller"
import ActiveTab from "@/src/shared/components/common/activeTab"

const Train = () => {
    const viewController = useStoreViewController()
    const tabsInfo = {
        File: "فایل ها",
        Text: "متن ",
        Website: "لینک ها",
        QandA: "پرسش و پاسخ ها",
    }

    const tabs = [
        {
            id: "File",
            component: dynamic(() => import("../train/components/upload")),
        },
        {
            id: "Text",
            component: dynamic(() => import("../train/components/text")),
        },
        {
            id: "Website",
            component: dynamic(() => import("../train/components/websiteLink")),
        },
        {
            id: "QandA",
            component: dynamic(() => import("../train/components/qAnda")),
        },
    ]

    return (
        <>
            <div className="mx-auto  w-[95%] md:mt-[100px]">
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
export default Train

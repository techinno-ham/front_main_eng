"use client"
import dynamic from "next/dynamic"
import Layout from "./components/layout"
import ActiveTab from "@/src/shared/components/common/activeTab"
import useStoreViewControllerCreate from "./hooks/view-controler-create"

const TrainForCreate = () => {
    const viewController = useStoreViewControllerCreate()
    const tabsInfo = {
        File: "فایل ها",
        Text: "متن ",
        Website: "لینک ها",
        QandA: "پرسش و پاسخ ها",
    }

    const tabs = [
        {
            id: "File",
            component: dynamic(() => import("./components/upload")),
        },
        {
            id: "Text",
            component: dynamic(() => import("./components/text")),
        },
        {
            id: "Website",
            component: dynamic(() => import("./components/websiteLink")),
        },
        {
            id: "QandA",
            component: dynamic(() => import("./components/qAnda")),
        },
    ]

    return (
        <>
            <div className="mx-auto  w-[95%] ">
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
export default TrainForCreate

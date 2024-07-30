"use client"
import dynamic from "next/dynamic"
import Layout from "./components/layout"
import useStoreViewControllerCreate from "./hooks/view-controler-create"
import FileUpload from "./components/upload"
import TextInput from "./components/text"
import WebsiteLink from "./components/websiteLink"
import QAnda from "./components/qAnda"
const TrainForCreate = () => {
    const viewController = useStoreViewControllerCreate()
    const tabsInfo = {
        File: "فایل ها",
        Text: "متن ",
        Website: "لینک ها",
        QandA: "پرسش و پاسخ ها",
    }

   
    const renderTabContent = () => {
        switch (viewController.activeTab) {
            case "File":
                return <FileUpload />
            case "Text":
                return <TextInput />
            case "Website":
                return <WebsiteLink />
            case "QandA":
                return <QAnda />
            default:
                return null
        }
    }

    return (
        <>
            <div className="mx-auto  w-[95%] ">
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
export default TrainForCreate

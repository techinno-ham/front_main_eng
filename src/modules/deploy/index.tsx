"use client"
import dynamic from "next/dynamic"
import Layout from "./components/layout"
import ActiveTab from "@/src/shared/components/common/activeTab"
import useStoreViewControllerDeploy from "./hooks/view-controller-setting"
import Web from "./components/web"
import Sahre from "./components/share"
import NPM from "./components/npm"
import Integrations from "./components/integrations"

const Deploy = () => {
    const viewController = useStoreViewControllerDeploy()

    const tabsInfo = {
        Web: " استقرار وب",
        Share: "اشتراک گذاری",
        NPM: "پکیج جاوا اسکریپت",
        Integrations:"اتصال به شبکه های اجتماعی"
    };
    const renderTabContent = () => {
        switch (viewController.activeTab) {
            case "Web":
                return <Web/>
            case "Share":
                return <Sahre/>
            case "NPM":
                return <NPM />
            case "Integrations":
                return <Integrations />
            default:
                return null
        }
    }


  
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

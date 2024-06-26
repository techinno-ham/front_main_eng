"use client"
import dynamic from "next/dynamic"
import Layout from "./components/layout"
import useStoreViewController from "./hooks/view-controller"
import ActiveTab from "@/src/shared/components/common/activeTab"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import service from "@/src/shared/services/service"
import useDateSourceUpdate from "./hooks/useDataSourceUpdate"

const Train = () => {
    const viewController = useStoreViewController();
    const pathname = usePathname();
    const botId = pathname.split("/")[2];
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const {addText}=useDateSourceUpdate();




    
    useEffect(() => {
        const fetchDataSource = async () => {
            setLoading(true);
            try {
                const response = await service.getDataSource(botId);
                const dataSource=response.data;
                console.log(dataSource)
                addText(dataSource.text_input)
                


                
            } catch (error: any) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchDataSource();
    }, [botId]);
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
    ];

    if (loading) return (
        <>
            <div className="mx-auto w-[95%]  h-screen flex items-center justify-center"> 
                <div className="flex gap-3 items-center">
                <span>در حال بارگزاری اطلاعات ...</span>
                  <div className="h-10 w-10 animate-spin rounded-full border-8 border-white border-t-blue-600"></div>
                </div>
            </div>
        </>
    );


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

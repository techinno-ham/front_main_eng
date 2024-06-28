"use client"
import dynamic from "next/dynamic"
import Layout from "./components/layout"
import useStoreViewController from "./hooks/view-controller"
import ActiveTab from "@/src/shared/components/common/activeTab"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import service from "@/src/shared/services/service"
import FileUpload from "../train/components/upload";
import TextInput from "../train/components/text";
import WebsiteLink from "../train/components/websiteLink";
import QAnda from "../train/components/qAnda";
import useStoreLoadData from "./hooks/loadDataSource"
import useDateSourceNew from "../trainCreate/hooks/useDataSource"
import useDateSourceUpdate from "./hooks/useDataSourceUpdate"


const Train = () => {
    const viewController = useStoreViewController();
    const pathname = usePathname();
    const botId = pathname.split("/")[2];
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const {setData}= useStoreLoadData();
    const {addTextInitialized,addQAInitialized,addURLInitialized}=useDateSourceUpdate()
  




    
    useEffect(() => {
        const fetchDataSource = async () => {
            setLoading(true);
            try {
                const response = await service.getDataSource(botId);
                const dataSource=response.data;
                addTextInitialized(false);
                addQAInitialized(false);
                addURLInitialized(false);
                setData(dataSource);

                          
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

    
    const renderTabContent = () => {
        switch (viewController.activeTab) {
            case "File":
                return <FileUpload />;
            case "Text":
                return <TextInput />;
            case "Website":
                return <WebsiteLink />;
            case "QandA":
                return <QAnda />;
            default:
                return null;
        }
    };

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
                            {renderTabContent()}
                        </div>
                    </div>
                </Layout>
            </div>
        </>
    )
}
export default Train

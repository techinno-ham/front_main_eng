"use client"
import dynamic from "next/dynamic"
import Layout from "./components/layout"
import useStoreViewControllerSetting from "./hooks/view-controller-setting"
import ActiveTab from "@/src/shared/components/common/activeTab"
import { use, useEffect, useState } from "react"
import { usePathname } from "next/navigation"
import { useRouter } from 'nextjs-toploader/app';
import service from "@/src/shared/services/service"
import useStoreConfig from "./hooks/loadConfig"
import LoaderLottie from "@/src/shared/components/common/loader"
import General from "../setting/components/general"
import Model from "../setting/components/model"
import Apperence from "../setting/components/apperence"
import Security from "../setting/components/security"
import Leads from "./components/leads"
import { Additem, TableDocument } from "iconsax-react"
import { toast } from "sonner"

const Setting = () => {
    const viewController = useStoreViewControllerSetting()
    const pathname = usePathname();
    const router=useRouter();
    const { setData } = useStoreConfig()
    const botId = pathname.split("/")[2]
    const [loading, setLoading] = useState<boolean>(true)
    const [error, setError] = useState<string | null>(null);

    const handleCreateFrom = async() =>{

        const loadingToastId = toast.loading("Creating form ...");
        try {
            const result = await service.createInitForms(botId); 
            toast.success("Form created successfully");
            const formId=result.data?.forms_id;
            const newPath = `${pathname}/form/${formId}`;
            router.push(newPath);
            console.log("Form created successfully:", result);
        } catch (error) {
            toast.error(`There was an issue creating the form`)
            console.error("Error creating form:", error);
        } finally {
            toast.dismiss(loadingToastId);
        }

    };

    const tabsInfo = {
        General: "General",
        Model: "Core",
        Apperence: "Appearance",
        Security: "Security",
        Leads:"Forms"
    }
    useEffect(() => {
        const fetchConfigs = async () => {
            setLoading(true)
            try {
                const response = await service.getConfigs(botId)
                setData(response.data)
            } catch (error: any) {
                setError(error.message)
            } finally {
                setLoading(false)
            }
        }
        fetchConfigs()
    }, [botId])
    const renderTabContent = () => {
        switch (viewController.activeTab) {
            case "General":
                return <General />
            case "Model":
                return <Model />
            case "Apperence":
                return <Apperence />
            case "Security":
                return <Security />
            case "Leads":
                 return <Leads />
            default:
                return null
        }
    }

    if (loading)
        return (
            <>
                <div className="mx-auto flex  h-screen w-[95%] items-center justify-center">
                    <div className="flex items-center gap-3">
                        <span>Loading data ...</span>
                        <LoaderLottie />
                    </div>
                </div>
            </>
        )
    return (
        <>
            <div className="mx-auto  mb-28 mt-[120px] w-[95%] md:mb-4 md:mt-[100px]">
                <Layout>
                    <div className="mt-[15px]">
                        <div className="flex justify-between items-center">
                           <span className="text-xl text-gray-400 ">
                            {tabsInfo[viewController.activeTab]}
                           </span>
                           {viewController.activeTab === "Leads" && (
                            <>
                            <button
                            onClick={handleCreateFrom}
                        className="rounded-md flex justify-center items-center gap-2 bg-blue-600 px-3 py-2 text-sm text-white"
                        
                    >
                        <Additem
                            size="25"
                            color="white"
                        />
                        New form 
                           </button>
                            </>
                           )}
                           
                            
                        </div>
                  
                        <div>{renderTabContent()}</div>
                    </div>
                </Layout>
            </div>
        </>
    )
}
export default Setting

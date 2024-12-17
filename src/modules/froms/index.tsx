"use client"
import ActiveTab from "@/src/shared/components/common/activeTab"
import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"
import service from "@/src/shared/services/service"
import LoaderLottie from "@/src/shared/components/common/loader"
import useStoreViewControllerForms from "./hooks/view-controller-forms"
import Layout from "./components/layout"
import General from "./components/general"
import Apperence from "./components/apperence"
import Answer from "./components/answer"
import useStoreFromsData from "./hooks/loadFormData"
import Share from "./components/share"

const Forms = () => {
    const viewController = useStoreViewControllerForms()
    const pathname = usePathname()
    const fromId = pathname.split("/")[5];
    const [loading, setLoading] = useState<boolean>(true);
    const { setData } = useStoreFromsData()
    const [error, setError] = useState<string | null>(null);

    const tabsInfo = {
        General: "عمومی",
        Apperence: "ظاهری",
        Answer: "جواب ها",
        Share:"اشتراک گذاری "
    };
    useEffect(() => {
        const fetchConfigs = async () => {
            setLoading(true)
            try {
                const response = await service.getFromData(fromId)
                setData(response.data)
            } catch (error: any) {
                setError(error.message)
            } finally {
                setLoading(false)
            }
        }
        fetchConfigs()
    }, [fromId])
    const renderTabContent = () => {
        switch (viewController.activeTab) {
            case "General":
                return <General />
            case "Apperence":
                return <Apperence />
            case "Answer":
                return <Answer />
            case "Share":
                 return <Share />
            default:
                return null
        }
    }

    if (loading)
        return (
            <>
                <div className="mx-auto flex  h-screen w-[95%] items-center justify-center">
                    <div className="flex items-center gap-3">
                        <span>در حال بارگزاری اطلاعات ...</span>
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
export default Forms;

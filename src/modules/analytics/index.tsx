"use client"
import { useEffect, useRef, useState } from "react"
import ChartDemo from "./components/chatDemo"
import PieChart from "./components/piechart"
import PropertyReferrals from "./components/propertyRef"
import TotalRevenue from "./components/totalRevenue"
import service from "@/src/shared/services/service"
import LoaderLottie from "@/src/shared/components/common/loader"
import { v4 as uuidv4 } from "uuid"
import useAIChatStore from "@/src/shared/store/AIChatStore"

interface AnalyticsProps {
    botId: string
}

const Analytics: React.FC<AnalyticsProps> = ({ botId }) => {
    const [botData, setBotData] = useState<any>(null)
    const [loading, setLoading] = useState<boolean>(true)
    const [error, setError] = useState<string | null>(null)
    const chartDemoRef = useRef<HTMLDivElement | null>(null)
    const [uuid, setUuid] = useState("")
    const { resetChat } = useAIChatStore()

    useEffect(() => {
        const fetchBotData = async () => {
            setLoading(true)
            try {
                const response = await service.getBot(botId)
                setBotData(response.data)
            } catch (error: any) {
                setError(error.message)
            } finally {
                setLoading(false)
            }
        }

        fetchBotData()
    }, [botId])

    useEffect(() => {
        const newUuid = uuidv4()
        setUuid(newUuid)
        resetChat()
    }, [])
    if (loading)
        return (
            <>
                <div className="fixed left-1/2 top-1/2 z-[1000] -translate-x-1/2 -translate-y-1/2 md:left-[44%]">
                    <div className="flex items-center gap-3">
                        <span>در حال بارگزاری اطلاعات ...</span>
                        <LoaderLottie />
                    </div>
                </div>
            </>
        )

    return (
        <>
            <div className="mx-auto mb-16 mt-[120px] w-[95%] md:mb-2 md:mt-[100px]">
                <div className="relative">
                <div className="mt-16 grid  grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4">
                    <PieChart
                        title="تعداد کل پاسخ ها موفق"
                        value={684}
                        series={[75, 25]}
                        colors={["#2ED480", "#c4e8ef"]}
                    />
                    <PieChart
                        title="تعداد اشتباهات"
                        value={550}
                        series={[60, 40]}
                        colors={["#F45252", "#c4e8ef"]}
                    />
                    <PieChart
                        title="تعداد کال شدن api"
                        value={5684}
                        series={[75, 25]}
                        colors={["#275be8", "#c4e8ef"]}
                    />
                    <PieChart
                        title="تعداد درخواست پشتیبان"
                        value={555}
                        series={[75, 25]}
                        colors={["#FD8539", "#c4e8ef"]}
                    />
                </div>

                <div className="mt-8 grid  grid-cols-1 gap-4 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2">
                    <div>
                        <PropertyReferrals />
                    </div>
                    <div>
                        <TotalRevenue />
                    </div>
                </div>
                <span className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-8 py-4 rounded-2xl border border-blue-400 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">این بخش به زودی دردسترس خواهد بود</span>
                </div>

            </div>
        </>
    )
}
export default Analytics

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

interface DashboardProps {
    botId: string
}

const Dashboard: React.FC<DashboardProps> = ({ botId }) => {
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
                        <span>Loading data...</span>
                        <LoaderLottie />
                    </div>
                </div>
            </>
        )

    return (
        <>
            <div className="mx-auto mb-16 mt-[120px] w-[95%] md:mb-2 md:mt-[100px]">
                <div id="chart-demo" ref={chartDemoRef}>
                    <ChartDemo
                        botData={botData}
                        botId={botId}
                        conversationId={uuid}
                    />
                </div>
            </div>
        </>
    )
}
export default Dashboard

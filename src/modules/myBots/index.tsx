"use client"
import { ElementPlus, SearchNormal1 } from "iconsax-react"
import BotBox from "./components/botBox"
import { useRouter } from "next/navigation"
import TotalBots from "./components/totalBot"
import PremiumBot from "./components/primiumBot"
import { getBotList } from "./utils"
import { useEffect, useState } from "react"
import service from "@/src/shared/services/service"
import { toast } from "sonner"
import Head from "next/head"

const MyBots = () => {
    const [myBotsArry, setMyBots] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const router = useRouter()
    useEffect(() => {
        const fetchBotList = async () => {
            setIsLoading(true)
            try {
                const response: any = await getBotList()
                setMyBots(response.data.bots)
            } catch (err) {
                console.log(err)
            } finally {
                setIsLoading(false)
            }
        }

        fetchBotList()
    }, [])

    const handleDeleteBot = async (botId: string) => {
        try {
            await service.deleteBot(botId)
            setMyBots((prevBots) =>
                prevBots.filter((bot: any) => bot.bot_id !== botId),
            )
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <div className="container mx-auto mb-40  mt-24 h-full px-4">
                <div className="flex w-full items-center justify-between">
                    <div className="w-[60%]">
                        <p className="text-[28px]  md:text-3xl">
                            چت بات های من
                        </p>
                        <p className="text-[10px]  text-slate-500 md:mt-1 md:text-sm">
                            در اینجا، می توانید بات های خود را ببینید و بات های
                            جدید بسازید.
                        </p>
                    </div>
                    <div>
                        <button
                            onClick={() => {
                                if (myBotsArry.length < 2) {
                                    router.push("/createbot")
                                } else {
                                    toast.error(
                                        "شما بیش از 2 بات نمیتوانید بسازید...",
                                    )
                                }
                            }}
                            className="rounded-2xl bg-[#1D4ED8] p-3 text-[12px]  text-slate-50 md:p-3 md:text-sm"
                            disabled={isLoading}
                        >
                            <div className="flex gap-2">
                                <ElementPlus size="18" color="#FFf" />
                                <span> چت بات جدید</span>
                            </div>
                        </button>
                    </div>
                </div>

                <div className="mt-8 flex flex-col gap-6 md:flex-row">
                    <TotalBots totalNumber={myBotsArry.length} />
                    <PremiumBot />
                </div>

                {/* bot container */}
                <div className="mt-8 rounded-2xl bg-white p-10 shadow-[0_23px_40px_-20px_rgba(0,0,0,0.08)]">
                    <div className="flex justify-center">
                        <div className="flex w-full items-center rounded-lg border border-solid border-gray-200 p-2 text-[14px] md:w-1/2">
                            <SearchNormal1 color="#8F8F8F" />
                            <div className="mr-5 w-full">
                                <input
                                    className="w-full border-none placeholder-gray-300 focus:outline-none"
                                    type="text"
                                    placeholder="جستوجو کردن ..."
                                />
                            </div>
                        </div>
                    </div>

                    <div className="mb-12 mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        {isLoading ? (
                            <>
                                <div className="col-span-full flex items-center justify-center">
                                    <div className="h-12 w-12 animate-spin rounded-full border-8 border-gray-300 border-t-blue-600"></div>
                                    <span className="mr-3">
                                        مقداری صبر کنید ...
                                    </span>
                                </div>
                            </>
                        ) : myBotsArry.length > 0 ? (
                            myBotsArry.map((bot: any, index) => (
                                <BotBox
                                    key={index}
                                    type={bot.type}
                                    botsData={bot}
                                    onDelete={handleDeleteBot}
                                />
                            ))
                        ) : (
                            <div className="col-span-full flex h-full flex-col items-center justify-center text-center">
                                <span>در حال حاظر چت باتی وجود ندارد ....</span>
                                <span>
                                    شما میتوانید برای ساختن آن روی دکمه ی "چت
                                    بات جدید "بزنید و اولین چت بات خود را
                                    بسازید.
                                </span>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}

export default MyBots

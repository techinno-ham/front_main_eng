"use client"

import { useEffect, useState } from "react"
import { getHistoryMessages } from "./utils"
import { ExportCurve } from "iconsax-react"
import { formatDistanceToNow } from "date-fns-jalali"
import { format } from "date-fns-jalali"
import { faIR } from "date-fns/locale"
import LoaderLottie from "@/src/shared/components/common/loader"

const MyMessage = () => {
    const [conversations, setConversations] = useState<any[]>()
    const [activeConversation, setActiveConversation] = useState(0)
    const [isLoading, setIsLoading] = useState(true)
    const formatRelativeTime = (dateString: any) => {
        const date = new Date(dateString)
        return formatDistanceToNow(date, { locale: faIR })
    }
    const formatRelativeTimeChat = (dateString: any) => {
        const date = new Date(dateString)
        const formattedDate = format(date, "d MMMM 'ساعت' HH:mm", {
            locale: faIR,
        })
        return formattedDate
    }

    useEffect(() => {
        const fetchHistoryList = async () => {
            setIsLoading(true)
            try {
                const response: any = await getHistoryMessages()
                console.log(response.data)
                setConversations(response.data)
            } catch (err) {
                console.log(err)
            } finally {
                setIsLoading(false)
            }
        }
        fetchHistoryList()
    }, [])

    const handleDownload = async () => {
        try {
            const response: any = await getHistoryMessages()

            if (!response) {
                throw new Error(
                    "Network response was not ok " + response.statusText,
                )
            }

            const data = response.data

            const jsonString = JSON.stringify(data, null, 2)

            const blob = new Blob([jsonString], { type: "application/json" })
            const url = URL.createObjectURL(blob)

            const link = document.createElement("a")
            link.href = url
            link.download = "data.json"
            document.body.appendChild(link)
            link.click()
            document.body.removeChild(link)
            URL.revokeObjectURL(url) // Clean up the URL object
        } catch (error) {
            console.error(
                "There was a problem with the fetch operation:",
                error,
            )
        }
    }
    if (isLoading)
        return (
            <>
                <div className="mx-auto flex h-[90vh] w-[95%] items-center justify-center md:mt-[90px] ">
                    <div className="flex items-center gap-3">
                        <span>در حال بارگزاری اطلاعات ...</span>
                        <LoaderLottie />
                    </div>
                </div>
            </>
        )

    return (
        <>
            <div className="mx-auto mb-28 mt-[120px] w-[95%] md:mb-4 md:mt-[100px]">
                <div className=" relative w-[100%] rounded-2xl bg-white  shadow-[0_23px_40px_-20px_rgba(0,0,0,0.08)] ">
                    <div className="flex flex-col space-y-1.5 p-6">
                        <h3 className="text-2xl font-semibold leading-none tracking-tight">
                            تاریخچه گفت و گو ها
                        </h3>
                    </div>
                    <div className="pl-6 pr-6">
                        <label className="text-md mb-2 block font-medium text-zinc-700">
                            {" "}
                            فیلتر :
                        </label>
                        <div className="flex justify-between">
                            <div>
                                <div>
                                    <select
                                        id="countries"
                                        className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 "
                                    >
                                        <option selected>
                                            انتخاب بازه زمانی
                                        </option>
                                        <option value="US">3 روز قبل</option>
                                        <option value="CA">Canada</option>
                                        <option value="FR">France</option>
                                        <option value="DE">Germany</option>
                                    </select>
                                </div>
                            </div>
                            <button
                                onClick={handleDownload}
                                className="flex items-center justify-center gap-2 rounded-md bg-blue-600 px-3 py-2 text-sm text-white hover:bg-blue-700"
                            >
                                <span>خروجی json</span>
                                <ExportCurve size="20" color="#FFff" />
                            </button>
                        </div>
                    </div>
                    <div className="flex w-full flex-col  gap-3 pl-6 pr-6 lg:flex-row">
                        <div className="w-full lg:max-w-xs xl:max-w-sm ">
                            <div className="mt-4 max-h-[38rem] overflow-auto rounded border ">
                                <ul className="w-full divide-y divide-zinc-200">
                                    {conversations &&
                                        conversations?.length &&
                                        conversations?.map(
                                            (conversation: any, index: any) => {
                                                const isActive =
                                                    activeConversation === index
                                                const lastRecordIndex =
                                                    conversation.records
                                                        .length - 1
                                                const lastMsgUser =
                                                    conversation.records[
                                                        lastRecordIndex
                                                    ].userMessage
                                                const lastMsgBot =
                                                    conversation.records[
                                                        lastRecordIndex
                                                    ].llmResponse
                                                const lastTimeConversations =
                                                    conversation.records[
                                                        lastRecordIndex
                                                    ].llmResponseTime

                                                return (
                                                    <li
                                                        key={index}
                                                        className={`relative px-4 py-5 hover:bg-zinc-100 ${isActive ? "bg-zinc-100" : "bg-white"}`}
                                                        onClick={() => {
                                                            setActiveConversation(
                                                                index,
                                                            )
                                                        }}
                                                    >
                                                        <div className="flex justify-between space-x-3">
                                                            <div className="min-w-0 flex-1 cursor-pointer">
                                                                <p className="truncate text-sm text-zinc-500">
                                                                    {`کاربر : ${lastMsgUser}`}
                                                                </p>
                                                            </div>
                                                            <div className="shrink-0 cursor-pointer whitespace-nowrap text-sm text-zinc-500">
                                                                <span>
                                                                    {formatRelativeTime(
                                                                        lastTimeConversations,
                                                                    )}{" "}
                                                                    پیش
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <div className="mt-1 cursor-pointer">
                                                            <p className="line-clamp-2 text-sm text-black">
                                                                {`ربات: ${lastMsgBot}`}
                                                            </p>
                                                        </div>
                                                    </li>
                                                )
                                            },
                                        )}
                                </ul>
                            </div>
                        </div>
                        <div className="flex grow items-center justify-center ">
                            <div className="w-full">
                                <p className="my-2 ml-1 text-sm font-bold lg:mt-3">
                                    بازه زمانی : ۳ روز قبل
                                </p>
                                <div className="mb-4 flex  h-[38rem]  w-full flex-col justify-between overflow-auto rounded-lg border border-zinc-200 bg-[#F0F8FF] px-3 py-5">
                                    <div>
                                        {conversations?.[
                                            activeConversation
                                        ]?.records?.map(
                                            (record: any, index: any) => {
                                                return (
                                                    <>
                                                        <div className="mb-3 ml-8 flex flex-col">
                                                            <div className="flex items-center justify-start">
                                                                <div
                                                                    className="ml-2 flex h-9 w-9 items-center justify-center rounded-full"
                                                                    style={{
                                                                        border: `1.5px solid #3b82f6`,
                                                                    }}
                                                                >
                                                                    <img
                                                                        src="/images/profile.png"
                                                                        alt=""
                                                                        className="h-8 w-8 rounded-full"
                                                                    />
                                                                </div>
                                                                <div className=" max-w-prose overflow-auto rounded-lg bg-[#3b81f6] px-4  py-3 text-white ">
                                                                    <div className="flex flex-col items-start gap-4 break-words">
                                                                        <div className=" w-full break-words text-right text-inherit ">
                                                                            <p>
                                                                                {
                                                                                    record?.userMessage
                                                                                }
                                                                            </p>{" "}
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <span className="mt-2 truncate text-[12px] text-zinc-500">
                                                                {formatRelativeTimeChat(
                                                                    record?.userMessageTime,
                                                                )}
                                                            </span>
                                                        </div>
                                                        <div className="mb-3 mr-8 flex flex-col">
                                                            <div className="flex items-center justify-end">
                                                                <div className=" max-w-prose overflow-auto rounded-lg bg-[#f1f1f0] px-4 py-3 text-black">
                                                                    <div className="flex flex-col items-start gap-4 break-words">
                                                                        <div className=" w-full break-words text-right text-inherit ">
                                                                            <p>
                                                                                {
                                                                                    record?.llmResponse
                                                                                }
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div
                                                                    className="mr-2 flex h-9 w-9 items-center justify-center rounded-full"
                                                                    style={{
                                                                        border: `1.5px solid #3b82f6`,
                                                                    }}
                                                                >
                                                                    <img
                                                                        src="/double-wink.svg"
                                                                        alt=""
                                                                    />
                                                                </div>
                                                            </div>
                                                            <span className="mr-auto mt-2 truncate text-[12px] text-zinc-500">
                                                                {formatRelativeTimeChat(
                                                                    record?.userMessageTime,
                                                                )}
                                                            </span>
                                                        </div>
                                                    </>
                                                )
                                            },
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default MyMessage

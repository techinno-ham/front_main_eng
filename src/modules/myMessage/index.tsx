"use client"

import { useEffect, useState } from "react"
import { getHistoryMessages } from "./utils"
import { ExportCurve } from "iconsax-react"

const MyMessage = () => {
    const [conversations, setConversations] = useState<[]>()
    const [activeConversation, setActiveConversation] = useState(0)
    const [isLoading, setIsLoading] = useState(true)

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

    return (
        <>
            <div className="mx-auto mt-[100px] w-[95%]">
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
                                                return (
                                                    <li
                                                        key={index}
                                                        className="relative bg-white px-4 py-5 hover:bg-zinc-100 "
                                                        onClick={() => {
                                                            setActiveConversation(
                                                                index,
                                                            )
                                                        }}
                                                    >
                                                        <div className="flex justify-between space-x-3">
                                                            <div className="min-w-0 flex-1 cursor-pointer">
                                                                <p className="truncate text-sm text-zinc-500">
                                                                    کاربر : سلام
                                                                    خوبی !
                                                                </p>
                                                            </div>
                                                            <div className="shrink-0 whitespace-nowrap text-sm text-zinc-500">
                                                                <span>
                                                                    2 روز قبل
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <div className="mt-1">
                                                            <p className="line-clamp-2 text-sm text-black">
                                                                ربات : چطور
                                                                می‌توانم امروز
                                                                به شما کمک کنم؟
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
                                <div className="mb-4 flex  h-[38rem]  w-full flex-col justify-between overflow-auto rounded-lg border border-zinc-200 bg-[#F0F8FF] p-2">
                                    <div>
                                        <div className="mr-8 flex justify-end">
                                            <div className="mb-3 max-w-prose overflow-auto rounded-lg bg-[#f1f1f0] px-4 py-3 text-black">
                                                <div className="flex flex-col items-start gap-4 break-words">
                                                    <div className=" w-full break-words text-right text-inherit ">
                                                        <p>
                                                            سلام ! امروز چطور
                                                            می‌توانم به شما کمک
                                                            کنم؟ 😊
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="ml-8 flex justify-start">
                                            <div className="mb-3 max-w-prose overflow-auto rounded-lg bg-[#3b81f6] px-4  py-3 text-white ">
                                                <div className="flex flex-col items-start gap-4 break-words">
                                                    <div className=" w-full break-words text-right text-inherit ">
                                                        <p>سلام !</p>{" "}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex overflow-hidden">
                        <div
                            className="w-1/4 overflow-y-auto border-l border-gray-300 bg-white"
                            style={{
                                minHeight: "75vh",
                            }}
                        >
                            <div className="mb-9 overflow-y-auto p-3">
                                {conversations &&
                                    conversations?.length &&
                                    conversations?.map(
                                        (conversation: any, index: any) => {
                                            return (
                                                <div
                                                    key={index}
                                                    onClick={() => {
                                                        setActiveConversation(
                                                            index,
                                                        )
                                                    }}
                                                >
                                                    <div className="mb-4 flex cursor-pointer items-center rounded-md p-2 hover:bg-gray-100">
                                                        <div className="ml-3 h-12 w-12 rounded-full bg-gray-300">
                                                            <img
                                                                src="https://placehold.co/200x/ffa8e4/ffffff.svg?text=ʕ•́ᴥ•̀ʔ&font=Lato"
                                                                alt="User Avatar"
                                                                className="h-12 w-12 rounded-full"
                                                            />
                                                        </div>
                                                        <div className="flex-1">
                                                            <h2 className="text-xs font-semibold">
                                                                {
                                                                    conversation?.conversationId
                                                                }
                                                            </h2>
                                                            <p className="text-gray-600">
                                                                Hoorayy!!
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        },
                                    )}
                            </div>
                        </div>

                        <div className="flex-1">
                            <div
                                className="overflow-y-auto p-4 pb-36"
                                style={{
                                    background: "aliceblue",
                                    height: "100%",
                                }}
                            >
                                {conversations?.[
                                    activeConversation
                                ]?.records?.map((record: any, index: any) => {
                                    return (
                                        <>
                                            <div className="mb-4 flex cursor-pointer">
                                                <div className="mr-2 flex h-9 w-9 items-center justify-center rounded-full">
                                                    <img
                                                        src="https://placehold.co/200x/ffa8e4/ffffff.svg?text=ʕ•́ᴥ•̀ʔ&font=Lato"
                                                        alt="User Avatar"
                                                        className="h-8 w-8 rounded-full"
                                                    />
                                                </div>
                                                <div className="flex max-w-96 gap-3 rounded-lg bg-white p-3">
                                                    <p className="text-gray-700">
                                                        {record?.userMessage}
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="mb-4 flex cursor-pointer justify-end">
                                                <div className="flex max-w-96 gap-3 rounded-lg bg-indigo-500 p-3 text-white">
                                                    <p>{record?.llmResponse}</p>
                                                </div>
                                                <div className="ml-2 flex h-9 w-9 items-center justify-center rounded-full">
                                                    <img
                                                        src="https://placehold.co/200x/b7a8ff/ffffff.svg?text=ʕ•́ᴥ•̀ʔ&font=Lato"
                                                        alt="My Avatar"
                                                        className="h-8 w-8 rounded-full"
                                                    />
                                                </div>
                                            </div>
                                        </>
                                    )
                                })}
                            </div>

                            <footer className="absolute bottom-0 w-3/4 border-t border-gray-300 bg-white p-4">
                                <div className="flex items-center">
                                    <input
                                        type="text"
                                        placeholder="Type a message..."
                                        className="w-full rounded-md border border-gray-400 p-2 focus:border-blue-500 focus:outline-none"
                                    />
                                    <button className="ml-2 rounded-md bg-indigo-500 px-4 py-2 text-white">
                                        Send
                                    </button>
                                </div>
                            </footer>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default MyMessage

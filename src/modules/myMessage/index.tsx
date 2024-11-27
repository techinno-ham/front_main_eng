"use client"

import { useEffect, useState } from "react"
import { getHistoryMessages } from "./utils"
import { ExportCurve, Magicpen, Trash } from "iconsax-react"
import { formatDistanceToNow } from "date-fns-jalali"
import { format } from "date-fns-jalali"
import { faIR } from "date-fns/locale"
import LoaderLottie from "@/src/shared/components/common/loader"
import EmptyChat from "@/src/shared/components/common/emptyChatLoader"
import { usePathname } from "next/navigation"
import service from "@/src/shared/services/service"
import Modal from "@/src/shared/components/common/modal"
import { toast } from "sonner"
import Markdown from "react-markdown"
import Services from "../../shared/services/service"

const MyMessage = () => {
    const [conversations, setConversations] = useState<any[]>()
    const [activeConversation, setActiveConversation] = useState(0)
    const [openModal, setOpenModal] = useState(false)
    const [question, setQuestion] = useState("")
    const [answer, setAnswer] = useState("")
    const [loading, setLoading] = useState(false)

    const [message, setMessage] = useState<string | null>(null)
    const pathname = usePathname()
    const botId = pathname.split("/")[2]
    const [imageLink, setImageLink] = useState("")

    const handleOnCloseModal = (e: React.MouseEvent) => {
        e.stopPropagation();
        e.preventDefault();
        setOpenModal(false);
        setAnswer("");
    }

    const handleReviseClick = (questionInput: string) => {
        setQuestion(questionInput)
        setOpenModal(true)
    }

    const handleRetrain = async (e: any) => {
        e.stopPropagation()
        e.preventDefault();

        if (!question || !answer){
            toast.error(" لطفاً سوال یا جواب را وارد کنید.");
            return;
        }
        setLoading(true)
        try {
                const qaUpdated=[{ question: question, answer: answer }];
                const body={
                    qANDa_input:qaUpdated
                };
                 await Services.updateDataSourceQa(body, botId);
                  toast.success("بات شما با در حال آموزش مجدد می باشد.") 
                  setOpenModal(false)
        } catch (error) {
            console.error("Error deleting bot:", error);
            toast.error("مشکلی پیش امده است ..");

        } finally {
            setLoading(false)
            setAnswer("");
        }
    }

    const [filter, setFilter] = useState<
        "3_days" | "7_days" | "1_month" | "all"
    >("all")
    const [isLoading, setIsLoading] = useState(true)
    const formatRelativeTime = (dateString: any) => {
        const date = new Date(dateString)
        return formatDistanceToNow(date, { locale: faIR })
    }
    const dicTime = {
        all: "بدون فیلتر",
        "3_days": "3 روز گذشته",
        "7_days": "7روز گذشته ",
        "1_month": "1 ماه قبل",
    }
    const formatRelativeTimeChat = (dateString: any) => {
        const date = new Date(dateString)
        const formattedDate = format(date, "d MMMM 'ساعت' HH:mm", {
            locale: faIR,
        })
        return formattedDate
    }
    const handleFilterChange = (
        event: React.ChangeEvent<HTMLSelectElement>,
    ) => {
        setFilter(event.target.value as "3_days" | "7_days" | "1_month" | "all")
    }

    useEffect(() => {
        const fetchHistoryList = async () => {
            setIsLoading(true)
            try {
                const response: any = await getHistoryMessages(botId, filter)
                if (response.data.message) {
                    setMessage(response.data.message)
                    setConversations([])
                } else {
                    setMessage(null)
                    const filteredData = response.data.filter(
                        (item: any) => item.records.length > 0,
                    )
                    setConversations(filteredData)
                }
            } catch (err) {
                console.log(err)
            } finally {
                setIsLoading(false)
            }
        }
        fetchHistoryList()
    }, [filter])

    useEffect(() => {
        const fetchConfigs = async () => {
            try {
                const response = await service.getConfigs(botId)
                setImageLink(response?.data?.ui_configs?.bot_image)
            } catch (error: any) {
                console.log(error)
            } finally {
            }
        }
        fetchConfigs()
    }, [botId])

    const handleDownload = async (botId: string) => {
        try {
            const response: any = await getHistoryMessages(botId, filter)

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
                    {message == "Your bot has never had a conversation" ? (
                        <>
                            <div className="flex min-h-[38rem] w-full flex-col items-center justify-center gap-4 text-center text-gray-500">
                                <EmptyChat />
                                <div>
                                    <p>
                                        در حال حاظر چت بات شما دارای تاریخچه گفت
                                        و گو نمی باشد.
                                    </p>
                                </div>
                            </div>
                        </>
                    ) : (
                        <>
                            <Modal
                                open={openModal}
                                onClose={handleOnCloseModal}
                            >
                                <div className="w-[450px] ">
                                    <div className="flex flex-col gap-2">
                                        <div className="text-center">
                                            <Magicpen
                                                size={50}
                                                className="mx-auto text-purple-500"
                                            />
                                            <div className="mx-auto  w-96">
                                                <h3 className="text-xl font-black text-gray-800">
                                                    اصلاح پاسخ
                                                </h3>
                                                <p className="mt-[8px] text-[14px] text-gray-500">
                                                    این اقدام یک داده پرسش و
                                                    پاسخ جدید به اطلاعات بات شما
                                                    اضافه خواهد کرد . داده های
                                                    پرسش و پاسخ می تواند به
                                                    همیارچت کمک کند صریحا به
                                                    سوالات جواب دهد .
                                                </p>
                                            </div>
                                        </div>
                                        <div className="mt-4 rounded-lg bg-slate-200/20 p-4 shadow-md">
                                            <div className="flex flex-col gap-3">
                                                <span>سوال:</span>
                                                <textarea
                                                    className="rounded-md border border-gray-300 p-2"
                                                    placeholder="مثال: چطوری از قیمت ها مطلع بشم؟"
                                                    rows={1}
                                                    value={question}
                                                    onChange={(e) =>
                                                        setQuestion(
                                                            e.target.value,
                                                        )
                                                    }
                                                />
                                            </div>
                                            <div className="flex flex-col gap-3">
                                                <span className="mt-2">
                                                    پاسخ مورد انتظار :
                                                </span>
                                                <textarea
                                                    className="rounded-md border border-gray-300 p-2"
                                                    placeholder="با مراجعه به صفحه قیمتگزاری میتونید از آخرین وضعیت قیمت مطلع شوید"
                                                    value={answer}
                                                    rows={5}
                                                    onChange={(e) =>
                                                        setAnswer(
                                                            e.target.value,
                                                        )
                                                    }
                                                />
                                            </div>
                                        </div>
                                        <div className="mt-2 flex justify-between gap-4">
                                            <button
                                                className="focus-visible:ring-ring inline-flex h-9 w-full items-center justify-center whitespace-nowrap rounded-md border border-zinc-200 bg-transparent px-4 py-1 text-sm font-medium shadow-sm transition-colors hover:bg-zinc-100 hover:text-zinc-900 focus-visible:outline-none  focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-80"
                                                onClick={handleOnCloseModal}
                                            >
                                                لغو
                                            </button>
                                            <button
                                                className="focus-visible:ring-ring inline-flex h-9  w-full items-center justify-center whitespace-nowrap rounded-md  bg-blue-600 px-4 py-1 text-sm font-medium text-zinc-50 shadow-sm transition-colors hover:bg-blue-700 focus-visible:outline-none    focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-80"
                                                type="button"
                                                onClick={handleRetrain}
                                            >
                                                {loading ? (
                                                    <>
                                                        <div className="h-6 w-6 animate-spin rounded-full border-2 border-white border-t-blue-600"></div>
                                                        <span className="mr-3">
                                                            صبر کنید ...
                                                        </span>
                                                    </>
                                                ) : (
                                                    <>
                                                        <span>
                                                            تایید و شروع آموزش
                                                        </span>
                                                    </>
                                                )}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </Modal>
                            <div className="pl-6 pr-6">
                                <label className="text-md mb-2 block font-medium text-zinc-700">
                                    {" "}
                                    فیلتر :
                                    <span className="mr-1 text-[12px] text-gray-600">
                                        (بر اساس زمان شروع گفت و گو)
                                    </span>
                                </label>
                                <div className="flex justify-between">
                                    <div>
                                        <div>
                                            <select
                                                id="filter"
                                                value={filter}
                                                onChange={handleFilterChange}
                                                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                                            >
                                                <option value="all">
                                                    بدون فیلتر
                                                </option>
                                                <option value="3_days">
                                                    3 روز گذشته
                                                </option>
                                                <option value="7_days">
                                                    7 روز گذشته
                                                </option>
                                                <option value="1_month">
                                                    1 ماه گذشته
                                                </option>
                                            </select>
                                        </div>
                                    </div>
                                    <button
                                        onClick={() => handleDownload(botId)}
                                        className="flex items-center justify-center gap-2 rounded-md bg-blue-600 px-3 py-2 text-sm text-white hover:bg-blue-700"
                                    >
                                        <span>خروجی json</span>
                                        <ExportCurve size="20" color="#FFff" />
                                    </button>
                                </div>
                            </div>
                            <div className="flex w-full flex-col  gap-3 pl-6 pr-6 lg:flex-row">
                                {message ==
                                "Your bot has conversations, but none within the selected filter" ? (
                                    <div className="flex min-h-[38rem] w-full flex-col items-center justify-center gap-4 text-center text-gray-500">
                                        <EmptyChat />
                                        <div>
                                            <p>
                                                در این بازه زمانی انتخاب شده
                                                تاریخچه ای وجود ندارد.
                                            </p>
                                        </div>
                                    </div>
                                ) : (
                                    <>
                                        <div className="w-full lg:max-w-xs xl:max-w-sm ">
                                            <div className="panel_custom_scrollbar mt-4 max-h-[38rem] overflow-auto rounded border ">
                                                <ul className="w-full divide-y divide-zinc-200">
                                                    {conversations &&
                                                        conversations?.length &&
                                                        conversations?.map(
                                                            (
                                                                conversation: any,
                                                                index: any,
                                                            ) => {
                                                                const isActive =
                                                                    activeConversation ===
                                                                    index
                                                                const lastRecordIndex =
                                                                    conversation
                                                                        .records
                                                                        .length -
                                                                    1
                                                                const lastMsgUser =
                                                                    conversation
                                                                        .records[
                                                                        lastRecordIndex
                                                                    ]
                                                                        .userMessage
                                                                const lastMsgBot =
                                                                    conversation
                                                                        .records[
                                                                        lastRecordIndex
                                                                    ]
                                                                        .llmResponse
                                                                const lastTimeConversations =
                                                                    conversation
                                                                        .records[
                                                                        lastRecordIndex
                                                                    ]
                                                                        .llmResponseTime

                                                                return (
                                                                    <li
                                                                        key={
                                                                            index
                                                                        }
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
                                                    بازه زمانی :{" "}
                                                    {dicTime[filter]}
                                                </p>
                                                <div className="panel_custom_scrollbar mb-4 flex  h-[38rem]  w-full flex-col justify-between overflow-auto rounded-lg border border-zinc-200 bg-slate-200/20 px-3 py-5">
                                                    <div>
                                                        {conversations?.[
                                                            activeConversation
                                                        ]?.records?.map(
                                                            (
                                                                record: any,
                                                                index: any,
                                                            ) => {
                                                                return (
                                                                    <>
                                                                        <div className="mb-3 ml-8 flex flex-col">
                                                                            <div className="flex items-center justify-start">
                                                                                <div className="ml-2 flex h-9 w-9 items-center justify-center rounded-full">
                                                                                    <img
                                                                                        src="/images/profile.png"
                                                                                        alt=""
                                                                                        className="h-8 w-8 rounded-full"
                                                                                    />
                                                                                </div>
                                                                                <div>
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
                                                                                    <div className="mt-1 flex">
                                                                                        <span className=" mr-auto truncate text-[12px] text-zinc-500">
                                                                                            {formatRelativeTimeChat(
                                                                                                record?.userMessageTime,
                                                                                            )}
                                                                                        </span>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="mb-3 mr-8 flex flex-col">
                                                                            <div className="flex items-center justify-end">
                                                                                <div>
                                                                                    <div className="max-w-prose overflow-auto rounded-lg border bg-white px-4 py-3 text-black">
                                                                                        <div className="flex flex-col items-start gap-4 break-words">
                                                                                            <div className=" w-full break-words text-right text-inherit ">
                                                                                                <Markdown>
                                                                                                    {record?.llmResponse ||
                                                                                                        ""}
                                                                                                </Markdown>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="mt-2 flex items-center justify-between">
                                                                                        <div>
                                                                                            <button
                                                                                                className="focus-visible:ring-ring inline-flex h-7 items-center justify-center gap-1 whitespace-nowrap rounded-xl border border-zinc-200 bg-white px-4 py-1 align-top text-xs font-medium text-zinc-500 shadow-sm transition-colors hover:bg-zinc-100 hover:text-zinc-900 focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:bg-zinc-100/60 disabled:opacity-80 dark:border-zinc-800 dark:hover:bg-zinc-800 dark:hover:text-zinc-50"
                                                                                                type="button"
                                                                                                aria-haspopup="dialog"
                                                                                                aria-expanded="false"
                                                                                                aria-controls="radix-:rs:"
                                                                                                data-state="closed"
                                                                                                onClick={() => {
                                                                                                    handleReviseClick(
                                                                                                        record?.userMessage,
                                                                                                    )
                                                                                                }}
                                                                                            >
                                                                                                اصلاح
                                                                                                پاسخ
                                                                                                <Magicpen
                                                                                                    size={
                                                                                                        14
                                                                                                    }
                                                                                                    className="text-purple-500"
                                                                                                />
                                                                                            </button>
                                                                                        </div>
                                                                                        <div className="flex items-center gap-2">
                                                                                            <div
                                                                                                className="mr-2 inline-flex items-center rounded-2xl border border-zinc-200 bg-violet-600 px-2 py-1 align-baseline text-xs font-medium text-white ring-1 ring-inset ring-violet-600 transition-colors hover:bg-violet-600 focus:outline-none focus:ring-2 focus:ring-zinc-950 focus:ring-offset-2 dark:border-zinc-800 dark:text-zinc-50 dark:focus:ring-zinc-300"
                                                                                                data-state="closed"
                                                                                            >
                                                                                                0.648
                                                                                                <svg
                                                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                                                    viewBox="0 0 14 14"
                                                                                                    fill="none"
                                                                                                    className="h-4 w-4 text-white"
                                                                                                >
                                                                                                    <title>
                                                                                                        Signal
                                                                                                    </title>
                                                                                                    <path
                                                                                                        d="M8.37 2.24c-.04.13-.04.28-.04.6v7.86c0 .28 0 .42.06.53.04.1.12.17.22.22.1.05.24.05.52.05h.27c.56 0 .84 0 1.05-.1a1 1 0 0 0 .44-.45c.1-.21.1-.49.1-1.05V2.83c0-.3 0-.46-.03-.59a1 1 0 0 0-.7-.7c-.13-.04-.28-.04-.6-.04-.3 0-.46 0-.59.03a1 1 0 0 0-.7.71ZM4.67 5.83c0-.3 0-.46.03-.59a1 1 0 0 1 .7-.7c.14-.04.3-.04.6-.04.31 0 .47 0 .6.03a1 1 0 0 1 .7.71c.03.13.03.28.03.6v4.86c0 .28 0 .42-.05.53a.5.5 0 0 1-.22.22c-.1.05-.25.05-.53.05H5.47c-.28 0-.42 0-.53-.05a.5.5 0 0 1-.22-.22c-.05-.11-.05-.25-.05-.53V5.83ZM1 8.83c0-.3 0-.46.03-.59a1 1 0 0 1 .71-.7c.13-.04.28-.04.6-.04.3 0 .46 0 .59.03a1 1 0 0 1 .7.71c.04.13.04.28.04.6v1.86c0 .28 0 .42-.06.53a.5.5 0 0 1-.22.22c-.1.05-.24.05-.52.05H2.6c-.56 0-.84 0-1.05-.1a1 1 0 0 1-.44-.45C1 10.74 1 10.46 1 9.9V8.83Z"
                                                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                                                        fill="currentColor"
                                                                                                    ></path>
                                                                                                </svg>
                                                                                            </div>
                                                                                            <div className="h-4 w-[1px] bg-gray-600"></div>

                                                                                            <span className="truncate text-[12px] text-zinc-500">
                                                                                                {formatRelativeTimeChat(
                                                                                                    record?.userMessageTime,
                                                                                                )}
                                                                                            </span>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>

                                                                                <div className="mr-2 flex h-9 w-9 items-center justify-center rounded-full">
                                                                                    <img
                                                                                        src={
                                                                                            imageLink
                                                                                                ? imageLink
                                                                                                : "/botface.svg"
                                                                                        }
                                                                                        alt=""
                                                                                        className="h-8 w-8 rounded-full"
                                                                                    />
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </>
                                                                )
                                                            },
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                )}
                            </div>
                        </>
                    )}
                </div>
            </div>
        </>
    )
}
export default MyMessage

"use client"

import { useEffect, useRef, useState } from "react"
import {
    downloadHistoryMessages,
    getBotConversationById,
    getHistoryMessages,
    sendOperatorMessage,
} from "./utils"
import { ExportCurve, Magicpen, Trash } from "iconsax-react"
import { formatDistanceToNow } from "date-fns-jalali"
import { format } from "date-fns-jalali"
import { enUS } from "date-fns/locale"
import LoaderLottie from "@/src/shared/components/common/loader"
import EmptyChat from "@/src/shared/components/common/emptyChatLoader"
import { usePathname } from "next/navigation"
import service from "@/src/shared/services/service"
import Modal from "@/src/shared/components/common/modal"
import { toast } from "sonner"
import Markdown from "react-markdown"
import Services from "../../shared/services/service"
import LiveChat from "./components/LiveChat"
import { useLiveChat } from "@/src/shared/store/liveChatStore"

const MyMessage = () => {
    const [conversations, setConversations] = useState<any[]>()
    const [activeConversation, setActiveConversation] = useState(0)
    const [activeConversationId, setActiveConversationId] = useState("")
    const [openModal, setOpenModal] = useState(false)
    const [question, setQuestion] = useState("")
    const [answer, setAnswer] = useState("")
    const [loading, setLoading] = useState(false)

    const [message, setMessage] = useState<string | null>(null)
    const pathname = usePathname()
    const botId = pathname.split("/")[2]
    const [imageLink, setImageLink] = useState("")
    const [AIChatRecords, setAIChatRecords] = useState([])
    const [isLoadingAIChat, setIsLoadingAIChat] = useState(false)

    const [isLiveChat, setIsLiveCHat] = useState(false)
    const [liveMessage, setLiveMessage] = useState("")
    const [isSending, setIsSending] = useState(false)
    const conversationIntervalId = useRef<any>(null)
    const isInitialFetch = useRef(true)

    let AIChatIntervalId = useRef<any>(null)
    //const [isAIChatInitialFetch, setIsAIChatInitialFetch] = useState(true);
    let isAIChatInitialFetch = useRef(true)

    const appendOperatorMessageToLiveChat = useLiveChat(
        (state) => state.appendOperatorMessageToLiveChat,
    )
    const activeLiveChatConversationMap = useLiveChat(
        (state) => state.activeLiveChatConversationMap,
    )

    useEffect(() => {
        setActiveConversationId(
            conversations?.[activeConversation]?.["conversationId"],
        )
        setIsLiveCHat(conversations?.[activeConversation]?.["isLiveRequested"])
    }, [activeConversation, conversations])

    const handleChange = (event: any) => {
        setLiveMessage(event.target.value)
    }

    const handleOnCloseModal = (e: React.MouseEvent) => {
        e.stopPropagation()
        e.preventDefault()
        setOpenModal(false)
        setAnswer("")
    }

    const handleReviseClick = (questionInput: string) => {
        setQuestion(questionInput)
        setOpenModal(true)
    }

    const handleRetrain = async (e: any) => {
        e.stopPropagation()
        e.preventDefault()

        if (!question || !answer) {
            toast.error("Please enter a question or answer.")
            return
        }
        setLoading(true)
        try {
            const qaUpdated = [{ question: question, answer: answer }]
            const body = {
                qANDa_input: qaUpdated,
            }
            await Services.updateDataSourceQa(body, botId)
            toast.success("Your bot is being retrained.")
            setOpenModal(false)
        } catch (error) {
            console.error("Error deleting bot:", error)
            toast.error("Something went wrong..")
        } finally {
            setLoading(false)
            setAnswer("")
        }
    }

    const [filter, setFilter] = useState<
        "1_days" | "3_days" | "7_days" | "1_month" | "all"
    >("1_days")
    const [isLoading, setIsLoading] = useState(true)
    const formatRelativeTime = (dateString: any) => {
        const date = new Date(dateString)
        return formatDistanceToNow(date, { locale: enUS })
    }
    const dicTime = {
        all: "No filter",
        "1_days": "1 day ago",
        "3_days": "3 days ago",
        "7_days": "7 days ago",
        "1_month": "1 month ago",
    }
    const formatRelativeTimeChat = (dateString: any) => {
        const date = new Date(dateString)
        const formattedDate = format(date, "d MMMM 'at' HH:mm", {
            locale: enUS,
        })
        return formattedDate
    }
    const handleFilterChange = (
        event: React.ChangeEvent<HTMLSelectElement>,
    ) => {
        setFilter(
            event.target.value as
                | "1_days"
                | "3_days"
                | "7_days"
                | "1_month"
                | "all",
        )
    }

    const handleDownload = async (botId: string) => {
        try {
            const response: any = await downloadHistoryMessages(botId)

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
    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault() // Prevents default form submission behavior
        if (!liveMessage.trim()) {
            alert("Message cannot be empty!")
            return
        }

        setIsSending(true)

        try {
            setLiveMessage("") // Clear the input on successful submission
            let response = await sendOperatorMessage(
                activeConversationId,
                liveMessage,
            )

            appendOperatorMessageToLiveChat({
                id: response?.messageId,
                sender: "operator",
                body: liveMessage,
                time: response?.sentAt,
            })
        } catch (error: any) {
            alert(error.message) // Display an error message
        } finally {
            setIsSending(false)
        }
    }
    //FETCH CONVERSATION ON INTERVAL
    useEffect(() => {
        const fetchHistoryList = async () => {
            // console.log("CALLED INTERVAL CONVERSATION")

            if (isInitialFetch.current) {
                setIsLoading(true) // Show loading only during the initial fetch
            }
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
                console.error(err)
            } finally {
                if (isInitialFetch.current) {
                    setIsLoading(false)
                    isInitialFetch.current = false
                }
            }
        }

        if (filter) {
            fetchHistoryList()

            conversationIntervalId.current = window.setInterval(() => {
                fetchHistoryList()
            }, 5000)
        }

        // Cleanup function
        return () => {
            if (conversationIntervalId.current) {
                clearInterval(conversationIntervalId.current)
                conversationIntervalId.current = null // Clear the reference
            }
        }
    }, [filter, botId])

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

    useEffect(() => {
        const getBotConversationHistoryById = async () => {
            if (isAIChatInitialFetch.current) {
                setIsLoadingAIChat(true)
                setAIChatRecords([])
            }
            try {
                const response: any = await getBotConversationById(
                    botId,
                    activeConversationId,
                )
                // console.log("CALLED AI INTERVAL")
                setAIChatRecords(response?.records || [])
            } catch (err) {
                console.error(err)
            } finally {
                if (isAIChatInitialFetch.current) {
                    setIsLoadingAIChat(false)
                    isAIChatInitialFetch.current = false
                }
            }
        }

        if (activeConversationId && botId) {
            getBotConversationHistoryById()

            if (!isLiveChat) {
                AIChatIntervalId.current = window.setInterval(() => {
                    getBotConversationHistoryById()
                }, 5000)
            }
        }

        return () => {
            if (AIChatIntervalId.current) {
                setAIChatRecords([])
                clearInterval(AIChatIntervalId.current)
                AIChatIntervalId.current = null
            }
            isAIChatInitialFetch.current = true
        }
    }, [activeConversationId, botId, isLiveChat, isAIChatInitialFetch])

    if (isLoading)
        return (
            <>
                <div className="mx-auto flex h-[90vh] w-[95%] items-center justify-center md:mt-[90px] ">
                    <div className="flex items-center gap-3">
                        <span>Loading data...</span>
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
                            Conversation History
                        </h3>
                    </div>

                    {message == "Your bot has never had a conversation" ? (
                        <>
                            <div className="flex min-h-[38rem] w-full flex-col items-center justify-center gap-4 text-center text-gray-500">
                                <EmptyChat />
                                <div>
                                    <p>
                                        Currently, your chatbot does not have
                                        any conversation history.
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
                                                    Edit Answer
                                                </h3>
                                                <p className="mt-[8px] text-[14px] text-gray-500">
                                                    This action will add a new
                                                    question and answer data to
                                                    your bot&apos;s information. The
                                                    question and answer data can
                                                    help the chatbot respond
                                                    directly to questions.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="mt-4 rounded-lg bg-slate-200/20 p-4 shadow-md">
                                            <div className="flex flex-col gap-3">
                                                <span>Question:</span>
                                                <textarea
                                                    className="rounded-md border border-gray-300 p-2"
                                                    placeholder="Example: How can I find out about prices?"
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
                                                    Expected Answer:
                                                </span>
                                                <textarea
                                                    className="rounded-md border border-gray-300 p-2"
                                                    placeholder="By visiting the pricing page, you can get the latest price information."
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
                                                Cancel
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
                                                            Please wait...
                                                        </span>
                                                    </>
                                                ) : (
                                                    <>
                                                        <span>
                                                            Confirm and Start
                                                            Training
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
                                    Filter:
                                    <span className="mr-1 text-[12px] text-gray-600">
                                        (Based on the start time of the
                                        conversation)
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
                                                    No filter
                                                </option>
                                                <option value="1_days">
                                                    1 day ago
                                                </option>
                                                <option value="3_days">
                                                    3 days ago
                                                </option>
                                                <option value="7_days">
                                                    7 days ago
                                                </option>
                                                <option value="1_month">
                                                    1 month ago
                                                </option>
                                            </select>
                                        </div>
                                    </div>
                                    <button
                                        onClick={() => handleDownload(botId)}
                                        className="flex items-center justify-center gap-2 rounded-md bg-blue-600 px-3 py-2 text-sm text-white hover:bg-blue-700"
                                    >
                                        <span>Download JSON</span>
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
                                                There is no history in the
                                                selected time range.
                                            </p>
                                        </div>
                                    </div>
                                ) : (
                                    <>
                                        <div className="w-full lg:max-w-xs xl:max-w-sm ">
                                            <div className="panel_custom_scrollbar mt-4 max-h-[38rem] overflow-auto rounded border ">
                                                <ul className="w-full divide-y divide-zinc-200">
                                                    {conversations &&
                                                    conversations.length > 0 ? (
                                                        conversations.map(
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
                                                                        ?.userMessage
                                                                const lastMsgBot =
                                                                    conversation
                                                                        .records[
                                                                        lastRecordIndex
                                                                    ]
                                                                        ?.llmResponse
                                                                const lastTimeConversations =
                                                                    conversation
                                                                        .records[
                                                                        lastRecordIndex
                                                                    ]
                                                                        ?.llmResponseTime

                                                                return (
                                                                    <li
                                                                        key={
                                                                            index
                                                                        }
                                                                        className={`relative hover:bg-zinc-100 ${isActive ? "bg-zinc-100" : "bg-white"}`}
                                                                        onClick={() =>
                                                                            setActiveConversation(
                                                                                index,
                                                                            )
                                                                        }
                                                                    >
                                                                        <div
                                                                            className={`${
                                                                                conversation[
                                                                                    "isLiveRequested"
                                                                                ]
                                                                                    ? "border-r-2 border-blue-300"
                                                                                    : ""
                                                                            }`}
                                                                        >
                                                                            <div className="px-4 py-5">
                                                                                <div
                                                                                    className={`flex justify-between space-x-3`}
                                                                                >
                                                                                    <div className="min-w-0 flex-1 cursor-pointer">
                                                                                        <p className="truncate text-sm text-zinc-500">
                                                                                            {`User: ${lastMsgUser}`}
                                                                                        </p>
                                                                                    </div>
                                                                                    <div className="shrink-0 cursor-pointer whitespace-nowrap text-sm text-zinc-500">
                                                                                        {conversation[
                                                                                            "isLiveRequested"
                                                                                        ] ||
                                                                                        conversation[
                                                                                            "conversationId"
                                                                                        ] in
                                                                                            activeLiveChatConversationMap ? (
                                                                                            <span>
                                                                                                👨‍💻
                                                                                            </span>
                                                                                        ) : (
                                                                                            <span>
                                                                                                🤖
                                                                                            </span>
                                                                                        )}
                                                                                        <span>
                                                                                            {formatRelativeTime(
                                                                                                lastTimeConversations,
                                                                                            )}{" "}
                                                                                            ago
                                                                                        </span>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="mt-1 cursor-pointer">
                                                                                    <p className="line-clamp-2 text-sm text-black">
                                                                                        {`Bot: ${lastMsgBot}`}
                                                                                    </p>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </li>
                                                                )
                                                            },
                                                        )
                                                    ) : (
                                                        <p className="text-center text-sm text-zinc-500">
                                                            There are no
                                                            conversations in
                                                            this time range
                                                        </p>
                                                    )}
                                                </ul>
                                            </div>
                                        </div>

                                        <div className="flex grow items-center justify-center ">
                                            <div className="w-full">
                                                <p className="my-2 ml-1 text-sm font-bold lg:mt-3">
                                                    Time range:{" "}
                                                    {dicTime[filter]}
                                                </p>

                                                <div className="panel_custom_scrollbar relative mb-4 flex  h-[38rem]  w-full flex-col justify-between overflow-auto rounded-lg border border-zinc-200 bg-slate-200/20 pt-5 ">
                                                    <div className="px-3">
                                                        {AIChatRecords.map(
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
                                                                                    <div className=" max-w-prose overflow-auto rounded-lg bg-blue-200 px-4  py-3 text-black ">
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
                                                                                                className="focus-visible:ring-ring disabled:bg-text-100/60 inline-flex h-7 items-center justify-center gap-1 whitespace-nowrap rounded-xl border border-zinc-200 bg-white px-4 py-1 align-top text-xs font-medium text-zinc-500 shadow-sm transition-colors hover:bg-zinc-100 hover:text-zinc-900 focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-80"
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
                                                                                                Revise
                                                                                                Answer
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
                                                        {isLoadingAIChat ? (
                                                            <div
                                                                role="status"
                                                                className="flex items-center justify-center align-middle"
                                                            >
                                                                <svg
                                                                    aria-hidden="true"
                                                                    className="inline h-8 w-8 animate-spin fill-sky-400 text-gray-200"
                                                                    viewBox="0 0 100 101"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                                                        fill="currentColor"
                                                                    />
                                                                    <path
                                                                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                                                        fill="currentFill"
                                                                    />
                                                                </svg>
                                                                <span className="sr-only">
                                                                    Loading...
                                                                </span>
                                                            </div>
                                                        ) : (
                                                            <></>
                                                        )}
                                                        {isLiveChat ? (
                                                            <LiveChat
                                                                botId={botId}
                                                                activeConversationId={
                                                                    activeConversationId
                                                                }
                                                                isLiveChat={
                                                                    isLiveChat
                                                                }
                                                            />
                                                        ) : (
                                                            <></>
                                                        )}
                                                    </div>

                                                    {isLiveChat ? (
                                                        <form
                                                            onSubmit={
                                                                handleSubmit
                                                            }
                                                            className="sticky bottom-0"
                                                        >
                                                            <label
                                                                htmlFor="chat"
                                                                className="sr-only"
                                                            >
                                                                Your message ...
                                                            </label>
                                                            <div className="flex items-center rounded-lg border-t border-gray-200 bg-white px-3 py-2">
                                                                <button
                                                                    disabled
                                                                    type="button"
                                                                    className="disabled:bg-text-100/60 
                 inline-flex justify-center rounded-lg
                  p-2
                   text-gray-500
                    hover:bg-gray-100 
                    hover:text-gray-900 disabled:pointer-events-none disabled:opacity-80 
                    "
                                                                >
                                                                    <svg
                                                                        className="h-5 w-5"
                                                                        aria-hidden="true"
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        fill="none"
                                                                        viewBox="0 0 20 18"
                                                                    >
                                                                        <path
                                                                            fill="currentColor"
                                                                            d="M13 5.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM7.565 7.423 4.5 14h11.518l-2.516-3.71L11 13 7.565 7.423Z"
                                                                        />
                                                                        <path
                                                                            stroke="currentColor"
                                                                            stroke-linecap="round"
                                                                            stroke-linejoin="round"
                                                                            stroke-width="2"
                                                                            d="M18 1H2a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1Z"
                                                                        />
                                                                        <path
                                                                            stroke="currentColor"
                                                                            stroke-linecap="round"
                                                                            stroke-linejoin="round"
                                                                            stroke-width="2"
                                                                            d="M13 5.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM7.565 7.423 4.5 14h11.518l-2.516-3.71L11 13 7.565 7.423Z"
                                                                        />
                                                                    </svg>
                                                                    <span className="sr-only">
                                                                        Upload
                                                                        image
                                                                    </span>
                                                                </button>
                                                                <button
                                                                    disabled
                                                                    type="button"
                                                                    className="pointer disabled:bg-text-100/60 rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 disabled:pointer-events-none disabled:opacity-80 "
                                                                >
                                                                    <svg
                                                                        className="h-5 w-5"
                                                                        aria-hidden="true"
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        fill="none"
                                                                        viewBox="0 0 20 20"
                                                                    >
                                                                        <path
                                                                            stroke="currentColor"
                                                                            stroke-linecap="round"
                                                                            stroke-linejoin="round"
                                                                            stroke-width="2"
                                                                            d="M13.408 7.5h.01m-6.876 0h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM4.6 11a5.5 5.5 0 0 0 10.81 0H4.6Z"
                                                                        />
                                                                    </svg>
                                                                    <span className="sr-only">
                                                                        Add
                                                                        emoji
                                                                    </span>
                                                                </button>
                                                                <textarea
                                                                    id="chat"
                                                                    rows={1}
                                                                    className="ml-4 block w-full rounded-lg border border-gray-300 bg-white p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                                                                    placeholder="Your message ..."
                                                                    value={
                                                                        liveMessage
                                                                    }
                                                                    onChange={
                                                                        handleChange
                                                                    }
                                                                ></textarea>
                                                                <button
                                                                    type="submit"
                                                                    className="flex h-10 w-10 rotate-180 transform items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-blue-600 shadow-lg transition-all duration-300 ease-in-out hover:scale-105 hover:from-blue-600 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
                                                                >
                                                                    <svg
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        viewBox="0 0 24 24"
                                                                        fill="currentColor"
                                                                        className="h-5 w-5 text-white"
                                                                    >
                                                                        <path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z" />
                                                                    </svg>
                                                                    <span className="sr-only">
                                                                        Send
                                                                    </span>
                                                                </button>
                                                            </div>
                                                        </form>
                                                    ) : (
                                                        <></>
                                                    )}
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

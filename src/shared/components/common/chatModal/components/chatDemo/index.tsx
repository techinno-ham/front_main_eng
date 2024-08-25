"use client"

import { CloseCircle, Refresh, Send } from "iconsax-react"
import { FC, useEffect, useRef, useState } from "react"
import { readServerActionStream } from "@upstash/rag-chat/nextjs";
import { toast } from "sonner"
import { v4 as uuidv4 } from "uuid"
import useChatModal from "../../hooks/useChatModal"
import CahtBotLoader from "../../../chatBotLoader"
import { serverChat } from "@/src/modules/landing/components/introduceSections/actions"



const ChatDemo = ({

}) => {
    const [valueInput, setValueInput] = useState("")
 
    const { messages,  setIsLoading, isLoading,setMessages,updateMessage } =
    useChatModal()
    const chatContainerRef = useRef<HTMLDivElement>(null)
    

    const sendRequest = async(_valueInput?: string) => {
        const text = _valueInput || valueInput

        setMessages({
            sender: "user",
            type: "text",
            error: false,
            content: text,
            id: `message-user-id-${messages.length}`,
            time: Date.now(),
        })
        
        setValueInput("")
        setIsLoading(true)
        try {
            const stream = await serverChat(text);
            const newMessageId = `message-id-AI-${messages.length}`
            setMessages({
                sender: "AI",
                type: "text",
                error: false,
                content: "",
                id: newMessageId,
                time: Date.now(),
                
            })
      
            for await (const chunk of readServerActionStream(stream)) {
                updateMessage(newMessageId, chunk)
            }
          } catch (error) {
            console.error("Error in AI response:", error);
          } finally {
            setIsLoading(false);
          }
    
    }
    const handleResetChat = () => {
        if (isLoading) {
            toast.error(
                "چت بات در حال پاسخ دادن می باشد صبر کنید پاسخ گویی تمام شود سپس بازنشانی کنید.",
            )
            return
        }
        const newUuid = uuidv4()
       
    }

    const scrollToBottom = () => {
        chatContainerRef?.current?.scroll({
            top: chatContainerRef.current.scrollHeight,
            behavior: "smooth",
        })
    }

    useEffect(() => {
        scrollToBottom()
    }, [messages])
    return (
        <>
            {false ? (
                <>
                    <div className="relative flex h-[85vh] max-h-[824px] flex-auto shrink-0 flex-col overflow-hidden rounded-xl border  border-zinc-400  bg-zinc-100">
                        <div className="absolute left-1/2 top-2/4 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                className="h-14 w-14 animate-spin"
                                viewBox="0 0 16 16"
                            >
                                <path d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41zm-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9z" />
                                <path
                                    fill-rule="evenodd"
                                    d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5.002 5.002 0 0 0 8 3zM3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9H3.1z"
                                />
                            </svg>

                            <span className="text-center">
                                ما در حال ساخت بات شما هستیم ...
                            </span>
                        </div>
                        <div className="cb-light group flex h-full flex-auto shrink-0 flex-col overflow-hidden bg-white ">
                            <div className="w-full px-3">
                                <div className="z-10 flex justify-between border-b py-1">
                                    <div className="flex items-center justify-center gap-3">
                                        <button disabled>
                                            <CloseCircle
                                                size={32}
                                                color="#9ca3af"
                                            />
                                        </button>
                                        <button disabled>
                                            <Refresh
                                                size={28}
                                                color="#9ca3af"
                                            />
                                        </button>
                                    </div>
                                    <div className="pointer-events-none flex items-center">
                                        <h1 className="text-lg font-bold text-black ">
                                            رایاچت
                                        </h1>
                                    </div>
                                </div>
                            </div>
                            <div className="h-full overflow-auto">
                                <div className="relative">
                                    <div className="h-full w-full overflow-y-auto">
                                        <div className="px-3 pt-4">
                                            <div>
                                                <div className="mr-8 flex justify-end">
                                                    <div className="mb-3 max-w-prose overflow-auto rounded-lg bg-[#f1f1f0] px-4 py-3 text-black">
                                                        <div className="flex flex-col items-start gap-4 break-words">
                                                            <div className=" pointer-events-none w-full break-words text-right text-inherit ">
                                                                <p>
                                                                    سلام ! امروز
                                                                    چطور
                                                                    می‌توانم به
                                                                    شما کمک کنم؟
                                                                    😊
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* <div className="ml-8 flex justify-start">
                                                    <div className="mb-3 max-w-prose overflow-auto rounded-lg px-4 py-3  text-white bg-[#3b81f6] ">
                                                            <div className="flex flex-col items-start gap-4 break-words">
                                                            <div className=" w-full break-words text-right text-inherit ">

<p>سلام !</p>                                                                    </div>
                                                            </div>

                                                        </div>
                                                    </div> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-inherit">
                                <form action="">
                                    <div className="flex gap-2 overflow-x-auto p-3">
                                        <button
                                            className="focus-visible:ring-ring inline-flex h-8 items-center justify-center whitespace-nowrap rounded-md bg-zinc-900 px-3 text-sm font-normal text-zinc-50 shadow-none transition-colors hover:bg-zinc-800/90 focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-80 group-[.cb-dark]:bg-zinc-800 group-[.cb-light]:bg-zinc-200/50 group-[.cb-dark]:text-white group-[.cb-light]:text-black group-[.cb-dark]:hover:bg-zinc-700 group-[.cb-light]:hover:bg-zinc-200 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-50/90"
                                            type="button"
                                            aria-label="لبلب "
                                            title="لبلب "
                                            disabled
                                        >
                                            {" "}
                                            چگونه چت بات بخرم؟
                                        </button>
                                    </div>
                                    <div className="flex border-t border-[#e4e4e7] px-4  py-3">
                                        <div className="flex w-full items-center leading-none">
                                            <textarea
                                                required
                                                disabled
                                                className="mr-3 max-h-36 w-full cursor-not-allowed resize-none bg-transparent pr-3 leading-[24px] focus:outline-none focus:ring-0 focus-visible:ring-0 group-[.cb-dark]:text-white group-[.cb-light]:text-black"
                                                placeholder={"پیام شما"}
                                                aria-label="Write a Message"
                                                title="Write a Message"
                                                style={{
                                                    height: "24px",
                                                }}
                                            />
                                        </div>
                                        <div className="flex items-end leading-none">
                                            <button disabled>
                                                <Send />
                                            </button>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-center">
                                        <div className="flex items-center justify-center gap-3 px-4 pb-3 pt-1">
                                            <p className="pointer-events-none grow text-nowrap text-center  text-xs">
                                                قدرت گرفته از
                                                <a className="pointer-events-none mr-1 font-semibold text-[#1277fd]">
                                                    raya.chat
                                                </a>
                                            </p>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </>
            ) : (
                <>
                    <div className="flex h-[80vh] max-h-[700px] max-w-[450px] flex-auto shrink-0 flex-col overflow-hidden rounded-xl border border-zinc-300  bg-zinc-100">
                        <div className="cb-light group flex h-full flex-auto shrink-0 flex-col overflow-hidden bg-white">
                            <div className="w-full px-3">
                                <div className="z-10 flex justify-between border-b py-1">
                                    <div className="flex items-center justify-center gap-3">
                                        <button onClick={handleResetChat}>
                                            <Refresh
                                                size={28}
                                                color="#9ca3af"
                                            />
                                        </button>
                                    </div>
                                    <div className="flex items-center">
                                        <h1 className="text-lg font-bold text-black ">
                                            همیار چت
                                        </h1>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="scrollable-container h-full overflow-auto"
                                ref={chatContainerRef}
                            >
                                <div className="relative">
                                    <div className="h-full w-full overflow-y-auto">
                                        <div className="px-3 pt-4">
                                            <div>
                                                {messages.map(
                                                    (message, index) => {
                                                        if (
                                                            message.sender ===
                                                            "AI"
                                                        ) {
                                                            return (
                                                                <div
                                                                    key={index}
                                                                    className="mr-16 flex justify-end "
                                                                >
                                                                    <div className="flex flex-col">
                                                                    <div
  className={`max-w-prose overflow-auto rounded-[20px] rounded-bl-none ${
    message.error ? 'bg-red-200 text-red-500 border border-red-500' : 'bg-[#f1f1f0] text-black'
  } px-4 py-3`}
>
                                                                            <div className="flex flex-col items-start gap-4 break-words">
                                                                                <div className="w-full break-words text-right text-sm text-inherit">
                                                                                    <p>
                                                                                        {
                                                                                            message.content
                                                                                        }
                                                                                    </p>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="mb-5 ml-2 mr-auto">
                                                                            <span
                                                                                className="text-xs text-gray-500"
                                                                                dir="ltr"
                                                                            >
                                                                                {new Intl.DateTimeFormat(
                                                                                    "en-US",
                                                                                    {
                                                                                        dateStyle:
                                                                                            "short",
                                                                                        timeStyle:
                                                                                            "short",
                                                                                    },
                                                                                ).format(
                                                                                    new Date(
                                                                                        message.time,
                                                                                    ),
                                                                                )}
                                                                            </span>
                                                                        </div>
                                                                    </div>

                                                                    {/* <div>
                                    <span className="text-xs text-gray-500">
                                      {new Date(message.time).toLocaleTimeString()}  
                                    </span>
                                    </div> */}
                                                                </div>
                                                            )
                                                        } else {
                                                            return (
                                                                <div
                                                                    key={index}
                                                                    className="ml-16 flex justify-start"
                                                                >
                                                                    <div className="flex flex-col">
                                                                        <div className="max-w-prose overflow-auto  rounded-[20px] rounded-br-none bg-[#3b81f6] px-4 py-3 text-white">
                                                                            <div className="flex flex-col items-start gap-4 break-words">
                                                                                <div className="w-full break-words text-right text-sm text-inherit">
                                                                                    <p>
                                                                                        {
                                                                                            message.content
                                                                                        }
                                                                                    </p>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="mb-5 ml-auto mr-2">
                                                                            <span
                                                                                className="text-xs text-gray-500"
                                                                                dir="ltr"
                                                                            >
                                                                                {new Intl.DateTimeFormat(
                                                                                    "en-US",
                                                                                    {
                                                                                        dateStyle:
                                                                                            "short",
                                                                                        timeStyle:
                                                                                            "short",
                                                                                    },
                                                                                ).format(
                                                                                    new Date(
                                                                                        message.time,
                                                                                    ),
                                                                                )}
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            )
                                                        }
                                                    },
                                                )}
                                                {isLoading && (
                                                    <>
                                                        <div className="mr-16 flex justify-end">
                                                            <div className="mb-5 max-w-prose overflow-auto  rounded-[20px] rounded-bl-none  bg-[#f1f1f0] px-2 text-black">
                                                                <div className="flex flex-col items-start gap-4 break-words">
                                                                    <CahtBotLoader />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-inherit">
                                <div className="flex gap-2 overflow-x-auto p-3">
                                    <button
                                        className="focus-visible:ring-ring inline-flex h-8 items-center justify-center whitespace-nowrap rounded-md bg-zinc-900 px-3 text-sm font-normal text-zinc-50 shadow-none transition-colors hover:bg-zinc-800/90 focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-80 group-[.cb-dark]:bg-zinc-800 group-[.cb-light]:bg-zinc-200/50 group-[.cb-dark]:text-white group-[.cb-light]:text-black group-[.cb-dark]:hover:bg-zinc-700 group-[.cb-light]:hover:bg-zinc-200 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-50/90"
                                        type="button"
                                        aria-label="لبلب "
                                        title="لبلب "
                                        disabled={isLoading}
                                        onClick={() =>
                                            sendRequest("چگونه چت بات بخرم ؟")
                                        }
                                    >
                                        {" "}
                                        همیارچت چیست ؟
                                    </button>
                                    <button
                                        className="focus-visible:ring-ring inline-flex h-8 items-center justify-center whitespace-nowrap rounded-md bg-zinc-900 px-3 text-sm font-normal text-zinc-50 shadow-none transition-colors hover:bg-zinc-800/90 focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-80 group-[.cb-dark]:bg-zinc-800 group-[.cb-light]:bg-zinc-200/50 group-[.cb-dark]:text-white group-[.cb-light]:text-black group-[.cb-dark]:hover:bg-zinc-700 group-[.cb-light]:hover:bg-zinc-200 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-50/90"
                                        type="button"
                                        aria-label="لبلب "
                                        title="لبلب "
                                        disabled={isLoading}
                                        onClick={() =>
                                            sendRequest("چگونه چت بات بخرم ؟")
                                        }
                                    >
                                        {" "}
                                        چگونه چت بات بخرم؟
                                    </button>
                                </div>
                                <div className="flex border-t border-[#e4e4e7] px-4  py-3">
                                    <div className="flex w-full items-center leading-none">
                                        <input
                                            onKeyDown={(e) => {
                                                if (isLoading) {
                                                    e.preventDefault() // Prevent the default behavior when loading
                                                    return
                                                }

                                                if (
                                                    e.key === "Enter" &&
                                                    valueInput
                                                ) {
                                                    e.preventDefault() // Prevents the form from submitting on Enter
                                                    sendRequest() // Sends the request
                                                }
                                            }}
                                            className="mr-3 max-h-36 w-full  resize-none bg-transparent pr-3 leading-[24px] focus:outline-none focus:ring-0 focus-visible:ring-0 group-[.cb-dark]:text-white group-[.cb-light]:text-black"
                                            placeholder={"پیام شما"}
                                            aria-label="Write a Message"
                                            title="Write a Message"
                                            style={{
                                                height: "24px",
                                            }}
                                            onChange={(e) => {
                                                setValueInput(e.target.value)
                                            }}
                                            value={valueInput}
                                        />
                                    </div>
                                    <div className="flex items-end leading-none">
                                        <button
                                            onClick={() => {
                                                sendRequest()
                                            }}
                                            disabled={isLoading}
                                        >
                                            {isLoading ? (
                                                <>
                                                    <div className="h-6 w-6 animate-spin rounded-full border-2 border-white border-t-blue-600"></div>
                                                </>
                                            ) : (
                                                <>
                                                    <Send />
                                                </>
                                            )}
                                        </button>
                                    </div>
                                </div>
                                <div className="flex items-center justify-center bg-slate-100">
                                    <div className="flex items-center justify-center gap-3 px-4 pb-3 pt-3">
                                        <p className="grow text-nowrap text-center text-xs ">
                                            قدرت گرفته از
                                            <a
                                                target="_blank"
                                                className="mr-1 font-semibold text-[#1277fd]"
                                                href="/"
                                            >
                                                hamyar.chat
                                            </a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </>
    )
}
export default ChatDemo

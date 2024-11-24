"use client"

import { CloseCircle, Danger, Happyemoji, Refresh, Send, Star, Unlimited } from "iconsax-react"
import { FC, useEffect, useRef, useState } from "react"
import { readServerActionStream } from "@upstash/rag-chat/nextjs";
import { toast } from "sonner"
import { v4 as uuidv4 } from "uuid"
import useChatModal from "../../hooks/useChatModal"
import CahtBotLoader from "../../../chatBotLoader"
import { serverChat } from "@/src/modules/landing/components/introduceSections/actions"
import Image from "next/image";



const ChatDemo = ({

}) => {
    const [valueInput, setValueInput] = useState("")
    const [numberMesaage, setNumberMessage] = useState(8)
 
    const { messages,  setIsLoading, isLoading,setMessages,updateMessage,nameSpace,onClose,isDialogOpen ,closeDialog,linkCrawlered} =
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
        if(numberMesaage == 0){
            setMessages({
                sender: "AI",
                type: "text",
                error: true,
                content:
                    "در حال حاضر حد استفاده شما از چت بات دمو به پایان رسیده است. برای استفاده امکانات بیشر وارد پنل کاربری شوید.",
                id: `message-id-${messages.length}`,
                time: Date.now(),
            })
            setIsLoading(false);
        } else{
            try {
                const stream = await serverChat(text,nameSpace);
                const newMessageId = `message-id-AI-${messages.length}`
                setMessages({
                    sender: "AI",
                    type: "text",
                    error: false,
                    content: "",
                    id: newMessageId,
                    time: Date.now(),
                    
                })
                setNumberMessage(prev=>prev-1)
                for await (const chunk of readServerActionStream(stream)) {
                    updateMessage(newMessageId, chunk)
                }
              } catch (error) {
                setMessages({
                    sender: "AI",
                    type: "text",
                    error: true,
                    content:
                        "در حال حاضر با مشکلات فنی روبرو هستم. 😕 لطفا بعدا دوباره امتحان کنید یا یک چت زنده با تیم ما شروع کنید. 🛠️",
                    id: `message-id-${messages.length}`,
                    time: Date.now(),
                })
                console.error("Error in AI response:", error);
              } finally {
                setIsLoading(false);
              }
        }

    
    }

    const handleClose = () => {
        onClose();
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
                    <div className="flex    flex-auto shrink-0 flex-col overflow-hidden rounded-xl border border-zinc-300  bg-zinc-100 relative h-full w-full">
                        <div className={`absolute h-full w-full bg-[#6b728080] z-50 flex justify-center items-center ${isDialogOpen ? "visible " : "invisible"}`}>
                        <div
                         onClick={(e) => e.stopPropagation()}
                          className={`
                          rounded-xl bg-white p-2 py-5 shadow transition-all
                          ${isDialogOpen ? "scale-100 opacity-100" : "scale-125 opacity-0"}
                          `}
                          >
                             <div className=" w-80">
                        <div className="flex items-center justify-center">
                            <div className="flex items-center justify-center">
                                <Image
                                    src="/logo.svg"
                                    height="60"
                                    width="60"
                                    alt="Logo"
                                />
                                <span className={`mr-2 text-2xl font-bold `}>
                                    همیارچت{" "}
                                </span>
                            </div>
                        </div>
                        <div className="mt-6 flex justify-center">
                            <Happyemoji size="32" color="#16a34a" />
                        </div>
                        <div className="text-center">
                            <p className="text-[#16a34a]">
                                {" "}
                                چت بات دمو شما با موفقیت ساخته شد.
                            </p>
                            <span className="text-[12px] text-gray-400">
                                دلیل عدم توانایی پاسخگویی چت بات مورد نظرشما در بعضی از پاسخ ها نبودن اطلاعات کافی و اطلاعات محدود می باشد. برای استفاده کابردی تر وارد پنل کاربری شوید.
                            </span>
                        </div>
                        <div className="mt-4 text-center">
                            <p className="font-bold text-gray-700 text-[14px]">لینک های بررسی شده برای یادگیری  :</p>
                            <ol className="list-decimal list-inside text-left mt-4 text-gray-600 space-y-2">
          {linkCrawlered.map((link, index) => (
            <li key={index} className="text-sm flex items-center">
              <span className="font-bold text-blue-500 mr-2 ml-1 text-[15px]">{index + 1}.</span>
              <a href={link} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline hover:text-blue-800">
                {link}
              </a>
            </li>
          ))}
        </ol>
                       </div>
                        <div className="mt-8 flex w-full justify-center">
                   
                                <button
                                onClick={()=>closeDialog()}
                                    className="flex w-1/2 justify-center rounded-2xl  bg-[#1277fd] p-3 text-[12px] text-slate-50 md:p-2 md:text-sm"
                                >
    
                                        <span> متوجه شدم </span>
                                   
                                </button>
                            
                        </div>
                    </div>

                          </div>
                       

                        </div>

                        <div className="cb-light group flex h-full flex-auto shrink-0 flex-col overflow-hidden bg-white">
                            <div className="w-full px-3">
                                <div className="z-10 flex justify-between border-b py-1">
                                    <div className="flex items-center justify-center gap-3">
                                        
                                        <button onClick={handleClose}>
                                            <CloseCircle
                                                size={28}
                                                color="#9ca3af"
                                            />
                                        </button>
                                        <div className="flex items-center justify-center p-1 rounded-full bg-[#d7e8fc] gap-2">
                                            <p className="mr-1 mt-1 font-bold">{numberMesaage}</p>
                                            <div className="w-6 h-6 flex items-center justify-center rounded-full bg-[#1277fd]">
                                            <Unlimited
                                               size="16"
                                               color="#FFf"
                                                />

                                            </div>

                                          

                                        </div>
                                    </div>
                                    <div className="flex items-center">
                                        <h1 className="text-lg font-bold text-black ">
                                            همیار چت دمو
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
                                            sendRequest("سلام اسمت چیه ؟ ")
                                        }
                                    >
                                        {" "}
                                        سلام اسمت چیه ؟                  
                                                           </button>
                                    <button
                                        className="focus-visible:ring-ring inline-flex h-8 items-center justify-center whitespace-nowrap rounded-md bg-zinc-900 px-3 text-sm font-normal text-zinc-50 shadow-none transition-colors hover:bg-zinc-800/90 focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-80 group-[.cb-dark]:bg-zinc-800 group-[.cb-light]:bg-zinc-200/50 group-[.cb-dark]:text-white group-[.cb-light]:text-black group-[.cb-dark]:hover:bg-zinc-700 group-[.cb-light]:hover:bg-zinc-200 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-50/90"
                                        type="button"
                                        aria-label="لبلب "
                                        title="لبلب "
                                        disabled={isLoading}
                                        onClick={() =>
                                            sendRequest("چه کاری میتونی انجام بدی؟")
                        
                                        }
                                    >
                                        {" "}
                                        چه کاری میتونی انجام بدی؟
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
          
    )
}
export default ChatDemo

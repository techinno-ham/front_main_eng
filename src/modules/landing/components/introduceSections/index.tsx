"use client"
import Image from "next/image"
import { useEffect, useState } from "react"
import Services from "../../../../../src/shared/services/service"
import LoaderLottie from "@/src/shared/components/common/loader"
import { toast } from "sonner"
import { ArrowRight2, Calendar, Call, Magicpen } from "iconsax-react"
import "./style.css"
import useChatModal from "@/src/shared/components/common/chatModal/hooks/useChatModal"
import { addUserLimitBotDemo, serverAddData, userLimitBotDemo } from "./actions"
import Cookies from "js-cookie"
import RiveChatbot from "../RiveChatbot"
import Link from "next/link"

const IntroduceSections = () => {
    const [inputValue, setInputValue] = useState("")
    const [loading, setLoading] = useState(false)
    const SelectModalChat = useChatModal()

    const validateInput = () => {
        // Check if input value is empty
        if (!inputValue.trim()) {
            toast.error("The website address cannot be empty.")
            return false
        }

        // Normalize the input to add "http://" or "https://" if missing
        let normalizedInput = inputValue.trim()

        // Add "https://" if no protocol is present
        if (!/^https?:\/\//i.test(normalizedInput)) {
            normalizedInput = "https://" + normalizedInput
        }

        // Regex for validating the normalized URL
        const urlPattern =
            /^(https?:\/\/)?(www\.)?[a-zA-Z0-9\-]+\.[a-zA-Z]{2,}(:[0-9]{1,5})?(\/.*)?$/

        if (!urlPattern.test(normalizedInput)) {
            toast.error("The entered website address is not valid.")
            return false
        }

        // Further checks: DNS resolution or basic pinging of the URL could be done
        return true
    }

    const getSessionId = () => {
        // Retrieve the sessionId from the cookies, or generate one if it doesn't exist
        let sessionId = Cookies.get("sessionId")

        if (!sessionId) {
            sessionId = `${inputValue}--${crypto.randomUUID()}`.replace(
                /\//g,
                "",
            )
            Cookies.set("sessionId", sessionId, { path: "/" })
        }

        return sessionId
    }
    const handleInputChange = (event: any) => {
        setInputValue(event.target.value)
    }
    const handleMeetRequest = () => {
        window.open("https://calendly.com/Chatsys/Chatsys-demo", "_blank")
    }

    const handleSubmit = async () => {
        if (!validateInput()) {
            return
        }

        try {
            setLoading(true)
            const sessionCookie = getSessionId()
            const alreadyCreated = await userLimitBotDemo(sessionCookie)
            if (alreadyCreated) {
                toast.error(
                    "Your demo bot creation limit has been reached.",
                )
                toast.info(
                    "To use more features, please log in to your user panel.",
                )
                return
            }
            const response = await Services.fetchLinkDemo(inputValue)
            const linkArray = response.data
            if (linkArray.length > 0) {
                const sessionId = (inputValue + "--" + sessionCookie).replace(
                    /\//g,
                    "",
                )
                SelectModalChat.setNameSpace(sessionId)
                SelectModalChat.setLinkCrawlered(linkArray)
                await serverAddData(linkArray, sessionId)
                SelectModalChat.onOpen()
                await addUserLimitBotDemo(sessionCookie)
            } else {
                toast.error("The required information is insufficient.")
            }
        } catch (error) {
            toast.error("There was an issue checking the website.")
        } finally {
            setInputValue("")
            setLoading(false)
        }
    }

    return (
        <>
            <div className="relative h-full min-h-full w-full overflow-hidden bg-contain bg-no-repeat md:h-[70vh] lg:bg-cover">
                <div className="absolute -top-[120px] left-[90%] -z-50 w-[300px]  opacity-60">
                    <Image
                        className="blur-2xl"
                        src="/images/rightBlur.png"
                        height="100"
                        width="650"
                        alt="Logo"
                    />
                </div>
                <div className="left-blur absolute -top-[15%] right-[90%] -z-50 w-[400px] opacity-60  md:-top-[40%]">
                    <Image
                        className="blur-3xl "
                        src="/images/rightBlur.png"
                        height="200"
                        width="500"
                        alt="Logo"
                    />
                </div>

                <div className="relative z-10 grid min-h-full w-full">
                    <div className="intro_conteiner">
                        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                            <div className="my-auto pb-4">
                                <div className="mt-7 flex flex-col items-center justify-center text-center md:mt-4">
                                    <h1 className="text-1xl text-center font-kalame font-bold !leading-[30px] text-slate-700 md:text-left md:text-3xl md:!leading-[60px] ">
                                        <span className="gradient-h2 is-v2 text-4xl md:text-6xl">
                                            AI Agents{" "}
                                        </span>
                                        That Work for You: Smarter, Faster, Always On.
                                        <br />
                                    </h1>
                                </div>
                                <div className="mt-3 text-base text-slate-400 md:mt-4 md:text-lg ">
                                    <p className="mx-auto text-center font-yekan text-[12px] font-medium md:text-justify md:text-[16px] md:!leading-6">
                                        Meet Chatsys AI Agents—The Future of Business Operations. Automate Smarter, Personalize Deeper, and Scale Faster, All While Delivering Unmatched Customer Experiences.
                                    </p>
                                </div>

                                <div className="mt-5 flex flex-col items-start justify-center gap-4">
                                    <div
                                        style={{
                                            boxShadow:
                                                "rgba(142, 151, 158, 0.15) 0px 4px 19px",
                                        }}
                                        className="flex h-[70px] w-full flex-row-reverse items-center space-x-2 rounded-2xl border border-gray-200 p-2 md:w-[80%]"
                                    >
                                        <button
                                            onClick={handleSubmit}
                                            className="p-2"
                                        >
                                            <ArrowRight2
                                                size="28"
                                                color={
                                                    inputValue
                                                        ? "#0000FF"
                                                        : "#6b7280"
                                                }
                                            />
                                        </button>
                                        <input
                                            className="w-full text-gray-700 placeholder-gray-500 placeholder:text-xs focus:outline-none"
                                            type="text"
                                            value={inputValue}
                                            onChange={handleInputChange}
                                            placeholder="Enter the website address for the demo bot..."
                                        />
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke-width="1.5"
                                            stroke="currentColor"
                                            aria-hidden="true"
                                            width="30"
                                            className="text-[#b811f5]"
                                        >
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
                                            ></path>
                                        </svg>
                                    </div>
                                </div>
                                <div className="flex flex-row justify-around md:justify-start">
                                    <Link href={"/mybots"}>
                                        <button
                                            type="button"
                                            className="mb-2 me-2 mt-5 
                rounded-lg bg-gradient-to-r from-blue-500
                via-blue-600 to-blue-700 px-5
                py-2.5 text-center
                text-sm 
                font-medium text-white shadow-lg shadow-blue-500/50 hover:bg-gradient-to-br focus:outline-none focus:ring-4 focus:ring-blue-300"
                                        >
                                            Create Your Assistant
                                            <span className="notice-text ml-2 inline-block text-[10px]">
                                                {" "}
                                                Free{" "}
                                            </span>
                                        </button>
                                    </Link>
                                    <Link
                                        href={
                                            "https://calendly.com/chatsysco/30min"
                                        }
                                        target="_blank"
                                    >
                                        <button
                                            type="button"
                                            className="mb-2 me-2 mt-5 flex
        items-center justify-center rounded-lg 
        border bg-transparent px-5
        py-2.5 
        text-center 
        text-sm font-medium 
         shadow-lg hover:bg-gradient-to-br
          focus:outline-none focus:ring-4
           focus:ring-blue-300"
                                        >
                                            Schedule a Meeting
                                            <span className="ml-1">
                                                <Calendar
                                                    size="20"
                                                    color="#3b82f6"
                                                />
                                            </span>
                                        </button>
                                    </Link>
                                </div>
                            </div>
                            <div className="relative">
                                <div className="mx-auto mt-[25px] flex h-[300px] w-[300px] items-center justify-center md:mt-[32px] md:h-[450px] md:w-[450px]">
                                    {/* <Image
                                src="/images/phone.svg"
                                height="400"
                                width="600"
                                alt="Logo"
                            /> */}
                                    <RiveChatbot />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {loading && <LoaderLottie />}
        </>
    )
}
export default IntroduceSections

"use client"
import Image from "next/image"
import { useEffect, useState } from "react"
import Services from "../../../../../src/shared/services/service"
import LoaderLottie from "@/src/shared/components/common/loader"
import { toast } from "sonner"
import { ArrowLeft2, Calendar, Magicpen } from "iconsax-react"
import "./style.css"
import useChatModal from "@/src/shared/components/common/chatModal/hooks/useChatModal"
import { addUserLimitBotDemo, serverAddData, userLimitBotDemo } from "./actions"
import Cookies from "js-cookie"
import RiveChatbot from "../RiveChatbot"

const IntroduceSections = () => {
    const [inputValue, setInputValue] = useState("")
    const [loading, setLoading] = useState(false)
    const SelectModalChat = useChatModal()

    const validateInput = () => {
        // Check if input value is empty
        if (!inputValue.trim()) {
            toast.error("آدرس وبسایت نمی‌تواند خالی باشد.")
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
            toast.error("آدرس وبسایت وارد شده معتبر نیست.")
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
        window.open("https://calendly.com/hamyarchat/hamyarchat-demo", "_blank")
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
                    "میزان تعداد ساختن چت بات دمو شما به اتمام رسیده است.",
                )
                toast.info(
                    "برای استفاده از امکانات بیشتر وارد پنل کاربری شوید.",
                )
                return
            }
            const response = await Services.fetchLink(inputValue)
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
                toast.error("اطلاعات مورد نظر کافی نمی باشد.")
            }
        } catch (error) {
            toast.error("بررسی سایت مشکل پیش امده است.")
        } finally {
            setInputValue("")
            setLoading(false)
        }
    }

    return (
        <>
            <div className="relative h-full min-h-full md:h-[70vh] w-full overflow-hidden bg-contain bg-no-repeat lg:bg-cover">
                <div className="absolute -top-[120px] left-[90%] -z-50 w-[300px]  opacity-60">
                    <Image
                        className="blur-2xl"
                        src="/images/rightBlur.png"
                        height="100"
                        width="650"
                        alt="Logo"
                    />
                </div>
                <div className="left-blur absolute -top-[15%] right-[80%] -z-50 w-[1000px] md:-top-[55%]  opacity-60">
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
                                <div className="mt-7 flex flex-col items-center justify-center text-center md:mt-9">
                                    <h1>
                                        <p className="text-center text-4xl md:text-right md:text-5xl">
                                            <span className="gradient-h2 is-v2">
                                                همیارچت
                                            </span>
                                            <span>، دستیار هوش مصنوعی </span>
                                        </p>
                                        <p className="mt-3 text-center text-xl md:mt-5 md:text-right md:text-2xl">
                                            <span>در خدمت </span>
                                            <span className="gradient-h2 is-v2">
                                                رضایت{" "}
                                            </span>
                                            <span>مشتریان و </span>
                                            <span className="gradient-h2 is-v2">
                                                پیشرفت{" "}
                                            </span>
                                            <span>کسب و کارها</span>
                                        </p>
                                    </h1>
                                </div>
                                <div className="mt-6 text-base text-slate-400 md:mt-8 md:text-lg ">
                                    <p className="mx-auto text-center text-[12px] md:text-justify md:text-[16px]">
                                        {`با همیارچت، تجربه‌ای هوشمند و شخصی‌سازی شده برای ارتباطات آنلاین و خدمات مشتریان خود بسازید. پلتفرم قدرتمند ما به شما کمک می‌کند تا به سادگی و با کارایی بالا، ارتباطات بهینه‌تری با مشتریان خود برقرار کنید و همیشه در دسترس باشید.`}
                                    </p>
                                </div>
                                <div className="mt-[32px] flex flex-col items-start justify-center gap-4">
                                    <div
                                        style={{
                                            boxShadow:
                                                "rgba(142, 151, 158, 0.15) 0px 4px 19px",
                                        }}
                                        className="flex h-[70px] w-full flex-row-reverse items-center space-x-2 rounded-2xl border border-gray-200 p-2 md:w-[80%]"
                                    >
                                        <ArrowLeft2 size="20" color="#6b7280" />
                                        <input
                                            className="w-full text-gray-700 placeholder-gray-500 focus:outline-none"
                                            type="text"
                                            value={inputValue}
                                            onChange={handleInputChange}
                                            placeholder="... آدرس وبسایت مورد نظرتان وارد کنید"
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
                                        {/* <Magicpen size="30" color="#"/> */}
                                    </div>
                                    {/* <div className="flex w-full gap-2 md:flex-row md:gap-3">
                                    <div className="webflow-style-input">
                                        <input
                                            type="text"
                                            className="input-url border border-gray-500 grid grid-cols-[minmax(0,1fr)_85px] shadow-[0_4px_19px_rgba(142,151,158,0.15)]"
                                            value={inputValue}
                                            onChange={handleInputChange}
                                            placeholder="... آدرس وبسایت مورد نظرتان وارد کنید"
                                        />
                                    </div>
                                        <button
                                            className="btn-demo"
                                            onClick={handleSubmit}
                                        >
                                            ایجاد بات دمو
                                        </button>
                                    </div> */}
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

            {loading && (
                <>
                    <div className="fixed left-0 top-0 z-50 h-full w-full bg-[#ffffff80]"></div>{" "}
                    <>
                        <div className="fixed left-1/2  top-1/2 z-[1000] -translate-x-1/2 -translate-y-1/2">
                            <div className="flex items-center gap-3">
                                <span>در حال دریافت اطلاعات ...</span>
                                <LoaderLottie />
                            </div>
                        </div>
                    </>
                </>
            )}
        </>
    )
}

export default IntroduceSections

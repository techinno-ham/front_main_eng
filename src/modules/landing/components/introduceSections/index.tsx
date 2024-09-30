"use client"
import Image from "next/image"
import { useEffect, useState } from "react"
import Services from "../../../../../src/shared/services/service"
import LoaderLottie from "@/src/shared/components/common/loader"
import { toast } from "sonner"
import { Calendar } from "iconsax-react"
import "./style.css"
import useChatModal from "@/src/shared/components/common/chatModal/hooks/useChatModal"
import { addUserLimitBotDemo, serverAddData, userLimitBotDemo } from "./actions"
import Cookies from "js-cookie";
import UrlDemo from "../RiveChatbot"

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
            normalizedInput = 'https://' + normalizedInput;
        }
    
        // Regex for validating the normalized URL
        const urlPattern = /^(https?:\/\/)?(www\.)?[a-zA-Z0-9\-]+\.[a-zA-Z]{2,}(:[0-9]{1,5})?(\/.*)?$/;
    
        if (!urlPattern.test(normalizedInput)) {
            toast.error("آدرس وبسایت وارد شده معتبر نیست.")
            return false
        }
    
        // Further checks: DNS resolution or basic pinging of the URL could be done
        return true
    }
    
    const getSessionId = () => {
        // Retrieve the sessionId from the cookies, or generate one if it doesn't exist
        let sessionId = Cookies.get("sessionId");
    
        if (!sessionId) {
          sessionId = `${inputValue}--${crypto.randomUUID()}`.replace(/\//g, "");
          Cookies.set("sessionId", sessionId, { path: "/" });
        }
    
        return sessionId;
      };
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
            const sessionCookie =getSessionId()
            const alreadyCreated=await userLimitBotDemo(sessionCookie);
            if(alreadyCreated){
                toast.error("میزان تعداد ساختن چت بات دمو شما به اتمام رسیده است.")
                toast.info("برای استفاده از امکانات بیشتر وارد پنل کاربری شوید.")
                return;
            }
            const response = await Services.fetchLink(inputValue)
            const linkArray = response.data
            if (linkArray.length > 0) {
                const sessionId = ( inputValue + "--" + sessionCookie).replace(/\//g, "");
                SelectModalChat.setNameSpace(sessionId)
                SelectModalChat.setLinkCrawlered(linkArray)
                await serverAddData(linkArray,sessionId);
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
            <div className="relative h-full min-h-full w-full overflow-hidden bg-contain bg-no-repeat lg:bg-cover">
                <div className="absolute left-[80%] top-24 -z-50 w-[300px]">
                    <Image
                        className="blur-2xl"
                        src="/images/rightBlur.png"
                        height="100"
                        width="650"
                        alt="Logo"
                    />
                </div>
                <div className="left-blur absolute right-[70%] -z-50 w-[1000px]">
                    <Image
                        className="blur-3xl"
                        src="/images/rightBlur.png"
                        height="200"
                        width="500"
                        alt="Logo"
                    />
                </div>

                <div className="relative z-10 grid min-h-full w-full">
                    <div className="intro_conteiner">
                        <div className="mt-7 flex flex-col items-center justify-center text-center md:mt-9">
                            <h1>
                                <p className="text-4xl md:text-7xl">
                                    <span className="gradient-h2 is-v2">
                                        همیارچت
                                    </span>
                                    <span>، دستیار هوش مصنوعی </span>
                                </p>
                                <p className="mt-3 text-xl md:mt-5 md:text-3xl">
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
                            <p className="mx-auto w-[55%] text-center text-[13px] md:text-[16px]">
                                {`با همیارچت، تجربه‌ای هوشمند و شخصی‌سازی شده برای ارتباطات آنلاین و خدمات مشتریان خود بسازید. پلتفرم قدرتمند ما به شما کمک می‌کند تا به سادگی و با کارایی بالا، ارتباطات بهینه‌تری با مشتریان خود برقرار کنید و همیشه در دسترس باشید.`}
                            </p>
                        </div>
                        <div className="mt-[32px] flex flex-col items-center justify-center gap-4">
                            <div className="webflow-style-input">
                                <input
                                    type="text"
                                    className="input-url"
                                    value={inputValue}
                                    onChange={handleInputChange}
                                    placeholder="... آدرس وبسایت مورد نظرتان وارد کنید"
                                />
                            </div>
                            <div className="flex flex-col-reverse gap-2 md:flex-row md:gap-3">
                                <button
                                    className="btn-meet"
                                    onClick={handleMeetRequest}
                                >
                                    <Calendar size="24" color="#fff" />
                                    <span>درخواست جلسه</span>
                                </button>
                                <button
                                    className="btn-demo"
                                    onClick={handleSubmit}
                                >
                                    ساختن بات دمو
                                </button>
                            </div>
                        </div>
                        <div className="mt-[25px] mx-auto flex justify-center items-center md:mt-[45px] h-[500px] w-[500px]">
                            {/* <Image
                                src="/images/phone.svg"
                                height="400"
                                width="600"
                                alt="Logo"
                            /> */}
                            <UrlDemo/>
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

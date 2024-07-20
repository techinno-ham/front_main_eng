"use client"
import useSelectModal from "@/src/shared/components/common/selectModal/hooks/useSelectModal.ts"
import useFetchLinks from "@/src/shared/hooks/fetchLinks"
import Image from "next/image"
import { useEffect, useState } from "react"
import { ClockLoader } from "react-spinners";
import Services from "../../../../../src/shared/services/service"
import LoaderLottie from "@/src/shared/components/common/loader"
import { toast } from "sonner"

const IntroduceSections = () => {
    const [inputValue, setInputValue] = useState("")
    const [loading, setLoading] = useState(false);
    const SelectModal = useSelectModal()

    const validateInput = () => {
        // Check if input value is empty
        if (!inputValue.trim()) {
            toast.error("آدرس وبسایت نمی‌تواند خالی باشد.")
            return false
        }
        // Check if input value is a valid URL
        const urlPattern = /^(ftp|http|https):\/\/[^ "]+$/
        if (!urlPattern.test(inputValue)) {
            toast.error("آدرس وبسایت وارد شده معتبر نیست.")
            return false
        }
        return true
    }

    const handleInputChange = (event: any) => {
        setInputValue(event.target.value)
    }



    const handleSubmit = async () => {
        if (!validateInput()) {
          return;
        }

        try {
          setLoading(true);
          const response = await Services.fetchLink(inputValue);
          const linkArray=response.data;
          console.log(linkArray.length)
          if(linkArray.length > 2){
            SelectModal.setUrls(linkArray);
            SelectModal.onOpen()
          }else{
            toast.error("لینک های سایت شما کافی نمی باشد.")
          }     
        } catch (error) {
         toast.error("بررسی سایت مشکل پیش امده است.")
        } finally {
          setLoading(false);
        }
      };

    return (
        <>
            <div className="intro_conteiner">
                <div>
                    <div className="absolute left-[80%] top-24 -z-50">
                        <Image
                            src="/images/rightBlur.png"
                            height="100"
                            width="650"
                            alt="Logo"
                        />
                    </div>
                    <div className="left-blur absolute right-[80%] top-24 -z-50">
                        <Image
                            src="/images/letfBlur.png"
                            height="200"
                            width="500"
                            alt="Logo"
                        />
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <h5>
                        <p className=" text-4xl md:text-7xl">
                            ساخت{" "}
                            <span className="text-blue-600">چت بات هوشمند</span>{" "}
                            شخصی
                        </p>
                    </h5>
                    <h5 className="flex gap-x-px">
                        <p className="text-4xl md:text-7xl">با کمترین زمان</p>
                        <div>
                            <Image
                                src="/icons/jet.svg"
                                height="70"
                                width="70"
                                alt="Logo"
                            />
                        </div>
                    </h5>
                </div>
                <div className="mt-7 text-base text-slate-400 md:mt-10 md:text-lg ">
                    <p>
                        بات های مانند chat gpt برای پروژه یا کسب کار خود بسازید
                        تا کارها را با سرعت  انجام دهید. 🎯
                    </p>
                </div>
                <input
                    type="text"
                    className="input-url"
                    onChange={handleInputChange}
                    placeholder="آدرس وبسایت مورد نظرتان وارد کنید ..."
                />
                <div className="mt-[20px] flex flex-col items-center justify-center">
                    <div>
                        <button className="btn-demo" onClick={handleSubmit}>
                            ساختن بات دمو
                        </button>
                    </div>

                    <div className="mt-[22px] md:mt-[35px]">
                        <Image
                            src="/images/phone.svg"
                            height="400"
                            width="600"
                            alt="Logo"
                        />
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
                        <LoaderLottie/>
                    </div>
                </div>
            </>
                </>
            )}
        </>
    )
}

export default IntroduceSections

"use client"
import useSelectModal from "@/src/shared/components/common/selectModal/hooks/useSelectModal.ts"
import Image from "next/image"
import { useEffect, useState } from "react"
import { ClockLoader } from "react-spinners"

const IntroduceSections = () => {
    const [inputValue, setInputValue] = useState("")
    const [loading, setLoading] = useState(false)
    const [inputError, setInputError] = useState("")
    const SelectModal = useSelectModal()

    const validateInput = () => {
        // Check if input value is empty
        if (!inputValue.trim()) {
            setInputError("آدرس وبسایت نمی‌تواند خالی باشد.")
            return false
        }
        // Check if input value is a valid URL
        const urlPattern = /^(ftp|http|https):\/\/[^ "]+$/
        if (!urlPattern.test(inputValue)) {
            setInputError("آدرس وبسایت وارد شده معتبر نیست.")
            return false
        }
        return true
    }

    const handleInputChange = (event: any) => {
        setInputValue(event.target.value)
    }

    useEffect(() => {
        setInputError("")
    }, [inputValue])

    const handleSubmit = () => {
        if (!validateInput()) {
            return
        }
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
            SelectModal.onOpen()
        }, 2000)
    }

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
                    <h1>
                        <p className=" text-4xl md:text-7xl">
                            <span className="text-blue-600">همیارچت</span>{" "}
                            ، هوش
                            مصنوعی در خدمت {" "}
                            <span className="text-blue-600">رضایت
                                 </span>{" "}
                                 مشتریان
                            و<span className="text-blue-600">پیشرفت</span>{" "}
                            کسب‌وکارها
                            
                        </p>
                    </h1>
                    <h5 className="flex gap-x-px">
                        <p className="text-4xl md:text-7xl"></p>
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
                        {`با همیارچت، تجربه‌ای هوشمند و شخصی‌سازی شده برای ارتباطات آنلاین و خدمات مشتریان خود بسازید. پلتفرم قدرتمند ما به شما کمک می‌کند تا به سادگی و با کارایی بالا، ارتباطات بهینه‌تری با مشتریان خود برقرار کنید و همیشه در دسترس باشید.`}
                    </p>
                </div>
                <input
                    type="text"
                    className="input-url"
                    onChange={handleInputChange}
                    placeholder="آدرس وبسایت مورد نظرتان وارد کنید ..."
                />
                {inputError && <p className="">{inputError}</p>}
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
                    {/* Semi-transparent overlay */}
                    <div className="fixed left-1/2 top-1/2 z-[1000] -translate-x-1/2 -translate-y-1/2">
                        <ClockLoader
                            color={"blue"}
                            loading={loading}
                            size={150}
                            aria-label="Loading Spinner"
                            data-testid="loader"
                        />
                    </div>
                </>
            )}
        </>
    )
}

export default IntroduceSections

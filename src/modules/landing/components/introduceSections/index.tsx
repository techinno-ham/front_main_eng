"use client"
import Image from "next/image"
import { useEffect, useState } from "react"

const IntroduceSections = () => {
    const [inputValue, setInputValue] = useState("")
    const [inputError, setInputError] = useState("")

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

    return (
        <>
            <div className="intro_conteiner">
                <div>
                    <div className="absolute left-[80%] top-24">
                        <Image
                            src="/images/rightBlur.png"
                            height="100"
                            width="650"
                            alt="Logo"
                        />
                    </div>
                    <div className="absolute right-[80%] top-24">
                        <Image
                            src="/images/rightBlur.png"
                            height="100"
                            width="300"
                            alt="Logo"
                        />
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <h5>
                        <p className="text-7xl">
                            ساخت{" "}
                            <span className="text-blue-600">چت بات هوشمند</span>{" "}
                            شخصی
                        </p>
                    </h5>
                    <h5 className="flex gap-x-px">
                        <p className="text-7xl">با کمترین زمان</p>
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
                <div className="mt-11">
                    <p>
                        بات های مانند chat gpt برای پروژه یا کسب کار خود بسازید
                        تا کارها را انجام دهید. 🎯
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
                        <button className="btn-demo">ساختن بات دمو</button>
                    </div>

                    <div className="mt-[75px]">
                        <Image
                            src="/images/phone.png"
                            height="400"
                            width="600"
                            alt="Logo"
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default IntroduceSections

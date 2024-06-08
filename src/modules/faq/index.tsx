//https://pagedone.io/blocks/marketing/faq
"use client"

import { useState } from "react"

let qaArray = [
    {
        question: "موچت چیست؟",
        answer: "موچت یک ابزار پیشرفته هوش مصنوعی است که به کسب وکارها امکان می دهد ربات های پاسخگوی خودکار بسازند. این ربات ها قادرند به سرعت و با دقت به سوالات مشتریان پاسخ دهند، که به این ترتیب فرآیند پشتیبانی مشتریان بهبود یافته و کارایی تیم پشتیبانی افزایش می یابد. موچت دارای ویژگی های کلیدی زیر است: پشتیبانی دائمی (۲۴/۷): تضمین پاسخگویی مداوم به کاربران. کاهش بار کاری تیم پشتیبانی: مدیریت پرسش های مکرر و ساده توسط موچت، اجازه می دهد تیم شما روی موضوعات پیچیده تر تمرکز کند. بهبود تجربه کاربری: افزایش رضایت کاربران با پاسخ های سریع و دقیق. موچت با یادگیری از داده های شما به نیازهای خاص کسب وکار شما پاسخ می دهد و می تواند به طور قابل توجهی تعاملات مشتری و کارایی تیم پشتیبانی را بهبود ببخشد.",
    },
    {
        question: "موچت چیست؟",
        answer: "موچت یک ابزار پیشرفته هوش مصنوعی است که به کسب وکارها امکان می دهد ربات های پاسخگوی خودکار بسازند. این ربات ها قادرند به سرعت و با دقت به سوالات مشتریان پاسخ دهند، که به این ترتیب فرآیند پشتیبانی مشتریان بهبود یافته و کارایی تیم پشتیبانی افزایش می یابد. موچت دارای ویژگی های کلیدی زیر است: پشتیبانی دائمی (۲۴/۷): تضمین پاسخگویی مداوم به کاربران. کاهش بار کاری تیم پشتیبانی: مدیریت پرسش های مکرر و ساده توسط موچت، اجازه می دهد تیم شما روی موضوعات پیچیده تر تمرکز کند. بهبود تجربه کاربری: افزایش رضایت کاربران با پاسخ های سریع و دقیق. موچت با یادگیری از داده های شما به نیازهای خاص کسب وکار شما پاسخ می دهد و می تواند به طور قابل توجهی تعاملات مشتری و کارایی تیم پشتیبانی را بهبود ببخشد.",
    },
    {
        question: "موچت چیست؟",
        answer: "موچت یک ابزار پیشرفته هوش مصنوعی است که به کسب وکارها امکان می دهد ربات های پاسخگوی خودکار بسازند. این ربات ها قادرند به سرعت و با دقت به سوالات مشتریان پاسخ دهند، که به این ترتیب فرآیند پشتیبانی مشتریان بهبود یافته و کارایی تیم پشتیبانی افزایش می یابد. موچت دارای ویژگی های کلیدی زیر است: پشتیبانی دائمی (۲۴/۷): تضمین پاسخگویی مداوم به کاربران. کاهش بار کاری تیم پشتیبانی: مدیریت پرسش های مکرر و ساده توسط موچت، اجازه می دهد تیم شما روی موضوعات پیچیده تر تمرکز کند. بهبود تجربه کاربری: افزایش رضایت کاربران با پاسخ های سریع و دقیق. موچت با یادگیری از داده های شما به نیازهای خاص کسب وکار شما پاسخ می دهد و می تواند به طور قابل توجهی تعاملات مشتری و کارایی تیم پشتیبانی را بهبود ببخشد.",
    },
]

const FAQ = () => {
    let [activeAccordionId, setActiveAccordionId] = useState<number|null>(null)
    return (
        <section className="py-24 min-h-[900px]">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mb-16">
                    <h6 className="mb-2 text-center text-lg font-medium text-indigo-600">
                        FAQs
                    </h6>
                    <h2 className="font-manrope text-center text-4xl font-bold leading-[3.25rem] text-gray-900">
                        Frequently asked questions
                    </h2>
                </div>

                <div
                    className="accordion-group"
                    data-accordion="default-accordion"
                >
                    {qaArray.map((qa, indx) => {
                        return (
                            <div
                                key={indx}
                                className="my-2 accordion accordion-active:bg-indigo-50 active rounded-2xl border-b border-solid border-gray-200 px-6 py-8 transition-all duration-500 hover:bg-indigo-50"
                                id="basic-heading-one-with-arrow"
                                style={{
                                    background:
                                        activeAccordionId === indx
                                            ? "#eef2ff"
                                            : "revert-layer",
                                }}
                                onClick={()=>{
                                    setActiveAccordionId(s=>s===indx ? null : indx)
                                }}
                            >
                                <button
                                    className="accordion-toggle accordion-active:font-medium accordion-active:text-indigo-600 group inline-flex w-full items-center justify-between text-left leading-8 text-gray-900 transition duration-500 hover:text-indigo-600"
                                    aria-controls="basic-collapse-one-with-arrow"
                                >
                                    <h5
                                    style={{
                                        color:
                                            activeAccordionId === indx
                                                ? "rgb(79 70 229)"
                                                : "unset",
                                    }}
                                    >{qa.question}</h5>
                                    <svg
                                    style={{
                                        rotate:
                                            activeAccordionId === indx
                                                ? "180deg"
                                                : "0deg",
                                    }}
                                        className="accordion-active:text-indigo-600 accordion-active:rotate-180 text-gray-500 transition duration-500 group-hover:text-indigo-600"
                                        width="22"
                                        height="22"
                                        viewBox="0 0 22 22"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M16.5 8.25L12.4142 12.3358C11.7475 13.0025 11.4142 13.3358 11 13.3358C10.5858 13.3358 10.2525 13.0025 9.58579 12.3358L5.5 8.25"
                                            stroke="currentColor"
                                            stroke-width="1.6"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        ></path>
                                    </svg>
                                </button>
                                <div
                                    id="basic-collapse-one-with-arrow"
                                    className="accordion-content w-full overflow-hidden px-0 transition-all duration-500"
                                    aria-labelledby="basic-heading-one-with-arrow"
                                    style={{
                                        maxHeight:
                                            activeAccordionId === indx
                                                ? "250px"
                                                : "0px",
                                        opacity:
                                            activeAccordionId === indx
                                                ? 1
                                                : 0,
                                    }}
                                >
                                    <p className="text-base leading-6 text-gray-900"
                                    
                                    >
                                        {qa.answer}
                                    </p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default FAQ

//https://pagedone.io/blocks/marketing/faq
"use client"

import { useState } from "react"

let qaArray = [
    {
        question: "What is Chatsys?",
        answer: "Chatsys is an advanced AI tool that allows businesses to create AI Agents. These bots are capable of answering customer questions quickly and accurately, thereby improving the customer support process and enhancing the efficiency of the support team. Key features of Chatsys include 24/7 support, reducing the workload of the support team, and improving user experience with fast and precise responses.",
    },
    {
        question: "What is the cost of using Chatsys?",
        answer: "Chatsys offers a variety of pricing plans. Starting with a free plan that includes basic features, you can try Chatsys and then upgrade to paid plans for access to more advanced features. This flexibility in pricing helps you benefit from smart AI Agents in a more cost-effective way.",
    },
    {
        question: "How many Chatsys AI Agents can I create?",
        answer: "The number of Chatsyss you can create depends on the plan you choose. In free plans, you may be able to create a limited number of AI Agents, while paid plans allow you to create more. This flexibility helps you tailor Chatsys to your business needs.",
    },
    {
        question: "What are the features of Chatsys?",
        answer: "Chatsys provides a simple, user-friendly interface that allows you to create and manage AI Agents without the need for programming. Key features include automatic training based on input data, multi-language support, easy integration with other platforms like Telegram and WooCommerce, and the ability to crawl websites for data collection. These features make Chatsys a powerful tool for improving customer interaction and increasing efficiency.",
    },
    {
        question: "How can I customize Chatsys?",
        answer: "Chatsys offers extensive customization options. You can adjust the chatbot’s appearance, welcome messages, and response templates. Additionally, you can add industry-specific modules or API integrations to improve the chatbot’s functionality and tailor it to your specific needs.",
    },
    {
        question: "Is Chatsys free?",
        answer: "Yes, Chatsys allows you to sign up for a free account and access the basic features of the platform. This account includes access to core features that are suitable for testing and exploring Chatsys. You can try Chatsys with no cost involved.",
    },
    {
        question: "What should I do to get started?",
        answer: "To get started, simply visit the Chatsys website and sign up. Then, you can create your Chatsys and input the data you want it to be trained on. This helps Chatsys provide more accurate and useful responses to your users. The process is very simple and does not require complex technical knowledge.",
    },
    {
        question: "How long does it take to train Chatsys?",
        answer: "Chatsys's training time is very short and usually takes just a few seconds to a few minutes, depending on the volume of data you use for training. This fast training speed allows you to quickly update your chatbot and provide new responses to users.",
    },
]


const FAQ = () => {
    let [activeAccordionId, setActiveAccordionId] = useState<number | null>(
        0,
    )
    return (
        <section className="min-h-[900px] pb-24 pt-10">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="w-full px-4">
    <div className="mx-auto mb-[60px] max-w-[700px] text-center">
        <span className="text-primary mb-2 block text-lg font-semibold">
            Frequently Asked Questions
        </span>
        <h2 className="text-dark mb-3 text-3xl font-bold   sm:text-4xl md:text-[40px] ">
            Answers to
            <span
                style={{
                    textShadow: "0 3px 8px rgba(77, 243, 255, 0.22)",
                    backgroundImage: "linear-gradient(360deg, #5154ff, #559fff)",
                    backgroundClip: "text",
                    fontWeight: 700,
                    position: "relative",
                    color: "transparent",
                }}
            >
                &nbsp;Your Questions&nbsp;
            </span>
        </h2>
        <p className="text-body-color dark:text-dark-6 text-base">
            Find answers to frequently asked questions about Chatsys here.
        </p>
    </div>
</div>


                <div
                    className="accordion-group"
                    data-accordion="default-accordion"
                >
                    {qaArray.map((qa, indx) => {
                        return (
                            <div
                                key={indx}
                                className="accordion accordion-active:bg-indigo-50 active my-2 rounded-2xl border-b border-solid border-blue-200 px-6 py-8 transition-all duration-500 hover:bg-blue-50"
                                id="basic-heading-one-with-arrow"
                                style={{
                                    background:
                                        activeAccordionId === indx
                                            ? "#eff6ff"
                                            : "revert-layer",
                                }}
                                onClick={() => {
                                    setActiveAccordionId((s) =>
                                        s === indx ? null : indx,
                                    )
                                }}
                            >
                                <button
                                    className="accordion-toggle accordion-active:font-medium accordion-active:text-blue-600 group inline-flex w-full items-center justify-between text-left leading-8 text-gray-900 transition duration-500 hover:text-blue-600"
                                    aria-controls="basic-collapse-one-with-arrow"
                                >
                                    <h5
                                        className="text-right"
                                        style={{
                                            color:
                                                activeAccordionId === indx
                                                    ? "#2563eb"
                                                    : "unset",
                                        }}
                                    >
                                        {qa.question}
                                    </h5>
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
                                            activeAccordionId === indx ? 1 : 0,
                                    }}
                                >
                                    <p className="pointer-events-none text-justify leading-6 text-gray-900">
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

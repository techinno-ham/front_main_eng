"use client"

import { CloseCircle, Refresh, Send } from "iconsax-react"
import { FC } from "react"

interface chatbotProps {
    chatBotActive: boolean
}

const ChatBot: FC<chatbotProps> = ({ chatBotActive }) => {
    return (
        <>
            {!chatBotActive ? (
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
                    <div className="flex h-[85vh] max-h-[824px] flex-auto shrink-0 flex-col overflow-hidden rounded-xl border border-zinc-400  bg-zinc-100">
                        <div className="cb-light group flex h-full flex-auto shrink-0 flex-col overflow-hidden bg-white">
                            <div className="w-full px-3">
                                <div className="z-10 flex justify-between border-b py-1">
                                    <div className="flex items-center justify-center gap-3">
                                        <button>
                                            <CloseCircle
                                                size={32}
                                                color="#9ca3af"
                                            />
                                        </button>
                                        <button>
                                            <Refresh
                                                size={28}
                                                color="#9ca3af"
                                            />
                                        </button>
                                    </div>
                                    <div className="flex items-center">
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
                                                            <div className=" w-full break-words text-right text-inherit ">
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

                                                <div className="ml-8 flex justify-start">
                                                    <div className="mb-3 max-w-prose overflow-auto rounded-lg bg-[#3b81f6] px-4  py-3 text-white ">
                                                        <div className="flex flex-col items-start gap-4 break-words">
                                                            <div className=" w-full break-words text-right text-inherit ">
                                                                <p>سلام !</p>{" "}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
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
                                        >
                                            {" "}
                                            چگونه چت بات بخرم؟
                                        </button>
                                    </div>
                                    <div className="flex border-t border-[#e4e4e7] px-4  py-3">
                                        <div className="flex w-full items-center leading-none">
                                            <textarea
                                                required
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
                                            <button>
                                                <Send />
                                            </button>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-center">
                                        <div className="flex items-center justify-center gap-3 px-4 pb-3 pt-1">
                                            <p className="grow text-nowrap text-center text-xs ">
                                                قدرت گرفته از
                                                <a
                                                    target="_blank"
                                                    className="mr-1 font-semibold text-[#1277fd]"
                                                    href="/"
                                                >
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
            )}
        </>
    )
}
export default ChatBot

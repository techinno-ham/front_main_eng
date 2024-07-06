"use client"

import { useState } from "react"
import ChatTemplate from "./components/chatTemplate"
import useStoreChatConfig from "./hooks/config-mock-chat"

const Apperence = () => {
    const { chatConfig, updateChatConfig } = useStoreChatConfig()

    const handleInputChange = (e: any) => {
        const { name, value } = e.target
        console.log({ [name]: value })
        updateChatConfig({ [name]: value })
    }
    const [borderIcon, SetBorderIcon] = useState("#6495ed")
    const [chatButtonPosition, setChatButtonPosition] = useState("start")

    const handlePositionChange = (event: any) => {
        const position = event.target.value === "راست" ? "start" : "end"
        setChatButtonPosition(position)
    }

    return (
        <>
            <div>
                <div className="p-5">
                    <h4 className="mb-8 text-sm text-zinc-600">
                        توجه: زمانی که در یک وب سایت تعبیه شده است اعمال می شود
                    </h4>
                    <div className=" flex flex-col justify-between lg:flex-row ">
                        <div className="w-2/2 flex-1 pb-5 lg:w-1/2">
                            <div className="pb-8">
                                <div className="flex justify-between">
                                    <label className="block text-sm font-medium text-zinc-700">
                                        پیام های شروع :
                                    </label>
                                    <button
                                        className="focus-visible:ring-ring inline-flex h-9 items-center justify-center whitespace-nowrap rounded-md bg-zinc-100 px-4 py-1 text-sm font-medium text-zinc-900 shadow-sm transition-colors hover:bg-zinc-200/90 focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-80 dark:bg-zinc-800 dark:text-zinc-50 dark:hover:bg-zinc-800/80"
                                        onClick={() =>
                                            updateChatConfig({
                                                botMessages: [
                                                    "سلام! در چه زمینه ای می توانم به شما کمک کنم؟",
                                                ],
                                            })
                                        }
                                    >
                                        بازنشانی
                                    </button>
                                </div>
                                <div className="mt-1">
                                    <textarea
                                        name="botMessages"
                                        value={chatConfig.botMessages.join(
                                            "\n",
                                        )}
                                        onChange={(e) =>
                                            updateChatConfig({
                                                botMessages:
                                                    e.target.value.split("\n"),
                                            })
                                        }
                                        placeholder="Hi! What can I help you with?"
                                        className="w-full min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white p-1 px-3 text-zinc-900 placeholder:text-zinc-400 focus:border-blue-500 focus:outline-none focus:ring-4 focus:ring-violet-500/10 sm:text-sm"
                                    />
                                    <p className="mt-2 text-sm text-zinc-500">
                                        هر پیام را در یک خط جدید وارد کنید.
                                    </p>
                                </div>
                            </div>
                            <div className="pb-8">
                                <label className="block text-sm font-medium text-zinc-700">
                                    پیام های پیشنهادی :
                                </label>
                                <div className="mt-1">
                                    <textarea
                                        name="suggestedMessages"
                                        value={chatConfig.suggestedMessages.join(
                                            "\n",
                                        )}
                                        onChange={(e) =>
                                            updateChatConfig({
                                                suggestedMessages:
                                                    e.target.value.split("\n"),
                                            })
                                        }
                                        placeholder="رایا چت چیست ؟"
                                        className="w-full min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white p-1 px-3 text-zinc-900 placeholder:text-zinc-400 focus:border-blue-500 focus:outline-none focus:ring-4 focus:ring-violet-500/10 sm:text-sm"
                                    />
                                    <p className="mt-2 text-sm text-zinc-500">
                                        هر پیام را در یک خط جدید وارد کنید.
                                    </p>
                                </div>
                            </div>
                            <div className="pb-8">
                                <label className="block text-sm font-medium text-zinc-700">
                                    پیام داخل ورودی :{" "}
                                </label>
                                <div className="mt-1">
                                    <input
                                        name="inputPlaceholder"
                                        value={chatConfig.inputPlaceholder}
                                        onChange={handleInputChange}
                                        className="border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex h-9 w-full rounded-md border px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus:border-blue-500 focus:outline-none focus:ring-4 focus:ring-violet-500/10 disabled:cursor-not-allowed disabled:opacity-50"
                                        placeholder="سلام ...."
                                        type="text"
                                    />
                                </div>
                            </div>
                            <div className="pb-8">
                                <label className="block text-sm font-medium text-zinc-700">
                                    فوتر :{" "}
                                </label>
                                <div className="mt-1">
                                    <input
                                        name="footer"
                                        value={chatConfig.footer}
                                        onChange={handleInputChange}
                                        className="border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex h-9 w-full rounded-md border px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus:border-blue-500 focus:outline-none focus:ring-4 focus:ring-violet-500/10 disabled:cursor-not-allowed disabled:opacity-50"
                                        placeholder="رایا گپ ..."
                                        type="text"
                                    />
                                </div>
                            </div>
                            <div className="pb-8">
                                <label className="block text-sm font-medium text-zinc-700">
                                    نام نمایش بات :{" "}
                                </label>
                                <div className="mt-1">
                                    <input
                                        className="border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex h-9 w-full rounded-md border px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus:border-blue-500 focus:outline-none focus:ring-4 focus:ring-violet-500/10 disabled:cursor-not-allowed disabled:opacity-50"
                                        placeholder="هوشینو"
                                        type="text"
                                        value={chatConfig.displayName}
                                        name="displayName"
                                        onChange={handleInputChange}
                                    />
                                </div>
                            </div>

                            <div className="pb-8">
                                <label className="block text-sm font-medium text-zinc-700">
                                    رنگ پیام کاربر :{" "}
                                </label>
                                <div className="mt-2">
                                    <div className="flex items-center">
                                        <div>
                                            <input
                                                name="bgUserMessage"
                                                type="color"
                                                value={chatConfig.bgUserMessage}
                                                onChange={handleInputChange}
                                                className="block h-10 w-14 cursor-pointer rounded-lg border border-gray-200 bg-white p-1 disabled:pointer-events-none disabled:opacity-50"
                                                title="Choose your color"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex w-full flex-row items-center gap-4 py-3">
                                <div className="flex flex-col gap-1">
                                    <span className="mb-1 block text-sm font-medium text-zinc-700">
                                        عکس دکمه چت بات :{" "}
                                    </span>
                                    <div className="flex flex-row items-center gap-2">
                                        <input
                                            id="bot_profile_picture"
                                            accept="image/*"
                                            className="hidden"
                                            type="file"
                                            name="bot_profile_picture"
                                        />
                                        <button
                                            className="focus-visible:ring-ring inline-flex h-7 items-center justify-center whitespace-nowrap rounded-md border border-zinc-200 bg-transparent px-3 text-xs font-medium shadow-sm transition-colors hover:bg-zinc-100 hover:text-zinc-900 focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-80 dark:border-zinc-800 dark:hover:bg-zinc-800 dark:hover:text-zinc-50"
                                            type="button"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                stroke-width="2"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                className="lucide lucide-upload ml-2 h-4 w-4"
                                            >
                                                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                                                <polyline points="17 8 12 3 7 8"></polyline>
                                                <line
                                                    x1="12"
                                                    x2="12"
                                                    y1="3"
                                                    y2="15"
                                                ></line>
                                            </svg>
                                            آپلود عکس
                                        </button>
                                    </div>
                                    <span className="mt-1 text-xs text-zinc-500">
                                        Supports JPG, PNG, and SVG files up to
                                        1MB
                                    </span>
                                </div>
                                <div className="h-14 w-14 rounded-full border border-zinc-300 bg-zinc-200"></div>
                            </div>
                            <div className="pb-8">
                                <label className="block text-sm font-medium text-zinc-700">
                                    رنگ دکمه چت بات :{" "}
                                </label>
                                <div className="mt-2">
                                    <div className="flex items-center">
                                        <div>
                                            <input
                                                name="borderIcon"
                                                type="color"
                                                value={borderIcon}
                                                onChange={(event) => {
                                                    SetBorderIcon(
                                                        event.target.value,
                                                    )
                                                }}
                                                className="block h-10 w-14 cursor-pointer rounded-lg border border-gray-200 bg-white p-1 disabled:pointer-events-none disabled:opacity-50"
                                                title="Choose your color"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="pb-8">
                                <label className="mb-1 block text-sm font-medium text-zinc-700">
                                    {" "}
                                    محل قرارگیری دکمه چت بات :
                                </label>
                                <select
                                    onChange={handlePositionChange}
                                    id="countries"
                                    className="block w-1/4 rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                                >
                                    <option>راست</option>
                                    <option>چپ</option>
                                </select>
                            </div>
                            <div className="mt-1 text-sm text-zinc-700">
                                نمایش خودکار پیام های اولیه پس از پاپ آپ باز می
                                شود :
                                <input
                                    className=" border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring mt-1 flex h-9 w-48 rounded-md border px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus:border-violet-500 focus:outline-none focus:ring-4 focus:ring-violet-500/10 disabled:cursor-not-allowed disabled:opacity-50"
                                    type="number"
                                    name="auto_open_chat_window_after"
                                />
                                ثانیه (منفی برای غیرفعال کردن)
                            </div>
                        </div>
                        <div className="w-2/2 mr-10 flex-1 lg:w-1/2">
                            <ChatTemplate config={chatConfig} />
                            <div
                                className="mt-4 flex pb-12"
                                style={{ justifyContent: chatButtonPosition }}
                            >
                                <div
                                    className="full flex h-[55px] w-[55px] items-center justify-center rounded-full"
                                    style={{
                                        border: `3px solid ${borderIcon}`,
                                    }}
                                >
                                    <img src="/double-wink.svg" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex justify-end  px-5 py-3">
                    <button className="rounded-md bg-blue-600 px-4 py-2 text-sm text-white">
                        ذخیره
                    </button>
                </div>
            </div>
        </>
    )
}
export default Apperence

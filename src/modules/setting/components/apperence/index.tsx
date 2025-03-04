"use client"

import { useEffect, useState, useCallback } from "react"
import { useDropzone, FileRejection } from "react-dropzone"
import ChatTemplate from "./components/chatTemplate"
import useStoreChatConfig from "./hooks/config-mock-chat"
import useStoreConfig from "../../hooks/loadConfig"
import service from "@/src/shared/services/service"
import { toast } from "sonner"
import CustomColorPicker from "./components/customColorPicker"
import Lottie from "lottie-react"
import { animationDataBot } from "./../../../../../public/lottie/widgetAnimations"

const MAX_IMAGE_SIZE = 1 * 1024 * 1024 // 1MB
const SUPPORTED_FORMATS = ["image/jpeg", "image/png", "image/svg+xml"]

const Apperence = () => {
    const { chatConfig, updateChatConfig } = useStoreChatConfig()
    const { data, setData } = useStoreConfig()
    const [isLoading, setIsLoading] = useState(false)
    const [image, setImage] = useState<File | null>(null)

    const onDrop = useCallback(
        (acceptedFiles: File[], fileRejections: FileRejection[]) => {
            if (acceptedFiles.length > 1) {
                toast.error("You can only upload one image.")
                return
            }

            const file = acceptedFiles[0]

            if (!SUPPORTED_FORMATS.includes(file.type)) {
                toast.error("Only JPG, PNG, and SVG files are supported.")
                return
            }

            if (file.size > MAX_IMAGE_SIZE) {
                toast.error("The file size must not exceed 1MB.")
                return
            }

            setImage(file)
        },
        [],
    )

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        accept: SUPPORTED_FORMATS.reduce(
            (acc, format) => ({ ...acc, [format]: [] }),
            {},
        ),
    })

    const handleInputChange = (e: any) => {
        const { name, value } = e.target
        updateChatConfig({ [name]: value })
    }

    const handleChangePosition = (e: any) => {
        let { name, value } = e.target
        value = value == "right" ? "right" : "left"
        console.log({ [name]: value })
        updateChatConfig({ [name]: value })
    }

    const handleThemeChange = (e: any) => {
        const value = e.target.value
        const themeBot = value === "Day mode" ? "light" : "dark"
        updateChatConfig({ themeBot })
    }

    const getContrastColor = (hex: any) => {
        // Remove the '#' if present
        hex = hex.replace("#", "")

        // Parse the hex color to RGB
        const r = parseInt(hex.substr(0, 2), 16)
        const g = parseInt(hex.substr(2, 2), 16)
        const b = parseInt(hex.substr(4, 2), 16)

        // Calculate the luminance using the formula
        const luminance = 0.2126 * r + 0.7152 * g + 0.0722 * b

        // Return either black or white based on the luminance
        return luminance > 128 ? "#000000" : "#ffffff" // Black if bright, white if dark
    }

    const handleBgChange = (name: any, value: any) => {
        const contrastColor = getContrastColor(value)
        updateChatConfig({ [name]: value, colorUserMessage: contrastColor })
    }

    const onSubmit = async () => {
        setIsLoading(true)
        try {
            const Data: any = {
                greet_msgs: chatConfig?.botMessages,
                action_btns: chatConfig?.suggestedMessages,
                placeholder_msg: chatConfig?.inputPlaceholder,
                footer_msg: chatConfig?.footer,
                bot_name: chatConfig?.displayName,
                theme_bot: chatConfig?.themeBot,
                user_msg_color: chatConfig?.colorUserMessage,
                user_msg_bg_color: chatConfig?.bgUserMessage,
                bot_widget_border_color: chatConfig?.borderWidget,
                bot_widget_position: chatConfig?.chatButtonPosition,
                notification_msg_delay: chatConfig?.initNotifDelay,
                notificationMsgs: chatConfig?.notificationMsgs,
                bot_image_border_color: chatConfig?.borderProfile,
                bot_image: chatConfig?.imageProfle,
            }
            const formData = new FormData()

            for (const key in Data) {
                if (Array.isArray(Data[key])) {
                    formData.append(key, JSON.stringify(Data[key]))
                } else {
                    formData.append(key, Data[key])
                }
            }

            if (image) {
                formData.append("image", image)
            }
            const response = await service.updateUiConfig(data.bot_id, formData)
            toast.success("Your changes have been saved successfully")
            setData(response.data)
        } catch (error) {
            toast.error("There was an issue updating!")
            console.error("Update failed:", error)
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        if (data) {
            const loadConfig = {
                botMessages: data?.ui_configs?.greet_msgs,
                suggestedMessages: data?.ui_configs?.action_btns,
                inputPlaceholder: data?.ui_configs?.placeholder_msg,
                footer: data?.ui_configs?.footer_msg,
                displayName: data?.ui_configs?.bot_name,
                themeBot: data?.ui_configs?.theme_bot,
                colorUserMessage: data?.ui_configs?.user_msg_color,
                bgUserMessage: data?.ui_configs?.user_msg_bg_color,
                borderWidget: data?.ui_configs?.bot_widget_border_color,
                chatButtonPosition: data?.ui_configs?.bot_widget_position,
                notificationMsgs: data?.ui_configs?.notificationMsgs,
                initNotifDelay: data?.ui_configs?.notification_msg_delay,
                borderProfile: data?.ui_configs?.bot_image_border_color,
                imageProfle: data?.ui_configs?.bot_image,
            }
            updateChatConfig(loadConfig)
        }
    }, [data])

    return (
        <>
            <div>
                <div className="p-5">
                    <h4 className="bg-yellow-100 text-yellow-800 mb-8 text-xs font-medium  p-2 rounded-lg flex items-center gap-2">
                        Attention: This will be applied when embedded on a
                        website
                    </h4>
                    <div className="flex flex-col justify-between lg:flex-row ">
                        <div className="w-2/2 flex-1 pb-5 lg:w-1/2">
                            <div className="pb-8">
                                <div className="flex justify-between">
                                    <label className="block text-sm font-medium text-zinc-700">
                                        Start Messages:
                                    </label>
                                    <button
                                        className="focus-visible:ring-ring inline-flex h-9 items-center justify-center whitespace-nowrap rounded-md bg-zinc-100 px-4 py-1 text-sm font-medium text-zinc-900 shadow-sm transition-colors hover:bg-zinc-200/90 focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-80 dark:bg-zinc-800 dark:text-zinc-50 dark:hover:bg-zinc-800/80"
                                        onClick={() =>
                                            updateChatConfig({
                                                botMessages: [
                                                    "Hello! How can I assist you?",
                                                ],
                                            })
                                        }
                                    >
                                        Reset
                                    </button>
                                </div>
                                <div className="mt-1">
                                    <textarea
                                        name="botMessages"
                                        rows={5}
                                        value={chatConfig.botMessages.join(
                                            "\n",
                                        )}
                                        onChange={(e) =>
                                            updateChatConfig({
                                                botMessages:
                                                    e.target.value.split("\n"),
                                            })
                                        }
                                        placeholder="Hello! 
I hope you're doing well."
                                        className="panel_custom_scrollbar w-full min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white p-1 px-3 text-zinc-900 placeholder:text-zinc-400 focus:border-blue-500 focus:outline-none focus:ring-4 focus:ring-violet-500/10 sm:text-sm"
                                    />
                                    <p className="mt-2 text-sm text-zinc-400">
                                        <span className="text-red-400">
                                            {" "}
                                            *{" "}
                                        </span>
                                        Enter each message on a new line.
                                    </p>
                                </div>
                            </div>
                            <div className="pb-8">
                                <label className="block text-sm font-medium text-zinc-700">
                                    Suggested Messages:
                                </label>
                                <div className="mt-1">
                                    <textarea
                                        name="suggestedMessages"
                                        rows={5}
                                        value={chatConfig.suggestedMessages.join(
                                            "\n",
                                        )}
                                        onChange={(e) =>
                                            updateChatConfig({
                                                suggestedMessages:
                                                    e.target.value.split("\n"),
                                            })
                                        }
                                        placeholder="How can I find out about prices?
How do I register?"
                                        className="panel_custom_scrollbar w-full min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white p-1 px-3 text-zinc-900 placeholder:text-zinc-400 focus:border-blue-500 focus:outline-none focus:ring-4 focus:ring-violet-500/10 sm:text-sm"
                                    />
                                    <p className="mt-2 text-sm text-zinc-400">
                                        <span className="text-red-400">
                                            {" "}
                                            *{" "}
                                        </span>
                                        Enter each message on a new line.
                                    </p>
                                </div>
                            </div>
                            <div className="pb-8">
                                <label className="block text-sm font-medium text-zinc-700">
                                    Input Placeholder:
                                </label>
                                <div className="mt-1">
                                    <input
                                        name="inputPlaceholder"
                                        value={chatConfig.inputPlaceholder}
                                        onChange={handleInputChange}
                                        className="border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex h-9 w-full rounded-md border px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus:border-blue-500 focus:outline-none focus:ring-4 focus:ring-violet-500/10 disabled:cursor-not-allowed disabled:opacity-50"
                                        placeholder="Example: Enter your question..."
                                        type="text"
                                    />
                                </div>
                            </div>
                            <div className="pb-8">
                                <label className="block text-sm font-medium text-zinc-700">
                                    Footer:
                                </label>
                                <div className="mt-1">
                                    <input
                                        name="footer"
                                        value={chatConfig.footer}
                                        onChange={handleInputChange}
                                        className="border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex h-9 w-full rounded-md border px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus:border-blue-500 focus:outline-none focus:ring-4 focus:ring-violet-500/10 disabled:cursor-not-allowed disabled:opacity-50"
                                        placeholder="example.com"
                                        type="text"
                                    />
                                </div>
                            </div>
                            <div className="pb-8">
                                <label className="block text-sm font-medium text-zinc-700">
                                    Display Name of Bot:
                                </label>
                                <div className="mt-1">
                                    <input
                                        className="border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex h-9 w-full rounded-md border px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus:border-blue-500 focus:outline-none focus:ring-4 focus:ring-violet-500/10 disabled:cursor-not-allowed disabled:opacity-50"
                                        placeholder="HamyarBot"
                                        type="text"
                                        value={chatConfig.displayName}
                                        name="displayName"
                                        onChange={handleInputChange}
                                    />
                                </div>
                            </div>

                            <div className="pb-8">
                                <label className="block text-sm font-medium text-zinc-700">
                                    Default Theme:
                                </label>
                                <div className="mt-2">
                                    <div className="flex items-center">
                                        <div>
                                            <select
                                                value={
                                                    chatConfig.themeBot ===
                                                    "light"
                                                        ? "Day mode"
                                                        : "Night mode"
                                                }
                                                onChange={handleThemeChange}
                                                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                                            >
                                                <option value="Day mode">
                                                    Day mode
                                                </option>
                                                <option value="Night mode">
                                                    Night mode
                                                </option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="pb-8">
                                <label className="block text-sm font-medium text-zinc-700">
                                    User Message Color:
                                </label>
                                <div className="mt-2">
                                    <div className="flex items-center">
                                        <div>
                                            <CustomColorPicker
                                                name="bgUserMessage"
                                                value={chatConfig.bgUserMessage}
                                                onChange={handleBgChange}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="pb-8">
                                <label className="mb-1 block text-sm font-medium text-zinc-700">
                                    Chat Button Position:
                                </label>
                                <select
                                    onChange={handleChangePosition}
                                    value={
                                        chatConfig.chatButtonPosition == "right"
                                            ? "Right"
                                            : "Left"
                                    }
                                    name="chatButtonPosition"
                                    className="block w-1/4 rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                                >
                                    <option>Right</option>
                                    <option>Left</option>
                                </select>
                            </div>

                            <div className="pb-8">
                                <label className="block text-sm font-medium text-zinc-700">
                                    Chat Button Background Color:
                                </label>
                                <div className="mt-2">
                                    <div className="flex items-center">
                                        <div>
                                            <input
                                                name="borderWidget"
                                                type="color"
                                                value={chatConfig.borderWidget}
                                                onChange={handleInputChange}
                                                className="block h-10 w-14 cursor-pointer rounded-lg border border-gray-200 bg-white p-1 disabled:pointer-events-none disabled:opacity-50"
                                                title="Choose your color"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex w-full flex-row items-center gap-4 pb-8">
                                <div className="flex flex-col gap-1">
                                    <span className="mb-1 block text-sm font-medium text-zinc-700">
                                        Chat Bot Profile Picture:
                                    </span>
                                    <div
                                        {...getRootProps()}
                                        className="flex flex-row items-center gap-2"
                                    >
                                        <input {...getInputProps()} />
                                        <button
                                            className="focus-visible:ring-ring border-zinc- inline-flex h-7 items-center justify-center whitespace-nowrap rounded-md border bg-transparent px-3 text-xs font-medium shadow-sm transition-colors hover:bg-zinc-100 hover:text-zinc-900 focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-80 "
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
                                            Upload Image
                                        </button>
                                    </div>
                                    <span className="mt-1 text-xs text-zinc-400">
                                        <span className="text-red-400">
                                            {" "}
                                            *{" "}
                                        </span>
                                        Supported file formats: JPG, PNG, and
                                        SVG up to 1 MB in size.
                                    </span>
                                </div>
                                <div
                                    className="h-16 w-16 rounded-full border bg-white shadow-sm"
                                    style={{
                                        border: `1px solid ${chatConfig.borderProfile}`,
                                    }}
                                >
                                    <img
                                        alt="Profile"
                                        className="h-full w-full rounded-full object-cover"
                                        src={
                                            image
                                                ? URL.createObjectURL(image)
                                                : chatConfig.imageProfle
                                                  ? chatConfig.imageProfle
                                                  : "/botface.svg"
                                        }
                                    />
                                </div>
                            </div>
                            <div className="pb-8">
                                <label className="block text-sm font-medium text-zinc-700">
                                    Chat Bot Profile Cover Color:
                                </label>
                                <div className="mt-2">
                                    <div className="flex items-center">
                                        <div>
                                            <input
                                                name="borderProfile"
                                                type="color"
                                                value={chatConfig.borderProfile}
                                                onChange={handleInputChange}
                                                className="block h-10 w-14 cursor-pointer rounded-lg border border-gray-200 bg-white p-1 disabled:pointer-events-none disabled:opacity-50"
                                                title="Choose your color"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="pb-8">
                                <label className="block text-sm font-medium text-zinc-700">
                                    Notification Message:
                                </label>
                                <div className="mt-1">
                                    <input
                                        name="notificationMsgs"
                                        value={chatConfig.notificationMsgs}
                                        onChange={handleInputChange}
                                        className="border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex h-9 w-full rounded-md border px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus:border-blue-500 focus:outline-none focus:ring-4 focus:ring-violet-500/10 disabled:cursor-not-allowed disabled:opacity-50"
                                        placeholder="Hello! Ask me anything."
                                        type="text"
                                    />
                                </div>
                            </div>
                            <div className="mt-1 text-sm text-zinc-700">
                                Notification Display Time After Chat Bot
                                Appears:
                                <input
                                    className=" border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring mt-1 flex h-9 w-48 rounded-md border px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus:border-violet-500 focus:outline-none focus:ring-4 focus:ring-violet-500/10 disabled:cursor-not-allowed disabled:opacity-50"
                                    type="number"
                                    name="initNotifDelay"
                                    onChange={handleInputChange}
                                    value={chatConfig.initNotifDelay}
                                />
                                milliseconds
                            </div>
                        </div>
                        <div className="w-2/2 sticky top-4 flex-1 md:ml-10 lg:w-1/2">
                            <ChatTemplate config={chatConfig} />
                            <div
                                className="mt-4 flex pb-12"
                                style={{
                                    justifyContent:
                                        chatConfig.chatButtonPosition == "right"
                                            ? "start"
                                            : "end",
                                }}
                            >
                                <span
                                    className="botpenguin-launcher-image-12 bg-gradient-to-br from-cyan-500 to-blue-500"
                                    style={{
                                        zIndex: 1,
                                        padding: "5px",
                                        position: "relative",
                                        width: "fit-content",
                                        height: "fit-content",
                                        boxShadow:
                                            "rgba(0, 0, 0, 0.2) 0px 4px 8px 0px",
                                        background: chatConfig.borderWidget,
                                    }}
                                >
                                    {chatConfig.imageProfle ? (
                                        <>
                                            <img
                                                className="m-auto !h-12 !w-12 rounded-full border border-[#1277fd]"
                                                src={chatConfig.imageProfle}
                                            />
                                        </>
                                    ) : (
                                        <>
                                            <Lottie
                                                animationData={animationDataBot}
                                                style={{
                                                    transform: "scale(1.3)",
                                                    width: "55px",
                                                    height: "55px",
                                                }}
                                                loop={true}
                                                autoPlay={true}
                                                rendererSettings={{
                                                    preserveAspectRatio:
                                                        "xMidYMid slice",
                                                }}
                                            />
                                        </>
                                    )}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex justify-end  px-5 py-3">
                    <button
                        onClick={onSubmit}
                        className="flex items-center gap-2 rounded-md bg-blue-600 px-4 py-2 text-sm text-white"
                    >
                        {isLoading ? (
                            <>
                                <div className="h-6 w-6 animate-spin rounded-full border-2 border-white border-t-blue-600"></div>
                                <span className="ml-3">Updating...</span>
                            </>
                        ) : (
                            <span>Save</span>
                        )}
                    </button>
                </div>
            </div>
        </>
    )
}
export default Apperence

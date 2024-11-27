import { Copy, ExportSquare } from "iconsax-react"
import { toast } from "sonner"
import useStoreActive from "../../hooks/activeStore"
import service from "@/src/shared/services/service"
import { usePathname } from "next/navigation"

const Sahre = () => {
    const { active, isLoding, setLoading, setActive,botHash } = useStoreActive()
    const pathname = usePathname()
    const botId = pathname.split("/")[2]

    const urlCode = `https://www.hamyar.chat/chatbot-iframe?botRef=${botId}`

    const handleCopyUrl = () => {
        navigator.clipboard
            .writeText(urlCode)
            .then(() => {
                toast.success("کد مورد نظر شما کپی شد.")
            })
            .catch((err) => {
                toast.error("کد مورد نظر شما کپی نشد.")
            })
    }
    const handleVisit = () => {
        window.open(urlCode, "_blank")
    }
    const handlePublic = async () => {
        setLoading(true)
        let formData = {
            access_bot: "general",
        }
        try {
            const response = await service.updateSecurityConfig(botId, formData)
            toast.success("تغیرات شما موفق آمیز ذخیره شد")
            setActive(true)
        } catch (error) {
            toast.error("در بروز رسانی مشکلی پیش امده است !")
            console.error("Update failed:", error)
        } finally {
            setLoading(false)
        }
    }

    return (
        <>
            <div>
                {active ? (
                    <>
                        <div className="flex flex-col gap-2 p-6 pt-0">
                            <div className="z-10 w-full">
                                <div>
                                    <div className="mt-3">
                                        <span className="w-full font-medium">
                                            www.hamyar.chat
                                        </span>
                                        <div className="mt-2">
                                            <p className="text-sm text-zinc-500 ">
                                                برای اشتراک گذاری ربات چت خود
                                                میتوانید از این آدرس استفاده
                                                کنید.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="m-auto mt-5 sm:mt-4 sm:flex sm:flex-row-reverse"
                                    style={{ direction: "ltr" }}
                                >
                                    <pre
                                        className="w-full overflow-auto rounded bg-zinc-100 p-2 text-xs"
                                        style={{
                                            whiteSpace: "pre-wrap",
                                            wordWrap: "break-word",
                                        }}
                                    >
                                        <code
                                            style={{
                                                height: "20px",
                                                display: "block",
                                                whiteSpace: "inherit",
                                            }}
                                        >
                                            https://www.hamyar.chat/chatbot-iframe?botRef={botId}
                                        </code>
                                    </pre>
                                </div>
                                <div className="mt-3 flex justify-center gap-3 space-x-4">
                                    <button
                                        onClick={handleVisit}
                                        className="focus-visible:ring-ring inline-flex h-9 items-center justify-center whitespace-nowrap rounded-xl border border-zinc-200 bg-transparent px-4 py-1 text-sm font-medium shadow-sm transition-colors hover:bg-zinc-100/70 hover:text-zinc-900 focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:bg-zinc-100/60 disabled:opacity-80 dark:border-zinc-800 dark:hover:bg-zinc-800 dark:hover:text-zinc-50"
                                    >
                                        <ExportSquare size="16" color="#000" />
                                        <span className="mr-1">Visit</span>
                                    </button>
                                    <button
                                        onClick={handleCopyUrl}
                                        className="focus-visible:ring-ring inline-flex h-9 items-center justify-center whitespace-nowrap rounded-xl border border-zinc-200 bg-transparent px-4 py-1 text-sm font-medium shadow-sm transition-colors hover:bg-zinc-100/70 hover:text-zinc-900 focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:bg-zinc-100/60 disabled:opacity-80 dark:border-zinc-800 dark:hover:bg-zinc-800 dark:hover:text-zinc-50"
                                    >
                                        <Copy size="18" color="#000" />
                                        <span className="mr-1">Copy</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </>
                ) : (
                    <>
                        <div className="flex flex-col gap-2 p-6 pt-3">
                            <div className="w-full items-center justify-between gap-5">
                                <div>
                                    <span className="font-medium text-zinc-950">
                                        {" "}
                                        میزان دسترسی چت بات شما خصوصی است، برای
                                        استقرار و اشتراک گذاری چت بات ، میزان
                                        دسترسی را به عمومی تغییر دهید.
                                    </span>
                                </div>
                                <div className="mt-5 flex flex-row justify-end">
                                    <button
                                        onClick={handlePublic}
                                        className="flex items-center gap-2 rounded-md bg-blue-600 px-4 py-2 text-sm text-white"
                                    >
                                        {isLoding ? (
                                            <>
                                                <div className="h-6 w-6 animate-spin rounded-full border-2 border-white border-t-blue-600"></div>
                                                <span className="ml-3">
                                                    {" "}
                                                    بروزرسانی ...
                                                </span>
                                            </>
                                        ) : (
                                            <span>عمومی کردن</span>
                                        )}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </>
    )
}
export default Sahre

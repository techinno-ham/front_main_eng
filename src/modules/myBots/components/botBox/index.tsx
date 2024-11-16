"use client"
import Image from "next/image"
import Link from "next/link"
import { DocumentCopy, Global, Trash } from "iconsax-react"
import Modal from "@/src/shared/components/common/modal"
import { useState } from "react"
import { formatDistanceToNow } from "date-fns-jalali"
import { faIR } from "date-fns/locale"
import { toast } from "sonner"

interface IBotBoxProps {
    type: "instagram" | "website"
    botsData?: any
    onDelete?: (botId: string) => any
    onDuplicate?: (projectId: number) => any
}

const listImage = {
    website:
        "https://img.freepik.com/premium-vector/blue-square-with-globe-icon-it_876006-15.jpg",
    instagram:
        "https://img.freepik.com/free-vector/instagram-icon_1057-2227.jpg?size=338&ext=jpg&ga=GA1.1.87170709.1707523200&semt=ais",
}

const BotBox = (props: IBotBoxProps) => {
    const [open, setOpen] = useState(false)
    const [loading, setLoading] = useState(false)
    const formatRelativeTime = (dateString: any) => {
        const date = new Date(dateString)
        return formatDistanceToNow(date, { locale: faIR })
    }

    const handleTrashClick = (e: React.MouseEvent) => {
        e.stopPropagation()
        e.preventDefault()
        setOpen(true)
    }
    const handleOnCloseModal = (e: React.MouseEvent) => {
        e.stopPropagation()
        e.preventDefault()
        setOpen(false)
    }
    const handleDelete = async (e: any) => {
        e.stopPropagation()
        e.preventDefault()
        setLoading(true)
        try {
            if (props.onDelete && props.botsData.bot_id) {
                await props.onDelete(props.botsData.bot_id)
                setOpen(false)
                toast.success("چت بات شما با موفقیت حذف شد")
            }
        } catch (error) {
            console.error("Error deleting bot:", error)
        } finally {
            setLoading(false)
        }
    }

    const handleCopyBot = (e: React.MouseEvent) => {
        e.stopPropagation()
        e.preventDefault()
        toast.error("در حال حاظر کپی کردن چت بات مورد نظر امکان پذیر نمی باشد.")
    }

    return (
        <>
            <div className="cursor-pointer rounded-xl border border-solid border-gray-200 hover:border-[#5470ff]">
                <div className="relative flex flex-col items-center">
                    <Link href={`/panel/${props.botsData.bot_id}`}>
                        <div className="absolute left-4 top-4">
                            <div className="flex h-9 w-9 items-center justify-center rounded-xl border bg-blue-600">
                                <Global size="28" color="#Fff" />
                            </div>
                        </div>
                        <div>
                            {props.botsData.ui_configs.bot_image ? (
                                <>
                                <Image
                                width={190}
                                height={120}
                                alt="axs"
                                src={props.botsData.ui_configs.bot_image}
                            />
                                </>
                            ):(
                                <>
                            <Image
                                width={190}
                                height={120}
                                alt="axs"
                                src={"/botface.svg"}
                            />
                                </>
                            )}
                       
                        </div>
                    </Link>
                    <div className="mt-3 w-full">
                        <hr />
                    </div>
                    <div className="flex w-full items-center justify-between p-[9px]">
                        <Link href={`/panel/${props.botsData.bot_id}`}>
                            <div className="flex flex-col">
                                <div>
                                    <span className="text-[20px]">
                                        { props.botsData?.name || "همیار بات"}
                                    </span>
                                </div>
                                <div>
                                    <span className="text-[10px] text-[gray]">
                                        آخرین بروزرسانی :
                                        {props.botsData?.updated_at
                                            ? formatRelativeTime(
                                                  props.botsData.updated_at,
                                              )
                                            : " مدتی قبل"}
                                    </span>
                                    <span className="block text-[10px] text-[gray]">
                                        چت بات آیدی :{props.botsData?.bot_id}
                                    </span>
                                </div>
                            </div>
                        </Link>
                        <div className="flex w-1/4 justify-around">
                            <div>
                                <button onClick={handleCopyBot}>
                                    <DocumentCopy size={20} />
                                </button>
                            </div>
                            <div>
                                <button onClick={handleTrashClick}>
                                    <Trash size={20} color="red" />
                                </button>
                                <Modal open={open} onClose={handleOnCloseModal}>
                                    <div className="w-80 text-center">
                                        <div className="flex flex-col gap-2">
                                            <div>
                                                <Trash
                                                    size={50}
                                                    className="mx-auto text-red-500"
                                                />
                                                <div className="mx-auto  w-60">
                                                    <h3 className="text-lg font-black text-gray-800">
                                                        حذف کردن چت بات
                                                    </h3>
                                                    <p className="mt-[8px] text-[12px] text-gray-500">
                                                        آیا مطمئن هستید که می
                                                        خواهید ربات چت خود را
                                                        حذف کنید؟ این عمل قابل
                                                        برگشت نیست.
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="flex justify-around gap-4">
                                                <button
                                                    className="focus-visible:ring-ring inline-flex h-9 items-center justify-center whitespace-nowrap rounded-md border border-zinc-200 bg-transparent px-4 py-1 text-sm font-medium shadow-sm transition-colors hover:bg-zinc-100 hover:text-zinc-900 focus-visible:outline-none  focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-80"
                                                    onClick={handleOnCloseModal}
                                                >
                                                    لغو
                                                </button>
                                                <button
                                                    style={{
                                                        backgroundColor: "red",
                                                    }}
                                                    className="focus-visible:ring-ring inline-flex h-9 items-center justify-center whitespace-nowrap rounded-md  px-4 py-1 text-sm font-medium text-zinc-50 shadow-sm transition-colors hover:bg-red-500/90 focus-visible:outline-none    focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-80"
                                                    type="button"
                                                    onClick={handleDelete}
                                                >
                                                    {loading ? (
                                                        <>
                                                            <div className="h-6 w-6 animate-spin rounded-full border-2 border-white border-t-blue-600"></div>
                                                            <span className="mr-3">
                                                                صبر کنید ...
                                                            </span>
                                                        </>
                                                    ) : (
                                                        <>
                                                            <span>
                                                                حذف کردن
                                                            </span>
                                                        </>
                                                    )}
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </Modal>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BotBox

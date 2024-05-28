"use client"
import Image from "next/image"
import Link from "next/link"
import { DocumentCopy, Trash } from "iconsax-react"
import Modal from "@/src/shared/components/common/modal"
import { useState } from "react"

interface IBotBoxProps {
    type: "instagram" | "website"
    botsData?: any
    onDelete?: (projectId: number) => any
    onDuplicate?: (projectId: number) => any
}

const listImage = {
    website:
        "https://img.freepik.com/premium-vector/blue-square-with-globe-icon-it_876006-15.jpg",
    instagram:
        "https://img.freepik.com/free-vector/instagram-icon_1057-2227.jpg?size=338&ext=jpg&ga=GA1.1.87170709.1707523200&semt=ais",
}

const BotBox = (props: IBotBoxProps) => {
    const [open, setOpen] = useState(false);

    const handleTrashClick = (e: React.MouseEvent) => {
        e.stopPropagation()
        e.preventDefault()
        setOpen(true)
    };
    const handleOnCloseModal = (e: React.MouseEvent) => {
        e.stopPropagation()
        e.preventDefault()
        setOpen(false)
    };

    return (
        <>
            <div className="cursor-pointer rounded-md border border-solid border-gray-200 hover:border-[#5470ff]">
                <Link href={"/dashbord"}>
                    <div className="flex flex-col items-center">
                        <div>
                            <Image
                                unoptimized={true}
                                width={208}
                                height={147}
                                alt="axs"
                                src={
                                    props.type == "instagram"
                                        ? listImage["instagram"]
                                        : listImage["website"]
                                }
                            />
                        </div>
                        <div className="w-full">
                            <hr />
                        </div>
                        <div className="flex w-full items-center justify-between p-[9px]">
                            <div className="flex flex-col">
                                <div>
                                    <span className="text-[20px]">
                                        {props.botsData?.name || "هوشینو بات"}
                                    </span>
                                </div>
                                <div>
                                    <span className="text-[10px] text-[gray]">
                                        {props.botsData?.lastUpdated ||
                                            "بروز رسانی مدتی قبل"}
                                    </span>
                                </div>
                            </div>

                            <div className="flex w-1/4 justify-around">
                                <div>
                                    <button>
                                        <DocumentCopy size={20} />
                                    </button>
                                </div>
                                <div>
                                <button onClick={handleTrashClick}>
                                        <Trash size={20} color="red" />
                                    </button>
                                    <Modal
                                        open={open}
                                        onClose={handleOnCloseModal}
                                     
                                    >
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
                                                <p className="text-[12px] mt-[8px] text-gray-500">
                                                آیا مطمئن هستید که می خواهید ربات چت خود را حذف کنید؟ این عمل قابل برگشت نیست.
                                                </p>
                                            </div>

                                                </div>
                                                <div className="flex gap-4 justify-around">
                                                <button 
                                                className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-80 border border-zinc-200 bg-transparent shadow-sm hover:bg-zinc-100 hover:text-zinc-900  h-9 px-4 py-1"
                                                   onClick={handleOnCloseModal}
                                                   >
                                                    لغو
                                                </button>
                                                <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-80 bg-red-500 text-zinc-50 shadow-sm hover:bg-red-500/90    h-9 px-4 py-1" type="button">پاک کردن</button>
                                            </div>

                                            </div>
                                        
                                         
                                            
                                        </div>
                                    </Modal>
                                </div>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        </>
    )
}

export default BotBox

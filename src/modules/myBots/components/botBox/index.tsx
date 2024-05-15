import Image from "next/image"
import Link from "next/link"
import { DocumentCopy, Trash } from "iconsax-react";

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
                        <div className="flex items-center w-full justify-between p-[9px]">

                        <div className="flex flex-col">
                                <div>
                                    <span className="text-[20px]">{props.botsData?.name || "هوشینو بات"}</span>
                                </div>
                                <div>
                                    <span className="text-[10px] text-[gray]">{props.botsData?.lastUpdated || "بروز رسانی مدتی قبل"}</span>
                                </div>
                            </div>
                          
                            <div className="flex w-1/4 justify-around">
                                <div>
                                    <button>
                                    <DocumentCopy size={20}/>
                                    </button>
                                </div>
                                <div>
                                    <button>
                                        <Trash size={20} color="red"/>
                                    </button>
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

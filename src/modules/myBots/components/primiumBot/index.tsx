import Link from "next/link"

const PremiumBot = (props: any) => {
    return (
        <>
            <div className="h-full w-full rounded-2xl bg-white p-3 shadow-[0_23px_40px_-20px_rgba(0,0,0,0.08)]">
                {props.isLoading == true ? (
                    <>
                     <div role="status" className="max-w-smh-full w-full h-full bg-white flex justify-start items-center gap-4 p-1 ">
                <div>
                <div className=" bg-gray-200  w-16 h-16 rounded-full"></div>
                </div>
                <div className="w-1/2">
                   <div className="h-2.5 bg-gray-200 rounded-full mb-2.5 "></div>
                   <div className="h-2 bg-gray-200 rounded-full "></div>
                   
                </div>

                 

                     </div>
                    </>
                ):(
                    <>
                    <div className="flex h-full w-full items-center justify-between ">
                    <div className="flex items-center gap-3">
                        <div className="flex items-center justify-center">
                            <img src="/icons/ranking.svg" alt="logout" />
                        </div>
                        <div className="flex flex-col">
                            <span>
                                <span className="text-[19px] text-[#ED8307] md:text-[24px]">
                                     {props.totalPerimium}
                                </span>
                                <span className="mr-2 text-[19px] text-[#ED8307] md:text-[24px]">
                                    چت بات پیشرفته
                                </span>
                            </span>
                            <span style={{ fontSize: "12px", color: "gray" }}>
                                اگر میخواهید این عدد را بیشتر کنید{" "}
                                <Link href={"/pricing"}>
                                    <span className="cursor-pointer text-[#0771ED]">
                                        کاربری پرو
                                    </span>
                                </Link>
                            </span>
                        </div>
                    </div>

                    <div
                        style={{
                            backgroundColor: "rgba(237, 131, 7, 0.16)",
                            borderRadius: "16px",
                            padding: "10px 13px",
                        }}
                    >
                        <span className="text-[16px] text-[#ED8307] md:text-[20px]">
                            پرو
                        </span>
                    </div>
                   </div>
                    </>
                )}
            </div>
        </>
    )
}
export default PremiumBot

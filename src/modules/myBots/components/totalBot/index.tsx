import Link from "next/link"

const TotalBots = (props: any) => {
    return (
        <>
            <div className="h-full w-full rounded-2xl bg-white p-3 shadow-[0_23px_40px_-20px_rgba(0,0,0,0.08)]">
                {props.isLoading == true ? (
                    <>
                        <div
                            role="status"
                            className="max-w-smh-full flex h-full w-full items-center justify-start gap-4 bg-white p-1 "
                        >
                            <div>
                                <div className=" h-16  w-16 rounded-full bg-gray-200"></div>
                            </div>
                            <div className="w-1/2">
                                <div className="mb-2.5 h-2.5 rounded-full bg-gray-200 "></div>
                                <div className="h-2 rounded-full bg-gray-200 "></div>
                            </div>
                        </div>
                    </>
                ) : (
                    <>
                        <div className="flex h-full w-full items-center justify-between ">
                            <div className="flex items-center gap-3">
                                <div className="flex items-center justify-center">
                                    <img src="/icons/chart.svg" alt="logout" />
                                </div>
                                <div className="flex flex-col">
                                    <span>
                                        <span className="text-[24px] text-[#0771ED]">
                                            {props.totalNumber}
                                        </span>
                                        <span className="ml-2  text-[19px] text-[#0771ED] md:text-[24px]">
                                            Basic Chat Bot
                                        </span>
                                    </span>
                                    <span
                                        style={{
                                            fontSize: "12px",
                                            color: "gray",
                                        }}
                                    >
                                        If you want to increase this number beyond the limit, please{" "}
                                        <Link href={"/pricing"}>
                                            <span className="cursor-pointer text-[#0771ED]">
                                                Pro User
                                            </span>
                                        </Link>
                                    </span>
                                </div>
                            </div>
                            <div
                                style={{
                                    backgroundColor: "rgba(7, 113, 237, 0.16)",
                                    borderRadius: "16px",
                                    padding: "10px 13px",
                                }}
                            >
                                <span
                                    style={{
                                        fontSize: "20px",
                                        color: "#0771ED",
                                    }}
                                >
                                    Total
                                </span>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </>
    )
}
export default TotalBots

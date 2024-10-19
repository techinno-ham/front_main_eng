import { DocumentText1, DollarCircle, Messages3, Timer1 } from "iconsax-react"

const CostSection = () => {
    return (
        <>
            <div className="container relative mx-auto mt-12 h-auto overflow-hidden  px-4  pb-[50px] pt-[100px] text-center 2xl:px-20">
                <div className=" rounded-[35px] border border-solid border-[#0446cb] bg-[#f2f4fa] px-4 py-10 md:px-14 md:py-20">
                    <div className="mb-10 ">
                        <h2 className="text-3xl font-medium md:text-5xl">
                            دستیار
                            <span className="gradient-h2 is-v2"> هوشمند </span>
                            برای
                            <span className="gradient-h2 is-v2"> تحول </span>
                            کسب‌وکار شما
                        </h2>
                        <h3 className="mt-1 text-[12px] md:mt-3 md:text-[16px]">
                            از مزایای بی‌نظیر دستیار هوش مصنوعی بهره‌مند شوید
                        </h3>
                    </div>
                    <div className="mt-16 grid gap-x-10 gap-y-10 md:grid-cols-2 lg:grid-cols-4">
                        <div
                            style={{
                                boxShadow:
                                    "2px 5px 25px 0px rgba(108, 146, 242, .05)",
                            }}
                            className="relative flex flex-col items-center rounded-xl bg-transparent bg-white bg-clip-border p-5 text-gray-700 shadow-sm"
                        >
                            <DollarCircle size="28" color="#3b82f6" />
                            <h2 className="mb-2 mt-4 block text-5xl font-bold tracking-normal text-gray-900 antialiased">
                                ۵۰٪-
                            </h2>
                            <h5 className="mb-2 block text-xl font-normal leading-snug tracking-normal antialiased ">
                                هزینه های پشتیبانی مشتری
                            </h5>
                            <h6 className="font mb-2 block text-base font-normal leading-relaxed tracking-normal text-zinc-400 antialiased">
                                {" "}
                                تا 50 درصد از هزینه های پشتیبانی مشتری خود را به
                                ازای هر نماینده کاهش دهید.
                            </h6>
                        </div>
                        <div
                            style={{
                                boxShadow:
                                    "2px 5px 25px 0px rgba(108, 146, 242, .05)",
                            }}
                            className="relative flex flex-col items-center rounded-xl bg-transparent bg-white bg-clip-border p-5 text-gray-700 shadow-sm"
                        >
                            <Timer1 size="28" color="#3b82f6" />
                            <h2 className="mb-2 mt-4 block text-5xl font-bold tracking-normal text-gray-900 antialiased">
                                ۳x
                            </h2>
                            <h5 className="mb-2 block text-xl font-normal leading-snug tracking-normal antialiased ">
                                پاسخ سریعتر
                            </h5>
                            <h6 className="font mb-2 block text-base font-normal leading-relaxed tracking-normal text-zinc-400 antialiased">
                                {" "}
                                چت بات ما 3 برابر سریعتر از یک انسان پاسخ می
                                دهد.
                            </h6>
                        </div>
                        <div
                            style={{
                                boxShadow:
                                    "2px 5px 25px 0px rgba(108, 146, 242, .05)",
                            }}
                            className="relative flex flex-col items-center rounded-xl bg-transparent bg-white bg-clip-border p-5 text-gray-700 shadow-sm"
                        >
                            <DocumentText1 size="28" color="#3b82f6" />
                            <h2 className="mb-2 mt-4 block text-5xl font-bold tracking-normal text-gray-900 antialiased">
                                ۱۰۰٪
                            </h2>
                            <h5 className="mb-2 block text-xl font-normal leading-snug tracking-normal antialiased ">
                                دقت
                            </h5>
                            <h6 className="font mb-2 block text-base font-normal leading-relaxed tracking-normal text-zinc-400 antialiased">
                                چت بات ما در پاسخ به سوالات دقت ۱۰۰٪ دارد.
                            </h6>
                        </div>
                        <div
                            style={{
                                boxShadow:
                                    "2px 5px 25px 0px rgba(108, 146, 242, .05)",
                            }}
                            className="relative flex flex-col items-center rounded-xl bg-transparent bg-white bg-clip-border p-5 text-gray-700 shadow-sm"
                        >
                            <Messages3 size="28" color="#3b82f6" />
                            <h2 className="mb-2 mt-4 block text-5xl font-bold tracking-normal text-gray-900 antialiased">
                                ۲۴/۷
                            </h2>
                            <h5 className="mb-2 block text-xl font-normal leading-snug tracking-normal antialiased ">
                                دستیار پشتیبانی
                            </h5>
                            <h6 className="font mb-2 block text-base font-normal leading-relaxed tracking-normal text-zinc-400 antialiased">
                                در مقایسه با پشتیبانی استاندارد، چت بات 24/7
                                برای مشتریان شما در دسترس است.
                            </h6>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default CostSection

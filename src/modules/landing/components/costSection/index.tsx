import { DocumentText1, DollarCircle, Messages3, Timer1 } from "iconsax-react"

const CostSection = () => {
    return (
        <section>
            <div className="container relative mx-auto mt-12 h-auto overflow-hidden px-4 pb-[50px] pt-[100px] text-center 2xl:px-20">
                <div
                    className="rounded-[35px] border border-solid 
    border-[#d7def3]
    bg-[#f2f4fa] px-4 py-10 md:px-14 md:py-20"
                >
                    <div className="mb-10 ">
                        <h2 className="text-3xl font-medium md:text-5xl">
                            Assistant
                            <span className="gradient-h2 is-v2"> Smart </span>
                            for
                            <span className="gradient-h2 is-v2">
                                {" "}
                                Transformation{" "}
                            </span>
                            of your business
                        </h2>
                        <h3 className="mt-1 text-[12px] md:mt-3 md:text-[16px]">
                            Take advantage of the unique benefits of an AI
                            assistant
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
                                50%-
                            </h2>
                            <h5 className="mb-2 block text-xl font-normal leading-snug tracking-normal antialiased ">
                                Customer Support Costs
                            </h5>
                            <h6 className="font mb-2 block text-base font-normal leading-relaxed tracking-normal text-zinc-400 antialiased">
                                {" "}
                                Reduce up to 50% of your customer support costs
                                per agent.
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
                                3x
                            </h2>
                            <h5 className="mb-2 block text-xl font-normal leading-snug tracking-normal antialiased ">
                                Faster Response
                            </h5>
                            <h6 className="font mb-2 block text-base font-normal leading-relaxed tracking-normal text-zinc-400 antialiased">
                                {" "}
                                Our chatbot responds 3 times faster than a
                                human.
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
                                100%
                            </h2>
                            <h5 className="mb-2 block text-xl font-normal leading-snug tracking-normal antialiased ">
                                Accuracy
                            </h5>
                            <h6 className="font mb-2 block text-base font-normal leading-relaxed tracking-normal text-zinc-400 antialiased">
                                Our chatbot has 100% accuracy in answering
                                questions.
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
                                24/7
                            </h2>
                            <h5 className="mb-2 block text-xl font-normal leading-snug tracking-normal antialiased ">
                                Support Assistant
                            </h5>
                            <h6 className="font mb-2 block text-base font-normal leading-relaxed tracking-normal text-zinc-400 antialiased">
                                Compared to standard support, our chatbot is
                                available 24/7 for your customers.
                            </h6>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default CostSection

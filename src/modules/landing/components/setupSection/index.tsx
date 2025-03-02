import { Box2, ChemicalGlass, Magicpen } from "iconsax-react"

const SetupSection = () => {
    return (
        <section className="vertical-mask-gradient bg-[url('https://assets-global.website-files.com/635c4eeb78332f7971255095/651bde55c70a6abcd28bad3e_circle-grid-bg_dots.webp')] bg-cover bg-center">
            <div className="container relative mx-auto h-auto overflow-hidden px-4 py-[120px] text-center 2xl:px-20">
                <div className="my-10 md:mt-10">
                    <h2 className="text-3xl font-medium md:text-5xl">
                        Create AI Agents
                        <span className="gradient-h2 is-v2">
                            {" "}
                            Without Coding
                        </span>
                    </h2>
                    <h3 className="mt-1 text-[12px] md:mt-3 md:text-[16px]">
                        Set up in under 2 minutes—no programming knowledge
                        needed.
                    </h3>
                </div>

                <div className="mx-auto mt-4 grid grid-cols-1 gap-4 md:grid-cols-3  md:gap-6 ">
                    <div className="relative flex flex-col rounded-xl bg-gray-50 bg-clip-border text-gray-700">
                        <div className="absolute right-4 top-3">
                            <Box2 size="32" color="#1d4ed8" />
                        </div>
                        <div className="p-6">
                            <h5 className="text-blue-gray-900 block text-left text-xl font-semibold leading-snug tracking-normal antialiased">
                                Step 1
                            </h5>
                            <p className="mb-1 mt-2 text-left font-semibold text-zinc-900">
                                Enter multiple data sources
                            </p>
                            <p className="text-left text-sm text-zinc-500">
                                Enter your website link, files, or text.
                            </p>
                        </div>
                        <div className="px-6">
                            <img
                                className="mx-auto mt-4 w-full"
                                src="/images/setup/1.png"
                            />
                        </div>
                    </div>
                    <div className="relative flex flex-col rounded-xl bg-gray-50 bg-clip-border text-gray-700">
                        <div className="absolute right-4 top-3">
                            <ChemicalGlass size="32" color="#1d4ed8" />
                        </div>
                        <div className="p-6">
                            <h5 className="block text-left text-xl font-semibold leading-snug tracking-normal text-gray-700 antialiased">
                                Step 2
                            </h5>
                            <p className="mb-1 mt-2 text-left font-semibold text-gray-900">
                                Train the chatbot
                            </p>
                            <p className="text-left text-sm text-zinc-500">
                                Train the chatbot with your data.
                            </p>
                        </div>
                        <div className="px-6">
                            <img
                                className="mx-auto mt-8 w-full"
                                src="/images/setup/2.png"
                            />
                        </div>
                    </div>
                    <div className="relative flex flex-col rounded-xl bg-gray-50 bg-clip-border text-gray-700">
                        <div className="absolute right-4 top-3">
                            <Magicpen size="32" color="#1d4ed8" />
                        </div>
                        <div className="p-6">
                            <h5 className="text-blue-gray-900 block text-left text-xl font-semibold leading-snug tracking-normal antialiased">
                                Step 3
                            </h5>
                            <p className="mb-1 mt-2 text-left font-semibold text-zinc-900">
                                Install and use
                            </p>
                            <p className="text-left text-sm text-zinc-500">
                                Use Chatsys on your website or anywhere without
                                any knowledge.
                            </p>
                        </div>
                        <div className="px-6">
                            <img
                                className="mx-auto mt-4 w-full"
                                src="/images/setup/3.jpg"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default SetupSection

"use client"
import { ElementPlus, SearchNormal1 } from "iconsax-react"
import BotBox from "./components/botBox"
import { useRouter } from "next/navigation"
import TotalBots from "./components/totalBot"
import PremiumBot from "./components/primiumBot"
import { getBotList } from "./utils"

const MyBots = async () => {
    const router = useRouter();
    const myBots= await getBotList();
    console.log(myBots)

    return (
        <>
            <div className="container mx-auto mt-24  h-full overflow-hidden bg-white px-4">
                <div className="flex w-full justify-between">
                    <div className="w-[60%]">
                        <p className="text-[28px]  md:text-3xl">
                            چت بات های من
                        </p>
                        <p className="text-[12px]  text-slate-500 md:mt-1 md:text-sm">
                            در اینجا، می توانید بات های خود را ببینید و بات های
                            جدید بسازید.
                        </p>
                    </div>
                    <div>
                        <button
                            onClick={() => {
                                router.push("/createbot")
                            }}
                            className="rounded-2xl bg-[#1D4ED8] p-3 text-[12px]  text-slate-50 md:p-3 md:text-sm"
                        >
                            <div className="flex gap-2">
                                <ElementPlus size="18" color="#FFf" />
                                <span>ساختن چت بات </span>
                            </div>
                        </button>
                    </div>
                </div>

                <div className="flex gap-6 flex-col md:flex-row mt-8">
                    <TotalBots/>
                    <PremiumBot/>
                </div>

                {/* bot container */}
                <div className="mt-11">
                    <div className="flex justify-center">
                        <div className="flex w-full items-center rounded-lg border border-solid border-gray-200 p-2 text-[14px] md:w-1/2">
                            <SearchNormal1 color="#8F8F8F" />
                            <div className="mr-5 w-full">
                                <input
                                    className="w-full border-none placeholder-gray-300 focus:outline-none"
                                    type="text"
                                    placeholder="جستوجو کردن ..."
                                />
                            </div>
                        </div>
                    </div>
                    <div className="mt-8 grid  grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
                        <BotBox type="instagram" />
                        <BotBox type="website" />
                        <BotBox type="instagram" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default MyBots

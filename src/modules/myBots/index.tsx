import { ElementPlus, SearchNormal1 } from "iconsax-react"
import BotBox from "./components/botBox"

const MyBots = () => {
    return (
        <>
            <div className="container mx-auto mt-24 overflow-hidden px-4 ">
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
                        <button className="rounded-2xl bg-[#1D4ED8] p-3 text-[12px]  text-slate-50 md:p-3 md:text-sm">
                            <div className="flex gap-2">
                                <ElementPlus size="18" color="#FFf" />
                                <span>ساختن چت بات </span>
                            </div>
                        </button>
                    </div>
                </div>

                {/* bot container */}
                <div className="mt-11">
                    <div className="flex justify-center">
                        <div className="flex w-full md:w-1/2 items-center rounded-lg border border-solid border-gray-200 p-2 text-[14px]">
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
                    <div className="mt-16 grid  grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
                        <BotBox type="instagram"/>
                        <BotBox type="website"/>
                        <BotBox type="instagram"/>
                       


                 
              
                    </div>

                  
                </div>
            </div>
        </>
    )
}

export default MyBots

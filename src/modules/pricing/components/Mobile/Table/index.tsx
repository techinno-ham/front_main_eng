"use client"

import React, { useState } from "react"
const FreePricingMobile = React.lazy(() => import("./Free"))
const StandardPricingMobile = React.lazy(() => import("./Standard"))
const ProPricingMobile = React.lazy(() => import("./Pro"))
const EnterprisePricingMobile = React.lazy(() => import("./Enterprise"))

const MobilePricingFeatures = () => {
    const [tier, setTier] = useState<
        "free" | "standard" | "pro" | "enterprise"
    >("free")

    const handleSelectChange = (event: any) => {
        setTier(event?.target?.value)
    }
    return (
        <section className=" md:hidden">
            {/* <div className="mx-auto mb-14 flex h-auto max-w-fit flex-row gap-2 rounded-full bg-zinc-100 p-2"> */}
            {/* <button
                    className="focus-visible:ring-ring inline-flex h-9 items-center justify-center whitespace-nowrap rounded-full bg-white px-5 py-6 text-sm font-medium text-zinc-950 transition-colors duration-300 ease-in-out hover:bg-white hover:text-zinc-900 hover:opacity-85 focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:text-zinc-600 disabled:opacity-80 dark:hover:bg-zinc-800 dark:hover:text-zinc-50"
                    value="month"
                >
                    Monthly
                </button> */}
            {/* <button
                                className="focus-visible:ring-ring inline-flex h-9 items-center justify-center whitespace-nowrap rounded-full bg-zinc-100 px-5 py-6 text-sm font-medium text-zinc-500 transition-colors duration-300 ease-in-out hover:bg-zinc-100 hover:text-zinc-900 focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:text-zinc-600 disabled:opacity-80 dark:hover:bg-zinc-800 dark:hover:text-zinc-50"
                                value="year"
                            >
                                Yearly
                            </button> */}
            {/* </div> */}
            <div className="flex w-full flex-col gap-6">
                {/* <button
                    type="button"
                    role="combobox"
                    aria-controls="radix-:r1:"
                    aria-expanded="false"
                    aria-autocomplete="none"
                    dir="ltr"
                    data-state="closed"
                    className="
                    border-b-1
                     z-100 
                                sticky 
                                top-[74px] -mx-8
                                 flex h-10 w-full
                                  min-w-[calc(100%+4rem)]
                                   items-center justify-between 
                                   rounded-md border border-zinc-900/10
                                    border-t-zinc-200 bg-zinc-50 px-10 
                                    py-7 text-base font-medium 
                                    text-zinc-900 placeholder:text-zinc-400
                                     focus:border-violet-500 focus:outline-none 
                                     focus:ring-0 focus:ring-violet-500/10
                                      focus:ring-offset-0 disabled:opacity-50 
                                      "
                >
                    <span style={{ pointerEvents: "none" }}>Free</span>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="lucide lucide-chevrons-up-down h-4 w-4 opacity-50"
                        aria-hidden="true"
                    >
                        <path d="m7 15 5 5 5-5"></path>
                        <path d="m7 9 5-5 5 5"></path>
                    </svg>
                </button> */}

                <form
                    className="sticky top-[74px] 
                z-20
                                mx-auto 
                                mb-4
                                w-full
                                "
                >
                    <select
                        id="countries"
                        value={tier}
                        onChange={handleSelectChange}
                        className="
                        border-b-1
                     
                        block w-full 
                        rounded-md 
                        border border-gray-300 bg-zinc-100
                          p-2.5 text-lg font-medium text-gray-900
                          focus:border-blue-500 focus:ring-blue-500"
                    >
                        <option value="free" selected>
                            پایه
                        </option>
                        <option value="standard">استاندارد</option>
                        <option value="pro">حرفه‌ای</option>
                        <option value="enterprise">سازمانی</option>
                    </select>
                </form>

                {tier === "free" && <FreePricingMobile />}
                {tier === "standard" && <StandardPricingMobile />}
                {tier === "pro" && <ProPricingMobile />}
                {tier === "enterprise" && <EnterprisePricingMobile />}
            </div>
        </section>
    )
}

export default MobilePricingFeatures

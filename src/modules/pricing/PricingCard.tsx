//https://uiverse.io/G4b413l/good-crab-75
//https://tailwindcomponents.com/component/tailwind-pricing-tables

import React from "react"

const PricingCard = ({
    order,
    children,
    description,
    price,
    type,
    subscription,
    buttonText,
    active,
    beforeListText,
    buttonLink,
}: any) => {
    const dynamicShadowGenerator = (order: number) => {
        let fullString = `rgb(46 49 240 / 40%) 0px 0px 20px, rgb(46 88 240 / 30%) 0px 5px, rgb(46 158 240 / 20%) 0px 10px, rgb(46 91 240 / 10%) 0px 15px`
        let splittedString = fullString.split(",")
        let splicedArray = splittedString.slice(0, order)
        return splicedArray
    }
    return (
        <>
            <div className="relative w-full px-4 pb-10 md:w-1/2 lg:w-1/4">
                {active && (
                   <span className="absolute -top-4 left-1/2 z-10 inline-flex h-8 -translate-x-1/2 items-center justify-center rounded-full bg-[#38BDF8] px-4 text-sm font-semibold tracking-[0.2px] text-white">
                   Most Popular
               </span>
               
                )}
                <div
                    style={{
                        //backdropFilter: "blur(10px)",
                        boxShadow: `${dynamicShadowGenerator(order)}`,
                        borderColor: active ? "#3056d3" : "#e5e5e5",
                    }}
                    className=" border-primary shadow-pricing relative h-full overflow-hidden rounded-[10px] border border-opacity-20 bg-white px-4 py-10 sm:p-12 lg:px-6 lg:py-10 xl:p-[32px]"
                >
                    <div className="flex h-full flex-col justify-between">
                        <div>
                            <span className="pricing-header mb-3 block text-3xl font-bold">
                                {type}
                            </span>
                            <h3 className="text-dark font-medium mb-5 text-2xl">
                                <span className="tracking-wider">
                                {price}
                                </span>
                                <span className="text-zinc-400">
                                {
                                    subscription && <span className="ml-1 text-[12px]">
                                    {subscription}
                                    </span>
                                }
                                </span>
                                {/* <span
                                    style={{
                                        color: "#637381",
                                    }}
                                    className="block text-base font-medium"
                                >
                                    {subscription && "/"} {subscription}
                                </span> */}
                            </h3>
                            {/* <p 
                    style={{
                        color: "#637381"
                    }}
                    className="text-sm border-strokedark:border-dark-3 dark:text-dark-6 mb-8 border-b pb-8">
                        {"مناسب برای 100 کاربر"}
                    </p> */}
                            <p
                                style={{
                                    color: "#637381",
                                }}
                                className="border-strokedark:border-dark-3 dark:text-dark-6 mb-8 text-sm"
                            >
                                {description}
                            </p>

                            {beforeListText && (
                                <div className="flex flex-row gap-1">
                                    <span className="text-sm font-semibold">
                                        {beforeListText}
                                    </span>
                                </div>
                            )}
                            <div
                                style={{
                                    color: "#637381",
                                }}
                                className="mt-2 flex flex-col gap-[14px] "
                            >
                                {React.Children.map(children, (child) => (
                                    <div className="flex flex-row items-start gap-3">
                                        <p className="size-5 text-zinc-700">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="#30a46c"
                                                strokeWidth="3"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="lucide lucide-check size-5"
                                            >
                                                <path d="M20 6 9 17l-5-5"></path>
                                            </svg>
                                        </p>
                                        {child}
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div>
                            <hr className="mx-auto my-4 h-0.5 w-60 rounded border-0 bg-blue-100 md:my-10 " />
                            <a
                                href={`${buttonLink}`}
                                className={` ${
                                    active
                                        ? "border-stroke hover:border-primary hover:bg-primary dark:border-dark-3 block w-full rounded-md border bg-blue-700 p-3 text-center text-base font-medium text-white transition hover:text-white"
                                        : "border-primary bg-primary block w-full rounded-md border p-3 text-center text-base font-medium text-blue-700 transition hover:bg-blue-700 hover:text-white"
                                } `}
                            >
                                {buttonText}
                            </a>
                        </div>
                    </div>

                    <div>
                        <span className="absolute right-0 top-7">
                            <svg
                                width={77}
                                height={172}
                                viewBox="0 0 77 172"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <circle
                                    cx={86}
                                    cy={86}
                                    r={86}
                                    fill="url(#paint0_linear)"
                                />
                                <defs>
                                    <linearGradient
                                        id="paint0_linear"
                                        x1={86}
                                        y1={0}
                                        x2={86}
                                        y2={172}
                                        gradientUnits="userSpaceOnUse"
                                    >
                                        <stop
                                            stopColor="#3056D3"
                                            stopOpacity="0.09"
                                        />
                                        <stop
                                            offset={1}
                                            stopColor="#C4C4C4"
                                            stopOpacity={0}
                                        />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </span>
                        <span className="absolute right-4 top-4">
                            <svg
                                width={41}
                                height={89}
                                viewBox="0 0 41 89"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <circle
                                    cx="38.9138"
                                    cy="87.4849"
                                    r="1.42021"
                                    transform="rotate(180 38.9138 87.4849)"
                                    fill="#3056D3"
                                />
                                <circle
                                    cx="38.9138"
                                    cy="74.9871"
                                    r="1.42021"
                                    transform="rotate(180 38.9138 74.9871)"
                                    fill="#3056D3"
                                />
                                <circle
                                    cx="38.9138"
                                    cy="62.4892"
                                    r="1.42021"
                                    transform="rotate(180 38.9138 62.4892)"
                                    fill="#3056D3"
                                />
                                <circle
                                    cx="38.9138"
                                    cy="38.3457"
                                    r="1.42021"
                                    transform="rotate(180 38.9138 38.3457)"
                                    fill="#3056D3"
                                />
                                <circle
                                    cx="38.9138"
                                    cy="13.634"
                                    r="1.42021"
                                    transform="rotate(180 38.9138 13.634)"
                                    fill="#3056D3"
                                />
                                <circle
                                    cx="38.9138"
                                    cy="50.2754"
                                    r="1.42021"
                                    transform="rotate(180 38.9138 50.2754)"
                                    fill="#3056D3"
                                />
                                <circle
                                    cx="38.9138"
                                    cy="26.1319"
                                    r="1.42021"
                                    transform="rotate(180 38.9138 26.1319)"
                                    fill="#3056D3"
                                />
                                <circle
                                    cx="38.9138"
                                    cy="1.42021"
                                    r="1.42021"
                                    transform="rotate(180 38.9138 1.42021)"
                                    fill="#3056D3"
                                />
                                <circle
                                    cx="26.4157"
                                    cy="87.4849"
                                    r="1.42021"
                                    transform="rotate(180 26.4157 87.4849)"
                                    fill="#3056D3"
                                />
                                <circle
                                    cx="26.4157"
                                    cy="74.9871"
                                    r="1.42021"
                                    transform="rotate(180 26.4157 74.9871)"
                                    fill="#3056D3"
                                />
                                <circle
                                    cx="26.4157"
                                    cy="62.4892"
                                    r="1.42021"
                                    transform="rotate(180 26.4157 62.4892)"
                                    fill="#3056D3"
                                />
                                <circle
                                    cx="26.4157"
                                    cy="38.3457"
                                    r="1.42021"
                                    transform="rotate(180 26.4157 38.3457)"
                                    fill="#3056D3"
                                />
                                <circle
                                    cx="26.4157"
                                    cy="13.634"
                                    r="1.42021"
                                    transform="rotate(180 26.4157 13.634)"
                                    fill="#3056D3"
                                />
                                <circle
                                    cx="26.4157"
                                    cy="50.2754"
                                    r="1.42021"
                                    transform="rotate(180 26.4157 50.2754)"
                                    fill="#3056D3"
                                />
                                <circle
                                    cx="26.4157"
                                    cy="26.1319"
                                    r="1.42021"
                                    transform="rotate(180 26.4157 26.1319)"
                                    fill="#3056D3"
                                />
                                <circle
                                    cx="26.4157"
                                    cy="1.4202"
                                    r="1.42021"
                                    transform="rotate(180 26.4157 1.4202)"
                                    fill="#3056D3"
                                />
                                <circle
                                    cx="13.9177"
                                    cy="87.4849"
                                    r="1.42021"
                                    transform="rotate(180 13.9177 87.4849)"
                                    fill="#3056D3"
                                />
                                <circle
                                    cx="13.9177"
                                    cy="74.9871"
                                    r="1.42021"
                                    transform="rotate(180 13.9177 74.9871)"
                                    fill="#3056D3"
                                />
                                <circle
                                    cx="13.9177"
                                    cy="62.4892"
                                    r="1.42021"
                                    transform="rotate(180 13.9177 62.4892)"
                                    fill="#3056D3"
                                />
                                <circle
                                    cx="13.9177"
                                    cy="38.3457"
                                    r="1.42021"
                                    transform="rotate(180 13.9177 38.3457)"
                                    fill="#3056D3"
                                />
                                <circle
                                    cx="13.9177"
                                    cy="13.634"
                                    r="1.42021"
                                    transform="rotate(180 13.9177 13.634)"
                                    fill="#3056D3"
                                />
                                <circle
                                    cx="13.9177"
                                    cy="50.2754"
                                    r="1.42021"
                                    transform="rotate(180 13.9177 50.2754)"
                                    fill="#3056D3"
                                />
                                <circle
                                    cx="13.9177"
                                    cy="26.1319"
                                    r="1.42021"
                                    transform="rotate(180 13.9177 26.1319)"
                                    fill="#3056D3"
                                />
                                <circle
                                    cx="13.9177"
                                    cy="1.42019"
                                    r="1.42021"
                                    transform="rotate(180 13.9177 1.42019)"
                                    fill="#3056D3"
                                />
                                <circle
                                    cx="1.41963"
                                    cy="87.4849"
                                    r="1.42021"
                                    transform="rotate(180 1.41963 87.4849)"
                                    fill="#3056D3"
                                />
                                <circle
                                    cx="1.41963"
                                    cy="74.9871"
                                    r="1.42021"
                                    transform="rotate(180 1.41963 74.9871)"
                                    fill="#3056D3"
                                />
                                <circle
                                    cx="1.41963"
                                    cy="62.4892"
                                    r="1.42021"
                                    transform="rotate(180 1.41963 62.4892)"
                                    fill="#3056D3"
                                />
                                <circle
                                    cx="1.41963"
                                    cy="38.3457"
                                    r="1.42021"
                                    transform="rotate(180 1.41963 38.3457)"
                                    fill="#3056D3"
                                />
                                <circle
                                    cx="1.41963"
                                    cy="13.634"
                                    r="1.42021"
                                    transform="rotate(180 1.41963 13.634)"
                                    fill="#3056D3"
                                />
                                <circle
                                    cx="1.41963"
                                    cy="50.2754"
                                    r="1.42021"
                                    transform="rotate(180 1.41963 50.2754)"
                                    fill="#3056D3"
                                />
                                <circle
                                    cx="1.41963"
                                    cy="26.1319"
                                    r="1.42021"
                                    transform="rotate(180 1.41963 26.1319)"
                                    fill="#3056D3"
                                />
                                <circle
                                    cx="1.41963"
                                    cy="1.4202"
                                    r="1.42021"
                                    transform="rotate(180 1.41963 1.4202)"
                                    fill="#3056D3"
                                />
                            </svg>
                        </span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PricingCard

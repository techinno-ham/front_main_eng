"use client"
import React, { useState } from "react"
import "./style.css"
import Image from "next/image"
import Link from "next/link"
import { Calendar, Call } from "iconsax-react"

const Footer = () => {
    let [activeAccordionId, setActiveAccordionId] = useState<number | null>(
        null,
    )
    return (
        <footer className="border-t-[1px]  border-gray-200 bg-white">
            <div className="container mx-auto h-auto overflow-hidden  px-4  py-24 2xl:px-20">
                <section className="mx-auto grid w-full max-w-screen-xl items-center gap-10 px-4 md:grid-cols-2 md:items-start">
                    <div className="flex flex-col items-center gap-16 md:items-start">
                        <div className="flex flex-col items-center gap-4 md:items-start">
                            <div>
                                <Link href={"/"}>
                                    <div className="flex items-center justify-center">
                                        <Image
                                            src="/logo.svg"
                                            height="50"
                                            width="50"
                                            alt="Logo"
                                        />
                                        <span
                                            className={`ml-2 text-2xl font-bold `}
                                        >
                                            Chatsys
                                        </span>
                                    </div>
                                </Link>
                            </div>
                            <p className="text-center font-medium leading-5 text-zinc-400 md:text-left">
                            AI Agents, Tailored for You: 
                                <br />
                                Driving Customer Satisfaction and Accelerating Business Growth.
                            </p>
                        </div>
                        <div className="grid w-full grid-cols-3 gap-4 md:w-auto md:grid-cols-5">
                            <button
                                className="focus-visible:ring-ring col-span-3 inline-flex 
                             h-11 items-center justify-center
                             whitespace-nowrap rounded-md 
                             bg-blue-100 text-base
                               font-medium text-blue-900 
                              shadow-sm transition-colors 
                              hover:bg-blue-200/90
                               focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-80 md:col-span-2 "
                            >
                                <Link
                                    className="flex h-full w-full items-center justify-center px-4 py-1"
                                    href={"https://telegram.me/chatsysco"}
                                    target="_blank"
                                >
                                    Support
                                    <span className="ml-1">
                                        <Call size="20" color="#1e3a8a" />
                                    </span>
                                </Link>
                            </button>
                            <button
                                className="focus-visible:ring-ring col-span-3 inline-flex 
                             h-11 items-center justify-center
                             whitespace-nowrap rounded-md 
                              text-base
                               font-medium border text-blue-900
                              shadow-sm transition-colors 
                               focus-visible:outline-none 
                               focus-visible:ring-1
                                disabled:pointer-events-none
                                 disabled:opacity-80 md:col-span-2 "
                            >
                                <Link
                                    className="flex h-full w-full items-center justify-center px-4 py-1"
                                    href={"https://telegram.me/chatsysco"}
                                    target="_blank"
                                >
                                    Schedule a Meeting
                                    <span className="ml-1">
                                        <Calendar
                                                        size="20"
                                                        color="#1e3b8a"
                                                    />
                                    </span>
                                </Link>
                            </button>
                            
                            {/* <Link
                                passHref
                                href={
                                    "https://www.linkedin.com/company/Chatsys"
                                }
                                target="_blank"
                            >
                                <button
                                    className="focus-visible:ring-ring inline-flex 
                            h-11 w-full items-center justify-center whitespace-nowrap
                             rounded-xl border bg-transparent p-1 text-sm font-medium text-zinc-400
                              shadow-sm transition-colors hover:bg-zinc-100 hover:text-white 
                              focus-visible:outline-none focus-visible:ring-1 
                              disabled:pointer-events-none disabled:bg-zinc-100/60
                               disabled:opacity-80 md:col-span-1 "
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        x="0px"
                                        y="0px"
                                        width="32"
                                        height="32"
                                        viewBox="0 0 48 48"
                                    >
                                        <path
                                            fill="#0078d4"
                                            d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5	V37z"
                                        ></path>
                                        <path
                                            d="M30,37V26.901c0-1.689-0.819-2.698-2.192-2.698c-0.815,0-1.414,0.459-1.779,1.364	c-0.017,0.064-0.041,0.325-0.031,1.114L26,37h-7V18h7v1.061C27.022,18.356,28.275,18,29.738,18c4.547,0,7.261,3.093,7.261,8.274	L37,37H30z M11,37V18h3.457C12.454,18,11,16.528,11,14.499C11,12.472,12.478,11,14.514,11c2.012,0,3.445,1.431,3.486,3.479	C18,16.523,16.521,18,14.485,18H18v19H11z"
                                            opacity=".05"
                                        ></path>
                                        <path
                                            d="M30.5,36.5v-9.599c0-1.973-1.031-3.198-2.692-3.198c-1.295,0-1.935,0.912-2.243,1.677	c-0.082,0.199-0.071,0.989-0.067,1.326L25.5,36.5h-6v-18h6v1.638c0.795-0.823,2.075-1.638,4.238-1.638	c4.233,0,6.761,2.906,6.761,7.774L36.5,36.5H30.5z M11.5,36.5v-18h6v18H11.5z M14.457,17.5c-1.713,0-2.957-1.262-2.957-3.001	c0-1.738,1.268-2.999,3.014-2.999c1.724,0,2.951,1.229,2.986,2.989c0,1.749-1.268,3.011-3.015,3.011H14.457z"
                                            opacity=".07"
                                        ></path>
                                        <path
                                            fill="#fff"
                                            d="M12,19h5v17h-5V19z M14.485,17h-0.028C12.965,17,12,15.888,12,14.499C12,13.08,12.995,12,14.514,12	c1.521,0,2.458,1.08,2.486,2.499C17,15.887,16.035,17,14.485,17z M36,36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698	c-1.501,0-2.313,1.012-2.707,1.99C24.957,25.543,25,26.511,25,27v9h-5V19h5v2.616C25.721,20.5,26.85,19,29.738,19	c3.578,0,6.261,2.25,6.261,7.274L36,36L36,36z"
                                        ></path>
                                    </svg>
                                </button>
                            </Link>
                            <Link
                                href={"https://wa.me/989397803429"}
                                target="_blank"
                                className="text-sm font-medium text-zinc-400 transition-colors duration-200 ease-in-out hover:text-zinc-700"
                            >
                                <button className="focus-visible:ring-ring inline-flex h-11 w-full items-center justify-center whitespace-nowrap rounded-xl border bg-transparent p-1 text-sm font-medium text-zinc-400 shadow-sm transition-colors hover:bg-zinc-100 hover:text-white focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:bg-zinc-100/60 disabled:opacity-80 md:col-span-1 ">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        x="0px"
                                        y="0px"
                                        width="32"
                                        height="32"
                                        viewBox="0 0 48 48"
                                    >
                                        <path
                                            fill="#fff"
                                            d="M4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98c-0.001,0,0,0,0,0h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303z"
                                        ></path>
                                        <path
                                            fill="#fff"
                                            d="M4.868,43.803c-0.132,0-0.26-0.052-0.355-0.148c-0.125-0.127-0.174-0.312-0.127-0.483l2.639-9.636c-1.636-2.906-2.499-6.206-2.497-9.556C4.532,13.238,13.273,4.5,24.014,4.5c5.21,0.002,10.105,2.031,13.784,5.713c3.679,3.683,5.704,8.577,5.702,13.781c-0.004,10.741-8.746,19.48-19.486,19.48c-3.189-0.001-6.344-0.788-9.144-2.277l-9.875,2.589C4.953,43.798,4.911,43.803,4.868,43.803z"
                                        ></path>
                                        <path
                                            fill="#cfd8dc"
                                            d="M24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5 M24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974 M24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974 M24.014,4C24.014,4,24.014,4,24.014,4C12.998,4,4.032,12.962,4.027,23.979c-0.001,3.367,0.849,6.685,2.461,9.622l-2.585,9.439c-0.094,0.345,0.002,0.713,0.254,0.967c0.19,0.192,0.447,0.297,0.711,0.297c0.085,0,0.17-0.011,0.254-0.033l9.687-2.54c2.828,1.468,5.998,2.243,9.197,2.244c11.024,0,19.99-8.963,19.995-19.98c0.002-5.339-2.075-10.359-5.848-14.135C34.378,6.083,29.357,4.002,24.014,4L24.014,4z"
                                        ></path>
                                        <path
                                            fill="#40c351"
                                            d="M35.176,12.832c-2.98-2.982-6.941-4.625-11.157-4.626c-8.704,0-15.783,7.076-15.787,15.774c-0.001,2.981,0.833,5.883,2.413,8.396l0.376,0.597l-1.595,5.821l5.973-1.566l0.577,0.342c2.422,1.438,5.2,2.198,8.032,2.199h0.006c8.698,0,15.777-7.077,15.78-15.776C39.795,19.778,38.156,15.814,35.176,12.832z"
                                        ></path>
                                        <path
                                            fill="#fff"
                                            fill-rule="evenodd"
                                            d="M19.268,16.045c-0.355-0.79-0.729-0.806-1.068-0.82c-0.277-0.012-0.593-0.011-0.909-0.011c-0.316,0-0.83,0.119-1.265,0.594c-0.435,0.475-1.661,1.622-1.661,3.956c0,2.334,1.7,4.59,1.937,4.906c0.237,0.316,3.282,5.259,8.104,7.161c4.007,1.58,4.823,1.266,5.693,1.187c0.87-0.079,2.807-1.147,3.202-2.255c0.395-1.108,0.395-2.057,0.277-2.255c-0.119-0.198-0.435-0.316-0.909-0.554s-2.807-1.385-3.242-1.543c-0.435-0.158-0.751-0.237-1.068,0.238c-0.316,0.474-1.225,1.543-1.502,1.859c-0.277,0.317-0.554,0.357-1.028,0.119c-0.474-0.238-2.002-0.738-3.815-2.354c-1.41-1.257-2.362-2.81-2.639-3.285c-0.277-0.474-0.03-0.731,0.208-0.968c0.213-0.213,0.474-0.554,0.712-0.831c0.237-0.277,0.316-0.475,0.474-0.791c0.158-0.317,0.079-0.594-0.04-0.831C20.612,19.329,19.69,16.983,19.268,16.045z"
                                            clip-rule="evenodd"
                                        ></path>
                                    </svg>
                                </button>
                            </Link>
                            <Link
                                href={"https://telegram.me/Chatsys"}
                                target="_blank"
                                className="text-sm font-medium text-zinc-400 transition-colors duration-200 ease-in-out hover:text-zinc-700"
                            >
                                <button className="focus-visible:ring-ring inline-flex h-11 w-full items-center justify-center whitespace-nowrap rounded-xl border bg-transparent p-1 text-sm font-medium text-zinc-400 shadow-sm transition-colors hover:bg-zinc-100 hover:text-white focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:bg-zinc-100/60 disabled:opacity-80 md:col-span-1 ">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        x="0px"
                                        y="0px"
                                        width="32"
                                        height="32"
                                        viewBox="0 0 48 48"
                                    >
                                        <path
                                            fill="#29b6f6"
                                            d="M24 4A20 20 0 1 0 24 44A20 20 0 1 0 24 4Z"
                                        ></path>
                                        <path
                                            fill="#fff"
                                            d="M33.95,15l-3.746,19.126c0,0-0.161,0.874-1.245,0.874c-0.576,0-0.873-0.274-0.873-0.274l-8.114-6.733 l-3.97-2.001l-5.095-1.355c0,0-0.907-0.262-0.907-1.012c0-0.625,0.933-0.923,0.933-0.923l21.316-8.468 c-0.001-0.001,0.651-0.235,1.126-0.234C33.667,14,34,14.125,34,14.5C34,14.75,33.95,15,33.95,15z"
                                        ></path>
                                        <path
                                            fill="#b0bec5"
                                            d="M23,30.505l-3.426,3.374c0,0-0.149,0.115-0.348,0.12c-0.069,0.002-0.143-0.009-0.219-0.043 l0.964-5.965L23,30.505z"
                                        ></path>
                                        <path
                                            fill="#cfd8dc"
                                            d="M29.897,18.196c-0.169-0.22-0.481-0.26-0.701-0.093L16,26c0,0,2.106,5.892,2.427,6.912 c0.322,1.021,0.58,1.045,0.58,1.045l0.964-5.965l9.832-9.096C30.023,18.729,30.064,18.416,29.897,18.196z"
                                        ></path>
                                    </svg>
                                </button>
                            </Link> */}
                        </div>
                    </div>
                    <div className="hidden md:flex md:gap-10 lg:gap-24 xl:gap-32">
                        <div className="flex flex-col gap-4">
                            <h5 className="text-sm font-semibold text-black">
                                Product
                            </h5>
                            <Link
                                href={"/features"}
                                className="text-sm font-medium text-zinc-400 transition-colors duration-200 ease-in-out hover:text-zinc-700"
                            >
                                Tutorial
                            </Link>
                            <Link
                                href={"/features"}
                                className="text-sm font-medium text-zinc-400 transition-colors duration-200 ease-in-out hover:text-zinc-700"
                            >
                                Features
                            </Link>
                            <Link
                                href={"/pricing"}
                                className="text-sm font-medium text-zinc-400 transition-colors duration-200 ease-in-out hover:text-zinc-700"
                            >
                                Pricing
                            </Link>
                        </div>
                        <div className="flex flex-col gap-4">
                            <h5 className="text-sm font-semibold text-black">
                                Resources
                            </h5>
                            <Link
                                href={"/blogs"}
                                className="text-sm font-medium text-zinc-400 transition-colors duration-200 ease-in-out hover:text-zinc-700"
                            >
                                Blog
                            </Link>
                            <Link
                                href={"/about-us"}
                                className="text-sm font-medium text-zinc-400 transition-colors duration-200 ease-in-out hover:text-zinc-700"
                            >
                                About Us
                            </Link>
                            <Link
                                href={"/faq"}
                                className="text-sm font-medium text-zinc-400 transition-colors duration-200 ease-in-out hover:text-zinc-700"
                            >
                                Frequently Asked Questions
                            </Link>
                        </div>
                        <div className="flex flex-col gap-4">
                            <h5 className="text-sm font-semibold text-black">
                                Help & Support
                            </h5>
                            <Link
                                href={"https://telegram.me/chatsysco"}
                                target="_blank"
                                className="text-sm font-medium text-zinc-400 transition-colors duration-200 ease-in-out hover:text-zinc-700"
                            >
                                Telegram Support
                            </Link>
                            <Link
                                href={"https://calendly.com/chatsysco/30min"}
                                style={{
                                    direction: "ltr",
                                }}
                                className="flex text-sm font-medium text-zinc-400 transition-colors duration-200 ease-in-out hover:text-zinc-700 "
                            >
                                Schedule a Meeting
                                        
                            </Link>
                            <Link
                                href={"mailto:support"}
                                className="text-sm font-medium text-zinc-400 transition-colors duration-200 ease-in-out hover:text-zinc-700"
                            >
                                chatsysco@gmail.com
                            </Link>
                        </div>
                    </div>

                    <div className="w-full flex-col gap-4 md:hidden">
                        <div
                            className="my-2 border-b border-zinc-500/30 p-4 transition-all duration-500"
                            id="basic-heading-one-with-arrow"
                            style={{
                                background:
                                    activeAccordionId === 0
                                        ? "rgb(239, 246, 255)"
                                        : "revert-layer",
                            }}
                            onClick={() => {
                                setActiveAccordionId((s) =>
                                    s === 0 ? null : 0,
                                )
                            }}
                        >
                            <button
                                className="accordion-toggle accordion-active:font-medium accordion-active:text-blue-600 group inline-flex w-full items-center justify-between text-left leading-8 text-gray-900 transition duration-500"
                                aria-controls="basic-collapse-one-with-arrow"
                            >
                                <h5
                                    style={{
                                        color:
                                            activeAccordionId === 0
                                                ? "rgb(37, 99, 235)"
                                                : "unset",
                                    }}
                                >
                                    Product
                                </h5>
                                <svg
                                    style={{
                                        rotate:
                                            activeAccordionId === 0
                                                ? "180deg"
                                                : "0deg",
                                    }}
                                    className="accordion-active:text-blue-600 accordion-active:rotate-180 text-gray-500 transition duration-500 group-hover:text-blue-600"
                                    width="22"
                                    height="22"
                                    viewBox="0 0 22 22"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M16.5 8.25L12.4142 12.3358C11.7475 13.0025 11.4142 13.3358 11 13.3358C10.5858 13.3358 10.2525 13.0025 9.58579 12.3358L5.5 8.25"
                                        stroke="currentColor"
                                        stroke-width="1.6"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    ></path>
                                </svg>
                            </button>
                            <div
                                id="basic-collapse-one-with-arrow"
                                className="accordion-content w-full overflow-hidden pb-4 pt-4 transition-all duration-500"
                                aria-labelledby="basic-heading-one-with-arrow"
                                style={{
                                    maxHeight:
                                        activeAccordionId === 0
                                            ? "250px"
                                            : "0px",
                                    display:
                                        activeAccordionId === 0
                                            ? "block"
                                            : "none",
                                }}
                            >
                                <div className="flex flex-col gap-2">
                                    <Link
                                        href={"/features"}
                                        className="text-sm font-medium text-zinc-400 transition-colors duration-200 ease-in-out hover:text-zinc-700"
                                    >
                                        Tutorial
                                    </Link>
                                    <Link
                                        href={"/features"}
                                        className="text-sm font-medium text-zinc-400 transition-colors duration-200 ease-in-out hover:text-zinc-700"
                                    >
                                        Features
                                    </Link>
                                    <Link
                                        href={"/pricing"}
                                        className="text-sm font-medium text-zinc-400 transition-colors duration-200 ease-in-out hover:text-zinc-700"
                                    >
                                        Pricing
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div
                            className="my-2 border-b border-zinc-500/30 p-4 transition-all duration-500"
                            id="basic-heading-one-with-arrow"
                            style={{
                                background:
                                    activeAccordionId === 1
                                        ? "rgb(239, 246, 255)"
                                        : "revert-layer",
                            }}
                            onClick={() => {
                                setActiveAccordionId((s) =>
                                    s === 1 ? null : 1,
                                )
                            }}
                        >
                            <button
                                className="accordion-toggle accordion-active:font-medium accordion-active:text-blue-600 group inline-flex w-full items-center justify-between text-left leading-8 text-gray-900 transition duration-500"
                                aria-controls="basic-collapse-one-with-arrow"
                            >
                                <h5
                                    style={{
                                        color:
                                            activeAccordionId === 1
                                                ? "rgb(37, 99, 235)"
                                                : "unset",
                                    }}
                                >
                                    Resources
                                </h5>
                                <svg
                                    style={{
                                        rotate:
                                            activeAccordionId === 1
                                                ? "180deg"
                                                : "0deg",
                                    }}
                                    className="accordion-active:text-blue-600 accordion-active:rotate-180 text-gray-500 transition duration-500 group-hover:text-blue-600"
                                    width="22"
                                    height="22"
                                    viewBox="0 0 22 22"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M16.5 8.25L12.4142 12.3358C11.7475 13.0025 11.4142 13.3358 11 13.3358C10.5858 13.3358 10.2525 13.0025 9.58579 12.3358L5.5 8.25"
                                        stroke="currentColor"
                                        stroke-width="1.6"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    ></path>
                                </svg>
                            </button>
                            <div
                                id="basic-collapse-one-with-arrow"
                                className="accordion-content w-full overflow-hidden pb-4 pt-4 transition-all duration-500"
                                aria-labelledby="basic-heading-one-with-arrow"
                                style={{
                                    maxHeight:
                                        activeAccordionId === 1
                                            ? "250px"
                                            : "0px",
                                    display:
                                        activeAccordionId === 1
                                            ? "block"
                                            : "none",
                                }}
                            >
                                <div className="flex flex-col gap-2">
                                    <Link
                                        href={"/blogs"}
                                        className="text-sm font-medium text-zinc-400 transition-colors duration-200 ease-in-out hover:text-zinc-700"
                                    >
                                        Blog
                                    </Link>
                                    <Link
                                        href={"/about-us"}
                                        className="text-sm font-medium text-zinc-400 transition-colors duration-200 ease-in-out hover:text-zinc-700"
                                    >
                                        About Us
                                    </Link>
                                    <Link
                                        href={"/faq"}
                                        className="text-sm font-medium text-zinc-400 transition-colors duration-200 ease-in-out hover:text-zinc-700"
                                    >
                                        Frequently Asked Questions
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div
                            className="my-2 border-b border-zinc-500/30 p-4 transition-all duration-500"
                            id="basic-heading-one-with-arrow"
                            style={{
                                background:
                                    activeAccordionId === 2
                                        ? "rgb(239, 246, 255)"
                                        : "revert-layer",
                            }}
                            onClick={() => {
                                setActiveAccordionId((s) =>
                                    s === 2 ? null : 2,
                                )
                            }}
                        >
                            <button
                                className="accordion-toggle accordion-active:font-medium accordion-active:text-blue-600 group inline-flex w-full items-center justify-between text-left leading-8 text-gray-900 transition duration-500"
                                aria-controls="basic-collapse-one-with-arrow"
                            >
                                <h5
                                    style={{
                                        color:
                                            activeAccordionId === 2
                                                ? "rgb(37, 99, 235)"
                                                : "unset",
                                    }}
                                >
                                    Help & Support
                                </h5>
                                <svg
                                    style={{
                                        rotate:
                                            activeAccordionId === 2
                                                ? "180deg"
                                                : "0deg",
                                    }}
                                    className="accordion-active:text-blue-600 accordion-active:rotate-180 text-gray-500 transition duration-500 group-hover:text-blue-600"
                                    width="22"
                                    height="22"
                                    viewBox="0 0 22 22"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M16.5 8.25L12.4142 12.3358C11.7475 13.0025 11.4142 13.3358 11 13.3358C10.5858 13.3358 10.2525 13.0025 9.58579 12.3358L5.5 8.25"
                                        stroke="currentColor"
                                        stroke-width="1.6"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    ></path>
                                </svg>
                            </button>
                            <div
                                id="basic-collapse-one-with-arrow"
                                className="accordion-content w-full overflow-hidden pb-4 pt-4 transition-all duration-500"
                                aria-labelledby="basic-heading-one-with-arrow"
                                style={{
                                    maxHeight:
                                        activeAccordionId === 2
                                            ? "250px"
                                            : "0px",
                                    display:
                                        activeAccordionId === 2
                                            ? "block"
                                            : "none",
                                }}
                            >
                                <div className="flex flex-col gap-2">
                                    <Link
                                        href={"https://telegram.me/chatsysco"}
                                        target="_blank"
                                        className="text-sm font-medium text-zinc-400 transition-colors duration-200 ease-in-out hover:text-zinc-700"
                                    >
                                        Telegram Support
                                    </Link>
                                    <Link
                                        href={"/"}
                                        className="text-sm font-medium text-zinc-400 transition-colors duration-200 ease-in-out hover:text-zinc-700"
                                    >
                                        chatsysco@gmail.com
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <div>
                <div className="relative p-8">
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            maxWidth: "72rem",
                            width: "100%",
                            height: "2rem",
                            borderRadius: "12.1rem",
                            background:
                                "linear-gradient(91deg, rgb(72 205 255) 0%, rgb(91 100 220) 100%)",
                            filter: "blur(60px)",
                            position: "absolute",
                            bottom: "1rem",
                            left: "50%",
                            transform: "translateX(-50%)",
                        }}
                    ></div>
                    <section className="container mx-auto px-4 2xl:px-20 ">
                        <div className="flex justify-center">
                            <span className=" text-center text-sm text-zinc-400 md:text-start">
                                <span className="font-bold ">2025</span>
                                <span className="ml-2">
                                    All material and intellectual property
                                    rights of this website belong to Chatsys.
                                </span>
                            </span>
                        </div>
                    </section>
                </div>
            </div>
        </footer>
    )
}

export default Footer

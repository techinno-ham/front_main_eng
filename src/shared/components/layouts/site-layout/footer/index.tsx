"use client"
import React, { useState } from "react"
import "./style.css"
import Image from "next/image"
import Link from "next/link"

const Footer = () => {
    let [activeAccordionId, setActiveAccordionId] = useState<number | null>(
        null,
    )
    return (
        // <footer className="footer-main">
        //     <div className="container-medium w-container mx-auto">
        //         <div className="wrapper-section">
        //             <div className="grid-footer">
        //                 <div className="column w-node">
        //                     <Image
        //                         alt="BotPenguin AI Chatbot Maker"
        //                         className="bot-Image"
        //                         width={100}
        //                         height={100}
        //                         src="https://cdn.botpenguin.com/assets/website/header/BotPenguinV1-webp-new.webp"
        //                     />
        //                     <p className="copyright-content mt-3">
        //                         BotPenguin.
        //                     </p>
        //                     <div className="social-container">
        //                         <a target="_blank" className="tw social-btn">
        //                             <Image
        //                                 alt="BotPenguin AI Chatbot Maker"
        //                                 loading="lazy"
        //                                 width={50}
        //                                 height={50}
        //                                 className="footer-logo"
        //                                 src="https://cdn.botpenguin.com/assets/website/images/twitter.svg"
        //                             />
        //                             {/* <span className="material-icons up-arrow">call_made</span> */}
        //                         </a>
        //                         <a target="_blank" className="insta social-btn">
        //                             <Image
        //                                 alt="BotPenguin AI Chatbot Maker"
        //                                 loading="lazy"
        //                                 width={50}
        //                                 height={50}
        //                                 className="footer-logo"
        //                                 src="https://cdn.botpenguin.com/assets/website/images/instagram.svg"
        //                             />
        //                             {/* <span className="material-icons up-arrow">call_made</span> */}
        //                         </a>

        //                         <a target="_blank" className="in social-btn">
        //                             <Image
        //                                 alt="BotPenguin AI Chatbot Maker"
        //                                 loading="lazy"
        //                                 width={50}
        //                                 height={50}
        //                                 className="footer-logo"
        //                                 src="https://cdn.botpenguin.com/assets/website/images/linkdin.svg"
        //                             />
        //                             {/* <span className="material-icons up-arrow">call_made</span> */}
        //                         </a>
        //                     </div>
        //                 </div>
        //                 <div className="column w-node">
        //                     <div className="title-section-footer">
        //                         <p className="paragraph-small-main">
        //                             <strong>محصول</strong>
        //                         </p>
        //                     </div>
        //                     <hr className="list-line"></hr>
        //                     <div className="box-links-footer">
        //                         <a href="/pricing" className="link-footer">
        //                             قیمت‌
        //                         </a>
        //                         <a
        //                             href="/features/gpt-native-engine"
        //                             className="link-footer"
        //                         >
        //                             امنیت
        //                         </a>
        //                         <a
        //                             href="/features/conversation-studio"
        //                             className="link-footer"
        //                         >
        //                             همکاران
        //                         </a>
        //                         <a
        //                             href="https://botpress.com/docs/cloud/getting-started/languages/"
        //                             target="_blank"
        //                             className="link-footer"
        //                         >
        //                             زبان ها
        //                         </a>
        //                     </div>
        //                 </div>
        //                 <div className="column w-node">
        //                     <div className="title-section-footer">
        //                         <p className="paragraph-small-main">
        //                             <strong>منابع </strong>
        //                         </p>
        //                     </div>
        //                     <hr className="list-line"></hr>
        //                     <div className="box-links-footer">
        //                         <a href="/pricing" className="link-footer">
        //                             API
        //                         </a>
        //                         <a
        //                             href="/features/gpt-native-engine"
        //                             className="link-footer"
        //                         >
        //                             تماس با ما
        //                         </a>
        //                         <a
        //                             href="/features/conversation-studio"
        //                             className="link-footer"
        //                         >
        //                             راهنما
        //                         </a>
        //                         <a
        //                             href="https://botpress.com/docs/cloud/getting-started/languages/"
        //                             target="_blank"
        //                             className="link-footer"
        //                         >
        //                             وبلاگ
        //                         </a>
        //                     </div>
        //                 </div>
        //                 <div className="column w-node">
        //                     <div className="title-section-footer">
        //                         <p className="paragraph-small-main">
        //                             <strong>شرکت</strong>
        //                         </p>
        //                     </div>
        //                     <hr className="list-line"></hr>

        //                     <div className="box-links-footer">
        //                         <a href="/pricing" className="link-footer">
        //                             سیاست حفظ حریم خصوصی (Privacy Policy)
        //                         </a>
        //                         <a
        //                             href="/features/gpt-native-engine"
        //                             className="link-footer"
        //                         >
        //                             شرایط خدمات (Terms of Service)
        //                         </a>
        //                         <a
        //                             href="/features/conversation-studio"
        //                             className="link-footer"
        //                         >
        //                             توافقنامه پردازش داده (DPA)
        //                         </a>
        //                         <a
        //                             href="https://botpress.com/docs/cloud/getting-started/languages/"
        //                             target="_blank"
        //                             className="link-footer"
        //                         >
        //                             سیاست کوکی (Cookie Policy)
        //                         </a>
        //                     </div>
        //                 </div>
        //                 {/* <div className="column w-node">
        //       <div className="title-section-footer">
        //         <p className="paragraph-small-main">
        //           <strong>Product</strong>
        //         </p>
        //       </div>
        //       <hr className="list-line"></hr>
        //       <div className="box-links-footer">
        //         <a href="/pricing" className="link-footer">
        //           Pricing
        //         </a>
        //         <a href="/features/gpt-native-engine" className="link-footer">
        //           Engine
        //         </a>
        //         <a href="/features/conversation-studio" className="link-footer">
        //           Studio
        //         </a>
        //         <a
        //           href="https://botpress.com/docs/cloud/getting-started/languages/"
        //           target="_blank"
        //           className="link-footer"
        //         >
        //           Languages
        //         </a>
        //       </div>
        //     </div>
        //     <div className="column w-node">
        //       <div className="title-section-footer">
        //         <p className="paragraph-small-main">
        //           <strong>Product</strong>
        //         </p>
        //       </div>
        //       <hr className="list-line"></hr>
        //       <div className="box-links-footer">
        //         <a href="/pricing" className="link-footer">
        //           Pricing
        //         </a>
        //         <a href="/features/gpt-native-engine" className="link-footer">
        //           Engine
        //         </a>
        //         <a href="/features/conversation-studio" className="link-footer">
        //           Studio
        //         </a>
        //         <a
        //           href="https://botpress.com/docs/cloud/getting-started/languages/"
        //           target="_blank"
        //           className="link-footer"
        //         >
        //           Languages
        //         </a>
        //       </div>
        //     </div> */}
        //             </div>
        //         </div>
        //     </div>
        //     <div className="text-bottom-footer">
        //         <Image
        //             width={20}
        //             height={20}
        //             src="https://assets-global.website-files.com/635c4eeb78332f7971255095/6558efd9ceb72f12e75821b5_check-circle-green.svg"
        //             loading="lazy"
        //             alt=""
        //         />
        //         <div className="text-last-footer">GDPR&nbsp;Compliant</div>
        //         <div className="text-last-footer">© Botpress 2024</div>
        //     </div>
        // </footer>
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
                                            height="60"
                                            width="60"
                                            alt="Logo"
                                        />
                                        <span
                                            className={`mr-2 text-2xl font-bold `}
                                        >
                                            همیار چت
                                        </span>
                                    </div>
                                </Link>
                            </div>
                            <p className="text-center font-medium leading-5 text-zinc-400">
                                چت بات سفارشی برای کسب و کار شما
                            </p>
                        </div>
                        <div className="grid w-full grid-cols-4 gap-4 md:w-auto md:grid-cols-6">
                            <button className="focus-visible:ring-ring col-span-4 inline-flex h-11 items-center justify-center whitespace-nowrap rounded-md bg-zinc-100 px-4 py-1 text-base font-medium text-zinc-900 shadow-sm transition-colors hover:bg-zinc-200/90 focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-80 md:col-span-2 dark:bg-zinc-800 dark:text-zinc-50 dark:hover:bg-zinc-800/80">
                                پشتیبانی
                            </button>
                            <button className="focus-visible:ring-ring inline-flex h-11 items-center justify-center whitespace-nowrap rounded-xl border border-zinc-800 bg-transparent p-3 text-sm font-medium text-zinc-400 shadow-sm transition-colors hover:bg-zinc-800/90 hover:text-white focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:bg-zinc-100/60 disabled:opacity-80 md:col-span-1 dark:border-zinc-800 dark:hover:bg-zinc-800 dark:hover:text-zinc-50">
                                <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="size-6"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                                        fill="currentColor"
                                    ></path>
                                </svg>
                            </button>
                            <button className="focus-visible:ring-ring inline-flex h-11 items-center justify-center whitespace-nowrap rounded-xl border border-zinc-800 bg-transparent p-3 text-sm font-medium text-zinc-400 shadow-sm transition-colors hover:bg-zinc-800/90 hover:text-white focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:bg-zinc-100/60 disabled:opacity-80 md:col-span-1 dark:border-zinc-800 dark:hover:bg-zinc-800 dark:hover:text-zinc-50">
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
                                    className="lucide lucide-instagram size-6"
                                >
                                    <rect
                                        width="20"
                                        height="20"
                                        x="2"
                                        y="2"
                                        rx="5"
                                        ry="5"
                                    ></rect>
                                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                    <line
                                        x1="17.5"
                                        x2="17.51"
                                        y1="6.5"
                                        y2="6.5"
                                    ></line>
                                </svg>
                            </button>
                            <button className="focus-visible:ring-ring inline-flex h-11 items-center justify-center whitespace-nowrap rounded-xl border border-zinc-800 bg-transparent p-3 text-sm font-medium text-zinc-400 shadow-sm transition-colors hover:bg-zinc-800/90 hover:text-white focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:bg-zinc-100/60 disabled:opacity-80 md:col-span-1 dark:border-zinc-800 dark:hover:bg-zinc-800 dark:hover:text-zinc-50">
                                <svg
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="size-6"
                                >
                                    <g>
                                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
                                    </g>
                                </svg>
                            </button>
                            <button className="focus-visible:ring-ring inline-flex h-11 items-center justify-center whitespace-nowrap rounded-xl border border-zinc-800 bg-transparent p-3 text-sm font-medium text-zinc-400 shadow-sm transition-colors hover:bg-zinc-800/90 hover:text-white focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:bg-zinc-100/60 disabled:opacity-80 md:col-span-1 dark:border-zinc-800 dark:hover:bg-zinc-800 dark:hover:text-zinc-50">
                                <svg
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="size-6"
                                >
                                    <title>YouTube Icon</title>
                                    <path d="M23.498 6.186a2.966 2.966 0 00-2.084-2.084C19.654 3.333 12 3.333 12 3.333s-7.654 0-9.414.769A2.966 2.966 0 00.502 6.186C0 8.102 0 12 0 12s0 3.898.502 5.814a2.966 2.966 0 002.084 2.084c1.76.769 9.414.769 9.414.769s7.654 0 9.414-.769a2.966 2.966 0 002.084-2.084C24 15.898 24 12 24 12s0-3.898-.502-5.814zM9.545 15.568v-7.136L15.545 12l-6 3.568z"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div className="hidden md:flex md:gap-10 lg:gap-24 xl:gap-32">
                        <div className="flex flex-col gap-4">
                            <h5 className="text-sm font-semibold text-black">
                                راهنمایی و پشتیبانی
                            </h5>
                            <Link
                                href={"/"}
                                className="text-sm font-medium text-zinc-400 transition-colors duration-200 ease-in-out hover:text-zinc-700"
                            >
                                سوالات متداول
                            </Link>
                            <Link
                                href={"/"}
                                className="text-sm font-medium text-zinc-400 transition-colors duration-200 ease-in-out hover:text-zinc-700"
                            >
                                سوالات متداول
                            </Link>
                            <Link
                                href={"/"}
                                className="text-sm font-medium text-zinc-400 transition-colors duration-200 ease-in-out hover:text-zinc-700"
                            >
                                سوالات متداول
                            </Link>
                        </div>
                        <div className="flex flex-col gap-4">
                            <h5 className="text-sm font-semibold text-black">
                                راه کارها
                            </h5>
                            <Link
                                href={"/"}
                                className="text-sm font-medium text-zinc-400 transition-colors duration-200 ease-in-out hover:text-zinc-700"
                            >
                                سوالات متداول
                            </Link>
                            <Link
                                href={"/"}
                                className="text-sm font-medium text-zinc-400 transition-colors duration-200 ease-in-out hover:text-zinc-700"
                            >
                                سوالات متداول
                            </Link>
                            <Link
                                href={"/"}
                                className="text-sm font-medium text-zinc-400 transition-colors duration-200 ease-in-out hover:text-zinc-700"
                            >
                                سوالات متداول
                            </Link>
                            <Link
                                href={"/"}
                                className="text-sm font-medium text-zinc-400 transition-colors duration-200 ease-in-out hover:text-zinc-700"
                            >
                                سوالات متداول
                            </Link>
                        </div>
                        <div className="flex flex-col gap-4">
                            <h5 className="text-sm font-semibold text-black">
                                محصول
                            </h5>
                            <Link
                                href={"/"}
                                className="text-sm font-medium text-zinc-400 transition-colors duration-200 ease-in-out hover:text-zinc-700"
                            >
                                سوالات متداول
                            </Link>
                            <Link
                                href={"/"}
                                className="text-sm font-medium text-zinc-400 transition-colors duration-200 ease-in-out hover:text-zinc-700"
                            >
                                سوالات متداول
                            </Link>
                            <Link
                                href={"/"}
                                className="text-sm font-medium text-zinc-400 transition-colors duration-200 ease-in-out hover:text-zinc-700"
                            >
                                سوالات متداول
                            </Link>
                            <Link
                                href={"/"}
                                className="text-sm font-medium text-zinc-400 transition-colors duration-200 ease-in-out hover:text-zinc-700"
                            >
                                سوالات متداول
                            </Link>
                            <Link
                                href={"/"}
                                className="text-sm font-medium text-zinc-400 transition-colors duration-200 ease-in-out hover:text-zinc-700"
                            >
                                سوالات متداول
                            </Link>
                        </div>
                    </div>
                    <div className="w-full flex-col gap-4 md:hidden">
                        <div
                            className="my-2  border-b border-zinc-500/30  p-4 transition-all duration-500"
                            id="basic-heading-one-with-arrow"
                            style={{
                                background:
                                    activeAccordionId === 0
                                        ? "#eef2ff"
                                        : "revert-layer",
                            }}
                            onClick={() => {
                                setActiveAccordionId((s) =>
                                    s === 0 ? null : 0,
                                )
                            }}
                        >
                            <button
                                className="accordion-toggle accordion-active:font-medium accordion-active:text-indigo-600 group inline-flex w-full items-center justify-between text-left leading-8 text-gray-900 transition duration-500"
                                aria-controls="basic-collapse-one-with-arrow"
                            >
                                <h5
                                    style={{
                                        color:
                                            activeAccordionId === 0
                                                ? "rgb(79 70 229)"
                                                : "unset",
                                    }}
                                >
                                    راهنمایی و پشتیبانی
                                </h5>
                                <svg
                                    style={{
                                        rotate:
                                            activeAccordionId === 0
                                                ? "180deg"
                                                : "0deg",
                                    }}
                                    className="accordion-active:text-indigo-600 accordion-active:rotate-180 text-gray-500 transition duration-500 group-hover:text-indigo-600"
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
                                        href={"/"}
                                        className="text-sm font-medium text-zinc-400 transition-colors duration-200 ease-in-out hover:text-zinc-700"
                                    >
                                        سوالات متداول
                                    </Link>
                                    <Link
                                        href={"/"}
                                        className="text-sm font-medium text-zinc-400 transition-colors duration-200 ease-in-out hover:text-zinc-700"
                                    >
                                        سوالات متداول
                                    </Link>
                                    <Link
                                        href={"/"}
                                        className="text-sm font-medium text-zinc-400 transition-colors duration-200 ease-in-out hover:text-zinc-700"
                                    >
                                        سوالات متداول
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div
                            className="my-2  border-b border-zinc-500/30  p-4 transition-all duration-500"
                            id="basic-heading-one-with-arrow"
                            style={{
                                background:
                                    activeAccordionId === 1
                                        ? "#eef2ff"
                                        : "revert-layer",
                            }}
                            onClick={() => {
                                setActiveAccordionId((s) =>
                                    s === 1 ? null : 1,
                                )
                            }}
                        >
                            <button
                                className="accordion-toggle accordion-active:font-medium accordion-active:text-indigo-600 group inline-flex w-full items-center justify-between text-left leading-8 text-gray-900 transition duration-500"
                                aria-controls="basic-collapse-one-with-arrow"
                            >
                                <h5
                                    style={{
                                        color:
                                            activeAccordionId === 1
                                                ? "rgb(79 70 229)"
                                                : "unset",
                                    }}
                                >
راه کار ها
                                </h5>
                                <svg
                                    style={{
                                        rotate:
                                            activeAccordionId === 1
                                                ? "180deg"
                                                : "0deg",
                                    }}
                                    className="accordion-active:text-indigo-600 accordion-active:rotate-180 text-gray-500 transition duration-500 group-hover:text-indigo-600"
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
                                        href={"/"}
                                        className="text-sm font-medium text-zinc-400 transition-colors duration-200 ease-in-out hover:text-zinc-700"
                                    >
                                        سوالات متداول
                                    </Link>
                                    <Link
                                        href={"/"}
                                        className="text-sm font-medium text-zinc-400 transition-colors duration-200 ease-in-out hover:text-zinc-700"
                                    >
                                        سوالات متداول
                                    </Link>
                                    <Link
                                        href={"/"}
                                        className="text-sm font-medium text-zinc-400 transition-colors duration-200 ease-in-out hover:text-zinc-700"
                                    >
                                        سوالات متداول
                                    </Link>
                                    <Link
                                        href={"/"}
                                        className="text-sm font-medium text-zinc-400 transition-colors duration-200 ease-in-out hover:text-zinc-700"
                                    >
                                        سوالات متداول
                                    </Link>
                                    <Link
                                        href={"/"}
                                        className="text-sm font-medium text-zinc-400 transition-colors duration-200 ease-in-out hover:text-zinc-700"
                                    >
                                        سوالات متداول
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div
                            className="my-2  border-b border-zinc-500/30  p-4 transition-all duration-500"
                            id="basic-heading-one-with-arrow"
                            style={{
                                background:
                                    activeAccordionId === 2
                                        ? "#eef2ff"
                                        : "revert-layer",
                            }}
                            onClick={() => {
                                setActiveAccordionId((s) =>
                                    s === 2 ? null : 2,
                                )
                            }}
                        >
                            <button
                                className="accordion-toggle accordion-active:font-medium accordion-active:text-indigo-600 group inline-flex w-full items-center justify-between text-left leading-8 text-gray-900 transition duration-500"
                                aria-controls="basic-collapse-one-with-arrow"
                            >
                                <h5
                                    style={{
                                        color:
                                            activeAccordionId === 2
                                                ? "rgb(79 70 229)"
                                                : "unset",
                                    }}
                                >
محصول                                </h5>
                                <svg
                                    style={{
                                        rotate:
                                            activeAccordionId === 2
                                                ? "180deg"
                                                : "0deg",
                                    }}
                                    className="accordion-active:text-indigo-600 accordion-active:rotate-180 text-gray-500 transition duration-500 group-hover:text-indigo-600"
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
                                        href={"/"}
                                        className="text-sm font-medium text-zinc-400 transition-colors duration-200 ease-in-out hover:text-zinc-700"
                                    >
                                        سوالات متداول
                                    </Link>
                                    <Link
                                        href={"/"}
                                        className="text-sm font-medium text-zinc-400 transition-colors duration-200 ease-in-out hover:text-zinc-700"
                                    >
                                        سوالات متداول
                                    </Link>
                                    <Link
                                        href={"/"}
                                        className="text-sm font-medium text-zinc-400 transition-colors duration-200 ease-in-out hover:text-zinc-700"
                                    >
                                        سوالات متداول
                                    </Link>
                                    <Link
                                        href={"/"}
                                        className="text-sm font-medium text-zinc-400 transition-colors duration-200 ease-in-out hover:text-zinc-700"
                                    >
                                        سوالات متداول
                                    </Link>
                                    <Link
                                        href={"/"}
                                        className="text-sm font-medium text-zinc-400 transition-colors duration-200 ease-in-out hover:text-zinc-700"
                                    >
                                        سوالات متداول
                                    </Link>
                                    <Link
                                        href={"/"}
                                        className="text-sm font-medium text-zinc-400 transition-colors duration-200 ease-in-out hover:text-zinc-700"
                                    >
                                        سوالات متداول
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <div>
                <div className="relative p-8">
                <div style={{ 
        display: 'flex',
        justifyContent: 'center',
        maxWidth: '72rem',
        width: '100%',
        height: '2rem',
        borderRadius: '12.1rem',
        background: 'linear-gradient(91deg, rgb(72 205 255) 0%, rgb(91 100 220) 100%)',
        filter: 'blur(60px)',
        position: 'absolute',
        bottom: '1rem',
        left: '50%',
        transform: 'translateX(-50%)'
    }}>
    </div>
                    <section className="container mx-auto px-4 2xl:px-20 ">
                        <div className="flex justify-center">
                            <span className=" text-center text-sm text-zinc-400 md:text-start">
                                <span className="font-bold ">1403</span>
                                <span className="mr-2">
                                    تمامی حقوق مادی و معنوی این سایت متعلق به
                                    همیار چت می‌باشد.
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

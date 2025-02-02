//https://www.framer.com/motion/use-in-view/
"use client"

import Image from "next/image"
import "./style.css"
import { motion, useAnimation, useInView } from "framer-motion"
import { useEffect, useRef } from "react"
import Link from "next/link"
import { ArrowLeft, ArrowLeft2 } from "iconsax-react"

const TryNow = () => {
    const mainRef = useRef(null)
    const isInView = useInView(mainRef, { once: true })

    const animController = useAnimation()

    useEffect(() => {
        if (isInView) {
            animController.start("visible")
        }
    }, [isInView])
    return (
        <section
            ref={mainRef}
            className="section-normal container relative mx-auto h-auto overflow-hidden  px-4  2xl:px-20"
        >
            <div className="bg-cta">
                <img
                    src="https://assets-global.website-files.com/635c4eeb78332f7971255095/6513e01d8db38482a7f26a92_CTA(3).webp"
                    loading="lazy"
                    sizes="100vw"
                    alt="Gradient Blue Light Background"
                    className="image-full-contain"
                />
            </div>
            <motion.div
                variants={{
                    hidden: { opacity: 0, scale: 0.9 },
                    visible: { opacity: 1, scale: 1 },
                }}
                initial="hidden"
                animate={animController}
                transition={{ duration: 1 }}
                className="content-cta"
                // style={{
                //     backgroundColor: "#e5e5f7",
                //     opacity: 0.3,
                //     backgroundImage:
                //         "repeating-radial-gradient( circle at 0 0, transparent 0, #e5e5f7 10px ), repeating-linear-gradient( #444cf755, #444cf7 )",
                // }}
            >
                <div className="wrapper-section width-100pc">
                    <div className="content-cta-main">
                        <div className="head-section">
                            <div className="title-section-footer">
                                <h3 className="text-3xl md:text-4xl">
                                    2 minutes to your first AI-powered assistant
                                    with Hamyar
                                </h3>
                            </div>
                            <div className="description-section-main margin-top-5px">
                                <p className="is-rtl-center-mb mt-3 text-[12px] text-zinc-400 md:text-[16px]">
                                    Easily turn your conversations into golden
                                    <span className="notice-text">
                                        {" "}
                                        sales{" "}
                                    </span>{" "}
                                    opportunities and
                                    <span className="notice-text">
                                        loyal{" "}
                                    </span>{" "}
                                    customers.
                                </p>
                            </div>
                        </div>
                        <div className="flex w-full">
                            <Link href={"/mybots"}>
                                <button
                                    type="button"
                                    className="
                mb-2 me-2 mt-5
                flex items-center justify-start 
                rounded-lg bg-gradient-to-r from-blue-500
                via-blue-600 to-blue-700 px-5
                py-2.5  text-center
                text-sm font-medium text-white shadow-lg hover:bg-gradient-to-br focus:outline-none focus:ring-4 focus:ring-blue-300 "
                                >
                                    Start for Free
                                    <span
                                        aria-hidden="true"
                                        className="mr-1 transform transition-all duration-500 ease-in-out group-hover/cta:translate-x-1"
                                    >
                                        →
                                    </span>
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* <img
                    src="https://assets-global.website-files.com/635c4eeb78332f7971255095/657783e439db29819f44192f_patter-botpress%202.svg"
                    loading="eager"
                    width="700"
                    alt=""
                    className="image-bg-cta"
                /> */}
            </motion.div>
        </section>
    )
}

export default TryNow

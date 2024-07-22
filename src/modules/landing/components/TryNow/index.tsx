//https://www.framer.com/motion/use-in-view/
"use client"

import Image from "next/image"
import "./style.css"
import { motion, useAnimation, useInView } from "framer-motion"
import { useEffect, useRef } from "react"

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
            >
                <div className="wrapper-section width-100pc">
                    <div className="content-cta-main">
                        <div className="head-section">
                            <div className="title-section-footer">
                                <h3 className="text-3xl md:text-5xl">
                                    همین امروز دوره رایگان خود را شروع کنید!
                                </h3>
                            </div>
                            <div className="description-section-main margin-top-5px">
                                <p className="is-rtl-center-mb mt-3 text-[12px] text-zinc-400 md:text-[16px]">
                                    به سادگی مکالمات خود را به فرصت‌های
                                    <span className="notice-text"> طلایی </span>
                                    فروش و مشتریان
                                    <span className="notice-text">
                                        {" "}
                                        وفادار{" "}
                                    </span>
                                    تبدیل کنید.
                                </p>
                            </div>
                        </div>
                        <div className="flex w-full">
                            <button className=" hover:white  rounded-[10px] bg-gradient-to-tr from-[#1d4ed8] to-violet-950 p-3 font-semibold text-zinc-50 backdrop-blur-lg duration-700 hover:saturate-150 focus-visible:outline focus-visible:outline-2  focus-visible:outline-offset-2  focus-visible:outline-white">
                                همین الان رایگان شروع کنید !
                            </button>
                        </div>
                    </div>
                </div>
                <img
                    src="https://assets-global.website-files.com/635c4eeb78332f7971255095/657783e439db29819f44192f_patter-botpress%202.svg"
                    loading="eager"
                    width="700"
                    alt=""
                    className="image-bg-cta"
                />
            </motion.div>
        </section>
    )
}

export default TryNow

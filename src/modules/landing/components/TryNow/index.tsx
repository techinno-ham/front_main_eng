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
            className="section-normal container overflow-hidden container-medium w-container mx-auto"
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
                                <h3 className="heading-style-h3 is-rtl-center-mb">
                                همین امروز دوره رایگان خود را شروع کنید!
                                </h3>
                            </div>
                            <div className="description-section-main margin-top-5px">
                                <p className="paragraph-x-large weight-500 is-rtl-center-mb text-zinc-400">
                                به سادگی مکالمات خود را به فرصت‌های 
                                <span className="notice-text"> طلایی </span>
                                 فروش و مشتریان 
                                 <span className="notice-text"> وفادار </span>
                                  تبدیل کنید.  
                                                              </p>
                            </div>
                        </div>
                        <div className="box-get-started left">
                            <div className="head-get-started">
                                <a
                                    href="https://sso.botpress.cloud/registration"
                                    className="button-primary-old button-cta-1 w-inline-block"
                                >
                                    <div>ساختن چت بات</div>
                                    <div className="box-rotate-rtl"></div>
                                </a>
                            </div>
                            <div className="botton-section margin-top-5px">
                                <p className="text-xs mt-2 text-zinc-400">
                                    بدون هیچ هزینه ای !
                                </p>
                            </div>
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

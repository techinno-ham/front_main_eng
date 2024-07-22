"use client"

import Image from "next/image"
import "./style.css"
import { motion, useAnimation, useInView } from "framer-motion"
import { useEffect, useRef } from "react"
import Link from "next/link"
import { Link1, Link2 } from "iconsax-react"

const FeaturesCards = () => {
    const mainRef = useRef(null)
    const isInView = useInView(mainRef, { once: true })

    const animController = useAnimation()

    useEffect(() => {
        if (isInView) {
            animController.start("visible")
        }
    }, [isInView])

    return (
        <section className="section-large">
            <div className="bg-global"></div>
            <div className="container relative mx-auto h-auto overflow-hidden  px-4  2xl:px-20">
                <div className="wrapper-section position-relative">
                    <div
                        data-w-id="6549d020-2168-6fe0-4ebd-d77ea25fb3bd"
                        className="head-vertical"
                    >
                        <motion.div
                            variants={{
                                hidden: { opacity: 0, y: "+10%" },
                                visible: { opacity: 1, y: 0 },
                            }}
                            initial="hidden"
                            animate={animController}
                            transition={{ duration: 1, delay: 0 }}
                            className="title-section-footer"
                        >
                            <p className="text-3xl md:text-6xl">
                                <span>مکالمات در </span>
                                <span className="gradient-h2 is-v2">
                                    مقیاس جهانی&nbsp;
                                </span>
                            </p>
                        </motion.div>
                        <motion.div
                            variants={{
                                hidden: { opacity: 0, y: "+10%" },
                                visible: { opacity: 1, y: 0 },
                            }}
                            initial="hidden"
                            animate={animController}
                            transition={{ duration: 1, delay: 0.3 }}
                            className="description-section-main margin-top-24px max-w-85"
                        >
                            <p className="mt-1 text-[12px] md:mt-3 md:text-[16px]">
                                یک بار ساخته شود. در هر کانال و در هر زبان مقیاس
                                داده شود.
                            </p>
                        </motion.div>
                    </div>
                    <div
                        ref={mainRef}
                        data-w-id="5f05bd1f-8b92-a2cc-ffb8-7a9d6e921963"
                        className="grid-global"
                    >
                        <motion.div
                            variants={{
                                hidden: { opacity: 0, y: "+10%" },
                                visible: { opacity: 1, y: 0 },
                            }}
                            initial="hidden"
                            animate={animController}
                            transition={{ duration: 1, delay: 0.8 }}
                            id="w-node-_0d659433-b36c-e7ea-0881-de8785692c45-6e09f0d4"
                            className="box-card-global _1"
                        >
                            <div className="card-global _1">
                                <div className="head-global">
                                    <div className="head-section">
                                        <div className="box-rotate-rtl">
                                            <div className="icon-global">
                                                <Image
                                                    src="https://assets-global.website-files.com/63dc0d3315e91c8108842079/63dc0d3315e91c1b4d8422aa_bar-chart.svg"
                                                    loading="lazy"
                                                    width={50}
                                                    height={50}
                                                    alt="Chart Icon"
                                                />
                                            </div>
                                        </div>
                                        <div className="title-section-footer margin-top-34ox">
                                            <p className="paragraph-normal color-purple-1">
                                                داده ها
                                            </p>
                                        </div>
                                        <div className="content-card-global">
                                            <div className="title-section-footer">
                                                <p className="pt-1 text-lg font-medium md:text-xl">
                                                    داده ها را جمع‌آوری کرده و
                                                    به طور پیوسته بهبود بخشید.
                                                </p>
                                            </div>
                                            <div className="description-section-main">
                                                <p className="mt-2 text-right text-sm font-normal text-zinc-400">
                                                    با استفاده از بینش‌ها از
                                                    تجزیه و تحلیل، سوءتفاهم و
                                                    تجزیه و تحلیل احساسات ما، به
                                                    طور پیوسته چت‌بات خود را
                                                    بهبود بخشید
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="button-section">
                                        <Link href={"/auth/register"}>
                                            <div className="flex items-center gap-1 text-[#6172fc]">
                                                <span>ساخت چت بات رایگان</span>
                                                <Link2
                                                    size="30"
                                                    color="#6172fc"
                                                />
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                                <div className="box-image-global">
                                    <Image
                                        src="https://assets-global.website-files.com/635c4eeb78332f7971255095/6513f94ab8b34f0ba1d9015e_insights.webp"
                                        loading="lazy"
                                        fill
                                        alt="gather insights. Gather insights and continuously improve"
                                        className="card-img-global is-card-1"
                                    />
                                </div>
                            </div>
                        </motion.div>
                        <motion.div
                            variants={{
                                hidden: { opacity: 0, y: "+10%" },
                                visible: { opacity: 1, y: 0 },
                            }}
                            initial="hidden"
                            animate={animController}
                            transition={{ duration: 1, delay: 0.4 }}
                            id="w-node-_922c402a-9cd7-d306-76d8-bb2289ac9a5b-6e09f0d4"
                            className="box-card-global _2"
                        >
                            <div className="card-global _2">
                                <div className="head-global">
                                    <div className="head-section">
                                        <div className="box-rotate-rtl">
                                            <div className="icon-global">
                                                <Image
                                                    src="https://assets-global.website-files.com/63dc0d3315e91c8108842079/63dc0d3315e91c23068422ab_message-circle.svg"
                                                    loading="lazy"
                                                    width={50}
                                                    height={50}
                                                    alt="Chat Icon"
                                                />
                                            </div>
                                        </div>
                                        <div className="title-section-footer margin-top-34ox">
                                            <p className="paragraph-normal color-purple-1">
                                                چت‌ها
                                            </p>
                                        </div>
                                        <div className="content-card-global">
                                            <div className="title-section-footer">
                                                <p className="pt-1 text-lg font-medium md:text-xl">
                                                    <span>
                                                        در هر زبانی چت کنید.
                                                    </span>
                                                </p>
                                            </div>
                                            <div className="description-section-main">
                                                <p className="mt-2 text-right text-sm font-normal text-zinc-400">
                                                    موتور ما به طور خودکار به
                                                    بیش از 100 زبان ترجمه
                                                    می‌کند، بنابراین شما
                                                    می‌توانید چت‌بات خود را به
                                                    صورت جهانی راه‌اندازی کنید.
                                                    به آرزوهای سازمانی خود مانعی
                                                    از نظر زبانی نشوید.&nbsp;
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="button-section">
                                        <Link href={"/auth/register"}>
                                            <div className="flex items-center gap-1 text-[#6172fc]">
                                                <span>ساخت چت بات رایگان</span>
                                                <Link2
                                                    size="30"
                                                    color="#6172fc"
                                                />
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                                <div className="box-image-global flex-center">
                                    <Image
                                        src="https://assets-global.website-files.com/635c4eeb78332f7971255095/6513f8f0af140d429dda79d4_chat.webp"
                                        loading="lazy"
                                        fill
                                        alt="Img of the Chat. Chat in any language"
                                        className="card-img-global"
                                    />
                                </div>
                            </div>
                        </motion.div>
                        <motion.div
                            variants={{
                                hidden: { opacity: 0, y: "+10%" },
                                visible: { opacity: 1, y: 0 },
                            }}
                            initial="hidden"
                            animate={animController}
                            transition={{ duration: 1, delay: 1.2 }}
                            id="w-node-fd3e8155-d77f-bff6-b0cd-7f6091e81b09-6e09f0d4"
                            className="box-card-global _3"
                        >
                            <div className="card-global _3">
                                <div className="head-global">
                                    <div className="head-section">
                                        <div className="box-rotate-rtl">
                                            <div className="icon-global">
                                                <Image
                                                    src="https://assets-global.website-files.com/63dc0d3315e91c8108842079/63dc0d3315e91ce1fc8422ac_mouse-pointer.svg"
                                                    loading="lazy"
                                                    width={50}
                                                    height={50}
                                                    alt="Arrow Icon"
                                                />
                                            </div>
                                        </div>
                                        <div className="title-section-footer margin-top-34ox">
                                            <p className="paragraph-normal color-purple-1">
                                                راه‌اندازی
                                            </p>
                                        </div>
                                        <div className="content-card-global">
                                            <div className="title-section-footer">
                                                <p className="pt-1 text-lg font-medium md:text-xl">
                                                    <span>
                                                        راه‌اندازی با یک کلیک بر
                                                        روی هر کانال
                                                    </span>
                                                </p>
                                            </div>
                                            <div className="description-section-main">
                                                <p className="mt-2 text-right text-sm font-normal text-zinc-400">
                                                    در یک کانال متوقف نشوید. با
                                                    یک کلیک به تمام کانال‌های ما
                                                    راه‌اندازی کنید تا با
                                                    کاربران خود در محیطی که
                                                    هستند، ارتباط برقرار کنید.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="button-section">
                                        <Link href={"/auth/register"}>
                                            <div className="flex items-center gap-1 text-[#6172fc]">
                                                <span>ساخت چت بات رایگان</span>
                                                <Link2
                                                    size="30"
                                                    color="#6172fc"
                                                />
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                                <div className="box-image-global">
                                    <Image
                                        src="https://assets-global.website-files.com/635c4eeb78332f7971255095/6513e0ee7a8d45c43f498058_chanels.webp"
                                        fill
                                        alt="One-click deploy to any Chanal. Logo link grid"
                                        className="card-img-global is-card-3"
                                    />
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FeaturesCards

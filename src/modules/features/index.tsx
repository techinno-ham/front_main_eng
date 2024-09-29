//https://pagedone.io/blocks/full-pages/about-us-page
//https://www.freepik.com/free-vector/teamwork-concept-landing-page_5155714.htm#fromView=search&page=1&position=2&uuid=f77b3277-49b0-4378-81f7-8d9417bf6546
"use client"

import React, { useRef, useState } from "react"
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"

// Import Swiper styles
import "swiper/css"
import "swiper/css/effect-creative"
import Link from "next/link"

// import required modules

const Features = () => {
    return (
        <>
            <div className="w-full px-4 pt-10">
                <div className="mx-auto mb-[60px] max-w-[510px] text-center">
                    <span className="text-primary mb-2 block text-lg font-semibold">
                        درباره ما
                    </span>
                    <h1 className="text-dark mb-3 text-3xl font-bold leading-[1.208] sm:text-4xl md:text-[40px] ">
                        با تیم
                        <span
                            style={{
                                textShadow:
                                    "0 3px 8px rgba(77, 243, 255, 0.22)",
                                backgroundImage:
                                    "linear-gradient(360deg, #5154ff, #559fff)",
                                backgroundClip: "text",
                                fontWeight: 700,
                                position: "relative",
                                color: "transparent",
                            }}
                        >
                            &nbsp;همیارچت&nbsp;
                        </span>
                        آشنا شوید
                    </h1>
                </div>
            </div>
            <section className="relative pb-14 lg:pb-24 md:h-[80dvh]">
                <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ">
                    <div className="grid grid-cols-1 gap-9 lg:grid-cols-2">
                    <div className="video-box">
    <video
        src="/videos/1.mp4"  
        className="max-lg:mx-auto"
        autoPlay
        loop
        muted
        playsInline
        alt="About Us tailwind video"
    />
</div>

                        <div className="flex items-center lg:pl-[100px]">
                            <div className="data w-full">
                                <h2 className="font-manrope relative mb-9 text-4xl font-bold text-black max-lg:text-center lg:text-5xl">
                                    آشنایی با ما{" "}
                                </h2>
                                <p className="mx-auto max-w-2xl text-justify text-xl font-normal leading-8 text-gray-500 max-lg:text-center">
                                    ما در همیارچت با افتخار اعلام می‌کنیم که یکی
                                    از اولین استارتاپ ایرانی هستیم که در زمینه
                                    ارائه دستیارهای هوش مصنوعی برای خدمات
                                    مشتریان فعالیت می‌کند. هدف اصلی ما ایجاد
                                    تجربه‌ای بهتر، سریع‌تر و کارآمدتر برای
                                    مشتریان شماست. با بهره‌گیری از آخرین
                                    تکنولوژی‌های هوش مصنوعی و پردازش زبان طبیعی،
                                    ما به کسب‌وکارها کمک می‌کنیم تا ارتباط بهتری
                                    با مشتریان خود برقرار کرده و نیازهای آنها را
                                    به بهترین شکل ممکن پاسخ دهند.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="relative pb-14 lg:pb-24 md:h-[80dvh]">
                <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ">
                    <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-9 ">
                        <div className="flex items-center lg:pr-24">
                            <div className="data w-full">
                                <img
                                    src="/aboutus/2.jpg"
                                    alt="About Us tailwind page"
                                    className="mx-auto mb-9 block lg:hidden"
                                />
                                <h2 className="font-manrope mb-9 text-4xl font-bold text-black max-lg:text-center lg:text-5xl">
                                    مأموریت و ارزش‌ها
                                </h2>
                                <p className="mx-auto max-w-2xl text-justify text-xl font-normal leading-8 text-gray-500 max-lg:text-center">
                                    مأموریت ما در همیارچت تسهیل فرآیند ارتباط با
                                    مشتریان و ارتقاء سطح رضایتمندی آنهاست. ما بر
                                    این باوریم که تکنولوژی باید در خدمت انسان
                                    باشد و به همین دلیل همواره در تلاشیم تا
                                    راه‌حل‌هایی ارائه دهیم که هم کاربرپسند و هم
                                    مؤثر باشند. ارزش‌های ما شامل نوآوری،
                                    مشتری‌مداری، کیفیت و شفافیت است. تیم ما
                                    متعهد به ارائه بهترین خدمات و پشتیبانی به
                                    مشتریان عزیزمان است و همیشه آماده‌ایم تا با
                                    شما همکاری کنیم و نیازهای شما را برآورده
                                    کنیم.
                                </p>
                            </div>
                        </div>
                        <div className="video-box">
    <video
        src="/videos/2.mp4"  
        className="max-lg:mx-auto"
        autoPlay
        loop
        muted
        playsInline
        alt="About Us tailwind video"
    />
</div>
                    </div>
                </div>
            </section>
            <section className="relative pb-14 lg:pb-24 md:h-[80dvh]">
                <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ">
                    <div className="grid grid-cols-1 gap-9 lg:grid-cols-2">
                    <div className="video-box">
    <video
        src="/videos/3.mp4"  
        className="max-lg:mx-auto"
        autoPlay
        loop
        muted
        playsInline
        alt="About Us tailwind video"
    />
</div>

                        <div className="flex items-center lg:pl-[100px]">
                            <div className="data w-full">
                                <h2 className="font-manrope relative mb-9 text-4xl font-bold text-black max-lg:text-center lg:text-5xl">
                                    آشنایی با ما{" "}
                                </h2>
                                <p className="mx-auto max-w-2xl text-justify text-xl font-normal leading-8 text-gray-500 max-lg:text-center">
                                    ما در همیارچت با افتخار اعلام می‌کنیم که یکی
                                    از اولین استارتاپ ایرانی هستیم که در زمینه
                                    ارائه دستیارهای هوش مصنوعی برای خدمات
                                    مشتریان فعالیت می‌کند. هدف اصلی ما ایجاد
                                    تجربه‌ای بهتر، سریع‌تر و کارآمدتر برای
                                    مشتریان شماست. با بهره‌گیری از آخرین
                                    تکنولوژی‌های هوش مصنوعی و پردازش زبان طبیعی،
                                    ما به کسب‌وکارها کمک می‌کنیم تا ارتباط بهتری
                                    با مشتریان خود برقرار کرده و نیازهای آنها را
                                    به بهترین شکل ممکن پاسخ دهند.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Features

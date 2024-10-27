"use client"
import Lottie from "lottie-react"
import LearnLottie from "../../../public/lottie/features/learn.json"
import ConfigLottie from "../../../public/lottie/features/config.json"
import ChatLottie from "../../../public/lottie/features/chat.json"

const Features = () => {
    return (
        <>
            <div className="w-full px-4 pt-10">
                <div className="mx-auto mb-[60px] max-w-[510px] text-center">
                    <span className="text-primary mb-2 block text-lg font-semibold">
                        ویژگی‌ها
                    </span>
                    <h1 className="text-dark mb-3 text-3xl font-bold leading-[1.208] sm:text-xl md:text-[40px] ">
                        امکانات
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
                            &nbsp;پیشرفته&nbsp;
                        </span>
                        همیارچت
                    </h1>
                </div>
            </div>
            <section className="relative pb-14 md:h-[60dvh] lg:pb-24">
                <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ">
                    <div className="grid grid-cols-1 gap-9 lg:grid-cols-2">
                        <div className="video-box">
                            <Lottie
                                animationData={LearnLottie}
                                loop={true}
                                autoPlay={true}
                                rendererSettings={{
                                    preserveAspectRatio: "xMidYMid slice",
                                }}
                            />
                        </div>

                        <div className="flex items-center lg:pl-[100px]">
                            <div className="data w-full">
                                <h4
                                    className=" relative mb-9 text-xl font-medium
                                text-black max-lg:text-center lg:text-3xl
                                 "
                                >
                                    آموزش چت‌بات با داده‌های سفارشی شما
                                </h4>
                                <p className="mx-auto max-w-2xl text-justify text-xl font-normal leading-8 text-gray-500 max-lg:text-center">
                                    در همیارچت، ما امکان آموزش چت‌بات‌ها را با
                                    داده‌های سفارشی شما فراهم کرده‌ایم. این
                                    ویژگی به کسب‌وکارها این اجازه را می‌دهد که
                                    چت‌بات‌ها را بر اساس نیازها و محتوای خاص خود
                                    تنظیم کنند. با استفاده از داده‌های مرتبط،
                                    چت‌بات‌های ما می‌توانند به طور دقیق‌تری به
                                    سوالات مشتریان پاسخ دهند و تعاملاتی مؤثرتر و
                                    شخصی‌سازی‌شده‌تر ارائه دهند. هدف ما این است
                                    که با تقویت توانایی‌های چت‌بات‌های شما،
                                    تجربه مشتریان را بهبود ببخشیم و به شما در
                                    دستیابی به اهداف تجاری‌تان کمک کنیم.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="relative pb-14 md:h-[60dvh] lg:pb-24">
                <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ">
                    <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-9 ">
                        <div className="flex items-center lg:pr-24">
                            <div className="data w-full">
                                <h4 className=" mb-9 text-xl font-medium text-black max-lg:text-center lg:text-3xl">
                                    رابط کاربری کاملاً قابل سفارشی‌سازی
                                </h4>
                                <p className="mx-auto max-w-2xl text-justify text-xl font-normal leading-8 text-gray-500 max-lg:text-center">
                                    در همیارچت، ما به اهمیت تجربه کاربری توجه
                                    ویژه‌ای داریم. به همین دلیل، رابط کاربری
                                    چت‌بات‌های ما به‌طور کامل قابل سفارشی‌سازی
                                    است. شما می‌توانید طراحی، رنگ‌ها و ویژگی‌های
                                    مختلف را به دلخواه خود تنظیم کنید تا با هویت
                                    برند شما همخوانی داشته باشد. هدف ما این است
                                    که کاربران شما در هر تعامل احساس راحتی و
                                    هماهنگی کنند و بتوانند به راحتی به اطلاعات و
                                    خدمات مورد نیاز خود دسترسی پیدا کنند.
                                </p>
                            </div>
                        </div>
                        <div className="order-first lg:order-2 video-box">
                            <Lottie
                                animationData={ConfigLottie}
                                loop={true}
                                autoPlay={true}
                                rendererSettings={{
                                    preserveAspectRatio: "xMidYMid slice",
                                }}
                            />
                        </div>
                    </div>
                </div>
            </section>
            <section className="relative pb-14 md:h-[60dvh] lg:pb-24">
                <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ">
                    <div className="grid grid-cols-1 gap-9 lg:grid-cols-2">
                        <div className="video-box">
                            <Lottie
                                animationData={ChatLottie}
                                loop={true}
                                autoPlay={true}
                                rendererSettings={{
                                    preserveAspectRatio: "xMidYMid slice",
                                }}
                            />
                        </div>

                        <div className="flex items-center lg:pl-[100px]">
                            <div className="data w-full">
                                <h4 className=" relative mb-9 text-xl font-medium text-black max-lg:text-center lg:text-3xl">
                                    پاسخ‌های خودکار به سوالات کاربران با هوش
                                    مصنوعی{" "}
                                </h4>
                                <p className="mx-auto max-w-2xl text-justify text-xl font-normal leading-8 text-gray-500 max-lg:text-center">
                                    ما در همیارچت با افتخار ارائه‌دهنده
                                    سیستم‌هایی هستیم که قادر به ارائه پاسخ‌های
                                    کاملاً خودکار به سوالات کاربران هستند. این
                                    قابلیت به شما این امکان را می‌دهد که در هر
                                    زمان و مکان به مشتریان خود خدمات‌رسانی کنید
                                    و بار کاری تیم پشتیبانی را کاهش دهید. با
                                    تحلیل و پردازش دقیق سوالات کاربران،
                                    چت‌بات‌های ما می‌توانند به سرعت و به دقت به
                                    نیازهای آنان پاسخ دهند و تجربه‌ای سریع و
                                    رضایت‌بخش را برای آنها فراهم کنند.
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

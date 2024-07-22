//https://pagedone.io/blocks/marketing/faq
"use client"

import { useState } from "react"

let qaArray = [
    {
        question: "همیارچت چیست؟",
        answer: "همیارچت یک ابزار هوش مصنوعی پیشرفته است که به کسب‌وکارها امکان می‌دهد ربات‌های پاسخگوی خودکار بسازند. این ربات‌ها قادرند با سرعت و دقت به سوالات مشتریان پاسخ دهند و به این ترتیب، فرآیند پشتیبانی مشتریان را بهبود بخشیده و کارایی تیم پشتیبانی را افزایش دهند. ویژگی‌های کلیدی همیارچت عبارت‌اند از: پشتیبانی دائمی (۲۴/۷)، کاهش بار کاری تیم پشتیبانی، و بهبود تجربه کاربری با پاسخ‌های سریع و دقیق.",
    },
    {
        question: "هزینه و قیمت استفاده از همیارچت به چه شکل است؟",
        answer: "همیارچت پلن‌های قیمتی متنوعی ارائه می‌دهد. با شروع از یک پلن رایگان که امکانات ابتدایی را شامل می‌شود، می‌توانید همیارچت را امتحان کنید و سپس با ارتقاء به پلن‌های پرداختی، به ویژگی‌های پیشرفته‌تری دسترسی پیدا کنید. این انعطاف‌پذیری در قیمت‌گذاری به شما کمک می‌کند به صورت مقرون‌به‌صرفه‌تری از مزایای چت‌بات‌های هوشمند بهره‌مند شوید.",
    },
    {
        question: "چه تعداد همیارچت می‌توانم بسازم؟",
        answer: "تعداد همیارچت‌هایی که می‌توانید بسازید به پلن انتخابی شما بستگی دارد. در پلن‌های رایگان، ممکن است تعداد محدودی چت‌بات ایجاد کنید، در حالی که پلن‌های پرداختی امکان ایجاد تعداد بیشتری را فراهم می‌آورند. این انعطاف‌پذیری به شما کمک می‌کند تا همیارچت را به بهترین شکل با نیازهای کسب‌وکار خود تطبیق دهید.",
    },
    {
        question: "ویژگی‌های همیارچت چیست؟",
        answer: "همیارچت با رابط کاربری ساده و کاربرپسند، امکان ایجاد و مدیریت چت‌بات‌ها بدون نیاز به برنامه‌نویسی را فراهم می‌آورد. ویژگی‌های اصلی شامل آموزش خودکار بر اساس داده‌های ورودی، پاسخگویی به زبان‌های مختلف، یکپارچه‌سازی آسان با پلتفرم‌های دیگر مانند تلگرام و ووکامرس، و قابلیت کراول کردن وب‌سایت برای جمع‌آوری داده‌ها است. این ویژگی‌ها همیارچت را به ابزاری قدرتمند برای بهبود تعامل با مشتری و افزایش کارایی تبدیل می‌کند.",
    },
    {
        question: "چگونه می‌توان همیارچت را سفارشی‌سازی کرد؟",
        answer: "همیارچت امکانات گسترده‌ای برای سفارشی‌سازی فراهم می‌آورد. شما می‌توانید ظاهر چت‌بات، پیام‌های خوشامدگویی، و الگوهای پاسخ‌دهی را تنظیم کنید. همچنین، می‌توانید ماژول‌های خاص صنعتی یا ادغام‌های API را اضافه کنید تا عملکرد چت‌بات خود را بهبود بخشید و آن را به نیازهای خاص خود تطبیق دهید.",
    },
    {
        question: "آیا همیارچت رایگان است؟",
        answer: "بله، همیارچت به شما این امکان را می‌دهد که با ثبت‌نام یک حساب کاربری رایگان، از امکانات ابتدایی پلتفرم بهره‌مند شوید. این حساب شامل دسترسی به ویژگی‌های پایه‌ای است که برای تست و بررسی همیارچت مناسب است. شما می‌توانید بدون هیچ هزینه‌ای همیارچت را امتحان کنید.",
    },
    {
        question: "برای شروع باید چه کار کنم؟",
        answer: "برای شروع، کافی است به وب‌سایت همیارچت مراجعه کنید و ثبت‌نام کنید. سپس می‌توانید همیارچت خود را بسازید و داده‌هایی که می‌خواهید همیارچت با آن‌ها آموزش ببیند، وارد کنید. این کار به همیارچت کمک می‌کند تا پاسخ‌های دقیق‌تر و مفیدتری به کاربران شما ارائه دهد. فرآیند بسیار ساده است و نیازی به دانش فنی پیچیده ندارد.",
    },
    {
        question: "چقدر طول می‌کشد تا همیارچت آموزش ببیند؟",
        answer: "زمان آموزش همیارچت بسیار کم است و معمولاً در عرض چند ثانیه تا چند دقیقه انجام می‌شود، بسته به حجم داده‌هایی که برای آموزش استفاده می‌کنید. این سرعت بالا در آموزش به شما اجازه می‌دهد که به سرعت چت‌بات خود را به‌روزرسانی کنید و پاسخ‌های جدیدی را به کاربران ارائه دهید.",
    },
]

const FAQ = () => {
    let [activeAccordionId, setActiveAccordionId] = useState<number | null>(
        null,
    )
    return (
        <section className="min-h-[900px] py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mb-16">
                    <h6 className="mb-2 text-center text-lg font-medium text-indigo-600">
                        FAQs
                    </h6>
                    <h2 className="font-manrope text-center text-4xl font-bold leading-[3.25rem] text-gray-900">
                        Frequently asked questions
                    </h2>
                </div>

                <div
                    className="accordion-group"
                    data-accordion="default-accordion"
                >
                    {qaArray.map((qa, indx) => {
                        return (
                            <div
                                key={indx}
                                className="accordion accordion-active:bg-indigo-50 active my-2 rounded-2xl border-b border-solid border-gray-200 px-6 py-8 transition-all duration-500 hover:bg-indigo-50"
                                id="basic-heading-one-with-arrow"
                                style={{
                                    background:
                                        activeAccordionId === indx
                                            ? "#eef2ff"
                                            : "revert-layer",
                                }}
                                onClick={() => {
                                    setActiveAccordionId((s) =>
                                        s === indx ? null : indx,
                                    )
                                }}
                            >
                                <button
                                    className="accordion-toggle accordion-active:font-medium accordion-active:text-indigo-600 group inline-flex w-full items-center justify-between text-left leading-8 text-gray-900 transition duration-500 hover:text-indigo-600"
                                    aria-controls="basic-collapse-one-with-arrow"
                                >
                                    <h5
                                        style={{
                                            color:
                                                activeAccordionId === indx
                                                    ? "rgb(79 70 229)"
                                                    : "unset",
                                        }}
                                    >
                                        {qa.question}
                                    </h5>
                                    <svg
                                        style={{
                                            rotate:
                                                activeAccordionId === indx
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
                                    className="accordion-content w-full overflow-hidden px-0 transition-all duration-500"
                                    aria-labelledby="basic-heading-one-with-arrow"
                                    style={{
                                        maxHeight:
                                            activeAccordionId === indx
                                                ? "250px"
                                                : "0px",
                                        opacity:
                                            activeAccordionId === indx ? 1 : 0,
                                    }}
                                >
                                    <p className="text-base leading-6 text-gray-900">
                                        {qa.answer}
                                    </p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default FAQ

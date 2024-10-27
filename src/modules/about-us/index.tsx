//https://pagedone.io/blocks/full-pages/about-us-page
//https://www.freepik.com/free-vector/teamwork-concept-landing-page_5155714.htm#fromView=search&page=1&position=2&uuid=f77b3277-49b0-4378-81f7-8d9417bf6546

import Link from "next/link"

// import required modules

const AboutUs = () => {
    return (
        <>
            <div className="w-full px-4 pt-10">
                <div className="mx-auto mb-[60px] max-w-[510px] text-center">
                    <span className="text-primary mb-2 block text-lg font-semibold">
                        درباره ما
                    </span>
                    <h1 className="text-dark mb-3 text-3xl font-bold leading-[1.208] sm:text-xl md:text-[40px] ">
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
            <section className="relative pb-14 lg:pb-24">
                <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ">
                    <div className="grid grid-cols-1 gap-9 lg:grid-cols-2">
                        <div className="img-box">
                            <img
                                src="/aboutus/1.jpg"
                                alt="About Us tailwind page"
                                className="max-lg:mx-auto"
                            />
                        </div>
                        <div className="flex items-center lg:pl-[100px]">
                            <div className="data w-full">
                                <h4 className=" relative mb-9 text-xl font-medium text-black max-lg:text-center lg:text-3xl">
                                    آشنایی با ما{" "}
                                </h4>
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
            <section className="relative pb-14 lg:pb-24">
                <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ">
                    <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-9 ">
                        <div className="flex items-center lg:pr-24">
                            <div className="data w-full">
                                <img
                                    src="/aboutus/2.jpg"
                                    alt="About Us tailwind page"
                                    className="mx-auto mb-9 block lg:hidden"
                                />
                                <h4 className=" mb-9 text-xl font-medium text-black max-lg:text-center lg:text-3xl">
                                    مأموریت و ارزش‌ها
                                </h4>
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
                        <div className="img-box ">
                            <img
                                src="/aboutus/2.jpg"
                                alt="About Us tailwind page"
                                className="hidden lg:block "
                            />
                        </div>
                    </div>
                </div>
            </section>
            <section className="bg-white py-20">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <h4 className=" mb-14 text-center text-xl lg:text-3xl font-medium text-gray-900">
                        نتایج ما
                    </h4>
                    <div className="flex flex-col gap-5 lg:flex-row lg:justify-between xl:gap-8">
                        <div className="mx-auto w-full rounded-2xl bg-white p-6 shadow-md shadow-gray-100 max-lg:max-w-2xl lg:mx-0 lg:w-1/3">
                            <div className="flex gap-5">
                                <div className="font-manrope text-2xl font-medium text-blue-600">
                                    ۲۴۰٪
                                </div>
                                <div className="flex-1">
                                    <h4 className="mb-2 text-xl font-semibold text-gray-900">
                                        رشد شرکت
                                    </h4>
                                    {/* <p className="text-xs leading-5 text-gray-500">
                                        سفر قابل توجه رشد شرکت ما با نوآوری
                                        مداوم و حرکت به سوی افق‌های جدید موفقیت.
                                    </p> */}
                                </div>
                            </div>
                        </div>
                        <div className="mx-auto w-full rounded-2xl bg-white p-6 shadow-md shadow-gray-100 max-lg:max-w-2xl lg:mx-0 lg:w-1/3">
                            <div className="flex gap-5">
                                <div className="font-manrope text-2xl font-medium text-blue-600">
                                    ۱۷۵+
                                </div>
                                <div className="flex-1">
                                    <h4 className="mb-2 text-xl font-semibold text-gray-900">
                                        مشتریان رضایتمند
                                    </h4>
                                    {/* <p className="text-xs leading-5 text-gray-500">
                                        اعضای بسیار با استعداد تیم ما موتور محرک
                                        pagedone و ستون‌های موفقیت ما هستند.
                                    </p> */}
                                </div>
                            </div>
                        </div>
                        <div className="mx-auto w-full rounded-2xl bg-white p-6 shadow-md shadow-gray-100 max-lg:max-w-2xl lg:mx-0 lg:w-1/3">
                            <div className="flex gap-5">
                                <div className="font-manrope text-2xl font-medium text-blue-600">
                                    ۶۲۵+
                                </div>
                                <div className="flex-1">
                                    <h4 className="mb-2 text-xl font-semibold text-gray-900">
                                        پاسخ‌های تولیدشده در روز
                                    </h4>
                                    {/* <p className="text-xs leading-5 text-gray-500">
                                        ما بیش از ۶۲۵ پروژه در سراسر جهان به
                                        انجام رسانده‌ایم و همچنان به شمارش ادامه
                                        می‌دهیم.
                                    </p> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <section className="py-14 lg:py-24 ">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="mb-24">
                        <h4 className=" mb-6 text-center text-xl lg:text-3xl font-medium text-gray-900">
                            اعضای تیم
                        </h4>
                    </div>

                    <div className="flex flex-col md:flex-row">
                        <div className="group flex w-full flex-wrap items-center gap-8  p-8 transition-all duration-500  lg:flex-nowrap">
                            <div className=" h-64 w-full lg:w-60">
                                <img
                                    src="/aboutus/team/moein-moein-nia.png"
                                    alt="Moein Moein Nia"
                                    className="mx-auto h-full rounded-2xl object-cover lg:mx-0 lg:w-full"
                                />
                            </div>
                            <div className="flex-1 text-center lg:max-w-xs lg:text-left">
                                <div className="mb-5 border-b border-solid border-gray-300 pb-5">
                                    <h6 className="mb-1 text-right text-lg font-semibold text-gray-900">
                                        معین معین نیا
                                    </h6>
                                    <span className="float-right text-sm text-gray-500 group-hover:text-blue-600">
                                        هم‌بنیان‌گذار&nbsp;&nbsp;|&nbsp;&nbsp;Co-Founder
                                    </span>
                                </div>
                                <p className="mb-7 text-right leading-6 text-gray-500">
                                    ما تا نهایت توان خود پیش رفته‌ایم تا همیارچت
                                    را به موفقیت برسانیم.
                                </p>
                                <div className="flex items-center justify-center gap-4 lg:justify-start">
                                    <Link
                                        target="_blank"
                                        href={
                                            "https://www.linkedin.com/in/moeinmn/"
                                        }
                                        className="group  flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-gray-100 text-gray-900 transition-all duration-500 hover:bg-blue-600 hover:text-white"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            x="0px"
                                            y="0px"
                                            width="100"
                                            height="100"
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
                                    </Link>
                                    <Link
                                        target="_blank"
                                        href={
                                            "https://telegram.me/moein_moeinnia"
                                        }
                                        className="group  flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-gray-100 text-gray-900 transition-all duration-500 hover:bg-blue-600 hover:text-white"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            x="0px"
                                            y="0px"
                                            width="100"
                                            height="100"
                                            viewBox="0 0 48 48"
                                        >
                                            <linearGradient
                                                id="BiF7D16UlC0RZ_VqXJHnXa_oWiuH0jFiU0R_gr1"
                                                x1="9.858"
                                                x2="38.142"
                                                y1="9.858"
                                                y2="38.142"
                                                gradientUnits="userSpaceOnUse"
                                            >
                                                <stop
                                                    offset="0"
                                                    stop-color="#33bef0"
                                                ></stop>
                                                <stop
                                                    offset="1"
                                                    stop-color="#0a85d9"
                                                ></stop>
                                            </linearGradient>
                                            <path
                                                fill="url(#BiF7D16UlC0RZ_VqXJHnXa_oWiuH0jFiU0R_gr1)"
                                                d="M44,24c0,11.045-8.955,20-20,20S4,35.045,4,24S12.955,4,24,4S44,12.955,44,24z"
                                            ></path>
                                            <path
                                                d="M10.119,23.466c8.155-3.695,17.733-7.704,19.208-8.284c3.252-1.279,4.67,0.028,4.448,2.113	c-0.273,2.555-1.567,9.99-2.363,15.317c-0.466,3.117-2.154,4.072-4.059,2.863c-1.445-0.917-6.413-4.17-7.72-5.282	c-0.891-0.758-1.512-1.608-0.88-2.474c0.185-0.253,0.658-0.763,0.921-1.017c1.319-1.278,1.141-1.553-0.454-0.412	c-0.19,0.136-1.292,0.935-1.745,1.237c-1.11,0.74-2.131,0.78-3.862,0.192c-1.416-0.481-2.776-0.852-3.634-1.223	C8.794,25.983,8.34,24.272,10.119,23.466z"
                                                opacity=".05"
                                            ></path>
                                            <path
                                                d="M10.836,23.591c7.572-3.385,16.884-7.264,18.246-7.813c3.264-1.318,4.465-0.536,4.114,2.011	c-0.326,2.358-1.483,9.654-2.294,14.545c-0.478,2.879-1.874,3.513-3.692,2.337c-1.139-0.734-5.723-3.754-6.835-4.633	c-0.86-0.679-1.751-1.463-0.71-2.598c0.348-0.379,2.27-2.234,3.707-3.614c0.833-0.801,0.536-1.196-0.469-0.508	c-1.843,1.263-4.858,3.262-5.396,3.625c-1.025,0.69-1.988,0.856-3.664,0.329c-1.321-0.416-2.597-0.819-3.262-1.078	C9.095,25.618,9.075,24.378,10.836,23.591z"
                                                opacity=".07"
                                            ></path>
                                            <path
                                                fill="#fff"
                                                d="M11.553,23.717c6.99-3.075,16.035-6.824,17.284-7.343c3.275-1.358,4.28-1.098,3.779,1.91	c-0.36,2.162-1.398,9.319-2.226,13.774c-0.491,2.642-1.593,2.955-3.325,1.812c-0.833-0.55-5.038-3.331-5.951-3.984	c-0.833-0.595-1.982-1.311-0.541-2.721c0.513-0.502,3.874-3.712,6.493-6.21c0.343-0.328-0.088-0.867-0.484-0.604	c-3.53,2.341-8.424,5.59-9.047,6.013c-0.941,0.639-1.845,0.932-3.467,0.466c-1.226-0.352-2.423-0.772-2.889-0.932	C9.384,25.282,9.81,24.484,11.553,23.717z"
                                            ></path>
                                        </svg>
                                    </Link>
                                    <Link
                                        target="_blank"
                                        href={"mailto:moeinnia@protonmail.com"}
                                        className="group  flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-gray-100 text-gray-900 transition-all duration-500 hover:bg-blue-600 hover:text-white"
                                    >
                                        
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            x="0px"
                                            y="0px"
                                            width="100"
                                            height="100"
                                            viewBox="0 0 48 48"
                                        >
                                            <path
                                                fill="#4caf50"
                                                d="M45,16.2l-5,2.75l-5,4.75L35,40h7c1.657,0,3-1.343,3-3V16.2z"
                                            ></path>
                                            <path
                                                fill="#1e88e5"
                                                d="M3,16.2l3.614,1.71L13,23.7V40H6c-1.657,0-3-1.343-3-3V16.2z"
                                            ></path>
                                            <polygon
                                                fill="#e53935"
                                                points="35,11.2 24,19.45 13,11.2 12,17 13,23.7 24,31.95 35,23.7 36,17"
                                            ></polygon>
                                            <path
                                                fill="#c62828"
                                                d="M3,12.298V16.2l10,7.5V11.2L9.876,8.859C9.132,8.301,8.228,8,7.298,8h0C4.924,8,3,9.924,3,12.298z"
                                            ></path>
                                            <path
                                                fill="#fbc02d"
                                                d="M45,12.298V16.2l-10,7.5V11.2l3.124-2.341C38.868,8.301,39.772,8,40.702,8h0 C43.076,8,45,9.924,45,12.298z"
                                            ></path>
                                        </svg>
                                       
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="group flex w-full flex-col flex-wrap items-center gap-8 p-8 transition-all duration-500 md:flex-row lg:flex-nowrap">
                            <div className=" h-64 w-full max-lg:mx-auto max-lg:max-w-[204px] lg:w-60">
                                <img
                                    src="/aboutus/team/mahdiyar-jafari.png"
                                    alt="image"
                                    className="mx-auto h-full rounded-2xl object-cover lg:mx-0 lg:w-full"
                                />
                            </div>
                            <div className="flex flex-1 flex-col justify-between text-center lg:max-w-xs lg:text-left">
                                <div className="mb-5 border-b border-solid border-gray-300 pb-5">
                                    <h6 className="mb-1 text-right text-lg font-semibold text-gray-900">
                                        مهدیار جعفری
                                    </h6>
                                    <span className="float-right text-sm text-gray-500 group-hover:text-blue-600">
                                        هم‌بنیان‌گذار&nbsp;&nbsp;|&nbsp;&nbsp;Co-Founder
                                    </span>
                                </div>
                                <p className="mb-7 text-right leading-6 text-gray-500">
                                    ما تا نهایت توان خود پیش رفته‌ایم تا همیارچت
                                    را به موفقیت برسانیم.
                                </p>
                                <div className="flex items-center justify-center gap-4 lg:justify-start">
                                    <Link
                                        target="_blank"
                                        href={
                                            "https://www.linkedin.com/in/mahdiyar-jafari"
                                        }
                                        className="group  flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-gray-100 text-gray-900 transition-all duration-500 hover:bg-blue-600 hover:text-white"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            x="0px"
                                            y="0px"
                                            width="100"
                                            height="100"
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
                                    </Link>
                                    <Link
                                        target="_blank"
                                        href={
                                            "https://telegram.me/mahdiyarjafari"
                                        }
                                        className="group  flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-gray-100 text-gray-900 transition-all duration-500 hover:bg-blue-600 hover:text-white"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            x="0px"
                                            y="0px"
                                            width="100"
                                            height="100"
                                            viewBox="0 0 48 48"
                                        >
                                            <linearGradient
                                                id="BiF7D16UlC0RZ_VqXJHnXa_oWiuH0jFiU0R_gr1"
                                                x1="9.858"
                                                x2="38.142"
                                                y1="9.858"
                                                y2="38.142"
                                                gradientUnits="userSpaceOnUse"
                                            >
                                                <stop
                                                    offset="0"
                                                    stop-color="#33bef0"
                                                ></stop>
                                                <stop
                                                    offset="1"
                                                    stop-color="#0a85d9"
                                                ></stop>
                                            </linearGradient>
                                            <path
                                                fill="url(#BiF7D16UlC0RZ_VqXJHnXa_oWiuH0jFiU0R_gr1)"
                                                d="M44,24c0,11.045-8.955,20-20,20S4,35.045,4,24S12.955,4,24,4S44,12.955,44,24z"
                                            ></path>
                                            <path
                                                d="M10.119,23.466c8.155-3.695,17.733-7.704,19.208-8.284c3.252-1.279,4.67,0.028,4.448,2.113	c-0.273,2.555-1.567,9.99-2.363,15.317c-0.466,3.117-2.154,4.072-4.059,2.863c-1.445-0.917-6.413-4.17-7.72-5.282	c-0.891-0.758-1.512-1.608-0.88-2.474c0.185-0.253,0.658-0.763,0.921-1.017c1.319-1.278,1.141-1.553-0.454-0.412	c-0.19,0.136-1.292,0.935-1.745,1.237c-1.11,0.74-2.131,0.78-3.862,0.192c-1.416-0.481-2.776-0.852-3.634-1.223	C8.794,25.983,8.34,24.272,10.119,23.466z"
                                                opacity=".05"
                                            ></path>
                                            <path
                                                d="M10.836,23.591c7.572-3.385,16.884-7.264,18.246-7.813c3.264-1.318,4.465-0.536,4.114,2.011	c-0.326,2.358-1.483,9.654-2.294,14.545c-0.478,2.879-1.874,3.513-3.692,2.337c-1.139-0.734-5.723-3.754-6.835-4.633	c-0.86-0.679-1.751-1.463-0.71-2.598c0.348-0.379,2.27-2.234,3.707-3.614c0.833-0.801,0.536-1.196-0.469-0.508	c-1.843,1.263-4.858,3.262-5.396,3.625c-1.025,0.69-1.988,0.856-3.664,0.329c-1.321-0.416-2.597-0.819-3.262-1.078	C9.095,25.618,9.075,24.378,10.836,23.591z"
                                                opacity=".07"
                                            ></path>
                                            <path
                                                fill="#fff"
                                                d="M11.553,23.717c6.99-3.075,16.035-6.824,17.284-7.343c3.275-1.358,4.28-1.098,3.779,1.91	c-0.36,2.162-1.398,9.319-2.226,13.774c-0.491,2.642-1.593,2.955-3.325,1.812c-0.833-0.55-5.038-3.331-5.951-3.984	c-0.833-0.595-1.982-1.311-0.541-2.721c0.513-0.502,3.874-3.712,6.493-6.21c0.343-0.328-0.088-0.867-0.484-0.604	c-3.53,2.341-8.424,5.59-9.047,6.013c-0.941,0.639-1.845,0.932-3.467,0.466c-1.226-0.352-2.423-0.772-2.889-0.932	C9.384,25.282,9.81,24.484,11.553,23.717z"
                                            ></path>
                                        </svg>
                                    </Link>
                                    <Link
                                        target="_blank"
                                        href={"mailto:mahdiyarjfr@gmail.com"}
                                        className="group  flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-gray-100 text-gray-900 transition-all duration-500 hover:bg-blue-600 hover:text-white"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            x="0px"
                                            y="0px"
                                            width="100"
                                            height="100"
                                            viewBox="0 0 48 48"
                                        >
                                            <path
                                                fill="#4caf50"
                                                d="M45,16.2l-5,2.75l-5,4.75L35,40h7c1.657,0,3-1.343,3-3V16.2z"
                                            ></path>
                                            <path
                                                fill="#1e88e5"
                                                d="M3,16.2l3.614,1.71L13,23.7V40H6c-1.657,0-3-1.343-3-3V16.2z"
                                            ></path>
                                            <polygon
                                                fill="#e53935"
                                                points="35,11.2 24,19.45 13,11.2 12,17 13,23.7 24,31.95 35,23.7 36,17"
                                            ></polygon>
                                            <path
                                                fill="#c62828"
                                                d="M3,12.298V16.2l10,7.5V11.2L9.876,8.859C9.132,8.301,8.228,8,7.298,8h0C4.924,8,3,9.924,3,12.298z"
                                            ></path>
                                            <path
                                                fill="#fbc02d"
                                                d="M45,12.298V16.2l-10,7.5V11.2l3.124-2.341C38.868,8.301,39.772,8,40.702,8h0 C43.076,8,45,9.924,45,12.298z"
                                            ></path>
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
                
            </section> */}
            {/* <section className=" bg-gray-50 py-14 lg:py-24">
                <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="mb-16 rounded-full">
                        <h4 className=" text-center text-xl font-medium text-gray-900">
                            بازخورد کاربران ما
                        </h2>
                    </div>
                    <Swiper
                        slidesPerView={2}
                        spaceBetween={30}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <div className="relative mb-20">
                                <div className="mx-auto max-w-max lg:max-w-4xl">
                                    <p className="mb-8 text-center text-lg leading-8 text-gray-500">
                                        چند ماه است که از خدمات مشتریان هوش
                                        مصنوعی همیارچت استفاده می‌کنم و باید
                                        بگویم که واقعاً تجربه‌ی کاریم را بهبود
                                        بخشیده است. تعاملات با مشتریان بسیار
                                        سریع‌تر و مؤثرتر از گذشته شده و رابط
                                        کاربری آسان این پلتفرم به ما این امکان
                                        را داده که به راحتی مدیریت کنیم.
                                        به‌ویژه، ویژگی پاسخگویی خودکار به سوالات
                                        متداول که زمان زیادی را برای تیم
                                        پشتیبانی ما صرفه‌جویی کرده، واقعاً مفید
                                        بوده است.
                                    </p>
                                    <img
                                        src="https://pagedone.io/asset/uploads/1704349534.png"
                                        alt="Emily image"
                                        className="swiper-slide:w-16 swiper-slide:border-blue-600 mx-auto scale-90 rounded-full border transition-all duration-300"
                                    />
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="relative mb-20">
                                <div className="mx-auto max-w-max lg:max-w-4xl">
                                    <p className="mb-8 text-center text-lg leading-8 text-gray-500">
                                        خدمات مشتریان هوش مصنوعی همیارچت به‌طور
                                        قابل توجهی کیفیت ارتباطات ما با مشتریان
                                        را ارتقا داده است. سیستم هوش مصنوعی آنها
                                        به سرعت و دقت به نیازهای مشتریان پاسخ
                                        می‌دهد و ما توانسته‌ایم با صرف زمان
                                        کمتر، رضایت بیشتری را جلب کنیم. ویژگی
                                        تحلیل و گزارش‌گیری دقیق که اطلاعات
                                        ارزشمندی درباره تعاملات با مشتریان ارائه
                                        می‌دهد، یکی از بخش‌های مورد علاقه من
                                        است.
                                    </p>
                                    <img
                                        src="https://pagedone.io/asset/uploads/1704349534.png"
                                        alt="Emily image"
                                        className="swiper-slide:w-16 swiper-slide:border-blue-600 mx-auto scale-90 rounded-full border transition-all duration-300"
                                    />
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="relative mb-20">
                                <div className="mx-auto max-w-max lg:max-w-4xl">
                                    <p className="mb-8 text-center text-lg leading-8 text-gray-500">
                                        استفاده از همیارچت به طور قابل توجهی
                                        کارایی تیم پشتیبانی ما را افزایش داده
                                        است. سیستم هوش مصنوعی پیشرفته آنها به ما
                                        کمک کرده تا به سرعت به درخواست‌های
                                        مشتریان پاسخ دهیم و مشکلات را در کمترین
                                        زمان حل کنیم. ویژگی شخصی‌سازی پاسخ‌ها و
                                        تحلیل دقیق داده‌های مشتریان، به ما این
                                        امکان را داده تا خدمات بهتری ارائه دهیم
                                        و تجربه کاربری بهتری ایجاد کنیم. این
                                        پلتفرم واقعاً به بهبود عملکرد ما کمک
                                        کرده است.
                                    </p>
                                    <img
                                        src="https://pagedone.io/asset/uploads/1704349534.png"
                                        alt="Emily image"
                                        className="swiper-slide:w-16 swiper-slide:border-blue-600 mx-auto scale-90 rounded-full border transition-all duration-300"
                                    />
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </section> */}
        </>
    )
}

export default AboutUs

//https://tailgrids.com/components/pricing-tables

import PricingCard from "./PricingCard"
import "./style.css"

const Pricing = () => {
    return (
        <section className="dark:bg-dark relative z-10 bg-white pb-12 pt-20 lg:pb-[90px] lg:pt-[120px]">
            <div className="container mx-auto">
                <div className="-mx-4 flex flex-wrap">
                    <div className="w-full px-4">
                        <div className="mx-auto mb-[60px] max-w-[510px] text-center">
                            <span className="text-primary mb-2 block text-lg font-semibold">
                                جدول قیمت‌گذاری
                            </span>
                            <h2 className="text-dark mb-3 text-3xl font-bold leading-[1.208] sm:text-4xl md:text-[40px] dark:text-white">
                                قیمت
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
                                    &nbsp;جدید ترین&nbsp;
                                </span>
                                سرویس ها
                            </h2>
                            <p className="text-body-color dark:text-dark-6 text-base">
                                تغییرات زیادی از بخش‌های لورم ایپسوم موجود است،
                                اما بیشتر آن‌ها به نوعی دچار تغییر شده‌اند.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="-mx-4 flex flex-wrap justify-center">
                    <div className="mx-4 flex flex-wrap">
                        <PricingCard
                            order={0}
                            type="پایه"
                            price="۵۹ دلار"
                            subscription="سال"
                            description="مناسب برای:

کسب‌وکارهای کوچک یا افرادی که به قابلیت‌های پایه‌ای دستیار هوش مصنوعی نیاز دارند.
کاربرانی که تازه شروع به استفاده از دستیار هوش مصنوعی کرده‌اند.."
                            buttonText="انتخاب طرح پایه"
                            active={false}
                        >
                            <List>
                                ۱ کاربر</List>
                            <List>
                                تمامی اجزای رابط کاربری</List>
                            <List>
                                دسترسی مادام‌العمر</List>
                            <List>
                                به‌روزرسانی‌های رایگان</List>
                            <List>
                                استفاده در ۱ (یک) پروژه</List>
                            <List>
                                پشتیبانی ۳ ماهه</List>
                        </PricingCard>
                        <PricingCard
                        order={1}
                            type="استاندارد"
                            price="۵۹ دلار"
                            subscription="سال"
                            description="مناسب برای:

کسب‌وکارهای متوسط که به دستیار هوش مصنوعی قوی‌تری نیاز دارند.
کاربرانی که به قابلیت‌های ادغام بیشتر و پشتیبانی سریع‌تر نیاز دارند.."
                            buttonText="انتخاب طرح استاندارد"
                            active={false}
                        >
                            <List>۱ کاربر</List>
                            <List>تمامی اجزای رابط کاربری</List>
                            <List>دسترسی مادام‌العمر</List>
                            <List>به‌روزرسانی‌های رایگان</List>
                            <List>استفاده در ۱ (یک) پروژه</List>
                            <List>پشتیبانی ۳ ماهه</List>
                        </PricingCard>
                        <PricingCard
                        order={2}
                            type="حرفه‌ای"
                            price="۵۹ دلار"
                            subscription="سال"
                            description="مناسب برای:

کسب‌وکارهای بزرگ یا سازمان‌هایی که نیازهای گسترده‌تری در زمینه دستیار هوش مصنوعی دارند.
کاربرانی که نیاز به سفارشی‌سازی بالا و تحلیل‌های دقیق دارند.."
                            buttonText="انتخاب طرح حرفه‌ای"
                            active={true}
                        >
                            <List>۱ کاربر</List>
                            <List>تمامی اجزای رابط کاربری</List>
                            <List>دسترسی مادام‌العمر</List>
                            <List>به‌روزرسانی‌های رایگان</List>
                            <List>استفاده در ۱ (یک) پروژه</List>
                            <List>پشتیبانی ۳ ماهه</List>
                        </PricingCard>
                        <PricingCard
                        order={3}
                            type="سازمانی"
                            price="۵۹ دلار"
                            subscription="سال"
                            description="مناسب برای:

سازمان‌های بزرگ با نیازهای پیچیده در زمینه دستیار هوش مصنوعی.
سازمان‌هایی که به راه‌حل‌های سفارشی و پشتیبانی اختصاصی نیاز دارند."
                            buttonText="انتخاب طرح سازمانی"
                            active={true}
                        >
                            <List>۱ کاربر</List>
                            <List>تمامی اجزای رابط کاربری</List>
                            <List>دسترسی مادام‌العمر</List>
                            <List>به‌روزرسانی‌های رایگان</List>
                            <List>استفاده در ۱ (یک) پروژه</List>
                            <List>پشتیبانی ۳ ماهه</List>
                        </PricingCard>
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 2xl:mt-5">
                    <div className="relative flex flex-col justify-between rounded-xl border border-zinc-200 bg-white p-6 text-zinc-950 shadow-sm dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-50">
                        <div className="flex flex-col gap-3">
                            <div className="flex flex-col space-y-1.5 p-0">
                                <h3 className="text-2xl font-medium leading-none tracking-tight">
                                    Free
                                </h3>
                            </div>
                            <div className="flex flex-col gap-3 p-0">
                                <div className="flex flex-col gap-1">
                                    <span className="text-5xl font-semibold">
                                        <p className="inline-block text-3xl font-normal">
                                            $
                                        </p>
                                        0
                                    </span>
                                    <div className="flex h-10 flex-row items-end justify-between">
                                        <span className="text-zinc-500">
                                            Forever
                                        </span>
                                    </div>
                                </div>
                                <div
                                    data-orientation="horizontal"
                                    role="none"
                                    className="h-[1px] w-full shrink-0 bg-zinc-300 dark:bg-zinc-500"
                                ></div>
                                <ul className="mt-4 flex flex-col gap-4 text-sm font-medium">
                                    <li className="flex flex-row items-start gap-3">
                                        <p className="size-5 text-zinc-700">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="#30a46c"
                                                stroke-width="3"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                className="lucide lucide-check size-5"
                                            >
                                                <path d="M20 6 9 17l-5-5"></path>
                                            </svg>
                                        </p>
                                        <span>20 message credits/month</span>
                                    </li>
                                    <li className="flex flex-row items-start gap-3">
                                        <p className="size-5 text-zinc-700">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="#30a46c"
                                                stroke-width="3"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                className="lucide lucide-check size-5"
                                            >
                                                <path d="M20 6 9 17l-5-5"></path>
                                            </svg>
                                        </p>
                                        <span>1 chatbot</span>
                                    </li>
                                    <li className="flex flex-row items-start gap-3">
                                        <p className="size-5 text-zinc-700">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="#30a46c"
                                                stroke-width="3"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                className="lucide lucide-check size-5"
                                            >
                                                <path d="M20 6 9 17l-5-5"></path>
                                            </svg>
                                        </p>
                                        <span>400,000 characters/chatbot</span>
                                    </li>
                                    <li className="flex flex-row items-start gap-3">
                                        <p className="size-5 text-zinc-700">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="#30a46c"
                                                stroke-width="3"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                className="lucide lucide-check size-5"
                                            >
                                                <path d="M20 6 9 17l-5-5"></path>
                                            </svg>
                                        </p>
                                        <span>1 team member</span>
                                    </li>
                                    <li className="flex flex-row items-start gap-3">
                                        <p className="size-5 text-zinc-700">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="#30a46c"
                                                stroke-width="3"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                className="lucide lucide-check size-5"
                                            >
                                                <path d="M20 6 9 17l-5-5"></path>
                                            </svg>
                                        </p>
                                        <span>
                                            Limit to 10 links to train on
                                        </span>
                                    </li>
                                    <li className="flex flex-row items-start gap-3">
                                        <p className="size-5 text-zinc-700">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="#30a46c"
                                                stroke-width="3"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                className="lucide lucide-check size-5"
                                            >
                                                <path d="M20 6 9 17l-5-5"></path>
                                            </svg>
                                        </p>
                                        <span>Embed on unlimited websites</span>
                                    </li>
                                    <li className="flex flex-row items-start gap-3">
                                        <p className="size-5 text-zinc-700">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="#30a46c"
                                                stroke-width="3"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                className="lucide lucide-check size-5"
                                            >
                                                <path d="M20 6 9 17l-5-5"></path>
                                            </svg>
                                        </p>
                                        <span>Capture leads</span>
                                    </li>
                                    <li className="flex flex-row items-start gap-3">
                                        <p className="size-5 text-zinc-700">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="#30a46c"
                                                stroke-width="3"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                className="lucide lucide-check size-5"
                                            >
                                                <path d="M20 6 9 17l-5-5"></path>
                                            </svg>
                                        </p>
                                        <span>View chat history</span>
                                    </li>
                                    <li className="flex flex-row items-start gap-3">
                                        <p className="size-5 text-zinc-700">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="#30a46c"
                                                stroke-width="3"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                className="lucide lucide-check size-5"
                                            >
                                                <path d="M20 6 9 17l-5-5"></path>
                                            </svg>
                                        </p>
                                        <span>
                                            GPT-4o (most advanced and efficient
                                            model)
                                        </span>
                                    </li>
                                    <p className="text-xs text-zinc-500">
                                        {" "}
                                        Chatbots get deleted after 14 days of
                                        inactivity on the free plan.
                                    </p>
                                </ul>
                            </div>
                        </div>
                        <div className="mt-6">
                            <a href="/dashboard?next=/settings/plans">
                                <button className="bg-white-gradient shadow-button hover:shadow-button-hover hover:bg-white-gradient-hover active:bg-white-gradient-hover disabled:hover:shadow-button disabled:hover:bg-white-gradient inline-flex h-auto w-full items-center justify-center whitespace-nowrap rounded-xl border px-4 py-3 text-sm font-medium text-zinc-950 transition-all duration-100 ease-in-out hover:border-zinc-500 active:border-zinc-400 active:opacity-70 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:border-zinc-200 disabled:hover:text-zinc-950">
                                    Get started
                                </button>
                            </a>
                        </div>
                    </div>
                    <div className="relative flex flex-col justify-between rounded-xl border border-zinc-200 bg-white p-6 text-zinc-950 shadow-sm dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-50">
                        <div className="flex flex-col gap-3">
                            <div className="flex flex-col space-y-1.5 p-0">
                                <h3 className="text-2xl font-medium leading-none tracking-tight">
                                    Hobby
                                </h3>
                            </div>
                            <div className="flex flex-col gap-3 p-0">
                                <div className="flex flex-col gap-1">
                                    <span className="text-5xl font-semibold">
                                        <p className="inline-block text-3xl font-normal">
                                            $
                                        </p>
                                        19
                                    </span>
                                    <div className="flex h-10 flex-row items-end justify-between">
                                        <span className="text-zinc-500">
                                            Per Month
                                        </span>
                                    </div>
                                </div>
                                <div
                                    data-orientation="horizontal"
                                    role="none"
                                    className="h-[1px] w-full shrink-0 bg-zinc-300 dark:bg-zinc-500"
                                ></div>
                                <ul className="mt-4 flex flex-col gap-4 text-sm font-medium">
                                    <div className="flex flex-row gap-1">
                                        <span className="text-sm font-semibold">
                                            Everything in Free, plus...
                                        </span>
                                    </div>
                                    <li className="flex flex-row items-start gap-3">
                                        <p className="size-5 text-zinc-700">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="#30a46c"
                                                stroke-width="3"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                className="lucide lucide-check size-5"
                                            >
                                                <path d="M20 6 9 17l-5-5"></path>
                                            </svg>
                                        </p>
                                        <span>2,000 message credits/month</span>
                                    </li>
                                    <li className="flex flex-row items-start gap-3">
                                        <p className="size-5 text-zinc-700">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="#30a46c"
                                                stroke-width="3"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                className="lucide lucide-check size-5"
                                            >
                                                <path d="M20 6 9 17l-5-5"></path>
                                            </svg>
                                        </p>
                                        <span>2 chatbots</span>
                                    </li>
                                    <li className="flex flex-row items-start gap-3">
                                        <p className="size-5 text-zinc-700">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="#30a46c"
                                                stroke-width="3"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                className="lucide lucide-check size-5"
                                            >
                                                <path d="M20 6 9 17l-5-5"></path>
                                            </svg>
                                        </p>
                                        <span>
                                            11,000,000 characters/chatbot
                                        </span>
                                    </li>
                                    <li className="flex flex-row items-start gap-3">
                                        <p className="size-5 text-zinc-700">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="#30a46c"
                                                stroke-width="3"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                className="lucide lucide-check size-5"
                                            >
                                                <path d="M20 6 9 17l-5-5"></path>
                                            </svg>
                                        </p>
                                        <span>Unlimited links to train on</span>
                                    </li>
                                    <li className="flex flex-row items-start gap-3">
                                        <p className="size-5 text-zinc-700">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="#30a46c"
                                                stroke-width="3"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                className="lucide lucide-check size-5"
                                            >
                                                <path d="M20 6 9 17l-5-5"></path>
                                            </svg>
                                        </p>
                                        <span>API access</span>
                                    </li>
                                    <div className="flex flex-row items-center gap-1">
                                        <li className="flex flex-row items-start gap-3">
                                            <p className="size-5 text-zinc-700">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="24"
                                                    height="24"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="#30a46c"
                                                    stroke-width="3"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    className="lucide lucide-check size-5"
                                                >
                                                    <path d="M20 6 9 17l-5-5"></path>
                                                </svg>
                                            </p>
                                            <span>Integrations</span>
                                        </li>
                                        <button
                                            data-state="closed"
                                            className="hidden lg:block"
                                        >
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
                                                className="lucide lucide-circle-alert h-5 w-5 text-zinc-700"
                                            >
                                                <circle
                                                    cx="12"
                                                    cy="12"
                                                    r="10"
                                                ></circle>
                                                <line
                                                    x1="12"
                                                    x2="12"
                                                    y1="8"
                                                    y2="12"
                                                ></line>
                                                <line
                                                    x1="12"
                                                    x2="12.01"
                                                    y1="16"
                                                    y2="16"
                                                ></line>
                                            </svg>
                                        </button>
                                    </div>
                                </ul>
                            </div>
                        </div>
                        <div className="mt-6">
                            <a href="/dashboard?next=/settings/plans">
                                <button className="bg-white-gradient shadow-button hover:shadow-button-hover hover:bg-white-gradient-hover active:bg-white-gradient-hover disabled:hover:shadow-button disabled:hover:bg-white-gradient inline-flex h-auto w-full items-center justify-center whitespace-nowrap rounded-xl border px-4 py-3 text-sm font-medium text-zinc-950 transition-all duration-100 ease-in-out hover:border-zinc-500 active:border-zinc-400 active:opacity-70 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:border-zinc-200 disabled:hover:text-zinc-950">
                                    Subscribe
                                </button>
                            </a>
                        </div>
                    </div>
                    <div className="relative flex flex-col justify-between rounded-xl border border-zinc-200 bg-white p-6 text-zinc-950 shadow-sm dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-50">
                        <div className="flex flex-col gap-3">
                            <div className="flex flex-col space-y-1.5 p-0">
                                <h3 className="text-2xl font-medium leading-none tracking-tight">
                                    Standard
                                </h3>
                            </div>
                            <div className="flex flex-col gap-3 p-0">
                                <div className="flex flex-col gap-1">
                                    <span className="text-5xl font-semibold">
                                        <p className="inline-block text-3xl font-normal">
                                            $
                                        </p>
                                        99
                                    </span>
                                    <div className="flex h-10 flex-row items-end justify-between">
                                        <span className="text-zinc-500">
                                            Per Month
                                        </span>
                                    </div>
                                </div>
                                <div
                                    data-orientation="horizontal"
                                    role="none"
                                    className="h-[1px] w-full shrink-0 bg-zinc-300 dark:bg-zinc-500"
                                ></div>
                                <ul className="mt-4 flex flex-col gap-4 text-sm font-medium">
                                    <div className="flex flex-row gap-1">
                                        <span className="text-sm font-semibold">
                                            Everything in Hobby, plus...
                                        </span>
                                    </div>
                                    <li className="flex flex-row items-start gap-3">
                                        <p className="size-5 text-zinc-700">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="#30a46c"
                                                stroke-width="3"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                className="lucide lucide-check size-5"
                                            >
                                                <path d="M20 6 9 17l-5-5"></path>
                                            </svg>
                                        </p>
                                        <span>
                                            10,000 message credits/month
                                        </span>
                                    </li>
                                    <li className="flex flex-row items-start gap-3">
                                        <p className="size-5 text-zinc-700">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="#30a46c"
                                                stroke-width="3"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                className="lucide lucide-check size-5"
                                            >
                                                <path d="M20 6 9 17l-5-5"></path>
                                            </svg>
                                        </p>
                                        <span>5 chatbots</span>
                                    </li>
                                    <li className="flex flex-row items-start gap-3">
                                        <p className="size-5 text-zinc-700">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="#30a46c"
                                                stroke-width="3"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                className="lucide lucide-check size-5"
                                            >
                                                <path d="M20 6 9 17l-5-5"></path>
                                            </svg>
                                        </p>
                                        <span>3 team members</span>
                                    </li>
                                    <li className="flex flex-row items-start gap-3">
                                        <p className="size-5 text-zinc-700">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="#30a46c"
                                                stroke-width="3"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                className="lucide lucide-check size-5"
                                            >
                                                <path d="M20 6 9 17l-5-5"></path>
                                            </svg>
                                        </p>
                                        <span>
                                            Option to choose GPT-4 and
                                            GPT-4-Turbo
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="mt-6">
                            <a href="/dashboard?next=/settings/plans">
                                <button className="bg-black-gradient inline-flex h-auto w-full items-center justify-center whitespace-nowrap rounded-xl px-4 py-3 text-sm font-medium text-zinc-50 transition-all duration-100 ease-in-out hover:opacity-85 active:opacity-80 active:saturate-150 disabled:cursor-not-allowed disabled:opacity-60">
                                    Subscribe
                                </button>
                            </a>
                        </div>
                    </div>
                    <div className="relative flex flex-col justify-between rounded-xl border border-zinc-200 bg-white p-6 text-zinc-950 shadow-sm dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-50">
                        <div className="flex flex-col gap-3">
                            <div className="flex flex-col space-y-1.5 p-0">
                                <h3 className="text-2xl font-medium leading-none tracking-tight">
                                    Unlimited
                                </h3>
                            </div>
                            <div className="flex flex-col gap-3 p-0">
                                <div className="flex flex-col gap-1">
                                    <span className="text-5xl font-semibold">
                                        <p className="inline-block text-3xl font-normal">
                                            $
                                        </p>
                                        399
                                    </span>
                                    <div className="flex h-10 flex-row items-end justify-between">
                                        <span className="text-zinc-500">
                                            Per Month
                                        </span>
                                    </div>
                                </div>
                                <div
                                    data-orientation="horizontal"
                                    role="none"
                                    className="h-[1px] w-full shrink-0 bg-zinc-300 dark:bg-zinc-500"
                                ></div>
                                <ul className="mt-4 flex flex-col gap-4 text-sm font-medium">
                                    <div className="flex flex-row gap-1">
                                        <span className="text-sm font-semibold">
                                            Everything in Standard, plus...
                                        </span>
                                    </div>
                                    <li className="flex flex-row items-start gap-3">
                                        <p className="size-5 text-zinc-700">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="#30a46c"
                                                stroke-width="3"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                className="lucide lucide-check size-5"
                                            >
                                                <path d="M20 6 9 17l-5-5"></path>
                                            </svg>
                                        </p>
                                        <span>
                                            40,000 message credits/month
                                            included (Messages over the limit
                                            will use your OpenAI API Key)
                                        </span>
                                    </li>
                                    <li className="flex flex-row items-start gap-3">
                                        <p className="size-5 text-zinc-700">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="#30a46c"
                                                stroke-width="3"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                className="lucide lucide-check size-5"
                                            >
                                                <path d="M20 6 9 17l-5-5"></path>
                                            </svg>
                                        </p>
                                        <span>10 chatbots</span>
                                    </li>
                                    <li className="flex flex-row items-start gap-3">
                                        <p className="size-5 text-zinc-700">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="#30a46c"
                                                stroke-width="3"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                className="lucide lucide-check size-5"
                                            >
                                                <path d="M20 6 9 17l-5-5"></path>
                                            </svg>
                                        </p>
                                        <span>5 team members</span>
                                    </li>
                                    <li className="flex flex-row items-start gap-3">
                                        <p className="size-5 text-zinc-700">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="#30a46c"
                                                stroke-width="3"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                className="lucide lucide-check size-5"
                                            >
                                                <path d="M20 6 9 17l-5-5"></path>
                                            </svg>
                                        </p>
                                        <span>Remove Powered by Chatbase</span>
                                    </li>
                                    <li className="flex flex-row items-start gap-3">
                                        <p className="size-5 text-zinc-700">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="#30a46c"
                                                stroke-width="3"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                className="lucide lucide-check size-5"
                                            >
                                                <path d="M20 6 9 17l-5-5"></path>
                                            </svg>
                                        </p>
                                        <span>Use your own custom domains</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="mt-6">
                            <a href="/dashboard?next=/settings/plans">
                                <button className="bg-white-gradient shadow-button hover:shadow-button-hover hover:bg-white-gradient-hover active:bg-white-gradient-hover disabled:hover:shadow-button disabled:hover:bg-white-gradient inline-flex h-auto w-full items-center justify-center whitespace-nowrap rounded-xl border px-4 py-3 text-sm font-medium text-zinc-950 transition-all duration-100 ease-in-out hover:border-zinc-500 active:border-zinc-400 active:opacity-70 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:border-zinc-200 disabled:hover:text-zinc-950">
                                    Subscribe
                                </button>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="relative mt-14 w-full">
                    <section className="hidden overflow-x-clip md:block">
                        <div className="sticky top-[-1px] z-10 h-0 opacity-0"></div>
                        <header
                            style={{
                                zIndex: 100,
                            }}
                            className="sticky inset-x-0 top-14  bg-white"
                        >
                            <div className="bg-white py-4">
                                <div className="grid grid-cols-9 gap-4 bg-white">
                                    <div className="col-span-2 flex flex-col items-start justify-end gap-3 xl:col-span-2">
                                        <h3 className="ml-1 text-xs font-medium text-zinc-600">
                                            Compare all our plans
                                        </h3>
                                        <div className="flex h-auto max-w-fit flex-row gap-1 rounded-full bg-zinc-100 p-1">
                                            <button className="focus-visible:ring-ring inline-flex h-9 items-center justify-center whitespace-nowrap rounded-full bg-white px-4 py-1 text-xs font-medium text-zinc-950 transition-colors duration-300 ease-in-out hover:bg-white hover:text-zinc-900 hover:opacity-85 focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:text-zinc-600 disabled:opacity-80 lg:px-5 xl:px-7 dark:hover:bg-zinc-800 dark:hover:text-zinc-50">
                                                Monthly
                                            </button>
                                            <button className="focus-visible:ring-ring inline-flex h-9 items-center justify-center whitespace-nowrap rounded-full bg-zinc-100 px-4 py-1 text-xs font-medium text-zinc-500 transition-colors duration-300 ease-in-out hover:bg-zinc-100 hover:text-zinc-900 focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:text-zinc-600 disabled:opacity-80 lg:px-5 xl:px-7 dark:hover:bg-zinc-800 dark:hover:text-zinc-50">
                                                Yearly{" "}
                                            </button>
                                        </div>
                                    </div>
                                    <div className="col-span-7 grid grid-cols-4 gap-4 focus-visible:outline-none focus-visible:ring-0 data-[state=inactive]:hidden">
                                        <div className="flex flex-col items-center justify-center gap-2 rounded-xl px-3 py-2 xl:px-6">
                                            <span 
                                            className="text-2xl font-medium ">
                                            پایه
                                            </span>
                                            <div className="flex flex-col">
                                                <span className="text-xs font-medium text-zinc-600">
                                                    $0&nbsp;Forever
                                                </span>
                                            </div>
                                            <a href="/dashboard?next=/settings/plans">
                                                <button className="bg-white-gradient shadow-button hover:shadow-button-hover hover:bg-white-gradient-hover active:bg-white-gradient-hover disabled:hover:shadow-button disabled:hover:bg-white-gradient inline-flex h-auto w-full items-center justify-center whitespace-nowrap rounded-xl border px-4 py-2 text-sm font-medium text-zinc-950 transition-all duration-100 ease-in-out hover:border-zinc-500 active:border-zinc-400 active:opacity-70 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:border-zinc-200 disabled:hover:text-zinc-950">
                                                    Get started
                                                </button>
                                            </a>
                                        </div>
                                        <div className="flex flex-col items-center justify-center gap-2 rounded-xl px-3 py-2 xl:px-6">
                                            <span 
                                            className="text-2xl font-medium ">
                                            استاندارد
                                            </span>
                                            <div className="flex flex-col">
                                                <span className="text-xs font-medium text-zinc-600">
                                                    $19&nbsp;Per Month
                                                </span>
                                            </div>
                                            <a href="/dashboard?next=/settings/plans">
                                                <button className="bg-white-gradient shadow-button hover:shadow-button-hover hover:bg-white-gradient-hover active:bg-white-gradient-hover disabled:hover:shadow-button disabled:hover:bg-white-gradient inline-flex h-auto w-full items-center justify-center whitespace-nowrap rounded-xl border px-4 py-2 text-sm font-medium text-zinc-950 transition-all duration-100 ease-in-out hover:border-zinc-500 active:border-zinc-400 active:opacity-70 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:border-zinc-200 disabled:hover:text-zinc-950">
                                                    Subscribe
                                                </button>
                                            </a>
                                        </div>
                                        <div className="flex flex-col items-center justify-center gap-2 rounded-xl bg-zinc-50 px-3 py-2 xl:px-6">
                                            <span 
                                            className="text-2xl font-medium pricing-header">
                                            حرفه‌ای
                                            </span>
                                            <div className="flex flex-col">
                                                <span className="text-xs font-medium text-zinc-600">
                                                    $99&nbsp;Per Month
                                                </span>
                                            </div>
                                            <a href="/dashboard?next=/settings/plans">
                                                <button className="bg-white-gradient shadow-button hover:shadow-button-hover hover:bg-white-gradient-hover active:bg-white-gradient-hover disabled:hover:shadow-button disabled:hover:bg-white-gradient inline-flex h-auto w-full items-center justify-center whitespace-nowrap rounded-xl border px-4 py-2 text-sm font-medium text-zinc-950 transition-all duration-100 ease-in-out hover:border-zinc-500 active:border-zinc-400 active:opacity-70 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:border-zinc-200 disabled:hover:text-zinc-950">
                                                    Subscribe
                                                </button>
                                            </a>
                                        </div>
                                        <div className="flex flex-col items-center justify-center gap-2 rounded-xl px-3 py-2 xl:px-6">
                                            <span 
                                            className="text-2xl font-medium pricing-header">
                                            سازمانی
                                            </span>
                                            <div className="flex flex-col">
                                                <span className="text-xs font-medium text-zinc-600">
                                                    $399&nbsp;Per Month
                                                </span>
                                            </div>
                                            <a href="/dashboard?next=/settings/plans">
                                                <button className="bg-white-gradient shadow-button hover:shadow-button-hover hover:bg-white-gradient-hover active:bg-white-gradient-hover disabled:hover:shadow-button disabled:hover:bg-white-gradient inline-flex h-auto w-full items-center justify-center whitespace-nowrap rounded-xl border px-4 py-2 text-sm font-medium text-zinc-950 transition-all duration-100 ease-in-out hover:border-zinc-500 active:border-zinc-400 active:opacity-70 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:border-zinc-200 disabled:hover:text-zinc-950">
                                                    Subscribe
                                                </button>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <span
                                aria-hidden="true"
                                className="block h-[1px] w-full scale-x-100 bg-zinc-200 opacity-100 transition-all duration-300 ease-in-out"
                            ></span>
                        </header>
                        <div className="mt-5 grid grid-cols-9 gap-4 bg-white">
                            <div className="col-span-2 flex flex-col items-start gap-6">
                                <div className="relative flex w-full flex-col">
                                    <span className="sticky top-[12.5rem] flex h-16 w-dvw items-center border-b border-b-zinc-200 bg-white text-xl font-semibold ">
                                        <span className="pricing-header">
                                        تنظیمات

                                        </span>
                                    </span>
                                    <span className="flex h-16 w-full items-center border-b border-b-zinc-200/50 text-sm font-medium text-zinc-900">
                                        Message credits (monthly)
                                    </span>
                                    <span className="flex h-16 w-full items-center border-b border-b-zinc-200/50 text-sm font-medium text-zinc-900">
                                        Chatbots
                                    </span>
                                    <span className="flex h-16 w-full items-center border-b border-b-zinc-200/50 text-sm font-medium text-zinc-900">
                                        Chatbot size (characters)
                                    </span>
                                    <span className="flex h-16 w-full items-center border-b border-b-zinc-200/50 text-sm font-medium text-zinc-900">
                                        Team members
                                    </span>
                                    <span className="flex h-16 w-full items-center border-b border-b-zinc-200/50 text-sm font-medium text-zinc-900">
                                        Embed on unlimited websites
                                    </span>
                                </div>
                                <div className="relative flex w-full flex-col">
                                    <span className="sticky top-[12.5rem] flex h-16 w-dvw items-center border-b border-b-zinc-200 bg-white text-xl font-semibold ">
                                        <span className="pricing-header">
                                        آموزش

                                        </span>
                                    </span>
                                    <span className="flex h-16 w-full items-center border-b border-b-zinc-200/50 text-sm font-medium text-zinc-900">
                                        لینک ها
                                    </span>
                                </div>
                                <div className="relative flex w-full flex-col">
                                    <span className="sticky top-[12.5rem] flex h-16 w-dvw items-center border-b border-b-zinc-200 bg-white text-xl font-semibold ">
                                        <span className="pricing-header">
                                        فعالیت

                                        </span>
                                    </span>
                                    <span className="flex h-16 w-full items-center border-b border-b-zinc-200/50 text-sm font-medium text-zinc-900">
                                    تاریخچه چت
                                    </span>
                                    <span className="flex h-16 w-full items-center border-b border-b-zinc-200/50 text-sm font-medium text-zinc-900">
                                    فرم اطلاعات (به زودی)
                                    </span>
                                    <span className="flex h-16 w-full items-center border-b border-b-zinc-200/50 text-sm font-medium text-zinc-900">
                                    آنالیز
                                    </span>
                                </div>
                                <div className="relative flex w-full flex-col">
                                    <span className="sticky top-[12.5rem] flex h-16 w-dvw items-center border-b border-b-zinc-200 bg-white text-xl font-semibold ">
                                        <span className="pricing-header">
                                        یکپارچه‌سازی‌ها و API

                                        </span>
                                    </span>
                                    <span className="flex h-16 w-full items-center border-b border-b-zinc-200/50 text-sm font-medium text-zinc-900">
                                    دسترسی به API (به زودی)
                                    </span>
                                    {/* <span className="flex h-16 w-full items-center border-b border-b-zinc-200/50 text-sm font-medium text-zinc-900">
                                        Zapier
                                    </span>
                                    <span className="flex h-16 w-full items-center border-b border-b-zinc-200/50 text-sm font-medium text-zinc-900">
                                        Slack
                                    </span>
                                    <span className="flex h-16 w-full items-center border-b border-b-zinc-200/50 text-sm font-medium text-zinc-900">
                                        WhatsApp
                                    </span>
                                    <span className="flex h-16 w-full items-center border-b border-b-zinc-200/50 text-sm font-medium text-zinc-900">
                                        Messenger (Coming soon)
                                    </span> */}
                                </div>
                                <div className="relative flex w-full flex-col">
                                    <span className="sticky top-[12.5rem] flex h-16 w-dvw items-center border-b border-b-zinc-200 bg-white text-xl font-semibold ">
                                        <span className="pricing-header">
                                        مدل هوش مصنوعی

                                        </span>
                                    </span>
                                    <span className="flex h-16 w-full items-center border-b border-b-zinc-200/50 text-sm font-medium text-zinc-900">
                                        GPT-3.5
                                    </span>
                                    <span className="flex h-16 w-full items-center border-b border-b-zinc-200/50 text-sm font-medium text-zinc-900">
                                        GPT-4o (پیشرفته‌ترین و کارآمدترین مدل)
                                    </span>
                                    <span className="flex h-16 w-full items-center border-b border-b-zinc-200/50 text-sm font-medium text-zinc-900">
                                        GPT-4-Turbo
                                    </span>
                                    <span className="flex h-16 w-full items-center border-b border-b-zinc-200/50 text-sm font-medium text-zinc-900">
                                        GPT-4
                                    </span>
                                </div>
                                <div className="relative flex w-full flex-col">
                                    <span className="sticky top-[12.5rem] flex h-16 w-dvw items-center border-b border-b-zinc-200 bg-white text-xl font-semibold ">
                                        <span className="pricing-header">
                                        برندسازی

                                        </span>
                                    </span>
                                    <span className="flex h-16 w-full items-center border-b border-b-zinc-200/50 text-sm font-medium text-zinc-900">
                                    حذف لوگوی همیارچت
                                    </span>
                                    <span className="flex h-16 w-full items-center border-b border-b-zinc-200/50 text-sm font-medium text-zinc-900">
                                    دامنه یا لوگوی سفارشی شما
                                    </span>
                                </div>
                            </div>
                            <div className="col-span-7 grid grid-cols-4 gap-4 focus-visible:outline-none focus-visible:ring-0 data-[state=inactive]:hidden">
                                <div className="flex w-full flex-col gap-6">
                                    <div className="mt-16 flex w-full flex-col">
                                        <span className="flex h-16 w-full items-center justify-center border-b border-b-zinc-200/50 text-sm font-medium text-zinc-500/90">
                                            20
                                        </span>
                                        <span className="flex h-16 w-full items-center justify-center border-b border-b-zinc-200/50 text-sm font-medium text-zinc-500/90">
                                            1
                                        </span>
                                        <span className="flex h-16 w-full items-center justify-center border-b border-b-zinc-200/50 text-sm font-medium text-zinc-500/90">
                                            400,000
                                        </span>
                                        <span className="flex h-16 w-full items-center justify-center border-b border-b-zinc-200/50 text-sm font-medium text-zinc-500/90">
                                            1
                                        </span>
                                        <span className="flex h-16 w-full items-center justify-center border-b border-b-zinc-200/50 text-sm font-medium text-zinc-950">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="#30a46c"
                                                stroke-width="3"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                className="lucide lucide-check size-5"
                                            >
                                                <path d="M20 6 9 17l-5-5"></path>
                                            </svg>
                                        </span>
                                    </div>
                                    <div className="mt-16 flex w-full flex-col">
                                        <span className="flex h-16 w-full items-center justify-center border-b border-b-zinc-200/50 text-sm font-medium text-zinc-500/90">
                                            10 Links
                                        </span>
                                    </div>
                                    <div className="mt-16 flex w-full flex-col">
                                        <span className="flex h-16 w-full items-center justify-center border-b border-b-zinc-200/50 text-sm font-medium text-zinc-950">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="#30a46c"
                                                stroke-width="3"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                className="lucide lucide-check size-5"
                                            >
                                                <path d="M20 6 9 17l-5-5"></path>
                                            </svg>
                                        </span>
                                        <span className="flex h-16 w-full items-center justify-center border-b border-b-zinc-200/50 text-sm font-medium text-zinc-950">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="#30a46c"
                                                stroke-width="3"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                className="lucide lucide-check size-5"
                                            >
                                                <path d="M20 6 9 17l-5-5"></path>
                                            </svg>
                                        </span>
                                        <span className="flex h-16 w-full items-center justify-center border-b border-b-zinc-200/50 text-sm font-medium text-zinc-500/20">
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
                                                className="lucide lucide-x size-5"
                                            >
                                                <path d="M18 6 6 18"></path>
                                                <path d="m6 6 12 12"></path>
                                            </svg>
                                        </span>
                                    </div>
                                    <div className="mt-16 flex w-full flex-col">
                                        <span className="flex h-16 w-full items-center justify-center border-b border-b-zinc-200/50 text-sm font-medium text-zinc-500/20">
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
                                                className="lucide lucide-x size-5"
                                            >
                                                <path d="M18 6 6 18"></path>
                                                <path d="m6 6 12 12"></path>
                                            </svg>
                                        </span>
                                        <span className="flex h-16 w-full items-center justify-center border-b border-b-zinc-200/50 text-sm font-medium text-zinc-500/20">
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
                                                className="lucide lucide-x size-5"
                                            >
                                                <path d="M18 6 6 18"></path>
                                                <path d="m6 6 12 12"></path>
                                            </svg>
                                        </span>
                                        <span className="flex h-16 w-full items-center justify-center border-b border-b-zinc-200/50 text-sm font-medium text-zinc-500/20">
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
                                                className="lucide lucide-x size-5"
                                            >
                                                <path d="M18 6 6 18"></path>
                                                <path d="m6 6 12 12"></path>
                                            </svg>
                                        </span>
                                        <span className="flex h-16 w-full items-center justify-center border-b border-b-zinc-200/50 text-sm font-medium text-zinc-500/20">
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
                                                className="lucide lucide-x size-5"
                                            >
                                                <path d="M18 6 6 18"></path>
                                                <path d="m6 6 12 12"></path>
                                            </svg>
                                        </span>
                                        <span className="flex h-16 w-full items-center justify-center border-b border-b-zinc-200/50 text-sm font-medium text-zinc-500/20">
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
                                                className="lucide lucide-x size-5"
                                            >
                                                <path d="M18 6 6 18"></path>
                                                <path d="m6 6 12 12"></path>
                                            </svg>
                                        </span>
                                    </div>
                                    <div className="mt-16 flex w-full flex-col">
                                        <span className="flex h-16 w-full items-center justify-center border-b border-b-zinc-200/50 text-sm font-medium text-zinc-950">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="#30a46c"
                                                stroke-width="3"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                className="lucide lucide-check size-5"
                                            >
                                                <path d="M20 6 9 17l-5-5"></path>
                                            </svg>
                                        </span>
                                        <span className="flex h-16 w-full items-center justify-center border-b border-b-zinc-200/50 text-sm font-medium text-zinc-950">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="#30a46c"
                                                stroke-width="3"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                className="lucide lucide-check size-5"
                                            >
                                                <path d="M20 6 9 17l-5-5"></path>
                                            </svg>
                                        </span>
                                        <span className="flex h-16 w-full items-center justify-center border-b border-b-zinc-200/50 text-sm font-medium text-zinc-500/20">
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
                                                className="lucide lucide-x size-5"
                                            >
                                                <path d="M18 6 6 18"></path>
                                                <path d="m6 6 12 12"></path>
                                            </svg>
                                        </span>
                                        <span className="flex h-16 w-full items-center justify-center border-b border-b-zinc-200/50 text-sm font-medium text-zinc-500/20">
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
                                                className="lucide lucide-x size-5"
                                            >
                                                <path d="M18 6 6 18"></path>
                                                <path d="m6 6 12 12"></path>
                                            </svg>
                                        </span>
                                    </div>
                                    <div className="mt-16 flex w-full flex-col">
                                        <span className="flex h-16 w-full items-center justify-center border-b border-b-zinc-200/50 text-sm font-medium text-zinc-500/20">
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
                                                className="lucide lucide-x size-5"
                                            >
                                                <path d="M18 6 6 18"></path>
                                                <path d="m6 6 12 12"></path>
                                            </svg>
                                        </span>
                                        <span className="flex h-16 w-full items-center justify-center border-b border-b-zinc-200/50 text-sm font-medium text-zinc-500/20">
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
                                                className="lucide lucide-x size-5"
                                            >
                                                <path d="M18 6 6 18"></path>
                                                <path d="m6 6 12 12"></path>
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                                <div className="flex w-full flex-col gap-6">
                                    <div className="mt-16 flex w-full flex-col">
                                        <span className="flex h-16 w-full items-center justify-center border-b border-b-zinc-200/50 text-sm font-medium text-zinc-500/90">
                                            2000
                                        </span>
                                        <span className="flex h-16 w-full items-center justify-center border-b border-b-zinc-200/50 text-sm font-medium text-zinc-500/90">
                                            2
                                        </span>
                                        <span className="flex h-16 w-full items-center justify-center border-b border-b-zinc-200/50 text-sm font-medium text-zinc-500/90">
                                            11,000,000
                                        </span>
                                        <span className="flex h-16 w-full items-center justify-center border-b border-b-zinc-200/50 text-sm font-medium text-zinc-500/90">
                                            1
                                        </span>
                                        <span className="flex h-16 w-full items-center justify-center border-b border-b-zinc-200/50 text-sm font-medium text-zinc-950">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="#30a46c"
                                                stroke-width="3"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                className="lucide lucide-check size-5"
                                            >
                                                <path d="M20 6 9 17l-5-5"></path>
                                            </svg>
                                        </span>
                                    </div>
                                    <div className="mt-16 flex w-full flex-col">
                                        <span className="flex h-16 w-full items-center justify-center border-b border-b-zinc-200/50 text-sm font-medium text-zinc-500/90">
                                            Unlimited links
                                        </span>
                                    </div>
                                    <div className="mt-16 flex w-full flex-col">
                                        <span className="flex h-16 w-full items-center justify-center border-b border-b-zinc-200/50 text-sm font-medium text-zinc-950">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="#30a46c"
                                                stroke-width="3"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                className="lucide lucide-check size-5"
                                            >
                                                <path d="M20 6 9 17l-5-5"></path>
                                            </svg>
                                        </span>
                                        <span className="flex h-16 w-full items-center justify-center border-b border-b-zinc-200/50 text-sm font-medium text-zinc-950">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="#30a46c"
                                                stroke-width="3"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                className="lucide lucide-check size-5"
                                            >
                                                <path d="M20 6 9 17l-5-5"></path>
                                            </svg>
                                        </span>
                                        <span className="flex h-16 w-full items-center justify-center border-b border-b-zinc-200/50 text-sm font-medium text-zinc-950">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="#30a46c"
                                                stroke-width="3"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                className="lucide lucide-check size-5"
                                            >
                                                <path d="M20 6 9 17l-5-5"></path>
                                            </svg>
                                        </span>
                                    </div>
                                    <div className="mt-16 flex w-full flex-col">
                                        <span className="flex h-16 w-full items-center justify-center border-b border-b-zinc-200/50 text-sm font-medium text-zinc-950">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="#30a46c"
                                                stroke-width="3"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                className="lucide lucide-check size-5"
                                            >
                                                <path d="M20 6 9 17l-5-5"></path>
                                            </svg>
                                        </span>
                                        <span className="flex h-16 w-full items-center justify-center border-b border-b-zinc-200/50 text-sm font-medium text-zinc-950">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="#30a46c"
                                                stroke-width="3"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                className="lucide lucide-check size-5"
                                            >
                                                <path d="M20 6 9 17l-5-5"></path>
                                            </svg>
                                        </span>
                                        <span className="flex h-16 w-full items-center justify-center border-b border-b-zinc-200/50 text-sm font-medium text-zinc-950">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="#30a46c"
                                                stroke-width="3"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                className="lucide lucide-check size-5"
                                            >
                                                <path d="M20 6 9 17l-5-5"></path>
                                            </svg>
                                        </span>
                                        <span className="flex h-16 w-full items-center justify-center border-b border-b-zinc-200/50 text-sm font-medium text-zinc-950">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="#30a46c"
                                                stroke-width="3"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                className="lucide lucide-check size-5"
                                            >
                                                <path d="M20 6 9 17l-5-5"></path>
                                            </svg>
                                        </span>
                                        <span className="flex h-16 w-full items-center justify-center border-b border-b-zinc-200/50 text-sm font-medium text-zinc-950">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="#30a46c"
                                                stroke-width="3"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                className="lucide lucide-check size-5"
                                            >
                                                <path d="M20 6 9 17l-5-5"></path>
                                            </svg>
                                        </span>
                                    </div>
                                    <div className="mt-16 flex w-full flex-col">
                                        <span className="flex h-16 w-full items-center justify-center border-b border-b-zinc-200/50 text-sm font-medium text-zinc-950">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="#30a46c"
                                                stroke-width="3"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                className="lucide lucide-check size-5"
                                            >
                                                <path d="M20 6 9 17l-5-5"></path>
                                            </svg>
                                        </span>
                                        <span className="flex h-16 w-full items-center justify-center border-b border-b-zinc-200/50 text-sm font-medium text-zinc-950">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="#30a46c"
                                                stroke-width="3"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                className="lucide lucide-check size-5"
                                            >
                                                <path d="M20 6 9 17l-5-5"></path>
                                            </svg>
                                        </span>
                                        <span className="flex h-16 w-full items-center justify-center border-b border-b-zinc-200/50 text-sm font-medium text-zinc-500/20">
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
                                                className="lucide lucide-x size-5"
                                            >
                                                <path d="M18 6 6 18"></path>
                                                <path d="m6 6 12 12"></path>
                                            </svg>
                                        </span>
                                        <span className="flex h-16 w-full items-center justify-center border-b border-b-zinc-200/50 text-sm font-medium text-zinc-500/20">
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
                                                className="lucide lucide-x size-5"
                                            >
                                                <path d="M18 6 6 18"></path>
                                                <path d="m6 6 12 12"></path>
                                            </svg>
                                        </span>
                                    </div>
                                    <div className="mt-16 flex w-full flex-col">
                                        <span className="flex h-16 w-full items-center justify-center border-b border-b-zinc-200/50 text-sm font-medium text-zinc-500/20">
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
                                                className="lucide lucide-x size-5"
                                            >
                                                <path d="M18 6 6 18"></path>
                                                <path d="m6 6 12 12"></path>
                                            </svg>
                                        </span>
                                        <span className="flex h-16 w-full items-center justify-center border-b border-b-zinc-200/50 text-sm font-medium text-zinc-500/20">
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
                                                className="lucide lucide-x size-5"
                                            >
                                                <path d="M18 6 6 18"></path>
                                                <path d="m6 6 12 12"></path>
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                                <div className="flex w-full flex-col gap-6">
                                    <div className="mt-16 flex w-full flex-col">
                                        <span className="flex h-16 w-full items-center justify-center border-b border-b-zinc-200/50 bg-zinc-50 text-sm font-medium text-zinc-500/90">
                                            10,000
                                        </span>
                                        <span className="flex h-16 w-full items-center justify-center border-b border-b-zinc-200/50 bg-zinc-50 text-sm font-medium text-zinc-500/90">
                                            5
                                        </span>
                                        <span className="flex h-16 w-full items-center justify-center border-b border-b-zinc-200/50 bg-zinc-50 text-sm font-medium text-zinc-500/90">
                                            11,000,000
                                        </span>
                                        <span className="flex h-16 w-full items-center justify-center border-b border-b-zinc-200/50 bg-zinc-50 text-sm font-medium text-zinc-500/90">
                                            3
                                        </span>
                                        <span className="flex h-16 w-full items-center justify-center border-b border-b-zinc-200/50 bg-zinc-50 text-sm font-medium text-zinc-950">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="#30a46c"
                                                stroke-width="3"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                className="lucide lucide-check size-5"
                                            >
                                                <path d="M20 6 9 17l-5-5"></path>
                                            </svg>
                                        </span>
                                    </div>
                                    <div className="mt-16 flex w-full flex-col">
                                        <span className="flex h-16 w-full items-center justify-center border-b border-b-zinc-200/50 bg-zinc-50 text-sm font-medium text-zinc-500/90">
                                            Unlimited links
                                        </span>
                                    </div>
                                    <div className="mt-16 flex w-full flex-col">
                                        <span className="flex h-16 w-full items-center justify-center border-b border-b-zinc-200/50 bg-zinc-50 text-sm font-medium text-zinc-950">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="#30a46c"
                                                stroke-width="3"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                className="lucide lucide-check size-5"
                                            >
                                                <path d="M20 6 9 17l-5-5"></path>
                                            </svg>
                                        </span>
                                        <span className="flex h-16 w-full items-center justify-center border-b border-b-zinc-200/50 bg-zinc-50 text-sm font-medium text-zinc-950">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="#30a46c"
                                                stroke-width="3"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                className="lucide lucide-check size-5"
                                            >
                                                <path d="M20 6 9 17l-5-5"></path>
                                            </svg>
                                        </span>
                                        <span className="flex h-16 w-full items-center justify-center border-b border-b-zinc-200/50 bg-zinc-50 text-sm font-medium text-zinc-950">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="#30a46c"
                                                stroke-width="3"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                className="lucide lucide-check size-5"
                                            >
                                                <path d="M20 6 9 17l-5-5"></path>
                                            </svg>
                                        </span>
                                    </div>
                                    <div className="mt-16 flex w-full flex-col">
                                        <span className="flex h-16 w-full items-center justify-center border-b border-b-zinc-200/50 bg-zinc-50 text-sm font-medium text-zinc-950">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="#30a46c"
                                                stroke-width="3"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                className="lucide lucide-check size-5"
                                            >
                                                <path d="M20 6 9 17l-5-5"></path>
                                            </svg>
                                        </span>
                                        <span className="flex h-16 w-full items-center justify-center border-b border-b-zinc-200/50 bg-zinc-50 text-sm font-medium text-zinc-950">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="#30a46c"
                                                stroke-width="3"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                className="lucide lucide-check size-5"
                                            >
                                                <path d="M20 6 9 17l-5-5"></path>
                                            </svg>
                                        </span>
                                        <span className="flex h-16 w-full items-center justify-center border-b border-b-zinc-200/50 bg-zinc-50 text-sm font-medium text-zinc-950">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="#30a46c"
                                                stroke-width="3"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                className="lucide lucide-check size-5"
                                            >
                                                <path d="M20 6 9 17l-5-5"></path>
                                            </svg>
                                        </span>
                                        <span className="flex h-16 w-full items-center justify-center border-b border-b-zinc-200/50 bg-zinc-50 text-sm font-medium text-zinc-950">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="#30a46c"
                                                stroke-width="3"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                className="lucide lucide-check size-5"
                                            >
                                                <path d="M20 6 9 17l-5-5"></path>
                                            </svg>
                                        </span>
                                        <span className="flex h-16 w-full items-center justify-center border-b border-b-zinc-200/50 bg-zinc-50 text-sm font-medium text-zinc-950">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="#30a46c"
                                                stroke-width="3"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                className="lucide lucide-check size-5"
                                            >
                                                <path d="M20 6 9 17l-5-5"></path>
                                            </svg>
                                        </span>
                                    </div>
                                    <div className="mt-16 flex w-full flex-col">
                                        <span className="flex h-16 w-full items-center justify-center border-b border-b-zinc-200/50 bg-zinc-50 text-sm font-medium text-zinc-950">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="#30a46c"
                                                stroke-width="3"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                className="lucide lucide-check size-5"
                                            >
                                                <path d="M20 6 9 17l-5-5"></path>
                                            </svg>
                                        </span>
                                        <span className="flex h-16 w-full items-center justify-center border-b border-b-zinc-200/50 bg-zinc-50 text-sm font-medium text-zinc-950">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="#30a46c"
                                                stroke-width="3"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                className="lucide lucide-check size-5"
                                            >
                                                <path d="M20 6 9 17l-5-5"></path>
                                            </svg>
                                        </span>
                                        <span className="flex h-16 w-full items-center justify-center border-b border-b-zinc-200/50 bg-zinc-50 text-sm font-medium text-zinc-950">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="#30a46c"
                                                stroke-width="3"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                className="lucide lucide-check size-5"
                                            >
                                                <path d="M20 6 9 17l-5-5"></path>
                                            </svg>
                                        </span>
                                        <span className="flex h-16 w-full items-center justify-center border-b border-b-zinc-200/50 bg-zinc-50 text-sm font-medium text-zinc-950">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="#30a46c"
                                                stroke-width="3"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                className="lucide lucide-check size-5"
                                            >
                                                <path d="M20 6 9 17l-5-5"></path>
                                            </svg>
                                        </span>
                                    </div>
                                    <div className="mt-16 flex w-full flex-col">
                                        <span className="flex h-16 w-full items-center justify-center border-b border-b-zinc-200/50 bg-zinc-50 text-sm font-medium text-zinc-500/20">
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
                                                className="lucide lucide-x size-5"
                                            >
                                                <path d="M18 6 6 18"></path>
                                                <path d="m6 6 12 12"></path>
                                            </svg>
                                        </span>
                                        <span className="flex h-16 w-full items-center justify-center border-b border-b-zinc-200/50 bg-zinc-50 text-sm font-medium text-zinc-500/20">
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
                                                className="lucide lucide-x size-5"
                                            >
                                                <path d="M18 6 6 18"></path>
                                                <path d="m6 6 12 12"></path>
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                                <div className="flex w-full flex-col gap-6">
                                    <div className="mt-16 flex w-full flex-col">
                                        <span className="flex h-16 w-full items-center justify-center border-b border-b-zinc-200/50 text-sm font-medium text-zinc-500/90">
                                            40,000 + Unlimited with your OpenAI
                                            key
                                        </span>
                                        <span className="flex h-16 w-full items-center justify-center border-b border-b-zinc-200/50 text-sm font-medium text-zinc-500/90">
                                            10
                                        </span>
                                        <span className="flex h-16 w-full items-center justify-center border-b border-b-zinc-200/50 text-sm font-medium text-zinc-500/90">
                                            11,000,000
                                        </span>
                                        <span className="flex h-16 w-full items-center justify-center border-b border-b-zinc-200/50 text-sm font-medium text-zinc-500/90">
                                            5
                                        </span>
                                        <span className="flex h-16 w-full items-center justify-center border-b border-b-zinc-200/50 text-sm font-medium text-zinc-950">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="#30a46c"
                                                stroke-width="3"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                className="lucide lucide-check size-5"
                                            >
                                                <path d="M20 6 9 17l-5-5"></path>
                                            </svg>
                                        </span>
                                    </div>
                                    <div className="mt-16 flex w-full flex-col">
                                        <span className="flex h-16 w-full items-center justify-center border-b border-b-zinc-200/50 text-sm font-medium text-zinc-500/90">
                                            Unlimited links
                                        </span>
                                    </div>
                                    <div className="mt-16 flex w-full flex-col">
                                        <span className="flex h-16 w-full items-center justify-center border-b border-b-zinc-200/50 text-sm font-medium text-zinc-950">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="#30a46c"
                                                stroke-width="3"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                className="lucide lucide-check size-5"
                                            >
                                                <path d="M20 6 9 17l-5-5"></path>
                                            </svg>
                                        </span>
                                        <span className="flex h-16 w-full items-center justify-center border-b border-b-zinc-200/50 text-sm font-medium text-zinc-950">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="#30a46c"
                                                stroke-width="3"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                className="lucide lucide-check size-5"
                                            >
                                                <path d="M20 6 9 17l-5-5"></path>
                                            </svg>
                                        </span>
                                        <span className="flex h-16 w-full items-center justify-center border-b border-b-zinc-200/50 text-sm font-medium text-zinc-950">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="#30a46c"
                                                stroke-width="3"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                className="lucide lucide-check size-5"
                                            >
                                                <path d="M20 6 9 17l-5-5"></path>
                                            </svg>
                                        </span>
                                    </div>
                                    <div className="mt-16 flex w-full flex-col">
                                        <span className="flex h-16 w-full items-center justify-center border-b border-b-zinc-200/50 text-sm font-medium text-zinc-950">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="#30a46c"
                                                stroke-width="3"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                className="lucide lucide-check size-5"
                                            >
                                                <path d="M20 6 9 17l-5-5"></path>
                                            </svg>
                                        </span>
                                        <span className="flex h-16 w-full items-center justify-center border-b border-b-zinc-200/50 text-sm font-medium text-zinc-950">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="#30a46c"
                                                stroke-width="3"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                className="lucide lucide-check size-5"
                                            >
                                                <path d="M20 6 9 17l-5-5"></path>
                                            </svg>
                                        </span>
                                        <span className="flex h-16 w-full items-center justify-center border-b border-b-zinc-200/50 text-sm font-medium text-zinc-950">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="#30a46c"
                                                stroke-width="3"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                className="lucide lucide-check size-5"
                                            >
                                                <path d="M20 6 9 17l-5-5"></path>
                                            </svg>
                                        </span>
                                        <span className="flex h-16 w-full items-center justify-center border-b border-b-zinc-200/50 text-sm font-medium text-zinc-950">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="#30a46c"
                                                stroke-width="3"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                className="lucide lucide-check size-5"
                                            >
                                                <path d="M20 6 9 17l-5-5"></path>
                                            </svg>
                                        </span>
                                        <span className="flex h-16 w-full items-center justify-center border-b border-b-zinc-200/50 text-sm font-medium text-zinc-950">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="#30a46c"
                                                stroke-width="3"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                className="lucide lucide-check size-5"
                                            >
                                                <path d="M20 6 9 17l-5-5"></path>
                                            </svg>
                                        </span>
                                    </div>
                                    <div className="mt-16 flex w-full flex-col">
                                        <span className="flex h-16 w-full items-center justify-center border-b border-b-zinc-200/50 text-sm font-medium text-zinc-950">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="#30a46c"
                                                stroke-width="3"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                className="lucide lucide-check size-5"
                                            >
                                                <path d="M20 6 9 17l-5-5"></path>
                                            </svg>
                                        </span>
                                        <span className="flex h-16 w-full items-center justify-center border-b border-b-zinc-200/50 text-sm font-medium text-zinc-950">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="#30a46c"
                                                stroke-width="3"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                className="lucide lucide-check size-5"
                                            >
                                                <path d="M20 6 9 17l-5-5"></path>
                                            </svg>
                                        </span>
                                        <span className="flex h-16 w-full items-center justify-center border-b border-b-zinc-200/50 text-sm font-medium text-zinc-950">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="#30a46c"
                                                stroke-width="3"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                className="lucide lucide-check size-5"
                                            >
                                                <path d="M20 6 9 17l-5-5"></path>
                                            </svg>
                                        </span>
                                        <span className="flex h-16 w-full items-center justify-center border-b border-b-zinc-200/50 text-sm font-medium text-zinc-950">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="#30a46c"
                                                stroke-width="3"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                className="lucide lucide-check size-5"
                                            >
                                                <path d="M20 6 9 17l-5-5"></path>
                                            </svg>
                                        </span>
                                    </div>
                                    <div className="mt-16 flex w-full flex-col">
                                        <span className="flex h-16 w-full items-center justify-center border-b border-b-zinc-200/50 text-sm font-medium text-zinc-950">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="#30a46c"
                                                stroke-width="3"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                className="lucide lucide-check size-5"
                                            >
                                                <path d="M20 6 9 17l-5-5"></path>
                                            </svg>
                                        </span>
                                        <span className="flex h-16 w-full items-center justify-center border-b border-b-zinc-200/50 text-sm font-medium text-zinc-950">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="#30a46c"
                                                stroke-width="3"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                className="lucide lucide-check size-5"
                                            >
                                                <path d="M20 6 9 17l-5-5"></path>
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className=" md:hidden">
                        <div className="mx-auto mb-14 flex h-auto max-w-fit flex-row gap-2 rounded-full bg-zinc-100 p-2">
                            <button
                                className="focus-visible:ring-ring inline-flex h-9 items-center justify-center whitespace-nowrap rounded-full bg-white px-5 py-6 text-sm font-medium text-zinc-950 transition-colors duration-300 ease-in-out hover:bg-white hover:text-zinc-900 hover:opacity-85 focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:text-zinc-600 disabled:opacity-80 dark:hover:bg-zinc-800 dark:hover:text-zinc-50"
                                value="month"
                            >
                                Monthly
                            </button>
                            <button
                                className="focus-visible:ring-ring inline-flex h-9 items-center justify-center whitespace-nowrap rounded-full bg-zinc-100 px-5 py-6 text-sm font-medium text-zinc-500 transition-colors duration-300 ease-in-out hover:bg-zinc-100 hover:text-zinc-900 focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:text-zinc-600 disabled:opacity-80 dark:hover:bg-zinc-800 dark:hover:text-zinc-50"
                                value="year"
                            >
                                Yearly
                            </button>
                        </div>
                        <div className="flex w-full flex-col gap-6">
                            <button
                                type="button"
                                role="combobox"
                                aria-controls="radix-:r1:"
                                aria-expanded="false"
                                aria-autocomplete="none"
                                dir="ltr"
                                data-state="closed"
                                className="border-b-1 z-100 sticky top-14 -mx-8 flex h-10 w-full min-w-[calc(100%+4rem)] items-center justify-between rounded-md border border-zinc-900/10 border-t-zinc-200 bg-zinc-50 px-10 py-7 text-base font-medium text-zinc-900 placeholder:text-zinc-400 focus:border-violet-500 focus:outline-none focus:ring-0 focus:ring-violet-500/10 focus:ring-offset-0 disabled:opacity-50 dark:border-zinc-800 dark:bg-zinc-950 dark:ring-offset-zinc-950 dark:placeholder:text-zinc-400 dark:focus:ring-zinc-300"
                            >
                                <span style={{ pointerEvents: "none" }}>
                                    Free
                                </span>
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
                                    className="lucide lucide-chevrons-up-down h-4 w-4 opacity-50"
                                    aria-hidden="true"
                                >
                                    <path d="m7 15 5 5 5-5"></path>
                                    <path d="m7 9 5-5 5 5"></path>
                                </svg>
                            </button>
                            <div className="flex w-full flex-row items-center justify-between px-2">
                                <div className="flex flex-col items-start justify-center">
                                    <span className="text-xl font-semibold text-zinc-950">
                                        $0
                                    </span>
                                    <span className="text-sm text-zinc-400">
                                        Forever
                                    </span>
                                </div>
                                <a href="/dashboard?next=/settings/plans">
                                    <button className="bg-white-gradient shadow-button hover:shadow-button-hover hover:bg-white-gradient-hover active:bg-white-gradient-hover disabled:hover:shadow-button disabled:hover:bg-white-gradient inline-flex h-12 w-1/2 items-center justify-center whitespace-nowrap rounded-xl border px-4 py-3 text-base font-medium text-zinc-950 transition-all duration-100 ease-in-out hover:border-zinc-500 active:border-zinc-400 active:opacity-70 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:border-zinc-200 disabled:hover:text-zinc-950">
                                        Subscribe
                                    </button>
                                </a>
                            </div>
                            <div
                                data-orientation="horizontal"
                                role="none"
                                className="-mx-8 h-0.5 w-full min-w-[calc(100%+4rem)] shrink-0 bg-zinc-200 drop-shadow-lg dark:bg-zinc-500"
                            ></div>
                            <div className="flex flex-col gap-4">
                                <div className="flex w-full flex-col">
                                    <span className="text-xl font-semibold text-zinc-950">
                                        Configuration
                                    </span>
                                    <div className="flex w-full flex-row items-center justify-start gap-2">
                                        <span className="w-3/4 border-b border-b-zinc-200/50 py-5 text-sm font-medium text-zinc-900">
                                            Message credits (monthly)
                                        </span>
                                        <span className="flex h-16 w-1/4 items-center justify-end border-b border-b-zinc-200/50 text-sm font-medium text-zinc-500/90">
                                            20
                                        </span>
                                    </div>
                                    <div className="flex w-full flex-row items-center justify-start gap-2">
                                        <span className="w-3/4 border-b border-b-zinc-200/50 py-5 text-sm font-medium text-zinc-900">
                                            Chatbots
                                        </span>
                                        <span className="flex h-16 w-1/4 items-center justify-end border-b border-b-zinc-200/50 text-sm font-medium text-zinc-500/90">
                                            1
                                        </span>
                                    </div>
                                    <div className="flex w-full flex-row items-center justify-start gap-2">
                                        <span className="w-3/4 border-b border-b-zinc-200/50 py-5 text-sm font-medium text-zinc-900">
                                            Chatbot size (characters)
                                        </span>
                                        <span className="flex h-16 w-1/4 items-center justify-end border-b border-b-zinc-200/50 text-sm font-medium text-zinc-500/90">
                                            400,000
                                        </span>
                                    </div>
                                    <div className="flex w-full flex-row items-center justify-start gap-2">
                                        <span className="w-3/4 border-b border-b-zinc-200/50 py-5 text-sm font-medium text-zinc-900">
                                            Team members
                                        </span>
                                        <span className="flex h-16 w-1/4 items-center justify-end border-b border-b-zinc-200/50 text-sm font-medium text-zinc-500/90">
                                            1
                                        </span>
                                    </div>
                                    <div className="flex w-full flex-row items-center justify-start gap-2">
                                        <span className="w-3/4 border-b border-b-zinc-200/50 py-5 text-sm font-medium text-zinc-900">
                                            Embed on unlimited websites
                                        </span>
                                        <span className="flex h-16 w-1/4 items-center justify-end border-b border-b-zinc-200/50 text-sm font-medium text-zinc-950">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="#30a46c"
                                                stroke-width="3"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                className="lucide lucide-check size-5"
                                            >
                                                <path d="M20 6 9 17l-5-5"></path>
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                                <div className="flex w-full flex-col">
                                    <span className="text-xl font-semibold text-zinc-950">
                                        Training
                                    </span>
                                    <div className="flex w-full flex-row items-center justify-start gap-2">
                                        <span className="w-3/4 border-b border-b-zinc-200/50 py-5 text-sm font-medium text-zinc-900">
                                            Links to train on
                                        </span>
                                        <span className="flex h-16 w-1/4 items-center justify-end border-b border-b-zinc-200/50 text-sm font-medium text-zinc-500/90">
                                            10 Links
                                        </span>
                                    </div>
                                </div>
                                <div className="flex w-full flex-col">
                                    <span className="text-xl font-semibold text-zinc-950">
                                        Activity
                                    </span>
                                    <div className="flex w-full flex-row items-center justify-start gap-2">
                                        <span className="w-3/4 border-b border-b-zinc-200/50 py-5 text-sm font-medium text-zinc-900">
                                            Chat History
                                        </span>
                                        <span className="flex h-16 w-1/4 items-center justify-end border-b border-b-zinc-200/50 text-sm font-medium text-zinc-950">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="#30a46c"
                                                stroke-width="3"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                className="lucide lucide-check size-5"
                                            >
                                                <path d="M20 6 9 17l-5-5"></path>
                                            </svg>
                                        </span>
                                    </div>
                                    <div className="flex w-full flex-row items-center justify-start gap-2">
                                        <span className="w-3/4 border-b border-b-zinc-200/50 py-5 text-sm font-medium text-zinc-900">
                                            Capture Leads
                                        </span>
                                        <span className="flex h-16 w-1/4 items-center justify-end border-b border-b-zinc-200/50 text-sm font-medium text-zinc-950">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="#30a46c"
                                                stroke-width="3"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                className="lucide lucide-check size-5"
                                            >
                                                <path d="M20 6 9 17l-5-5"></path>
                                            </svg>
                                        </span>
                                    </div>
                                    <div className="flex w-full flex-row items-center justify-start gap-2">
                                        <span className="w-3/4 border-b border-b-zinc-200/50 py-5 text-sm font-medium text-zinc-900">
                                            Analytics
                                        </span>
                                        <span className="flex h-16 w-1/4 items-center justify-end border-b border-b-zinc-200/50 text-sm font-medium text-zinc-500/20">
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
                                                className="lucide lucide-x size-5"
                                            >
                                                <path d="M18 6 6 18"></path>
                                                <path d="m6 6 12 12"></path>
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                                <div className="flex w-full flex-col">
                                    <span className="text-xl font-semibold text-zinc-950">
                                        Integrations &amp; API
                                    </span>
                                    <div className="flex w-full flex-row items-center justify-start gap-2">
                                        <span className="w-3/4 border-b border-b-zinc-200/50 py-5 text-sm font-medium text-zinc-900">
                                            API access
                                        </span>
                                        <span className="flex h-16 w-1/4 items-center justify-end border-b border-b-zinc-200/50 text-sm font-medium text-zinc-500/20">
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
                                                className="lucide lucide-x size-5"
                                            >
                                                <path d="M18 6 6 18"></path>
                                                <path d="m6 6 12 12"></path>
                                            </svg>
                                        </span>
                                    </div>
                                    <div className="flex w-full flex-row items-center justify-start gap-2">
                                        <span className="w-3/4 border-b border-b-zinc-200/50 py-5 text-sm font-medium text-zinc-900">
                                            Zapier
                                        </span>
                                        <span className="flex h-16 w-1/4 items-center justify-end border-b border-b-zinc-200/50 text-sm font-medium text-zinc-500/20">
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
                                                className="lucide lucide-x size-5"
                                            >
                                                <path d="M18 6 6 18"></path>
                                                <path d="m6 6 12 12"></path>
                                            </svg>
                                        </span>
                                    </div>
                                    <div className="flex w-full flex-row items-center justify-start gap-2">
                                        <span className="w-3/4 border-b border-b-zinc-200/50 py-5 text-sm font-medium text-zinc-900">
                                            Slack
                                        </span>
                                        <span className="flex h-16 w-1/4 items-center justify-end border-b border-b-zinc-200/50 text-sm font-medium text-zinc-500/20">
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
                                                className="lucide lucide-x size-5"
                                            >
                                                <path d="M18 6 6 18"></path>
                                                <path d="m6 6 12 12"></path>
                                            </svg>
                                        </span>
                                    </div>
                                    <div className="flex w-full flex-row items-center justify-start gap-2">
                                        <span className="w-3/4 border-b border-b-zinc-200/50 py-5 text-sm font-medium text-zinc-900">
                                            WhatsApp
                                        </span>
                                        <span className="flex h-16 w-1/4 items-center justify-end border-b border-b-zinc-200/50 text-sm font-medium text-zinc-500/20">
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
                                                className="lucide lucide-x size-5"
                                            >
                                                <path d="M18 6 6 18"></path>
                                                <path d="m6 6 12 12"></path>
                                            </svg>
                                        </span>
                                    </div>
                                    <div className="flex w-full flex-row items-center justify-start gap-2">
                                        <span className="w-3/4 border-b border-b-zinc-200/50 py-5 text-sm font-medium text-zinc-900">
                                            Messenger (Coming soon)
                                        </span>
                                        <span className="flex h-16 w-1/4 items-center justify-end border-b border-b-zinc-200/50 text-sm font-medium text-zinc-500/20">
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
                                                className="lucide lucide-x size-5"
                                            >
                                                <path d="M18 6 6 18"></path>
                                                <path d="m6 6 12 12"></path>
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                                <div className="flex w-full flex-col">
                                    <span className="text-xl font-semibold text-zinc-950">
                                        Model
                                    </span>
                                    <div className="flex w-full flex-row items-center justify-start gap-2">
                                        <span className="w-3/4 border-b border-b-zinc-200/50 py-5 text-sm font-medium text-zinc-900">
                                            GPT-3.5
                                        </span>
                                        <span className="flex h-16 w-1/4 items-center justify-end border-b border-b-zinc-200/50 text-sm font-medium text-zinc-950">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="#30a46c"
                                                stroke-width="3"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                className="lucide lucide-check size-5"
                                            >
                                                <path d="M20 6 9 17l-5-5"></path>
                                            </svg>
                                        </span>
                                    </div>
                                    <div className="flex w-full flex-row items-center justify-start gap-2">
                                        <span className="w-3/4 border-b border-b-zinc-200/50 py-5 text-sm font-medium text-zinc-900">
                                            GPT-4o (most advanced and efficient
                                            model)
                                        </span>
                                        <span className="flex h-16 w-1/4 items-center justify-end border-b border-b-zinc-200/50 text-sm font-medium text-zinc-950">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="#30a46c"
                                                stroke-width="3"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                className="lucide lucide-check size-5"
                                            >
                                                <path d="M20 6 9 17l-5-5"></path>
                                            </svg>
                                        </span>
                                    </div>
                                    <div className="flex w-full flex-row items-center justify-start gap-2">
                                        <span className="w-3/4 border-b border-b-zinc-200/50 py-5 text-sm font-medium text-zinc-900">
                                            GPT-4-Turbo
                                        </span>
                                        <span className="flex h-16 w-1/4 items-center justify-end border-b border-b-zinc-200/50 text-sm font-medium text-zinc-500/20">
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
                                                className="lucide lucide-x size-5"
                                            >
                                                <path d="M18 6 6 18"></path>
                                                <path d="m6 6 12 12"></path>
                                            </svg>
                                        </span>
                                    </div>
                                    <div className="flex w-full flex-row items-center justify-start gap-2">
                                        <span className="w-3/4 border-b border-b-zinc-200/50 py-5 text-sm font-medium text-zinc-900">
                                            GPT-4
                                        </span>
                                        <span className="flex h-16 w-1/4 items-center justify-end border-b border-b-zinc-200/50 text-sm font-medium text-zinc-500/20">
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
                                                className="lucide lucide-x size-5"
                                            >
                                                <path d="M18 6 6 18"></path>
                                                <path d="m6 6 12 12"></path>
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                                <div className="flex w-full flex-col">
                                    <span className="text-xl font-semibold text-zinc-950">
                                        Branding
                                    </span>
                                    <div className="flex w-full flex-row items-center justify-start gap-2">
                                        <span className="w-3/4 border-b border-b-zinc-200/50 py-5 text-sm font-medium text-zinc-900">
                                            Remove Powered by Chatbase
                                        </span>
                                        <span className="flex h-16 w-1/4 items-center justify-end border-b border-b-zinc-200/50 text-sm font-medium text-zinc-500/20">
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
                                                className="lucide lucide-x size-5"
                                            >
                                                <path d="M18 6 6 18"></path>
                                                <path d="m6 6 12 12"></path>
                                            </svg>
                                        </span>
                                    </div>
                                    <div className="flex w-full flex-row items-center justify-start gap-2">
                                        <span className="w-3/4 border-b border-b-zinc-200/50 py-5 text-sm font-medium text-zinc-900">
                                            Choose your own custom domain
                                        </span>
                                        <span className="flex h-16 w-1/4 items-center justify-end border-b border-b-zinc-200/50 text-sm font-medium text-zinc-500/20">
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
                                                className="lucide lucide-x size-5"
                                            >
                                                <path d="M18 6 6 18"></path>
                                                <path d="m6 6 12 12"></path>
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </section>
    )
}

export default Pricing

const List = ({ children }: any) => {
    return (
        <p className="text-body-color dark:text-dark-6 text-base">{children}</p>
    )
}

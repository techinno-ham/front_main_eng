//https://tailgrids.com/components/pricing-tables
//https://tailgrids.com/pricing
import "./style.css"
import PricingCard from "./PricingCard"
import MobilePricingFeatures from "./components/Mobile/Table"
import Link from "next/link"

// const pricingTiers = [{
//     name: "Basic",
//     monthlyPrice: "Free forever",
//     yearlyPrice: "Contact us",
//     features: {
//         تنظیمات: {
//           پیام_و_پاسخ: true,
//           دستیار_هوش_مصنوعی: true,
//           ذخیره_کلمات_دستیار: true,
//           استفاده_در_وبسایت: true
//         }
//       }
// }]

const CheckIcon = () => (
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
)

const CrossIcon = () => (
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
)

const Pricing = () => {
    return (
        <section className="relative bg-white pb-12 pt-10 lg:pb-[90px]">
            <div className="container mx-auto">
                <div className="flex flex-wrap">
                    <div className="w-full px-4">
                        <div className="mx-auto mb-[60px] max-w-[510px] text-center">
                            <span className="text-primary mb-2 block text-lg font-semibold">
                                Pricing Table
                            </span>
                            <h2 className="text-dark mb-3 text-3xl font-bold leading-[1.208] sm:text-4xl md:text-[40px] ">
                                Prices for
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
                                    &nbsp;the Latest&nbsp;
                                </span>
                                Services
                            </h2>
                            <p className="text-body-color dark:text-dark-6 text-base">
                                The information provided includes details about
                                each service and its associated costs so that
                                you can make the best decision for your needs.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="flex flex-wrap justify-center">
                    <div className="mx-4 flex flex-wrap">
                        <PricingCard
                            order={0}
                            type="Basic"
                            price="Free"
                            subscription="Forever"
                            description="Suitable for small businesses and beginner users with simple needs."
                            buttonText="Get Started"
                            buttonLink="/mybots"
                            active={false}
                        >
                            <List>Access to fast language models</List>
                            <List>100 messages per month</List>
                            <List>1 AI assistant</List>
                            <List>Limited to 10 training links</List>
                            <List>400,000 character storage per assistant</List>
                            <List>Online chat with support operators</List>
                            <List>
                                Ability to design and display advanced forms
                            </List>
                            <List>Customizable user interface</List>
                            <List>Website integration</List>
                            <List>Chat history view</List>
                            <List>24/7 support</List>
                        </PricingCard>
                        <PricingCard
                            order={0}
                            type="Standard"
                            price="20"
                            subscription="$ / Monthly"
                            description="Suitable for medium-sized businesses and users with advanced needs."
                            buttonText="Choose Standard Plan"
                            buttonLink="https://telegram.me/hamyarchat"
                            beforeListText={"Everything in Basic, plus..."}
                            active={false}
                        >
                            <List>1,200 messages per month</List>
                            <List>3 AI assistants</List>
                            <List>Unlimited training links</List>
                            <List>
                                11,000,000 character storage per assistant
                            </List>
                            <List>24/7 support</List>
                        </PricingCard>
                        <PricingCard
                            order={4}
                            type="Professional"
                            price="40"
                            subscription="$ / Monthly"
                            description="Suitable for businesses and large organizations needing customization and detailed analytics."
                            buttonText="Choose Professional Plan"
                            buttonLink="https://telegram.me/hamyarchat"
                            beforeListText={"Everything in Standard, plus..."}
                            active={true}
                        >
                            <List>4,200 messages per month</List>
                            <List>5 AI assistants</List>
                            <List>
                                Unlimited character storage and file uploads 😍
                            </List>
                            <List>Custom domain or logo insertion</List>
                            <List>Dedicated consulting</List>
                        </PricingCard>
                        <PricingCard
                            order={0}
                            type="Enterprise"
                            price="Contact Us"
                            description="Suitable for large organizations with complex needs, custom solutions, and dedicated support."
                            buttonText="Choose Enterprise Plan"
                            buttonLink="https://telegram.me/hamyarchat"
                            beforeListText={
                                "Everything in Professional, plus..."
                            }
                            active={false}
                        >
                            <List>Access to advanced language models</List>
                            <List>Unlimited messages</List>
                            <List>Unlimited AI assistants</List>
                            <List>Custom domain or logo insertion</List>
                            <List>Remove HamyarChat branding</List>
                            <List>Dedicated consulting</List>
                        </PricingCard>
                    </div>
                </div>

                <div className="relative mt-14 w-full">
                    <section className="hidden overflow-x-clip md:block">
                        <div className="sticky top-[-1px] z-10 h-0 opacity-0"></div>
                        <header
                            style={{
                                zIndex: 20,
                            }}
                            className="sticky inset-x-0 top-[68px]  bg-white"
                        >
                            <div className="bg-white py-4">
    <div className="grid grid-cols-9 gap-4 bg-white">
        <div className="col-span-2 flex flex-col items-start justify-end gap-3 xl:col-span-2">
            <h3 className="ml-1 text-xs font-medium text-zinc-600">
                Compare Pricing Plans
            </h3>
            <div className="flex h-auto max-w-fit flex-row gap-1 rounded-full bg-zinc-100 p-1">
                <button className="focus-visible:ring-ring inline-flex h-9 items-center justify-center whitespace-nowrap rounded-full bg-white px-4 py-1 text-xs font-medium text-zinc-950 transition-colors duration-300 ease-in-out hover:bg-white hover:text-zinc-900 hover:opacity-85 focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:text-zinc-600 disabled:opacity-80 lg:px-5 xl:px-7 dark:hover:bg-zinc-800 dark:hover:text-zinc-50">
                    Monthly
                </button>
                {/* <button className="focus-visible:ring-ring inline-flex h-9 items-center justify-center whitespace-nowrap rounded-full bg-zinc-100 px-4 py-1 text-xs font-medium text-zinc-500 transition-colors duration-300 ease-in-out hover:bg-zinc-100 hover:text-zinc-900 focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:text-zinc-600 disabled:opacity-80 lg:px-5 xl:px-7 dark:hover:bg-zinc-800 dark:hover:text-zinc-50">
                    Yearly{" "}
                </button> */}
            </div>
        </div>
        <div className="col-span-7 grid grid-cols-4 gap-4 focus-visible:outline-none focus-visible:ring-0 data-[state=inactive]:hidden">
            <div className="flex flex-col items-center justify-center gap-2 rounded-xl px-3 py-2 xl:px-6">
                <span className="text-2xl font-medium">
                    Basic
                </span>
                <div className="flex flex-col">
                    <span className="text-xs font-medium text-zinc-600">
                        Free Forever
                    </span>
                </div>
                <Link href={`/mybots`}>
                    <button
                        className="
                        bg-white-gradient shadow-button 
                        hover:shadow-button-hover 
                        hover:bg-white-gradient-hover
                        active:bg-white-gradient-hover 
                        disabled:hover:shadow-button 
                        disabled:hover:bg-white-gradient
                        inline-flex h-auto w-full items-center
                        justify-center whitespace-nowrap 
                        rounded-xl border px-4 py-2 
                        text-sm font-medium text-zinc-950 transition-all duration-100 ease-in-out hover:border-zinc-500 active:border-zinc-400 active:opacity-70 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:border-zinc-200 disabled:hover:text-zinc-950"
                    >
                        Get Started
                    </button>
                </Link>
            </div>
            <div className="flex flex-col items-center justify-center gap-2 rounded-xl px-3 py-2 xl:px-6">
                <span className="text-2xl font-medium">
                    Standard
                </span>
                <div className="flex flex-col">
                    <span className="text-xs font-medium text-zinc-600">
                        499 Thousand Tomans / Monthly
                    </span>
                </div>
                <a
                    target="_blank"
                    href="https://telegram.me/hamyarchat"
                >
                    <button className="bg-white-gradient shadow-button hover:shadow-button-hover hover:bg-white-gradient-hover active:bg-white-gradient-hover disabled:hover:shadow-button disabled:hover:bg-white-gradient inline-flex h-auto w-full items-center justify-center whitespace-nowrap rounded-xl border px-4 py-2 text-sm font-medium text-zinc-950 transition-all duration-100 ease-in-out hover:border-zinc-500 active:border-zinc-400 active:opacity-70 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:border-zinc-200 disabled:hover:text-zinc-950">
                        Contact Us
                    </button>
                </a>
            </div>
            <div className="flex flex-col items-center justify-center gap-2 rounded-xl bg-zinc-50 px-3 py-2 xl:px-6">
                <span className="pricing-header text-2xl font-medium">
                    Professional
                </span>
                <div className="flex flex-col">
                    <span className="text-xs font-medium text-zinc-600">
                        1,699 Thousand Tomans / Monthly
                    </span>
                </div>
                <a
                    target="_blank"
                    href="https://telegram.me/hamyarchat"
                >
                    <button className="bg-white-gradient shadow-button hover:shadow-button-hover hover:bg-white-gradient-hover active:bg-white-gradient-hover disabled:hover:shadow-button disabled:hover:bg-white-gradient inline-flex h-auto w-full items-center justify-center whitespace-nowrap rounded-xl border bg-blue-700 px-4 py-2 text-sm font-medium text-white transition-all duration-100 ease-in-out hover:border-zinc-500 active:border-zinc-400 active:opacity-70 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:border-zinc-200 disabled:hover:text-zinc-950">
                        Contact Us
                    </button>
                </a>
            </div>
            <div className="flex flex-col items-center justify-center gap-2 rounded-xl px-3 py-2 xl:px-6">
                <span className="pricing-header text-2xl font-medium">
                    Enterprise
                </span>
                <div className="flex flex-col">
                    <span className="text-xs font-medium text-zinc-600">
                        Contact Us
                    </span>
                </div>
                <a
                    target="_blank"
                    href="https://telegram.me/hamyarchat"
                >
                    <button className="bg-white-gradient shadow-button hover:shadow-button-hover hover:bg-white-gradient-hover active:bg-white-gradient-hover disabled:hover:shadow-button disabled:hover:bg-white-gradient inline-flex h-auto w-full items-center justify-center whitespace-nowrap rounded-xl border px-4 py-2 text-sm font-medium text-zinc-950 transition-all duration-100 ease-in-out hover:border-zinc-500 active:border-zinc-400 active:opacity-70 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:border-zinc-200 disabled:hover:text-zinc-950">
                        Contact Us
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
                        <div
    id="col-main"
    className="col-span-2 flex flex-col items-start gap-6"
>
    <div className="relative flex w-full flex-col">
        <span className="sticky top-[217px] flex h-16 w-dvw items-center border-b border-b-zinc-200 bg-white text-xl font-semibold ">
            <span className="pricing-header">
                Settings
            </span>
        </span>
        <span className="flex h-16 w-full items-center border-b border-b-zinc-200/50 text-sm font-medium text-zinc-900">
            Monthly Messages
        </span>
        <span className="flex h-16 w-full items-center border-b border-b-zinc-200/50 text-sm font-medium text-zinc-900">
            AI Assistant
        </span>
        <span className="flex h-16 w-full items-center border-b border-b-zinc-200/50 text-sm font-medium text-zinc-900">
            Save Character / Assistant
        </span>
        {/* <span className="flex h-16 w-full items-center border-b border-b-zinc-200/50 text-sm font-medium text-zinc-900">
            Team members
        </span> */}
        <span className="flex h-16 w-full items-center border-b border-b-zinc-200/50 text-sm font-medium text-zinc-900">
            Website Usage
        </span>
    </div>
    <div className="relative flex w-full flex-col">
        <span className="sticky top-[217px] flex h-16 w-dvw items-center border-b border-b-zinc-200 bg-white text-xl font-semibold ">
            <span className="pricing-header">
                Training
            </span>
        </span>
        <span className="flex h-16 w-full items-center border-b border-b-zinc-200/50 text-sm font-medium text-zinc-900">
            Links
        </span>
    </div>
    <div className="relative flex w-full flex-col">
        <span className="sticky top-[217px] flex h-16 w-dvw items-center border-b border-b-zinc-200 bg-white text-xl font-semibold ">
            <span className="pricing-header">
                Activity
            </span>
        </span>
        <span className="flex h-16 w-full items-center border-b border-b-zinc-200/50 text-sm font-medium text-zinc-900">
            Chat History
        </span>
        <span className="flex h-16 w-full items-center border-b border-b-zinc-200/50 text-sm font-medium text-zinc-900">
            Info Form (Coming Soon)
        </span>
        <span className="flex h-16 w-full items-center border-b border-b-zinc-200/50 text-sm font-medium text-zinc-900">
            Analytics
        </span>
    </div>
    <div className="relative flex w-full flex-col">
        <span className="sticky top-[217px] flex h-16 w-dvw items-center border-b border-b-zinc-200 bg-white text-xl font-semibold ">
            <span className="pricing-header">
                Integrations and API
            </span>
        </span>
        <span className="flex h-16 w-full items-center border-b border-b-zinc-200/50 text-sm font-medium text-zinc-900">
            API Access (Coming Soon)
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
        <span className="flzex h-16 w-full items-center border-b border-b-zinc-200/50 text-sm font-medium text-zinc-900">
            Messenger (Coming soon)
        </span> */}
    </div>
    <div className="relative flex w-full flex-col">
        <span className="sticky top-[217px] flex h-16 w-dvw items-center border-b border-b-zinc-200 bg-white text-xl font-semibold ">
            <span className="pricing-header">
                AI Model
            </span>
        </span>
        <span className="flex h-16 w-full items-center border-b border-b-zinc-200/50 text-sm font-medium text-zinc-900">
            GPT-3.5
        </span>
        <span className="flex h-16 w-full items-center border-b border-b-zinc-200/50 text-sm font-medium text-zinc-900">
            GPT-4o (Most Advanced and Efficient Model)
        </span>
        <span className="flex h-16 w-full items-center border-b border-b-zinc-200/50 text-sm font-medium text-zinc-900">
            GPT-4-Turbo
        </span>
        <span className="flex h-16 w-full items-center border-b border-b-zinc-200/50 text-sm font-medium text-zinc-900">
            GPT-4
        </span>
    </div>
    <div className="relative flex w-full flex-col">
        <span className="sticky top-[217px] flex h-16 w-dvw items-center border-b border-b-zinc-200 bg-white text-xl font-semibold ">
            <span className="pricing-header">
                Branding
            </span>
        </span>
        <span className="flex h-16 w-full items-center border-b border-b-zinc-200/50 text-sm font-medium text-zinc-900">
            Remove HamyarChat Logo
        </span>
        <span className="flex h-16 w-full items-center border-b border-b-zinc-200/50 text-sm font-medium text-zinc-900">
            Your Custom Domain or Logo
        </span>
    </div>
    <div className="relative flex w-full flex-col">
        <span className="sticky top-[217px] flex h-16 w-dvw items-center border-b border-b-zinc-200 bg-white text-xl font-semibold ">
            <span className="pricing-header">
                Support
            </span>
        </span>
        <span className="flex h-16 w-full items-center border-b border-b-zinc-200/50 text-sm font-medium text-zinc-900">
            24/7 Support
        </span>
        <span className="flex h-16 w-full items-center border-b border-b-zinc-200/50 text-sm font-medium text-zinc-900">
            Dedicated Consultation
        </span>
    </div>
</div>

                            <div className="col-span-7 grid grid-cols-4 gap-4 focus-visible:outline-none focus-visible:ring-0 data-[state=inactive]:hidden">
                            <div
    id="col0"
    className="flex w-full flex-col gap-6"
>
    <div
        id="col0-row0"
        className="mt-16 flex w-full flex-col"
    >
        <span className="flex h-16 w-full items-center justify-center border-b border-b-zinc-200/50 text-sm font-medium text-zinc-500/90">
            100
        </span>
        <span className="flex h-16 w-full items-center justify-center border-b border-b-zinc-200/50 text-sm font-medium text-zinc-500/90">
            1
        </span>
        <span className="flex h-16 w-full items-center justify-center border-b border-b-zinc-200/50 text-sm font-medium text-zinc-500/90">
            400,000
        </span>
        {/* <span className="flex h-16 w-full items-center justify-center border-b border-b-zinc-200/50 text-sm font-medium text-zinc-500/90">
            1
        </span> */}
        <span className="flex h-16 w-full items-center justify-center border-b border-b-zinc-200/50 text-sm font-medium text-zinc-950">
            <CheckIcon />
        </span>
    </div>
    <div
        id="col0-row1"
        className="mt-16 flex w-full flex-col"
    >
        <span className="flex h-16 w-full items-center justify-center border-b border-b-zinc-200/50 text-sm font-medium text-zinc-500/90">
            10 Links
        </span>
    </div>
    <div
        id="col0-row2"
        className="mt-16 flex w-full flex-col"
    >
        <span className="flex h-16 w-full items-center justify-center border-b border-b-zinc-200/50 text-sm font-medium text-zinc-950">
            <CheckIcon />
        </span>
        <span className="flex h-16 w-full items-center justify-center border-b border-b-zinc-200/50 text-sm font-medium text-zinc-950">
            <CheckIcon />
        </span>
        <span className="flex h-16 w-full items-center justify-center border-b border-b-zinc-200/50 text-sm font-medium text-zinc-500/20">
            <CrossIcon />
        </span>
    </div>
    <div
        id="col0-row3"
        className="mt-16 flex w-full flex-col"
    >
        <span className="flex h-16 w-full items-center justify-center border-b border-b-zinc-200/50 text-sm font-medium text-zinc-500/20">
            <CrossIcon />
        </span>
        {/* <span className="flex h-16 w-full items-center justify-center border-b border-b-zinc-200/50 text-sm font-medium text-zinc-500/20">
            <CrossIcon/>
        </span>
        <span className="flex h-16 w-full items-center justify-center border-b border-b-zinc-200/50 text-sm font-medium text-zinc-500/20">
            <CrossIcon/>
        </span>
        <span className="flex h-16 w-full items-center justify-center border-b border-b-zinc-200/50 text-sm font-medium text-zinc-500/20">
            <CrossIcon/>
        </span>
        <span className="flex h-16 w-full items-center justify-center border-b border-b-zinc-200/50 text-sm font-medium text-zinc-500/20">
            <CrossIcon/>
        </span> */}
    </div>
    <div
        id="col0-row4"
        className="mt-16 flex w-full flex-col"
    >
        <span className="flex h-16 w-full items-center justify-center border-b border-b-zinc-200/50 text-sm font-medium text-zinc-950">
            <CheckIcon />
        </span>
        <span className="flex h-16 w-full items-center justify-center border-b border-b-zinc-200/50 text-sm font-medium text-zinc-950">
            <CheckIcon />
        </span>
        <span className="flex h-16 w-full items-center justify-center border-b border-b-zinc-200/50 text-sm font-medium text-zinc-500/20">
            <CrossIcon />
        </span>
        <span className="flex h-16 w-full items-center justify-center border-b border-b-zinc-200/50 text-sm font-medium text-zinc-500/20">
            <CrossIcon />
        </span>
    </div>
    <div
        id="col0-row5"
        className="mt-16 flex w-full flex-col"
    >
        <span className="flex h-16 w-full items-center justify-center border-b border-b-zinc-200/50 text-sm font-medium text-zinc-500/20">
            <CrossIcon />
        </span>
        <span className="flex h-16 w-full items-center justify-center border-b border-b-zinc-200/50 text-sm font-medium text-zinc-500/20">
            <CrossIcon />
        </span>
    </div>
    <div
        id="col0-row6"
        className="mt-16 flex w-full flex-col"
    >
        <span className="flex h-16 w-full items-center justify-center border-b border-b-zinc-200/50 text-sm font-medium text-zinc-500/20">
            <CheckIcon />
        </span>
        <span className="flex h-16 w-full items-center justify-center border-b border-b-zinc-200/50 text-sm font-medium text-zinc-500/20">
            <CrossIcon />
        </span>
    </div>
</div>

<div
    id="col1"
    className="flex w-full flex-col gap-6"
>
    <div
        id="col1-row0"
        className="mt-16 flex w-full flex-col"
    >
        <span className="flex h-16 w-full items-center justify-center border-b border-b-zinc-200/50 text-sm font-medium text-zinc-500/90">
            1,200
        </span>
        <span className="flex h-16 w-full items-center justify-center border-b border-b-zinc-200/50 text-sm font-medium text-zinc-500/90">
            3
        </span>
        <span className="flex h-16 w-full items-center justify-center border-b border-b-zinc-200/50 text-sm font-medium text-zinc-500/90">
            11,000,000
        </span>
        {/* <span className="flex h-16 w-full items-center justify-center border-b border-b-zinc-200/50 text-sm font-medium text-zinc-500/90">
            1
        </span> */}
        <span className="flex h-16 w-full items-center justify-center border-b border-b-zinc-200/50 text-sm font-medium text-zinc-950">
            <CheckIcon />
        </span>
    </div>
    <div
        id="col1-row1"
        className="mt-16 flex w-full flex-col"
    >
        <span className="flex h-16 w-full items-center justify-center border-b border-b-zinc-200/50 text-sm font-medium text-zinc-500/90">
            Unlimited
        </span>
    </div>
    <div
        id="col1-row2"
        className="mt-16 flex w-full flex-col"
    >
        <span className="flex h-16 w-full items-center justify-center border-b border-b-zinc-200/50 text-sm font-medium text-zinc-950">
            <CheckIcon />
        </span>
        <span className="flex h-16 w-full items-center justify-center border-b border-b-zinc-200/50 text-sm font-medium text-zinc-950">
            <CheckIcon />
        </span>
        <span className="flex h-16 w-full items-center justify-center border-b border-b-zinc-200/50 text-sm font-medium text-zinc-950">
            <CheckIcon />
        </span>
    </div>
    <div
        id="col1-row3"
        className="mt-16 flex w-full flex-col"
    >
        <span className="flex h-16 w-full items-center justify-center border-b border-b-zinc-200/50 text-sm font-medium text-zinc-950">
            <CheckIcon />
        </span>
    </div>
    <div
        id="col1-row4"
        className="mt-16 flex w-full flex-col"
    >
        <span className="flex h-16 w-full items-center justify-center border-b border-b-zinc-200/50 text-sm font-medium text-zinc-950">
            <CheckIcon />
        </span>
        <span className="flex h-16 w-full items-center justify-center border-b border-b-zinc-200/50 text-sm font-medium text-zinc-950">
            <CheckIcon />
        </span>
        <span className="flex h-16 w-full items-center justify-center border-b border-b-zinc-200/50 text-sm font-medium text-zinc-500/20">
            <CrossIcon />
        </span>
        <span className="flex h-16 w-full items-center justify-center border-b border-b-zinc-200/50 text-sm font-medium text-zinc-500/20">
            <CrossIcon />
        </span>
    </div>
    <div
        id="col1-row5"
        className="mt-16 flex w-full flex-col"
    >
        <span className="flex h-16 w-full items-center justify-center border-b border-b-zinc-200/50 text-sm font-medium text-zinc-500/20">
            <CrossIcon />
        </span>
        <span className="flex h-16 w-full items-center justify-center border-b border-b-zinc-200/50 text-sm font-medium text-zinc-500/20">
            <CrossIcon />
        </span>
    </div>
    <div
        id="col1-row6"
        className="mt-16 flex w-full flex-col"
    >
        <span className="flex h-16 w-full items-center justify-center border-b border-b-zinc-200/50 text-sm font-medium text-zinc-500/20">
            <CheckIcon />
        </span>
        <span className="flex h-16 w-full items-center justify-center border-b border-b-zinc-200/50 text-sm font-medium text-zinc-500/20">
            <CrossIcon />
        </span>
    </div>
</div>

<div
    id="col2"
    className="flex w-full flex-col gap-6"
>
    <div
        id="col2-row0"
        className="mt-16 flex w-full flex-col"
    >
        <span className="flex h-16 w-full items-center justify-center border-b border-b-zinc-200/50 bg-zinc-50 text-sm font-medium text-zinc-500/90">
            4,200
        </span>
        <span className="flex h-16 w-full items-center justify-center border-b border-b-zinc-200/50 bg-zinc-50 text-sm font-medium text-zinc-500/90">
            5
        </span>
        <span className="flex h-16 w-full items-center justify-center border-b border-b-zinc-200/50 bg-zinc-50 text-sm font-medium text-zinc-500/90">
            Unlimited
        </span>
        {/* <span className="flex h-16 w-full items-center justify-center border-b border-b-zinc-200/50 bg-zinc-50 text-sm font-medium text-zinc-500/90">
            3
        </span> */}
        <span className="flex h-16 w-full items-center justify-center border-b border-b-zinc-200/50 bg-zinc-50 text-sm font-medium text-zinc-950">
            <CheckIcon />
        </span>
    </div>
    <div
        id="col2-row1"
        className="mt-16 flex w-full flex-col"
    >
        <span className="flex h-16 w-full items-center justify-center border-b border-b-zinc-200/50 bg-zinc-50 text-sm font-medium text-zinc-500/90">
            Unlimited
        </span>
    </div>
    <div
        id="col2-row2"
        className="mt-16 flex w-full flex-col"
    >
        <span className="flex h-16 w-full items-center justify-center border-b border-b-zinc-200/50 bg-zinc-50 text-sm font-medium text-zinc-950">
            <CheckIcon />
        </span>
        <span className="flex h-16 w-full items-center justify-center border-b border-b-zinc-200/50 bg-zinc-50 text-sm font-medium text-zinc-950">
            <CheckIcon />
        </span>
        <span className="flex h-16 w-full items-center justify-center border-b border-b-zinc-200/50 bg-zinc-50 text-sm font-medium text-zinc-950">
            <CheckIcon />
        </span>
    </div>
    <div
        id="col2-row3"
        className="mt-16 flex w-full flex-col"
    >
        <span className="flex h-16 w-full items-center justify-center border-b border-b-zinc-200/50 bg-zinc-50 text-sm font-medium text-zinc-950">
            <CheckIcon />
        </span>
    </div>
    <div
        id="col2-row4"
        className="mt-16 flex w-full flex-col"
    >
        <span className="flex h-16 w-full items-center justify-center border-b border-b-zinc-200/50 bg-zinc-50 text-sm font-medium text-zinc-950">
            <CheckIcon />
        </span>
        <span className="flex h-16 w-full items-center justify-center border-b border-b-zinc-200/50 bg-zinc-50 text-sm font-medium text-zinc-950">
            <CheckIcon />
        </span>
        <span className="flex h-16 w-full items-center justify-center border-b border-b-zinc-200/50 bg-zinc-50 text-sm font-medium text-zinc-950">
            <CheckIcon />
        </span>
        <span className="flex h-16 w-full items-center justify-center border-b border-b-zinc-200/50 bg-zinc-50 text-sm font-medium text-zinc-950">
            <CheckIcon />
        </span>
    </div>
    <div
        id="col2-row5"
        className="mt-16 flex w-full flex-col"
    >
        <span className="flex h-16 w-full items-center justify-center border-b border-b-zinc-200/50 bg-zinc-50 text-sm font-medium text-zinc-500/20">
            <CrossIcon />
        </span>
        <span className="flex h-16 w-full items-center justify-center border-b border-b-zinc-200/50 bg-zinc-50 text-sm font-medium text-zinc-500/20">
            <CheckIcon />
        </span>
    </div>
    <div
        id="col2-row6"
        className="mt-16 flex w-full flex-col"
    >
        <span className="flex h-16 w-full items-center justify-center border-b border-b-zinc-200/50 bg-zinc-50 text-sm font-medium text-zinc-500/20">
            <CheckIcon />
        </span>
        <span className="flex h-16 w-full items-center justify-center border-b border-b-zinc-200/50 bg-zinc-50 text-sm font-medium text-zinc-500/20">
            <CheckIcon />
        </span>
    </div>
</div>

<div
    id="col3"
    className="flex w-full flex-col gap-6"
>
    <div
        id="col3-row0"
        className="mt-16 flex w-full flex-col"
    >
        <span className="flex h-16 w-full items-center justify-center border-b border-b-zinc-200/50 text-sm font-medium text-zinc-500/90">
            Unlimited
        </span>
        <span className="flex h-16 w-full items-center justify-center border-b border-b-zinc-200/50 text-sm font-medium text-zinc-500/90">
            Unlimited
        </span>
        <span className="flex h-16 w-full items-center justify-center border-b border-b-zinc-200/50 text-sm font-medium text-zinc-500/90">
            Unlimited
        </span>
        {/* <span className="flex h-16 w-full items-center justify-center border-b border-b-zinc-200/50 text-sm font-medium text-zinc-500/90">
            5
        </span> */}
        <span className="flex h-16 w-full items-center justify-center border-b border-b-zinc-200/50 text-sm font-medium text-zinc-950">
            <CheckIcon />
        </span>
    </div>
    <div
        id="col3-row1"
        className="mt-16 flex w-full flex-col"
    >
        <span className="flex h-16 w-full items-center justify-center border-b border-b-zinc-200/50 text-sm font-medium text-zinc-500/90">
            Unlimited
        </span>
    </div>
    <div
        id="col3-row2"
        className="mt-16 flex w-full flex-col"
    >
        <span className="flex h-16 w-full items-center justify-center border-b border-b-zinc-200/50 text-sm font-medium text-zinc-950">
            <CheckIcon />
        </span>
        <span className="flex h-16 w-full items-center justify-center border-b border-b-zinc-200/50 text-sm font-medium text-zinc-950">
            <CheckIcon />
        </span>
        <span className="flex h-16 w-full items-center justify-center border-b border-b-zinc-200/50 text-sm font-medium text-zinc-950">
            <CheckIcon />
        </span>
    </div>
    <div
        id="col3-row3"
        className="mt-16 flex w-full flex-col"
    >
        <span className="flex h-16 w-full items-center justify-center border-b border-b-zinc-200/50 text-sm font-medium text-zinc-950">
            <CheckIcon />
        </span>
    </div>
    <div
        id="col3-row4"
        className="mt-16 flex w-full flex-col"
    >
        <span className="flex h-16 w-full items-center justify-center border-b border-b-zinc-200/50 text-sm font-medium text-zinc-950">
            <CheckIcon />
        </span>
        <span className="flex h-16 w-full items-center justify-center border-b border-b-zinc-200/50 text-sm font-medium text-zinc-950">
            <CheckIcon />
        </span>
        <span className="flex h-16 w-full items-center justify-center border-b border-b-zinc-200/50 text-sm font-medium text-zinc-950">
            <CheckIcon />
        </span>
        <span className="flex h-16 w-full items-center justify-center border-b border-b-zinc-200/50 text-sm font-medium text-zinc-950">
            <CheckIcon />
        </span>
    </div>
    <div
        id="col3-row5"
        className="mt-16 flex w-full flex-col"
    >
        <span className="flex h-16 w-full items-center justify-center border-b border-b-zinc-200/50 text-sm font-medium text-zinc-950">
            <CheckIcon />
        </span>
        <span className="flex h-16 w-full items-center justify-center border-b border-b-zinc-200/50 text-sm font-medium text-zinc-950">
            <CheckIcon />
        </span>
    </div>
    <div
        id="col3-row6"
        className="mt-16 flex w-full flex-col"
    >
        <span className="flex h-16 w-full items-center justify-center border-b border-b-zinc-200/50 text-sm font-medium text-zinc-950">
            <CheckIcon />
        </span>
        <span className="flex h-16 w-full items-center justify-center border-b border-b-zinc-200/50 text-sm font-medium text-zinc-950">
            <CheckIcon />
        </span>
    </div>
</div>

                            </div>
                        </div>
                    </section>
                    <MobilePricingFeatures />
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

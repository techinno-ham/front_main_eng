import CheckSVG from "../../shared/CheckSVG"
import CrossSVG from "../../shared/CrossSVG"

const EnterprisePricingMobile = () => {
    return (
        <>
    <div className="flex w-full flex-row items-center justify-between px-2">
        <div className="flex flex-col items-start justify-center">
            <span className="text-xl font-semibold">
                Contact Us
            </span>
        </div>
        <a target="_blank" href="https://telegram.me/Chatsys">
            <button className="bg-white-gradient shadow-button hover:shadow-button-hover hover:bg-white-gradient-hover active:bg-white-gradient-hover disabled:hover:shadow-button disabled:hover:bg-white-gradient inline-flex h-12 items-center justify-center whitespace-nowrap rounded-xl border py-3 text-base font-medium text-zinc-950 transition-all duration-100 ease-in-out hover:border-zinc-500 active:border-zinc-400 active:opacity-70 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:border-zinc-200 disabled:hover:text-zinc-950">
                Choose Organizational Plan
            </button>
        </a>
    </div>
    <div
        data-orientation="horizontal"
        role="none"
        className="h-0.5 w-full shrink-0 bg-zinc-200 drop-shadow-lg dark:bg-zinc-500"
    ></div>
    <div className="flex flex-col gap-4 px-3">
        <div className="flex w-full flex-col">
            <span className="pricing-header text-xl font-semibold">
                Settings
            </span>
            <div className="flex w-full flex-row items-center justify-start gap-2">
                <span className="w-3/4 border-b border-b-zinc-200/50 py-5 text-sm font-medium text-zinc-900">
                    Monthly Messages
                </span>
                <span className="flex h-16 w-1/4 items-center justify-end border-b border-b-zinc-200/50 text-sm font-medium text-zinc-500/90">
                    Unlimited
                </span>
            </div>
            <div className="flex w-full flex-row items-center justify-start gap-2">
                <span className="w-3/4 border-b border-b-zinc-200/50 py-5 text-sm font-medium text-zinc-900">
                    AI Assistant
                </span>
                <span className="flex h-16 w-1/4 items-center justify-end border-b border-b-zinc-200/50 text-sm font-medium text-zinc-500/90">
                    Unlimited
                </span>
            </div>
            <div className="flex w-full flex-row items-center justify-start gap-2">
                <span className="w-3/4 border-b border-b-zinc-200/50 py-5 text-sm font-medium text-zinc-900">
                    Character/Assistant Storage
                </span>
                <span className="flex h-16 w-1/4 items-center justify-end border-b border-b-zinc-200/50 text-sm font-medium text-zinc-500/90">
                    Unlimited
                </span>
            </div>
            <div className="flex w-full flex-row items-center justify-start gap-2">
                <span className="w-3/4 border-b border-b-zinc-200/50 py-5 text-sm font-medium text-zinc-900">
                    Use on Website
                </span>
                <span className="flex h-16 w-1/4 items-center justify-end border-b border-b-zinc-200/50 text-sm font-medium text-zinc-950">
                    <CheckSVG />
                </span>
            </div>
        </div>
        <div className="flex w-full flex-col">
            <span className="pricing-header text-xl font-semibold">
                Training
            </span>
            <div className="flex w-full flex-row items-center justify-start gap-2">
                <span className="w-3/4 border-b border-b-zinc-200/50 py-5 text-sm font-medium text-zinc-900">
                    Links
                </span>
                <span className="flex h-16 w-1/4 items-center justify-end border-b border-b-zinc-200/50 text-sm font-medium text-zinc-500/90">
                    Unlimited
                </span>
            </div>
        </div>
        <div className="flex w-full flex-col">
            <span className="pricing-header text-xl font-semibold">
                Activity
            </span>
            <div className="flex w-full flex-row items-center justify-start gap-2">
                <span className="w-3/4 border-b border-b-zinc-200/50 py-5 text-sm font-medium text-zinc-900">
                    Chat History
                </span>
                <span className="flex h-16 w-1/4 items-center justify-end border-b border-b-zinc-200/50 text-sm font-medium text-zinc-950">
                    <CheckSVG />
                </span>
            </div>
            <div className="flex w-full flex-row items-center justify-start gap-2">
                <span className="w-3/4 border-b border-b-zinc-200/50 py-5 text-sm font-medium text-zinc-900">
                    Information Form (Coming Soon)
                </span>
                <span className="flex h-16 w-1/4 items-center justify-end border-b border-b-zinc-200/50 text-sm font-medium text-zinc-950">
                    <CheckSVG />
                </span>
            </div>
            <div className="flex w-full flex-row items-center justify-start gap-2">
                <span className="w-3/4 border-b border-b-zinc-200/50 py-5 text-sm font-medium text-zinc-900">
                    Analytics
                </span>
                <span className="flex h-16 w-1/4 items-center justify-end border-b border-b-zinc-200/50 text-sm font-medium text-zinc-500/20">
                    <CheckSVG />
                </span>
            </div>
        </div>
        <div className="flex w-full flex-col">
            <span className="pricing-header text-xl font-semibold">
                Integrations and API
            </span>
            <div className="flex w-full flex-row items-center justify-start gap-2">
                <span className="w-3/4 border-b border-b-zinc-200/50 py-5 text-sm font-medium text-zinc-900">
                    API Access (Coming Soon)
                </span>
                <span className="flex h-16 w-1/4 items-center justify-end border-b border-b-zinc-200/50 text-sm font-medium text-zinc-500/20">
                    <CheckSVG />
                </span>
            </div>
        </div>
        <div className="flex w-full flex-col">
            <span className="pricing-header text-xl font-semibold">
                AI Model
            </span>
            <div className="flex w-full flex-row items-center justify-start gap-2">
                <span className="w-3/4 border-b border-b-zinc-200/50 py-5 text-sm font-medium text-zinc-900">
                    GPT-3.5
                </span>
                <span className="flex h-16 w-1/4 items-center justify-end border-b border-b-zinc-200/50 text-sm font-medium text-zinc-950">
                    <CheckSVG />
                </span>
            </div>
            <div className="flex w-full flex-row items-center justify-start gap-2">
                <span className="w-3/4 border-b border-b-zinc-200/50 py-5 text-sm font-medium text-zinc-900">
                    GPT-4o (Most Advanced and Efficient Model)
                </span>
                <span className="flex h-16 w-1/4 items-center justify-end border-b border-b-zinc-200/50 text-sm font-medium text-zinc-950">
                    <CheckSVG />
                </span>
            </div>
            <div className="flex w-full flex-row items-center justify-start gap-2">
                <span className="w-3/4 border-b border-b-zinc-200/50 py-5 text-sm font-medium text-zinc-900">
                    GPT-4-Turbo
                </span>
                <span className="flex h-16 w-1/4 items-center justify-end border-b border-b-zinc-200/50 text-sm font-medium text-zinc-500/20">
                    <CheckSVG />
                </span>
            </div>
            <div className="flex w-full flex-row items-center justify-start gap-2">
                <span className="w-3/4 border-b border-b-zinc-200/50 py-5 text-sm font-medium text-zinc-900">
                    GPT-4
                </span>
                <span className="flex h-16 w-1/4 items-center justify-end border-b border-b-zinc-200/50 text-sm font-medium text-zinc-500/20">
                    <CheckSVG />
                </span>
            </div>
        </div>
        <div className="flex w-full flex-col">
            <span className="pricing-header text-xl font-semibold">
                Branding
            </span>
            <div className="flex w-full flex-row items-center justify-start gap-2">
                <span className="w-3/4 border-b border-b-zinc-200/50 py-5 text-sm font-medium text-zinc-900">
                    Remove Chatsys Logo
                </span>
                <span className="flex h-16 w-1/4 items-center justify-end border-b border-b-zinc-200/50 text-sm font-medium text-zinc-500/20">
                    <CheckSVG />
                </span>
            </div>
            <div className="flex w-full flex-row items-center justify-start gap-2">
                <span className="w-3/4 border-b border-b-zinc-200/50 py-5 text-sm font-medium text-zinc-900">
                    Your Custom Domain or Logo
                </span>
                <span className="flex h-16 w-1/4 items-center justify-end border-b border-b-zinc-200/50 text-sm font-medium text-zinc-500/20">
                    <CheckSVG />
                </span>
            </div>
        </div>
        <div className="flex w-full flex-col">
            <span className="pricing-header text-xl font-semibold">
                Support
            </span>
            <div className="flex w-full flex-row items-center justify-start gap-2">
                <span className="w-3/4 border-b border-b-zinc-200/50 py-5 text-sm font-medium text-zinc-900">
                    24/7 Support
                </span>
                <span className="flex h-16 w-1/4 items-center justify-end border-b border-b-zinc-200/50 text-sm font-medium text-zinc-500/20">
                    <CheckSVG />
                </span>
            </div>
            <div className="flex w-full flex-row items-center justify-start gap-2">
                <span className="w-3/4 border-b border-b-zinc-200/50 py-5 text-sm font-medium text-zinc-900">
                    Dedicated Consulting
                </span>
                <span className="flex h-16 w-1/4 items-center justify-end border-b border-b-zinc-200/50 text-sm font-medium text-zinc-500/20">
                    <CheckSVG />
                </span>
            </div>
        </div>
    </div>
</>

    )
}

export default EnterprisePricingMobile

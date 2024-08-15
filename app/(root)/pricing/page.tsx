import Pricing from "@/src/modules/pricing"
import { Metadata, NextPage } from "next"

const PricingPage: NextPage = () => {
    return <Pricing />
}

export const metadata: Metadata = {
    title: "قیمت‌ | همیارچت - دستیار هوش مصنوعی مکالمه‌ای",
    description:
        "با همیارچت، راه‌حل‌های پشتیبانی مشتریان خود را با قیمت‌های مناسب و انعطاف‌پذیر دریافت کنید. ما بسته‌های مختلفی برای کسب‌وکارهای کوچک و بزرگ ارائه می‌دهیم تا بتوانید بهترین گزینه را برای نیازهای خود انتخاب کنید. ارتقاء تجربه مشتریان با هزینه‌ای مقرون به صرفه.",
    // openGraph: {
    //   title: 'Pricing',
    // },
    icons: {
        icon: "/logo.svg", // /public path
    },
}

export default PricingPage

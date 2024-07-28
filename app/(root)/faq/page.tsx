import FAQ from "@/src/modules/faq"
import Pricing from "@/src/modules/pricing"
import { Metadata, NextPage } from "next"

const FAQPage: NextPage = () => {
    return <FAQ />
};

export const metadata: Metadata = {
    title: "سوالات متداول | همیارچت - دستیار هوش مصنوعی مکالمه‌ای",
    description:
        "در بخش سوالات متداول همیارچت، پاسخ‌های جامع و دقیقی به پرسش‌های رایج کاربران را پیدا کنید. ما به شما کمک می‌کنیم تا با اطلاعات کامل و شفاف، از پلتفرم دستیار هوش مصنوعی مکالمه‌ای ما به بهترین شکل بهره‌برداری کنید.",
    // openGraph: {
    //   title: 'FAQ',
    // },
    icons: {
        icon: "/logo.svg", // /public path
    },
}

export default FAQPage;

import AboutUs from "@/src/modules/about-us"
import { Metadata, NextPage } from "next"

const AboutUsPage: NextPage = () => {
    return <AboutUs />
}
export const metadata: Metadata = {
    title: "درباره ما | همیارچت - دستیار هوش مصنوعی مکالمه‌ای",
    description:
        "در همیارچت، ما متعهد به بهبود تجربه مشتریان شما از طریق دستیار هوش مصنوعی مکالمه‌ای هستیم. پلتفرم ما با ارائه پاسخ‌های سریع و دقیق، به خودکارسازی پشتیبانی مشتریان کمک کرده و رضایت آن‌ها را افزایش می‌دهد. ما با بهره‌گیری از فناوری‌های پیشرفته، سعی در ارتقاء کسب‌وکار شما داریم.",
    // openGraph: {
    //   title: 'About Us',
    // },
    icons: {
        icon: "/logo.svg", // /public path
    },
}

export default AboutUsPage

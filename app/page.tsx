import Landing from "@/src/modules/landing"
import "./globals.css"
import Header from "@/src/shared/components/layouts/site-layout/header"
import Footer from "@/src/shared/components/layouts/site-layout/footer"
import SelectModalCustom from "@/src/shared/components/common/selectModal"
import { Metadata } from "next"
import SelectModalChat from "@/src/shared/components/common/chatModal"

export default function Home() {
    return (
        <>
            <Header />
            <main>
                <Landing />
                <SelectModalCustom />
                <SelectModalChat />
            </main>
            <Footer />
        </>
    )
}
export const metadata: Metadata = {
    title: "همیارچت | پلتفرم هوش مصنوعی مکالمه‌ای برای خودکارسازی پشتیبانی مشتریان",
    description:
        "با همیارچت، پشتیبانی مشتریان خود را به سطحی جدید ببرید و با پاسخگویی سریع و دقیق، رضایت مشتریان را افزایش دهید. این پلتفرم هوشمند به شما کمک می‌کند تا به صورت خودکار و کارآمد، نیازهای مشتریان خود را برآورده کنید و کسب‌وکار خود را بهبود بخشید.",
    // openGraph: {
    //   title: 'Blog',
    // },
    icons: {
        icon: "/logo.svg", // /public path
      },
}

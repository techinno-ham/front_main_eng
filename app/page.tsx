import Landing from "@/src/modules/landing"
import "./globals.css"
import Header from "@/src/shared/components/layouts/site-layout/header"
import Footer from "@/src/shared/components/layouts/site-layout/footer"
import SelectModalCustom from "@/src/shared/components/common/selectModal"
import { Metadata } from "next"
import SelectModalChat from "@/src/shared/components/common/chatModal"
import Script from "next/script"

export default function Home() {
    return (
        <>
            <Header />
            <main>
                <Landing />
                <SelectModalChat />
            </main>
            <Footer />
            <Script
                id="jsonld-custom-hamyar"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "WebPage",
                        "name": "همیارچت | ارائه‌دهنده دستیارهای شخصی‌سازی‌شده هوش مصنوعی",
                        "url": "https://hamyar.chat",
                        "description": "با همیارچت، پشتیبانی مشتریان خود را به سطحی جدید ببرید و با پاسخگویی سریع و دقیق، رضایت مشتریان را افزایش دهید.",
                        "image": "https://hamyar.chat/logo.svg", // Add the large image URL
                        "primaryImageOfPage": {
                            "@type": "ImageObject",
                            "url": "https://hamyar.chat/ogsocial.png", // URL to the large image
                            "width": 1200,
                            "height": 630,
                        },
                    }),
                }}
            />
        </>
    )
}

export const metadata: Metadata = {
    title: "همیارچت | ارائه‌دهنده دستیارهای شخصی‌سازی‌شده هوش مصنوعی",
    description: "با همیارچت، پشتیبانی مشتریان خود را به سطحی جدید ببرید و با پاسخگویی سریع و دقیق، رضایت مشتریان را افزایش دهید. این پلتفرم هوشمند به شما کمک می‌کند تا به صورت خودکار و کارآمد، نیازهای مشتریان خود را برآورده کنید و کسب‌وکار خود را بهبود بخشید.",
    openGraph: {
        title: "همیارچت | دستیار هوش مصنوعی مکالمه‌ای",
        description: "با همیارچت، پشتیبانی مشتریان خود را به سطحی جدید ببرید و با پاسخگویی سریع و دقیق، رضایت مشتریان را افزایش دهید. این پلتفرم هوشمند به شما کمک می‌کند تا به صورت خودکار و کارآمد، نیازهای مشتریان خود را برآورده کنید و کسب‌وکار خود را بهبود بخشید.",
        url: "https://hamyar.chat", // Replace with the actual URL of your website
        siteName: "همیارچت",
        //@ts-ignore
        logo: "https://hamyar.chat/logo.svg", // Adding 
        images: [
            {
                url: "https://hamyar.chat/ogsocial.png", // Replace with the actual path to your image
                width: 1200, // Standard OG image width
                height: 630, // Standard OG image height
                alt: "همیارچت logo",
            },
        ],
        locale: "fa_IR",
        // type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "همیارچت | ارائه‌دهنده دستیارهای شخصی‌سازی‌شده هوش مصنوعی",
        description: "با همیارچت، پشتیبانی مشتریان خود را به سطحی جدید ببرید و با پاسخگویی سریع و دقیق، رضایت مشتریان را افزایش دهید.",
        images: ["https://hamyar.chat/ogsocial.png"], // Replace with your image URL
    },
    icons: {
        icon: "https://hamyar.chat/logo.svg", // Path to your favicon or logo
    },
}

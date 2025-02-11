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
                        "name": "Chatsys | Provider of Personalized AI Agents",
                        "url": "https://chatsys.co",
                        "description": "With Chatsys, elevate your customer support to a new level and enhance customer satisfaction with fast and accurate responses.",
                        "image": "https://chatsys.co/logo.svg", // Add the large image URL
                        "primaryImageOfPage": {
                            "@type": "ImageObject",
                            "url": "https://chatsys.co/ogsocial.png", // URL to the large image
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
    title: "Chatsys | Provider of Personalized AI Agents",
    description: "With Chatsys, elevate your customer support to a new level and enhance customer satisfaction with fast and accurate responses. This intelligent platform helps you efficiently meet your customers' needs and improve your business.",
    openGraph: {
        title: "Chatsys | Conversational AI Assistant",
        description: "With Chatsys, elevate your customer support to a new level and enhance customer satisfaction with fast and accurate responses. This intelligent platform helps you efficiently meet your customers' needs and improve your business.",
        url: "https://chatsys.co", // Replace with the actual URL of your website
        siteName: "Chatsys",
        //@ts-ignore
        logo: "https://chatsys.co/logo.svg", // Adding
        images: [
            {
                url: "https://chatsys.co/ogsocial.png", // Replace with the actual path to your image
                width: 1200, // Standard OG image width
                height: 630, // Standard OG image height
                alt: "Chatsys logo",
            },
        ],
        locale: "en_US", // Changing locale to English
    },
    twitter: {
        card: "summary_large_image",
        title: "Chatsys | Provider of Personalized AI Agents",
        description: "With Chatsys, elevate your customer support to a new level and enhance customer satisfaction with fast and accurate responses.",
        images: ["https://chatsys.co/ogsocial.png"], // Replace with your image URL
    },
    icons: {
        icon: "https://hamyar.chat/logo.svg", // Path to your favicon or logo
    },
}


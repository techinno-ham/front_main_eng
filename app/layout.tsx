"use client"
import type { Metadata } from "next"
import "./globals.css"
import localFont from "next/font/local"
import Script from "next/script"
import { Toaster, toast } from "sonner"
import { usePathname } from "next/navigation"
import { GoogleTagManager } from "@next/third-parties/google"
import NextTopLoader from "nextjs-toploader";
import { KalameFont, YekanFont } from "@/utils/customFonts"

// const myFont = localFont({
//     src: "../public/fonts/IRANYekanXFaNum-Medium.woff2",
// })

// const iranYekan = localFont({
//     src: [
//       {
//         path: '../public/fonts/IRANYekanXFaNum-Regular.woff2',
//         weight: '400',
//         style: 'normal',
//       },
//       {
//         path: './Roboto-Italic.woff2',
//         weight: '400',
//         style: 'italic',
//       },
//       {
//         path: './Roboto-Bold.woff2',
//         weight: '700',
//         style: 'normal',
//       },
//       {
//         path: './Roboto-BoldItalic.woff2',
//         weight: '700',
//         style: 'italic',
//       },
//     ],
//   })

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    const pathname = usePathname()
    const isMyBotsPath =
        pathname.startsWith("/mybots") ||
        pathname.startsWith("/panel") ||
        pathname.startsWith("/createbot") ||
        pathname.startsWith("/profile") ||
        pathname.startsWith("/invite")

    return (
        <html lang="fa" dir="rtl">
            <GoogleTagManager gtmId="GTM-T2X2G5KR" />
            {/* <meta name="google-site-verification" content="3FbQ4PAZdyck6bvmlbuo4EwVvgNepkSC1-SuPA-R_HY" /> */}
            <body
                className={`${KalameFont.variable} ${YekanFont.variable} ${isMyBotsPath && "bg-[#F6F8FB]"}`}
            >
                {/* WARNING: dont remove this code , necessary for google search console */}
                {/* <noscript>
                    <iframe
                        src="https://www.googletagmanager.com/ns.html?id=GTM-T2X2G5KR"
                        height="0"
                        width="0"
                        style={{ display: "none", visibility: "hidden" }}
                    ></iframe>
                </noscript> */}
                <Toaster position="top-center" richColors />
                <NextTopLoader showSpinner={false} />
                {children}
                {/* <script
                    src="https://hamyar.chat/cdn/widget/v1.0.0/hamyarchat-embedded.js"
                    hamyar-bot-token="OGNkYzE2ZmYtYzhmMi00MTVmLWFiNjMtYWI3YWE0NGQ5N2VjLjE3NDNmZmZk"
                    id="hamyarChatbotScript"
                    nonce="XUENAJFW"
                    async
                 defer></script> */}
                
            </body>
        </html>
    )
}

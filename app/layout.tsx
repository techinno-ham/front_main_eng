"use client"
import type { Metadata } from "next"
import "./globals.css"
import localFont from "next/font/local"
import Script from "next/script"
import { Toaster, toast } from "sonner"
import { usePathname } from "next/navigation"
import { GoogleTagManager } from "@next/third-parties/google"
import NextTopLoader from "nextjs-toploader"
import { KalameFont, YekanFont } from "@/utils/customFonts"

import { Inter } from "next/font/google"
import { Roboto } from 'next/font/google';
import { Montserrat } from 'next/font/google';
import { Lato } from 'next/font/google';

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
    display: "swap",
})

const roboto = Roboto({
    subsets: ['latin'],
    variable: '--font-roboto',
    display: 'swap',
    weight: "500"
});

const montserrat = Montserrat({
    subsets: ['latin'],
    variable: '--font-montserrat',
    display: 'swap',
    weight: "700"
  });

const lato = Lato({
    subsets: ['latin'],
    variable: '--font-lato',
    display: 'swap',
    weight: "700"
  });

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    const pathname = usePathname()
    const ChatBotScript = !pathname.startsWith("/bot")
    const isMyBotsPath =
        pathname.startsWith("/mybots") ||
        pathname.startsWith("/panel") ||
        pathname.startsWith("/createbot") ||
        pathname.startsWith("/profile") ||
        pathname.startsWith("/invite")

    return (
        <html lang="fa" dir={ChatBotScript ? "ltr" : "ltr"}>
            <GoogleTagManager gtmId="GTM-T2X2G5KR" />
            {/* <meta name="google-site-verification" content="3FbQ4PAZdyck6bvmlbuo4EwVvgNepkSC1-SuPA-R_HY" /> */}
            <body
                className={`${KalameFont.variable} 
                ${YekanFont.variable} 
                ${inter.variable}
                 ${roboto.variable}
                 ${montserrat.variable}
                 ${lato.variable}
                  ${isMyBotsPath && "bg-[#F6F8FB]"}`}
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
                {ChatBotScript && (
                    <script
                        src="https://chatsys.co/cdn/chatsys-widget/v1.0.0/chatsys-embedded.js"
                        chatsys-bot-token="OGNkYzE2ZmYtYzhmMi00MTVmLWFiNjMtYWI3YWE0NGQ5N2VjLjE3NDNmZmZk"
                        id="chatsysChatbotScript"
                        nonce="XUENAJFW"
                        async
                        defer
                    ></script>
                )}
            </body>
        </html>
    )
}

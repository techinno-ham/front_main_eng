"use client"
import type { Metadata } from "next"
import "./globals.css"
import localFont from "next/font/local"
import Script from "next/script"
import { Toaster, toast } from "sonner"
import { usePathname } from "next/navigation"

const myFont = localFont({
    src: "../public/fonts/iranyekanwebbold.woff2",
})

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    const pathname = usePathname()
    const isMyBotsPath =
        pathname.startsWith("/mybots") ||
        pathname.startsWith("/panel") ||
        pathname.startsWith("/createbot")

    return (
        <html lang="fa" dir="rtl">
            <body
                className={`${myFont.className} ${isMyBotsPath && "bg-[#F6F8FB]"}`}
            >
                <Toaster position="top-center" richColors />
                {children}
                <Script
                    src="/scripts/bot.js"
                    id="myScript"
                    nonce="XUENAJFW"
                    defer
                    data-token=""
                />
            </body>
        </html>
    )
}

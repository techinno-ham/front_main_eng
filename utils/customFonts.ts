import localFont from "next/font/local";

const YekanFont = localFont({
    src: [
        {
            path: "../public/fonts/yekan/IRANYekanXFaNum-Regular.woff2",
            weight: "400",
            style: "normal",
        },
        {
            path: "../public/fonts/yekan/IRANYekanXFaNum-Medium.woff2",
            weight: "500",
            style: "normal",
        },
        {
            path: "../public/fonts/yekan/IRANYekanXFaNum-SemiBold.woff2",
            weight: "600",
            style: "normal",
        },
        {
            path: "../public/fonts/yekan/IRANYekanXFaNum-Bold.woff2",
            weight: "700",
            style: "normal",
        },
    ],
    variable: "--font-yekan",
});

const KalameFont = localFont({
    src: [
        {
            path: "../public/fonts/kalame/KalamehWebFaNum-Regular.woff2",
            weight: "400",
            style: "normal",
        },
        {
            path: "../public/fonts/kalame/KalamehWebFaNum-Medium.woff2",
            weight: "500",
            style: "normal",
        },
        {
            path: "../public/fonts/kalame/KalamehWebFaNum-SemiBold.woff2",
            weight: "600",
            style: "normal",
        },
        {
            path: "../public/fonts/kalame/KalamehWebFaNum-Bold.woff2",
            weight: "700",
            style: "normal",
        },
        {
            path: "../public/fonts/kalame/KalamehWebFaNum-ExtraBold.woff2",
            weight: "800",
            style: "normal",
        },
        {
            path: "../public/fonts/kalame/KalamehWebFaNum-Black.woff2",
            weight: "900",
            style: "normal",
        },
    ],
    variable: "--font-kalame",
});

export { YekanFont, KalameFont };
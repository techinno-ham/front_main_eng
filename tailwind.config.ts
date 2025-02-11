import type { Config } from "tailwindcss"

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                //Todo: yekan: ["var(--font-yekan)"],
                yekan: ["var(--font-inter)", "sans-serif"],
                //Todo: kalame: ["var(--font-kalame)"],
                kalame: ["var(--font-inter)", "sans-serif"],
              },
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            width: {
                "calc-100vw-minus-280px": "calc(100vw - 300px)",
            },
            colors: {
                "custom-blue": "#1e90ffe6",
            },
        },
    },
    plugins: [],
}
export default config

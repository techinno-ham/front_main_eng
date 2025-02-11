import FAQ from "@/src/modules/faq"
import Pricing from "@/src/modules/pricing"
import { Metadata, NextPage } from "next"

const FAQPage: NextPage = () => {
    return <FAQ />
}

export const metadata: Metadata = {
    title: "FAQ | Chatsys - Conversational AI Assistant",
    description:
        "In the FAQ section of Chatsys, find comprehensive and accurate answers to the most common user questions. We help you make the best use of our conversational AI assistant platform with complete and clear information.",
    // openGraph: {
    //   title: 'FAQ',
    // },
    icons: {
        icon: "/logo.svg", // /public path
    },
}


export default FAQPage

import Features from "@/src/modules/features"
import { Metadata, NextPage } from "next"

const FeaturesPage: NextPage = () => {
    return <Features/>
}
export const metadata: Metadata = {
    title: "Features | Chatsys - Conversational AI Assistant",
    description:
        "At Chatsys, we are committed to enhancing your customer experience through a conversational AI assistant. Our platform helps automate customer support by providing fast and accurate responses, increasing customer satisfaction. Using advanced technologies, we aim to elevate your business.",
    // openGraph: {
    //   title: 'About Us',
    // },
    icons: {
        icon: "/logo.svg", // /public path
    },
}


export default FeaturesPage

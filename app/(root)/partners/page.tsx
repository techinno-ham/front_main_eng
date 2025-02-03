import AboutUs from "@/src/modules/about-us"
import Partners from "@/src/modules/partners"
import { Metadata, NextPage } from "next"

const PrtnersPage: NextPage = () => {
    return <Partners />
}
export const metadata: Metadata = {
    title: "Invite Friends | HamyarChat - Conversational AI Assistant",
    description:
        "At HamyarChat, we are committed to enhancing your customers' experience through a conversational AI assistant. Our platform provides fast and accurate responses, helping to automate customer support and increase their satisfaction. By leveraging advanced technologies, we aim to elevate your business.",
    // openGraph: {
    //   title: 'About Us',
    // },
    icons: {
        icon: "/logo.svg", // /public path
    },
}

export default PrtnersPage

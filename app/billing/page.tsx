import AboutUs from "@/src/modules/about-us"
import BillingSuccessPage from "@/src/modules/billing"
import Partners from "@/src/modules/partners"
import { Metadata, NextPage } from "next"


const BillingPage: NextPage = () => {
    return <BillingSuccessPage/>
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

export default BillingPage

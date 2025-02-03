import BillingSuccessPage from "@/src/modules/billing"
import { Metadata, NextPage } from "next"
import { Suspense } from "react"

const BillingPage: NextPage = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <BillingSuccessPage />
        </Suspense>
    )
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

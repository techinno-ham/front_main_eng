import Pricing from "@/src/modules/pricing"
import { Metadata, NextPage } from "next"

const PricingPage: NextPage = () => {
    return <Pricing />
}

export const metadata: Metadata = {
    title: "Pricing | HamyarChat - Conversational AI Assistant",
    description:
        "With HamyarChat, get customer support solutions at affordable and flexible prices. We offer various packages for both small and large businesses so you can choose the best option for your needs. Enhance customer experience at a cost-effective price.",
    // openGraph: {
    //   title: 'Pricing',
    // },
    icons: {
        icon: "/logo.svg", // /public path
    },
}


export default PricingPage

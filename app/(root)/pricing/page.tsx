import Pricing from "@/src/modules/pricing"
import { Metadata, NextPage } from "next"

const PricingPage: NextPage = () => {
    return <Pricing />
};

export const metadata: Metadata = {
    title: " همیارچت  | قیمت ",
    icons: {
        icon: "/logo.svg", // /public path
      },
}

export default PricingPage

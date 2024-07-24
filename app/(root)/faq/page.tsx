import FAQ from "@/src/modules/faq"
import Pricing from "@/src/modules/pricing"
import { Metadata, NextPage } from "next"

const FAQPage: NextPage = () => {
    return <FAQ />
};

export const metadata: Metadata = {
    title: " همیارچت  |سوالات متداول",
    icons: {
        icon: "/logo.svg", // /public path
      },
}

export default FAQPage;

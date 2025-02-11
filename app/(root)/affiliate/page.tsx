import Affiliate from "@/src/modules/Affiliate"
import { Metadata, NextPage } from "next"

const AffiliatePage: NextPage = () => {
    return <Affiliate />
}

export const metadata: Metadata = {
    title: "Blogs | Chatsys - Conversational AI Assistant",
    description:
        "With Chatsys blogs, stay updated with the latest news and articles related to conversational AI assistants. Educational content, tips and tricks, and case studies will help you stay up-to-date and leverage modern technologies in your business.",
    // openGraph: {
    //   title: 'Blogs',
    // },
    icons: {
        icon: "/logo.svg", // /public path
    },
}

export default AffiliatePage
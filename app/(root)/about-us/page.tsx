import AboutUs from "@/src/modules/about-us"
import { Metadata, NextPage } from "next"

const AboutUsPage: NextPage = () => {
    return <AboutUs />
}
export const metadata: Metadata = {
    title: "About Us | HamyarChat - Conversational AI Assistant",
    description:
        "At HamyarChat, we are committed to enhancing your customers' experience through a conversational AI assistant. Our platform helps automate customer support by providing quick and accurate responses, increasing customer satisfaction. With the use of advanced technologies, we strive to elevate your business.",
    // openGraph: {
    //   title: 'About Us',
    // },
    icons: {
        icon: "/logo.svg", // /public path
    },
}


export default AboutUsPage

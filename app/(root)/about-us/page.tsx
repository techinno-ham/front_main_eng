import AboutUs from "@/src/modules/about-us"
import { Metadata, NextPage } from "next"

const AboutUsPage: NextPage = () => {
    return <AboutUs />
};
export const metadata: Metadata = {
    title: "همیارچت  |در باره ی ما  ",
    icons: {
        icon: "/logo.svg", // /public path
      },
}

export default AboutUsPage

import Mycontact from "@/src/modules/contact"
import Deploy from "@/src/modules/deploy"
import { Metadata, NextPage } from "next"

const DashboardConatctPage: NextPage = () => {
    return (
        <>
            {" "}
            <Mycontact />
        </>
    )
}
export const metadata: Metadata = {
    title: "AI Assistant Contacts | HamyarChat",
    description: "AI Assistant contacts in HamyarChat.",
    icons: {
        icon: "/logo.svg", 
    },
}

export default DashboardConatctPage;

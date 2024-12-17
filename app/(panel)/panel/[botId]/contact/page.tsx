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
    title: "مخاطبین دستیار هوش مصنوعی | همیارچت",
    description: " مخاطبین  دستیار هوش مصنوعی در همیارچت .",
    icons: {
        icon: "/logo.svg", 
    },
}
export default DashboardConatctPage;

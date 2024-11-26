import Analytics from "@/src/modules/analytics"
import { Metadata, NextPage } from "next"

const AnalyticsPage: NextPage = () => {
    return (
        <>
            {" "}
            <Analytics botId={""} />
        </>
    )
}
export const metadata: Metadata = {
    title: "استقرار دستیار هوش مصنوعی | همیارچت",
    description: "استقرار و مدیریت دستیار هوش مصنوعی در همیارچت.",
    icons: {
        icon: "/logo.svg", // /public path
    },
}
export default AnalyticsPage

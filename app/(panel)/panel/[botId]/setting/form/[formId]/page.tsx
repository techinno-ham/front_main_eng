import Forms from "@/src/modules/froms"
import Setting from "@/src/modules/setting"
import { Metadata, NextPage } from "next"

const DashboardSettingPage: NextPage = () => {
    return (
        <>
            <Forms/>
        </>
    )
}
export const metadata: Metadata = {
    title: "تنظیمات فرم دستیار هوش مصنوعی | همیارچت",
    description: "مدیریت و پیکربندی تنظیمات دستیار هوش مصنوعی در همیارچت.",
    icons: {
        icon: "/logo.svg", // /public path
    },
}

export default DashboardSettingPage

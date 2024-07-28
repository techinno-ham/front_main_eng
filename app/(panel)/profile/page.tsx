import MyBots from "@/src/modules/myBots"
import { Metadata, NextPage } from "next"

const ProfilePage: NextPage = () => {
    return (
        <>
            <span>proflie page</span>
        </>
    )
}
export const metadata: Metadata = {
    title: "پروفایل | همیارچت",
    description: "مدیریت پروفایل کاربری در همیارچت.",
    icons: {
        icon: "/logo.svg", // /public path
    },
}
export default ProfilePage

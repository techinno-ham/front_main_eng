import MyBots from "@/src/modules/myBots"
import Profile from "@/src/modules/profile"
import { Metadata, NextPage } from "next"

const ProfilePage: NextPage = () => {
    return (
        <>
            <Profile />
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

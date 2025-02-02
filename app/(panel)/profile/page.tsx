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
    title: "Profile | HamyarChat",
    description: "User profile management in HamyarChat.",
    icons: {
        icon: "/logo.svg", // /public path
    },
}

export default ProfilePage

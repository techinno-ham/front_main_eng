import Appbar from "@/src/shared/components/layouts/panel-layout/appbar"
import SideBar from "@/src/shared/components/layouts/panel-layout/sidebar"
import SideBarMobile from "@/src/shared/components/layouts/panel-layout/sidebar-mobile"
import { HambergerMenu } from "iconsax-react"
import { Metadata } from "next"

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <div className="flex">
                <SideBar />
                <div className=" w-full  md:ml-[300px] md:w-calc-100vw-minus-280px">
                    <SideBarMobile />
                    {children}
                </div>
                <Appbar />
            </div>
        </>
    )
}
export const metadata: Metadata = {
    title: "User Panel | Chatsys",
    description: "Manage settings and user information in the Chatsys user panel.",
    icons: {
        icon: "/logo.svg", // /public path
    },
}

export default Layout

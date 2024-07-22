import Appbar from "@/src/shared/components/layouts/panel-layout/appbar"
import SideBar from "@/src/shared/components/layouts/panel-layout/sidebar"
import SideBarMobile from "@/src/shared/components/layouts/panel-layout/sidebar-mobile"
import { HambergerMenu } from "iconsax-react"

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <div className="flex">
                <SideBar />
                <div className=" w-full  md:mr-[300px] md:w-calc-100vw-minus-280px">
                    <SideBarMobile />
                    {children}
                </div>
                <Appbar />
            </div>
        </>
    )
}
export default Layout

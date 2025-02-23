"use client"
import {
    Add,
    Book1,
    Category2,
    HambergerMenu,
    LogoutCurve,
    Messages1,
    ProgrammingArrows,
    Setting2,
} from "iconsax-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"

export const sidebarLinks = [
    {
        icon: <Category2 />,
        route: "/panel/[id]",
        label: "Dashboard",  
    },
    {
        icon: <Setting2 />,
        route: "/panel/[id]/setting",
        label: "Settings",  
    },
    {
        icon: <Book1 />,
        route: "/panel/[id]/train",
        label: "Bot Training", 
    },
    {
        icon: <Messages1 />,
        route: "/panel/[id]/mymessage",
        label: "Conversations",  
    },
    {
        icon: <ProgrammingArrows />,
        route: "/panel/[id]/deploy",
        label: "Deployment",  
    }
]

const SideBarMobile = () => {
    const pathname = usePathname()
    const pathSegments = pathname.split("/")
    return (
        <>
            <div className=" relative top-[100px] px-5 md:hidden">
                <div>
                    <span className="text-3xl">
                        {sidebarLinks.find(
                            (item) =>
                                pathname ==
                                item.route.replace("[id]", pathSegments[2]),
                        )?.label || ""}
                    </span>
                </div>
            </div>
        </>
    )
}
export default SideBarMobile

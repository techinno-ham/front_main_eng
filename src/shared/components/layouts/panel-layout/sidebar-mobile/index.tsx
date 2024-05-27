"use client"
import {
    Add,
    Book1,
    Category2,
    HambergerMenu,
    LogoutCurve,
    Messages1,
    Setting2,
} from "iconsax-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"

export const sidebarLinks = [
    {
        icon: <Category2 />,
        route: "/panel/[id]",
        label: "داشبورد",
    },
    {
        icon: <Book1 />,
        route: "/panel/[id]/train",
        label: "آموزش ربات",
    },
    {
        icon: <Messages1 />,
        route: "/panel/[id]/mymessage",
        label: "گفت و گو ها",
    },
    {
        icon: <Setting2 />,
        route: "/panel/[id]/setting",
        label: "تنظیمات",
    },
]

const SideBarMobile = () => {
    const pathname = usePathname()
    const pathSegments = pathname.split("/")
    const [isOpen, setIsOpen] = useState(false)
    return (
        <>
            <div className="mt-[90px] flex justify-between px-5 md:hidden">
                <div>
                    <span className="text-3xl">
                    {sidebarLinks.find((item) =>
                                
                                pathname == item.route.replace("[id]", pathSegments[2]),
                               
                            )?.label || ""}
                    </span>
                </div>
                <div>
                    <button
                        onClick={() => {
                            setIsOpen(!isOpen)
                        }}
                    >
                        {isOpen ? (
                            <Add size="32" className="transform rotate-45"/>
                        ) : (
                            <HambergerMenu size="32" />
                        )}
                    </button>
                    <ul
                        
                        className="top-29 border-blue-gray-50 text-blue-gray-500 shadow-blue-gray-500/10 absolute left-4 z-10  min-w-[160px] flex-col gap-2 overflow-auto rounded-md border bg-white p-3 font-sans text-sm font-normal shadow-lg focus:outline-none "
                        style={{display:isOpen?"flex":"none"}}
                    >
                        {sidebarLinks.map((item) => {
                            const linkRoute = item.route.replace(
                                "[id]",
                                pathSegments[2],
                            )
                            const isActive = pathname === linkRoute
                            return (
                                <li key={item.label} style={{ width: "100%" }}>
                                    <Link href={linkRoute}>
                                        <div
                                            className={`flex cursor-pointer items-center gap-3 rounded-md p-2.5 transition-all ${
                                                isActive
                                                    ? "bg-gray-200 shadow-[0_3px_0px_0px_rgba(30,144,255,0.9)]"
                                                    : "hover:bg-gray-100 hover:shadow-[0_3px_0px_0px_rgba(30,144,255,0.9)]"
                                            }`}
                                        >
                                            {item.icon}
                                            <span>{item.label}</span>
                                        </div>
                                    </Link>
                                </li>
                            )
                        })}
                         <hr className="my-1 border-blue-gray-50" role="menuitem" />
                         <li key={"خروج"} style={{ width: "100%" }}>
                                        <div
                                            className={`flex cursor-pointer items-center gap-3 rounded-md p-2.5 transition-all ${
                                               
                                                     "hover:bg-gray-100 hover:shadow-[0_3px_0px_0px_rgba(30,144,255,0.9)]"
                                            }`}
                                        >
                                            <LogoutCurve className="text-red-600" />
                            <span className=" text-red-600"> خروج</span>
                                           
                                        </div>
                                   
                                </li>
                    </ul>
                </div>
            </div>
        </>
    )
}
export default SideBarMobile

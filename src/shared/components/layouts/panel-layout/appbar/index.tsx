"use client"
import {
    Book1,
    Category2,
    Messages1,
    ProgrammingArrows,
    Setting2,
} from "iconsax-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

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
        icon: <ProgrammingArrows />,
        route: "/panel/[id]/deploy",
        label: "خروجی",
    },
    {
        icon: <Setting2 />,
        route: "/panel/[id]/setting",
        label: "تنظیمات",
    },
]

const Appbar = () => {
    const pathname = usePathname()
    const pathSegments = pathname.split("/")
    return (
        <>
            <div className="fixed bottom-0 z-20 h-20 w-full bg-white px-4 shadow-[0_4px_48.3px_-14px_rgba(0,0,0,0.15)] md:hidden">
                <div className="flex h-full w-full items-center justify-between">
                    {sidebarLinks.map((item, index) => {
                        const linkRoute = item.route.replace(
                            "[id]",
                            pathSegments[2],
                        )
                        const isActive = pathname === linkRoute
                        return (
                            <Link key={index} href={linkRoute}>
                                <div className="flex flex-col items-center ">
                                    <div
                                        className={
                                            isActive
                                                ? "text-blue-500"
                                                : "text-gray-500"
                                        }
                                    >
                                        {item.icon}
                                    </div>
                                    <div>
                                        <span
                                            className={`text-[12px] ${isActive ? "text-blue-500" : "text-gray-500"}`}
                                        >
                                            {item.label}
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        )
                    })}
                </div>
            </div>
        </>
    )
}
export default Appbar

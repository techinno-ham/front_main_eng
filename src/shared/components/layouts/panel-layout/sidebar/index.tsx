"use client"
import {
    Add,
    Book1,
    Category2,
    LogoutCurve,
    Messages1,
    ProgrammingArrows,
    Setting2,
} from "iconsax-react"
import Link from "next/link"
import { useRouter } from "next/navigation"
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

const SideBar = () => {
    const pathname = usePathname()
    const pathSegments = pathname.split("/")

    return (
        <>
            <div className="fixed hidden h-[100vh] w-[300px] bg-white shadow-[0_4px_49px_-14px_rgba(0,0,0,0.16)] md:block">
                <div className="mt-24 flex flex-col gap-8">
                    <div className="flex items-center justify-center">
                        <span className="text-3xl">
                            {sidebarLinks.find(
                                (item) =>
                                    pathname ==
                                    item.route.replace("[id]", pathSegments[2]),
                            )?.label || ""}
                        </span>
                    </div>

                    <ul className="flex w-full list-none flex-col items-center gap-2">
                        {sidebarLinks.map((item) => {
                            const linkRoute = item.route.replace(
                                "[id]",
                                pathSegments[2],
                            )
                            const isActive = pathname === linkRoute
                            return (
                                <li key={item.label} style={{ width: "80%" }}>
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
                    </ul>
                    <div className="mt-5 flex items-center justify-center">
                        <button className="create-btn">
                            <Add />
                            ساختن چت بات جدید
                        </button>
                    </div>

                    <div className="mt-auto flex items-center justify-center">
                        <button className="flex">
                            <LogoutCurve className="text-red-600" />
                            <span className="ml-2 text-red-600"> خروج</span>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default SideBar

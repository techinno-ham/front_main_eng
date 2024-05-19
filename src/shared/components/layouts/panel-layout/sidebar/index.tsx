"use client"
import { Book1, Category2, Messages1, Setting2 } from "iconsax-react"
import { useRouter } from "next/router"

export const sidebarLinks = [
    {
        icon: <Category2 />,
        route: "/panel/",
        label: "داشبورد",
    },
    {
        icon: <Book1 />,
        route: "/panel/train",
        label: "آموزش ربات",
    },
    {
        icon: <Messages1 />,
        route: "/panel/mymessage",
        label: "گفت و گو ها",
    },
    {
        icon: <Setting2 />,
        route: "/panel/setting",
        label: "تنظیمات",
    },
]

const SideBar = () => {
    const router = useRouter()
    return (
        <>
            <div className="none fixed h-[100vh] w-[300px] bg-white md:block">
                <div className="mt-24 flex flex-col gap-4">
                    <div>
                        <span>
                            {sidebarLinks.find(
                                (item) => router.pathname === item.route,
                            )?.label || ""}
                        </span>
                    </div>
                </div>
            </div>
        </>
    )
}
export default SideBar

"use client"
import {
    Activity,
    Add,
    ArrowLeft,
    Book1,
    Category2,
    DocumentText,
    LogoutCurve,
    Messages1,
    ProgrammingArrows,
    Send2,
    Setting2,
    UserSquare,
} from "iconsax-react"
import Link from "next/link"
import { useRouter } from 'nextjs-toploader/app';
import { usePathname } from "next/navigation"

export const sidebarLinks = [
    {
        icon: <Category2 />,
        route: "/panel/[id]",
        label: "داشبورد",
    },

    {
        icon: <Setting2 />,
        route: "/panel/[id]/setting",
        label: "تنظیمات",
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
        icon: <Activity />,
        route: "/panel/[id]/analytics",
        label: "آمار و داده",
    },
    {
        icon: <ProgrammingArrows />,
        route: "/panel/[id]/deploy",
        label: "خروجی",
    },
    {
        icon: <UserSquare/>,
        route: "/panel/[id]/contact",
        label: "مخاطبین",
    },

]

const SideBar = () => {
    const pathname = usePathname()
    const pathSegments = pathname.split("/")
    const router = useRouter()

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
                            );
                            const isActive = pathname === linkRoute;
                            const inFormRoute=pathname.includes("form") && item.label =="تنظیمات";
                            const isContacnt=item.label =="مخاطبین";

                            return (
                                <li key={item.label} style={{ width: "80%" }}>
                                    <Link href={linkRoute}>
                                        <div
                                            className={`flex cursor-pointer items-center gap-3 rounded-md p-2.5 transition-all ${
                                                isActive || inFormRoute
                                                    ? "bg-gray-200 shadow-[0_3px_0px_0px_rgba(30,144,255,0.9)]"
                                                    : "hover:bg-gray-100 hover:shadow-[0_3px_0px_0px_rgba(30,144,255,0.9)]"
                                            }`}
                                        >
                                            {item.icon}
                                            <span>{item.label}</span>
                                               {isContacnt && (
                                                <>
                                                  <span className="bg-yellow-100 text-yellow-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full ">آزمایشی</span>        

                                                </>
                                               )}
                                            {inFormRoute && (
                                              <div className="flex items-center gap-1  text-sm ">
                                                      <ArrowLeft size={16}/>
                                                      <DocumentText size={16} className="mr-2" />
                                                      <span className="mr-1"> فرم</span>
                                              </div>
)}
                                        </div>
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                    <div className="mt-5 flex items-center justify-center">
                        <button
                            className="create-btn flex gap-2"
                            onClick={() => {
                                router.push("/partners")
                            }}
                        >
                            <Send2 />
                            دعوت از دوستان
                        </button>
                    </div>

                    <div className="mt-auto flex items-center justify-center">
                        <div className="w-[80%] ">
                            <hr className="w-full" />
                            <div className="mt-2 flex items-center justify-center">
                                {/* <div className="rounded-xl bg-slate-400 p-2">
                                    <span>0.1.1 V</span>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default SideBar

'use client'

import { Add, Book1, Category2, LogoutCurve, Messages1, Setting2 } from "iconsax-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { usePathname } from 'next/navigation'

export const sidebarLinks = [
    {
        icon: <Category2 />,
        route: "/panel/defe",
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
    const router = useRouter();
    const pathname = usePathname();
   
    return (
        <>
            <div className="none fixed h-[100vh] w-[300px] bg-white md:block">
                <div className="mt-24 flex flex-col gap-8">
                    <div className="flex justify-center items-center">
                        <span className="text-3xl">
                            {sidebarLinks.find(
                                (item) => pathname === item.route,
                            )?.label || ""}
                        </span>
                    </div>


        <ul className="flex flex-col gap-2 list-none w-full items-center">
          {sidebarLinks.map((item: any) => {
            const isActive = pathname == item.route;
            return (
              <li key={item.label} style={{ width: "80%" }}>
                <Link href={item.route}>
                <div
                    className={`flex gap-3 items-center p-2.5 cursor-pointer rounded-md transition-all ${
                      isActive ? 'bg-gray-200 shadow-[0_3px_0px_0px_rgba(30,144,255,0.9)]' : 'hover:bg-gray-100 hover:shadow-[0_3px_0px_0px_rgba(30,144,255,0.9)]'
                    }`}
                  >
                    {item.icon}
                    <span>{item.label}</span>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
        <div className="flex justify-center items-center mt-5">
          <button className="create-btn">
            <Add />
           ساختن چت بات جدید
          </button>
        </div>

        <div className="flex justify-center items-center mt-auto">
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

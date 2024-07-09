"use client"
import useUserStore from "@/src/shared/store/userStore"
import { I3Dcube, LogoutCurve, Profile, Send2 } from "iconsax-react"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import Services from "../../../../../../services/service"
import useLogin from "@/src/modules/auth/hooks/login"

export const sidebarLinks = [
    {
        icon: <Profile />,
        route: "/profile",
        label: "پروفایل",
    },
    {
        icon: <I3Dcube />,
        route: "/mybots",
        label: " بات های من",
    },
    {
        icon: <Send2 />,
        route: "/invite",
        label: "دعوت دوستان",
    },
]

const UserAccount = () => {
    const [open, setOpen] = useState(false)
    const [loading, setLoading] = useState(true)
    const { logout } = useLogin()

    const menuRef = useRef<HTMLImageElement>(null)
    const imgRef = useRef<HTMLImageElement>(null)
    const { user, setUser } = useUserStore()
    const isUserEmpty = !user || Object.keys(user).length === 0

    useEffect(() => {
        if (isUserEmpty) {
            console.log("here")
            const fetchUser = async () => {
                try {
                    const res = await Services.checkToken()
                    setUser(res.data)
                } catch (error) {
                    console.error("Error fetching user:", error)
                } finally {
                    setLoading(false)
                }
            }

            fetchUser()
        } else {
            setLoading(false)
        }
    }, [user])

    const handleClickImage = () => {
        setOpen((prevStata) => !prevStata)
    }
    const handleItemClick = () => {
        setOpen(false)
    }

    const handleClickOutside = (event: any) => {
        if (menuRef.current && imgRef.current) {
            const targetNode = event.target as Node
            if (
                !menuRef.current.contains(targetNode) &&
                !imgRef.current.contains(targetNode)
            ) {
                setOpen(false)
            }
        }
    }

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside)
        return () => {
            document.removeEventListener("mousedown", handleClickOutside)
        }
    }, [])

    return (
        <>
            {loading ? (
                <>
                    <div className="h-6 w-6 animate-spin rounded-full border-2 border-white border-t-blue-600"></div>
                </>
            ) : (
                <>
                    <div className="flex items-center gap-2">
                        <div>
                            <span className="text-[13px] font-semibold">
                                {user?.email || "hoshino@gmail.com"}
                            </span>
                        </div>
                        <div onClick={handleClickImage}>
                            <img
                                ref={imgRef}
                                className="h-10 w-10 cursor-pointer rounded-full p-1 ring-2 ring-gray-300"
                                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                                alt="Bordered avatar"
                            />
                        </div>
                    </div>
                    {open && (
                        <div
                            ref={menuRef}
                            className="border-blue-gray-50 text-blue-gray-500 shadow-blue-gray-500/10 absolute left-1 top-16 z-10  min-w-[160px] flex-col gap-2 overflow-auto rounded-md border bg-white p-1 font-sans text-sm font-normal shadow-lg focus:outline-none"
                        >
                            <div className="px-4 py-3 ">
                                <span className="block text-sm text-gray-900">
                                    {user?.name || "مهدیار"}
                                    <span className="ml-1">
                                        {user?.lastName || "جعفری"}
                                    </span>
                                </span>
                                <span className="block text-sm  text-gray-500">
                                    {user?.email || "hoshino@gmail.com"}
                                </span>
                            </div>
                            <hr className="border-blue-gray-50 " />
                            <ul className="py-1">
                                {sidebarLinks.map((item) => {
                                    return (
                                        <li
                                            key={item.label}
                                            style={{ width: "100%" }}
                                            onClick={handleItemClick}
                                        >
                                            <Link href={item.route}>
                                                <div className="flex cursor-pointer items-center gap-1 rounded-md p-2 hover:bg-blue-200">
                                                    {item.icon}
                                                    <span>{item.label}</span>
                                                </div>
                                            </Link>
                                        </li>
                                    )
                                })}
                                <hr
                                    className="border-blue-gray-50 my-1"
                                    role="menuitem"
                                />
                                <li
                                    key={"خروج"}
                                    style={{ width: "100%" }}
                                    onClick={logout}
                                >
                                    <div className="flex cursor-pointer items-center gap-1 rounded-md p-2 hover:bg-blue-200">
                                        <LogoutCurve className="text-red-600" />
                                        <span className=" text-red-600">
                                            {" "}
                                            خروج
                                        </span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    )}
                </>
            )}
        </>
    )
}
export default UserAccount

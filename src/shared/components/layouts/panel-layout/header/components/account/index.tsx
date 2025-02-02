"use client"
import useUserStore from "@/src/shared/store/userStore"
import { I3Dcube, LogoutCurve, Profile, Send2 } from "iconsax-react"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import Services from "../../../../../../services/service"
import useLogin from "@/src/modules/auth/hooks/login"
import { PlanPricingName } from "@/src/shared/constanst/planPricing";
import dayjs from "dayjs";


export const sidebarLinks = [
    {
        icon: <Profile />,
        route: "/profile",
        label: "Profile",
    },
    {
        icon: <I3Dcube />,
        route: "/mybots",
        label: "My Bots",
    },
    {
        icon: <Send2 />,
        route: "/invite",
        label: "Invite Friends",
    },
]

const UserAccount = () => {
    const [open, setOpen] = useState(false)
    const [loading, setLoading] = useState(true)
    const { logout } = useLogin()

    const menuRef = useRef<HTMLImageElement>(null)
    const imgRef = useRef<HTMLImageElement>(null)
    const { user, setUser, userPlanId } = useUserStore()
    const isUserEmpty = !user || Object.keys(user).length === 0;

    const [remainingDays, setRemainingDays] = useState<number | null>(null)


    useEffect(() => {
        if (isUserEmpty) {
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
    }, [user]);


    useEffect(() => {
        if (userPlanId == "0" && user?.subscriptions?.[0]?.end_date) {
            const endDate = dayjs(user.subscriptions[0].end_date)
            const today = dayjs()
            const daysLeft = endDate.diff(today, "day")
            setRemainingDays(daysLeft)
        }
    }, [userPlanId, user]);

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
                                {user?.email || ""}
                            </span>
                        </div>
                        <div onClick={handleClickImage}>
                            <img
                                ref={imgRef}
                                className="h-10 w-10 cursor-pointer rounded-full p-1 ring-2 ring-gray-300"
                                src={
                                    user.photoUrl
                                        ? user.photoUrl
                                        : "http://84.46.250.91:9000/user-resources/defualtProfile%2Fprofile.svg"
                                }
                                alt="Bordered avatar"
                            />
                        </div>
                    </div>
                    {open && (
                        <div
                            ref={menuRef}
                            className="border-blue-gray-50
                            text-blue-gray-500 shadow-blue-gray-500/10
                             absolute right-1 top-16 z-10
                               min-w-[160px]
                                flex-col gap-2 overflow-auto 
                                rounded-md border bg-white p-1
                                 font-sans text-sm font-normal
                                  shadow-lg focus:outline-none"
                        >
                          
                            <div className="px-4 py-3 ">
                                <span className="block text-sm text-gray-900">
                                    {user?.name || "Mahdyar"}
                                    <span className="ml-1">
                                        {user?.lastName || "Jafari"}
                                    </span>
                                </span>
                                <span className="block text-sm  text-gray-500">
                                    {user?.email || "hoshino@gmail.com"}
                                </span>
                            </div>
                            <div className="flex justify-center mb-1">
                                <div className=" p-1 bg-blue-200 flex justify-center items-center rounded-md border border-blue-500">
                                   <p className="text-[12px]">User  {PlanPricingName[userPlanId]}</p>
                                </div>

                            </div>
                            {remainingDays !== null && (
                                        <div className="mb-3">
                                            <p className="text-[12px] text-center text-gray-500">
                                                {remainingDays} days until account validity expires
                                            </p>
                                            <div className="relative w-full h-2 bg-gray-200 rounded-full mt-1">
                                                <div
                                                    className="absolute top-0 left-0 h-full bg-green-500 rounded-full"
                                                    style={{
                                                        width: `${Math.max(
                                                            ((30-remainingDays) /
                                                                30) *
                                                                100,
                                                            0
                                                        )}%`,
                                                    }}
                                                ></div>
                                            </div>
                                        </div>
                                    )}
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
                                    key={"Logout"}
                                    style={{ width: "100%" }}
                                    onClick={logout}
                                >
                                    <div className="flex cursor-pointer items-center gap-1 rounded-md p-2 hover:bg-blue-200">
                                        <LogoutCurve className="text-red-600" />
                                        <span className=" text-red-600">
                                            {" "}
                                            Logout
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

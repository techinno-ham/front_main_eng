"use client"
import { ArrowRight } from "iconsax-react"
import Image from "next/image"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import UserAccount from "./components/account"
import useUserStore from "@/src/shared/store/userStore"

const HeaderPanel = () => {
    const pathname = usePathname()
    const router = useRouter()

    const useBackPanel = pathname.includes("panel")

    return (
        <>
            <nav
                className={`fixed top-0 z-20 w-full bg-white shadow-[0_4px_48.3px_-14px_rgba(0,0,0,0.15)]`}
            >
                <div className=" flex w-full flex-wrap items-center justify-between p-4">
                    <div className="flex items-center justify-center">
                        {useBackPanel && (
                            <div className="flex">
                                <button
                                    onClick={() => {
                                        router.push("/mybots")
                                    }}
                                >
                                    <ArrowRight />
                                </button>
                            </div>
                        )}
                        <Link href={"/"}>
                            <Image
                                src="/logo.svg"
                                height="40"
                                width="40"
                                alt="Logo"
                                className="md:w-15 md:h-15 mr-2 h-12 w-12 md:mr-5"
                            />
                        </Link>

                        <Link href={"/"}>
                            <span
                                className={`mr-2 text-xl font-bold md:text-2xl `}
                            >
                                هوشینو
                            </span>
                        </Link>
                    </div>

                    <div className="flex gap-4 space-x-3 md:order-2 md:space-x-0 rtl:space-x-reverse">
                        <UserAccount />
                    </div>
                </div>
            </nav>
        </>
    )
}
export default HeaderPanel

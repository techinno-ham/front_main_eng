"use client"
import { CloseCircle, HambergerMenu } from "iconsax-react"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import { useRouter } from 'nextjs-toploader/app';
import useUser from "@/src/shared/hooks/user"

const Header = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [scroll, setScroll] = useState(false)
    const router = useRouter()
    const { isAuthenticated } = useUser()

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 65
            setScroll(isScrolled)
        }

        window.addEventListener("scroll", handleScroll)

        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])
    useEffect(() => {
        if (isOpen) {
            document.body.classList.add("no-scroll")
        } else {
            document.body.classList.remove("no-scroll")
        }
    }, [isOpen])
    const handleLinkClick = (href: string) => {
        setIsOpen(false)
        router.push(href)
    }
    const links: any = [
        {
            link: "/features",
            title: "امکانات",
        },
        {
            link: "/pricing",
            title: "قیمت",
        },
        {
            link: "/faq",
            title: "سوالات متداول",
        },
        {
            link: "/blogs",
            title: "بلاگ",
        },
        {
            link: "/about-us",
            title: "درباره‌ی ما",
        },
    ]

    return (
        <>
            <nav
                className={`sticky top-0 z-50 w-full 
                    transition-all
                    
                    ${scroll ? "border-b-2 border-blue-500 bg-[#0c1026] shadow-md" : "border-b border-gray-200 bg-white shadow-none"}
                    
                    `}
            >
                <div className="container relative mx-auto flex h-auto flex-wrap items-center justify-between overflow-hidden p-4  px-4   2xl:px-20">
                    <Link href={"/"}>
                        <div className="flex items-center justify-center">
                            <Image
                                src="/logo.svg"
                                height="60"
                                width="60"
                                alt="Logo"
                            />
                            <span
                                className={`mr-2 text-xl font-bold md:text-2xl ${scroll && "text-[#fff]"}`}
                            >
                                همیارچت{" "}
                            </span>
                        </div>
                    </Link>

                    <div
                        className="hidden w-full items-center justify-between md:order-1 md:flex md:w-auto"
                        id="navbar-sticky"
                    >
                        <ul className="mt-4 flex flex-col rounded-lg border border-gray-100  p-4 font-medium md:mt-0 md:flex-row md:space-x-8 md:border-0  md:p-0 rtl:space-x-reverse ">
                            {links.map((link: any, index: any) => {
                                return (
                                    <li key={index}>
                                        <Link href={link.link}>
                                            <div
                                                className={`block rounded bg-blue-700 px-3 py-2 text-black md:bg-transparent md:p-0 ${scroll && "text-white"}`}
                                            >
                                                {link.title}
                                            </div>
                                        </Link>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>

                    <div className="flex gap-4 space-x-3 md:order-2 md:space-x-0 rtl:space-x-reverse">
                        {isAuthenticated ? (
                            <>
                                <button
                                    onClick={() => router.push("/mybots")}
                                    type="button"
                                    className="rounded-lg  px-4 py-2 text-center text-sm font-medium text-white"
                                    style={{
                                        backgroundColor: "rgb(29 78 216)",
                                    }}
                                >
                                    پنل کاربری
                                </button>
                            </>
                        ) : (
                            <>
                                <Link href="/auth/login" passHref>
    <button className="hidden rounded-lg px-4 py-2 text-center text-sm font-medium text-white md:block" style={{ backgroundColor: "rgb(29 78 216)" }}>
        ورود | ثبت نام
    </button>
</Link>
<Link href="/auth/login" passHref>
    <button className="rounded-lg px-4 py-2 text-center text-sm font-medium text-white md:hidden" style={{ backgroundColor: "rgb(29 78 216)" }}>
        ورود
    </button>
</Link>
                                {/* <button
                                    onClick={() =>
                                        router.push("/auth/register")
                                    }
                                    type="button"
                                    className="rounded-lg  px-4 py-2 text-center text-sm font-medium text-white"
                                    style={{
                                        backgroundColor: "rgb(29 78 216)",
                                    }}
                                >
                                </button> */}
                            </>
                        )}

                        <button
                            onClick={() => {
                                setIsOpen(!isOpen)
                            }}
                            type="button"
                            className="inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 md:hidden dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                        >
                            {isOpen ? <CloseCircle /> : <HambergerMenu />}
                        </button>
                    </div>
                </div>
                <div>
                    <div
                        className={`navbar-menu absolute w-full items-center justify-between md:hidden ${isOpen ? "menu-open" : "menu-closing"}`}
                        id="navbar-sticky"
                    >
                        <ul
                            className={`flex-col   p-4 font-medium md:mt-0  md:space-x-8 md:border-0 rtl:space-x-reverse  ${scroll ? "bg-[#0c1026]" : "bg-white"}`}
                        >
                            {links.map((link: any, index: any) => (
                                <li key={index}>
                                    <div
                                        onClick={(e) => {
                                            e.preventDefault()
                                            handleLinkClick(link.link)
                                        }}
                                        className={`block rounded px-3 py-2 ${scroll ? "text-white" : "text-black"} md:bg-transparent md:p-0`}
                                    >
                                        {link.title}
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}
export default Header

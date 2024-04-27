import Image from "next/image"
import Link from "next/link"

const Header = () => {

    const links:any = [
        {
          link: "/",
          title: "امکانات",
        },
        {
          link: "/",
          title: "قیمت",
        },
        {
          link: "/",
          title: "مستندات",
        },
        {
          link: "/",
          title: "بلاگ",
        },
        {
          link: "/",
          title: "درباره ی ما",
        },
      ];

    return (
        <>
            <nav className="fixed start-0 top-0 z-20 w-full border-b border-gray-200 bg-white">
                <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4">
                <Link href={"/"} >
                <Image
                            src="/logo.svg"
                            height="120"
                            width="120"
                            alt="Logo"
                        />
                  
                </Link>

                    <div
                        className="hidden w-full items-center justify-between md:order-1 md:flex md:w-auto"
                        id="navbar-sticky"
                    >
                        <ul className="mt-4 flex flex-col rounded-lg border border-gray-100 bg-gray-50 p-4 font-medium md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-white md:p-0 rtl:space-x-reverse ">
                            {links.map((link:any, index:any)=>{
                                return (
                                    <li key={index}>
                                           <Link href={link.link} >
                                            <div className="block rounded bg-blue-700 px-3 py-2 text-black md:bg-transparent md:p-0 ">
                                                {link.title}
                                            </div>
                                            </Link>

                                    </li>
                                )
                            })}
                   
                        </ul>
                    </div>

                       <div className="flex gap-4 space-x-3 md:order-2 md:space-x-0 rtl:space-x-reverse">
                       <button
                            type="button"
                            className="hidden rounded-lg  px-4 py-2 text-center text-sm font-medium md:flex text-black  focus:outline-none focus:ring-4 "
                        >
                           ورود
                        </button>
                        <button
                            type="button"
                            className="rounded-lg bg-blue-700 px-4 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                           ثبت نام
                        </button>
                        <button
                            data-collapse-toggle="navbar-sticky"
                            type="button"
                            className="inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 md:hidden dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                            aria-controls="navbar-sticky"
                            aria-expanded="false"
                        >
                            <span className="sr-only">Open main menu</span>
                            <svg
                                className="h-5 w-5"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 17 14"
                            >
                                <path
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M1 1h15M1 7h15M1 13h15"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </nav>
        </>
    )
}
export default Header

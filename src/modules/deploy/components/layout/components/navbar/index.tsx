"use client"

import {
    Box,
    Brush,
    Danger,
    DocumentCode,
    Global,
    Magicpen,
    Setting2,
} from "iconsax-react"
import TabLink from "./components/tablinks"

const menuItems = [
    {
        title: "اسکریپت",
        store: "CDN",
        icon: <DocumentCode size={20} />,
        isActive: true,
    },
    {
        title: "وب",
        store: "Iframe",
        icon: <Global size={20} />,
        isActive: false,
    },
    {
        title: "پکیج جاوا اسکریپت",
        store: "NPM",
        icon: <Box size={20} />,
        isActive: false,
    },
]

const Navbar = () => {
    return (
        <div>
            <ul className="flex w-[100%] gap-x-[35px] overflow-auto md:gap-x-[70px]">
                {menuItems.map((item) => {
                    return (
                        <li
                            style={{
                                filter: item?.isActive
                                    ? "blur(0px)"
                                    : "blur(1px)",
                                pointerEvents: item?.isActive
                                    ? "pointer"
                                    : "none",
                            }}
                        >
                            <TabLink item={item} />
                        </li>
                    )
                })}
            </ul>
            <hr className="mt-[15px]"></hr>
        </div>
    )
}
export default Navbar

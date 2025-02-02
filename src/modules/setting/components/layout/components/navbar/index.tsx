"use client"

import { Brush, Danger, DocumentText, Magicpen, Setting2 } from "iconsax-react"
import TabLink from "./components/tablinks"

const menuItems = [
    {
        title: "General",   // Changed to English
        store: "General",
        icon: <Setting2 size={20} />,
    },
    {
        title: "Model",   // Changed to English
        store: "Model",
        icon: <Magicpen size={20} />,
    },
    {
        title: "Appearance",  // Changed to English
        store: "Apperence",
        icon: <Brush size={20} />,
    },
    {
        title: "Security",   // Changed to English
        store: "Security",
        icon: <Danger size={20} />,
    },
    {
        title: "Forms",   // Changed to English
        store: "Leads",
        icon: <DocumentText size={20} />,
    },
]

const Navbar = () => {
    return (
        <div>
            <ul className="flex w-[100%] gap-x-[35px] overflow-auto ">
                {menuItems.map((item, index) => {
                    return (
                        <li key={index}>
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

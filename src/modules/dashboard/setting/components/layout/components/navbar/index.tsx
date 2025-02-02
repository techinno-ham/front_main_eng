"use client"

import { Brush, Danger, Magicpen, Setting2 } from "iconsax-react"
import TabLink from "./components/tablinks"

const menuItems = [
    {
        title: "General",
        store: "General",
        icon: <Setting2 size={20} />,
    },
    {
        title: "Core",
        store: "Model",
        icon: <Magicpen size={20} />,
    },
    {
        title: "Appearance",
        store: "Apperence",
        icon: <Brush size={20} />,
    },
    {
        title: "Security",
        store: "Security",
        icon: <Danger size={20} />,
    },
]

const Navbar = () => {
    return (
        <div>
            <ul className="flex w-[100%] gap-x-[35px] overflow-auto">
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

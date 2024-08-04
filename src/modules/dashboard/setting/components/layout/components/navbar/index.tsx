"use client"

import { Brush, Danger, Magicpen, Setting2 } from "iconsax-react"
import TabLink from "./components/tablinks"

const menuItems = [
    {
        title: "عمومی",
        store: "General",
        icon: <Setting2 size={20} />,
    },
    {
        title: "هسته",
        store: "Model",
        icon: <Magicpen size={20} />,
    },
    {
        title: "ظاهری",
        store: "Apperence",
        icon: <Brush size={20} />,
    },
    {
        title: "امنیت",
        store: "Security",
        icon: <Danger size={20} />,
    },
]

const Navbar = () => {
    return (
        <div>
            <ul className="flex w-[100%] gap-x-[35px] overflow-auto md:gap-x-[70px]">
                {menuItems.map((item,index) => {
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

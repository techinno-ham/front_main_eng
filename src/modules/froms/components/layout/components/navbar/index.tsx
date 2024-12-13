"use client"

import { Brush, Danger, DocumentText, Magicpen, Setting2, Share, UserSquare } from "iconsax-react";
import TabLink from "./components/tablink";

const menuItems = [
    {
        title: "عمومی",
        store: "General",
        icon: <Setting2 size={20} />,
    },
    {
        title: "ظاهری",
        store: "Apperence",
        icon: <Brush size={20} />,
    },
    {
        title: "جواب ها",
        store: "Answer",
        icon: <UserSquare size={20} />,
    },
    {
        title: "اشتراک گذاری ",
        store: "Share",
        icon: <Share size={20} />,
    },
]

const Navbar = () => {
    return (
        <div>
            <ul className="flex w-[100%] gap-x-[35px] overflow-auto md:gap-x-[70px]">
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

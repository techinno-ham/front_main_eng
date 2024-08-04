"use client"

import {
    DocumentText1,
    FolderAdd,
    Global,
    MessageQuestion,
    TextalignCenter,
} from "iconsax-react"
import TabLink from "./components/tablinks"

const menuItems = [
    {
        title: "فایل",
        store: "File",
        icon: <DocumentText1 size={20} />,
    },
    {
        title: "متن",
        store: "Text",
        icon: <TextalignCenter size={20} />,
    },
    {
        title: "وبسایت",
        store: "Website",
        icon: <Global size={20} />,
    },
    {
        title: "پرسش و پاسخ",
        store: "QandA",
        icon: <MessageQuestion size={20} />,
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

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
        title: "File",
        store: "File",
        icon: <DocumentText1 size={20} />,
    },
    {
        title: "Text",
        store: "Text",
        icon: <TextalignCenter size={20} />,
    },
    {
        title: "Website",
        store: "Website",
        icon: <Global size={20} />,
    },
    {
        title: "Questions and Answers",
        store: "QandA",
        icon: <MessageQuestion size={20} />,
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
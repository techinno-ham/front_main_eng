"use client"

import TabLink from "./components/tablinks"

const menuItems = [
    {
        title: "فایل",
        store: "File",
    },
    {
        title: "متن",
        store: "Text",
    },
    {
        title: "وبسایت",
        store: "Website",
    },
    {
        title: "پرسش و پاسخ",
        store: "QandA",
    },
]

const Navbar = () => {
    return (
        <div>
            <ul className="flex gap-x-[110px]">
                {menuItems.map((item) => {
                    return (
                        <li>
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

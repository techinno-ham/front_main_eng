"use client"

import TabLink from "./components/tablinks"

const menuItems = [
    {
        title: "عمومی",
        store: "General",
    },
    {
        title: "هسته",
        store: "Model",
    },
    {
        title: "ظاهری",
        store: "Apperence",
    },
    {
        title: "امنیت",
        store: "Security",
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

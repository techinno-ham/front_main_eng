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
            <ul className="flex md:gap-x-[70px] gap-x-[35px] overflow-auto w-[100%]">
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

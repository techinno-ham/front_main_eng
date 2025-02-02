"use client"

import { Box, Global, DocumentCode, Share, Whatsapp } from "iconsax-react"
import TabLink from "./components/tablinks"

const menuItems = [
    {
        title: "Web Deployment",  
        store: "Web",
        icon: <DocumentCode size={20} />,
        isActive: true,
    },
    {
        title: "Sharing", 
        store: "Share",
        icon: <Share size={20} />,
        isActive: true,
    },
    {
        title: "JavaScript Package",  
        store: "NPM",
        icon: <Box size={20} />,
        isActive: false,
    },
    // {
    //     title: "Social Media Integration",  
    //     store: "Integrations",
    //     icon: <Whatsapp size={20} />,
    //     isActive: false,
    // },
]

const Navbar = () => {
    return (
        <div>
            <ul className="scrollable-container-navbar flex w-[100%] gap-x-[35px] overflow-auto">
                {menuItems.map((item, index) => (
                    <li
                        key={index}
                        style={{
                            filter: item.isActive ? "blur(0px)" : "blur(1px)",
                            pointerEvents: item.isActive ? "auto" : "none",
                        }}
                    >
                        <TabLink item={item} />
                    </li>
                ))}
            </ul>
            <hr className="mt-[15px]" />
        </div>
    )
}

export default Navbar

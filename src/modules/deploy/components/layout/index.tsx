"use client"
import { FC, ReactNode } from "react"
import Navbar from "./components/navbar"
interface LayoutProps {
    children: ReactNode; // This allows any valid React node to be passed as children
}


const Layout: FC<LayoutProps> = (props) => {
    return (
        <>
            <div>
                <div className=" w-[100%] rounded-xl border  bg-white p-4">
                    <Navbar />
                    <div>{props.children}</div>
                </div>
            </div>
        </>
    )
}
export default Layout

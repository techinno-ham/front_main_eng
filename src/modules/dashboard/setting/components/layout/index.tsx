"use client"
import { FC } from "react"
import Navbar from "./components/navbar"

const Layout: FC = (props: any) => {
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

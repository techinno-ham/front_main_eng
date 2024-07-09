"use client"
import { FC } from "react"
import Navbar from "./components/navbar"

const Layout: FC = (props: any) => {
    return (
        <>
            <div>
                <div className=" w-[100%] rounded-2xl bg-white p-4 shadow-[0_23px_40px_-20px_rgba(0,0,0,0.08)]">
                    <Navbar />
                    <div>{props.children}</div>
                </div>
            </div>
        </>
    )
}
export default Layout

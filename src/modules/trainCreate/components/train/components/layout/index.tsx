"use client"

import { FC, ReactNode } from "react"
import Navbar from "./components/navbar"
import SourceCard from "./components/sourceCard"

interface LayoutProps {
    children: ReactNode // This allows any valid React node to be passed as children
}

const Layout: FC<LayoutProps> = (props) => {
    return (
        <>
            <div className="mt-[20px] flex w-[100%] flex-col gap-6 md:mb-5 md:mt-[10px] xl:flex-row">
                <div className=" min-h-[500px] w-[100%] rounded-2xl bg-white p-4  shadow-[0_23px_40px_-20px_rgba(0,0,0,0.08)] xl:w-[75%]">
                    <Navbar />
                    <div>{props.children}</div>
                </div>
                <div className="flex w-[100%]  justify-center xl:w-[25%]">
                    <SourceCard />
                </div>
            </div>
        </>
    )
}
export default Layout

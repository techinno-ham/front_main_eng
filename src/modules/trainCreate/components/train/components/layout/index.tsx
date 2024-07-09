"use client"

import { FC } from "react"
import Navbar from "./components/navbar"
import SourceCard from "./components/sourceCard"

const Layout: FC = (props: any) => {
    return (
        <>
            <div className="mt-[55px] flex w-[100%] flex-col gap-6 md:mt-[10px] xl:flex-row">
                <div className="max-h-[600px] min-h-[500px] w-[100%] rounded-2xl bg-white p-4  shadow-[0_23px_40px_-20px_rgba(0,0,0,0.08)] xl:w-[75%]">
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

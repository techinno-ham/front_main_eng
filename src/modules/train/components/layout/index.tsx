"use client"

import { FC } from "react"
import Navbar from "./components/navbar"
import SourceCard from "./components/sourceCard"

const Layout: FC = (props: any) => {
    return (
        <>
            <div className="mt-[90px] flex gap-6 flex-col md:flex-row">
                <div className="h-[500px] w-[65%] rounded-xl border  bg-white p-4">
                    <Navbar />
                    <div>{props.children}</div>
                </div>
                <div>
                    <SourceCard />
                </div>
            </div>
        </>
    )
}
export default Layout

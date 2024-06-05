"use client"

import { FC } from "react"
import Navbar from "./components/navbar"
import SourceCard from "./components/sourceCard"

const Layout: FC = (props: any) => {
    return (
        <>
            <div className="mt-[55px] md:mt-[90px] flex w-[100%] flex-col gap-6 xl:flex-row">
                <div className="h-[500px] xl:w-[75%] w-[100%] rounded-xl border  bg-white p-4">
                    <Navbar />
                    <div>{props.children}</div>
                </div>
                <div className="xl:w-[25%] w-[100%]  flex justify-center">
                    <SourceCard  />
                </div>
            </div>
        </>
    )
}
export default Layout

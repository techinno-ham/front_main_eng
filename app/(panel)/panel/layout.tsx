import SideBar from "@/src/shared/components/layouts/panel-layout/sidebar"

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <div className="flex  bg-[#F6F8FB]">
                <SideBar />
                <div className=" mr-[300px] w-full md:w-calc-100vw-minus-280px">
                    {children}
                </div>
            </div>
        </>
    )
}
export default Layout

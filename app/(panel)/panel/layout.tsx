import SideBar from "@/src/shared/components/layouts/panel-layout/sidebar"

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <div className="flex  bg-[#F6F8FB]">
                <SideBar/>
                <div className=" w-full md:w-calc-100vw-minus-280px mr-[300px]">
                {children}
                </div>

            </div>
        </>
    )
}
export default Layout

import SideBar from "@/src/shared/components/layouts/panel-layout/sidebar"

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <div className="flex h-[100vh] bg-[#F6F8FB]">
                <SideBar />

                {children}
            </div>
        </>
    )
}
export default Layout

import HeaderPanel from "@/src/shared/components/layouts/panel-layout/header"

const PanelLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <HeaderPanel />
            <main className="h-screen bg-[#F6F8FB]">{children}</main>
        </>
    )
}
export default PanelLayout

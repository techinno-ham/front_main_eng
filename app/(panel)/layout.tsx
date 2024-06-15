import HeaderPanel from "@/src/shared/components/layouts/panel-layout/header"

const PanelLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
        <body className="bg-[#F6F8FB]">
            <HeaderPanel />
            <main>{children}</main>
        </body>
        </>
    )
}
export default PanelLayout

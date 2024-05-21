import HeaderPanel from "@/src/shared/components/layouts/panel-layout/header"

const PanelLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <HeaderPanel />
            <main className="">{children}</main>
        </>
    )
}
export default PanelLayout

import HeaderPanel from "@/src/shared/components/layouts/panel-layout/header"

const PanelLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <HeaderPanel />
            <main>{children}</main>
        </>
    )
}
export default PanelLayout

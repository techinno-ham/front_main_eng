import TryNow from "@/src/modules/landing/components/TryNow"
import Footer from "@/src/shared/components/layouts/site-layout/footer"
import Header from "@/src/shared/components/layouts/site-layout/header"

const MainLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <Header />
            <main>{children}</main>
            <TryNow />
            <Footer />
        </>
    )
}
export default MainLayout

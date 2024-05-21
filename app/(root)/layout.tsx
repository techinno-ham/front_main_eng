import Footer from "@/src/shared/components/layouts/site-layout/footer"
import Header from "@/src/shared/components/layouts/site-layout/header"


const MainLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>

            <Header />
                <main>{children}</main>
            <Footer />
            
        </>
    )
}
export default MainLayout


import Landing from "@/src/modules/landing"
import "./globals.css"
import Header from "@/src/shared/components/layouts/site-layout/header"
import Footer from "@/src/shared/components/layouts/site-layout/footer"

export default function Home() {
    return (
        <>
           <Header />
                <main><Landing /></main>
            <Footer />
            
        </>
    )
}

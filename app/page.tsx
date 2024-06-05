import Landing from "@/src/modules/landing"
import "./globals.css"
import Header from "@/src/shared/components/layouts/site-layout/header"
import Footer from "@/src/shared/components/layouts/site-layout/footer"
import SelectModalCustom from "@/src/shared/components/common/selectModal"

export default function Home() {
    return (
        <>
            <Header />
            <main>
                <Landing />
                <SelectModalCustom/>
            </main>
            <Footer />
        </>
    )
}

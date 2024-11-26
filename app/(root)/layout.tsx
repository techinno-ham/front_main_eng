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

            <script
                    src="https://hamyar.chat/cdn/widget/v1.0.0/hamyarchat-embedded.js"
                    hamyar-bot-token="OGNkYzE2ZmYtYzhmMi00MTVmLWFiNjMtYWI3YWE0NGQ5N2VjLjE3NDNmZmZk"
                    id="hamyarChatbotScript"
                    nonce="XUENAJFW"
                    async
                 defer></script>
        </>
    )
}
export default MainLayout

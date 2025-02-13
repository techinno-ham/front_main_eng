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
                    src="https://hamyar.chat/cdn/chatsys-widget/v1.0.0/chatsys-embedded.js"
                    chatsys-bot-token="Mzg5NjEyZTctMDAyNy00MDY1LTgzMDgtYTRhMDUzNTk2MzhhLjAyYjgyNDNk"
                    id="chatsysChatbotScript"
                    nonce="XUENAJFW"
                    async
                 defer></script>
        </>
    )
}
export default MainLayout

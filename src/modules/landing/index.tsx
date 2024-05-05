import FeatureSection from "./components/featureSection"
import IntroduceSections from "./components/introduceSections"
import TrustBrnadSections from "./components/trustBrandSections"

const Landing = () => {
    return (
        <>
            <div>
                <IntroduceSections />
                <TrustBrnadSections />
                <FeatureSection />
            </div>
        </>
    )
}

export default Landing

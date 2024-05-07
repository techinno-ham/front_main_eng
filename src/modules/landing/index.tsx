import TryNow from "./components/TryNow"
import FeatureSection from "./components/featureSection"
import FeaturesCards from "./components/featuresCards"
import IntroduceSections from "./components/introduceSections"
import TrustBrnadSections from "./components/trustBrandSections"

const Landing = () => {
    return (
        <>
            <div>
                <IntroduceSections />
                <TrustBrnadSections />
                <FeatureSection />
                <FeaturesCards />
                <TryNow />
            </div>
        </>
    )
}

export default Landing

import TryNow from "./components/TryNow"
import CostSection from "./components/costSection"
import FeatureSection from "./components/featureSection"
import FeaturesCards from "./components/featuresCards"
import IntroduceSections from "./components/introduceSections"
import PowerfulFeaturesSection from "./components/powerfulFeaturesSection"
import SetupSection from "./components/setupSection"
import TrustBrnadSections from "./components/trustBrandSections"

const Landing = () => {
    return (
        <>
            <div>
                <IntroduceSections />
                <TrustBrnadSections />
                <CostSection/>
                <SetupSection/>
                <FeatureSection />
                <PowerfulFeaturesSection />
                <FeaturesCards />
                <TryNow />
            </div>
        </>
    )
}

export default Landing

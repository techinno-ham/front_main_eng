import IntegrationGrid from "./components/IntegrationGrid"
import ItemsGrid from "./components/itemGrid"
import KnowledgeBaseGrid from "./components/knowledgeBaseGrid"
import Section from "./components/sections"

const FeatureSection = () => {
    return (
        <div className="section-large container relative mx-auto h-auto overflow-hidden px-4 2xl:px-20">
        <div className="mt-[24px] text-center">
            <h2 className="font-medium text-2xl leading-[150%] md:text-5xl">
                Creating Artificial Agents
                <br />
                <span className="text-feature gradient-h2 is-v2">
                    with speed and ease
                </span>
            </h2>
            <h3 className="mt-1 text-[12px] md:mt-3 md:text-[16px]">
                All the tools and resources needed for custom AI Agents are available
                on the Chatsys platform.
            </h3>
        </div>
        <div className="mt-[30px] md:mt-[60px]">
            <Section
                sectionName="Training"
                title="
                    Upload a website or document to train your bot.
                "
                desc="You can upload a website or document for our bot to get familiar with the content and train more effectively. This process helps the bot extract necessary information and patterns from different sources, leading to better performance. Our goal is to provide practical tools and optimize existing technologies to meet your needs."
                imgURL="https://assets-global.website-files.com/635c4eeb78332f7971255095/657c74b7a8381409c81fcd56_zapIcon.svg"
            >
                <KnowledgeBaseGrid />
            </Section>
    
            <Section
                sectionName="Customization"
                title="
                    Fully customize your AI assistant and adjust the user interface settings to meet your needs.
                "
                desc="You can fully customize the functionality of your AI assistant and optimize the user interface (UI) settings based on your specific requirements. With the provided tools, you can adjust the capabilities and features of the assistant to match your needs and preferences. This allows you to create a unique user experience and maximize the productivity and efficiency of your AI assistant."
                imgURL="https://assets-global.website-files.com/635c4eeb78332f7971255095/63d7184b737d36c33ca81413_LayoutIcon.svg"
                mask={true}
            >
                <ItemsGrid />
            </Section>
    
            <Section
                sectionName="Setup"
                title="
                    Quick and easy setup process to access new features.
                "
                desc="Easily and quickly complete the system setup process and start benefiting from new features. Our simple instructions and step-by-step guide will help you quickly start using the new features and tools. Our goal is to provide a hassle-free process and make sure that you can use all the features to their fullest."
                imgURL="https://assets-global.website-files.com/635c4eeb78332f7971255095/63d71b1e1938080cef242fea_flowIcon.svg"
            >
                <IntegrationGrid />
            </Section>
        </div>
    </div>
    
    )
}
export default FeatureSection

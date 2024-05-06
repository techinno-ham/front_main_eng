import IntegrationGrid from "./components/IntegrationGrid"
import ItemsGrid from "./components/itemGrid"
import KnowledgeBaseGrid from "./components/knowledgeBaseGrid"
import Section from "./components/sections"

const FeatureSection = () => {
    return (
        <div className="container mx-auto px-4 overflow-hidden ">
            <div className="mt-[55px] md:mt-[80px] text-center">
                <h2 className="text-2xl md:text-5xl leading-[150%]">
                    همه چیزی که برای ساخت <br />{" "}
                    <span className=" text-2xl md:text-5xl text-feature">ربات‌های سفارشی</span> نیاز
                    دارید.
                </h2>
            </div>
            <div className="mt-[30px] md:mt-[60px]">

                <Section
                    sectionName="دانش"
                    title="
             یک وبسایت یا سند را بارگذاری کنید تا ربات شما آموزش داده شود.
              "
                    desc="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
        استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
        در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
        نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،

      "
                    imgURL="https://assets-global.website-files.com/635c4eeb78332f7971255095/657c74b7a8381409c81fcd56_zapIcon.svg"
                >
                 <KnowledgeBaseGrid/>
                </Section>

                <Section sectionName="دانش" title="
              لورم ایپسوم متن ساختگی با تولید.
              "
        desc="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
        استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
        در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
        نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،

      "
      imgURL="https://assets-global.website-files.com/635c4eeb78332f7971255095/63d7184b737d36c33ca81413_LayoutIcon.svg"
      mask={true}
      >
        <ItemsGrid />
                 </Section>
                 <Section sectionName="اتصال" title="
              ربات خود را در برنامه‌های مورد علاقه‌تان راه‌اندازی کنید.
              "
        desc="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
        استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
        در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
        نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،

      "
      imgURL="https://assets-global.website-files.com/635c4eeb78332f7971255095/63d71b1e1938080cef242fea_flowIcon.svg"
      >
        <IntegrationGrid />
                  </Section>
            </div>
        </div>
    )
}
export default FeatureSection

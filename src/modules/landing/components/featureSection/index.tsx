import Section from "./components/sections"

const FeatureSection = () => {
    return (
        <div className="container mx-auto px-4 ">
            <div className="mt-[100px] text-center">
                <h2 className="text-5xl leading-[150%]">
                    همه چیزی که برای ساخت <br />{" "}
                    <span className="text-feature">ربات‌های سفارشی</span> نیاز
                    دارید.
                </h2>
            </div>
            <div className="mt-[80px]">
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
                    <p>test </p>
                </Section>
            </div>
        </div>
    )
}
export default FeatureSection

import IntegrationGrid from "./components/IntegrationGrid"
import ItemsGrid from "./components/itemGrid"
import KnowledgeBaseGrid from "./components/knowledgeBaseGrid"
import Section from "./components/sections"

const FeatureSection = () => {
    return (
        <div className="container relative mx-auto h-auto overflow-hidden  px-4  2xl:px-20">
            <div className="mt-[55px] text-center md:mt-[80px]">
                <h2 className="text-2xl leading-[150%] md:text-4xl">
                    تمام آنچه برای ساخت <br />{" "}
                    <span className=" text-feature text-2xl md:text-4xl gradient-h2 is-v2">
                        ربات‌های سفارشی
                    </span>{" "}
                    نیاز دارید.
                </h2>
            </div>
            <div className="mt-[30px] md:mt-[60px]">
                <Section
                    sectionName="آموزش"
                    title="
             یک وبسایت یا سند را بارگذاری کنید تا ربات شما آموزش داده شود.
              "
                    desc="شما می‌توانید یک وبسایت یا سند را بارگذاری کنید تا ربات ما بتواند با محتوای آن آشنا شده و به‌طور مؤثرتر آموزش ببیند. این فرایند به ربات کمک می‌کند تا اطلاعات و الگوهای لازم را از منابع مختلف استخراج کرده و عملکرد بهتری را ارائه دهد. هدف ما فراهم آوردن ابزارهای کاربردی و بهینه‌سازی تکنولوژی‌های موجود برای پاسخگویی به نیازهای شماست.
      "
                    imgURL="https://assets-global.website-files.com/635c4eeb78332f7971255095/657c74b7a8381409c81fcd56_zapIcon.svg"
                >
                    <KnowledgeBaseGrid />
                </Section>

                <Section
                    sectionName="شخصی سازی"
                    title="
              دستیار هوش مصنوعی خود را به‌طور کامل سفارشی‌سازی کرده و تنظیمات رابط کاربری را مطابق با نیازهای خود تغییر دهید.
              "
                    desc="شما می‌توانید به طور کامل عملکرد دستیار هوش مصنوعی خود را سفارشی‌سازی کنید و تنظیمات رابط کاربری (UI) را بر اساس نیازهای خاص خود بهینه‌سازی کنید. با ابزارهای ارائه‌شده، می‌توانید قابلیت‌ها و ویژگی‌های دستیار را به گونه‌ای تنظیم کنید که بهترین تطابق را با نیازها و ترجیحات شما داشته باشد. این امکان به شما اجازه می‌دهد تا تجربه کاربری منحصر به فردی ایجاد کنید و بهره‌وری و کارایی دستیار هوش مصنوعی خود را به حداکثر برسانید."
                    imgURL="https://assets-global.website-files.com/635c4eeb78332f7971255095/63d7184b737d36c33ca81413_LayoutIcon.svg"
                    mask={true}
                >
                    <ItemsGrid />
                </Section>
                <Section
                    sectionName="راه اندازی "
                    title="
              فرآیند راه‌اندازی سریع و آسان برای استفاده از امکانات جدید
              "
                    desc="به‌راحتی و به‌سرعت مراحل راه‌اندازی سیستم را طی کنید و از امکانات جدید بهره‌برداری کنید. دستورالعمل‌های ساده و راهنمای گام‌به‌گام ما به شما کمک می‌کند تا به سرعت به استفاده از ویژگی‌ها و ابزارهای جدید بپردازید. هدف ما این است که با ارائه یک فرآیند ساده و بی‌دردسر، شروع کار با سیستم را برای شما آسان کنیم و اطمینان حاصل کنیم که بتوانید از تمامی امکانات به بهترین نحو استفاده کنید."
                    imgURL="https://assets-global.website-files.com/635c4eeb78332f7971255095/63d71b1e1938080cef242fea_flowIcon.svg"
                >
                    <IntegrationGrid />
                </Section>
            </div>
        </div>
    )
}
export default FeatureSection

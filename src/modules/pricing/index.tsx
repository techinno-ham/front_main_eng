//https://tailgrids.com/components/pricing-tables

import PricingCard from "./PricingCard"

const Pricing = () => {
    return (
        <section className="dark:bg-dark relative z-10 overflow-hidden bg-white pb-12 pt-20 lg:pb-[90px] lg:pt-[120px]">
            <div className="container mx-auto">
                <div className="-mx-4 flex flex-wrap">
                    <div className="w-full px-4">
                        <div className="mx-auto mb-[60px] max-w-[510px] text-center">
                            <span className="text-primary mb-2 block text-lg font-semibold">
                                جدول قیمت‌گذاری
                            </span>
                            <h2 className="text-dark mb-3 text-3xl font-bold leading-[1.208] sm:text-4xl md:text-[40px] dark:text-white">
                                قیمت
                                <span
                                    style={{
                                        textShadow:
                                            "0 3px 8px rgba(77, 243, 255, 0.22)",
                                        backgroundImage:
                                            "linear-gradient(360deg, #5154ff, #559fff)",
                                        backgroundClip: "text",
                                        fontWeight: 700,
                                        position: "relative",
                                        color: "transparent",
                                    }}
                                >
                                    &nbsp;جدید ترین&nbsp;
                                </span>
                                سرویس ها
                            </h2>
                            <p className="text-body-color dark:text-dark-6 text-base">
                                تغییرات زیادی از بخش‌های لورم ایپسوم موجود است،
                                اما بیشتر آن‌ها به نوعی دچار تغییر شده‌اند.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="-mx-4 flex flex-wrap justify-center">
                    <div className="-mx-4 flex flex-wrap">
                        <PricingCard
                            type="شخصی"
                            price="۵۹ دلار"
                            subscription="سال"
                            description="مناسب برای استفاده در یک وب‌سایت شخصی یا پروژه مشتری."
                            buttonText="انتخاب طرح شخصی"
                            active={false}
                        >
                            <List>۱ کاربر</List>
                            <List>تمامی اجزای رابط کاربری</List>
                            <List>دسترسی مادام‌العمر</List>
                            <List>به‌روزرسانی‌های رایگان</List>
                            <List>استفاده در ۱ (یک) پروژه</List>
                            <List>پشتیبانی ۳ ماهه</List>
                        </PricingCard>
                        <PricingCard
                            type="شخصی"
                            price="۵۹ دلار"
                            subscription="سال"
                            description="مناسب برای استفاده در یک وب‌سایت شخصی یا پروژه مشتری."
                            buttonText="انتخاب طرح شخصی"
                            active={true}
                        >
                            <List>۱ کاربر</List>
                            <List>تمامی اجزای رابط کاربری</List>
                            <List>دسترسی مادام‌العمر</List>
                            <List>به‌روزرسانی‌های رایگان</List>
                            <List>استفاده در ۱ (یک) پروژه</List>
                            <List>پشتیبانی ۳ ماهه</List>
                        </PricingCard>{" "}
                        <PricingCard
                            type="شخصی"
                            price="۵۹ دلار"
                            subscription="سال"
                            description="مناسب برای استفاده در یک وب‌سایت شخصی یا پروژه مشتری."
                            buttonText="انتخاب طرح شخصی"
                            active={false}
                        >
                            <List>۱ کاربر</List>
                            <List>تمامی اجزای رابط کاربری</List>
                            <List>دسترسی مادام‌العمر</List>
                            <List>به‌روزرسانی‌های رایگان</List>
                            <List>استفاده در ۱ (یک) پروژه</List>
                            <List>پشتیبانی ۳ ماهه</List>
                        </PricingCard>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Pricing

const List = ({ children }: any) => {
    return (
        <p className="text-body-color dark:text-dark-6 text-base">{children}</p>
    )
}

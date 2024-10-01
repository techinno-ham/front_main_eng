import {
    Activity,
    Box2,
    ChemicalGlass,
    DollarCircle,
    Login,
    Magicpen,
} from "iconsax-react"

const SetupSection = () => {
    return (
        <>
            <div className="container relative mx-auto h-auto overflow-hidden  px-4  pt-[100px] text-center 2xl:px-20">
                <div className="my-10 md:mt-10">
                    <h2 className="text-3xl md:text-5xl">
                        چت بات بدون
                        <span className="gradient-h2 is-v2">
                            &nbsp;دانش برنامه نویسی
                        </span>
                    </h2>
                    <h3 className="mt-1 text-[12px] md:mt-3 md:text-[16px]">
                        راه اندازی فقط در کمتر از 2 دقیقه
                    </h3>
                </div>

                <div className="mx-auto mt-4 grid grid-cols-1 gap-4 md:grid-cols-3  md:gap-6 ">
                    <div className="relative flex flex-col rounded-xl bg-gray-50 bg-clip-border text-gray-700">
                        <div className="absolute left-4 top-3">
                            <Box2 size="32" color="#1d4ed8" />
                        </div>
                        <div className="p-6">
                            <h5 className="text-blue-gray-900 block text-right text-xl font-semibold leading-snug tracking-normal antialiased">
                                مرحله 1
                            </h5>
                            <p className="mb-1 mt-2 text-right font-semibold  text-zinc-900">
                                وارد کردن منابع داده چندگانه
                            </p>
                            <p className="text-right  text-sm text-zinc-500">
                                لینک وب سایت یا فایل های خود یا متن ها خود را
                                وارد میکنید.
                            </p>
                            <img className="mx-auto mt-4 w-full" src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/gali/step-1.png"></img>
                        </div>
                    </div>
                    <div className="relative flex flex-col rounded-xl bg-gray-50 bg-clip-border text-gray-700">
                        <div className="absolute left-4 top-3">
                            <ChemicalGlass size="32" color="#1d4ed8" />
                        </div>
                        <div className="p-6">
                            <h5 className="block text-right text-xl font-semibold leading-snug tracking-normal text-gray-700 antialiased">
                                مرحله 2
                            </h5>
                            <p className="mb-1 mt-2 text-right font-semibold  text-gray-900">
                                آموزش چت بات
                            </p>
                            <p className="text-right  text-sm text-zinc-500">
                                چت بات را با داده های خود  داده های خود  داده های خودآموزش دهید.
                            </p>
                            <img className="mx-auto mt-4 w-full" src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/gali/step-2.png"></img>
                        </div>
                    </div>
                    <div className="relative flex flex-col rounded-xl bg-gray-50 bg-clip-border text-gray-700">
                        <div className="absolute left-4 top-3">
                            <Magicpen size="32" color="#1d4ed8" />
                        </div>
                        <div className="p-6">
                            <h5 className="text-blue-gray-900 block text-right text-xl font-semibold leading-snug tracking-normal antialiased">
                                مرحله 3
                            </h5>
                            <p className="mb-1 mt-2 text-right font-semibold  text-zinc-900">
                                نصب و استفاده
                            </p>
                            <p className="text-right  text-sm text-zinc-500">
                                بدون هیچ دانشی از همیار چت در سایت و یا جاهای
                                مختلفی استفاده کنید.
                            </p>
                            <img className="mx-auto mt-4 w-full" src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/gali/step-3.png"></img>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default SetupSection

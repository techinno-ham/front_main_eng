import Image from "next/image"

const IntroduceSections = () => {
    return (
        <>
            <div className="intro_conteiner">
                <div>
                    <div className="absolute left-[80%] top-24">
                        <Image
                            src="/images/rightBlur.png"
                            height="100"
                            width="650"
                            alt="Logo"
                        />
                    </div>
                    <div className="absolute right-[80%] top-24">
                        <Image
                            src="/images/rightBlur.png"
                            height="100"
                            width="300"
                            alt="Logo"
                        />
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <h5>
                        <p className="text-7xl">
                            ساخت{" "}
                            <span className="text-blue-600">چت بات هوشمند</span>{" "}
                            شخصی
                        </p>
                    </h5>
                    <h5 className="flex gap-x-px">
                        <p className="text-7xl">با کمترین زمان</p>
                        <div>
                            <Image
                                src="/icons/jet.svg"
                                height="70"
                                width="70"
                                alt="Logo"
                            />
                        </div>
                    </h5>
                </div>
                <div className="mt-11">
                    <p>
                        بات های مانند chat gpt برای پروژه یا کسب کار خود بسازید
                        تا کارها را انجام دهید. 🎯
                    </p>
                </div>
              <input type="text" className="input-url" placeholder="آدرس وبسایت مورد نظرتان وارد کنید ..." />

            </div>
        </>
    )
}

export default IntroduceSections

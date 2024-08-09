"use client"
import Image from "next/image"
import "keen-slider/keen-slider.min.css"
import { useKeenSlider } from "keen-slider/react"

let brands = [
    { link: "", image: "jabama.png" },
    { link: "", image: "digipay.png" },
    { link: "", image: "basalam.png" },
    { link: "", image: "snappmarket.png" },
    { link: "", image: "banksaman.png" },
    { link: "", image: "shatel.png" },
    { link: "", image: "ofoghkorosh.png" },
    { link: "", image: "rahshahrsazi.png" },
    { link: "", image: "raja.png" },
]

const TrustBrnadSections = () => {
    const animation = { duration: 20000, easing: (t: any) => t }
    const [sliderRef, instanceRef] = useKeenSlider({
        initial: 0,
        loop: true,
        mode: "free",
        rtl: true,
        renderMode: "performance",
        slides: { perView: 8, spacing: 5 },
        created(s) {
            s.moveToIdx(5, true, animation)
        },
        updated(s) {
            s.moveToIdx(s.track.details.abs + 5, true, animation)
        },
        animationEnded(s) {
            s.moveToIdx(s.track.details.abs + 5, true, animation)
        },
    })
    return (
        <div className="container-medium w-container container mx-auto  h-max overflow-hidden text-center mt-8 md:mt-0">
            {/* <div className="mt-10 md:mt-4">
                <h2 className="text-3xl md:text-5xl">
              مشتریان
             و
                    <span className="gradient-h2 is-v2">
                    {" "}
            همکاران
            {" "}
                    </span>
               ما
                </h2>
                <h3 className="mt-1 text-[12px] md:mt-3 md:text-[16px]">
                لیست شرکت‌ها و کسب‌وکارهایی که به خدمات هوش مصنوعی ما اعتماد کرده‌اند.
                </h3>
            </div> */}
            <div
                style={{
                    maskImage:
                        "linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 25%, rgb(0, 0, 0) 75%, rgba(0, 0, 0, 0) 105%)",
                }}
                className="navigation-wrapper md:mt-10 mt-2"
            >
                <div ref={sliderRef} className="keen-slider">
                    {brands?.length &&
                        brands.map((brand, indx) => (
                            <div
                                key={indx}
                                className={`keen-slider__slide number-slide${++indx}`}
                            >
                                <div className="w-[55px] md:w-[110px]">
                                    <Image
                                        src={`/images/brands/${brand.image}`}
                                        height="70"
                                        width="100"
                                        alt="Logo"
                                    />
                                </div>
                            </div>
                        ))}
                </div>
            </div>
        </div>
    )
}

export default TrustBrnadSections

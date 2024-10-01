"use client"
import Image from "next/image"
import "keen-slider/keen-slider.min.css"
import { useKeenSlider } from "keen-slider/react";

import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
//https://codepen.io/shoegaze-k/pen/QWXreKe

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

// const TrustBrandSections = () => {
//     const animation = { duration: 20000, easing: (t: any) => t }
//     const [sliderRef, instanceRef] = useKeenSlider({
//         initial: 0,
//         loop: true,
//         mode: "free",
//         rtl: true,
//         renderMode: "performance",
//         slides: { perView: 8, spacing: 5 },
//         breakpoints: {
//             "(max-width: 500px)": {
//                 loop: true,
//                 mode: "free",
//                 slides: { perView: 3, spacing: 2 },
//             },
//         },
//         created(s) {
//             s.moveToIdx(5, true, animation)
//         },
//         updated(s) {
//             s.moveToIdx(s.track.details.abs + 5, true, animation)
//         },
//         animationEnded(s) {
//             s.moveToIdx(s.track.details.abs + 5, true, animation)
//         },
//     })
//     return (
//         <div className="container-medium w-container container mx-auto  mt-8 h-max overflow-hidden text-center md:mt-0">
//             {/* <div className="mt-10 md:mt-4">
//                 <h2 className="text-3xl md:text-5xl">
//               مشتریان
//              و
//                     <span className="gradient-h2 is-v2">
//                     {" "}
//             همکاران
//             {" "}
//                     </span>
//                ما
//                 </h2>
//                 <h3 className="mt-1 text-[12px] md:mt-3 md:text-[16px]">
//                 لیست شرکت‌ها و کسب‌وکارهایی که به خدمات هوش مصنوعی ما اعتماد کرده‌اند.
//                 </h3>
//             </div> */}
//             <div
//                 style={{
//                     maskImage:
//                         "linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 25%, rgb(0, 0, 0) 75%, rgba(0, 0, 0, 0) 105%)",
//                 }}
//                 className="navigation-wrapper mt-2 md:mt-10"
//             >
//                 <div ref={sliderRef} className="keen-slider">
//                     {brands?.length &&
//                         brands.map((brand, indx) => (
//                             <div
//                                 key={indx}
//                                 className={`keen-slider__slide number-slide${++indx}`}
//                             >
//                                 <div className="w-[55px] md:w-[110px]">
//                                     <Image
//                                         src={`/images/brands/${brand.image}`}
//                                         height="70"
//                                         width="100"
//                                         alt="Logo"
//                                     />
//                                 </div>
//                             </div>
//                         ))}
//                 </div>
//             </div>
//         </div>
//     )
// }

const TrustBrandSections = () => {
    return (
        <div className="container-medium w-container container mx-auto mt-8 h-max text-center md:mt-0">
            {/* Uncomment and customize the section below if needed
            <div className="mt-10 md:mt-4">
                <h2 className="text-3xl md:text-5xl">
                    مشتریان و
                    <span className="gradient-h2 is-v2"> همکاران ما </span>
                </h2>
                <h3 className="mt-1 text-[12px] md:mt-3 md:text-[16px]">
                    لیست شرکت‌ها و کسب‌وکارهایی که به خدمات هوش مصنوعی ما اعتماد کرده‌اند.
                </h3>
            </div>
            */}
            <div className="navigation-wrapper mt-2 md:mt-10 overflow-visible">
                <Splide 
                style={{overflow: "visible"}}
                options={{ 
                    type: 'loop', 
                    perPage: 7,
                    perMove: 1, 
                    gap: '5px', 
                    direction: 'rtl', // Enable RTL
                    focus  : 'center',
                    drag   : 'free',
                    snap   : true,
                    autoplay: true,  // Enable Autoplay
                    interval: 2000,  // Autoplay interval (3 seconds)
                    pauseOnHover: true,  // Pause autoplay on hover
                    resetProgress: false,  // Disable reset of autoplay progress
                    pagination: false,  // Disable pagination
                    arrows: false,  // Disable arrows
                    lazyLoad: 'nearby',
                    cover   : true,
                    // breakpoints: {
                    //     500: {
                    //         perPage: 3,
                    //         gap: '2px',
                    //     },
                    // },
                }} aria-label="Brand Slider">
                    {brands?.map((brand, index) => (
                        <SplideSlide key={index} style={{overflow: "visible"}}>
                            <div className="mx-auto overflow-visible">
                                <Image
                                    className="mx-auto"
                                    src={`/images/brands/${brand.image}`}
                                    height="70"
                                    width="100"
                                    alt="Logo"
                                />
                            </div>
                        </SplideSlide>
                    ))}
                </Splide>
            </div>
        </div>
    );
};

export default TrustBrandSections;

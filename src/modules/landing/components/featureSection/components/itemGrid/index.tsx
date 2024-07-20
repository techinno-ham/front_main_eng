"use client"
import { useEffect, useRef, useState } from "react"
import "./style.css"

import { useSpring, animated } from "react-spring"

const ItemsGrid = () => {
    const myElementRef = useRef<Element>(null)

    const [{ scrollY }, setScrollY] = useSpring(() => ({ scrollY: 300 }))

    const [isIntersecting, setIntersecting] = useState(false)

    const [bottomRef, setBottomRef] = useState<number>()
    const [topRef, setTopRef] = useState<number>()

    useEffect(() => {
        if (myElementRef.current) {
            const { top, bottom } = myElementRef.current.getBoundingClientRect()
            setTopRef(top)
            setBottomRef(bottom)
        }
    }, [])

    // useEffect(() => {
    //   const observer = new IntersectionObserver(([entry]) => {
    //     console.log({ entry });
    //     let bounding = entry.boundingClientRect;

    //     setTopRef(bounding.top);
    //     setBottomRef(bounding.bottom);
    //     return setIntersecting(entry.isIntersecting);
    //   });

    //   observer.observe(myElementRef?.current);
    // }, [myElementRef]);

    // Update scrollY value on scroll
    useEffect(() => {
        //       function calculateVisibility(element) {
        //         console.log({element});

        //         const rect = element?.getBoundingClientRect?.();
        //         const windowHeight = window.innerHeight || document.documentElement.clientHeight;

        //         // Calculate the percentage of the element's height visible on the screen
        //         const visibleHeight = Math.min(rect.bottom, windowHeight) - Math.max(rect.top, 0);
        //         const visiblePercentage = visibleHeight / element.offsetHeight * 100;

        //         return visibleHeight;
        //       }

        let scrollHandler = (e: any) => {
            // console.log({ e })

            // console.log({ topRef, bottomRef })

            // const { top } = myElementRef.current.getBoundingClientRect();
            // console.log('Y-coordinate:', top);

            // if (myElementRef) {
            //   const visibility = calculateVisibility(myElementRef);
            //   console.log('Visible percentage:', visibility);
            // }

            setScrollY({ scrollY: window.scrollY - (topRef ?? 0) })
        }

        if (topRef && bottomRef) {
            window.addEventListener("scroll", scrollHandler)
        }

        return () => {
            window.removeEventListener("scroll", scrollHandler, true)
        }
    }, [bottomRef, setScrollY, topRef])

    return (
        <>
            <div className={"box-image-path"} ref={myElementRef}>
                <div className="item-image-path">
                    <animated.div
                        className="wrapper-image-path "
                        style={{
                            transform: scrollY.interpolate(
                                (y: any) =>
                                    `translate3d(0px, ${
                                        y * 0.1
                                    }px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`,
                            ),
                        }}
                    >
                        <div className="template-image-path">
                            <div className="icon-template-path">
                                <div className="w-embed">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="74"
                                        height="74"
                                        viewBox="0 0 24 24"
                                        fill="#059669"
                                    >
                                        <path
                                            opacity="0.3"
                                            d="M18 10V20C18 20.6 18.4 21 19 21C19.6 21 20 20.6 20 20V10H18Z"
                                            fill="#059669"
                                        ></path>
                                        <path
                                            opacity="0.3"
                                            d="M11 10V17H6V10H4V20C4 20.6 4.4 21 5 21H12C12.6 21 13 20.6 13 20V10H11Z"
                                            fill="#059669"
                                        ></path>
                                        <path
                                            opacity="0.3"
                                            d="M10 10C10 11.1 9.1 12 8 12C6.9 12 6 11.1 6 10H10Z"
                                            fill="#059669"
                                        ></path>
                                        <path
                                            opacity="0.3"
                                            d="M18 10C18 11.1 17.1 12 16 12C14.9 12 14 11.1 14 10H18Z"
                                            fill="#059669"
                                        ></path>
                                        <path
                                            opacity="0.3"
                                            d="M14 4H10V10H14V4Z"
                                            fill="#059669"
                                        ></path>
                                        <path
                                            opacity="0.3"
                                            d="M17 4H20L22 10H18L17 4Z"
                                            fill="#059669"
                                        ></path>
                                        <path
                                            opacity="0.3"
                                            d="M7 4H4L2 10H6L7 4Z"
                                            fill="#059669"
                                        ></path>
                                        <path
                                            d="M6 10C6 11.1 5.1 12 4 12C2.9 12 2 11.1 2 10H6ZM10 10C10 11.1 10.9 12 12 12C13.1 12 14 11.1 14 10H10ZM18 10C18 11.1 18.9 12 20 12C21.1 12 22 11.1 22 10H18ZM19 2H5C4.4 2 4 2.4 4 3V4H20V3C20 2.4 19.6 2 19 2ZM12 17C12 16.4 11.6 16 11 16H6C5.4 16 5 16.4 5 17C5 17.6 5.4 18 6 18H11C11.6 18 12 17.6 12 17Z"
                                            fill="#059669"
                                        ></path>
                                    </svg>
                                </div>
                            </div>
                            <div className="info-path">
                                <div className="title-info-path">
                                    همراه خرید
                                </div>
                                <div className="description-info-path">
                                    چت‌بات فروش طراحی شده برای کمک به مشتریان...
                                </div>
                                <div className="text-botpress-small">
                                    همیارچت
                                </div>
                            </div>
                            {/* <div className="bottom-path">
                                <div className="download-path">
                                    <img
                                        src="https://assets-global.website-files.com/635c4eeb78332f7971255095/63d816b85f590ee749338a27_Downloads.svg"
                                        loading="lazy"
                                        alt="Download Icon"
                                        className="icon-download"
                                    />
                                    <div className="number-downloads">7.5k</div>
                                </div>
                                <a
                                    href="http://botpress.com/hub?type=Template"
                                    target="_blank"
                                    className="install-button w-button"
                                >
                                    Install
                                </a>
                            </div> */}
                        </div>
                    </animated.div>
                    <animated.div
                        className="wrapper-image-path second-col-animation"
                        style={{
                            transform: scrollY.interpolate(
                                (y: any) =>
                                    `translate3d(0px, ${
                                        y * -0.075
                                    }px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`,
                            ),
                        }}
                    >
                        <div className="template-image-path">
                            <div className="icon-template-path">
                                <div className="w-embed">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="74"
                                        height="74"
                                        viewBox="0 0 74 74"
                                        fill="none"
                                    >
                                        <path
                                            d="M37.0771 14.5687C29.9854 7.47708 18.5771 7.47708 11.4854 14.5687C4.39377 21.6604 4.39377 33.0689 11.4854 40.1606L34.9188 63.5938C36.1521 64.8272 38.0021 64.8272 39.2354 63.5938L62.6688 40.1606C69.7604 33.0689 69.7604 21.6604 62.6688 14.5687C55.5771 7.47708 44.1688 7.47708 37.0771 14.5687Z"
                                            fill="#FEE2E2"
                                        ></path>
                                        <path
                                            d="M43.2437 52.8021H42.9354C41.7021 52.4938 40.4687 51.5686 40.1604 50.3353L36.7687 34.3021L33.9937 44.1686C33.6854 45.4019 32.7604 46.3272 31.5271 46.3272C30.2937 46.6355 29.0604 46.0188 28.4437 45.0938L23.8187 38.0019L20.1187 39.8522C19.8104 40.1606 19.1937 40.1605 18.8854 40.1605H9.6354C7.7854 40.1605 6.55206 38.9272 6.55206 37.0772C6.55206 35.2272 7.7854 33.9938 9.6354 33.9938H18.2687L23.8187 31.2188C25.3604 30.6021 26.9021 30.9106 27.8271 32.1439L30.2937 35.8438L34.6104 20.7353C34.9187 19.502 36.1521 18.5772 37.6937 18.5772C39.2354 18.5772 40.1604 19.5019 40.4687 21.0436L44.7854 40.1605L46.9437 35.5355C47.5604 34.6105 48.4854 33.6856 49.7187 33.6856H65.1354C66.9854 33.6856 68.2187 34.9189 68.2187 36.7689C68.2187 38.6189 66.9854 39.8522 65.1354 39.8522H51.5687L46.3271 50.3353C45.4021 52.1853 44.4771 52.8021 43.2437 52.8021Z"
                                            fill="#EF4444"
                                        ></path>
                                    </svg>
                                </div>
                            </div>
                            <div className="info-path">
                                <div className="title-info-path">
                                    ربات سلامت
                                </div>
                                <div className="description-info-path">
                                    الگو برای کمک به تنظیم قرارهای سلامت...
                                </div>
                                <div className="text-botpress-small">
                                    همیارچت
                                </div>
                            </div>
                            {/* <div className="bottom-path">
                                <div className="download-path">
                                    <img
                                        src="https://assets-global.website-files.com/635c4eeb78332f7971255095/63d816b85f590ee749338a27_Downloads.svg"
                                        loading="lazy"
                                        alt="Download Icon"
                                        className="icon-download"
                                    />
                                    <div className="number-downloads">5k</div>
                                </div>
                                <a
                                    href="http://botpress.com/hub?type=Template"
                                    target="_blank"
                                    className="install-button w-button"
                                >
                                    Install
                                </a>
                            </div> */}
                        </div>
                        <div className="template-image-path">
                            <div className="icon-template-path">
                                <div className="w-embed">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="74"
                                        height="74"
                                        viewBox="0 0 74 74"
                                        fill="none"
                                    >
                                        <path
                                            d="M61.6667 60.8186V57.7353C61.6667 55.8853 60.4334 54.652 58.5834 54.652H15.4167C13.5667 54.652 12.3334 55.8853 12.3334 57.7353V60.8186H9.25002C7.40002 60.8186 6.16669 62.052 6.16669 63.902V66.9853H67.8334V63.902C67.8334 62.052 66.6 60.8186 64.75 60.8186H61.6667Z"
                                            fill="#44403C"
                                        ></path>
                                        <path
                                            opacity="0.3"
                                            d="M67.8334 20.7354V23.8188C67.8334 25.6688 66.6 26.9021 64.75 26.9021H55.5C57.35 26.9021 58.5834 28.1354 58.5834 29.9854C58.5834 31.8354 57.35 33.0688 55.5 33.0688V48.4854C57.35 48.4854 58.5834 49.7188 58.5834 51.5688V54.6521H46.25V51.5688C46.25 49.7188 47.4834 48.4854 49.3334 48.4854V33.0688C47.4834 33.0688 46.25 31.8354 46.25 29.9854C46.25 28.1354 47.4834 26.9021 49.3334 26.9021H40.0834C41.9334 26.9021 43.1667 28.1354 43.1667 29.9854C43.1667 31.8354 41.9334 33.0688 40.0834 33.0688V48.4854C41.9334 48.4854 43.1667 49.7188 43.1667 51.5688V54.6521H30.8334V51.5688C30.8334 49.7188 32.0667 48.4854 33.9167 48.4854V33.0688C32.0667 33.0688 30.8334 31.8354 30.8334 29.9854C30.8334 28.1354 32.0667 26.9021 33.9167 26.9021H24.6667C26.5167 26.9021 27.75 28.1354 27.75 29.9854C27.75 31.8354 26.5167 33.0688 24.6667 33.0688V48.4854C26.5167 48.4854 27.75 49.7188 27.75 51.5688V54.6521H15.4167V51.5688C15.4167 49.7188 16.65 48.4854 18.5 48.4854V33.0688C16.65 33.0688 15.4167 31.8354 15.4167 29.9854C15.4167 28.1354 16.65 26.9021 18.5 26.9021H9.25002C7.40002 26.9021 6.16669 25.6688 6.16669 23.8188V20.7354L33.9167 6.86044C35.7667 5.93544 38.2334 5.93544 40.3917 6.86044L67.8334 20.7354ZM37 11.4854C34.5334 11.4854 32.375 13.6438 32.375 16.1104C32.375 18.5771 34.5334 20.7354 37 20.7354C39.4667 20.7354 41.625 18.5771 41.625 16.1104C41.625 13.6438 39.4667 11.4854 37 11.4854Z"
                                            fill="#44403C"
                                        ></path>
                                    </svg>
                                </div>
                            </div>
                            <div className="info-path">
                                <div className="title-info-path">
                                    پشتیبانی بانکی
                                </div>
                                <div className="description-info-path">
                                    چت‌بات بانکی که به مشتریان خدمات ارائه
                                    می‌دهد...
                                </div>
                                <div className="text-botpress-small">
                                    همیارچت
                                </div>
                            </div>
                            {/* <div className="bottom-path">
                                <div className="download-path">
                                    <img
                                        src="https://assets-global.website-files.com/635c4eeb78332f7971255095/63d816b85f590ee749338a27_Downloads.svg"
                                        loading="lazy"
                                        alt="Download Icon"
                                        className="icon-download"
                                    />
                                    <div className="number-downloads">3.2k</div>
                                </div>
                                <a
                                    href="http://botpress.com/hub?type=Template"
                                    target="_blank"
                                    className="install-button w-button"
                                >
                                    Install
                                </a>
                            </div> */}
                        </div>
                    </animated.div>
                    <animated.div
                        className="wrapper-image-path third-col-animation"
                        style={{
                            transform: scrollY.interpolate(
                                (y: any) =>
                                    `translate3d(0px, ${
                                        y * 0
                                    }px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`,
                            ),
                        }}
                    >
                        <div className="template-image-path">
                            <div className="icon-template-path">
                                <div className="w-embed">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="74"
                                        height="74"
                                        viewBox="0 0 74 74"
                                        fill="none"
                                    >
                                        <path
                                            d="M40.0834 27.75V24.6667C40.0834 22.8167 41.3167 21.5834 43.1667 21.5834H46.25C51.4917 21.5834 55.5 17.575 55.5 12.3334V9.25002C55.5 7.40002 54.2667 6.16669 52.4167 6.16669C50.5667 6.16669 49.3334 7.40002 49.3334 9.25002V12.3334C49.3334 14.1834 48.1 15.4167 46.25 15.4167H43.1667C37.925 15.4167 33.9167 19.425 33.9167 24.6667V27.75H40.0834Z"
                                            fill="#2563EB"
                                        ></path>
                                        <path
                                            opacity="0.3"
                                            d="M64.75 67.8333H9.25002C7.40002 67.8333 6.16669 66.6 6.16669 64.75V30.8333C6.16669 28.9833 7.40002 27.75 9.25002 27.75H64.75C66.6 27.75 67.8334 28.9833 67.8334 30.8333V64.75C67.8334 66.6 66.6 67.8333 64.75 67.8333ZM15.4167 37C13.5667 37 12.3334 38.2333 12.3334 40.0833C12.3334 41.9333 13.5667 43.1667 15.4167 43.1667C17.2667 43.1667 18.5 41.9333 18.5 40.0833C18.5 38.2333 17.2667 37 15.4167 37ZM24.6667 37C22.8167 37 21.5834 38.2333 21.5834 40.0833C21.5834 41.9333 22.8167 43.1667 24.6667 43.1667C26.5167 43.1667 27.75 41.9333 27.75 40.0833C27.75 38.2333 26.5167 37 24.6667 37ZM33.9167 37C32.0667 37 30.8334 38.2333 30.8334 40.0833C30.8334 41.9333 32.0667 43.1667 33.9167 43.1667C35.7667 43.1667 37 41.9333 37 40.0833C37 38.2333 35.7667 37 33.9167 37ZM43.1667 37C41.3167 37 40.0834 38.2333 40.0834 40.0833C40.0834 41.9333 41.3167 43.1667 43.1667 43.1667C45.0167 43.1667 46.25 41.9333 46.25 40.0833C46.25 38.2333 45.0167 37 43.1667 37ZM27.75 46.25C25.9 46.25 24.6667 47.4833 24.6667 49.3333C24.6667 51.1833 25.9 52.4167 27.75 52.4167C29.6 52.4167 30.8334 51.1833 30.8334 49.3333C30.8334 47.4833 29.6 46.25 27.75 46.25ZM37 46.25C35.15 46.25 33.9167 47.4833 33.9167 49.3333C33.9167 51.1833 35.15 52.4167 37 52.4167C38.85 52.4167 40.0834 51.1833 40.0834 49.3333C40.0834 47.4833 38.85 46.25 37 46.25ZM46.25 46.25C44.4 46.25 43.1667 47.4833 43.1667 49.3333C43.1667 51.1833 44.4 52.4167 46.25 52.4167C48.1 52.4167 49.3334 51.1833 49.3334 49.3333C49.3334 47.4833 48.1 46.25 46.25 46.25ZM58.5834 55.5C56.7334 55.5 55.5 56.7333 55.5 58.5833C55.5 60.4333 56.7334 61.6667 58.5834 61.6667C60.4334 61.6667 61.6667 60.4333 61.6667 58.5833C61.6667 56.7333 60.4334 55.5 58.5834 55.5ZM21.5834 58.5833C21.5834 56.7333 20.35 55.5 18.5 55.5H15.4167C13.5667 55.5 12.3334 56.7333 12.3334 58.5833C12.3334 60.4333 13.5667 61.6667 15.4167 61.6667H18.5C20.35 61.6667 21.5834 60.4333 21.5834 58.5833ZM21.5834 49.3333C21.5834 47.4833 20.35 46.25 18.5 46.25H15.4167C13.5667 46.25 12.3334 47.4833 12.3334 49.3333C12.3334 51.1833 13.5667 52.4167 15.4167 52.4167H18.5C20.35 52.4167 21.5834 51.1833 21.5834 49.3333ZM52.4167 43.1667H58.5834C60.4334 43.1667 61.6667 41.9333 61.6667 40.0833C61.6667 38.2333 60.4334 37 58.5834 37H52.4167C50.5667 37 49.3334 38.2333 49.3334 40.0833C49.3334 41.9333 50.5667 43.1667 52.4167 43.1667ZM55.5 52.4167H58.5834C60.4334 52.4167 61.6667 51.1833 61.6667 49.3333C61.6667 47.4833 60.4334 46.25 58.5834 46.25H55.5C53.65 46.25 52.4167 47.4833 52.4167 49.3333C52.4167 51.1833 53.65 52.4167 55.5 52.4167ZM52.4167 58.5833C52.4167 56.7333 51.1834 55.5 49.3334 55.5H27.75C25.9 55.5 24.6667 56.7333 24.6667 58.5833C24.6667 60.4333 25.9 61.6667 27.75 61.6667H49.3334C51.1834 61.6667 52.4167 60.4333 52.4167 58.5833Z"
                                            fill="#2563EB"
                                        ></path>
                                    </svg>
                                </div>
                            </div>
                            <div className="info-path">
                                <div className="title-info-path">دستیار IT</div>
                                <div className="description-info-path">
                                    دستیار دیجیتال که به تیم‌های IT در زمینه‌های
                                    مختلف کمک می‌کند...
                                </div>
                                <div className="text-botpress-small">
                                    همیارچت
                                </div>
                            </div>
                            {/* <div className="bottom-path">
                                <div className="download-path">
                                    <img
                                        src="https://assets-global.website-files.com/635c4eeb78332f7971255095/63d816b85f590ee749338a27_Downloads.svg"
                                        loading="lazy"
                                        alt="Download Icon"
                                        className="icon-download"
                                    />
                                    <div className="number-downloads">6.3k</div>
                                </div>
                                <a
                                    href="http://botpress.com/hub?type=Template"
                                    target="_blank"
                                    className="install-button w-button"
                                >
                                    Install
                                </a>
                            </div> */}
                        </div>
                        <div className="template-image-path">
                            <div className="icon-template-path">
                                <div className="w-embed">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="74"
                                        height="74"
                                        viewBox="0 0 74 74"
                                        fill="none"
                                    >
                                        <path
                                            d="M18.5 64.75C18.5 66.6 19.7333 67.8334 21.5833 67.8334H52.4167C54.2667 67.8334 55.5 66.6 55.5 64.75V61.6667H18.5V64.75Z"
                                            fill="#7C3AED"
                                        ></path>
                                        <path
                                            opacity="0.3"
                                            d="M52.4167 6.16669H21.5833C19.7333 6.16669 18.5 7.40002 18.5 9.25002V61.6667H55.5V9.25002C55.5 7.40002 54.2667 6.16669 52.4167 6.16669Z"
                                            fill="#7C3AED"
                                        ></path>
                                        <path
                                            d="M37 12.3334C35.15 12.3334 33.9167 11.1 33.9167 9.25002V6.16669H40.0834V9.25002C40.0834 11.1 38.85 12.3334 37 12.3334Z"
                                            fill="#7C3AED"
                                        ></path>
                                    </svg>
                                </div>
                            </div>
                            <div className="info-path">
                                <div className="title-info-path">
                                    مشاور صورت‌حساب
                                </div>
                                <div className="description-info-path">
                                    چت‌بات پشتیبانی مشتری که به مشتریان در
                                    زمینه‌های مختلف کمک می‌کند...
                                </div>
                                <div className="text-botpress-small">
                                    همیارچت
                                </div>
                            </div>
                            {/* <div className="bottom-path">
                                <div className="download-path">
                                    <img
                                        src="https://assets-global.website-files.com/635c4eeb78332f7971255095/63d816b85f590ee749338a27_Downloads.svg"
                                        loading="lazy"
                                        alt="Download Icon"
                                        className="icon-download"
                                    />
                                    <div className="number-downloads">
                                        11.1k
                                    </div>
                                </div>
                                <a
                                    href="http://botpress.com/hub?type=Template"
                                    target="_blank"
                                    className="install-button w-button"
                                >
                                    Install
                                </a>
                            </div> */}
                        </div>
                        <div className="template-image-path">
                            <div className="icon-template-path">
                                <div className="w-embed">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="74"
                                        height="74"
                                        viewBox="0 0 74 74"
                                        fill="none"
                                    >
                                        <path
                                            d="M43.1667 55.5V49.3333H30.8333V55.5L27.75 61.6666H46.25L43.1667 55.5Z"
                                            fill="#EAB308"
                                        ></path>
                                        <path
                                            opacity="0.3"
                                            d="M61.6667 12.3334H52.4167V9.25002C52.4167 7.40002 51.1833 6.16669 49.3333 6.16669H24.6667C22.8167 6.16669 21.5833 7.40002 21.5833 9.25002V12.3334H12.3333C10.4833 12.3334 9.25 13.5667 9.25 15.4167V27.75C9.25 34.5334 14.8 40.0834 21.5833 40.0834C25.2833 43.7834 27.1333 45.6334 30.8333 49.3334H43.1667C46.8667 45.6334 48.7167 43.7834 52.4167 40.0834C59.2 40.0834 64.75 34.5334 64.75 27.75V15.4167C64.75 13.5667 63.5167 12.3334 61.6667 12.3334ZM15.4167 27.75V18.5H21.5833V33.9167C18.1917 33.9167 15.4167 31.1417 15.4167 27.75ZM58.5833 27.75C58.5833 31.1417 55.8083 33.9167 52.4167 33.9167V18.5H58.5833V27.75ZM52.4167 64.75V67.8334H21.5833V64.75C21.5833 62.9 22.8167 61.6667 24.6667 61.6667H49.3333C51.1833 61.6667 52.4167 62.9 52.4167 64.75ZM30.8333 27.75C28.9833 27.75 27.75 26.5167 27.75 24.6667V15.4167C27.75 13.5667 28.9833 12.3334 30.8333 12.3334C32.6833 12.3334 33.9167 13.5667 33.9167 15.4167V24.6667C33.9167 26.5167 32.6833 27.75 30.8333 27.75ZM30.8333 40.0834C28.9833 40.0834 27.75 38.85 27.75 37V33.9167C27.75 32.0667 28.9833 30.8334 30.8333 30.8334C32.6833 30.8334 33.9167 32.0667 33.9167 33.9167V37C33.9167 38.85 32.6833 40.0834 30.8333 40.0834Z"
                                            fill="#EAB308"
                                        ></path>
                                    </svg>
                                </div>
                            </div>
                            <div className="info-path">
                                <div className="title-info-path">
                                    دوست تناسب اندام
                                </div>
                                <div className="description-info-path">
                                    راهنمایی و پشتیبانی شخصی‌سازی شده ارائه
                                    می‌دهد...
                                </div>
                                <div className="text-botpress-small">
                                    همیارچت
                                </div>
                            </div>
                            {/* <div className="bottom-path">
                                <div className="download-path">
                                    <img
                                        src="https://assets-global.website-files.com/635c4eeb78332f7971255095/63d816b85f590ee749338a27_Downloads.svg"
                                        loading="lazy"
                                        alt="Download Icon"
                                        className="icon-download"
                                    />
                                    <div className="number-downloads">3.6k</div>
                                </div>
                                <a
                                    href="http://botpress.com/hub?type=Template"
                                    target="_blank"
                                    className="install-button w-button"
                                >
                                    Install
                                </a>
                            </div> */}
                        </div>
                    </animated.div>
                    <animated.div
                        className="wrapper-image-path forth-col-animation"
                        style={{
                            transform: scrollY.interpolate(
                                (y: any) =>
                                    `translate3d(0px, ${
                                        y * -0.08
                                    }px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`,
                            ),
                        }}
                    >
                        <div className="template-image-path">
                            <div className="icon-template-path">
                                <div className="w-embed">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="74"
                                        height="74"
                                        viewBox="0 0 74 74"
                                        fill="none"
                                    >
                                        <path
                                            d="M61.6667 43.1666H55.5V30.8333H61.6667C63.5167 30.8333 64.75 32.0666 64.75 33.9166V40.0833C64.75 41.9333 63.5167 43.1666 61.6667 43.1666ZM64.75 58.5833V52.4166C64.75 50.5666 63.5167 49.3333 61.6667 49.3333H55.5V61.6666H61.6667C63.5167 61.6666 64.75 60.4333 64.75 58.5833ZM64.75 21.5833V15.4166C64.75 13.5666 63.5167 12.3333 61.6667 12.3333H55.5V24.6666H61.6667C63.5167 24.6666 64.75 23.4333 64.75 21.5833Z"
                                            fill="#C026D3"
                                        ></path>
                                        <path
                                            opacity="0.3"
                                            d="M52.4167 67.8334H9.25002C7.40002 67.8334 6.16669 66.6 6.16669 64.75V9.25002C6.16669 7.40002 7.40002 6.16669 9.25002 6.16669H52.4167C54.2667 6.16669 55.5 7.40002 55.5 9.25002V64.75C55.5 66.6 54.2667 67.8334 52.4167 67.8334ZM30.8334 21.5834C27.4417 21.5834 24.6667 24.3584 24.6667 27.75C24.6667 31.1417 27.4417 33.9167 30.8334 33.9167C34.225 33.9167 37 31.1417 37 27.75C37 24.3584 34.225 21.5834 30.8334 21.5834ZM41.0084 49.3334C43.1667 49.3334 44.7084 47.1749 44.0917 45.3249C42.2417 40.6999 37 37 31.1417 37C24.975 37 20.0417 40.3915 18.1917 45.3249C17.2667 47.1749 19.1167 49.3334 22.8167 49.3334H41.0084Z"
                                            fill="#C026D3"
                                        ></path>
                                    </svg>
                                </div>
                            </div>
                            <div className="info-path">
                                <div className="title-info-path">
                                    دستیار منابع انسانی
                                </div>
                                <div className="description-info-path">
                                    کمک به مدیریت وظایف مرتبط با پرسنل...
                                </div>
                                <div className="text-botpress-small">
                                    همیارچت
                                </div>
                            </div>
                            {/* <div className="bottom-path">
                                <div className="download-path">
                                    <img
                                        src="https://assets-global.website-files.com/635c4eeb78332f7971255095/63d816b85f590ee749338a27_Downloads.svg"
                                        loading="lazy"
                                        alt="Download Icon"
                                        className="icon-download"
                                    />
                                    <div className="number-downloads">8.2k</div>
                                </div>
                                <a
                                    href="http://botpress.com/hub?type=Template"
                                    target="_blank"
                                    className="install-button w-button"
                                >
                                    Install
                                </a>
                            </div> */}
                        </div>
                        <div className="template-image-path">
                            <div className="icon-template-path">
                                <div className="w-embed">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="74"
                                        height="74"
                                        viewBox="0 0 74 74"
                                        fill="none"
                                    >
                                        <path
                                            opacity="0.3"
                                            d="M64.75 67.8333H9.25002C7.40002 67.8333 6.16669 66.6 6.16669 64.75V15.4166C6.16669 13.5666 7.40002 12.3333 9.25002 12.3333H64.75C66.6 12.3333 67.8334 13.5666 67.8334 15.4166V64.75C67.8334 66.6 66.6 67.8333 64.75 67.8333Z"
                                            fill="#14B8A6"
                                        ></path>
                                        <path
                                            d="M18.5 18.5C16.65 18.5 15.4167 17.2667 15.4167 15.4167V9.25002C15.4167 7.40002 16.65 6.16669 18.5 6.16669C20.35 6.16669 21.5834 7.40002 21.5834 9.25002V15.4167C21.5834 17.2667 20.35 18.5 18.5 18.5ZM33.9167 15.4167V9.25002C33.9167 7.40002 32.6834 6.16669 30.8334 6.16669C28.9834 6.16669 27.75 7.40002 27.75 9.25002V15.4167C27.75 17.2667 28.9834 18.5 30.8334 18.5C32.6834 18.5 33.9167 17.2667 33.9167 15.4167ZM46.25 15.4167V9.25002C46.25 7.40002 45.0167 6.16669 43.1667 6.16669C41.3167 6.16669 40.0834 7.40002 40.0834 9.25002V15.4167C40.0834 17.2667 41.3167 18.5 43.1667 18.5C45.0167 18.5 46.25 17.2667 46.25 15.4167ZM58.5834 15.4167V9.25002C58.5834 7.40002 57.35 6.16669 55.5 6.16669C53.65 6.16669 52.4167 7.40002 52.4167 9.25002V15.4167C52.4167 17.2667 53.65 18.5 55.5 18.5C57.35 18.5 58.5834 17.2667 58.5834 15.4167Z"
                                            fill="#14B8A6"
                                        ></path>
                                        <path
                                            d="M27.1333 40.3918C28.3667 40.3918 29.2917 40.0834 29.9083 39.4668C30.525 38.8501 31.1417 37.9251 31.1417 36.6917C31.1417 35.7667 30.8333 34.8418 30.2167 34.2251C29.6 33.6084 28.675 33.3001 27.75 33.3001C27.1333 33.3001 26.5166 33.3001 25.9 33.6084C25.2833 33.9167 24.975 34.2251 24.6667 34.5334C24.3583 34.8417 24.05 35.1501 23.7417 35.7668C23.4333 36.3834 23.125 36.6918 23.125 37.3084C23.125 37.6168 22.8167 37.6168 22.5083 37.9251C22.2 38.2334 21.8916 38.2334 21.275 38.2334C20.6583 38.2334 20.35 37.9251 20.0417 37.6167C19.7333 37.3084 19.425 36.6917 19.425 36.0751C19.425 35.4584 19.7333 34.8418 20.0417 34.2251C20.35 33.6084 20.9667 32.9917 21.5833 32.3751C22.2 31.7584 23.125 31.1417 24.3583 30.8334C25.5916 30.5251 26.5167 30.2168 28.0583 30.2168C29.2917 30.2168 30.2167 30.5251 31.1417 30.8334C32.0667 31.1417 32.9916 31.7584 33.6083 32.0667C34.225 32.3751 34.8416 33.3001 35.15 34.2251C35.4583 35.1501 35.7667 35.7667 35.7667 36.6917C35.7667 37.9251 35.4583 38.8501 34.8417 39.7751C34.225 40.7001 33.6083 41.6251 32.6833 42.2417C33.6083 42.8584 34.5333 43.4751 35.15 44.0918C35.7666 44.7084 36.3833 45.3251 36.6916 46.2501C37 47.1751 37.3083 47.7918 37.3083 48.7168C37.3083 49.9501 37 50.8751 36.6916 51.8001C36.3833 52.7251 35.4583 53.6501 34.8417 54.5751C34.225 55.5001 32.9917 56.1168 31.7583 56.4251C30.525 56.7334 29.2917 57.0417 27.75 57.0417C26.2083 57.0417 24.975 56.7334 23.7417 56.1167C22.5083 55.5001 21.5833 54.8834 20.9667 54.2668C20.35 53.6501 19.7333 52.7251 19.425 51.8001C19.1167 50.8751 18.8083 50.2584 18.8083 49.6418C18.8083 49.0251 19.1167 48.4084 19.425 48.1001C19.7333 47.7918 20.35 47.4834 20.9667 47.4834C21.275 47.4834 21.5833 47.4834 21.8917 47.7917C22.2 48.1001 22.5083 48.1001 22.5083 48.4084C23.125 49.9501 23.7417 51.1834 24.6667 52.1084C25.5917 53.0334 26.5167 53.3418 27.75 53.3418C28.3667 53.3418 29.2917 53.0334 29.9083 52.7251C30.525 52.4168 31.1417 51.8001 31.7583 51.1834C32.375 50.5668 32.375 49.6418 32.375 48.7168C32.375 47.1751 32.0667 46.2501 31.1417 45.3251C30.2167 44.4001 29.2917 44.0918 28.0583 44.0918C27.75 44.0918 27.4417 44.0918 26.825 44.0918C26.2083 44.0918 25.9 44.0918 25.9 44.0918C25.2833 44.0918 24.6666 43.7834 24.3583 43.4751C24.05 43.1668 23.7417 42.5501 23.7417 42.2417C23.7417 41.6251 24.05 41.3167 24.3583 40.7001C24.6666 40.0834 25.2833 40.0834 26.2083 40.0834H27.1333V40.3918ZM47.175 53.9584V37.6167C44.0917 40.0834 41.9333 41.0084 41.0083 41.0084C40.3917 41.0084 40.0833 40.7001 39.775 40.3918C39.4666 40.0834 39.1583 39.4668 39.1583 38.8501C39.1583 38.2334 39.4666 37.9251 39.775 37.6167C40.0833 37.3084 40.7 37.0001 41.9333 36.3834C43.475 35.7668 44.7083 34.8418 45.325 34.2251C45.9417 33.6084 46.8667 32.6834 47.7917 31.7584C48.7167 30.8334 49.025 30.2167 49.025 29.9084C49.025 29.6001 49.6417 29.6001 50.2583 29.6001C50.875 29.6001 51.4917 29.9084 51.8 30.2168C52.1083 30.5251 52.4167 31.4501 52.4167 32.3751V53.0334C52.4167 55.5001 51.4917 56.7334 49.95 56.7334C49.3333 56.7334 48.7167 56.4251 48.1 56.1167C47.4833 55.8084 47.175 54.8834 47.175 53.9584Z"
                                            fill="#14B8A6"
                                        ></path>
                                    </svg>
                                </div>
                            </div>
                            <div className="info-path">
                                <div className="title-info-path">
                                    دستیار شخصی
                                </div>
                                <div className="description-info-path">
                                    به کاربران در انجام وظایف روزمره، مانند...
                                </div>
                                <div className="text-botpress-small">
                                    همیارچت
                                </div>
                            </div>
                            {/* <div className="bottom-path">
                                <div className="download-path">
                                    <img
                                        src="https://assets-global.website-files.com/635c4eeb78332f7971255095/63d816b85f590ee749338a27_Downloads.svg"
                                        loading="lazy"
                                        alt="Download Icon"
                                        className="icon-download"
                                    />
                                    <div className="number-downloads">4.5k</div>
                                </div>
                                <a
                                    href="http://botpress.com/hub?type=Template"
                                    target="_blank"
                                    className="install-button w-button"
                                >
                                    Install
                                </a>
                            </div> */}
                        </div>
                    </animated.div>
                    <animated.div
                        className="wrapper-image-path fifth-col-animation"
                        style={{
                            transform: scrollY.interpolate(
                                (y: any) =>
                                    `translate3d(0px, ${
                                        y * 0.09
                                    }px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`,
                            ),
                        }}
                    >
                        <div className="template-image-path">
                            <div className="icon-template-path">
                                <div className="w-embed">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="74"
                                        height="74"
                                        viewBox="0 0 74 74"
                                        fill="none"
                                    >
                                        <g opacity="0.74">
                                            <path
                                                opacity="0.3"
                                                d="M22.1067 64.5958C19.3317 66.4458 15.94 63.9791 16.865 60.8958L22.7234 43.3208L7.61499 32.5292C4.83999 30.6792 6.38168 26.3625 9.46501 26.3625H64.3484C67.74 26.3625 68.9733 30.6792 66.1983 32.5292L22.1067 64.5958Z"
                                                fill="#84CC16"
                                            ></path>
                                            <path
                                                d="M34.1317 8.47919L23.0317 43.0125L52.3233 64.2875C55.0983 66.1375 58.4901 63.6709 57.565 60.5875L40.6067 8.47919C39.3734 5.39585 35.0567 5.39585 34.1317 8.47919Z"
                                                fill="#84CC16"
                                            ></path>
                                        </g>
                                    </svg>
                                </div>
                            </div>
                            <div className="info-path">
                                <div className="title-info-path">معلم زبان</div>
                                <div className="description-info-path">
                                    چت‌بات آموزشی برای کمک به یادگیری زبان‌های
                                    خارجی...
                                </div>
                                <div className="text-botpress-small">
                                    همیارچت
                                </div>
                            </div>
                            {/* <div className="bottom-path">
                                <div className="download-path">
                                    <img
                                        src="https://assets-global.website-files.com/635c4eeb78332f7971255095/63d816b85f590ee749338a27_Downloads.svg"
                                        loading="lazy"
                                        alt="Download Icon"
                                        className="icon-download"
                                    />
                                    <div className="number-downloads">7.3k</div>
                                </div>
                                <a
                                    href="http://botpress.com/hub?type=Template"
                                    target="_blank"
                                    className="install-button w-button"
                                >
                                    Install
                                </a>
                            </div> */}
                        </div>
                    </animated.div>
                </div>
            </div>
        </>
    )
}

export default ItemsGrid

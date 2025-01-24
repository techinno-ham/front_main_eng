"use client"
import Lottie from "lottie-react"
import LearnLottie from "../../../public/lottie/features/learn.json"
import ConfigLottie from "../../../public/lottie/features/config.json"
import ChatLottie from "../../../public/lottie/features/chat.json"

const Features = () => {
    return (
        <main>
            <div className="w-full px-4 pt-10">
                <div className="mx-auto mb-[60px] max-w-[510px] text-center">
                    <span className="text-primary mb-2 block text-lg font-semibold">
                        Features
                    </span>
                    <h1 className="text-dark mb-3 text-3xl font-bold leading-[1.208] sm:text-xl md:text-[40px] ">
                        Advanced
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
                            &nbsp;Features&nbsp;
                        </span>
                        of HamyarChat
                    </h1>
                </div>
            </div>
            <section className="relative pb-14 md:h-[60dvh] lg:pb-24">
                <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ">
                    <div className="grid grid-cols-1 gap-9 lg:grid-cols-2">
                        <div className="video-box">
                            <Lottie
                                animationData={LearnLottie}
                                loop={true}
                                autoPlay={true}
                                rendererSettings={{
                                    preserveAspectRatio: "xMidYMid slice",
                                }}
                            />
                        </div>

                        <div className="flex items-center lg:pl-[100px]">
                            <div className="data w-full">
                                <h4
                                    className=" relative mb-9 text-xl font-medium
                            text-black max-lg:text-center lg:text-3xl
                             "
                                >
                                    Training Chatbots with Your Custom Data
                                </h4>
                                <p className="mx-auto max-w-2xl text-justify text-xl font-normal leading-8 text-gray-500 max-lg:text-center">
                                    At HamyarChat, we enable training chatbots
                                    with your custom data. This feature allows
                                    businesses to configure chatbots based on
                                    their specific needs and content. By
                                    utilizing relevant data, our chatbots can
                                    provide more accurate responses to customer
                                    inquiries and deliver more personalized and
                                    effective interactions. Our goal is to
                                    enhance your chatbot's capabilities to
                                    improve customer experiences and help you
                                    achieve your business goals.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="relative pb-14 md:h-[60dvh] lg:pb-24">
                <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ">
                    <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-9 ">
                        <div className="flex items-center lg:pr-24">
                            <div className="data w-full">
                                <h4 className=" mb-9 text-xl font-medium text-black max-lg:text-center lg:text-3xl">
                                    Fully Customizable User Interface
                                </h4>
                                <p className="mx-auto max-w-2xl text-justify text-xl font-normal leading-8 text-gray-500 max-lg:text-center">
                                    At HamyarChat, we place great emphasis on
                                    user experience. Therefore, our chatbot’s
                                    user interface is fully customizable. You
                                    can adjust the design, colors, and various
                                    features to align with your brand identity.
                                    Our goal is to ensure that your users feel
                                    comfortable and in sync with each
                                    interaction and can easily access the
                                    information and services they need.
                                </p>
                            </div>
                        </div>
                        <div className="video-box order-first lg:order-2">
                            <Lottie
                                animationData={ConfigLottie}
                                loop={true}
                                autoPlay={true}
                                rendererSettings={{
                                    preserveAspectRatio: "xMidYMid slice",
                                }}
                            />
                        </div>
                    </div>
                </div>
            </section>
            <section className="relative pb-14 md:h-[60dvh] lg:pb-24">
                <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ">
                    <div className="grid grid-cols-1 gap-9 lg:grid-cols-2">
                        <div className="video-box">
                            <Lottie
                                animationData={ChatLottie}
                                loop={true}
                                autoPlay={true}
                                rendererSettings={{
                                    preserveAspectRatio: "xMidYMid slice",
                                }}
                            />
                        </div>

                        <div className="flex items-center lg:pl-[100px]">
                            <div className="data w-full">
                                <h4 className=" relative mb-9 text-xl font-medium text-black max-lg:text-center lg:text-3xl">
                                    AI-Powered Automatic Responses to User
                                    Queries
                                </h4>
                                <p className="mx-auto max-w-2xl text-justify text-xl font-normal leading-8 text-gray-500 max-lg:text-center">
                                    At HamyarChat, we proudly offer systems
                                    capable of providing fully automated
                                    responses to user queries. This feature
                                    enables you to assist your customers anytime
                                    and anywhere while reducing the workload of
                                    your support team. By analyzing and
                                    processing user questions accurately, our
                                    chatbots can quickly and accurately address
                                    their needs, delivering a fast and
                                    satisfying experience.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Features

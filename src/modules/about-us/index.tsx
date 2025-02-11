//https://pagedone.io/blocks/full-pages/about-us-page
//https://www.freepik.com/free-vector/teamwork-concept-landing-page_5155714.htm#fromView=search&page=1&position=2&uuid=f77b3277-49b0-4378-81f7-8d9417bf6546

import Link from "next/link"

// import required modules

const AboutUs = () => {
    return (
        <>
            <div className="w-full px-4 pt-10">
                <div className="mx-auto mb-[60px] max-w-[700px] text-center">
                    <span className="text-primary mb-2 block text-lg font-semibold">
                        About Us
                    </span>
                    <h1 className="text-dark mb-3 text-3xl font-bold   sm:text-xl md:text-[40px] ">
                        Meet the
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
                            &nbsp;Chatsys&nbsp;
                        </span>
                        Team
                    </h1>
                </div>
            </div>
            <section className="relative pb-14 lg:pb-24">
                <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ">
                    <div className="grid grid-cols-1 gap-9 lg:grid-cols-2">
                        <div className="img-box">
                            <img
                                src="/aboutus/1.jpg"
                                alt="About Us tailwind page"
                                className="max-lg:mx-auto"
                            />
                        </div>
                        <div className="flex items-center lg:pl-[100px]">
                            <div className="data w-full">
                                <h4 className=" relative mb-9 text-xl font-medium text-black max-lg:text-center lg:text-3xl">
                                    Get to Know Us
                                </h4>
                                <p className="mx-auto max-w-2xl text-justify text-xl font-normal leading-8 text-gray-500 max-lg:text-center">
                                    At Chatsys, we are excited to announce that
                                    we are among the pioneering startups
                                    specializing in AI Agents for customer
                                    service. Our mission is to deliver a
                                    superior, faster, and more efficient
                                    experience for your customers. Leveraging
                                    cutting-edge AI technologies and natural
                                    language processing, we empower businesses
                                    to enhance communication with their
                                    customers and meet their needs in the most
                                    effective manner possible.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="relative pb-14 lg:pb-24">
                <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ">
                    <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-9 ">
                        <div className="flex items-center lg:pr-24">
                            <div className="data w-full">
                                <img
                                    src="/aboutus/2.jpg"
                                    alt="About Us tailwind page"
                                    className="mx-auto mb-9 block lg:hidden"
                                />
                                <h4 className=" mb-9 text-xl font-medium text-black max-lg:text-center lg:text-3xl">
                                    Mission & Values
                                </h4>
                                <p className="mx-auto max-w-2xl text-justify text-xl font-normal leading-8 text-gray-500 max-lg:text-center">
                                    Our mission at Chatsys is to facilitate
                                    communication with customers and enhance
                                    their satisfaction. We believe that
                                    technology should serve humanity, which is
                                    why we are always striving to provide
                                    solutions that are both user-friendly and
                                    effective. Our values include innovation,
                                    customer orientation, quality, and
                                    transparency. Our team is committed to
                                    providing the best services and support to
                                    our valued customers and is always ready to
                                    collaborate and meet your needs.
                                </p>
                            </div>
                        </div>
                        <div className="img-box ">
                            <img
                                src="/aboutus/2.jpg"
                                alt="About Us tailwind page"
                                className="hidden lg:block "
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-white py-20">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <h4 className=" mb-14 text-center text-xl font-medium text-gray-900 lg:text-3xl">
                        Our Results
                    </h4>
                    <div className="flex flex-col gap-5 lg:flex-row lg:justify-between xl:gap-8">
                        <div className="mx-auto w-full rounded-2xl bg-white p-6 shadow-md shadow-gray-100 max-lg:max-w-2xl lg:mx-0 lg:w-1/3">
                            <div className="flex gap-5">
                                <div className="font-manrope text-2xl font-medium text-blue-600">
                                    240%
                                </div>
                                <div className="flex-1">
                                    <h4 className="mb-2 text-xl font-semibold text-gray-900">
                                        Company Growth
                                    </h4>
                                </div>
                            </div>
                        </div>
                        <div className="mx-auto w-full rounded-2xl bg-white p-6 shadow-md shadow-gray-100 max-lg:max-w-2xl lg:mx-0 lg:w-1/3">
                            <div className="flex gap-5">
                                <div className="font-manrope text-2xl font-medium text-blue-600">
                                    175+
                                </div>
                                <div className="flex-1">
                                    <h4 className="mb-2 text-xl font-semibold text-gray-900">
                                        Satisfied Customers
                                    </h4>
                                </div>
                            </div>
                        </div>
                        <div className="mx-auto w-full rounded-2xl bg-white p-6 shadow-md shadow-gray-100 max-lg:max-w-2xl lg:mx-0 lg:w-1/3">
                            <div className="flex gap-5">
                                <div className="font-manrope text-2xl font-medium text-blue-600">
                                    625+
                                </div>
                                <div className="flex-1">
                                    <h4 className="mb-2 text-xl font-semibold text-gray-900">
                                        Responses Generated per Day
                                    </h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AboutUs

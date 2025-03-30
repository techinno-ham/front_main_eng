import { Metadata, NextPage } from "next"

const PrivacyPage: NextPage = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            <div className="mx-auto max-w-4xl px-4 py-16">
                <div className="rounded-2xl bg-white p-8 shadow-xl">
                    <h1 className="mb-8 text-3xl font-bold text-gray-900">
                        Privacy Policy
                    </h1>

                    <section className="mb-8">
                        <h2 className="mb-4 text-xl font-semibold text-gray-800">
                            Information We Collect
                        </h2>
                        <p className="leading-relaxed text-gray-600">
                            When you use the Chatsys AI Agent plugin, we collect
                            information to provide and improve our services.
                            This may include:
                        </p>
                        <div className="mt-4 space-y-2">
                            <div className="flex items-start">
                                <div className="h-6 w-6 flex-shrink-0 text-blue-500">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                        />
                                    </svg>
                                </div>
                                <span className="ml-3 text-gray-600">
                                    User queries and interactions with the
                                    chatbot.
                                </span>
                            </div>
                            <div className="flex items-start">
                                <div className="h-6 w-6 flex-shrink-0 text-blue-500">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                        />
                                    </svg>
                                </div>
                                <span className="ml-3 text-gray-600">
                                    Plugin configuration data, such as chatbot
                                    settings and preferences.
                                </span>
                            </div>
                            <div className="flex items-start">
                                <div className="h-6 w-6 flex-shrink-0 text-blue-500">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                        />
                                    </svg>
                                </div>
                                <span className="ml-3 text-gray-600">
                                    WooCommerce product data (if applicable) for
                                    product recommendations and order-related
                                    queries.
                                </span>
                            </div>
                        </div>
                    </section>

                    <section className="mb-8">
                        <h2 className="mb-4 text-xl font-semibold text-gray-800">
                            How We Use Your Information
                        </h2>
                        <div className="rounded-lg bg-gray-50 p-6">
                            <ul className="space-y-4">
                                <li className="flex items-start">
                                    <div className="h-6 w-6 flex-shrink-0 text-blue-500">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M13 10V3L4 14h7v7l9-11h-7z"
                                            />
                                        </svg>
                                    </div>
                                    <span className="ml-3 text-gray-600">
                                        To provide and maintain the AI-powered
                                        chatbot functionality.
                                    </span>
                                </li>
                                <li className="flex items-start">
                                    <div className="h-6 w-6 flex-shrink-0 text-blue-500">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M13 10V3L4 14h7v7l9-11h-7z"
                                            />
                                        </svg>
                                    </div>
                                    <span className="ml-3 text-gray-600">
                                        To improve the accuracy and performance
                                        of the chatbot.
                                    </span>
                                </li>
                                <li className="flex items-start">
                                    <div className="h-6 w-6 flex-shrink-0 text-blue-500">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M13 10V3L4 14h7v7l9-11h-7z"
                                            />
                                        </svg>
                                    </div>
                                    <span className="ml-3 text-gray-600">
                                        To provide customer support and respond
                                        to inquiries.
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </section>

                    <section className="mb-8">
                        <h2 className="mb-4 text-xl font-semibold text-gray-800">
                            Data Security
                        </h2>
                        <div className="prose text-gray-600">
                            <p className="mb-4">
                                We take data security seriously and implement
                                appropriate technical and organizational
                                measures to protect your information. However,
                                no method of transmission over the Internet or
                                electronic storage is 100% secure.
                            </p>
                            <div className="rounded border-l-4 border-blue-500 bg-blue-50 p-4">
                                <p className="text-blue-700">
                                    We regularly review and update our security
                                    practices to ensure the protection of your
                                    data.
                                </p>
                            </div>
                        </div>
                    </section>

                    <section className="mb-8">
                        <h2 className="mb-4 text-xl font-semibold text-gray-800">
                            Your Rights
                        </h2>
                        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                            <div className="rounded-lg bg-gray-50 p-6">
                                <h3 className="mb-2 font-medium text-gray-900">
                                    Access
                                </h3>
                                <p className="text-gray-600">
                                    You can request access to the personal data
                                    we hold about you.
                                </p>
                            </div>
                            <div className="rounded-lg bg-gray-50 p-6">
                                <h3 className="mb-2 font-medium text-gray-900">
                                    Rectification
                                </h3>
                                <p className="text-gray-600">
                                    You can request corrections to any
                                    inaccurate or incomplete data.
                                </p>
                            </div>
                            <div className="rounded-lg bg-gray-50 p-6">
                                <h3 className="mb-2 font-medium text-gray-900">
                                    Erasure
                                </h3>
                                <p className="text-gray-600">
                                    You can request deletion of your personal
                                    data under certain conditions.
                                </p>
                            </div>
                            <div className="rounded-lg bg-gray-50 p-6">
                                <h3 className="mb-2 font-medium text-gray-900">
                                    Portability
                                </h3>
                                <p className="text-gray-600">
                                    You can request a copy of your data in a
                                    structured, machine-readable format.
                                </p>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2 className="mb-4 text-xl font-semibold text-gray-800">
                            Contact Us
                        </h2>
                        <div className="rounded-lg bg-gray-50 p-6">
                            <p className="mb-4 text-gray-600">
                                If you have any questions about this Privacy
                                Policy or how we handle your data, please
                                contact us at:
                            </p>
                            <div className="flex items-center space-x-2 text-blue-600">
                                <svg
                                    className="h-5 w-5"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                    />
                                </svg>
                                <a
                                    href="mailto:hello@chatsys.co"
                                    className="hover:underline"
                                >
                                    hello@chatsys.co
                                </a>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}

export const metadata: Metadata = {
    title: "Terms Of Service | Chatsys - Conversational AI Agent",
    description:
        "With Chatsys, get customer support solutions at affordable and flexible prices. We offer various packages for both small and large businesses so you can choose the best option for your needs. Enhance customer experience at a cost-effective price.",
    // openGraph: {
    //   title: 'Pricing',
    // },
    icons: {
        icon: "/logo.svg", // /public path
    },
}

export default PrivacyPage

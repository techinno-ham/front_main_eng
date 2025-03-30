import { Metadata, NextPage } from "next"

const TermsPage: NextPage = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            <div className="mx-auto max-w-4xl px-4 py-16">
                <div className="rounded-2xl bg-white p-8 shadow-xl">
                    <h1 className="mb-8 text-3xl font-bold text-gray-900">
                        Terms of Service
                    </h1>

                    <section className="mb-8">
                        <h2 className="mb-4 text-xl font-semibold text-gray-800">
                            1. Acceptance of Terms
                        </h2>
                        <div className="prose text-gray-600">
                            <p>
                                By accessing or using the Chatsys AI Agent
                                plugin (&quot;the Service&quot;), you agree to be bound by
                                these Terms of Service. If you do not agree to
                                these terms, you may not use the Service.
                            </p>
                        </div>
                    </section>

                    <section className="mb-8">
                        <h2 className="mb-4 text-xl font-semibold text-gray-800">
                            2. Use License
                        </h2>
                        <div className="rounded-lg bg-gray-50 p-6">
                            <ul className="space-y-4 text-gray-600">
                                <li className="flex gap-3">
                                    <svg
                                        className="h-6 w-6 flex-shrink-0 text-blue-500"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M5 13l4 4L19 7"
                                        />
                                    </svg>
                                    <span>
                                        You are granted a non-exclusive,
                                        non-transferable license to use the
                                        Chatsys AI Agent plugin for your
                                        WordPress website or WooCommerce store.
                                    </span>
                                </li>
                                <li className="flex gap-3">
                                    <svg
                                        className="h-6 w-6 flex-shrink-0 text-blue-500"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M5 13l4 4L19 7"
                                        />
                                    </svg>
                                    <span>
                                        You may not reverse-engineer, modify, or
                                        distribute the plugin without prior
                                        written consent from Chatsys.
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </section>

                    <section className="mb-8">
                        <h2 className="mb-4 text-xl font-semibold text-gray-800">
                            3. Disclaimer
                        </h2>
                        <div className="border-l-4 border-yellow-400 bg-yellow-50 p-4">
                            <div className="flex">
                                <div className="flex-shrink-0">
                                    <svg
                                        className="h-5 w-5 text-yellow-400"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                                            clip-rule="evenodd"
                                        />
                                    </svg>
                                </div>
                                <div className="ml-3">
                                    <p className="text-sm text-yellow-700">
                                        The Chatsys AI Agent plugin is provided
                                        on an &quot;as is&quot; and &quot;as available&quot; basis.
                                        We do not guarantee that the Service
                                        will be error-free, uninterrupted, or
                                        fully secure. Your use of the Service is
                                        at your own risk.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="mb-8">
                        <h2 className="mb-4 text-xl font-semibold text-gray-800">
                            4. Limitations
                        </h2>
                        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                            <div className="rounded-lg bg-gray-50 p-6">
                                <h3 className="mb-2 font-medium text-gray-900">
                                    Data Usage
                                </h3>
                                <p className="text-gray-600">
                                    The Service processes user queries and
                                    interactions to provide AI-powered
                                    responses. By using the Service, you consent
                                    to this data processing.
                                </p>
                            </div>
                            <div className="rounded-lg bg-gray-50 p-6">
                                <h3 className="mb-2 font-medium text-gray-900">
                                    Liability
                                </h3>
                                <p className="text-gray-600">
                                    Chatsys shall not be liable for any
                                    indirect, incidental, or consequential
                                    damages arising from the use of the Service.
                                </p>
                            </div>
                        </div>
                    </section>

                    <section className="mb-8">
                        <h2 className="mb-4 text-xl font-semibold text-gray-800">
                            5. Revisions
                        </h2>
                        <div className="prose text-gray-600">
                            <p>
                                We reserve the right to update or modify these
                                Terms of Service at any time. Continued use of
                                the Service after changes constitutes your
                                acceptance of the revised terms.
                            </p>
                        </div>
                    </section>

                    <section>
                        <h2 className="mb-4 text-xl font-semibold text-gray-800">
                            6. Contact
                        </h2>
                        <div className="flex items-center justify-between rounded-lg bg-gray-50 p-6">
                            <p className="text-gray-600">
                                Questions about the Terms of Service?
                            </p>
                            <a
                                href="mailto:hello@chatsys.co"
                                className="inline-flex items-center text-blue-600 hover:text-blue-500"
                            >
                                <svg
                                    className="mr-2 h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                    />
                                </svg>
                                hello@chatsys.co
                            </a>
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

export default TermsPage

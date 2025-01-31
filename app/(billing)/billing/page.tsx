"use client"

import { useEffect, useState } from "react"
import { useSearchParams, useRouter } from "next/navigation"
import { Confetti } from "./components/confetti"
import mainApi from "@/src/infrastructures/http-client-main"
import { API } from "@/src/shared/constanst/api"

export default function BillingSuccessPage() {
    const [showContent, setShowContent] = useState(false)
    const searchParams = useSearchParams()
    const router = useRouter()
    const session_id = searchParams.get("session_id")
    const [invoice, setInvoice] = useState<{
        amount: string
        transactionId: string
    } | null>(null)
    const [loading, setLoading] = useState<boolean>(true)

    useEffect(() => {
        if (!session_id) {
            router.push("/pricing")
            return
        }

        const fetchSessionDetails = async () => {
            try {
                const response = await mainApi.get(
                    `${API.STRIPE_SESSION}${session_id}`,
                )

                const data = await response.data

                console.log({ data })

                setInvoice(data)
                setLoading(false)
                const timer = setTimeout(() => setShowContent(true), 500)
            } catch (error) {
                console.error("Failed to fetch session details:", error)
                router.push("/pricing")
            }
        }

        fetchSessionDetails()
    }, [session_id, router])

    if (loading) return <p>Loading...</p>

    return (
        <div
            className="flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br 
from-blue-50 via-blue-300 to-blue-50
           p-4"
        >
            <Confetti />
            <div
                className={`w-full max-w-md transform transition-all duration-1000 ease-out ${
                    showContent
                        ? "translate-y-0 opacity-100"
                        : "translate-y-10 opacity-0"
                } overflow-hidden rounded-lg bg-white shadow-lg`}
            >
                <div className="p-6 text-center">
                    <div className="mx-auto my-4 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-r from-blue-400 to-indigo-500 p-3 text-white shadow-lg">
                        <svg
                            className="h-10 w-10"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M5 13l4 4L19 7"
                            />
                        </svg>
                    </div>
                    <h1 className="bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-3xl font-bold text-transparent">
                        Payment Successful!
                    </h1>
                </div>
                <div className="px-6 pb-6 text-center">
                    <p className="mb-6 text-lg text-gray-600">
                        Thank you for your payment. Your transaction was
                        successful.
                    </p>
                    <div className="mb-6 rounded-lg bg-gradient-to-r from-blue-50 to-indigo-50 p-6 shadow-inner">
                        <p className="mb-3 text-sm font-semibold text-gray-600">
                            Transaction Details:
                        </p>
                        <div className="mb-2 flex items-center justify-between">
                            <span className="text-gray-600">Amount:</span>
                            <span className="text-lg font-bold">
                                ${invoice?.amount}
                            </span>
                        </div>
                        <div className="mb-2 flex items-center justify-between">
                            <span className="text-gray-600">
                                Transaction ID:
                            </span>
                            <span className="font-mono text-xs">
                                {invoice?.transactionId}
                            </span>
                        </div>
                        <div className="flex items-center justify-between">
                            <span className="text-gray-600">Date:</span>
                            <span>{new Date().toLocaleDateString()}</span>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col space-y-3 p-6">
                    <a href="/mybots">
                        <button className="flex w-full items-center justify-center rounded-lg bg-gradient-to-r from-blue-400 to-indigo-500 px-4 py-2 text-white transition-all duration-200 hover:from-blue-600 hover:to-indigo-600">
                            <svg
                                className="mr-2 h-4 w-4"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                                />
                            </svg>
                            Return to Dashboard
                        </button>
                    </a>
                    {/* <button className="flex w-full items-center justify-center rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 px-4 py-2 text-white transition-all duration-200 hover:from-purple-600 hover:to-pink-600">
                        <svg
                            className="mr-2 h-4 w-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                            />
                        </svg>
                        Return to Dashboard
                    </button> */}
                </div>
            </div>
        </div>
    )
}

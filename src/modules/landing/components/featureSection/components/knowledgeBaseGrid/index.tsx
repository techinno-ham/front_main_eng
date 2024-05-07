"use client"

import { motion, useAnimation, useInView } from "framer-motion"
import { useEffect, useRef } from "react"
import { DocumentText1, Global, SearchNormal1, Text } from "iconsax-react"

const KnowledgeBaseGrid = () => {
    const mainRef = useRef(null)
    const isInView = useInView(mainRef, { once: true })

    const animController = useAnimation()

    useEffect(() => {
        if (isInView) {
            animController.start("visible")
        }
    }, [isInView])
    return (
        <div className="grid w-[80%] grid-cols-2 gap-4 py-20" ref={mainRef}>
            <motion.div
                variants={{
                    hidden: { opacity: 0, x: "+20%" },
                    visible: { opacity: 1, x: 0 },
                }}
                initial="hidden"
                animate={animController}
                transition={{ duration: 1 }}
                className="flex items-center justify-between rounded-md border border-gray-300 p-2"
            >
                <div>
                    <h3>افزودن وبسایت</h3>
                    <h5 className="text-gray-400">سلام سلام سلام سلام</h5>
                </div>
                <div
                    style={{
                        background: "rgba(58, 96, 221, .1)",
                    }}
                    className="flex h-[50px] w-[50px] items-center justify-center rounded-md border border-gray-300"
                >
                    <Global
                        size="32"
                        color="rgba(58, 96, 221, 1)"
                        variant="Outline"
                    />
                </div>
            </motion.div>
            <motion.div
                variants={{
                    hidden: { opacity: 0, x: "-20%" },
                    visible: { opacity: 1, x: 0 },
                }}
                initial="hidden"
                animate={animController}
                transition={{ duration: 1 }}
                className="flex items-center justify-between rounded-md border border-gray-300 p-2"
            >
                <div>
                    <h3>افزودن وبسایت</h3>
                    <h5 className="text-gray-400">سلام سلام سلام سلام</h5>
                </div>
                <div
                    style={{
                        background: "rgba(255, 199, 67, .1)",
                    }}
                    className="flex h-[50px] w-[50px] items-center justify-center rounded-md border border-gray-300"
                >
                    <DocumentText1
                        size="32"
                        color="rgba(255, 199, 67, 1)"
                        variant="Outline"
                    />
                </div>
            </motion.div>
            <motion.div
                variants={{
                    hidden: { opacity: 0, x: "+20%" },
                    visible: { opacity: 1, x: 0 },
                }}
                initial="hidden"
                animate={animController}
                transition={{ duration: 1, delay: 0.4 }}
                className="flex items-center justify-between rounded-md border border-gray-300 p-2"
            >
                <div>
                    <h3>افزودن وبسایت</h3>
                    <h5 className="text-gray-400">سلام سلام سلام سلام</h5>
                </div>
                <div
                    style={{
                        background: "rgba(37, 158, 99, 0.1)",
                    }}
                    className="flex h-[50px] w-[50px] items-center justify-center rounded-md border border-gray-300"
                >
                    <SearchNormal1
                        size="32"
                        color="rgba(37, 158, 99, 1)"
                        variant="Outline"
                    />
                </div>
            </motion.div>
            <motion.div
                variants={{
                    hidden: { opacity: 0, x: "-20%" },
                    visible: { opacity: 1, x: 0 },
                }}
                initial="hidden"
                animate={animController}
                transition={{ duration: 1, delay: 0.4 }}
                className="flex items-center justify-between rounded-md border border-gray-300 p-2"
            >
                <div>
                    <h3>افزودن وبسایت</h3>
                    <h5 className="text-gray-400">سلام سلام سلام سلام</h5>
                </div>
                <div
                    style={{
                        background: "rgba(136, 70, 195, 0.1)",
                    }}
                    className="flex h-[50px] w-[50px] items-center justify-center rounded-md border border-gray-300"
                >
                    <Text
                        size="32"
                        color="rgba(136, 70, 195, 1)"
                        variant="Outline"
                    />
                </div>
            </motion.div>
            <motion.div
                variants={{
                    hidden: { opacity: 0, x: "+20%" },
                    visible: { opacity: 1, x: 0 },
                }}
                initial="hidden"
                animate={animController}
                transition={{ duration: 1, delay: 0.8 }}
                className="flex items-center justify-between rounded-md border border-gray-300 p-2"
            >
                <div>
                    <h3>افزودن وبسایت</h3>
                    <h5 className="text-gray-400">سلام سلام سلام سلام</h5>
                </div>
                <div
                    style={{
                        background: "rgba(136, 70, 195, 0.1)",
                    }}
                    className="flex h-[50px] w-[50px] items-center justify-center rounded-md border border-gray-300"
                >
                    <Text
                        size="32"
                        color="rgba(136, 70, 195, 1)"
                        variant="Outline"
                    />
                </div>
            </motion.div>
            <motion.div
                variants={{
                    hidden: { opacity: 0, x: "-20%" },
                    visible: { opacity: 1, x: 0 },
                }}
                initial="hidden"
                animate={animController}
                transition={{ duration: 1, delay: 0.8 }}
                className="flex items-center justify-between rounded-md border border-gray-300 p-2"
            >
                <div>
                    <h3>افزودن وبسایت</h3>
                    <h5 className="text-gray-400">سلام سلام سلام سلام</h5>
                </div>
                <div
                    style={{
                        background: "rgba(136, 70, 195, 0.1)",
                    }}
                    className="flex h-[50px] w-[50px] items-center justify-center rounded-md border border-gray-300"
                >
                    <Text
                        size="32"
                        color="rgba(136, 70, 195, 1)"
                        variant="Outline"
                    />
                </div>
            </motion.div>
        </div>
    )
}

export default KnowledgeBaseGrid

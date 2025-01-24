"use client"

import { motion, useAnimation, useInView } from "framer-motion"
import { useEffect, useRef } from "react"
import { DocumentText1, Global, SearchNormal1, Text } from "iconsax-react"
import Image from "next/image"

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
        <div
            className="grid w-[80%] grid-cols-1 gap-4 py-20 md:grid-cols-2"
            ref={mainRef}
        >
            <motion.div
                variants={{
                    hidden: { opacity: 0, x: "+20%" },
                    visible: { opacity: 1, x: 0 },
                }}
                initial="hidden"
                animate={animController}
                transition={{ duration: 1 }}
                style={{
                    boxShadow: "2px 5px 25px 0px rgba(108, 146, 242, .05)",
                }}
                className="flex items-center justify-between rounded-md border border-blue-100 p-4 shadow-sm"
            >
                <div>
                    <h3 className="text-lg ">Website</h3>
                </div>
                <div
                    style={{
                        position: "relative",
                    }}
                    className="flex h-[50px] w-[50px] items-center justify-center "
                >
                    <Image src={"/logos/web4.png"} alt={""} layout="fill" />
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
                style={{
                    boxShadow: "2px 5px 25px 0px rgba(108, 146, 242, .05)",
                }}
                className="flex items-center justify-between rounded-md border border-blue-100 p-4 shadow-sm"
            >
                <div>
                    <h3 className="text-lg ">FAQ</h3>
                </div>
                <div
                    style={{
                        position: "relative",
                    }}
                    className="flex h-[50px] w-[50px] items-center justify-center "
                >
                    <Image src={"/logos/qa.png"} alt={""} layout="fill" />
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
                className="flex items-center justify-between rounded-md border border-blue-100 p-4 shadow-sm"
            >
                <div>
                    <h3 className="text-lg ">PDF Documents</h3>
                </div>
                <div
                    style={{
                        position: "relative",
                    }}
                    className="flex h-[50px] w-[50px] items-center justify-center "
                >
                    <Image src={"/logos/pdf.png"} alt={""} layout="fill" />
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
                className="flex items-center justify-between rounded-md border border-blue-100 p-4 shadow-sm"
            >
                <div>
                    <h3 className="text-lg ">Word Documents</h3>
                </div>
                <div
                    style={{
                        position: "relative",
                    }}
                    className="flex h-[50px] w-[50px] items-center justify-center "
                >
                    <Image src={"/logos/word.png"} alt={""} layout="fill" />
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
                className="flex items-center justify-between rounded-md border border-blue-100 p-4 shadow-sm"
            >
                <div>
                    <h3 className="text-lg ">Google Drive</h3>
                </div>
                <div
                    style={{
                        position: "relative",
                    }}
                    className="flex h-[50px] w-[50px] items-center justify-center "
                >
                    <Image src={"/logos/drive.png"} alt={""} layout="fill" />
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
                className="flex items-center justify-between rounded-md border border-blue-100 p-4 shadow-sm"
            >
                <div>
                    <h3 className="text-lg ">Other Text Documents</h3>
                </div>
                <div
                    style={{
                        position: "relative",
                    }}
                    className="flex h-[50px] w-[50px] items-center justify-center "
                >
                    <Image src={"/logos/txt.png"} alt={""} layout="fill" />
                </div>
            </motion.div>
        </div>
    )
}

export default KnowledgeBaseGrid

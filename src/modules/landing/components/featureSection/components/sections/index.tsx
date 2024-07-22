"use client"
import Image from "next/image"
import { useEffect, useRef } from "react"
import { motion, useAnimation, useInView } from "framer-motion"

const Section = ({
    children,
    sectionName,
    title,
    desc,
    imgURL,
    mask,
}: {
    children: React.ReactNode
    sectionName: string
    title: string
    desc: string
    imgURL: string
    mask?: boolean
}) => {
    const mainRef = useRef(null)
    const isInView = useInView(mainRef, { once: true })
    const animController = useAnimation()

    useEffect(() => {
        if (isInView) {
            animController.start("visible")
        }
    }, [isInView])
    return (
        <>
            <div className="flex  min-h-[500px]  flex-col gap-12  md:flex-row md:gap-20">
                <div className="flex w-full" ref={mainRef}>
                    <div className="relative flex flex-col items-center pb-1">
                        <div className="inline-block">
                            <Image
                                width={200}
                                height={200}
                                src={imgURL}
                                loading="lazy"
                                alt="window icon"
                                className="icon-path"
                            />
                        </div>
                        <motion.div
                            variants={{
                                hidden: { height: 0 },
                                visible: { height: "100%" },
                            }}
                            initial="hidden"
                            animate={animController}
                            transition={{ duration: 2 }}
                            style={{
                                width: "2px",
                                backgroundColor: "#607af9",
                            }}
                        ></motion.div>
                    </div>
                    <div>
                        <div className="h-auto w-full">
                            <motion.p
                                variants={{
                                    hidden: { opacity: 0, x: "-20%" },
                                    visible: { opacity: 1, x: 0 },
                                }}
                                initial="hidden"
                                animate={animController}
                                transition={{ duration: 1, delay: 0 }}
                                style={{ color: "#5470ff" }}
                                className="md:text-md text-base leading-[150%]"
                            >
                                {sectionName}
                            </motion.p>
                        </div>
                        <motion.h2
                            variants={{
                                hidden: { opacity: 0, x: "-20%" },
                                visible: { opacity: 1, x: 0 },
                            }}
                            initial="hidden"
                            animate={animController}
                            transition={{ duration: 1, delay: 0.6 }}
                            className="mt-2 text-base font-bold leading-[150%] md:text-2xl "
                        >
                            {title}
                        </motion.h2>

                        <motion.p
                            variants={{
                                hidden: { opacity: 0, x: "-20%" },
                                visible: { opacity: 1, x: 0 },
                            }}
                            initial="hidden"
                            animate={animController}
                            transition={{ duration: 1, delay: 1.2 }}
                            className="text-darker-green-grey content mt-6 text-sm leading-[200%] text-zinc-400 md:text-lg"
                        >
                            {desc}
                        </motion.p>
                    </div>
                </div>
                <div
                    className={
                        mask
                            ? "relative  h-[600px] w-full overflow-hidden  "
                            : "align-center flex w-full justify-center"
                    }
                >
                    {children}
                </div>
            </div>
        </>
    )
}
export default Section

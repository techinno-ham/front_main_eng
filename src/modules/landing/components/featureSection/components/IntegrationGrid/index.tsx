"use client"
import Image from "next/image"
import "./style.css"
import { motion, useAnimation, useInView } from "framer-motion"
import { useEffect, useRef } from "react"

const IntegrationGrid = () => {
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
            ref={mainRef}
            data-w-id="7e8c62a5-9cdb-d005-1b09-72c08ee57490"
            className="grid-icon-integration"
        >
            <motion.div
                variants={{
                    hidden: { opacity: 0, y: 0 },
                    visible: { opacity: 0.69, y: 0 },
                }}
                initial="hidden"
                animate={animController}
                transition={{ duration: 0.5, delay: 0.1 }}
                id="w-node-_7e8c62a5-9cdb-d005-1b09-72c08ee57491-6e09f0d4"
                className="icon-integration layer2 twilio"
            >
                <Image
                    loading="lazy"
                    width={38}
                    height={38}
                    alt="Twilio logo"
                    src="https://assets-global.website-files.com/635c4eeb78332f7971255095/637b9f8d4f76a721ecc2b5a6_twilio.svg"
                    className="integration-Image"
                />
            </motion.div>
            <motion.div
                variants={{
                    hidden: { opacity: 0, y: 0 },
                    visible: { opacity: 0.3, y: 0 },
                }}
                initial="hidden"
                animate={animController}
                transition={{ duration: 0.5, delay: 0.2 }}
                id="w-node-_7e8c62a5-9cdb-d005-1b09-72c08ee57493-6e09f0d4"
                className="icon-integration layer3 mail"
            >
                <Image
                    loading="lazy"
                    width={38}
                    height={38}
                    alt="gmail Emblem"
                    src="https://assets-global.website-files.com/635c4eeb78332f7971255095/63d7f2a8f023a12d3698f386_gmailIcon.svg"
                    className="integration-Image"
                />
            </motion.div>
            <motion.div
                variants={{
                    hidden: { opacity: 0, y: 0 },
                    visible: { opacity: 0.3, y: 0 },
                }}
                initial="hidden"
                animate={animController}
                transition={{ duration: 0.5, delay: 0.3 }}
                id="w-node-_7e8c62a5-9cdb-d005-1b09-72c08ee57495-6e09f0d4"
                className="icon-integration layer3 salesforce"
            >
                <Image
                    loading="lazy"
                    width={38}
                    height={38}
                    alt="Salesforce Emblem"
                    src="https://assets-global.website-files.com/635c4eeb78332f7971255095/63d7f4635f63fb218ac6e573_Salesforce.svg"
                    className="integration-Image"
                />
            </motion.div>
            <motion.div
                variants={{
                    hidden: { opacity: 0, y: 0 },
                    visible: { opacity: 0.3, y: 0 },
                }}
                initial="hidden"
                animate={animController}
                transition={{ duration: 0.5, delay: 0.4 }}
                id="w-node-_7e8c62a5-9cdb-d005-1b09-72c08ee57497-6e09f0d4"
                className="icon-integration layer3 docs"
            >
                <Image
                    loading="lazy"
                    width={38}
                    height={38}
                    alt="Google Docs"
                    src="https://assets-global.website-files.com/635c4eeb78332f7971255095/63d7686730313d1b1851b9b5_google-docs-svgrepo-com.svg"
                    className="integration-Image"
                />
            </motion.div>
            <motion.div
                variants={{
                    hidden: { opacity: 0, y: 0 },
                    visible: { opacity: 0.1, y: 0 },
                }}
                initial="hidden"
                animate={animController}
                transition={{ duration: 0.5, delay: 0.5 }}
                id="w-node-_7e8c62a5-9cdb-d005-1b09-72c08ee57499-6e09f0d4"
                className="icon-integration layer4 skype"
            >
                <Image
                    loading="lazy"
                    width={38}
                    height={38}
                    alt="Skype Emblem"
                    src="https://assets-global.website-files.com/635c4eeb78332f7971255095/63d7f7b211a832a624536eb4_Skype_logo_(2019%E2%80%93present).svg"
                    className="integration-Image"
                />
            </motion.div>
            <motion.div
                variants={{
                    hidden: { opacity: 0, y: 0 },
                    visible: { opacity: 0.1, y: 0 },
                }}
                initial="hidden"
                animate={animController}
                transition={{ duration: 0.5, delay: 0.6 }}
                id="w-node-_7e8c62a5-9cdb-d005-1b09-72c08ee5749b-6e09f0d4"
                className="icon-integration layer4 zoom"
            >
                <Image
                    loading="lazy"
                    width={38}
                    height={38}
                    alt="Zoom Emblem"
                    src="https://assets-global.website-files.com/635c4eeb78332f7971255095/63d7f87642683947edc21be7_zoom-icon.svg"
                    className="integration-Image"
                />
            </motion.div>
            <motion.div
                variants={{
                    hidden: { opacity: 0, y: 0 },
                    visible: { opacity: 0.1, y: 0 },
                }}
                initial="hidden"
                animate={animController}
                transition={{ duration: 0.5, delay: 0.7 }}
                id="w-node-_7e8c62a5-9cdb-d005-1b09-72c08ee5749d-6e09f0d4"
                className="icon-integration layer4 snapchat"
            >
                <Image
                    loading="lazy"
                    width={38}
                    height={38}
                    alt="Snapchat Emblem"
                    src="https://assets-global.website-files.com/635c4eeb78332f7971255095/63d7f9411fbb0703b9d5a36c_SnapchatIcon.svg"
                    className="integration-Image"
                />
            </motion.div>
            <motion.div
                variants={{
                    hidden: { opacity: 0, y: 0 },
                    visible: { opacity: 0.1, y: 0 },
                }}
                initial="hidden"
                animate={animController}
                transition={{ duration: 0.5, delay: 0.8 }}
                id="w-node-_7e8c62a5-9cdb-d005-1b09-72c08ee5749f-6e09f0d4"
                className="icon-integration layer4 infinite"
            >
                <Image
                    loading="lazy"
                    width={38}
                    height={38}
                    alt="Infinity Icon"
                    src="https://assets-global.website-files.com/635c4eeb78332f7971255095/63d7f9dd2d8befe8d2059e7b_icons8-infinity-symbol-80.webp"
                    className="integration-Image"
                />
            </motion.div>
            <motion.div
                variants={{
                    hidden: { opacity: 0, y: 0 },
                    visible: { opacity: 0.3, y: 0 },
                }}
                initial="hidden"
                animate={animController}
                transition={{ duration: 0.5, delay: 0.9 }}
                id="w-node-_7e8c62a5-9cdb-d005-1b09-72c08ee574a1-6e09f0d4"
                className="icon-integration layer3 whatsapp"
            >
                <Image
                    loading="lazy"
                    width={38}
                    height={38}
                    alt="Whatsapp Emblem"
                    src="https://assets-global.website-files.com/635c4eeb78332f7971255095/63d7f45fde2c90121a9d4d68_whatsapp.svg"
                    className="integration-Image"
                />
            </motion.div>
            <motion.div
                variants={{
                    hidden: { opacity: 0, y: 0 },
                    visible: { opacity: 0.3, y: 0 },
                }}
                initial="hidden"
                animate={animController}
                transition={{ duration: 0.5, delay: 1 }}
                id="w-node-_7e8c62a5-9cdb-d005-1b09-72c08ee574a3-6e09f0d4"
                className="icon-integration layer3 insta"
            >
                <Image
                    loading="lazy"
                    width={38}
                    height={38}
                    alt="Instagram Emblem"
                    src="https://assets-global.website-files.com/635c4eeb78332f7971255095/63d7f58ff8d43b9dd4567113_Instagram_logo_2022.svg"
                    className="integration-Image"
                />
            </motion.div>
            <motion.div
                variants={{
                    hidden: { opacity: 0, y: 0 },
                    visible: { opacity: 0.3, y: 0 },
                }}
                initial="hidden"
                animate={animController}
                transition={{ duration: 0.5, delay: 1.1 }}
                id="w-node-_7e8c62a5-9cdb-d005-1b09-72c08ee574a5-6e09f0d4"
                className="icon-integration layer3 trello"
            >
                <Image
                    loading="lazy"
                    width={38}
                    height={38}
                    alt="Trello Emblem"
                    src="https://assets-global.website-files.com/635c4eeb78332f7971255095/63d763eefd6247d73f40e9bd_Trello%20Logo.svg"
                    className="integration-Image"
                />
            </motion.div>
            <motion.div
                variants={{
                    hidden: { opacity: 0, y: 0 },
                    visible: { opacity: 0.3, y: 0 },
                }}
                initial="hidden"
                animate={animController}
                transition={{ duration: 0.5, delay: 1.2 }}
                id="w-node-_7e8c62a5-9cdb-d005-1b09-72c08ee574a7-6e09f0d4"
                className="icon-integration layer3 wechat"
            >
                <Image
                    loading="lazy"
                    width={38}
                    height={38}
                    alt="WeChat Emblem"
                    src="https://assets-global.website-files.com/635c4eeb78332f7971255095/63d7f72a1470f9fb079f9504_WeChat_PC_App_Icon_200528.webp"
                    className="integration-Image"
                />
            </motion.div>
            <motion.div
                variants={{
                    hidden: { opacity: 0, y: 0 },
                    visible: { opacity: 0.3, y: 0 },
                }}
                initial="hidden"
                animate={animController}
                transition={{ duration: 0.5, delay: 1.3 }}
                id="w-node-_7e8c62a5-9cdb-d005-1b09-72c08ee574a9-6e09f0d4"
                className="icon-integration layer3 linkedin"
            >
                <Image
                    loading="lazy"
                    width={38}
                    height={38}
                    alt="LinkedIn Emblem"
                    src="https://assets-global.website-files.com/635c4eeb78332f7971255095/63d7f65c5ee35bc356ba9233_linkedin-icon.svg"
                    className="integration-Image"
                />
            </motion.div>
            <motion.div
                variants={{
                    hidden: { opacity: 0, y: 0 },
                    visible: { opacity: 0.69, y: 0 },
                }}
                initial="hidden"
                animate={animController}
                transition={{ duration: 0.5, delay: 1.4 }}
                id="w-node-_7e8c62a5-9cdb-d005-1b09-72c08ee574ab-6e09f0d4"
                className="icon-integration layer2 messenger"
            >
                <Image
                    loading="lazy"
                    width={38}
                    height={38}
                    alt="Facebook Messenger Emblem"
                    src="https://assets-global.website-files.com/635c4eeb78332f7971255095/637bccb2bab43ba1068d52c0_facebook-messenger-3.svg"
                    className="integration-Image"
                />
            </motion.div>
            <motion.div
                variants={{
                    hidden: { opacity: 0, y: 0 },
                    visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                animate={animController}
                transition={{ duration: 0.5, delay: 1.5 }}
                id="w-node-_7e8c62a5-9cdb-d005-1b09-72c08ee574ad-6e09f0d4"
                className="icon-integration layer1 slack"
            >
                <Image
                    loading="lazy"
                    width={38}
                    height={38}
                    alt="Slack logo"
                    src="https://assets-global.website-files.com/635c4eeb78332f7971255095/637bccb21702c546da8527c8_slack-new-logo.svg"
                    className="integration-Image"
                />
            </motion.div>
            <motion.div
                variants={{
                    hidden: { opacity: 0, y: 0 },
                    visible: { opacity: 0.69, y: 0 },
                }}
                initial="hidden"
                animate={animController}
                transition={{ duration: 0.5, delay: 1.6 }}
                id="w-node-_7e8c62a5-9cdb-d005-1b09-72c08ee574af-6e09f0d4"
                className="icon-integration layer2 telegram"
            >
                <Image
                    loading="lazy"
                    width={38}
                    height={38}
                    alt="Telegram logo"
                    src="https://assets-global.website-files.com/635c4eeb78332f7971255095/637bccb2241f010d200fa2f9_telegram-1.svg"
                    className="integration-Image"
                />
            </motion.div>
            <motion.div
                variants={{
                    hidden: { opacity: 0, y: 0 },
                    visible: { opacity: 0.69, y: 0 },
                }}
                initial="hidden"
                animate={animController}
                transition={{ duration: 0.5, delay: 1.7 }}
                id="w-node-_7e8c62a5-9cdb-d005-1b09-72c08ee574b1-6e09f0d4"
                className="icon-integration layer2 uipath"
            >
                <Image
                    loading="lazy"
                    width={38}
                    height={38}
                    alt="UI psth Emblem"
                    src="https://assets-global.website-files.com/635c4eeb78332f7971255095/63d7fc1e90ee3ccfba2efecf_UIPathIcon.svg"
                    className="integration-Image"
                />
            </motion.div>
            <motion.div
                variants={{
                    hidden: { opacity: 0, y: 0 },
                    visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                animate={animController}
                transition={{ duration: 0.5, delay: 1.8 }}
                id="w-node-_7e8c62a5-9cdb-d005-1b09-72c08ee574b3-6e09f0d4"
                className="icon-integration layer1 zendesk"
            >
                <Image
                    loading="lazy"
                    width={38}
                    height={38}
                    alt="Zend Emblem"
                    src="https://assets-global.website-files.com/635c4eeb78332f7971255095/63d7f45bca6ca652627de146_zendeskIcon.svg"
                    className="integration-Image"
                />
            </motion.div>
            <motion.div
                variants={{
                    hidden: { opacity: 0, y: 0 },
                    visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                animate={animController}
                transition={{ duration: 0.5, delay: 0 }}
                id="w-node-_7e8c62a5-9cdb-d005-1b09-72c08ee574b5-6e09f0d4"
                className="icon-integration bp"
            >
                <Image
                    loading="lazy"
                    width={38}
                    height={38}
                    alt="White botpress Emblem"
                    src="https://assets-global.website-files.com/635c4eeb78332f7971255095/63d76f6d32dbbf24052effa2_BPRecess.svg"
                    className="integration-Image /bp"
                />
            </motion.div>
            <motion.div
                variants={{
                    hidden: { opacity: 0, y: 0 },
                    visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                animate={animController}
                transition={{ duration: 0.5, delay: 2 }}
                id="w-node-_7e8c62a5-9cdb-d005-1b09-72c08ee574b7-6e09f0d4"
                className="icon-integration layer1 zapier"
            >
                <Image
                    loading="lazy"
                    width={38}
                    height={38}
                    alt="Zapier Icon"
                    src="https://assets-global.website-files.com/635c4eeb78332f7971255095/63d7fc13afe7f9b60079bdc0_zapier-icon.svg"
                    className="integration-Image"
                />
            </motion.div>
            <motion.div
                variants={{
                    hidden: { opacity: 0, y: 0 },
                    visible: { opacity: 0.69, y: 0 },
                }}
                initial="hidden"
                animate={animController}
                transition={{ duration: 0.5, delay: 2.1 }}
                id="w-node-_7e8c62a5-9cdb-d005-1b09-72c08ee574b9-6e09f0d4"
                className="icon-integration layer2 twitter"
            >
                <Image
                    loading="lazy"
                    width={38}
                    height={38}
                    alt="Twitter Emblem"
                    src="https://assets-global.website-files.com/635c4eeb78332f7971255095/63d7661854c09d2cca8960d9_Logo%20blue.svg"
                    className="integration-Image"
                />
            </motion.div>
            <motion.div
                variants={{
                    hidden: { opacity: 0, y: 0 },
                    visible: { opacity: 0.69, y: 0 },
                }}
                initial="hidden"
                animate={animController}
                transition={{ duration: 0.5, delay: 2.2 }}
                id="w-node-_7e8c62a5-9cdb-d005-1b09-72c08ee574bb-6e09f0d4"
                className="icon-integration layer2 teams"
            >
                <Image
                    loading="lazy"
                    width={38}
                    height={38}
                    sizes="38px"
                    src="https://assets-global.website-files.com/635c4eeb78332f7971255095/637b9f8d4f76a72854c2b597_Microsoft_Office_Teams_(2018%E2%80%93present).svg.webp"
                    alt="Microsoft Teams logo"
                    className="integration-Image"
                />
            </motion.div>
            <motion.div
                variants={{
                    hidden: { opacity: 0, y: 0 },
                    visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                animate={animController}
                transition={{ duration: 0.5, delay: 2.3 }}
                id="w-node-_7e8c62a5-9cdb-d005-1b09-72c08ee574bd-6e09f0d4"
                className="icon-integration layer1 github"
            >
                <Image
                    loading="lazy"
                    width={38}
                    height={38}
                    sizes="38px"
                    src="https://assets-global.website-files.com/635c4eeb78332f7971255095/63d76683debdd5043aa64bc0_GithubIcon.webp"
                    alt="Git Hub Emblem"
                    className="integration-Image"
                />
            </motion.div>
            <motion.div
                variants={{
                    hidden: { opacity: 0, y: 0 },
                    visible: { opacity: 0.69, y: 0 },
                }}
                initial="hidden"
                animate={animController}
                transition={{ duration: 0.5, delay: 2.4 }}
                id="w-node-_7e8c62a5-9cdb-d005-1b09-72c08ee574bf-6e09f0d4"
                className="icon-integration layer2 discord"
            >
                <Image
                    loading="lazy"
                    width={38}
                    height={38}
                    alt="Discord Emblem"
                    src="https://assets-global.website-files.com/635c4eeb78332f7971255095/63d76718883e4549d223becd_discord-icon-svgrepo-com.svg"
                    className="integration-Image"
                />
            </motion.div>
            <motion.div
                variants={{
                    hidden: { opacity: 0, y: 0 },
                    visible: { opacity: 0.69, y: 0 },
                }}
                initial="hidden"
                animate={animController}
                transition={{ duration: 0.5, delay: 2.5 }}
                id="w-node-_7e8c62a5-9cdb-d005-1b09-72c08ee574c1-6e09f0d4"
                className="icon-integration layer2 vonage"
            >
                <Image
                    loading="lazy"
                    width={38}
                    height={38}
                    alt="Vonage"
                    src="https://assets-global.website-files.com/635c4eeb78332f7971255095/63d72e44dbdc8613fffbe9c1_Vonage.svg"
                    className="integration-Image"
                />
            </motion.div>
        </div>
    )
}

export default IntegrationGrid

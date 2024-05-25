import React from "react"
import "./style.css"
import Image from "next/image"

const Footer = () => {
    return (
        <footer className="footer-main">
            <div className="container mx-auto px-4" >
                <div className="wrapper-section">
                    <div className="grid-footer">
                        <div className="column w-node">
                            <Image
                                alt="BotPenguin AI Chatbot Maker"
                                className="bot-Image"
                                width={100}
                                height={100}
                                src="https://cdn.botpenguin.com/assets/website/header/BotPenguinV1-webp-new.webp"
                            />
                            <p className="copyright-content mt-3">
                                BotPenguin.
                            </p>
                            <div className="social-container">
                                <a target="_blank" className="tw social-btn">
                                    <Image
                                        alt="BotPenguin AI Chatbot Maker"
                                        loading="lazy"
                                        width={50}
                                        height={50}
                                        className="footer-logo"
                                        src="https://cdn.botpenguin.com/assets/website/images/twitter.svg"
                                    />
                                    {/* <span className="material-icons up-arrow">call_made</span> */}
                                </a>
                                <a target="_blank" className="insta social-btn">
                                    <Image
                                        alt="BotPenguin AI Chatbot Maker"
                                        loading="lazy"
                                        width={50}
                                        height={50}
                                        className="footer-logo"
                                        src="https://cdn.botpenguin.com/assets/website/images/instagram.svg"
                                    />
                                    {/* <span className="material-icons up-arrow">call_made</span> */}
                                </a>

                                <a target="_blank" className="in social-btn">
                                    <Image
                                        alt="BotPenguin AI Chatbot Maker"
                                        loading="lazy"
                                        width={50}
                                        height={50}
                                        className="footer-logo"
                                        src="https://cdn.botpenguin.com/assets/website/images/linkdin.svg"
                                    />
                                    {/* <span className="material-icons up-arrow">call_made</span> */}
                                </a>
                            </div>
                        </div>
                        <div className="column w-node">
                            <div className="title-section-footer">
                                <p className="paragraph-small-main">
                                    <strong>محصول</strong>
                                </p>
                            </div>
                            <hr className="list-line"></hr>
                            <div className="box-links-footer">
                                <a href="/pricing" className="link-footer">
                                    قیمت‌
                                </a>
                                <a
                                    href="/features/gpt-native-engine"
                                    className="link-footer"
                                >
                                    امنیت
                                </a>
                                <a
                                    href="/features/conversation-studio"
                                    className="link-footer"
                                >
                                    همکاران
                                </a>
                                <a
                                    href="https://botpress.com/docs/cloud/getting-started/languages/"
                                    target="_blank"
                                    className="link-footer"
                                >
                                    زبان ها
                                </a>
                            </div>
                        </div>
                        <div className="column w-node">
                            <div className="title-section-footer">
                                <p className="paragraph-small-main">
                                    <strong>منابع </strong>
                                </p>
                            </div>
                            <hr className="list-line"></hr>
                            <div className="box-links-footer">
                                <a href="/pricing" className="link-footer">
                                    API
                                </a>
                                <a
                                    href="/features/gpt-native-engine"
                                    className="link-footer"
                                >
                                    تماس با ما
                                </a>
                                <a
                                    href="/features/conversation-studio"
                                    className="link-footer"
                                >
                                    راهنما
                                </a>
                                <a
                                    href="https://botpress.com/docs/cloud/getting-started/languages/"
                                    target="_blank"
                                    className="link-footer"
                                >
                                    وبلاگ
                                </a>
                            </div>
                        </div>
                        <div className="column w-node">
                            <div className="title-section-footer">
                                <p className="paragraph-small-main">
                                    <strong>شرکت</strong>
                                </p>
                            </div>
                            <hr className="list-line"></hr>

                            <div className="box-links-footer">
                                <a href="/pricing" className="link-footer">
                                    سیاست حفظ حریم خصوصی (Privacy Policy)
                                </a>
                                <a
                                    href="/features/gpt-native-engine"
                                    className="link-footer"
                                >
                                    شرایط خدمات (Terms of Service)
                                </a>
                                <a
                                    href="/features/conversation-studio"
                                    className="link-footer"
                                >
                                    توافقنامه پردازش داده (DPA)
                                </a>
                                <a
                                    href="https://botpress.com/docs/cloud/getting-started/languages/"
                                    target="_blank"
                                    className="link-footer"
                                >
                                    سیاست کوکی (Cookie Policy)
                                </a>
                            </div>
                        </div>
                        {/* <div className="column w-node">
              <div className="title-section-footer">
                <p className="paragraph-small-main">
                  <strong>Product</strong>
                </p>
              </div>
              <hr className="list-line"></hr>
              <div className="box-links-footer">
                <a href="/pricing" className="link-footer">
                  Pricing
                </a>
                <a href="/features/gpt-native-engine" className="link-footer">
                  Engine
                </a>
                <a href="/features/conversation-studio" className="link-footer">
                  Studio
                </a>
                <a
                  href="https://botpress.com/docs/cloud/getting-started/languages/"
                  target="_blank"
                  className="link-footer"
                >
                  Languages
                </a>
              </div>
            </div>
            <div className="column w-node">
              <div className="title-section-footer">
                <p className="paragraph-small-main">
                  <strong>Product</strong>
                </p>
              </div>
              <hr className="list-line"></hr>
              <div className="box-links-footer">
                <a href="/pricing" className="link-footer">
                  Pricing
                </a>
                <a href="/features/gpt-native-engine" className="link-footer">
                  Engine
                </a>
                <a href="/features/conversation-studio" className="link-footer">
                  Studio
                </a>
                <a
                  href="https://botpress.com/docs/cloud/getting-started/languages/"
                  target="_blank"
                  className="link-footer"
                >
                  Languages
                </a>
              </div>
            </div> */}
                    </div>
                </div>
            </div>
            <div className="text-bottom-footer">
                <Image
                    width={20}
                    height={20}
                    src="https://assets-global.website-files.com/635c4eeb78332f7971255095/6558efd9ceb72f12e75821b5_check-circle-green.svg"
                    loading="lazy"
                    alt=""
                />
                <div className="text-last-footer">GDPR&nbsp;Compliant</div>
                <div className="text-last-footer">© Botpress 2024</div>
            </div>
        </footer>
    )
}

export default Footer

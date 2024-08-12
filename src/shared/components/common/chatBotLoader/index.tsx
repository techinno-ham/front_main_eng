import React from "react"
import Lottie from "lottie-react"
import animationData from "../../../../../public/lottie/laodingChat.json"

const CahtBotLoader = () => {
    return (
        <div className="loader">
            <Lottie
                animationData={animationData}
                height={80}
                width={80}
                loop={true}
                style={{ height: "50px" }}
                autoPlay={true}
                rendererSettings={{
                    preserveAspectRatio: "xMidYMid slice",
                }}
            />
        </div>
    )
}

export default CahtBotLoader

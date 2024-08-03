import React from "react"
import Lottie from "lottie-react"
import animationData from "../../../../../public/lottie/notFoundChat.json"

const EmptyChat = () => {
    return (
        <div className="loader">
            <Lottie
                animationData={animationData}
                height={200}
                width={200}
                loop={true}
                style={{ height: "260px",width:"350px"}}
                autoPlay={true}
                rendererSettings={{
                    preserveAspectRatio: "xMidYMid slice",
                }}
            />
        </div>
    )
}

export default EmptyChat;

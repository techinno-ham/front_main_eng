import React from "react"
import Lottie from "lottie-react"
import animationData from "../../../../../public/lottie/loader.json"

const LoaderLottie = () => {
    return (
        <div className="loader">
            <Lottie
                animationData={animationData}
                height={400}
                width={400}
                loop={true}
                style={{ height: "100px" }}
                autoPlay={true}
                rendererSettings={{
                    preserveAspectRatio: "xMidYMid slice",
                }}
            />
        </div>
    )
}

export default LoaderLottie

import React from "react"
import Lottie from "lottie-react"
import animationData from "../../../../../public/lottie/inviteFriends.json"

const InviteFriends = () => {
    return (
        <div className="flex justify-center">
            <Lottie
                animationData={animationData}
                height={200}
                width={200}
                loop={true}
                style={{ height: "350px",width:"350px" }}
                autoPlay={true}
                rendererSettings={{
                    preserveAspectRatio: "xMidYMid slice",
                }}
            />
        </div>
    )
}

export default InviteFriends;

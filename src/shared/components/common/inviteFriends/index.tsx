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
                style={{ height: "400px",width:"400px" }}
                autoPlay={true}
                rendererSettings={{
                    preserveAspectRatio: "xMidYMid slice",
                }}
            />
        </div>
    )
}

export default InviteFriends;

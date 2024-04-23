import Image from "next/image"

const IntroduceSections = () => {
    return (
        <>
            <div className="relative  top-28  h-auto  overflow-hidden text-center ">
                <div>
                    <Image
                        src="/images/rightBlur.png"
                        height="100"
                        width="650"
                        alt="Logo"
                    />
 <Image
                        src="/images/rightBlur.png"
                           height="100"
                        width="300"
                        alt="Logo"
                    />
                </div>
            </div>
        </>
    )
}

export default IntroduceSections

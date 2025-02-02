import React, { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import service from "@/src/shared/services/service"
import { toast } from "sonner"
import { DirectInbox } from "iconsax-react"

const Answer = () => {
    const { register, handleSubmit, setValue } = useForm()
    const [isLoading, setIsLoading] = useState(false)

    return (
        <div className="flex justify-center items-center h-[250px]">
            <div className="flex flex-col justify-center items-center gap-2">
                <DirectInbox size={45} color="gray"/>
                <p className="font-medium text-2xl">No Answer</p>
            </div>
        </div>
    )
}

export default Answer

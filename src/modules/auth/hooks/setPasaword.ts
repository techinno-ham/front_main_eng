import { useRouter } from 'nextjs-toploader/app';
import { useState } from "react"
import services from "../services"
import { setCookie } from "nookies"
import { toast } from "sonner"
import useUserStore from "@/src/shared/store/userStore"

const useSetPassword = () => {
    const [isLoading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const router = useRouter()
  
    const changePassword = async (newPassword: string) => {
        setLoading(true)
        setError(null)
        try {
        const res= await services.setPssword(newPassword);
          toast.success("Your password has been successfully set.")
          router.push("/mybots")
   
        } catch (err: any) {
            if (err.message === "Email already registered") {
                toast.error("Your email is already registered.")
            } else {
                toast.error("There was an issue at this stage.")
            }
        } finally {
            setLoading(false)
        }
    }

    return {
        changePassword,
        isLoading,
        error,
    }
}
export default useSetPassword;

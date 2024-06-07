import { useRouter } from 'next/navigation'
import { useState } from "react";
import services from "../services";


const useRegister = () => {
    const [isLoading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const router = useRouter();


    const register = async (user: any) => {
        setLoading(true);
        setError(null);
        try {
            await services.register(user);
            router.push('/auth/login');
          } catch (err: any) {
            setError(err.message);
          } finally {
            setLoading(false);
          }
    };

    return {
        register,
        isLoading,
        error,
      };


};
export default useRegister;
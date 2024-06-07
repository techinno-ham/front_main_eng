import { useRouter } from 'next/navigation'
import { useState } from "react";
import services from "../services";


const useLogin = () => {
    const [isLoading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const router = useRouter();


    const login = async (user: any) => {
        setLoading(true);
        setError(null);
        try {
            const res = await services.login(user);
            localStorage.setItem('accessToken', res.data.accessToken);
            localStorage.setItem('refreshToken',res. data.refreshToken);
            router.push('/mybots');
          } catch (err: any) {
            setError(err.message);
          } finally {
            setLoading(false);
          }
    };

    return {
        login,
        isLoading,
        error,
      };


};
export default useLogin;
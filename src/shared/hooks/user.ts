
'use client';

import { useEffect, useState } from "react";
import Services from "../services/service";
import { usePathname, useRouter } from 'next/navigation';

const useUser = () => {
    const [user, setUser] = useState({});
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const pathname = usePathname();
    const router = useRouter();

    const checkAuthUser = async () => {
        setIsLoading(true);
        try {
            const cookieFallback = localStorage.getItem("accessToken");
            if (!cookieFallback) {
                return false;
            }
            const res = await Services.checkToken();
            if (res) {
                setUser({
                    name: "mahdiyar"
                });
                setIsAuthenticated(true);
                return true;
            }
            return false;
        } catch (error) {
            console.error(error);
            return false;
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        const checkLogin = async () => {
            const isLogin = await checkAuthUser();
            console.log(isLogin)
            if (!isLogin && (pathname.includes('panel') || pathname.includes('mybots'))) {
                router.push('/auth/login'); 
            }
        };
        checkLogin();
    }, [pathname, router]);

    return { user, isAuthenticated, isLoading };
};

export default useUser;

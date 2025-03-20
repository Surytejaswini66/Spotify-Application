import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { axiosInstance } from "@/lib/axios";
import { useAuthStore } from "@/stores/useAuthStore";
import { useChatStore } from "@/stores/useChatStore";
import { useAuth } from "@clerk/clerk-react";
import { Loader } from "lucide-react";
import { useEffect, useState } from "react";
const updateApiToken = (token) => {
    if (token)
        axiosInstance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    else
        delete axiosInstance.defaults.headers.common["Authorization"];
};
const AuthProvider = ({ children }) => {
    const { getToken, userId } = useAuth();
    const [loading, setLoading] = useState(true);
    const { checkAdminStatus } = useAuthStore();
    const { initSocket, disconnectSocket } = useChatStore();
    useEffect(() => {
        const initAuth = async () => {
            try {
                const token = await getToken();
                updateApiToken(token);
                if (token) {
                    await checkAdminStatus();
                    // init socket
                    if (userId)
                        initSocket(userId);
                }
            }
            catch (error) {
                updateApiToken(null);
                console.log("Error in auth provider", error);
            }
            finally {
                setLoading(false);
            }
        };
        initAuth();
        // clean up
        return () => disconnectSocket();
    }, [getToken, userId, checkAdminStatus, initSocket, disconnectSocket]);
    if (loading)
        return (_jsx("div", { className: 'h-screen w-full flex items-center justify-center', children: _jsx(Loader, { className: 'size-8 text-emerald-500 animate-spin' }) }));
    return _jsx(_Fragment, { children: children });
};
export default AuthProvider;

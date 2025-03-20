import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { SignedOut, UserButton } from "@clerk/clerk-react";
import { LayoutDashboardIcon } from "lucide-react";
import { Link } from "react-router-dom";
import SignInOAuthButtons from "./SignInOAuthButtons";
import { useAuthStore } from "@/stores/useAuthStore";
import { cn } from "@/lib/utils";
import { buttonVariants } from "./ui/button";
const Topbar = () => {
    const { isAdmin } = useAuthStore();
    console.log({ isAdmin });
    return (_jsxs("div", { className: 'flex items-center justify-between p-4 sticky top-0 bg-zinc-900/75 \n      backdrop-blur-md z-10\n    ', children: [_jsxs("div", { className: 'flex gap-2 items-center', children: [_jsx("img", { src: '/spotify.png', className: 'size-8', alt: 'Spotify logo' }), "Spotify"] }), _jsxs("div", { className: 'flex items-center gap-4', children: [isAdmin && (_jsxs(Link, { to: "/admin", className: cn(buttonVariants({ variant: "outline" })), children: [_jsx(LayoutDashboardIcon, { className: 'size-4  mr-2' }), "Admin Dashboard"] })), _jsx(SignedOut, { children: _jsx(SignInOAuthButtons, {}) }), _jsx(UserButton, {})] })] }));
};
export default Topbar;

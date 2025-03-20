import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import Topbar from "@/components/Topbar";
import { useChatStore } from "@/stores/useChatStore";
import { useUser } from "@clerk/clerk-react";
import { useEffect } from "react";
import UsersList from "./components/UsersList";
import ChatHeader from "./components/ChatHeader";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import MessageInput from "./components/MessageInput";
const formatTime = (date) => {
    return new Date(date).toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
    });
};
const ChatPage = () => {
    const { user } = useUser();
    const { messages, selectedUser, fetchUsers, fetchMessages } = useChatStore();
    useEffect(() => {
        if (user)
            fetchUsers();
    }, [fetchUsers, user]);
    useEffect(() => {
        if (selectedUser)
            fetchMessages(selectedUser.clerkId);
    }, [selectedUser, fetchMessages]);
    console.log({ messages });
    return (_jsxs("main", { className: 'h-full rounded-lg bg-gradient-to-b from-zinc-800 to-zinc-900 overflow-hidden', children: [_jsx(Topbar, {}), _jsxs("div", { className: 'grid lg:grid-cols-[300px_1fr] grid-cols-[80px_1fr] h-[calc(100vh-180px)]', children: [_jsx(UsersList, {}), _jsx("div", { className: 'flex flex-col h-full', children: selectedUser ? (_jsxs(_Fragment, { children: [_jsx(ChatHeader, {}), _jsx(ScrollArea, { className: 'h-[calc(100vh-340px)]', children: _jsx("div", { className: 'p-4 space-y-4', children: messages.map((message) => (_jsxs("div", { className: `flex items-start gap-3 ${message.senderId === user?.id ? "flex-row-reverse" : ""}`, children: [_jsx(Avatar, { className: 'size-8', children: _jsx(AvatarImage, { src: message.senderId === user?.id
                                                            ? user.imageUrl
                                                            : selectedUser.imageUrl }) }), _jsxs("div", { className: `rounded-lg p-3 max-w-[70%]
													${message.senderId === user?.id ? "bg-green-500" : "bg-zinc-800"}
												`, children: [_jsx("p", { className: 'text-sm', children: message.content }), _jsx("span", { className: 'text-xs text-zinc-300 mt-1 block', children: formatTime(message.createdAt) })] })] }, message._id))) }) }), _jsx(MessageInput, {})] })) : (_jsx(NoConversationPlaceholder, {})) })] })] }));
};
export default ChatPage;
const NoConversationPlaceholder = () => (_jsxs("div", { className: 'flex flex-col items-center justify-center h-full space-y-6', children: [_jsx("img", { src: '/spotify.png', alt: 'Spotify', className: 'size-16 animate-bounce' }), _jsxs("div", { className: 'text-center', children: [_jsx("h3", { className: 'text-zinc-300 text-lg font-medium mb-1', children: "No conversation selected" }), _jsx("p", { className: 'text-zinc-500 text-sm', children: "Choose a friend to start chatting" })] })] }));

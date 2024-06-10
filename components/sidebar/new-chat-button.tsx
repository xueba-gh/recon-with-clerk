"use client";

import { Button } from "@/components/ui/button";
import { api } from "@/convex/_generated/api";
import ConvexClientProvider from "@/app/providers/convex-client-provider";
import { useMutation } from "convex/react";
import { PlusCircle, SquarePen } from "lucide-react";

export const NewChatButton = () => {
    return (
        <ConvexClientProvider>
            <NewChatButtonContent />
        </ConvexClientProvider>
    );
};

const NewChatButtonContent = () => {
    const create = useMutation(api.chats.create);

    const handleAdd = () => {
        create({});
    };

    return (
        <Button
            className="w-full flex justify-start items-center bg-inherit hover:bg-inherit p-0"
            onClick={handleAdd}
        >
            <PlusCircle className="w-5 h-5" />
            <p className="font-semibold text-start ml-3">New Chat</p>
            <SquarePen className="w-4 h-4 ml-auto" />
        </Button>
    );
};

// Mark the parent component as a Client Component
// "use client";
// import { api } from "@/convex/_generated/api";
// import { useQuery, ConvexProvider, ConvexClient } from "convex/react"; // Update ConvexReactClient to ConvexClient
// import { useSearchParams } from "next/navigation";
// import { ChatBox } from "./chat-box";

// export const ChatList = () => {
//     const client = new ConvexClient("https://bright-bass-928.convex.cloud"); // Use ConvexClient instead of ConvexReactClient
//     const chats = useQuery(api.chats.list, { client });
//     const searchParams = useSearchParams(); 

//     if (chats === undefined) {
//         return <div>Loading...</div>;
//     }

//     if (chats === null) {
//         return null;
//     }
    
//     let chatId: string | undefined;
//     if (searchParams) {
//         chatId = searchParams.get("chatId") ?? undefined;
//     }

//     return (
//         <div className="flex flex-col flex-1 overflow-y-auto">
//             {chats.map((chat) => (
//                 <ChatBox
//                     key={chat._id}
//                     chat={chat}
//                     selected={chatId === chat._id}
//                 />
//             ))}
//         </div>
//     );
// };

// // Wrap the ChatList component with ConvexProvider and provide the client prop
// export default function ChatListWrapper() {
//     return (
//         <ConvexProvider client={new ConvexClient("https://bright-bass-928.convex.cloud")}>
//             <ChatList />
//         </ConvexProvider>
//     );
// }
// components/sidebar/chat-list.tsx
"use client";

import { api } from "@/convex/_generated/api";
import { useQuery } from "convex/react";
import { useSearchParams } from "next/navigation";
import { ChatBox } from "./chat-box";

export const ChatList = () => {
  const chats = useQuery(api.chats.list);
  const searchParams = useSearchParams();

  if (chats === undefined) {
    return <div>Loading...</div>;
  }

  if (chats === null) {
    return null;
  }

  let chatId: string | undefined;
  if (searchParams) {
    chatId = searchParams.get("chatId") ?? undefined;
  }

  return (
    <div className="flex flex-col flex-1 overflow-y-auto">
      {chats.map((chat) => (
        <ChatBox key={chat._id} chat={chat} selected={chatId === chat._id} />
      ))}
    </div>
  );
};

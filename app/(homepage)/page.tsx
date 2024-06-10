// "use client";

// import { Chatbot } from "@/components/Chatbot";
// import { api } from "@/convex/_generated/api";
// import { useMutation, useQueries, useQuery } from "convex/react";
// import { useRouter } from "next/navigation";
// import { useEffect } from "react";

// const Homepage = () => {
//     const storeUser = useMutation(api.users.store);
//     const router = useRouter();
//     useEffect(() => {
//         const fetch = async () => {
//             const chatId = await storeUser({});
//             router.push(`/chat/${chatId}`)
//         }
//         fetch();
//     }, [storeUser, router])

//     return (
//         <div className="bg-neutral-800 h-full text-neutral-400 text-3xl text-center px-11 pt-11">Creating a new chat</div>
//     );
// };

// export default Homepage;
"use client";
import { api } from "@/convex/_generated/api";
import { useMutation, useQueries, useQuery } from "convex/react";
import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";

const Homepage = () => {
  const storeUser = useMutation(api.users.store);
  const router = useRouter();
  const nodeRef = useRef(null);

  useEffect(() => {
    const fetch = async () => {
      const chatId = await storeUser({});
      router.push(`/chat/${chatId}`);
    };
    fetch();
  }, [storeUser, router]);

  return (
    
    <div className="bg-neutral-800 h-full text-neutral-400 text-3xl text-center px-11 pt-11" ref={nodeRef}>
    </div>
    
  );
};



export default Homepage;

// export default function HomePage() {
//   return (
//     <div>
//       <h1>Welcome to ReconAI</h1>
//       <Chatbot />
//     </div>
//   );
// }
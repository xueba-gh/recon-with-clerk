"use client";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { ConvexProvider, ConvexReactClient, useConvex } from "convex/react";
//components
import { Button } from "@/components/ui/button";
import { api } from "@/convex/_generated/api";
import ConvexClientProvider from "@/app/providers/convex-client-provider";
import { useMutation } from "convex/react";
import { PlusCircle, SquarePen } from "lucide-react";
//import { Chatbot } from "@/components/Chatbot";
import { Sidebar } from "@/components/sidebar";

const inter = Inter({ subsets: ["latin"] });

const Content: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <div className="flex flex-col flex-grow p-10">{children}</div>;
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const client = new ConvexReactClient("https://bright-bass-928.convex.cloud/");

  return (
    <html lang="en">
      <body className={inter.className}>
        <ClerkProvider>
          <ConvexProvider client={client}>
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
              <div className="flex h-screen min-w-fit">
                <div>
                  <Sidebar />
                </div>
                <div className="flex flex-grow overflow-y-auto">
                <Content>{children}</Content>
                </div>
              </div>
            </ThemeProvider>
          </ConvexProvider>
        </ClerkProvider>
      </body>
    </html>
  );
}

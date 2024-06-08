
// "use client";
// import type { Metadata } from "next";
// import { Inter } from "next/font/google";
// import { ThemeProvider } from "@/components/theme-provider";
// import "./globals.css";
// import { ClerkProvider } from '@clerk/nextjs';
// import { ConvexProvider, ConvexClient } from "convex/react";

// const inter = Inter({ subsets: ["latin"] });


// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   const client = new ConvexClient("https://bright-bass-928.convex.cloud/");

//   return (
//     <html lang="en">
//       <body className={inter.className}>
//         <ClerkProvider>
//           <ConvexProvider client={client}>
//             <ThemeProvider
//               attribute="class"
//               defaultTheme="system"
//               enableSystem
//               disableTransitionOnChange
//             >
//               {children}
//             </ThemeProvider>
//           </ConvexProvider>
//         </ClerkProvider>
//       </body>
//     </html>
//   );
// }
"use client";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { ConvexProvider, ConvexReactClient, useConvex } from "convex/react";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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
              {children}
            </ThemeProvider>
          </ConvexProvider>
        </ClerkProvider>
      </body>
    </html>
  );
}
// // _app.tsx

// import './styles/globals.css';
// import type { AppProps } from 'next/app';
// import { ClerkProvider, RedirectToSignIn, SignedIn, SignedOut } from '@clerk/clerk-react';
// import { useRouter } from 'next/router';
// import SWRProvider from './providers/SWRProvider';

// // Get Clerk frontend API key from environment variable
// const frontendApi = process.env.NEXT_PUBLIC_CLERK_FRONTEND_API;

// const publicPages = ['/sign-in/[[...sign-in]]', '/sign-up', '/'];

// const MyApp = ({ Component, pageProps }: AppProps) => {
//   const router = useRouter();
//   const isPublicPage = publicPages.includes(router.pathname);

//   return (
//     <ClerkProvider frontendApi={frontendApi} navigate={(to) => router.push(to)}>
//       <SWRProvider>
//         {isPublicPage ? (
//           <Component {...pageProps} />
//         ) : (
//           <>
//             <SignedIn>
//               <Component {...pageProps} />
//             </SignedIn>
//             <SignedOut>
//               <RedirectToSignIn />
//             </SignedOut>
//           </>
//         )}
//       </SWRProvider>
//     </ClerkProvider>
//   );
// };

// export default MyApp;

import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware({
  //routes
 // publicRoutes:["/"],
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
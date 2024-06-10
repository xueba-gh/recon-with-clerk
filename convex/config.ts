
import { ConvexReactClient } from 'convex/react';
import { ConvexProvider } from 'convex/react';

const convexUrl = process.env.NEXT_PUBLIC_CONVEX_URL;

if (!convexUrl) {
  throw new Error('NEXT_PUBLIC_CONVEX_URL environment variable not set.');
  console.log(convexUrl)
}

const convexClient = new ConvexReactClient(convexUrl);

export { convexClient, ConvexProvider };
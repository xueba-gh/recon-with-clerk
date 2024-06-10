import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import { MobileSidebar } from '../components/mobile-sidebar';




export default function Home() {
  return (
    <div>
      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <UserButton />
        <div>
          <h1>Welcome to Recon AI</h1>
          {/*<p>Here you can start chatting...</p>*/}
          {/* You can replace the following with your actual chat component */}
          <textarea placeholder="Type your message here..."></textarea>
          <button>Send</button>
          <MobileSidebar /> {/* Integrate MobileSidebar component */}
        </div>
      </SignedIn>
    </div>
  );
}

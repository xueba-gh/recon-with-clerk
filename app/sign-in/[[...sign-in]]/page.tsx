// app/sign-in/page.tsx

import { SignIn } from "@clerk/nextjs";
import { dark } from "@clerk/themes";

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  },
};

export default function SignInPage() {
  return (
    <div style={styles.container}>
      <SignIn
        appearance={{
          baseTheme: dark,
        }}
        path="/sign-in"
      />
    </div>
  );
}
